import {createReducer} from '@reduxjs/toolkit';
import {routes, routesType} from '../mocks/coordinates';
import {setActiveRoute, setPinsOnMap} from './actions';
import {coordinatesArrayType} from '../types/coordinatesType';

type initialState = {
  routes: routesType;
  activeRoute: number | null;
  pins: coordinatesArrayType;
}

const initialState: initialState = {
  routes: routes,
  activeRoute: null,
  pins: [],
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveRoute, (state, action) => {
      state.activeRoute = action.payload;
    })
    .addCase(setPinsOnMap, (state, action) => {
      state.pins = action.payload;
    })
});

export {reducer};