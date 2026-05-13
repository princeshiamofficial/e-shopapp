"use client";

import { useState } from "react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Admin login logic will go here
    console.log("Admin login attempted with", email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admin Portal</h2>
          <p className="mt-2 text-sm text-gray-500">Sign in to manage your e-commerce store</p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">
                Email Address
              </label>
              <input 
                id="email"
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5433EB] focus:border-[#5433EB] transition-all" 
                placeholder="admin@example.com" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input 
                id="password"
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5433EB] focus:border-[#5433EB] transition-all" 
                placeholder="••••••••" 
              />
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-bold text-white bg-[#5433EB] hover:bg-[#4a2cd3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5433EB] transition-all active:scale-[0.98]"
            >
              Sign In to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
