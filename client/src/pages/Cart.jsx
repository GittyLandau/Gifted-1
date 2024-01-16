// rrd imports
import { useLoaderData } from 'react-router-dom';

// components
import Checkout from '../components/Checkout';
import Item from '../components/Item';

// library imports
import { PiBasketThin } from 'react-icons/pi';

const Cart = () => {
  let { items } = useLoaderData();
  const cart = items.filter((item) => item.cart > 0);
  return (
    <div className='w-full m-20'>
      <h1 className='text-5xl mb-20'>Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className='flex gap-96'>
          <table className='ml-20'>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr key={item.id} className='flex gap-8 mb-12'>
                    <td>
                      <Item location='cart' item={item} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Checkout cart={cart} />
        </div>
      ) : (
        <div className='flex flex-col items-center '>
          <PiBasketThin size={300} />{' '}
          <h1 className='text-xl'>No items in cart</h1>
        </div>
      )}
    </div>
  );
};
export default Cart;
