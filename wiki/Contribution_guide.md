# Contribution guide
Contribution to this project will be accepted **only** by following this guide.

## 1. Fork
Fork this repository to your own Github account.

## 2. Clone
Run `git clone https://github.com/yourusername/onap-ui-angular.git` to clone your forked repository on your local machine. Don't forget to run `npm install` in your freshly cloned repository to install all dependencies.

## 3. Configure travis
Follow the [Deploying storybook to a fork's github pages] to configure your personal travis settings.

## 4. Make sure your fork is synced
This repository has a hook (powered by [backstroke](http:/backstroke.us)), that upon each change to the `master` branch sends a pull request with the changes to all of its forks. Make sure to monitor these pull request and keep your fork in sync. 

## 5. Workflow
Whenever starting to work on your new contribution, first of all make sure your fork is synced (no pending pull requests). An important rule to follow is to *never do any work and commits on your master branch*. Your fork's `master` should serve only as a copy of the original.
Workflow is as following (on your local clone of course):
* `git checkout master`
* `git pull` (after you made sure your fork's master is synced)
* `git checkout -b your-branch`
* Do some work and commit your changes
* If there were changes on the original repo while you were doing your work:
    * Merge relevant pull request into your fork
    * `git checkout master`
    * `git pull`
    * `git checkout your-branch`
    * `git rebase master`
* Push your branch to your fork
* Create a new pull request from your branch to the original repo's master (NOTE: **do not create a pull request to your fork's master**)
