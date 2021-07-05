import React from 'react';
import Card from './components/Card/Card.js';
import Loader from './components/Loader/Loader'
import useFood from './hooks/useFood';
import './App.css'

const App = () => {
  const foods = useFood();

  if (!foods) {
    return (
      <div className='position-relative'>
        <Loader/>
      </div>
    );
  }

  return (
    <div className='container py-3'>
      <div className='row'>
          {foods.map(food => (
            <div className='col-md-4 col-sm-6 col-12 col-6' key={food.id}>
              <Card
                {...food}
              />
            </div>
          ))}
      </div>

      <div className='text-center'>
        <button className='more-button'>Learn more</button>
      </div>
    </div>
  )
};

export default App;
