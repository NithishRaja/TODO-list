# README

TODO list manager to organize work load. Uses facebook's login api for authentication

## Initialization

* run `npm install`
* go to client directory and run `npm install`

## Editing code

* server side code is inside **server** directory
* client side code is inside **client** directory
* static content should be placed inside **server/public** directory
* facebook app id is inside **views/login** and **views/home**. replace existing id and use your app id
* connection to mongodb is provided. Replace `YOUR_DATABASE_NAME_HERE` and `YOUR_COLLECTION_NAME` with your preference
* provide data object inside `setDefaults.js`

## Running app

* run `mongod` to start mongo database server
* run `redis-server` to start redis database
* run `npm start`, starts server on localhost port 5000
* go to client directory and run `npm start`, starts server on port 3000
* requests sent from client uses `proxy` to reach server

## Testing

* for testing client side code include tests inside **tests** folder, then run `npm test`

## Features

* Users can add and delete TODOs
* Users can login using their facebook id
* Users can sort TODOs based upon the TODO status
