# HPSC website

## Release Notes

### Version 4.1.2 - _2026-01-03_

Refactored the `Events` and `Members` features to better organise content by year (specifically for 2025). 
It introduces a cleaner directory structure, relocates "World Shoot 2025" and "Club Shirts" content into dedicated namespaces, 
and fixes several import paths.

#### Refactoring & Organisation
- _Namespace Restructuring:_ Moved `WorldShoot2025` related components, constants, and styles into a new nested directory 
structure under `src/features/Events/content/2025/WorldShoot2025/`.
- _Component Renaming:_ Updated `WorldShootContent` to `WorldShoot2025Content` to be more specific to the event year.
- _Member Content Update:_ Relocated `ClubShirts` content to a `2025` subfolder within the `Members` feature.
- _Index Exports:_ Added `index.ts` files to the `2025` content folders to simplify exports and improve modularity.

#### Styles & Assets
- _Style Consolidation:_ Merged `WorldShoot2025.module.scss` into a shared `WorldShoot.module.scss` and 
updated `@extend` rules to maintain visual consistency.

#### New Components
- _Section Component_: Introduced a generic `Section` component in `src/shared/components/Section/` to handle 
arrays of `ReactElement` with optional collapsed states.

#### Clean-up & Maintenance
- _Import Fixes:_ Cleaned up relative imports and added missing `.tsx` extensions across several files.
- _Version Bump:_ Incremented project version in `package.json` from `4.1.1` to `4.1.2`.
- _MDX Updates:_ Simplified imports within `WorldShoot2025.mdx`.
- _Commented Code:_ Temporarily commented out the "Apparel" section in the World Shoot summary.

#### Changes by

@imgbot
@tahoni
