"use client";

import { getcart } from "@/action/server/cart";
import { postorder } from "@/action/server/order";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Checkout = () => {
  const { data: session } = useSession();
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const router = useRouter();

  useEffect(() => {
    const loadCart = async () => {
      try {
        const data = await getcart();
        setCarts(data || []);
      } catch (error) {
        console.error("Error loading cart:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCart();
  }, []);

  const totalPrice = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = async (e) => {
    e.preventDefault();

    if (!session) {
      Swal.fire("You must be logged in to place an order!", "", "warning");
      return;
    }

    if (carts.length === 0) {
      Swal.fire("Cart is empty!", "", "warning");
      return;
    }

    const orderData = {
      customer: {
        ...formData,
        email: session.user.email, 
      },
      carts,
      totalPrice,
      date: new Date().toISOString(),
    };

    try {
      const result = await postorder(orderData);

      if (result?.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Order placed successfully!",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => router.push("/"));
      } else {
        Swal.fire("Failed to place order", "", "error");
      }
    } catch (err) {
      Swal.fire("Error placing order", err.message, "error");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="w-full min-h-screen flex justify-center py-10 px-4 bg-gray-50">
      <div className="w-full md:w-11/12 lg:w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">

          <div className="bg-white shadow-lg rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
            <form onSubmit={handleOrder} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <textarea
                name="address"
                placeholder="Full Address"
                onChange={handleChange}
                className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
                rows={3}
                required
              />
              <button
                type="submit"
                disabled={carts.length === 0}
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition disabled:bg-gray-400"
              >
                Order Now
              </button>
            </form>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Your Items</h2>
            {carts.length === 0 ? (
              <p className="text-gray-500">No items in cart</p>
            ) : (
              <div className="space-y-5">
                {carts.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-4 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt="product"
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-bold">৳ {item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        <div className="bg-white shadow-lg rounded-3xl p-6 md:p-8 h-fit sticky top-6">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳ {totalPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>৳ 0</span>
            </div>
          </div>
          <div className="border-t my-5"></div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>৳ {totalPrice}</span>
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center">
            Secure checkout • No hidden fees
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;