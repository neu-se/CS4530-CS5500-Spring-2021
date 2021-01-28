---
layout: page
title: Installing a Development Environment
permalink: /tutorials/week2-git
parent: Tutorials
---
This tutorial describes the basic usage of git, a version control system to
track code changes among yourself and your collaborators.

Contents:
* [Accessing Khoury Github](#khoury-github)
* [Gitting Started!](#gitting-started)
* [Basic Commands](#basic-commands)
* [Branching](#branching)
* [Merging and Various Errors](#merging-and-various-errors)
* [More Advanced Commands and Fun Stuff](#more-advanced-commands-and-fun-stuff)

If you run into any difficulties following any of these steps, please post
(in a non-private question) on Piazza.

# Accessing Khoury Github

We recommend using the Khoury Github for this class, as it will be the site
you use for your final project. You can login with your Khoury account here:
https://github.ccs.neu.edu/login. If you do not already have a Khoury account,
you can request one at https://my.khoury.northeastern.edu/account/apply#_ga=2.224677850.1566269507.1611587596-1185439082.1610317450. Once you do
this, you will be emailed your account information when it is approved by the
IT department.

# Gitting Started!

Git is a version control system that lets you share versions of code remotely
with other collaborators (or have a remote version you can save and access from
any computer). The central platform that we will be using is an online service
called Github (other services also exist, like GitLab). You can create your own
account online at https://github.com/, or use the Khoury Github mentioned above.
Again, we recommend using the Khoury Github, as this will be what you will be
using for your final projects.

Once you login, you can create a new repository (which is a another name for
a git enabled folder) by clicking "New" button in the upper left corner:
    ![image](./assets/week2-git/new-repo.jpg)

Use the screen to enter a new folder (repo) name. For example, I chose
/test-repo. Additionally select Public or Private depending on who you
want to be able to see your project and click add README as well. Then click
"create repository".
    ![image](./assets/week2-git/new-repo-settings.jpg)

This should put you on the webpage of the new repository you just created!
    ![image](./assets/week2-git/new-repo-shown.jpg)

To get this repository on your local computer, you will do a process called
cloning. Two steps are needed before you can do this process:

1. You need to install git locally on your computer.
2. You need to add an ssh key to your github page (or you can clone using
  https).

For step one, if you are on a linux machine, type `sudo apt-get update` and then
type `sudo apt-get install git`.
If you are on a mac, type `brew install git`. If you are on a windows machine,
`Not sure what to do, insert here`.

After you install git, navigate to your home directory and type `ssh-keygen`.
Press enter for all options, and optionally enter a password when prompted. It
is less secure to not enter a password, but many people opt not to have one
when working on a personal computer to make their workflow easier. Next, on
the Github website, access your account settings, by clicking on the little
icon on the top right and selecting `Settings` from the drop-down menu.
    ![image](./assets/week2-git/github-settings.jpg)

Click on the `SSH and GPG keys` tab and click `New SSH-key`. Navigate to your
home directory and type `cat .ssh/id_rsa.pub`. This is your public key, make
sure not to access `.ssh/id_rsa` instead, as this is your private key. Copy
and paste this public key into the box, give it a recognizable title (something
that you would recognize as your computer) and click `Add SSH key`.
    ![image](./assets/week2-git/github-ssh-key.jpg)

After you add your ssh key, you are ready to clone the repository locally!
Navigate back to your repo page and locate the green `Code` button with an
arrow. Make sure it says `Clone with SSH` and click the clipboard to copy
the location. Navigate back to your terminal and type
`git clone [copied location]`. Hit enter to accept the SSH prompt (this will
only happen the first time you access a repo). This will clone your repo
locally for you to edit! If you encounter an error saying you do not have
access rights, you have messed something up in adding your ssh key. Retry
the steps for generating and adding the public key to your Github.

# Basic Commands

There are a few basic command you need to know to use git effectively.
The basic workflow of working with git is when you resume working on a project,
you type `git pull` in the github enabled folder. This will sync your local
branch with the remote server (i.e. the `Master` branch,
implicitly selected or explicitly  denoted `origin master`).
Then you work on your code saving normally. When you are done (or want to
create a checkpoint), you first add your code, commit it (with a message),
and then push it. To check on the status of your commits, you can type
`git status`. This command will show you what files you have edited locally
that are not up to date with the master branch in red. To add them, type
`git add [insert name of file]` for each file to add. Of note, you can tab
complete the file name and use regular expressions to add more than one file.
After you add a file, it will turn green in the `git status` menu.
Then, you type `git commit -m "[Some explanatory message]"`. Commits are how
git tracks versions of the code. Finally, you type `git push` and this should
update the master branch (seen on the website) with your code changes.

For review, when working on code you:
1. `git pull`
2. Work on your code
3. `git add [file name]`
4. `git commit -m "[Descriptive message]"`
5. `git push`

# Branching

The above workflow is great when you are the only developer on a project.
Now we will discuss an important concept when working with other developers:
branching.

# Merging and Various Errors

# More Advanced Commands and Fun Stuff

- One of the best shortcuts is using flags for `git commit`. In particular, if
you wish to add all the changed files that are currently being tracked (i.e.
already exist in the main branch), you can use the flag `-a` when committing.
This equates to typing `git commit -am "[Descriptive Message]"` instead of
`git add`ing each file and then committing.
- Github supports emojis! To use one, consult the list here: https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md. Select your favorite and add
the id of the emoji in question to your git commit message. A personal favorite
of one of the authors is `":space_invader:"`. These are fun to add to any
commit, but in particular a `git commit -am "Done!! :space_invader:"` for when
you finish a programming assignment is always fun :)
