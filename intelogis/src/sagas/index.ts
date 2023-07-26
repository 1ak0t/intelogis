import {takeEvery, put, call} from 'redux-saga/effects'
import {setPinsOnMap, setRoute} from '../store/actions';
import {getRoutes} from '../services/routes/api';
import {coordinatesArrayType} from '../types/coordinatesType';
import {rotateLatLng} from '../utils/rotateCoordinates';

export function* workerSaga(action: any) {
  const coord: coordinatesArrayType = [...action.payload];
  // @ts-ignore
  const data = yield call(getRoutes, coord);
  const rotateData = rotateLatLng(data);
  yield put(setRoute(rotateData));
}

export function* watchClickSaga() {
  yield takeEvery(setPinsOnMap, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}