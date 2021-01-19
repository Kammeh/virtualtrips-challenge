# Introduction

This aims to fulfil the criteria for the Frontend part of the Virtual Trips code challenge.  I've tried to keep the interface as clean as possible, without restricting the data returned too much.

## Technology choices

This project was created with Create React App, and utilises React App Rewired & Customise CRA to implement styled-jsx.  Styled-jsx was the choice for CSS-in-JS as I blieve it's easier to read and implement within individual components, and I have also implemented nesting via styled-jsx-plugin-sass.

## App Breakdown

* __src__ - All working files
  * __components__ - Components within the app, broken down to a folder per component
  * __utils__ - Any utility and helper files, currently contains the API integration
  * App.js - Main file
* .babelrc - babel configuration file
* config-overrides.js - Customise CRA config file

## Running the app

### Installation

`npm install`

### Run

`npm run start` - Will start a local version on localhost:3000

## Wishlist to do

If I were taking this further I would look to implement the following:
* Tests
* Display results on an interactive map of GB
* Implement better communication to end user, looking at messaging around CTA's and error messaging
* Better error handling