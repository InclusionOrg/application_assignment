# Assignment

## Solution

The bug we were encountering was a 500 Internal Server Error, digging deeper we see the error message in our terminal indicated a `ReferenceError` (`quotes` is not defined). We first look at the script that is supposed to be displaying the movie quotes in main.js and drop a debugger in the fetch request. We see it is returning the aforementioned 500 error and looking into our index.js where the `/quotes` endpoint resides, we see that culprit of our reference error `quotes` is being referenced here (We could've also just searched our files for `quotes` to see where it is being referenced, but I do like being methodical with debuggers). The `quotes` variable is never defined and so invoking the `getQuote()` method on this undefined object throws the reference error. Looking at the references at the bottom of this README we see mention of a random-movie-quotes package; upon examining the link we see the package includes a `getQuote()` method that returns a random movie quote string.

The steps taken to remedy are as follows:
Dan seems to have neglected to install the random-movie-quotes package he is attempting to use to generate movie quotes. Package.json was updated with the appropriate dependencies and package was installed. The module was then required and set to the `quotes` variable in the file where the package's getQuotes() method was being called. 

## Installation

- Download or clone this repo onto your local machine
- In your terminal, navigate to the root folder `application_assignment`
- Execute the following commands in your terminal:
    - `npm install` to install project dependencies
    - `node index.js` to spin up local server
- Navigate to http://localhost:3000/ in your browser to view a random movie quote
- Refresh the page to see another movie quote
- ???
- Profit

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