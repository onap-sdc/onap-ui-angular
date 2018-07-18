# Deploying storybook to a fork's github pages
By following the steps in this document, you will be able to deploy storybook to your own fork's github pages (useful for a staging environment that can be reviewed by a designer). 

## 1. Enable the repository in your travis homepage
After you've forked this repository, go to [travis](https://travis-ci.org), and sign in with your Github account. Then go to your profile page by clicking your avatar in the top right corner. Inside the profile page, filck the onap-ui-angular repository switch on. Travis is now enabled for your repository.

## 2. Define environment variables
Go to your repository setting in travis. There are two environment variables you need to define:
* GITHUB_TOKEN: your personal access token. If you don't know how to create one, follow this [guide](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/). When you create your token, use 'repo' permissions only. Make sure the 'Display value in build log' switch is off, so that your token will be encrypted.
* DEPLOY: set this variable to 1 if you want builds to trigger deployment, 0 otherwise. This time, make sure the 'Display value in build log' switch is on. NOTE: setting this to 1 will trigger a deployment on **every** branch you push to your repo, not only on master (because no work should be done on your fork's master anyways.)

## 3. Check that travis is working
Push a new branch to your fork and check that travis ran a build on your branch and deployed it. The deployment address should be https://*username*.github.io/onap-ui-angular
