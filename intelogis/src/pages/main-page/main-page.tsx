import OrdersList from '../../components/orders-list/orders-list';
import Map from '../../components/map/map';
import './main-page.scss'

function MainPage() {
  return (
    <main className='main-page'>
      <OrdersList />
      <Map />
    </main>

  );
}

export default MainPage;