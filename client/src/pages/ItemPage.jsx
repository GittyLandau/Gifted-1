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
import Item from '../components/Item';

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
      <Item item={item} location='itemPage' />
    </div>
  );
};
export default ItemPage;
