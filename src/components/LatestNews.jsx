import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2 ">
      <p className=" text-base-200 bg-red-600 px-4 mx-4 py-2 ">Lates</p>
      <Marquee pauseOnHover={true} speed={80} className='space-x-10'>
        <Link to="/news">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
           
          </p>
        </Link>
        <Link to="/news">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
           
          </p>
        </Link>
        <Link to="/news">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          
          </p>
        </Link>
        <Link to="/news">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            deserunt, quibusdam corrupti a quis facilis quam deleniti nam
            consequuntur velit dolorum delectus sed distinctio
          </p>
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;