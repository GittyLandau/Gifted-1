// rrd imports
import { Outlet, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
// components
import Nav from '../components/nav';

// pages
import Dashboard from '../pages/Dashboard';

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
