import React, { useState } from 'react';
import { Star, User, CheckCircle, Filter } from 'lucide-react';
import { mockReviews, mockProducts } from '../data/mockData';
import { Review } from '../types';

const Reviews: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string>('all');
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

  const filteredReviews = mockReviews.filter(review => {
    if (selectedRating && review.rating !== selectedRating) return false;
    if (selectedProduct !== 'all' && review.productId !== selectedProduct) return false;
    if (showVerifiedOnly && !review.verified) return false;
    return true;
  });

  const averageRating = mockReviews.reduce((sum, review) => sum + review.rating, 0) / mockReviews.length;
  const ratingCounts = [5, 4, 3, 2, 1].map(rating => 
    mockReviews.filter(review => review.rating === rating).length
  );

  const getProductName = (productId: string) => {
    const product = mockProducts.find(p => p.id === productId);
    return product ? product.name : 'Unknown Product';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Reviews</h1>
          <p className="text-gray-600">See what our customers are saying about our products</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Filter by Rating</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedRating(null)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      selectedRating === null
                        ? 'bg-blue-100 text-blue-800 font-medium'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    All Ratings
                  </button>
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setSelectedRating(rating)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center ${
                        selectedRating === rating
                          ? 'bg-blue-100 text-blue-800 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2">{rating} Star{rating !== 1 ? 's' : ''}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Filter by Product</h3>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                  <option value="all">All Products</option>
                  {mockProducts.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Verified Reviews Filter */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showVerifiedOnly}
                    onChange={(e) => setShowVerifiedOnly(e.target.checked)}
                    className="mr-3 rounded"
                  />
                  <span className="text-sm text-gray-700">Show verified purchases only</span>
                </label>
              </div>
            </div>

            {/* Rating Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Overall Rating</h2>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(averageRating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">Based on {mockReviews.length} reviews</p>
              </div>
              
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating, index) => (
                  <div key={rating} className="flex items-center text-sm">
                    <span className="w-8">{rating}★</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${(ratingCounts[index] / mockReviews.length) * 100}%` }}
                      />
                    </div>
                    <span className="w-8 text-gray-600">{ratingCounts[index]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                All Reviews ({filteredReviews.length})
              </h2>
            </div>

            {filteredReviews.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews found</h3>
                <p className="text-gray-600">Try adjusting your filters to see more reviews.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 rounded-full p-2">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-gray-900">{review.userName}</h3>
                            {review.verified && (
                              <div className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Verified Purchase
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{getProductName(review.productId)}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>

                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        {review.rating} out of 5
                      </span>
                    </div>

                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;