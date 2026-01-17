'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 100);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">
      {/* Logo or initials */}
      <div className="mb-8 relative">
        <div className="w-20 h-20 border-4 border-blue-600 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 animate-pulse">
          AG
        </div>
        {/* Spinning ring */}
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
      </div>

      {/* Loading text */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Aurel Golemi</h2>
        <p className="text-gray-600">Loading portfolio...</p>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Progress percentage */}
      <p className="text-sm text-gray-500 mt-3">{progress}%</p>
    </div>
  );
}