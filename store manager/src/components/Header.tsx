import React from 'react';
import { Package, User, Bell, Search } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="ml-3 text-xl font-bold text-gray-900">Store Manager</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#dashboard" className="text-blue-600 font-medium">Dashboard</a>
            <a href="#inventory" className="text-gray-700 hover:text-blue-600 transition-colors">Inventory</a>
            <a href="#analytics" className="text-gray-700 hover:text-blue-600 transition-colors">Analytics</a>
            <a href="#reports" className="text-gray-700 hover:text-blue-600 transition-colors">Reports</a>
            <a href="#settings" className="text-gray-700 hover:text-blue-600 transition-colors">Settings</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search inventory..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900">
              <User className="h-5 w-5" />
              <span className="hidden sm:block">Manager</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};