import React from 'react';
import { FaStar, FaEye } from 'react-icons/fa';

const NewsCard = (props = {}) => {
  const { news } = props || {};

  // Destructure inside news
  const { title, details, rating, total_view, category_id, author, image_url } =
    news || {};

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300  mt-6">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image_url}
          alt="news thumbnail"
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category & Author */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-indigo-600">
            Category: {category_id}
          </span>

          <div className="flex items-center gap-2">
            <img
              src={author?.img}
              alt="author"
              className="w-8 h-8 rounded-full object-cover border"
            />
            <div className="text-sm">
              <p className="font-semibold">{author?.name}</p>
              <p className="text-xs text-gray-500">{author?.published_date}</p>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 hover:text-indigo-700 duration-200">
          {title}
        </h2>

        {/* Details Snippet */}
        <p className="text-gray-600 text-sm">
          {details?.slice(0, 150)}...
          <span className="text-indigo-600 cursor-pointer"> Read more</span>
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">{rating?.number}</span>
            <span className="text-sm text-gray-500">({rating?.badge})</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
