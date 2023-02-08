# Contributing to KMPk 16/17 Grad Mag🤝🏻

🎊If you're reading this, you're probably creating a Pull Request or planning to do so and that's great!🎊

This project is actively looking for contributors!
The following is a set of guidelines for contributing to this project, and you can see the live instance of the project [here](https://ourpromise.web.app/).

These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

**Table Of Contents**

[Code of Conduct 🗒](#code-of-conduct-🗒)

[Before You Contribute 🏁](#before-you-contribute-🏁)

[Local Setup 💻](#local-setup-💻)

[How Can You Contribute 📝](#how-can-you-contribute-📝)

- [Reporting Bugs 🐛](#reporting-bugs-🐛)
- [Suggesting Enhancements ✨](#suggesting-enhancements-✨)
- [First Code Contribution 🥇](#first-code-contribution-🥇)
- [Pull Request 🥳](#pull-request-🥳)

[Getting Your Changes Reviewed 📝](#getting-your-changes-reviewed-📝)

[Pull Request Reviewers Guide 🦮](#pull-request-reviewers-guide-🦮)

## Code of Conduct 🗒

Everyone participating in this project is requested to practice decent behaviour. Help others, share knowledge and grow your knowledge!

## Before You Contribute 🏁

Welcome to [KMPk 16/17 Grad Mag](https://ourpromise.web.app/). Before you send the pull request make sure that you read the whole guidelines.
If you have any doubts relating to an issue, comment under it and tag members if needed.
Please don't file an issue to ask a question.

We have two parallel states for our project, named `main` branch and a `dev` branch. All the pull requests related to documentations or `.github` folder, should be merged directly to the `main` branch, and all the changes which involves code, should be targeted and merged to the `dev` branch.

## Local Setup 💻

**Step 0:** Clone the forked repo and cd into it

```
git clone https://github.com/<Your username>/KMPk-1617-Grad-Mag.git
cd KMPk-1617-Grad-Mag/

# If you are making any changes to the codebase, change your branch
git checkout dev
```

**Step 1:** To install all the required packages run `npm install`.

**Step 2:** Run `npm start` to start the app. After successful compilation the app would be running in `http://localhost:3000/`.

**Note:** If the process was successful, you would receive the following at the end of your terminal

```
No issues found.
```

After receiving this, you can open [http://localhost:3000/](http://localhost:3000/) in your browser manually.

## How Can You Contribute 📝

### **Reporting Bugs 🐛**

This section guides you through submitting a bug report for this project. Following these guidelines helps maintainers and the community understand your report 📝, reproduce the behavior 💻, and find related reports 🔎.

Before you create an issue, check if it exists or not. When creating one report include as many details as possible. The information you provide will help others to resolve it.

**Note:** If you find a Closed issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

**Note:** Before submitting a bug report make sure that you are on the latest commit.

**How to Submit A Good Bug Report**

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After figuring out the issue, create an issue on that repository and provide all the information, and screenshots if necessary.

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title for the issue** to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
- **Provide specific examples to demonstrate the steps.** Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples.
- **Describe the behavior you observed** after following the steps and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected** to see instead and why.
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.
- **If the problem wasn't triggered by a specific action, describe what you were doing before the problem happened** and share more information using the guidelines below.

### **Suggesting Enhancements ✨**

This section guides you through submitting an enhancement suggestion for KMPk 16/17 Grad Mag, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions 🔎.

Before creating enhancement suggestions, please check if it exists or not. When you are creating an enhancement suggestion, please include as many details as possible. Just include the steps that you imagine you would take if the feature you're requesting existed.

**Before Submitting An Enhancement Suggestion**

- You might discover that the enhancement is already available.
- Check if there's a package which provides the same.
- Check if it was already requested.

**How To Submit A Good Enhancement Suggestion?**

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After deciding your enhancement create an issue in the issues section.

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior and explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of the project which the suggestion is related to.
- **Explain why this enhancement would be useful** to our users.

### **First Code Contribution 🥇**

Unsure on where to begin your contribution? You can start by looking at issues having `Good First Issues`, `Documentation` or `Beginner` tags. You can find them [here](https://github.com/kachun333/KMPk-1617-Grad-Mag/issues)

### **Pull Request 🥳**

Once you have [forked](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repo, you need to create your code contributions within a new branch of your forked repo.  
For general background on creating and managing branches within GitHub, see: [Git Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging).

Following are the steps to guide you:

**Step 0:** Clone the forked repo and cd into it

```
git clone https://github.com/<Your username>/KMPk-1617-Grad-Mag.git
cd KMPk-1617-Grad-Mag/
```

**Step 1:** To begin, create a new branch, give a good [branch name](https://codingsight.com/git-branching-naming-convention-best-practices/).
Note: If you are making changes to the codebase, first `checkout` the `dev` branch, else if you are making changes to the documentation or to the `.github` folder, then `checkout` the `main` branch. After this create your desired branch.

You usually create a branch like so:

```
# If changes are related to .github folder or documentation, do:
git checkout main

# If changes are related to the codebase, do:
git checkout dev

# After any of the above, create a branch for your changes.
git checkout -b [name_of_your_new_branch]
```

**Step 2:** Now make your changes and then stage your files for commit.

```
git add [File name]    --> To stage one particular files
or
git add .              --> To stage all the modified files
```

**Step 3:** Commit all the changes. The [commit message should be meaningful](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/), short and to the point.

```
git commit -m "Write a meaningful, small commit message"
```

**Step 4:** Now push the changes for review

```
git push origin <name_of_your_new_branch>
```

**Step 5:** After you push your code, github would detect the new branch and an option would be there to create a pull request. While in this step make sure you are in the right base branch, as shown below:

Changes to documentation or `.github` folder | Changes to the codebase

**Step 6:** The last step is to give a detailed description and short title in your pull request.

- **Dont forget** to [link your PR with the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) using specific keywords.
- Provide a **screen shot** if necessary.
- Give a **detailed description** on what you changed.

You successfully made a pull request 🥳.

## Getting Your Changes Reviewed 📝

<p>
Once you've submitted your pull request, you want other members of the development community to review whether integrating your change will cause problems for any users or the maintainability of the software. If you know someone who might notice mistakes then mention them in the comments.</p>
<p>
Reviewers may request you to rephrase or adjust things before they allow the changes to be integrated.  If they do, commit the amendments as new, separate changes, to allow the reviewers to see what changed since they last read your code.</p>

## Pull Request Reviewers Guide 🦮

If someone requests your review on a pull request, read the title and description, also verify whether the base branch is correct or not, then assign any other collaborators who would want to know about the proposed change. If the reporter is qualified & interested then assign it to them.

Decide whether you think that your input is needed, and that the PR should wait for your further review before being merged. If not, un-assign yourself as a reviewer and leave a comment.

Happy hacking😇...!
