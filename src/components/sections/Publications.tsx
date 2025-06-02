import React from 'react';
import { useContent } from '../../hooks/useContent';
import type { PublicationsContent } from '../../types/SectionsContents';
import { FaExternalLinkAlt, FaFileAlt, FaUsers, FaCalendar, FaTags } from 'react-icons/fa';

const Publications: React.FC = () => {
  const { content, loading, error } = useContent<PublicationsContent>('publications');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-gray-600 font-medium">Loading publications...</span>
        </div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-xl mb-2">⚠️ Error loading content</div>
          <p className="text-gray-500">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  // Helper function to get publication type colors
  const getTypeColors = (type: string) => {
    switch (type) {
      case 'journal':
        return {
          bg: 'from-blue-50 to-cyan-50',
          border: 'border-blue-200',
          text: 'text-blue-600',
          badge: 'bg-blue-100 text-blue-800 border-blue-200'
        };
      case 'conference':
        return {
          bg: 'from-purple-50 to-pink-50',
          border: 'border-purple-200',
          text: 'text-purple-600',
          badge: 'bg-purple-100 text-purple-800 border-purple-200'
        };
      case 'workshop':
        return {
          bg: 'from-green-50 to-emerald-50',
          border: 'border-green-200',
          text: 'text-green-600',
          badge: 'bg-green-100 text-green-800 border-green-200'
        };
      default:
        return {
          bg: 'from-gray-50 to-slate-50',
          border: 'border-gray-200',
          text: 'text-gray-600',
          badge: 'bg-gray-100 text-gray-800 border-gray-200'
        };
    }
  };

  const handleArticleClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              {content.title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              {content.description}
            </p>
          </div>

          {/* Publications List */}
          <div className="max-w-6xl mx-auto">
            {content.sections.map((section) => (
              <div key={section.id} className="mb-12">
                {/* Section Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{section.title}</h2>
                  <p className="text-gray-600">{section.description}</p>
                </div>

                {/* Publications Grid */}
                <div className="space-y-8">
                  {section.items.map((publication) => {
                    const colors = getTypeColors(publication.type);
                    
                    return (
                      <div
                        key={publication.id}
                        className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] group cursor-pointer"
                        onClick={() => handleArticleClick(publication.url)}
                      >
                        {/* Publication Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <h3 className="text-xl lg:text-2xl font-bold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors pr-4">
                                {publication.title}
                              </h3>
                              <FaExternalLinkAlt className="flex-shrink-0 text-gray-400 group-hover:text-blue-500 transition-colors mt-1" />
                            </div>
                            
                            {/* Authors */}
                            <div className="flex items-center mb-2">
                              <FaUsers className="text-gray-400 mr-2" size={14} />
                              <p className="text-gray-600 text-sm">
                                {publication.authors.map((author, idx) => (
                                  <span key={idx} className={author.includes('Mahmo') ? 'font-semibold text-blue-600' : ''}>
                                    {author}{idx < publication.authors.length - 1 ? ', ' : ''}
                                  </span>
                                ))}
                              </p>
                            </div>

                            {/* Venue and Year */}
                            <div className="flex items-center mb-4">
                              <FaCalendar className="text-gray-400 mr-2" size={14} />
                              <p className="text-gray-600 text-sm">
                                {publication.journal || publication.conference} • {publication.year}
                              </p>
                            </div>
                          </div>

                          {/* Badges */}
                          <div className="flex flex-wrap gap-2 lg:ml-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colors.badge}`}>
                              {publication.type === 'journal' ? '📰' : '🎤'} {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                              ✅ {publication.status}
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                              🏆 {publication.impact}
                            </span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                        {/* Abstract */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <FaFileAlt className="mr-2" size={12} />
                            Abstract
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                            {publication.abstract}
                          </p>
                        </div>

                        {/* Keywords */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                            <FaTags className="mr-2" size={12} />
                            Keywords
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {publication.keywords.map((keyword, idx) => (
                              <span
                                key={idx}
                                className={`inline-block px-3 py-1 rounded-full text-xs bg-gradient-to-r ${colors.bg} ${colors.text} border ${colors.border}`}
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <span className="text-xs text-gray-500">
                            Click to view article
                          </span>
                          <span className="text-xs text-gray-500">
                            Published in {publication.year}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                📊 Research Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.statistics.map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                      <span className="text-2xl text-white">{stat.icon}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {stat.title}
                    </h4>
                    <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Publications;