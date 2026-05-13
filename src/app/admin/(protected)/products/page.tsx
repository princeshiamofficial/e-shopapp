"use client";

import React from "react";
import Link from "next/link";

export default function AdminProductsPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Products Management</h2>
        <Link 
          href="/admin/products/add" 
          className="px-4 py-2 bg-[#5433EB] text-white rounded-lg font-semibold hover:bg-[#4a2cd3] transition-colors active:scale-95"
        >
          + Add New
        </Link>
      </div>
      <div className="text-gray-500 text-center py-16 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
        <p className="text-lg font-medium">Products Management will be displayed here.</p>
        <p className="text-sm mt-1">This module is under construction.</p>
      </div>
    </div>
  );
}
