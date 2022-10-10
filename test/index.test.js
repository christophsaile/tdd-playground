const func = require('../src/index');
const CORONA_DATA = require('../mock/corona-data.json');

describe('get states with', () => {
  let data;

  beforeAll(async () => {
    // mock data + mock fetch
    data = await func.getCoronaData();
  });

  test('more than 2 cases', () => {
    // how to test a unknown outcome?
    expect(func.getStatesWithAtleast(2, 'cases', data).length).toBe(16);
  });

  test('more than 2000000 cases', () => {
    expect(func.getStatesWithAtleast(2000000, 'cases', data).length).toBe(5);
  });
});

describe('get State with', () => {
  let data;

  beforeAll(async () => {
    data = CORONA_DATA.data;
  });

  test('highest Corona cases', () => {
    expect(func.getStateWithHighestValue('cases', data)).toBe('NW');
  });

  test('highest Corona cases per Week', () => {
    expect(func.getStateWithHighestValue('casesPerWeek', data)).toBe('BY');
  });
});

describe('get top 5 states with', () => {
  let data;

  beforeAll(async () => {
    data = CORONA_DATA.data;
  });

  test('highest Corona cases', () => {
    expect(func.getTopFiveStatesWithHighestValue('cases', data)).toStrictEqual([
      'NW',
      'BY',
      'BW',
      'NI',
      'HE',
    ]);
  });
});
