import {LatLngExpression} from 'leaflet';

export const rotateLatLng = (coordinates: number[][]) : LatLngExpression[] | LatLngExpression[][] => {
  const revCoordinates = coordinates.map(coordinate => coordinate.reverse());
  return revCoordinates as LatLngExpression[] | LatLngExpression[][];
}