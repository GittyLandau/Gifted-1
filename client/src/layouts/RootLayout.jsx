// rrd imports
import { Outlet } from 'react-router-dom';
// components
import Nav from '../components/Nav';
// library imports
import axios from 'axios';

// loader
export const rootLayoutLoader = async () => {
  const data = await axios.get('http://localhost:3001/api/items');
  return { items: data.data.items };
};

const RootLayout = () => {
  return (
    <div>
      <header>
        <Nav />
        <div className='flex justify-center'>
          <Outlet />
        </div>
      </header>
    </div>
  );
};

export default RootLayout;
