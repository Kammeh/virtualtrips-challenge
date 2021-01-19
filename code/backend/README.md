# Introduction

This aims to fulfil the criteria for the Backend part of the Virtual Trips code challenge.  I've tried to keep the code as clean and basic as possible.

## Technology choices

The project uses express for handling the API routing and implements a few express packages to help with security and user experience (helmet, compression, cors).  I've implemented a custom error handling middleware to ensure all errors are caught and returned consistenly, and have implemented babel to allow for the use of ES6 functionality.

I've setup and imported the data provided into an sqlite database, held within the `db` folder, and wrote some mapping functions for the `sqlite3` npm package to allow the use of promises instead of callbacks.

Routes have been broken down into a v1 folder to allow for future releases to be handled.

Nodemon has been implement for local development

## App Breakdown

* __db__ - SQLite database file
* __src__ - All working files
  * __database__ - Database connection and Mapping file for interaction with SQLite DB
  * __routes__
    * __exceptions__ - Custom error exceptions
    * __middleware__ - Custom middleware
    * __v1__ - API Routes for V1
  * __services__ - Logic files
    * __locations__ - Logic related to locations endpoints
  * app.js - Express app setup
  * index.js - Server setup
* .babelrc - babel configuration file

## API documentation
### Get Location

* __URL__
  /v1/locations?q=:searchterm

* __Method__
  GET

* __Data Params__
  `q=[string]`

* __Success Response__
  * __Code__: 200
  __Content__:
    `[{ name: 'Location Name', latitude: 12.12345, longitude: 12.12345 }]`

* __Error Response__
  * __Code__: 400
  __Content__: 
  `{ message: 'Error message', details: [Any extra details] }`

  OR

  * __Code__: 404
  __Content__: 
  `{ message: 'This endpoint doesn't exist', details: [Any extra details] }`

## Running the app

### Installation

`npm install`

### Run

`npm run watch` - Will start a local version on localhost:4000

## Wishlist to do

If I were taking this further I would look to implement the following:
* Tests
* Add limit parameter to limit results
* Add user location and distance parameters to allow users to search for locations within X miles