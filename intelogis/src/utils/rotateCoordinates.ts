import {LatLngExpression} from 'leaflet';
import {coordinatesArrayType} from '../types/coordinatesType';

export const rotateLatLng = (coordinates: coordinatesArrayType) : LatLngExpression[] | LatLngExpression[][] => {
  const revCoordinates = coordinates.map(coordinate => coordinate.reverse());
  return revCoordinates as LatLngExpression[] | LatLngExpression[][];
}