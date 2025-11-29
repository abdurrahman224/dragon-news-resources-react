

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
        <div className="flex flex-col  gap-4   ">
          {categories.map(categy => (
            <NavLink
              to={`/category/${categy.category_id}`}
              className="btn"
              key={categy.category_id}
            >
              {categy?.category_name}
            </NavLink>
          ))}
        </div>
      </div>
    );
  };

export default LeftNavar;
  






