import React from 'react';
import { TrendingUp, Package, AlertCircle, DollarSign } from 'lucide-react';

export const AnalyticsSection: React.FC = () => {
  const chartData = [
    { month: 'Jan', sales: 65, stock: 85 },
    { month: 'Feb', sales: 78, stock: 75 },
    { month: 'Mar', sales: 90, stock: 60 },
    { month: 'Apr', sales: 85, stock: 80 },
    { month: 'May', sales: 95, stock: 70 },
    { month: 'Jun', sales: 88, stock: 85 }
  ];

  return (
    <section id="analytics" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Analytics & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make data-driven decisions with comprehensive reports and visual analytics 
            that help you understand your inventory performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Sales vs Stock Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales vs Stock Levels</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {chartData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                  <div className="w-full flex flex-col space-y-1">
                    <div 
                      className="bg-blue-500 rounded-t"
                      style={{ height: `${(data.sales / 100) * 200}px` }}
                      title={`Sales: ${data.sales}%`}
                    ></div>
                    <div 
                      className="bg-green-500 rounded-b"
                      style={{ height: `${(data.stock / 100) * 200}px` }}
                      title={`Stock: ${data.stock}%`}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600">{data.month}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600">Sales</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-sm text-gray-600">Stock</span>
              </div>
            </div>
          </div>

          {/* Top Categories */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Categories</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Electronics</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">85%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Sports</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">72%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Kitchen</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">68%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Furniture</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '54%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">54%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Stationery</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">45%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">94.2%</div>
            <div className="text-sm text-gray-600">Inventory Turnover</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <Package className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <div className="text-sm text-gray-600">Items Tracked</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <AlertCircle className="h-8 w-8 text-orange-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">23</div>
            <div className="text-sm text-gray-600">Low Stock Alerts</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">$127K</div>
            <div className="text-sm text-gray-600">Inventory Value</div>
          </div>
        </div>
      </div>
    </section>
  );
};