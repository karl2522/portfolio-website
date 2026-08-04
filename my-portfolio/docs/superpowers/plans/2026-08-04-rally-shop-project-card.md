# Rally Shop Project Card Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Rally Shop as the first portfolio project using the supplied screenshot and live-site URL while preserving Rally House.

**Architecture:** Reuse the existing data-driven `ProjectsScrollStack` component. Add one static image under `public/images` and one project object at the start of the existing `projects` array; no component or styling changes are needed.

**Tech Stack:** Next.js 16, React 18, TypeScript, Tailwind CSS 4, Next.js Image

## Global Constraints

- Keep Rally House and every other existing project entry unchanged.
- Use the supplied 1858-by-947 PNG screenshot without altering its contents.
- Store the image at `public/images/rallyshop.png` and reference it as `/images/rallyshop.png`.
- Use `https://rally-shop.jaredomen.com/` as the demo URL and `rally-shop.jaredomen.com` as the display domain.
- Do not add a GitHub button or case-study modal for Rally Shop.
- Reuse the current card layout, badges, browser frame, animation, and responsive behavior.

---

## File Structure

- Create `public/images/rallyshop.png`: immutable project screenshot supplied by the user.
- Modify `components/projects-scroll-stack.tsx`: add the Rally Shop metadata object to the existing project catalog.

### Task 1: Add the Rally Shop screenshot asset

**Files:**
- Create: `public/images/rallyshop.png`

**Interfaces:**
- Consumes: `C:\Users\JARED\AppData\Local\Temp\codex-clipboard-49cb79c0-5cac-4167-97f2-bbc5efe99263.png`
- Produces: the public asset available to Next.js at `/images/rallyshop.png`

- [ ] **Step 1: Record the source image integrity and dimensions**

Run:

```powershell
Get-FileHash 'C:\Users\JARED\AppData\Local\Temp\codex-clipboard-49cb79c0-5cac-4167-97f2-bbc5efe99263.png' -Algorithm SHA256
Add-Type -AssemblyName System.Drawing
$sourceImage = [System.Drawing.Image]::FromFile('C:\Users\JARED\AppData\Local\Temp\codex-clipboard-49cb79c0-5cac-4167-97f2-bbc5efe99263.png')
Write-Output ("{0}x{1}" -f $sourceImage.Width, $sourceImage.Height)
$sourceImage.Dispose()
```

Expected: a SHA-256 hash is printed and the dimensions are `1858x947`.

- [ ] **Step 2: Copy the supplied binary asset**

Run:

```powershell
Copy-Item -LiteralPath 'C:\Users\JARED\AppData\Local\Temp\codex-clipboard-49cb79c0-5cac-4167-97f2-bbc5efe99263.png' -Destination 'public\images\rallyshop.png'
```

- [ ] **Step 3: Verify the copied file is byte-identical**

Run:

```powershell
$sourceHash = (Get-FileHash 'C:\Users\JARED\AppData\Local\Temp\codex-clipboard-49cb79c0-5cac-4167-97f2-bbc5efe99263.png' -Algorithm SHA256).Hash
$assetHash = (Get-FileHash 'public\images\rallyshop.png' -Algorithm SHA256).Hash
if ($sourceHash -ne $assetHash) { throw 'Rally Shop screenshot hash mismatch' }
```

Expected: exit code 0 with no error.

### Task 2: Add Rally Shop to the project catalog

**Files:**
- Modify: `components/projects-scroll-stack.tsx:9`

**Interfaces:**
- Consumes: `/images/rallyshop.png` from Task 1 and the existing `projects` array/card renderer.
- Produces: a first-position project record rendered by both the homepage Projects section and `/projects` page.

- [ ] **Step 1: Run a source assertion that demonstrates the entry is absent**

Run:

```powershell
$source = Get-Content -Raw 'components\projects-scroll-stack.tsx'
if ($source -notmatch 'title: "Rally Shop"') { throw 'Rally Shop project entry is absent' }
```

Expected: FAIL with `Rally Shop project entry is absent`.

- [ ] **Step 2: Insert the minimal project record at the start of the array**

Add this object immediately after `const projects = [`:

```tsx
    {
        title: "Rally Shop",
        category: "Personal Project",
        type: "UI & Frontend Explorations",
        description:
            "A polished pickleball storefront concept featuring product filtering, a paddle finder, quick views, and a simulated shopping cart.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://rally-shop.jaredomen.com/",
        github: "#",
        image: "/images/rallyshop.png",
        domain: "rally-shop.jaredomen.com",
    },
```

- [ ] **Step 3: Verify the record and ordering**

Run:

```powershell
$source = Get-Content -Raw 'components\projects-scroll-stack.tsx'
$shopIndex = $source.IndexOf('title: "Rally Shop"')
$houseIndex = $source.IndexOf('title: "Rally House"')
if ($shopIndex -lt 0) { throw 'Rally Shop entry is missing' }
if ($houseIndex -lt 0) { throw 'Rally House entry is missing' }
if ($shopIndex -gt $houseIndex) { throw 'Rally Shop must appear before Rally House' }
@('https://rally-shop.jaredomen.com/', '/images/rallyshop.png', 'rally-shop.jaredomen.com') | ForEach-Object {
    if (-not $source.Contains($_)) { throw "Missing expected project value: $_" }
}
```

Expected: exit code 0 with no error.

- [ ] **Step 4: Run static verification**

Run:

```powershell
npm run lint
npm run build
git diff --check
```

Expected: lint and production build exit successfully; `git diff --check` prints no errors.

- [ ] **Step 5: Verify the rendered card in a browser**

Run the development server and inspect the homepage and `/projects` at desktop and mobile widths. Confirm:

- Rally Shop is first and Rally House remains second.
- The supplied screenshot is fully visible inside the browser-frame card.
- `View Demo` points to `https://rally-shop.jaredomen.com/` and opens in a new tab.
- No GitHub or case-study control appears on the Rally Shop card.
- No horizontal overflow or clipped card content appears at mobile width.

- [ ] **Step 6: Review the final diff**

Run:

```powershell
git status --short
git diff -- components/projects-scroll-stack.tsx
git diff --stat
```

Expected: only `components/projects-scroll-stack.tsx` and `public/images/rallyshop.png` are implementation changes, in addition to the already-approved documentation files.
