##Hey There!

*Premise:*
Welcome to the Super Secret Agent Intel Database!
Just by loading the page, you are accessing 10 random known agents from across the globe! Reload to get different agents!

*Background:*
When I saw the prompt for this exercise I thought about for a bit and wanted to do something with a little personality. I ended up doing some (what I thought were) cool designs for generating character concepts for the tabletop game Shadowrun. I decided this wasn't very accessible however and looked for a somewhat similar implementation in secret agents! One of the api's listed in the list referenced in the exercise description was the dicebear-avatar one and that really inspired me to go further down the spy path.

*Local Commands:*
npm run super -- starts the backend server on localhost:5000 and the dev environment on localhost:3000.
npm test -- runs and watches tests for changes.

*Prod Commands:*
npm build

*Backend:*
You can ping the backend at: localhost:5000/api/agents

*Custom AWS Api:*
  * [Click me to test!](https://r4pekivpz0.execute-api.us-east-2.amazonaws.com/default/retreiveAgentOriginAndName)
  * Generates a list of 10 name+countryOfOrigin objects in the response body
  * I wasn't sure if this would be considered cheating in terms of the requirement that we 'create a backend api' but I really like AWS and Azure, so wrote part of the data generation here in AWS implemented as a Lambda function triggered by an API gateway call. I have left this open so you can call it as much as you want to get country / name combination lists as much as you like. I did grab some first/last name and country list files from census data and use them to implement this api.

Things I wanted to add but didn't have time:
  * Button to generate more agents
  * Ability to select and "keep" an agent when generating more
  * Popper.js tutorial on how to use the keep button because popper is very flashy and fun
  * Automated End-to-end tests with cypress.io, actually haven't used cypress before, but it looks like it cleans up a lot of the overhead of each individual e2e test compared to say, selenium, so I was interested!
  * Male/Female/Identicon agent images based on name or randomness
  * I wanted to incorporate react/router but I honestly couldn't think of a good reason to put it in other than to just have more pages which I think would have made the app less cool