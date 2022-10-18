import supertest from 'supertest';

describe('Beach forecast functional tests', () => {
  it('Should return a forecast with just a few times', async () => {
    const { body, status } = await supertest(app).get('/forecast');
    expect(status).toBe(200);
    expect(body).toBe([{
      'time': '2020-04-26T00:00:00+00:00',
      'forecast': [{
        'lat': -33.792726,
        'lng': 151.289824,
        'name': 'Manly',
        'position': 'E',
        'rating': 2,
        'swellDirection': 64.26,
        'swellHeight': 0.15,
        'swellPeriod': 3.89,
        'time': '2020-04-26T00:00:00+00:00',
        'waveDirection': 231.38,
        'waveHeight': 0.49,
        'windDirection': 299.45,
      }],
    }]);
  });
});
