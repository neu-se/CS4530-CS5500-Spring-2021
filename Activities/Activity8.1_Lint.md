---
layout: page
title: Activity 8.1
permalink: /Activities/activity8-1
parent: Activities
---

# Activity 8.1: Experimenting with ES-Lint

For this activity, we will run `eslint` on the transcript app project used in previous activities and will race to list different lint rules.

This is an individual activity.

## Adding lint checker to the Transcript App

Please do the following steps to get the code ready:
1. Download (e.g. `git clone`) the Transcript App code from 
[https://github.com/neu-se/transcript-app](https://github.com/neu-se/transcript-app)
2. Run `npm install`
3. Add `eslint` by `npm install --save-dev eslint`
4. Add the following as `.eslintrc.js` the root of the project:
```
module.exports = {
  extends: [
    'eslint:all',
    'plugin:@typescript-eslint/all',
  ],
  parserOptions: {
    project: './tsconfig.json',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
  ignorePatterns: ['/*.*'],
};
```

## Running the linter

Next run the linter using `npm run lint`.  This will find over 2000 instances of lint warnings and errors.  At the end of each warning or error, it lists the rule that is being used, such as `@typescript-eslint/object-curly-spacing`.  There are almost one hundred different rules that are violated at least once in this project.

Pick one of the less common ones.  In particular, do **not** choose any of the following
```
max-len
@typescript-eslint/prefer-readonly-parameter-types
quote-props
capitalized-comments
function-call-argument-newline
@typescript-eslint/semi
@typescript-eslint/quotes
@typescript-eslint/object-curly-spacing
padded-blocks
@typescript-eslint/indent

```
Investigate the rule that you chose (again, **not** one listed above)
on the internet.  If it's a `@typescript-eslist` rule, you need to use this link:
<https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules>
where the individual rule is a markdown page: e.g.
<https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/indent.md>

Otherwise, you can look it up with
<https://eslint.org/docs/rules/>
where the individual rule is its own page: e.g.
<https://eslint.org/docs/rules/padded-blocks>

Also investigate the line of code that the problem was found for.  It should be in a `.ts` or `.tsx` file.  The lint rule page will give a reason for the rule.  Do you think that reason is valid?  If you were a developer, would you be motivated to make the change it wants you to make?  Does the rule have a quick fix?

## Enter your results in a survey.

Use the following link to enter your answers in a google form:
[Activity Form](https://docs.google.com/forms/d/e/1FAIpQLSeSnB7Xz0Aiz22bDDk5g8UnEj6jyP9hTfYwgzznShVBv8_ZvQ/viewform?usp=sf_link)

Make sure to use your correct northeastern email.  This form records your attendance for today.

## Regroup in Full Class

In the full class, the instructor may call on several students to explain what they found.

[comment]: # (LocalWords:  permalink UX Calin CoveyRoomID UI src JSON
[comment]: # (LocalWords:  github FERPA studentID eslint npm dev len
[comment]: # (LocalWords:  parserOptions warnOnUnsupportedTypeScriptVersion linter
[comment]: # (LocalWords:  ignorePatterns readonly tsx
