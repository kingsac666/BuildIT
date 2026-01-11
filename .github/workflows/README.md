# GitHub Actions Workflows

This directory contains CI/CD workflows for the BuildIT monorepo.

## Available Workflows

### 1. **CI Workflow** (`.github/workflows/ci.yml`)
Main continuous integration workflow that runs on every push and pull request.

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Jobs:**
- **Frontend CI**: Lints and builds the frontend application
- **Backend CI**: Verifies backend server starts correctly
- **Status Check**: Ensures all jobs pass

### 2. **Frontend CI** (`.github/workflows/frontend-ci.yml`)
Dedicated workflow for frontend changes (runs only when frontend files change).

**Features:**
- Runs on multiple Node.js versions (18.x, 20.x)
- ESLint checking
- Production build verification
- Build artifact upload

**Triggers:**
- Changes in `packages/frontend/**`
- Changes to the workflow file itself

### 3. **Backend CI** (`.github/workflows/backend-ci.yml`)
Dedicated workflow for backend changes (runs only when backend files change).

**Features:**
- Runs on multiple Node.js versions (18.x, 20.x)
- Server startup verification
- Code formatting checks (placeholder)

**Triggers:**
- Changes in `packages/backend/**`
- Changes to the workflow file itself

### 4. **Deploy Workflow** (`.github/workflows/deploy.yml`)
Deployment workflow for production releases.

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Jobs:**
- **Deploy Frontend**: Builds and deploys frontend (configure your platform)
- **Deploy Backend**: Prepares backend for deployment (configure your platform)

**Note:** Deployment steps are commented out. Uncomment and configure based on your hosting platform.

### 5. **Dependency Review** (`.github/workflows/dependency-review.yml`)
Automatically reviews dependencies in pull requests for security vulnerabilities.

**Features:**
- Checks for known vulnerabilities
- Validates license compatibility
- Fails on moderate or higher severity issues

### 6. **CodeQL Analysis** (`.github/workflows/codeql.yml`)
Advanced security analysis using GitHub's CodeQL.

**Features:**
- Static code analysis
- Security vulnerability detection
- Runs weekly and on every push/PR

### 7. **Discord Notifications** (`.github/workflows/discord-notify.yml`)
Automatically sends notifications to Discord when workflows complete.

**Features:**
- Notifies on CI workflow completion
- Color-coded messages (green/red)
- Includes workflow status, branch, and commit info
- Requires Discord webhook setup (see `.github/DISCORD_SETUP.md`)

**Note:** Configure later when ready. See setup guide for instructions.

### 8. **Development Checks** (`.github/workflows/dev-checks.yml`)
Additional checks for development branches.

**Features:**
- Runs on feature/bugfix branches
- Code quality checks
- Dependency health monitoring
- Console.log detection
- File size checks

## Workflow Features

### Caching
All workflows use npm caching to speed up builds:
```yaml
cache: 'npm'
cache-dependency-path: packages/[frontend|backend]/package-lock.json
```

### Matrix Builds
Frontend and backend workflows test against multiple Node.js versions to ensure compatibility.

### Path Filtering
Dedicated workflows (frontend-ci.yml, backend-ci.yml) only run when relevant files change, saving CI minutes.

### Artifact Upload
Build artifacts are uploaded and retained for 7 days, useful for debugging or deployment.

## Setting Up Secrets

For deployment workflows, you'll need to configure secrets in GitHub:

1. Go to your repository → Settings → Secrets and variables → Actions
2. Add the following secrets based on your deployment platform:

### Vercel
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### Netlify
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

### Railway
- `RAILWAY_TOKEN`

### Heroku
- `HEROKU_API_KEY`

### AWS
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

## Customizing Workflows

### Adding Tests

When you add tests, uncomment the test jobs in the workflows:

```yaml
test:
  name: Run Tests
  runs-on: ubuntu-latest
  steps:
    - name: Run tests
      run: npm test
```

### Adding Coverage

For code coverage, add:

```yaml
- name: Generate coverage
  run: npm run test:coverage
- name: Upload coverage
  uses: codecov/codecov-action@v3
```

### Environment Variables

Add environment-specific variables:

```yaml
env:
  NODE_ENV: production
  API_URL: ${{ secrets.API_URL }}
```

## Workflow Status Badges

Add these badges to your README.md:

```markdown
![CI](https://github.com/your-username/BuildIT/workflows/CI/badge.svg)
![Frontend CI](https://github.com/your-username/BuildIT/workflows/Frontend%20CI/badge.svg)
![Backend CI](https://github.com/your-username/BuildIT/workflows/Backend%20CI/badge.svg)
```

## Troubleshooting

### Workflow Not Running
- Check that workflows are in `.github/workflows/` directory
- Verify branch names match your workflow triggers
- Check GitHub Actions tab for error messages

### Build Failures
- Review workflow logs in the Actions tab
- Ensure `package-lock.json` files exist
- Check Node.js version compatibility

### Cache Issues
- Clear cache by removing `cache-dependency-path` temporarily
- Ensure `package-lock.json` is committed

## Best Practices

1. **Use path filtering** to run workflows only when needed
2. **Cache dependencies** to speed up builds
3. **Test on multiple Node.js versions** for compatibility
4. **Fail fast** on linting errors
5. **Upload artifacts** for debugging
6. **Review dependencies** for security
7. **Use secrets** for sensitive data

## Next Steps

1. ✅ Workflows are set up and ready
2. ⏭️ Commit and push to trigger workflows
3. ⏭️ Configure deployment secrets when ready
4. ⏭️ Add tests and uncomment test jobs
5. ⏭️ Set up branch protection rules in GitHub

