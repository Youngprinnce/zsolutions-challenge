import { useEffect, useState } from 'react';
import { getData } from '../utils/data';

const useFood = () => {
  const [foods, setFoods] = useState(null);
  useEffect(() => {
    (async () => {
      const { data } = await getData();

      if (data.status !== 200) {
        setFoods(foods => foods);
      }

      setFoods(data.meals);
    })();
  }, []);

  return foods;
};

export default useFood;
