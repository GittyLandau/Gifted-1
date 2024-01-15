// rrd imports
import { NavLink, useLoaderData } from 'react-router-dom';

const Cart = () => {
  let { items } = useLoaderData();
  const cart = items.filter((item) => {
    return Number(item.cart) > 0 && item;
  });
  return (
    <div className='w-full m-20'>
      <h1 className='text-5xl mb-20'>Shopping Cart</h1>
      <table className='ml-20'>
        {items.map((item) => {
          return (
            <tr key={item.id} className='flex gap-8 mb-12'>
              <img
                src={item.img}
                alt={item.title}
                className='h-64 w-64 border-6 rounded-xl border-black'
              />
              <div>
                <NavLink to={`/item/${item.id}`}>
                  <div className='font-bold text-xl w-72'>{item.title}</div>
                </NavLink>

                <div className='mt-9'>${item.price}</div>
              </div>
              <label>
                <div className='label'>
                  <span className='label-text-alt'>Quantity</span>
                </div>
                <select
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
                  <option value='5'>5</option>{' '}
                  <option value='remove'>Remove</option>
                </select>
              </label>
              <div className='text-info'>${item.price * item.cart}</div>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
//  {/* cart */}
//  {cart && (
//     <div
//       tabIndex={0}
//       className='mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 shadow'
//     >
//       <div className='card-body'>
//         <span className='font-bold text-lg'>
//           {cart.reduce((acc, item) => acc + Number(item.cart), 0)} items
//         </span>
//         <ul>
//           {cart.map((item) => {
//             return (
//               <li key={item.id} className='flex gap-4 mb-4'>
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className='h-10 w-10'
//                 />
//                 <div>
//                   <div>
//                     {item.title.slice(0, 10)}
//                     {item.title.length > 10 && '...'}
//                   </div>
//                   <div>
//                     <span className='text-info'>${item.price}</span>
//                     <span className='opacity-50 text-xs'>
//                       {' '}
//                       quantity: {item.cart}
//                     </span>
//                   </div>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>

//         <span className='text-info'>
//           Subtotal: $
//           {cart
//             .reduce((acc, item) => acc + Number(item.price), 0)
//             .toFixed(2)}
//         </span>
//         <div className='card-actions'>
//           <NavLink to='/cart'>
//             <button className='btn btn-primary btn-block'>
//               View cart
//             </button>
//           </NavLink>
//         </div>
//       </div>
export default Cart;
