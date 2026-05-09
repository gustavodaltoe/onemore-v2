#!/usr/bin/env sh
set -eu

baseline_file=.sentrux/baseline.json
baseline_ref=${SENTRUX_BASELINE_REF:-HEAD^}
repo_root=$(git rev-parse --show-toplevel)
tmp_root=$(mktemp -d "${TMPDIR:-/tmp}/sentrux-gate.XXXXXX")
baseline_dir=$tmp_root/baseline
backup_file=$tmp_root/local-baseline.json
had_local_baseline=0

clear_git_local_env() {
  for var in $(git -C "$repo_root" rev-parse --local-env-vars); do
    unset "$var"
  done
}

cleanup() {
  status=$?

  if [ "$had_local_baseline" -eq 1 ] && [ -f "$backup_file" ]; then
    mkdir -p .sentrux
    mv "$backup_file" "$baseline_file"
  else
    rm -f "$baseline_file"
  fi

  git worktree remove --force "$baseline_dir" >/dev/null 2>&1 || true
  rm -rf "$tmp_root"

  exit "$status"
}

trap cleanup EXIT INT TERM

clear_git_local_env

mkdir -p .sentrux

if [ -f "$baseline_file" ]; then
  cp "$baseline_file" "$backup_file"
  had_local_baseline=1
fi

if [ "$baseline_ref" = "0000000000000000000000000000000000000000" ]; then
  sentrux gate --save .
  exit 0
fi

git -C "$repo_root" rev-parse --verify "$baseline_ref^{commit}" >/dev/null 2>&1
git -C "$repo_root" worktree add --detach "$baseline_dir" "$baseline_ref" >/dev/null 2>&1

# Docs flow: save baseline first, then compare current tree against it.
(
  cd "$baseline_dir"
  sentrux gate --save .
)

cp "$baseline_dir/$baseline_file" "$baseline_file"
sentrux gate .
