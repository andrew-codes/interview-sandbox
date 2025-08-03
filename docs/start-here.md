# Get Started

## Required Software

1. git
2. bash shell
3. Node@>=22.14.0
4. Yarn@4.9.2, see [ensuring yarn version](#ensure-yarn-version) for further details

## Setup

### Ensure Yarn Version

With Node installed, you may run the following commands to ensure Yarn is both installed and setup correctly.

```bash
corepack enable
corepack use yarn
yarn set version 4.9.2
```

## Install Dependencies

```bash
yarn
```

## Running

```bash
# Run component tests for development or to see interactions with components.
# > Note, there is mock e2e test that has no assertions (paused), so that you may freely interact with the end result. It is skipped by default so tests may be run to completion via CLI.
yarn run test/component

# A basic dev web server if we do not want to use a Cypress test harness.
yarn start

# Run all component tests (sans mock e2e) and view results
yarn run test/component/ci

# Tooling to update baseline images for visual regressions or to see all baseline images in a friendly UX
yarn run test/component/update

# Unit tests
yarn run test/unit
```

## Conclusion

You are now able to run the project.
