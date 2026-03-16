'use client';

import Link from "next/link";
import React from "react";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import AddtoCart from "../Buttons/AddtoCart";

const ProductCard = ({ product }) => {
  const { title, bangla, image, price, discount, ratings, sold, _id } = product || {};
  const discountPrice = Math.round(price - (price * discount) / 100);
  const placeholderImage = "https://via.placeholder.com/300x240?text=No+Image";

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group border border-gray-200">
      <div className="relative">
        <img
          src={image || placeholderImage}
          alt={title || "Product"}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <FaHeart className="text-gray-600 hover:text-red-500 transition" />
        </button>
      </div>

      <div className="p-4 space-y-2">
        <h2 className="font-semibold text-gray-800 text-lg line-clamp-1">{title}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">{bangla}</p>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-gray-700">{ratings}</span>
          </div>
          <span className="text-gray-500">{sold} sold</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">৳{discountPrice}</span>
          {discount > 0 && (
            <span className="line-through text-gray-400 text-sm">৳{price}</span>
          )}
        </div>

        <div className="flex gap-2 mt-2">
      <AddtoCart></AddtoCart>

          <Link
            href={`/products/${_id}`}
            className="flex-1 flex items-center justify-center gap-2 border border-primary text-primary py-2 rounded-lg hover:bg-primary/10 transition text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;