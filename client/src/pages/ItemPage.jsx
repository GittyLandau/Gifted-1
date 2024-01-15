// rrd imports
import {
  useLoaderData,
  useParams,
  useNavigate,
  useOutletContext,
} from 'react-router-dom';
import { useRef } from 'react';

// library imports
import axios from 'axios';

export const ItemPageLoader = async ({ params }) => {
  const { id } = params;
  const data = await axios.get(`http://localhost:3001/api/item/${id}`);
  return { item: data.data };
};
const ItemPage = () => {
  const navigate = useNavigate();
  const quantityRef = useRef();
  const { item } = useLoaderData();
  return (
    <div className='m-20 w-3/4'>
      <div className='flex space-x-10'>
        <img
          src={item.img}
          alt={item.title}
          className='w-1/3 border-6 rounded-xl border-black'
        />
        <div className='m-9'>
          <h1 className='text-3xl font-semibold'>{item.title}</h1>
          <div className='mt-9'>{item.description}</div>
          <form
            action=''
            className='mt-9'
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const result = await axios.post(
                  'http://localhost:3001/api/cart',
                  {
                    id: item.id,
                    quantity: Number(quantityRef.current.value),
                  }
                );
                navigate(`/?timestamp=${new Date().getTime()}`, {
                  replace: true,
                });
                return (
                  <div className='toast toast-top toast-end'>
                    <div className='alert alert-success'>
                      <span>{item.title} was added to your cart</span>
                    </div>
                  </div>
                );
              } catch (error) {
                throw new Error(error);
              }
            }}
          >
            <label>
              <div className='label'>
                <span className='label-text-alt'>Quantity</span>
              </div>
              <select
                ref={quantityRef}
                name='quantity'
                id='quantity'
                className='select select-bordered w-fit max-w-xs focus:outline-none'
              >
                <option disabled selected>
                  Select
                </option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </label>
            <div className='mt-9'>
              <button type='submit' className='btn btn-primary'>
                Add to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ItemPage;
