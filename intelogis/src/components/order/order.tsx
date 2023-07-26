import './order.scss'
import {useAppSelector} from '../../hooks';
import {useDispatch} from 'react-redux';
import {setActiveRoute, setPinsOnMap} from '../../store/actions';
import {coordinatesArrayType} from '../../types/coordinatesType';

type OrderProps = {
  number: number;
  coordinates: coordinatesArrayType;
}

function Order({number, coordinates}: OrderProps) {
  const activeOrder = useAppSelector(state => state.activeRoute);
  const dispatch = useDispatch();

  return (
    <article className={`order ${(number === activeOrder) ? 'order--active' : ''}`} onClick={() => {
      dispatch(setActiveRoute(number));
      dispatch(setPinsOnMap(coordinates));
    }} >
      <h1 className='order__title'>Заявка {number}</h1>
      <span className='order__coordinates'>Точки маршрута:</span>
      {coordinates.map(coordinate => <span className='order__coordinates' key={coordinate[0]}>{coordinate[0]} {coordinate[1]}</span>)}
    </article>
  );
}

export default Order;