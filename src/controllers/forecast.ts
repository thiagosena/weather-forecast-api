import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('forecast')
export class ForecastController {
  @Get()
  public getForecastForLoggedUser(_: Request, res: Response): void {
    res.send([
      {
        time: '2020-04-26T00:00:00+00:00',
        forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: 'Manly',
            position: 'E',
            rating: 2,
            swellDirection: 64.26,
            swellHeight: 0.15,
            swellPeriod: 3.89,
            time: '2020-04-26T00:00:00+00:00',
            waveDirection: 231.38,
            waveHeight: 0.49,
            windDirection: 299.45,
          },
        ],
      },
    ]);
  }
}
