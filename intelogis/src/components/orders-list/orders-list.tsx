import Order from '../order/order';
import './order-list.scss'
import {useAppSelector} from '../../hooks';

function OrdersList() {
  const routes = useAppSelector(state => state.routes);
  const activeRoute = useAppSelector(state => state.activeRoute);

  return (
    <section className='order-list'>
      {routes.map(route => <Order number={route.number} coordinates={route.coordinates} key={route.number}/>)}
    </section>
  );
}

export default OrdersList;