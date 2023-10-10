# Frontend Mentor - Dictionary web app solution

This is a solution to the [Dictionary web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [Built with](#built-with)
- [Deployment](#deployment)

## Overview

### The challenge

Users should be able to:

- Search for words using the input field
- See the Free Dictionary API's response for the searched word
- See a form validation message when trying to submit a blank form
- Play the audio file for a word when it's available
- Switch between serif, sans serif, and monospace fonts
- Switch between light and dark themes
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences using the `prefers-color-scheme` media query

### Screenshot

![Screenshot of the dictionary web app](./screenshot.jpg)

## Built with

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [use-sound](https://github.com/joshwcomeau/use-sound)

## Deployment

This app is deployed to GitHub Pages at https://kwln.github.io/frontend-mentor-dictionary-web-app/ using [gh-pages](https://github.com/tschaub/gh-pages). To push the app to the repository (and effectively deploy it), run:

```
npm run deploy
```

This will build the app and store it in the `build` directory, then push the contents of that directory to the `gh-pages` branch of the repo.

For end-to-end instructions on how to set up the app and repository for `gh-pages`, see https://github.com/gitname/react-gh-pages.
