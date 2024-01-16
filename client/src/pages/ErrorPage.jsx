// rrd imports
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='text-center'>
      <h1 className='text-6xl my-10'>OOPS!</h1>
      <div className='text-xl my-10'>Page not found</div>
      <NavLink to='/'>
        <button className='btn btn-primary'>Navigate to the dashboard</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
