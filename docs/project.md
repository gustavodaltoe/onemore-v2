# One More V2

## Summary

One More V2 is a rewrite of the original One More project, an inactive personal project that aimed to be a better experience than legacy fitness coaching products such as MFit. This new version starts from a clearer product direction: deliver a premium, fast, and elegant workout management platform for personal trainers and their clients, with native mobile apps and a shared web experience.

The main value proposition is simple:

- Professionals need a fast and pleasant way to create workout routines, manage clients, and follow training progress.
- Clients need a focused and frictionless way to access routines, execute workouts, and record what happened during each session.

The app must support `iOS`, `Android`, and `Web`. The web experience is especially important for professionals, since creating routines and managing clients is more comfortable on larger screens. Mobile remains critical for both professionals and clients, especially for workout execution.

## Background

The original One More was planned as an MVP-first SPA. V2 changes that direction and goes directly to:

- `Expo` with `React Native` for native iOS and Android apps
- `TanStack Start` for the web UI
- `NestJS` for the backend API
- `PostgreSQL` with `Drizzle ORM` and migrations for persistence

This shift reflects the real product shape from the beginning: a product ecosystem where workout execution is mobile-first, while workout authoring and client management benefit heavily from a dedicated web UI.

## Product Vision

Build a modern coaching platform that feels faster, cleaner, and more premium than the established alternatives, while remaining simple enough for everyday use by professionals and clients.

The product should feel:

- Elegant
- Energetic
- Simple to use
- Fast in both perceived and real performance

## Product Goals

### Primary goals

- Help professionals create and assign workout routines quickly
- Help clients execute workouts with clarity and minimal friction
- Support both B2B-style professional usage and B2C self-managed usage
- Offer a strong cross-platform experience with one shared product ecosystem
- Establish clean, readable code patterns before heavy feature expansion

### Business goals

- Offer free client usage
- Offer a professional free tier with meaningful adoption value
- Convert professionals to paid plans through web-based Stripe billing
- Respect App Store and Play Store policies by avoiding mobile in-app payment prompts for professional subscriptions

### Product quality goals

- Spectacular UI/UX
- Excellent responsiveness and navigation speed
- Clear and maintainable architecture
- Predictable domain modeling for cloning, tracking, and historical data

## Competitive Context

The strongest reference products at this stage are:

- [MFit](https://www.mfitpersonal.com.br/)
- [PersonalGo](https://www.personalgo.com.br/)

These products should be used as market references for understanding baseline expectations, workflows, and feature positioning. The goal is not to copy them directly, but to learn where they are strong, where they feel dated, and where One More can be more refined.

## Target Users

### 1. Professionals

Professionals are the main paying users. They need to:

- Create and manage their professional profile
- Create, edit, archive, and reuse workout routines
- Manage clients and client-specific context
- Assign routines to clients
- Review client training history and feedback
- Work comfortably from the web UI, with mobile support when needed

### 2. Clients

Clients are the main workout execution users. They need to:

- Access assigned workout routines
- Start and complete workout sessions
- Log progress such as weight and notes
- Review routine details clearly during training
- Receive a smooth mobile-first experience

### 3. Self-managed users

A regular user without any attached professional should still be able to create and manage their own routines. This keeps the product open to B2C usage and avoids making the app useful only when a professional relationship exists.

## Profiles, Roles, and Identity

Authentication belongs to the user account. Profiles determine how the user behaves inside the product.

Key rules:

- A single authenticated user can have both a professional profile and one or more client profiles.
- If the user has both professional and client capabilities, they should select which profile they want to use after login.
- If the user only has client capabilities, client mode should be the default.
- A client can have different client profiles for different professionals.
- A client may be attached to multiple professionals at the same time.
- The professional role does not create exclusivity. A client can be coached by two or more professionals simultaneously.

This model is important because the same person may be:

- A coach for their own clients
- A client of another coach
- A self-managed user

## Supported Platforms

- iOS app
- Android app
- Web app

Platform expectations:

- Professionals will rely heavily on the web experience for routine authoring and client management.
- Clients will rely primarily on the mobile experience for workout execution.
- The web UI should be built as a dedicated `TanStack Start` application rather than through Expo web.

## Authentication

Authentication should use `better-auth`.

Implementation direction:

- Use `@thallesp/nestjs-better-auth` on the NestJS backend
- Use the Expo integration documented by Better Auth: <https://better-auth.com/docs/integrations/expo>

Initial login methods:

- Email and password

## Billing and Access Model

### Client side

- Client usage is free
- Clients are never charged to use the application

### Professional side

- Professionals are the paying segment
- Billing is handled with `Stripe`
- Billing must happen only on the web UI
- Mobile apps must not prompt or direct users into a payment flow that violates store policies

### Free tier

- A professional can create up to `3 workout routines` for free
- Beyond that limit, a paid subscription is required

## Product Segments

The app has two main product segments:

- Professional view
- Client view

These are not separate apps. They are modes inside the same product ecosystem.

## Professional Experience

The professional view should allow fast access to:

- Dashboard information
- Quick actions
- Client management
- Custom exercise management
- Workout routine management

Core capabilities:

- Paginated list of clients
- View client details
- Create clients
- Edit clients
- Archive clients
- Paginated list of custom exercises
- Create, edit, and archive custom exercises
- Paginated list of workout routines
- Create, edit, archive, and duplicate workout routines
- Create routine templates not attached to any specific client

Professionals should also be able to:

- Keep internal rich-text notes about clients
- Attach internal files such as PDFs and images to client records
- Clone a template into a client routine and freely customize the clone

## Client Experience

The client view should prioritize workout execution.

Core capabilities:

- See assigned or self-created workout routines in a card-based feed
- Open a routine and choose a workout
- Start a workout session
- Navigate exercise by exercise
- Track weights and notes during the session
- Review prior progress when relevant
- Finish a session and optionally leave feedback
- Archive routines and optionally filter archived routines back into the feed
- View linked professionals
- Unlink from a professional with confirmation

### Workout feed expectations

The client home should show workout routines as cards in a feed. Each card should present:

- Workout routine name
- Start date
- End date
- Total workouts count
- Professional name and photo in the footer

The feed should prioritize the latest routines assigned to the client.

## Professional Onboarding Journey

Initial professional journey:

1. The professional creates an account on the web UI.
2. The professional creates a profile with required name and optional photo.
3. The professional goes through onboarding toward first routine creation.
4. The professional fills out the routine data.
5. The professional creates the first workout inside the routine.
6. The professional adds exercises to the workout.
7. The onboarding leads to first client creation.
8. The professional creates the client with name, email, and phone or WhatsApp.
9. The product offers a default invitation message that the professional can share with the client.
10. The onboarding takes the professional to the client page.
11. The professional assigns a routine to the client, either from scratch or from a cloned template.
12. The professional can also write internal notes and attach internal files.
13. The onboarding is complete and the professional can continue exploring the app.

## Client Journey

1. The user registers or logs in.
2. The user sees the latest workout routines assigned by professionals or created by themselves.
3. The user opens a routine and selects a workout.
4. The user starts a workout session.
5. The first exercise is shown with all relevant details.
6. The user can see previous-session reference data such as last used weight.
7. The user can input weight and edit exercise notes.
8. The user marks exercises as done and moves forward through the workout.
9. On the last exercise, the app prompts the user to finish the session.
10. The user completes the session with an optional comment and sees the summary.

## Workout Execution Principles

During an active session:

- A global timer should run from start to finish
- The current exercise should have a focused full-screen experience
- Swiping right or left should navigate between previous and next exercises
- The user should always be able to return quickly to the active session if they navigate elsewhere in the app
- Suggested rest intervals should be easy to start as countdown timers
- The countdown should support adjusting to more or less time

When the final exercise is marked as done:

- The app should ask whether the user wants to finish the session

If a session remains open after the user leaves:

- Notify after 5 minutes
- Notify again after 10 minutes
- Notify again after 30 minutes
- Notify again after 1 hour
- Continue with a sensible recurring reminder strategy until the session is finished or abandoned by product rules

## Core Domain Model

This section defines the initial product language. It is intentionally product-oriented rather than implementation-complete.

### User

Represents the authenticated account.

### Professional profile

Represents a user acting as a coach or trainer.

Suggested profile fields:

- Name
- Photo
- Title
- Timestamps

### Client profile

Represents a user inside the context of one professional relationship, or as a self-managed client if no professional is attached.

Important rule:

- A user can have different client profiles for different professionals

This allows the same person to have distinct coaching contexts, history, notes, and assignments.

### Professional-client link

Represents the relationship between a professional and a client profile.

Potential responsibilities:

- Link ownership
- Invitation flow state
- Archival or active state
- Relationship timestamps

### Exercise definition

Exercises should be highly flexible.

Base fields:

- Title
- Video URL
- Image URL, usually as fallback when video is absent
- Muscles list with primary and secondary groupings
- Notes, especially for client memo input during usage

Exercise definitions come from two sources:

- Default exercises available globally in the app
- Private custom exercises created by a professional

Privacy rule:

- A professional's custom exercises are private and cannot be reused by other professionals

### Exercise extensions

An exercise can contain repeated structured extension fields defined by the professional.

Examples:

- Sets
- Weight
- Interval
- Instructions
- Other custom fields with a custom title and value type

The same exercise can repeat extension types multiple times to represent more complex prescriptions.

### Exercise groups

Exercises can be grouped to represent structures such as:

- Bi-sets
- Supersets
- Other grouped exercise formats

This grouping is a real domain concept, not just display formatting.

### Workout routine

A workout routine is a container of workouts. It may be:

- A client-specific routine
- A reusable template
- A self-managed user routine

Suggested fields:

- Title
- Subtitle
- Instructions
- Init date
- End date
- Goal
- Level
- Owner user ID
- Parent ID
- Timestamps

Important cloning rule:

- Changes to a routine must not affect its parent or its cloned children
- A cloned routine is a full duplication, not a live reference

This rule also applies to nested workouts and exercises.

### Workout

A workout belongs to a routine.

Suggested fields:

- Title
- Subtitle
- Instructions
- Timestamps

Examples include labels such as `Treino A`, `Treino B`, and so on.

### Session

A session represents an execution instance of a workout.

Suggested fields:

- Start date
- End date
- Duration
- Comment

If the user leaves a comment:

- The professional should be notified
- The professional should be able to view it in the client session history

## Routine and Template Rules

The product needs strong cloning semantics.

Rules:

- Professionals can create routine templates not attached to a specific client
- Templates can be cloned into client routines
- The professional can edit the clone freely after assignment
- Clones are independent copies
- Editing a template later does not change old client routines
- Editing a client routine does not update the source template

This rule is central because workout plans are individualized and historical integrity matters.

## Default and Custom Exercise Libraries

The app should ship with default exercise content and, if useful, starter routine templates available from the start so professionals can build routines quickly.

At the same time:

- Professionals must be able to create their own private exercises
- Those private exercises remain isolated to their account

This combination gives the product a fast starting experience without removing coach flexibility.

## Notifications

Initial notification needs:

- Session reminder notifications when a workout is left open
- Professional notification when a client leaves a session comment

Notification behavior should be designed so it is useful and supportive, not noisy.

## Design and UX Principles

The product should be guided by the following principles:

- Speed over feature clutter
- Premium feel without visual excess
- Clear hierarchy and focus during workouts
- Comfortable authoring on web
- Minimal friction on mobile
- Light and dark mode support in both professional and client views

The UI should feel modern, polished, and intentional across platforms.

## Engineering Direction

### Frontend

- Native app: `Expo` with `React Native`
- Web app: `TanStack Start`
- The web UI and native apps should remain aligned at the product level, but do not need to share the same routing runtime

### Backend

- `NestJS`
- Modular architecture as features are introduced

### Data

- `PostgreSQL`
- `Drizzle ORM`
- Migration-based schema management

### Authentication

- `better-auth`
- `@thallesp/nestjs-better-auth`

### Infrastructure and deployment

- API and infrastructure deployed on `Railway`
- Native apps distributed through `App Store` and `Play Store`

## Store and Policy Constraints

Because professional billing is web-only:

- Mobile apps should not instruct users to pay inside the app
- Mobile should not expose flows that conflict with Apple or Google store rules
- The product should separate professional account capabilities from billing prompts in a compliant way

This is a product and platform rule, not only an implementation detail.

## Initial Scope Priorities

The early development effort should prioritize:

1. Authentication and profile model
2. Professional onboarding
3. Client onboarding and attachment flow
4. Routine, workout, and exercise modeling
5. Template cloning behavior
6. Workout session execution flow
7. Client progress tracking and session history
8. Subscription enforcement for professionals on web
9. Notifications for unfinished sessions and client feedback

## Working Assumptions

These assumptions are current and may evolve as development starts:

- Email and password is enough for the first authentication version
- Web is the primary professional environment, but not the only one
- Mobile is the primary workout execution environment
- Templates and assigned routines must be stored as independent copies
- The domain must support both professional-led and self-managed usage from the beginning
- Code readability and good patterns are more important than premature optimization

## Open Product Questions

These points are intentionally left open for later specification:

- Exact naming and shape of some optional routine fields such as subtitle, instructions, goal, and level
- Exact definition of "3 workout routines" for free-tier enforcement if templates and archived routines also exist
- Final modeling of self-managed client profiles when no professional relationship exists
- File attachment limits and supported MIME types
- Rich text editor capabilities and storage format
- Whether default exercise content should be seeded in the database, versioned in code, or both
- Final notification recurrence policy after the 1-hour reminder

## Document Purpose

This document is the initial product definition for One More V2. It should guide:

- Architecture decisions
- UX planning
- Data modeling
- API design
- Backlog breakdown
- Future technical and product documentation

It is expected to evolve as the project becomes more concrete, but it should remain the single high-level description of what the product is and what it is trying to achieve.
