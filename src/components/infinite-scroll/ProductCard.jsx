import React from "react";

const ProductCard = ({
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
}) => {
  return (
    <div className="w-72  mx-auto my-4 bg-gray-500 shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-fill" src={thumbnail} alt={title} />
      <div className="px-4 py-2">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <p className="text-neutral-100 text-sm mt-1">{description}</p>
        <div className="flex items-center mt-2">
          <span className="text-neutral-100 text-sm mr-1">${price}</span>
          {discountPercentage > 0 && (
            <span className="text-green-500 text-sm">
              -{discountPercentage}%
            </span>
          )}
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <span className="text-neutral-100 text-sm">Rating:</span>
            <span className="text-yellow-400 ml-1">{rating} ⭐</span>
          </div>
          <div className="text-neutral-100 text-sm">{stock} in stock</div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="text-neutral-100 text-sm">Brand: {brand}</div>
          <div className="text-neutral-100 text-sm">Category: {category}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
