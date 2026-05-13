"use client";

import React from "react";

export default function AdminDashboardPage() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Revenue', value: '$24,500', trend: '↑ 12.5%', trendClass: 'text-green-500' },
          { title: 'Total Orders', value: '1,240', trend: '↑ 8.2%', trendClass: 'text-green-500' },
          { title: 'New Customers', value: '324', trend: '↓ 2.4%', trendClass: 'text-red-500' },
          { title: 'Active Products', value: '86', trend: '4 items need restock', trendClass: 'text-gray-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 transition-transform hover:-translate-y-1 duration-300">
            <h3 className="text-sm font-semibold text-gray-500 mb-1">{stat.title}</h3>
            <p className="text-3xl font-extrabold text-gray-900">{stat.value}</p>
            <span className={`text-sm font-medium mt-2 flex items-center gap-1 ${stat.trendClass}`}>
              {stat.trend} <span className="text-gray-400 font-normal ml-1">{i === 3 ? '' : 'vs last month'}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-800">Recent Orders</h3>
          <button className="text-sm font-semibold text-[#5433EB] hover:text-[#4a2cd3] transition-colors">View all orders</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-gray-400 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 font-semibold">Order ID</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 divide-y divide-gray-50">
              <tr className="hover:bg-gray-50/80 transition-colors">
                <td className="px-6 py-4 font-bold text-gray-900">#ORD-001</td>
                <td className="px-6 py-4 font-medium">John Doe</td>
                <td className="px-6 py-4 text-gray-500">May 13, 2026</td>
                <td className="px-6 py-4 font-medium">$125.00</td>
                <td className="px-6 py-4"><span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-bold tracking-wide">COMPLETED</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
