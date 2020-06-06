---
title: 4 common issues in git and how to fix them.
author: nnnkit
author_title: Ankit
author_url: https://github.com/nnnkit
author_image_url: https://avatars2.githubusercontent.com/u/3122626?v=4
tags: ['git']
---

## Change the last commit message

Lot of times we make typo while typing commit message or the message is unclear or incorrect. We want to change that.

If the commit is on your local system not pushed to Github or Gitlab etc.

```bash
git commit --amend -m [your message]
```

If the commit is pushed to Github.

- You need to change the local message.
- Force push the commit.

```bash
git commit --amend -m [your message]
git push --force-with-lease <repository> <branch>
```

## Do more with git log

When you type `git log` to see the commit history the standard output is not very friendly. It contains lots of text. But we have you covered. You can customize the provided information using flags.

- `--oneline` displays one commit per line with message.
- `--stat` displays the modified files, number of lines added and removed etc in each commit.
- `--graph` enables you to view log as graph.

```bash
git log --oneline
git log --stat
git log --graph
```

> TIPS: When you use these commands terminal opens `vim` editor. To close that just press **`q`** after `:`.

## Pull without making commit

Sometimes we want to pull form any branch and keep the local modification. To do this we will use `stash` to hide your changes, pull and `stash pop` to bring those changes back.

```bash
git stash
git pull
git stash pop
```

## Move the commit from one branch to another

For example you made some commit on the `master` branch. Now you want to move those changes to a new branch `develop` so, to do that.

- Move to `develop` branch using checkout use (-b) to create new branch
- Use `git log --oneline` to show all the commits and get the hash of the commit you wan tto move.
- Use `git cherry-pick [hash]` to get the changes

Replace the `[hash]` with the hashid

```bash
git checkout develop
git log --oneline
git cherry-pick [hash]
```
