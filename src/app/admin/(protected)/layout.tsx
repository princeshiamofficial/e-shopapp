"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/admin/dashboard" },
    { name: "Products", href: "/admin/products" },
    { name: "Categories", href: "/admin/categories" },
    { name: "Orders", href: "/admin/orders" },
    { name: "Customers", href: "/admin/customers" },
    { name: "Coupons", href: "/admin/coupons" },
    { name: "Settings", href: "/admin/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="text-xl font-extrabold text-[#5433EB] tracking-tight">AdminPanel</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/admin/dashboard' && pathname.startsWith(link.href + "/"));
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                  isActive 
                    ? "text-[#5433EB] bg-purple-50" 
                    : "text-gray-600 hover:text-[#5433EB] hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link href="/admin/login" className="flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            Log Out
          </Link>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight capitalize">
            {pathname.split('/').pop()?.replace('-', ' ') || 'Dashboard'}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[#5433EB] text-white flex items-center justify-center font-bold text-sm shadow-md">
              A
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
