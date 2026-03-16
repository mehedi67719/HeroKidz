"use client";

import { postUser } from '@/action/server/auth';
import SocialButton from '@/Components/Buttons/SocialButton';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
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
    // console.log('Registration Form Data:', formData);
    const result = await postUser(formData)


    if (result.acknowledged) {
      alert("register successfull please login")
      router.push("/login")
    }
  };




  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full rounded-2xl shadow-lg p-8 space-y-3 bg-white">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Create Account</h1>
        <p className="text-gray-500 text-center">Join Hero Kidz today!</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

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
            Register
          </button>
        </form>

        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <span>or</span>
        </div>

        <SocialButton />

        <p className="text-center text-gray-500">
          Already have an account? <a href="/login" className="text-primary font-semibold">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Page;