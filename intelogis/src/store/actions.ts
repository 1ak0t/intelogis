import {createAction} from '@reduxjs/toolkit';
import {coordinatesArrayType} from '../types/coordinatesType';

export const setActiveRoute = createAction<number>('orders/setActiveRoute');
export const setPinsOnMap = createAction<coordinatesArrayType>('map/setPinsOnMap');