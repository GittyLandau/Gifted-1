// rrd imports
import { NavLink } from 'react-router-dom';
const ItemCard = ({ item }) => {
  return (
    <div className={`card w-64 bg-base-100 shadow-xl`}>
      <figure className='w-64 h-64'>
        <img src={item.img} alt='Shoes' className='w-full h-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {item.title.slice(0, 30)}
          {item.title.length > 30 && '...'}
        </h2>
        <p className='text-xs'>
          {item.description.slice(0, 60)}
          {item.description.length > 60 && '...'}
        </p>
        <div className='card-actions justify-center'>
          <NavLink to={`/item/${item.id}`}>
            <button className='btn btn-primary'>View Item</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
