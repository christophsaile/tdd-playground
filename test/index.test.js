const func = require('../src/index');

describe('get states with', () => {
  let data;

  beforeAll(async () => {
    // mock data?
    data = await func.getCoronaData();
  });

  test('more than 2 cases', () => {
    // how to test unknown outcome?
    expect(func.getStatesWithAtleast(2, 'cases', data).length).toBe(16);
  });

  test('more than 2000000 cases', () => {
    expect(func.getStatesWithAtleast(2000000, 'cases', data).length).toBe(16);
  });
});
