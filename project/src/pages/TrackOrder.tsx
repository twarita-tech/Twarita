import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Package, Truck, CheckCircle, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { mockOrders } from '../data/mockData';

const TrackOrder: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { state } = useApp();
  
  const allOrders = [...mockOrders, ...state.orders];
  const order = allOrders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order not found</h2>
          <p className="text-gray-600 mb-6">Please check your order ID and try again</p>
          <Link to="/orders" className="text-blue-600 hover:text-blue-800 font-medium">
            View all orders
          </Link>
        </div>
      </div>
    );
  }

  const trackingSteps = [
    { 
      key: 'pending', 
      label: 'Order Confirmed', 
      icon: CheckCircle,
      description: 'Your order has been received and is being processed'
    },
    { 
      key: 'packed', 
      label: 'Order Packed', 
      icon: Package,
      description: 'Your items have been carefully packed'
    },
    { 
      key: 'shipped', 
      label: 'Order Shipped', 
      icon: Truck,
      description: 'Your order is on its way'
    },
    { 
      key: 'out-for-delivery', 
      label: 'Out for Delivery', 
      icon: MapPin,
      description: 'Your order is out for delivery'
    },
    { 
      key: 'delivered', 
      label: 'Delivered', 
      icon: CheckCircle,
      description: 'Your order has been delivered'
    }
  ];

  const currentStepIndex = trackingSteps.findIndex(step => step.key === order.status);
  const isCompleted = (stepIndex: number) => stepIndex <= currentStepIndex;
  const isActive = (stepIndex: number) => stepIndex === currentStepIndex;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'packed': return 'text-blue-600 bg-blue-100';
      case 'shipped': return 'text-purple-600 bg-purple-100';
      case 'out-for-delivery': return 'text-orange-600 bg-orange-100';
      case 'delivered': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/orders"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Orders
        </Link>

        {/* Order Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Track Order</h1>
              <p className="text-gray-600">Order ID: {order.id}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                <Clock className="h-4 w-4 mr-2" />
                {trackingSteps.find(step => step.key === order.status)?.label || 'Processing'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-200">
            <div>
              <p className="text-sm font-medium text-gray-900">Order Date</p>
              <p className="text-sm text-gray-600">{order.orderDate}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Estimated Delivery</p>
              <p className="text-sm text-gray-600">{order.estimatedDelivery}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Total Amount</p>
              <p className="text-sm text-gray-600">${order.total.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Tracking Progress</h2>
          
          <div className="relative">
            {trackingSteps.map((step, index) => {
              const IconComponent = step.icon;
              const completed = isCompleted(index);
              const active = isActive(index);
              
              return (
                <div key={step.key} className="relative flex items-center">
                  {/* Timeline line */}
                  {index < trackingSteps.length - 1 && (
                    <div
                      className={`absolute left-6 top-12 w-0.5 h-16 ${
                        completed ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    />
                  )}
                  
                  {/* Step marker */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                      completed
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : active
                        ? 'bg-white border-blue-500 text-blue-500'
                        : 'bg-gray-100 border-gray-300 text-gray-400'
                    }`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  {/* Step content */}
                  <div className="ml-4 flex-1 pb-8">
                    <h3
                      className={`text-sm font-medium ${
                        completed || active ? 'text-gray-900' : 'text-gray-500'
                      }`}
                    >
                      {step.label}
                    </h3>
                    <p
                      className={`text-sm ${
                        completed || active ? 'text-gray-600' : 'text-gray-400'
                      }`}
                    >
                      {step.description}
                    </p>
                    {active && (
                      <p className="text-xs text-blue-600 font-medium mt-1">
                        Current Status
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Items</h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div key={item.product.id} className="flex items-center space-x-4 py-3 border-b border-gray-200 last:border-b-0">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium text-gray-900">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Address</h2>
          <div className="text-gray-600">
            <p className="font-medium text-gray-900">{order.shippingAddress.name}</p>
            <p>{order.shippingAddress.street}</p>
            <p>{order.shippingAddress.city}, {order.shippingAddress.postalCode}</p>
            <p className="mt-2">{order.shippingAddress.phone}</p>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Need Help?</h3>
          <p className="text-blue-800 mb-4">
            If you have any questions about your order, our customer service team is here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;