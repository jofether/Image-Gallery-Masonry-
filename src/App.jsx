import React from 'react';

// Generating dummy image data with different heights to force masonry behavior
const images = [
  { id: 1, h: 'h-64', color: 'bg-red-200' },
  { id: 2, h: 'h-40', color: 'bg-blue-200' },
  { id: 3, h: 'h-80', color: 'bg-green-200' },
  { id: 4, h: 'h-52', color: 'bg-yellow-200' },
  { id: 5, h: 'h-64', color: 'bg-purple-200' },
  { id: 6, h: 'h-48', color: 'bg-pink-200' },
  { id: 7, h: 'h-72', color: 'bg-indigo-200' },
  { id: 8, h: 'h-44', color: 'bg-orange-200' },
  { id: 9, h: 'h-60', color: 'bg-teal-200' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Design Portfolio</h1>
        <p className="text-gray-500 mt-2">A masonry collection of recent works</p>
      </header>

      {/* MASONRY CONTAINER: Uses CSS columns (columns-1, columns-2, etc) */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {images.map((img) => (
          // ITEM: break-inside-avoid prevents the card from being split across columns
          <div
            key={img.id}
            className={`break-inside-avoid bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300`}
          >
            {/* Image Placeholder */}
            {/* FUTURE BUG: Remove 'object-cover' or set fixed height to cause distortion */}
            <div className={`w-full ${img.h} ${img.color} flex items-center justify-center`}>
              <span className="text-gray-600 font-bold opacity-30">IMG {img.id}</span>
            </div>

            <div className="p-4">
              <h3 className="font-bold text-gray-800">Project Title {img.id}</h3>
              <p className="text-sm text-gray-500 mt-1">Photography / Art</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
