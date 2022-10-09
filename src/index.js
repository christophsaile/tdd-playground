const fetch = require('node-fetch');

async function getCoronaData() {
  const result = await fetch('https://api.corona-zahlen.org/states');
  const response = await result.json();
  return response.data;
}

function getStatesWithAtleast(amount, identifier, data) {
  return Object.entries(data)
    .filter(([_, value]) => value[identifier] > amount)
    .map(([state, _]) => state);
}

module.exports = { getCoronaData, getStatesWithAtleast };
