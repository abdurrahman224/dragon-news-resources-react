

import React, { useEffect, useState } from 'react';

  const LeftNavar = () => {

const [categories, setCategories] = useState([]);    

    useEffect(() => {
      
      fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(rec => rec.json())
        .then(data => setCategories(data.data.news_category));
    


  }, []);
  // console.log(categories[0]?.category_name);

    return (
      <div>
        <h2>Left Navber</h2>
        <div className='py-10'>
          {categories.map(categy => (
            <p className='py-3' key={categy.category_id}>{categy?.category_name}</p>
          ))}
        </div>
      </div>
    );
  };

export default LeftNavar;
  






