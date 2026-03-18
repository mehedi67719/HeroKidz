"use client";

import { handlecart } from "@/action/server/cart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2"; 

const AddtoCart = ({ product }) => {
  const { status } = useSession();
  const router = useRouter();

  const handleAddToCart = async () => {
    if (status === "authenticated") {
      try {
        const result = await handlecart({ product, inc: true });

        if (result.success) {
          Swal.fire({
            icon: "success",
            title: "Added to cart!",
            text: "Your product has been added to the cart.",
            timer: 2000,
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: result.message || "Something went wrong.",
          });
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: err.message || "Something went wrong.",
        });
      }
    } else {
      router.push("/login");
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