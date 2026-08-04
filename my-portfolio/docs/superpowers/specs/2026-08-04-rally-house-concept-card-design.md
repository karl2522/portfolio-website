# Rally House Concept Card Design

## Goal

Present Rally House accurately as a personal frontend concept rather than commissioned client work.

## Approved changes

- Keep the project title, type, technology labels, URL, image, and ordering unchanged.
- Change the category from `Professional Work` to `Personal Project`.
- Replace the description with: `A bold, high-contrast concept for a modern pickleball venue in Cebu. The landing page explores a full-bleed hero, oversized display typography, and smooth scroll-driven sections for play, rates, facilities, and court booking.`

## Scope

Only the Rally House metadata object in `components/projects-scroll-stack.tsx` will change. Rally Shop and every other project entry will remain unchanged.

## Verification

- Confirm the Rally House card displays the new category and description.
- Confirm the old client-like wording is absent.
- Run targeted lint on the changed component and a production build.
