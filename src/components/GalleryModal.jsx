import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Eye, 
  Tag, 
  MapPin,
  Sparkles 
} from 'lucide-react';
import { galleryImages } from '../data/logisticsData';

export default function GalleryModal() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Commercial Fleet', 'Warehousing & Staging', 'Ocean Freight', 'Air Freight', 'QC Inspection', 'Dispatch & Customer Care'];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openLightbox = (img) => {
    setSelectedImage(img);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div className="space-y-10">
      
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 bg-dhl-yellow text-dhl-black font-black text-xs px-3 py-1 rounded uppercase tracking-wider mb-2">
          <span>Page 5: Operations Gallery</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-dhl-black font-heading uppercase tracking-tight">
          Field Operations & Fleet In Action
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Real photographic look into our Central Malaysia hub facilities, fleet prime movers, 
          inbound QC bays, and air/ocean maritime handlers. Click any image to view details.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-150 ${
              activeFilter === cat 
                ? 'bg-dhl-red text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Clean Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => openLightbox(img)}
            className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
          >
            {/* Image Box */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900 relative">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              {/* Category Pill */}
              <div className="absolute top-3 left-3 bg-dhl-yellow text-dhl-black text-[10px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider shadow">
                {img.category}
              </div>

              {/* View Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-3 bg-dhl-red text-white rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Caption on Card */}
            <div className="p-4 bg-white">
              <h4 className="font-bold text-sm text-gray-900 font-heading group-hover:text-dhl-red transition-colors line-clamp-1">
                {img.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal (Specified in Brief) */}
      {selectedImage && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Main Lightbox Box */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-zinc-950 rounded-2xl overflow-hidden border-4 border-dhl-yellow shadow-2xl flex flex-col"
          >
            {/* Top Bar with Title and Close Button */}
            <div className="flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800 text-white">
              <div className="flex items-center gap-3">
                <span className="bg-dhl-red text-white text-[10px] font-black px-2 py-0.5 rounded uppercase">
                  {selectedImage.category}
                </span>
                <h3 className="font-black text-sm sm:text-base font-heading text-white">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
                aria-label="Close image popup"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Big Image Viewer Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-dhl-red text-white rounded-full transition-all backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 stroke-[3]" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-dhl-red text-white rounded-full transition-all backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 stroke-[3]" />
              </button>
            </div>

            {/* Bottom 1-Line Caption Bar (Specified in Brief) */}
            <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-300">
              <p className="font-medium text-sm text-zinc-200">
                {selectedImage.caption}
              </p>
              <div className="flex items-center gap-2 text-zinc-500 text-[11px] font-mono flex-shrink-0">
                <span>Ramsydex Central Malaysia Operational Hub</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
