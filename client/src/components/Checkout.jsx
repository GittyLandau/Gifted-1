// rrd imports
import { useNavigate } from 'react-router-dom';

// library imports
import axios from 'axios';

// delete cart
const deleteCart = async () => {
  const result = await axios.delete('http://localhost:3001/cart');
};
const Checkout = ({ cart }) => {
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    try {
      const result = await axios.post('http://localhost:3001/send-email', {
        subject: 'Order placed',
        text: formatText(),
      });
      deleteCart();
      navigate(`/order-confirmation/?timestamp=${new Date().getTime()}`, {
        replace: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const formatText = () => {
    let text = '';
    const line =
      '---------------------------------------------------------------------';
    text += `Order Date:\t${new Date()}\n${line}\n`;
    text += `Total Products:\t${cart.length}\n${line}\n`;
    cart.map((item, index) => {
      text += `Item: ${index}\nProduct:\t${item.title}\nQuantity:\t${item.cart}\nUnit Price:\t$${item.price}\n${line}\n`;
    });
    text += `Order Total:\t$${cart
      .reduce((acc, item) => Number(item.price) + acc, 0)
      .toFixed(2)}\n`;
    return text;
  };
  return (
    <div className='border w-full p-20 shadow rounded-xl flex flex-col gap-2 h-fit'>
      <h1 className='font-semibold text-3xl pb-10'>ORDER SUMMARY</h1>
      <div className='flex justify-between'>
        <span>Subtotal</span>
        <span>
          ${cart.reduce((acc, item) => Number(item.price) + acc, 0).toFixed(2)}
        </span>
      </div>
      <div className='flex justify-between'>
        <span>Shipping</span>
        <span>$0</span>
      </div>
      <div className='flex justify-between'>
        <span>Tax</span>
        <span>$0</span>
      </div>
      <span className='divider'></span>
      <div className='flex justify-between'>
        <span className='font-bold'>ORDER TOTAL</span>
        <span className='text-info'>
          ${cart.reduce((acc, item) => Number(item.price) + acc, 0).toFixed(2)}
        </span>
      </div>
      <button
        className='btn btn-primary mt-6'
        type='submit'
        onClick={(e) => submitHandler(e)}
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
