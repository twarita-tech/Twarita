import React from 'react';
import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsCard } from './components/StatsCard';
import { InventoryTable } from './components/InventoryTable';
import { AnalyticsSection } from './components/AnalyticsSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { AddItemModal } from './components/AddItemModal';
import { UserManagementModal } from './components/UserManagementModal';
import { ReportModal } from './components/ReportModal';
import { 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  ShoppingCart,
  Users,
  DollarSign
} from 'lucide-react';

interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  stock: number;
  minStock: number;
  price: number;
  supplier: string;
  lastRestocked: string;
  status: 'in-stock' | 'low-stock' | 'out-of-stock';
}

const initialInventory: InventoryItem[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    sku: 'WH-001',
    category: 'Electronics',
    stock: 45,
    minStock: 10,
    price: 79.99,
    supplier: 'TechCorp',
    lastRestocked: '2024-01-15',
    status: 'in-stock'
  },
  {
    id: '2',
    name: 'Coffee Mug Set',
    sku: 'CM-002',
    category: 'Kitchen',
    stock: 8,
    minStock: 15,
    price: 24.99,
    supplier: 'HomeGoods',
    lastRestocked: '2024-01-10',
    status: 'low-stock'
  },
  {
    id: '3',
    name: 'Desk Lamp',
    sku: 'DL-003',
    category: 'Furniture',
    stock: 0,
    minStock: 5,
    price: 49.99,
    supplier: 'OfficeSupply',
    lastRestocked: '2024-01-05',
    status: 'out-of-stock'
  },
  {
    id: '4',
    name: 'Running Shoes',
    sku: 'RS-004',
    category: 'Sports',
    stock: 32,
    minStock: 12,
    price: 89.99,
    supplier: 'SportsMart',
    lastRestocked: '2024-01-18',
    status: 'in-stock'
  },
  {
    id: '5',
    name: 'Notebook Pack',
    sku: 'NP-005',
    category: 'Stationery',
    stock: 120,
    minStock: 25,
    price: 12.99,
    supplier: 'PaperPlus',
    lastRestocked: '2024-01-20',
    status: 'in-stock'
  },
  {
    id: '6',
    name: 'Gaming Mouse',
    sku: 'GM-006',
    category: 'Electronics',
    stock: 67,
    minStock: 20,
    price: 59.99,
    supplier: 'TechCorp',
    lastRestocked: '2024-01-22',
    status: 'in-stock'
  },
  {
    id: '7',
    name: 'Office Chair',
    sku: 'OC-007',
    category: 'Furniture',
    stock: 15,
    minStock: 8,
    price: 199.99,
    supplier: 'OfficeSupply',
    lastRestocked: '2024-01-17',
    status: 'in-stock'
  },
  {
    id: '8',
    name: 'Water Bottle',
    sku: 'WB-008',
    category: 'Sports',
    stock: 3,
    minStock: 15,
    price: 19.99,
    supplier: 'SportsMart',
    lastRestocked: '2024-01-12',
    status: 'low-stock'
  },
  {
    id: '9',
    name: 'Bluetooth Speaker',
    sku: 'BS-009',
    category: 'Electronics',
    stock: 28,
    minStock: 10,
    price: 89.99,
    supplier: 'TechCorp',
    lastRestocked: '2024-01-21',
    status: 'in-stock'
  },
  {
    id: '10',
    name: 'Cooking Pan Set',
    sku: 'CPS-010',
    category: 'Kitchen',
    stock: 0,
    minStock: 8,
    price: 79.99,
    supplier: 'HomeGoods',
    lastRestocked: '2024-01-08',
    status: 'out-of-stock'
  },
  {
    id: '11',
    name: 'Yoga Mat',
    sku: 'YM-011',
    category: 'Sports',
    stock: 42,
    minStock: 15,
    price: 34.99,
    supplier: 'SportsMart',
    lastRestocked: '2024-01-19',
    status: 'in-stock'
  },
  {
    id: '12',
    name: 'LED Desk Light',
    sku: 'LDL-012',
    category: 'Electronics',
    stock: 6,
    minStock: 12,
    price: 45.99,
    supplier: 'TechCorp',
    lastRestocked: '2024-01-14',
    status: 'low-stock'
  },
  {
    id: '13',
    name: 'Ceramic Mug',
    sku: 'CM-013',
    category: 'Kitchen',
    stock: 89,
    minStock: 25,
    price: 14.99,
    supplier: 'HomeGoods',
    lastRestocked: '2024-01-23',
    status: 'in-stock'
  },
  {
    id: '14',
    name: 'Backpack',
    sku: 'BP-014',
    category: 'Sports',
    stock: 0,
    minStock: 10,
    price: 69.99,
    supplier: 'SportsMart',
    lastRestocked: '2024-01-06',
    status: 'out-of-stock'
  },
  {
    id: '15',
    name: 'Wireless Charger',
    sku: 'WC-015',
    category: 'Electronics',
    stock: 34,
    minStock: 15,
    price: 39.99,
    supplier: 'TechCorp',
    lastRestocked: '2024-01-20',
    status: 'in-stock'
  }
];

function App() {
  const [inventory, setInventory] = useState<InventoryItem[]>(initialInventory);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  const handleAddItem = (newItem: InventoryItem) => {
    setInventory(prev => [...prev, newItem]);
  };

  const handleDeleteItem = (id: string) => {
    setInventory(prev => prev.filter(item => item.id !== id));
  };

  // Calculate stats from current inventory
  const totalItems = inventory.length;
  const lowStockItems = inventory.filter(item => item.status === 'low-stock' || item.status === 'out-of-stock').length;
  const totalValue = inventory.reduce((sum, item) => sum + (item.stock * item.price), 0);
  const activeOrders = 156; // Mock data

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      {/* Dashboard Section */}
      <section id="dashboard" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Inventory Dashboard</h2>
            <p className="text-gray-600">Real-time overview of your store performance</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatsCard
              title="Total Items"
              value={totalItems.toString()}
              change="12.5%"
              changeType="increase"
              icon={Package}
              color="bg-blue-500"
            />
            <StatsCard
              title="Low Stock Items"
              value={lowStockItems.toString()}
              change="8.2%"
              changeType="decrease"
              icon={AlertTriangle}
              color="bg-orange-500"
            />
            <StatsCard
              title="Monthly Sales"
              value={`$${Math.round(totalValue).toLocaleString()}`}
              change="18.7%"
              changeType="increase"
              icon={TrendingUp}
              color="bg-green-500"
            />
            <StatsCard
              title="Active Orders"
              value={activeOrders.toString()}
              change="5.3%"
              changeType="increase"
              icon={ShoppingCart}
              color="bg-purple-500"
            />
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                <button className="text-blue-600 text-sm font-medium">View All</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Restocked Wireless Headphones (+50 units)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Low stock alert: Coffee Mug Set (8 left)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Out of stock: Desk Lamp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">New supplier added: TechCorp</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Top Sellers</h3>
                <button className="text-blue-600 text-sm font-medium">View Report</button>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Wireless Headphones</span>
                  <span className="text-sm font-medium text-gray-900">45 sold</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Running Shoes</span>
                  <span className="text-sm font-medium text-gray-900">32 sold</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Coffee Mug Set</span>
                  <span className="text-sm font-medium text-gray-900">28 sold</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Notebook Pack</span>
                  <span className="text-sm font-medium text-gray-900">25 sold</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="space-y-3">
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Add New Item
                </button>
                <button 
                  onClick={() => setShowReportModal(true)}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Generate Report
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Export Data
                </button>
                <button 
                  onClick={() => setShowUserModal(true)}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Manage Users
                </button>
              </div>
            </div>
          </div>

          {/* Inventory Table */}
          <InventoryTable inventory={inventory} onDelete={handleDeleteItem} />
        </div>
      </section>

      <AnalyticsSection />
      <FeaturesSection />
      <Footer />

      {/* Modals */}
      <AddItemModal 
        isOpen={showAddModal} 
        onClose={() => setShowAddModal(false)} 
        onAdd={handleAddItem}
      />
      <UserManagementModal 
        isOpen={showUserModal} 
        onClose={() => setShowUserModal(false)} 
      />
      <ReportModal 
        isOpen={showReportModal} 
        onClose={() => setShowReportModal(false)} 
      />
    </div>
  );
}

export default App;