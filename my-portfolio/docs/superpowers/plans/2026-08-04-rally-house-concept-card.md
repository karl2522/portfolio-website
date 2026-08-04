# Rally House Concept Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reframe the existing Rally House portfolio card as personal concept work without changing its link, image, technology labels, type, or position.

**Architecture:** Update only the Rally House metadata object in the existing data-driven `ProjectsScrollStack` component. The shared renderer will automatically display the revised category and description on both portfolio routes.

**Tech Stack:** Next.js 16, React 18, TypeScript

## Global Constraints

- Change the Rally House category from `Professional Work` to `Personal Project`.
- Use exactly this description: `A bold, high-contrast concept for a modern pickleball venue in Cebu. The landing page explores a full-bleed hero, oversized display typography, and smooth scroll-driven sections for play, rates, facilities, and court booking.`
- Keep Rally House's title, type, technology labels, URL, image, domain, and ordering unchanged.
- Keep Rally Shop and every other project entry unchanged.

---

## File Structure

- Modify `components/projects-scroll-stack.tsx`: update only the Rally House category and description values.

### Task 1: Reframe Rally House as concept work

**Files:**
- Modify: `components/projects-scroll-stack.tsx:23-34`

**Interfaces:**
- Consumes: the existing `projects` array and shared card renderer.
- Produces: revised Rally House copy on the homepage and `/projects` page.

- [ ] **Step 1: Run a failing source assertion for the approved framing**

Run:

```powershell
$source = Get-Content -Raw 'components\projects-scroll-stack.tsx'
$approvedDescription = 'A bold, high-contrast concept for a modern pickleball venue in Cebu. The landing page explores a full-bleed hero, oversized display typography, and smooth scroll-driven sections for play, rates, facilities, and court booking.'
if (-not $source.Contains($approvedDescription)) { throw 'Rally House approved concept description is absent' }
```

Expected: FAIL with `Rally House approved concept description is absent`.

- [ ] **Step 2: Apply the minimal metadata change**

Change the Rally House fields to:

```tsx
        category: "Personal Project",
        description:
            "A bold, high-contrast concept for a modern pickleball venue in Cebu. The landing page explores a full-bleed hero, oversized display typography, and smooth scroll-driven sections for play, rates, facilities, and court booking.",
```

- [ ] **Step 3: Verify the new framing and preserved metadata**

Run:

```powershell
$source = Get-Content -Raw 'components\projects-scroll-stack.tsx'
$approvedDescription = 'A bold, high-contrast concept for a modern pickleball venue in Cebu. The landing page explores a full-bleed hero, oversized display typography, and smooth scroll-driven sections for play, rates, facilities, and court booking.'
$oldDescription = 'A bold, high-contrast landing page for Rally House, an independent pickleball venue in Cebu.'
if (-not $source.Contains($approvedDescription)) { throw 'Approved Rally House description is missing' }
if ($source.Contains($oldDescription)) { throw 'Old client-like Rally House description remains' }
@('title: "Rally House"', 'type: "UI & Frontend Explorations"', 'https://rally-house.jaredomen.com/', '/images/rallyhouse.jpg', 'rally-house.jaredomen.com') | ForEach-Object {
    if (-not $source.Contains($_)) { throw "Missing preserved Rally House value: $_" }
}
```

Expected: exit code 0 with no error.

- [ ] **Step 4: Run scoped verification**

Run:

```powershell
npx eslint components/projects-scroll-stack.tsx
npm run build
git diff --check
```

Expected: targeted lint and production build exit successfully; `git diff --check` reports no whitespace errors.

- [ ] **Step 5: Review the exact diff**

Run:

```powershell
git diff -- components/projects-scroll-stack.tsx
git status --short
```

Expected: the implementation diff changes only the Rally House category and description, alongside this plan document.
