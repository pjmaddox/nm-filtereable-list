//import SpriteCollection from '@dicebear/avatars-male-sprites';
//import SpriteCollection from '@dicebear/avatars-female-sprites';
const Avatars = require('@dicebear/avatars').default;
const SpriteCollection = require('@dicebear/avatars-identicon-sprites').default;
var unirest = require('unirest');
const express = require('express');
const RapidAPI = new require('rapidapi-connect');
var axios = require('axios');
const _ = require('lodash');


const app = express();
const port = process.env.PORT || 5000;

let avatars = new Avatars(SpriteCollection);
const agentsToGenerate = 10;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

///Returns an array of objects of form:
///{ codeName: string, agentImage: svgElement }
app.get('/api/agents', (req, res) => {
  originNameTest(res);
});

let agents = [];
var originNameTest = (res) => {
  axios.get("https://r4pekivpz0.execute-api.us-east-2.amazonaws.com/default/retreiveAgentOriginAndName")
    .then((result) => {
      console.log("AWS call successfully returned.");
      agents = result.data.agents;
      
      for(var i = 0; i < agentsToGenerate; ++i) {
        getRandomWord(res, agentsToGenerate);
      }
    })
    .catch((error) => {
      console.log("There was an error with the AWS API call.");
    });
}

let wordReceivedCount = 0;
function getRandomWord(res, agentsToGenerate) {
  //Wanted to use axios, have to use this instead for arbitrary reasons...
  //Also: storing api key in plaintext is a noob move =\
  unirest.get("https://wordsapiv1.p.mashape.com/words?random=true")
    .header("X-Mashape-Key", "Oyb63GRec9mshPSKKxIozb1oeVKnp1C7Rsfjsnc3qN3nT2hDFV")
    .header("Accept", "application/json")
    .end(function (result) {

      if (result.code != 200) {
        console.log("Unirest api not completed successfully.");
        switch (result.code) {
          case 400:
            console.log();
            break;
          case 500:
            console.log("500 Error from WordsAPi");
          default:
            console.log("There was an error with the WordsAPI. Hopefully it will be corrected soon");
        }
        res.send({ statusCode: 500, errorMessage: "There was an error with the WordsAPI. Hopefully it will be corrected soon" });
      }
      
      agents[wordReceivedCount].codeName = result.body.word.toUpperCase();
      agents[wordReceivedCount].agentImage = avatars.create(result.body.word);
      ++wordReceivedCount;
      
      if (wordReceivedCount == agentsToGenerate) {
        res.send({statusCode:200, results: agents});
        agents = [];
        wordReceivedCount = 0;
      }
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));