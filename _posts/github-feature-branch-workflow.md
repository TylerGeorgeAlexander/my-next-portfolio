---
title: "Git Feature Branch Workflow Guide"
excerpt: "Experiencing difficulties with creating a feature branch in Git? This comprehensive guide will walk you through the Git Feature Branch Workflow, a popular method used in software development projects for collaborative work."
coverImage: "/assets/blog/github-feature-branch-workflow/vscode-terminal.png"
date: "2023-12-07T09:36:21.000Z"
author:
  name: Tyler Alexander
  picture: "/assets/blog/authors/tyler.jpg"
ogImage:
  url: "/assets/blog/github-feature-branch-workflow/vscode-terminal.png"
---

# Git Feature Branch Workflow Guide

Experiencing difficulties with creating a feature branch in Git? This comprehensive guide will walk you through the Git Feature Branch Workflow, a popular method used in software development projects for collaborative work.

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Detailed Steps](#detailed-steps)
4. [A Quick Recap](#a-quick-recap)
5. [Additional References or Reading](#additional-references-or-reading)
6. [Cited Sources](#cited-sources)

## Overview

The Git Feature Branch Workflow is designed to maintain the stability of the main branch while new features or bug fixes are in development. It involves creating separate branches for these new additions, editing them, and finally merging them back into the main branch upon completion.

### Prerequisites

Ensure you have Git installed on your system and a GitHub repository configured for your project.

## Detailed Steps

1. **Creating a Feature Branch**

   Initiate a new feature by creating a branch with this command:

   ```shell
   git checkout -b feat/test
   ```

   This will create and switch you to the `feat/test` branch.

2. **Editing the Project**

   Proceed to make your desired modifications, such as updating a readme file.

3. **Staging Changes**

   To stage your changes, use:

   ```shell
   git add .
   ```

   This stages all changes in your working directory.

4. **Committing Changes**

   Commit your edits with a descriptive message, like so:

   ```shell
   git commit -m "docs: readme updated for test example"
   ```

   This records your changes with a relevant commit message.

5. **Pushing to GitHub**

   Update the GitHub remote repository with your changes and set the upstream branch:

   ```shell
   git push --set-upstream origin feat/test
   ```

   This links your local branch with the remote and pushes your changes.

   Here's a screenshot from my VSCode terminal showing these commands.

   ![VSCode terminal display](/assets/blog/github-feature-branch-workflow/vscode-terminal.png)

6. **Pull Request Creation**

   To merge your feature branch into the main branch on GitHub, follow these steps:

   a. Access your GitHub repository online.

   b. Select the "Compare & pull request" button.

   ![Button for comparing and creating pull requests](/assets/blog/github-feature-branch-workflow/github-green-compare-pull-request-button.png)

   c. Examine the auto-populated pull request details.

   d. Click on "Create pull request."

   ![Button to initiate pull request](/assets/blog/github-feature-branch-workflow/github-create-pull-request.png)

   e. Complete the process by following the on-screen instructions.

By adhering to these steps, you can efficiently employ the Git Feature Branch Workflow for developing and integrating new features into your main branch, ensuring a well-organized and transparent version history.

## A Quick Recap
- **Creating a Feature Branch**: Use `git checkout -b feat/test`
- **Editing the Project**: Make necessary changes, like updating a readme
- **Staging Changes**: Stage all changes with `git add .`
- **Committing Changes**: Commit using `git commit -m "message"`
- **Pushing to GitHub**: Push and link your branch with `git push --set-upstream origin feat/test`
- **Pull Request Creation**: Merge your branch via a pull request on GitHub

## Additional References or Reading

### Atlassian tutorial on the Git Feature Branch Workflow
The Atlassian tutorial on the Git Feature Branch Workflow outlines a process where feature development occurs in dedicated branches, separate from the `main` branch. This approach ensures the stability of the main codebase and enables easier collaboration and review through pull requests. Key steps include creating a new branch for each feature, making and committing changes, pushing the branch to a central repository, and using pull requests for review and feedback before merging into the main branch. The workflow is adaptable and can be integrated with other Git workflows like Gitflow and Forking Workflow.

For more detailed information, you can visit the Atlassian tutorial [here](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).


### Conventional Commits
The Conventional Commits specification is a set of guidelines for writing clear and consistent commit messages. It emphasizes the use of a structured format that describes the nature of changes in a precise and readable manner. Key elements include a commit type (like `fix` or `feat`), an optional scope, and a clear description. This convention supports automated tooling, improves collaboration, and facilitates the generation of changelogs and semantic versioning. It's particularly useful in maintaining an organized and interpretable commit history, aiding both contributors and users of the software.

For further details, you can visit the Conventional Commits page [here](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

## Cited Sources
1. [Atlassian Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
2. [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)