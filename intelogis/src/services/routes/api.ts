import {createAPI} from '../axios/api';
import {URL_PARAMS} from '../../consts/axios';
import {coordinatesArrayType} from '../../types/coordinatesType';
import {rotateLatLng} from '../../utils/rotateCoordinates';

export const getRoutes = async (points: coordinatesArrayType) => {
  const api = createAPI();
  const pointsString = rotateLatLng(points).join(';');
  const {data} = await api.get(`${pointsString}${URL_PARAMS}`);
  return data.routes[0].geometry.coordinates;
}