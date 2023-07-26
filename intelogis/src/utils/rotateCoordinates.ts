import {LatLngExpression} from 'leaflet';
import {coordinatesArrayType} from '../types/coordinatesType';

export const rotateLatLng = (coordinates: coordinatesArrayType) : LatLngExpression[] | LatLngExpression[][] => {
  const coorCopy = [...coordinates];
  const revCoordinates: coordinatesArrayType = coorCopy.map(coordinate => {
    const  coordLat = coordinate[0];
    const  coordLng = coordinate[1];
    return [coordLng, coordLat]
  });
  return revCoordinates as LatLngExpression[] | LatLngExpression[][];
}