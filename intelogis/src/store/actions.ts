import {createAction} from '@reduxjs/toolkit';
import {coordinatesArrayType} from '../types/coordinatesType';
import {LatLngExpression} from 'leaflet';

export const setActiveRoute = createAction<number>('orders/setActiveRoute');
export const setPinsOnMap = createAction<coordinatesArrayType>('map/setPinsOnMap');
export const setRoute = createAction<LatLngExpression[] | LatLngExpression[][]>('map/setRoute');