import React from 'react';
import { FaStar, FaEye } from 'react-icons/fa';

const NewsCard = (props = {}) => {
  const { news = {} } = props || {};
  const {
    image_url = "",
    title = "",
   
    views = 0,
  } = news;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300 mt-6">
      
      {/* Image Section */}
      <div className="relative">
        <img
          src={image_url}
          alt="news thumbnail"
          className="w-full h-100 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {title}
        </h2>

        <div className="flex items-center justify-between text-sm text-gray-600">
       

          <span className="flex items-center gap-1">
            <FaEye /> {views} views
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
