// library imports
import { BsEnvelopeCheck } from 'react-icons/bs';

// rrd imports
import { NavLink } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className='w-full text-center flex justify-center gap-20 items-center'>
      <BsEnvelopeCheck color='purple' size={500} />

      <div className=''>
        <h1 className='text-3xl font-bold'>Your order has been placed.</h1>
        <div className='text-xl mt-8'>
          Thank you for shopping at Gifted. Your order has been placed.
        </div>
        <div className='text-md mt-8'>
          We will reach out to you shortly to complete the payment.
        </div>
        <NavLink to={'/'}>
          <button className='btn btn-primary mt-8'>Continue shopping</button>
        </NavLink>
      </div>
    </div>
  );
};

export default OrderConfirmation;
