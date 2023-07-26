import {coordinatesArrayType} from '../types/coordinatesType';

export type routesType = {
   number: number;
  coordinates: coordinatesArrayType;
}[];

export const routes: routesType = [
  {
    number: 1,
    coordinates: [
      [59.84660399, 30.29496392],
      [59.82934196, 30.42423701],
      [59.83567701, 30.38064206],
    ]
  },
  {
    number: 2,
    coordinates: [
      [59.82934196, 30.42423701],
      [59.82761295, 30.41705607],
      [59.84660399, 30.29496392],
    ]
  },
  {
    number: 3,
    coordinates: [
      [59.83567701, 30.38064206],
      [59.84660399, 30.29496392],
      [59.82761295, 30.41705607],
    ]
  }
]