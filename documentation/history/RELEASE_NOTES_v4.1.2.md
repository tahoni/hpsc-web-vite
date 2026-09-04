# HPSC Website

## 🧾 Release Notes

### [4.1.2] - 2026-01-03

**Theme:** Year-Namespaced Content Reorganisation

**Key Highlights:**

- Introduced the generic `Section` component for collapsible content groups
- Moved `WorldShoot2025` and `ClubShirts` content into dedicated `2025/`-namespaced directories under Events/Members

#### ➕ Added

##### Components

- Introduced a generic `Section` component in `src/shared/components/Section/` to handle arrays of `ReactElement`
  with optional collapsed states

#### 🔄 Changed

##### Content

- Temporarily commented out the "Apparel" section in the World Shoot summary

##### Components

- Moved `WorldShoot2025`-related components, constants and styles into a new nested directory structure under
  `src/features/Events/content/2025/WorldShoot2025/`
- Merged `WorldShoot2025.module.scss` into a shared `WorldShoot.module.scss`, updating `@extend` rules to maintain
  visual consistency
- Renamed `WorldShootContent` to `WorldShoot2025Content` to be more specific to the event year
- Simplified imports within `WorldShoot2025.mdx`
- Relocated `ClubShirts` content to a `2025` subfolder within the `Members` feature
- Added `index.ts` files to the `2025` content folders to simplify exports and improve modularity

##### Build & Tooling

- Cleaned up relative imports and added missing `.tsx` extensions across several files
