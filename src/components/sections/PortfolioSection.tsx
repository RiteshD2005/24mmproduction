import React, { useState } from 'react';
import { portfolioItems } from '../../data/portfolio';
import { Play, X } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
  const categories = Array.from(new Set(portfolioItems.map(item => item.category)));
  
  const filteredItems = filter 
    ? portfolioItems.filter(item => item.category === filter)
    : portfolioItems;
    
  const handleItemClick = (id: string) => {
    setSelectedItem(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };
  
  const selectedItemData = portfolioItems.find(item => item.id === selectedItem);

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse through our latest work and creative projects
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            className={`px-4 py-2 rounded-full transition-all ${
              filter === null
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              onClick={() => handleItemClick(item.id)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 mt-2">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                
                {item.videoUrl && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                      <Play className="h-8 w-8 text-white" fill="white" />
                    </div>
                  </div>
                )}
                
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={closeModal}
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="max-w-6xl w-full max-h-[80vh] overflow-hidden bg-gray-900 rounded-xl">
            {selectedItemData?.videoUrl ? (
              <div className="aspect-video">
                <iframe
                  src={selectedItemData.videoUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img 
                src={selectedItemData?.imageUrl} 
                alt={selectedItemData?.title} 
                className="w-full h-full object-contain"
              />
            )}
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white">{selectedItemData?.title}</h3>
              <p className="text-gray-400 mt-2">
                {selectedItemData?.category.charAt(0).toUpperCase() + selectedItemData?.category.slice(1)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;