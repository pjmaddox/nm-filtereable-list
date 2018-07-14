//import SpriteCollection from '@dicebear/avatars-male-sprites';
const Avatars = require('@dicebear/avatars').default;
const SpriteCollection = require('@dicebear/avatars-identicon-sprites').default;
var unirest = require('unirest');
const express = require('express');
const RapidAPI = new require('rapidapi-connect');
var axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

let agents = [];
///Returns an array of objects of form:
///{ codeName: string, agentImage: svgElement }
app.get('/api/agents', (req, res) => {
  console.log("Made it into correct area!");
  const agentsToGenerate = 10;
  res.send({ results: [
    { codeName: "asdasd3", agentImage: "image3" },
    { codeName: "asdasd1", agentImage: "image1" },
    { codeName: "asdasd2", agentImage: "image2" }    
  ]});
  // for(var i = 0; i < agentsToGenerate; ++i) {
  //   getRandomWord(res, agentsToGenerate);
  // }
});

let avatars = new Avatars(SpriteCollection);
function getRandomWord(res, agentsToGenerate) {
  //Wanted to use axios, have to use this instead for arbitrary reasons...
  unirest.get("https://wordsapiv1.p.mashape.com/words?random=true")
    .header("X-Mashape-Key", "Oyb63GRec9mshPSKKxIozb1oeVKnp1C7Rsfjsnc3qN3nT2hDFV")
    .header("Accept", "application/json")
    .end(function (result) {
      let agentAvatar = avatars.create(result.body.word);
      agents.push({ codeName: result.body.word, agentImage: agentAvatar });
      
      if (agents.length == agentsToGenerate) {
        res.send({results: agents});
        agents = [];
      }
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));