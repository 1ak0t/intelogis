import './order.scss'

function Order() {
  return (
    <article className='order'>
      <h1 className='order__title'>Заявка №1</h1>
      <span className='order__coordinates'>Начало: 59.223151615 30.294651351</span>
      <span className='order__coordinates'>Конец: 59.223151615 30.294651351</span>
    </article>
  );
}

export default Order;