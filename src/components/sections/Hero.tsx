import React from 'react';
import { useContent } from '../../hooks/useContent';
import {
  FaArrowDown, FaDownload
} from 'react-icons/fa';
import type { HeroContent } from '../../types/SectionsContents';

const Hero: React.FC = () => {
  const { content, loading, error } = useContent<HeroContent>('hero');

  const cvUrl = import.meta.env.VITE_CV_URL; 

  const fileId = "1gXqYJD1bDqBwexytdvC5vwwTkZniSd6G";
  const myPhoto = `https://lh3.googleusercontent.com/d/${fileId}=w2000?authuser=0`;

  // Loading state
  if (loading && !content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-gray-600 font-medium">Loading...</div>
      </div>
    );
  }
  // Error state
  if (error || !content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-2">⚠️ Error loading content</div>
          <p className="text-gray-500">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  const handleCVView = () => {
    window.open(cvUrl, '_blank');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-36 h-36 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          {/* Main Hero Content */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300 group">

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="space-y-8 text-center lg:text-left">
                  {/* Title */}
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                      {content.title}
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto lg:mx-0"></div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                    {content.subtitle}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    {content.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-4 py-2 border border-blue-100 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:scale-105 group/highlight"
                      >
                        <div className={`w-8 h-8 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center group-hover/highlight:scale-110 transition-transform`}>
                          <span className="text-white text-sm">{highlight.icon}</span>
                        </div>
                        <span className="text-gray-700 font-medium group-hover/highlight:text-gray-900 transition-colors">
                          {highlight.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button
                      onClick={handleCVView}
                      className="hover:cursor-pointer inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg group/cta"
                      title="View my CV in Google Drive"
                    >
                      <FaDownload className="mr-2 group-hover/cta:scale-110 transition-transform" />
                      <span>{content.cta}</span>
                    </button>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative group">
                    {/* Decorative rings */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse opacity-20 scale-110"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse opacity-15 scale-125 animation-delay-500"></div>

                    {/* Main image container */}
                    <div className="relative w-80 h-80 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-2 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={myPhoto}
                        alt={content.name + " - AI Researcher & Developer"}
                        className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                        onError={() => {
                          console.error('Failed to load image from Google Drive');
                          // Optional: Add fallback behavior here
                        }}
                        loading="lazy"
                      />

                      {/* Floating badge */}
                      <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2 animate-bounce">
                        <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold">
                          {content.available}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-12">
            <div className="flex flex-col items-center space-y-2 text-gray-500 animate-bounce">
              <span className="text-sm font-medium">
                {content.scroll}
              </span>
              <FaArrowDown className="text-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow">
                    <span className="text-white text-xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">6+ {content.years}</h3>
                  <p className="text-gray-600 text-sm">
                    {content.summerize.research}
                  </p>
                </div>

                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow">
                    <span className="text-white text-xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">PhD</h3>
                  <p className="text-gray-600 text-sm">
                    {content.summerize.phd}
                  </p>
                </div>

                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow">
                    <span className="text-white text-xl">👨‍🏫</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">2+ {content.years}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {content.summerize.teaching}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;