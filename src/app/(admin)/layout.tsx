"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  ShieldQuestionMark,
} from "lucide-react";
import Image from "next/image";
import logo from "../../../assets/logo.png";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Subscribers", href: "/adminSubscribers", icon: Users },
    { name: "Blogs", href: "/adminBlogs", icon: FileText },
    { name: "Query", href: "/query", icon: ShieldQuestionMark },
  ];

  return (
    <div className="flex h-screen bg-[#000000] text-white">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 bg-[#0b121a] ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:z-50`}
      >
        <div className="flex flex-col h-full">
          <div className="px-6 py-4 text-xl font-bold border-b border-gray-800">
            <Image src={logo} alt="Binge" width={200} />
          </div>
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#1a2332] text-white"
                      : "text-gray-400 hover:bg-[#1a2332] hover:text-white"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <main className="p-6 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
