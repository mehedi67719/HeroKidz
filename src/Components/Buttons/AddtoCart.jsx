"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const AddtoCart = () => {
  const { status } = useSession();
  const router = useRouter();

  const handleAddToCart = () => {
    if (status === "authenticated") {
      alert("Item added to cart!"); // এখানে তোমার cart logic বসাও
    } else {
      router.push("/login"); // login না থাকলে redirect
    }
  };

  return (
    <div>
      <button
        className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl text-lg shadow hover:scale-105 transition"
        onClick={handleAddToCart}
      >
        <FaShoppingCart /> Add to cart
      </button>
    </div>
  );
};

export default AddtoCart;