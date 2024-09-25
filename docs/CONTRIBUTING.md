**IMPORTANT NOTE**: The documentation is depreciated and will no longer referring to  ACM Homepage, an newer documentation will be updated in the future when the flow is finalized.


# Contributing to ACM Homepage

## Branching Strategy

### Main branches

There are four main branches, each used as a release branch for its respective environment.

| Branch name | URL                                                          |
| ----------- | ------------------------------------------------------------ |
| `master`    | [https://www.astro.com.my](https://www.astro.com.my)         |
| `staging`   | [https://acm-stg.pink.cat](https://acm-stg.pink.cat)         |
| `develop`   | [https://acm-stg.pink.cat/dev](https://acm-stg.pink.cat/dev) |

### Branch naming convention

To keep the branches organized and manageable, prefix the branch name with one of the following folders:

| Prefix     | Usage           |
| ---------- | --------------- |
| `feature/` | Stories         |
| `bugfix/`  | Bugs            |
| `hotfix/`  | Hot fixes       |
| `task/`    | Everything else |

Example: A feature with the ticket number `ACM20-3388` should have a branch name as such.

```bash
git checkout -b feature/ACM20-3388-feature-name
```

## Coding Rules

### Source code

To ensure consistency and quality throughout the source code, all code modifications must have:

- No type errors
- No build errors
- No linting errors
- Valid commit message(s)

### Commit message guidelines

Commit message follows the [conventional commit specifications](https://www.conventionalcommits.org/en/v1.0.0/#specification).
The type of each commit message must be one of the following:

| Type       | Description                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| `feat`     | A new feature                                                                                        |
| `fix`      | A bug fix                                                                                            |
| `docs`     | Documentation only changes                                                                           |
| `refactor` | A code change that neither fixes a bug nor adds a feature (formatting, performance improvement, etc) |
| `test`     | Adding missing tests or correcting existing tests                                                    |
| `build`    | Changes that affect the build system or external dependencies (npm, webpack, typescript)             |
| `ci`       | Changes to our CI configuration files and scripts (NOTE: Does not bump the version)                  |
| `chore`    | Other changes that don't modify src or test files                                                    |
| `revert`   | Reverts a previous commit                                                                            |

This repo is **Commitizen** friendly, therefore use it to help you create valid commit message by running the following command:

```bash
npm run commit
```

Using **Commitizen** is optional if you are already familiar with the commit message specs and wish to use other tools to commit your code.
However, we recommend you to use **Commitizen** when possible to avoid any typos or incorrect formats.

## Branching Strategy

1. Always create a new branch from `master` unless the feature you're working on is dependent on another branch.
2. Keep your feature branch within the scope of your feature. If your feature requires something new that is out of scope, create a separate ticket and branch.
3. When your feature is done, make a PR to `staging`. `staging` branch contains all completed features regardless of release. This is because `staging` is used by product, QA, designers and any other stakeholders for feature testing and review.
4. If your feature is ready to be deployed, make a PR to the relevant `release` branch. If there isn't a relevant `release` branch, you can request the deployment PIC to create it.
5. Don't delete your feature branch until the feature has been deployed.

## Submitting a Pull Request

Good Pull Requests (PR), whether patches, improvements, or new features should remain focused in scope and avoid containing unrelated commits.

Here is a summary of the steps to follow:

1. Create a new branch to contain your feature, change or fix either manually or through Jira, following the branching strategy

```bash
git checkout -b <branch-name>
```

2. Make your code changes, following the coding rules
3. Push your branch up to your fork:

```bash
git push origin <branch-name>
```

4. Open a PR with a clear title and fill in the description according to the PR template
5. Once the PR has gotten 2 or more approvals, you can merge it to your destination
6. When selecting the [merge strategy](https://confluence.atlassian.com/bitbucketserver/pull-request-merge-strategies-844499235.html), prioritize _Fast-forward_ (`--ff-only`) over _Merge commit_ (`--no-ff`)
