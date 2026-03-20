"use client";

import { getcart } from '@/action/server/cart';
import React, { useEffect, useState } from 'react';

const Checkout = () => {
  const [carts, setCarts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const loadCart = async () => {
      const data = await getcart();
      setCarts(data);
    };
    loadCart();
  }, []);

  const totalPrice = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    console.log({
      customer: formData,
      carts,
      totalPrice,
    });
  };

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
                type="email"
                name="email"
                placeholder="Email Address"
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
                rows="3"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
              >
                Order Now
              </button>
            </form>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Your Items</h2>

            <div className="space-y-5">
              {carts.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <p className="font-bold">
                    ৳ {item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>
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