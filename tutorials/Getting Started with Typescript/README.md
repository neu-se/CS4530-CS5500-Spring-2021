
# Getting Started With Typescript

Typescript is a superscript of JavaScript which adds type information and other features.

## Pre-requisites

- NodeJS
- VSCode (recommended but not required)

## Installation

1. Open VSCode and press the ctrl + `~` (Tilde or back tick key) to open a terminal.`
  - Optionally you can open a separate shell (Do not use powershell)
2. Run the command `npm install -g typescript` in the terminal.
  - Typescript should now be installed globally and accessible from the terminal.
3. Verify the installation using the command `tsc -v` in the terminal. (Do NOT use powershell)
  - ![image](./images/installing-tsc.JPG)

## Hello World

1. Create a new directory and open it with VSCode.
2. Create a new file called `hello-world.ts`
3. Add the following code to the file:
  ```
    console.log('Hello, World!');
  ```
4. Open the terminal with ctrl + `~`.
  - Ensure that you are in the same directory as `hello-world.ts`.
5. Run the command `tsc hello-world.ts`
  - This will generate a JS file called `hello-world.js`
6. Run the file with node using the command `node hello-world.js`.
  - This will give the below result.
  - ![image](./images/result.JPG)
