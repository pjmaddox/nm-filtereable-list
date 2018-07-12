import Avatars from '@dicebear/avatars';
//import SpriteCollection from '@dicebear/avatars-male-sprites';
import SpriteCollection from '@dicebear/avatars-identicon-sprites';
const express = require('express');
import axios from 'axios';

const app = express();
const port = process.env.PORT || 5000;

let avatars = new Avatars(SpriteCollection);

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

app.get('/agents', (req, res) => {
  //Call word service, get 20 words
  //TODO - es6 promise structure? or just apicall.then
  let words = [];

  //Combine words 2 at a time to create 10 pairs of words
  

  //Get country of origin
    //from api? from list?

  //Get 10 avatars
  let svg = avatars.create('custom-seed');
    
  //send back
    
});

app.listen(port, () => console.log(`Listening on port ${port}`));