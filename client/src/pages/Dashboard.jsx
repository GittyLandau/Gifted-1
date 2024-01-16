import ItemCard from '../components/ItemCard';
import { useLoaderData } from 'react-router-dom';
const Dashboard = () => {
  const { items } = useLoaderData();
  return (
    <div className='grid grid-flow-row grid-cols-3 gap-8'>
      {items.map((item) => {
        return <ItemCard type='dashboard' key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Dashboard;
