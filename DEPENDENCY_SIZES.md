# Dependency Size Breakdown

This document provides an estimate of the disk space required for all dependencies in the BuildIT monorepo.

## Total Estimated Size

**Estimated Total: ~400-600 MB** (node_modules folder after `npm install`)

This includes:
- Frontend dependencies: ~250-350 MB
- Backend dependencies: ~80-120 MB
- Shared/root dependencies: ~20-30 MB
- Transitive dependencies (dependencies of dependencies): Additional ~100-150 MB

## Frontend Dependencies (`packages/frontend`)

### Production Dependencies (~150-200 MB installed)
- **react** (~2.5 MB source, ~45 MB installed with dependencies)
- **react-dom** (~3 MB source, ~50 MB installed with dependencies)
- **react-router-dom** (~800 KB source, ~15 MB installed)
- **@reduxjs/toolkit** (~500 KB source, ~25 MB installed)
- **react-redux** (~200 KB source, ~8 MB installed)
- **@tanstack/react-query** (~300 KB source, ~20 MB installed)
- **axios** (~100 KB source, ~5 MB installed)

**Frontend Production Total: ~168 MB installed**

### Development Dependencies (~100-150 MB installed)
- **vite** (~15 MB source, ~120 MB installed with dependencies)
- **@vitejs/plugin-react** (~500 KB source, ~15 MB installed)
- **tailwindcss** (~2 MB source, ~30 MB installed)
- **postcss** (~200 KB source, ~15 MB installed)
- **autoprefixer** (~100 KB source, ~8 MB installed)
- **eslint** (~5 MB source, ~40 MB installed)
- **eslint-plugin-react** (~500 KB source, ~15 MB installed)
- **eslint-plugin-react-hooks** (~50 KB source, ~3 MB installed)
- **eslint-plugin-react-refresh** (~20 KB source, ~2 MB installed)
- **@types/react** (~500 KB source, ~8 MB installed)
- **@types/react-dom** (~100 KB source, ~3 MB installed)

**Frontend Dev Total: ~259 MB installed**

**Frontend Grand Total: ~427 MB**

## Backend Dependencies (`packages/backend`)

### Production Dependencies (~15-20 MB source, ~80-100 MB installed)
- **express** (~200 KB source, ~8 MB installed)
- **cors** (~20 KB source, ~2 MB installed)
- **dotenv** (~10 KB source, ~1 MB installed)
- **express-validator** (~150 KB source, ~15 MB installed)
- **helmet** (~50 KB source, ~8 MB installed)
- **morgan** (~20 KB source, ~3 MB installed)
- **compression** (~30 KB source, ~5 MB installed)
- **express-rate-limit** (~50 KB source, ~8 MB installed)

**Backend Production Total: ~50 MB installed**

### Development Dependencies (~5-10 MB installed)
- **nodemon** (~2 MB source, ~15 MB installed with dependencies)

**Backend Dev Total: ~15 MB installed**

**Backend Grand Total: ~65 MB**

## Size Breakdown Summary

| Package | Type | Source Size | Installed Size (approx) |
|---------|------|-------------|------------------------|
| **Frontend Production** | | ~7 MB | ~168 MB |
| **Frontend Dev** | | ~24 MB | ~259 MB |
| **Backend Production** | | ~0.5 MB | ~50 MB |
| **Backend Dev** | | ~2 MB | ~15 MB |
| **Total (Source)** | | ~33.5 MB | |
| **Total (Installed)** | | | **~492 MB** |

## Notes

1. **Installed Size vs Source Size**: The installed size is much larger because:
   - npm installs all transitive dependencies (dependencies of dependencies)
   - Each package includes its own node_modules
   - Development dependencies include build tools and compilers

2. **Monorepo Efficiency**: With npm workspaces, some dependencies may be hoisted to the root, which can reduce total size by sharing common dependencies.

3. **Production Build Size**: The production bundle size is much smaller:
   - Frontend build: ~200-500 KB (gzipped)
   - Backend runtime: Only production dependencies (~50 MB)

4. **Disk Space After Build**:
   - `node_modules/`: ~400-600 MB
   - Frontend `dist/`: ~1-5 MB (production build)
   - Total project size: ~450-650 MB

## How to Check Actual Size

After installation, you can check the actual size using:

### Windows PowerShell:
```powershell
# Check total size
Get-ChildItem -Path .\node_modules -Recurse | Measure-Object -Property Length -Sum | Select-Object @{Name="Size(MB)";Expression={[math]::Round($_.Sum / 1MB, 2)}}

# Check per package
Get-ChildItem -Path .\packages\frontend\node_modules -Recurse | Measure-Object -Property Length -Sum
Get-ChildItem -Path .\packages\backend\node_modules -Recurse | Measure-Object -Property Length -Sum
```

### Linux/Mac:
```bash
# Total size
du -sh node_modules

# Per package
du -sh packages/*/node_modules
```

## Reducing Size (Optional)

If you need to reduce the size:

1. **Production-only install**:
   ```bash
   npm ci --omit=dev
   ```

2. **Clean install** (removes unnecessary files):
   ```bash
   npm prune
   ```

3. **Remove optional dependencies**:
   ```bash
   npm install --no-optional
   ```

## What's Included in node_modules

- All package source code
- TypeScript definitions (if needed)
- Build tools and compilers
- Test frameworks (if any)
- Documentation files
- License files
- Transitive dependencies (can be 10-100x more than direct dependencies)

**Remember**: Always add `node_modules/` to `.gitignore` - never commit it to version control!

