# Assignment

## Objectives

By the end of this project you will:

- clone a Github project.
- install a npm package.
- debug a piece of code.

## Introduction

Our intern Dan is working on this killer Movie Quotes App that returns a random movie quote. Right now all it does is render a blank screen in the web browser. Fork the repository found here and help Dan fix it.  

## Specifications

The finished project:

- loads a new fact when you refresh the page.
- runs with no errors.
- has the readme updated with how to run this web server.

![working app](app.gif)

## Submission Requirements

Please include the url to your forked repository with the fixed webserver in your application to Inclusion's program.

## References

- [Random Movie Quotes NPM Docummentation](https://www.npmjs.com/package/random-movie-quotes)
- [How to contribute to a github project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/)

With Dan having layed the groundwork, I looked into what was missing. After installing dependent packages with the "npm i express random-movie-quotes" command, I looked into the back end to see why the quotes were not showing up. The error messages said that the server and the request were not connected. In connecting the seed data from the newly installed module, I required it in the index.js file. I then input "npm start" to get the program to run through, and saw that the quotes were coming in. After refreshing several times, random different quotes came in as well.