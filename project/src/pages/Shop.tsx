import React, { useMemo } from 'react';
import { mockProducts } from '../data/mockData';
import ProductCard from '../components/Product/ProductCard';
import ProductFilters from '../components/Product/ProductFilters';
import { useApp } from '../context/AppContext';

const Shop: React.FC = () => {
  const { state } = useApp();

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      // Category filter
      if (state.selectedCategory !== 'All' && product.category !== state.selectedCategory) {
        return false;
      }
      
      // Price filter
      if (product.price > state.priceRange[1]) {
        return false;
      }
      
      // Search filter
      if (state.searchQuery && !product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) && 
          !product.description.toLowerCase().includes(state.searchQuery.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  }, [state.selectedCategory, state.priceRange, state.searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <ProductFilters />
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                All Products {state.searchQuery && `for "${state.searchQuery}"`}
              </h1>
              <p className="text-gray-600">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No products found matching your criteria.</p>
                <p className="text-sm text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;