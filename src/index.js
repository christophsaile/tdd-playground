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

function getStateWithHighestValue(identifier, data) {
  return Object.entries(data).reduce(([prevKey, prevValue], [currKey, currValue]) => {
    if (prevValue[identifier] < currValue[identifier]) {
      return [currKey, currValue];
    }
    return [prevKey, prevValue];
  })[0];
}

function getTopFiveStatesWithHighestValue(identifier, data) {
  return Object.entries(data)
    .sort((prev, curr) => curr[1][identifier] - prev[1][identifier])
    .slice(0, 5)
    .map((elem) => elem[0]);
}

module.exports = {
  getCoronaData,
  getStatesWithAtleast,
  getStateWithHighestValue,
  getTopFiveStatesWithHighestValue,
};
