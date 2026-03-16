"use client";

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

const Page = () => {
  const router=useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email: formData.email,
      password: formData.password
    });

    // console.log(result);

    if (result.ok) {
      Swal.fire({
        title: "Login successful",
        icon: "success",
        draggable: true
      });
      router.push("/")
    } else {
      Swal.fire({
        title: "Login failed",
        text: result.error || "Check your credentials",
        icon: "error",
        draggable: true
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-3">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Login to Hero Kidz</h1>
        <p className="text-gray-500 text-center">Welcome back! Please login to your account.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button type="submit" className="w-full btn btn-primary py-3 rounded-xl text-lg font-semibold shadow hover:scale-105 transition">
            Login
          </button>
        </form>

        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <span>or</span>
        </div>

        <button className="w-full flex items-center justify-center gap-3 btn btn-primary py-3 rounded-xl shadow hover:scale-105 transition">
          <FcGoogle size={24} />
          Continue with Google
        </button>

        <p className="text-center text-gray-500">
          Don't have an account? <a href="/register" className="text-primary font-semibold">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Page;