// react-router-dom imports
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// layouts
import RootLayout, { rootLayoutLoader } from './layouts/RootLayout';

// pages
import Dashboard from './pages/Dashboard';
import ItemPage, { ItemPageLoader } from './pages/ItemPage';
import Cart from './pages/Cart';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />} loader={rootLayoutLoader}>
        <Route path='/' element={<Dashboard />} loader={rootLayoutLoader} />
        <Route
          path='/item/:id'
          element={<ItemPage />}
          loader={ItemPageLoader}
        />
        <Route path='/cart' element={<Cart />} loader={rootLayoutLoader} />
      </Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
