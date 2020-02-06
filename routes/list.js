var express = require('express');
var router = express.Router();
const axios = require('axios');
const urlGet = 'https://swapi.co/api/starships/';


async function getShips() {
  try {
    const response = await axios.get(urlGet);
    const arr = [];
    const obj = response.data.results;
    for (let i = 0; i < obj.length; i++) {
      arr.push(obj[i].name);
    }
    return arr;
  } catch (error) {
    console.error(error);
  }
}

router.all('/', async (req, res) => {
  return res.json(await getShips());
});

module.exports = router;
