import React, { useState } from 'react';
import { Edit3, Trash2, AlertTriangle, CheckCircle, XCircle, Search, Filter } from 'lucide-react';

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

interface InventoryTableProps {
  inventory: InventoryItem[];
  onDelete: (id: string) => void;
}

export const InventoryTable: React.FC<InventoryTableProps> = ({ inventory, onDelete }) => {
  const [filter, setFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in-stock':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'low-stock':
        return <AlertTriangle className="h-5 w-5 text-orange-500" />;
      case 'out-of-stock':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-3 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case 'in-stock':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'low-stock':
        return `${baseClasses} bg-orange-100 text-orange-800`;
      case 'out-of-stock':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return baseClasses;
    }
  };

  const filteredInventory = inventory.filter(item => {
    if (filter === 'all') return true;
    return item.status === filter;
  }).filter(item => {
    if (!searchTerm) return true;
    return item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           item.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
           item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
           item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this item?')) {
      onDelete(id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 sm:mb-0">Inventory Items</h3>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Items</option>
              <option value="in-stock">In Stock</option>
              <option value="low-stock">Low Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredInventory.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">SKU: {item.sku} • {item.category}</div>
                    <div className="text-sm text-gray-500">Supplier: {item.supplier}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.stock} units</div>
                  <div className="text-sm text-gray-500">Min: {item.minStock}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${item.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(item.status)}
                    <span className={getStatusBadge(item.status)}>
                      {item.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-900">
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}