---
layout: page
title: Activity 10.1
permalink: /Activities/continuous-development
parent: Activities
---

# Activity 10.1 Continuous Development Pipelines

In this activity, you will configure a continuous development pipeline using [GitHub Actions](https://github.com/features/actions), [Heroku](https://heroku.com), and [Netlify](https://www.netlify.com). Our pipeline will use GitHub Actions to build and test your Covey.Town fork. After successful compilation and testing, the pipeline will deploy the backend service to Heroku, create an optimized production build of the frontend, and deploy that frontend to Netlify.

This activity is split up into three phases: setting up GitHub Actions to build and test your project, then to deploy to Heroku, and lastly, to deploy to Netlify.

## Pre-requisites
There are two pre-requisites for this activity: you must have a GitHub.com repository that is up-to-date with our main  [Covey.Town repository](https://github.com/neu-se/covey.town) (that is, you must have merged in our recent commits), and you must have a Twilio account. Khoury's internal GitHub does not support GitHub Actions, and in general, it is extremely difficult to use Khoury's GitHub in a Continuous Integration Pipeline.

### Syncing your project repository with ours
If you have not already created a fork of the [Covey.Town repository](https://github.com/neu-se/covey.town) for your project development, do so now. You will be able to complete this activity using either a public fork of our repository, or a private mirror. 

We've added a few tweaks to the repo to make it easier to complete this activity (mainly - adding the HW3 tests refactored to match the new 'towns' service name, and adding the HW4 solution). To complete this activity, you will need to [sync your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) to receive these latest updates. If you haven't yet set up this syncing, run these commands in a terminal (in your project directory):
```
$ git remote add upstream https://github.com/neu-se/covey.town
$ git fetch upstream
$ git checkout master
$ git merge upstream/master
```
You may need to resolve merge conflicts, particularly if you have made changes to `TownSettings.tsx` or `TownSelection.tsx`. Resolve these conflicts by editing the files until they are correct, and then run `git add` on the conflicted files ([see this guide for examples + detailed steps](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line)).

### Creating a Twilio account and recording the credentials
If you have not configured a Twilio account yet, [follow the instructions in the Covey.Town README](https://github.com/neu-se/covey.town#setting-up-the-backend) to set one up. You'll need this for your local development environment. You can share a single Twilio account with all of the members in your team (sharing the `.env` file), but please be careful to avoid posting the contents of your `.env` file publicly anywhere - someone else might find your credentials and run out all of the free minutes on your account. To set up GitHub Actions and Heroku, we'll need the values from your `.env` file - so be sure to get them working before proceeding.

## Set up GitHub Actions

Once your git repository is up-to-date, you can configure GitHub Actions by following these steps:
1. Log in to GitHub, and navigate to your project. Go to the "Settings" tab, and then select "Secrets." Enter each of your Twilio secrets (from your `services/roomService/.env` file) as new variables here, as shown in this screenshot:
![GitHub Actions Secrets]({{site.baseurl}}{% link Activities/Assets/week10-cd/gha-secrets-twilio.png %})
2. Enable GitHub Actions: From the GitHub interface select the "Actions" tab, and then select  "Skip this and set up a workflow yourself". Copy and paste the following into the GitHub Actions `main.yml` file in your browser, and then commit it immediately to master:

	```yaml
	name: Covey.Town CI
	on: # Controls when the action will run.
	  # Triggers the workflow on push or pull request events but only for the master branch. If you want to trigger the action on other branches, add here
	  push:
		branches: [ master ]
	  pull_request:
		branches: [ master ]

	  # Allows you to run this workflow manually from the Actions tab
	  workflow_dispatch:

	# A workflow run is made up of one or more jobs that can run sequentially or in parallel
	jobs:
	  build-and-test: #
		# The type of runner that the job will run on
		runs-on: ubuntu-latest

		# Steps represent a sequence of tasks that will be executed as part of the job
		steps:
		  - uses: actions/checkout@v2

		  - name: Build and test backend service
			env: # Pass the Twilio secrets into environmental variables for the backend tests to use
			  {% raw %}TWILIO_ACCOUNT_SID: ${{ secrets.TWILIO_ACCOUNT_SID }}
			  TWILIO_API_AUTH_TOKEN: ${{ secrets.TWILIO_API_AUTH_TOKEN }}
			  TWILIO_API_KEY_SECRET: ${{ secrets.TWILIO_API_KEY_SECRET }}
			  TWILIO_API_KEY_SID: ${{ secrets.TWILIO_API_KEY_SID }}{% endraw %}
			run: cd services/roomService; npm install && npm test

		  - name: Build and test frontend components
			run: cd frontend; npm install && npm test
	```

3. Navigate back to the "Actions" tab. You should see an entry for your most recent commit (that created the main.yml file), which by defualt is called "Create main.yml". The build should have passed. If it did not pass, here are some common troubleshooting steps:
    * If the build failed with `No tests found, exiting with code 1`, then your repository does not have any tests. Double-check that you have synced your repository with ours, and that the tests are present. GitHub Actions will automatically try to build future commits that you make as you try to fix it.
    * If the build failed due to undefined Twilio secrets, double check that you have correctly entered the Twilio secrets from your `.env` file into the GitHub Settings -> Secrets for your repository. Make sure that you have put the secrets on the same repository that you are setting up the GitHub Actions for.

## Set up Heroku
Now that we have GitHub Actions successfully running our tests, we can configure it to also automatically deploy the backend rooms service to Heroku. This way, you can have a publicly available version of your backend service, which will automatically update with any changes that you push to Git.
Note that it is possible to set up Heroku to automatically deploy every new change that you push to GitHub (without setting up GitHub Actions). Instead, we'll configure our GitHub Actions pipeline to deploy to Heroku *only* if our test suite passes.
 
1. Go to [Heroku.com](https://www.heroku.com) and create an account, or sign in if you already have one
2. After signing in, create a new app. Choose a name for your app that is somewhat descriptive - it will become part of the URL that you'll use to access the service. Click "Create app" (no need to go through "Add to pipeline...")
3. After creating your app on Heroku, open the app's settings page, revealing a page that looks like this:
![Heroku App Settings]({{site.baseurl}}{% link Activities/Assets/week10-cd/heroku-settings.png %})
4. Click "Reveal Config Vars", and enter the 4 twilio configuration variables from your `.env` file (the same 4 that you set up on GitHub Actions). Heroku's "Config Vars" are the way that we tell Heroku what variables to use for `.env` without having to commit that file into the (publicly viewable) repository. Your configuration settings on Heroku should look like this now:
![Heroku App Settings]({{site.baseurl}}{% link Activities/Assets/week10-cd/heroku-settings-expanded.png %})
5. Before navigating away from this settings page, scroll down to "Domains", and take note of the address that Heroku has provided for your app. This should say something like "Your app can be found at https://covey-deployment-example.herokuapp.com/".
6. Retrieve your personal Heroku API key. From Heroku go to "Manage Account" (click on the profile menu on  the top right of the page and then click "Account Settings". 
![Heroku Profile Menu]({{site.baseurl}}{% link Activities/Assets/week10-cd/heroku-account-settings-menu.png %})
Scroll down to "API Key" and click "Reveal". Copy this key, you'll use it in the next step.
7. Return to the GitHub Settings -> Secrets pane, and add a new secret: `HEROKU_API_KEY`, setting the value to the exact string that you copied from "API Key" in the last step.
8. Edit your GitHub Actions configuration to include a new job for deploying to Heroku. Using the editor directly on GitHub.com or on your local machine, edit your GitHub Actions configuration file (`.github/workflows/main.yml`). Add the following (being careful to not add additional indentation - the indentation for "deploy" should match the indentation for "build-and-test" - do NOT add "deploy" nested under "build-and-test"):
	```
	  deploy:
		if: github.ref == 'refs/heads/master'
	    needs: build-and-test
		runs-on: ubuntu-latest
		steps:
		  - uses: actions/checkout@v2
		  - uses: akhileshns/heroku-deploy@v3.12.12 # Deploy to Heroku action
			with:
			  heroku_api_key: {% raw %} ${{secrets.HEROKU_API_KEY}} {% endraw %}
			  heroku_app_name: "put your heroku app name here"
			  heroku_email: "put your heroku email here"
	```
 Set `heroku_app_name` to the name that you choose for your Heroku app in step 2. Set `heroku_email` to the email address that you used when you created your Heroku account.
 9. Commit your changes to `main.yml`. This should trigger a new build on GitHub Actions. If you need to troubleshoot this (e.g. incorrect API key, app name, or other configuration errors), you can get results from the deploy faster by commenting out (with a `#`) the line `needs: build-and-test`, which will allow the deploy to run in parallel to the tests.
 10. To confirm that your service is successfully deployed, try to visit it in your browser. Use the URL that you noted in step 5 ("Your app can be found at https://covey-deployment-example.herokuapp.com/"). Append `towns` to the URl, and visit it in your browser (e.g. `https://covey-deployment-example.herokuapp.com/towns`). After a short delay, you should see the response `{"isOK":true,"response":{"towns":[]}}`.

## Set up Netlify
The last step to our continuous development pipeline will be to automatically deploy our frontend to Netlify. Netlify will create an optimized production build of your frontend (by running `npm run build`) and host it in their globally-distributed content delivery network.
 
1. Create a free account on [Netlify](https://www.netlify.com). We suggest signing up with GitHub.
2. After logging in, select "Create a new site from git", and then select "GitHub" as your git provider. Follow the prompts to connect Netlify with GitHub, and then choose the account/organization that has your Covey.Town fork and select the repository. Leave "branch to deploy" as "master". Set the build command to:
`CI= npm run-script build` and publish directory to `build`. Click deploy site.
3. Click on "Site Settings" and then select "Build & deploy" from the left-hand sidebar. Click on "Edit settings" in the first section ("Build settings"). Change base directory to `frontend`. Your settings shoudl now look like this:
![Netlify settings]({{site.baseurl}}{% link Activities/Assets/week10-cd/netlify-build-settings.png %})
4. Scroll down on this same settings page to "Environment". This is where we define the `.env` variables that Netlify should use (without needing to put `.env` in a publicly viewable place). Click "Edit variables" and add a single variable: `REACT_APP_TOWNS_SERVICE_URL` should be set to your heroku server name (https://yourapp-name.herokuapp.com, find in heroku "settings" page for your app).
5. Now scroll back up on Netlify's build & deploy settings page to "Build hooks" and click "Add build hook". Choose a name like "gh-action-trigger". This will produce a new "web hook" URL: whenever we make a POST request to this address, it will trigger a build on Netlify. We'll use this in the next step to connect GitHub Actions to Netlify.
6. Return one last time to the GitHub Settings -> Secrets page. Create a new secret called `NETLIFY_BUILD_WEBHOOK`, and set its value to the web hook URL created in step 5 (should be something like `https://api.netlify.com/build_hooks/asd89348923dfah`). This will keep the web hook URL a secret, so that only our scripts can trigger a build on Netlify (if we put this hook URL in our GitHub Actions configuration directly, others would be able to trigger a build too!)
7. Edit your GitHub Actions `main.yml` file one more time. We'll add one last step to the `deploy` job, which will call this webhook, triggering a deploy on Netlify. Update your `deploy` job to look like this:
	```
	  deploy:
		if: github.ref == 'refs/heads/master'
	    needs: build-and-test
		runs-on: ubuntu-latest
		steps:{% raw %}
		  - uses: actions/checkout@v2
		  - uses: akhileshns/heroku-deploy@v3.12.12 # Deploy to Heroku action
			with:
			  heroku_api_key: ${{secrets.HEROKU_API_KEY}}
			  heroku_app_name: "put your heroku app name here"
			  heroku_email: "put your heroku email here"
          - uses: muinmomin/webhook-action@v1.0.0
            with:
              url: ${{ secrets.NETLIFY_BUILD_WEBHOOK }}
              data: "{}"
{% endraw %}
	```
5. Netlify will take several minutes to build your site. From the "Deploys" view of Netlify's control panel, you can see the status of each build. Once you have a successful build, it will show a URL where your site is published (https://mystifying-beaver-b51dd2.netlify.app in the example below). Click the "Stop auto publishing" button to prevent Netlify from automatically publishing updates from GitHub to your deployed site (we want it to do this only from the GitHub Action).
![Netlify deploy view]({{site.baseurl}}{% link Activities/Assets/week10-cd/netlify-done.png %})
