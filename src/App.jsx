import React, { useState } from 'react';

// Enhanced image data with categories and metadata
const images = [
  { id: 1, h: 'h-72', category: 'Photography', title: 'Mountain Serenity', artist: 'Jane Smith', icon: '🏔️' },
  { id: 2, h: 'h-48', category: 'Digital Art', title: 'Abstract Dreams', artist: 'Alex Rivera', icon: '🎨' },
  { id: 3, h: 'h-80', category: 'Photography', title: 'Urban Exploration', artist: 'Mike Chen', icon: '🏢' },
  { id: 4, h: 'h-56', category: 'Design', title: 'Minimal Beauty', artist: 'Emma Wilson', icon: '✨' },
  { id: 5, h: 'h-64', category: 'Photography', title: 'Ocean Waves', artist: 'Chris Blue', icon: '🌊' },
  { id: 6, h: 'h-60', category: 'Digital Art', title: 'Neon Nights', artist: 'Luna Park', icon: '💡' },
  { id: 7, h: 'h-72', category: 'Design', title: 'Typography Study', artist: 'David Tech', icon: '🔤' },
  { id: 8, h: 'h-52', category: 'Photography', title: 'Forest Path', artist: 'Sarah Green', icon: '🌲' },
  { id: 9, h: 'h-68', category: 'Digital Art', title: 'Cosmic Journey', artist: 'Venus Star', icon: '🌌' },
  { id: 10, h: 'h-56', category: 'Design', title: 'Brand Identity', artist: 'Pro Studio', icon: '🎭' },
  { id: 11, h: 'h-64', category: 'Photography', title: 'Autumn Colors', artist: 'Fall Vibes', icon: '🍂' },
  { id: 12, h: 'h-60', category: 'Digital Art', title: 'AI Expression', artist: 'Tech Artist', icon: '🤖' },
];

const categories = ['All', 'Photography', 'Digital Art', 'Design'];
const gradients = [
  'from-blue-400 to-blue-600',
  'from-purple-400 to-purple-600',
  'from-pink-400 to-pink-600',
  'from-amber-400 to-amber-600',
  'from-emerald-400 to-emerald-600',
  'from-indigo-400 to-indigo-600',
  'from-cyan-400 to-cyan-600',
  'from-rose-400 to-rose-600',
  'from-lime-400 to-lime-600',
  'from-sky-400 to-sky-600',
  'from-violet-400 to-violet-600',
  'from-orange-400 to-orange-600',
];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filteredImages = activeCategory === 'All'
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="group cursor-pointer">
              <h1 className="text-4xl font-black bg-gradient-to-r from-blue-45 via-purple-400 to-pink-400 bg-clip-text text-transparent">Gallery</h1>
              <p className="text-sm text-slate-900 mt-1">Curated Collection of Creative Works</p>
            </div>
            <div className="text-3xl opacity-75 absolute -top-4 right-6 z-50">🎨</div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-col gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Results Count */}
        <div className="mb-8 text-slate-400 -mt-32">
          <p>Showing <span className="text-blue-400 font-semibold">{filteredImages.length}</span> works</p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              className="break-inside-avoid group cursor-pointer"
              onMouseEnter={() => setHoveredId(img.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-700 hover:border-slate-600 h-full transform hover:scale-[1.02]">
                {/* Image Container */}
                <div className={`w-full ${img.h} bg-gradient-to-br ${gradients[idx % gradients.length]} flex items-center justify-center relative overflow-hidden`}>
                  {/* Animated background elements */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-4 left-4 w-32 h-32 bg-white rounded-full blur-3xl opacity-10"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center text-white">
                    <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{img.icon}</div>
                    <p className="text-sm font-semibold opacity-75 uppercase tracking-wider">{img.category}</p>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredId === img.id && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 z-10" style={{zIndex: '-10'}}}>
                      <div className="text-center text-slate-800">
                        <p className="text-lg font-bold">View</p>
                        <p className="text-sm opacity-75">→</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-96 bg-gradient-to-b from-slate-800 to-slate-900">
                  <h3 className="font-bold text-white text-lg group-hover:text-blue-40 transition-colors">{img.title}</h3>
                  <p className="text-sm text-slate-400 mt-2">by <span className="text-slate-300 font-medium">{img.artist}</span></p>
                  
                  {/* Category Badge */}
                  <div className="mt-4 inline-block px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full font-medium">
                    {img.category}
                  </div>

                  {/* Action Button */}
                  <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-sm hover:from-blue-600 hover:to-purple-600 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No items found in this category</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-5 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-3">Gallery</h4>
              <p className="text-slate-400 text-sm">Discover amazing artworks from talented creators around the world.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Categories</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                {categories.filter(c => c !== 'All').map(cat => (
                  <li key={cat} className="hover:text-blue-400 cursor-pointer transition-colors">{cat}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Connect</h4>
              <div className="flex gap-3 text-slate-400 text-sm">
                <span className="hover:text-blue-400 cursor-pointer transition-colors">Twitter</span>
                <span className="hover:text-blue-400 cursor-pointer transition-colors">Instagram</span>
                <span className="hover:text-blue-400 cursor-pointer transition-colors">Contact</span>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
            <p>&copy; 2025 Gallery. All rights reserved. | Crafted with ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
