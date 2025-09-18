import React from 'react';
import { 
  Smartphone, 
  Users, 
  Calendar, 
  BarChart3, 
  Shield, 
  RefreshCw,
  Search,
  Bell
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-Time Dashboard',
      description: 'Monitor stock levels, track sales, and get instant insights with our comprehensive dashboard.',
      color: 'bg-blue-500'
    },
    {
      icon: Search,
      title: 'Smart Search & Filter',
      description: 'Quickly locate items by name, SKU, category, or supplier with advanced filtering options.',
      color: 'bg-green-500'
    },
    {
      icon: Bell,
      title: 'Automated Alerts',
      description: 'Get notified when inventory runs low, items expire, or restocking is needed.',
      color: 'bg-orange-500'
    },
    {
      icon: RefreshCw,
      title: 'Stock Movement Tracking',
      description: 'Track all inventory movements including shipments, sales, returns, and transfers.',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Multi-User Access',
      description: 'Manage team permissions with role-based access control for staff and managers.',
      color: 'bg-indigo-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Access your inventory data anywhere with our fully responsive mobile design.',
      color: 'bg-pink-500'
    },
    {
      icon: Calendar,
      title: 'Restock Reminders',
      description: 'Schedule and receive reminders for regular restocking based on sales patterns.',
      color: 'bg-teal-500'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security and automatic backups.',
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Manage Inventory
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of features helps you streamline operations, 
            reduce costs, and make informed decisions about your inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};