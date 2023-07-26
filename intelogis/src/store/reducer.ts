import {createReducer} from '@reduxjs/toolkit';
import {routes, routesType} from '../mocks/coordinates';
import {setActiveRoute, setPinsOnMap, setRoute} from './actions';
import {coordinatesArrayType} from '../types/coordinatesType';
import {LatLngExpression} from 'leaflet';

type initialStateType = {
  routes: routesType;
  activeRoute: number | null;
  pins: coordinatesArrayType;
  polyline:  LatLngExpression[] | LatLngExpression[][];
}

const initialState: initialStateType = {
  routes: routes,
  activeRoute: null,
  pins: [],
  polyline: [],
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveRoute, (state, action) => {
      state.activeRoute = action.payload;
    })
    .addCase(setPinsOnMap, (state, action) => {
      state.pins = action.payload;
    })
    .addCase(setRoute, (state, action) => {
      state.polyline = action.payload;
    })
});

export {reducer};