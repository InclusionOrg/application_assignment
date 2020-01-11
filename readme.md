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

## My solution
I found that it was a 500 Internal Server when I started the server up. Knowing that `quotes` is undefined, I looked into the index.js file to see the '/quotes' endpoint. I realized that the quotes isn't defined. The Readme reference provided a link for me to install the package. Utilizing the right syntax for line 4, the getQuotes() method will not throw an error. I saved the file, restarted the server again and then the quote popped up! Refreshing the page generates another code.

## How to RUN this on a web server
1. Clone this repo on local machine
2. In the terminal, cd into the root folder 'application_assignment
3. Execute the command 'npm install npm@latest -g' in terminal to install dependencies
4. Run 'node index.js' to spin up local server
5. Go to https://localhost:3000/ in browser to see a random movie quote
6. Refresh the page again to see another quote of the day ~


![working app](app.gif)

## Submission Requirements

Please include the url to your forked repository with the fixed webserver in your application to Inclusion's program.

## References

- [Random Movie Quotes NPM Docummentation](https://www.npmjs.com/package/random-movie-quotes)
- [How to contribute to a github project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/)