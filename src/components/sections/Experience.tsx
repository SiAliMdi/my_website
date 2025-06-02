import React from 'react';
import { useContent } from '../../hooks/useContent';
import type { ExperienceContent } from '../../types/SectionsContents';

const Experience: React.FC = () => {
  const { content, loading, error } = useContent<ExperienceContent>('experience');

  if (loading) {
    return (

      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-gray-600 font-medium">Loading experience...</span>
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

  // Helper function to get status badges based on end date
  const getStatusBadges = (endDate: string, index: number) => {
    const isOngoing = endDate.toLowerCase().includes('present') ||
      endDate.toLowerCase().includes('2025') ||
      endDate.toLowerCase().includes('en cours') ||
      endDate.toLowerCase().includes('الحاضر');

    if (isOngoing) {
      return (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center space-x-2 flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
              🟢 Current Position
            </span>
            {index === 0 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                👨‍🏫 Teaching
              </span>
            )}
            {index === 1 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
                🔬 Research
              </span>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center space-x-2 flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
              ✅ Completed
            </span>
            {index === 2 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                🏆 High Distinction
              </span>
            )}
          </div>
        </div>
      );
    }
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

          {/* Experience Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 hidden md:block"></div>

              <div className="space-y-12">
                {content.items.map((item, index) => (
                  <div key={item.id} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                    {/* Content Card */}
                    <div className="md:ml-20 ml-0">
                      <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                        {/* Card Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-lg text-blue-600 font-semibold mb-1 flex items-center">
                              {item.company}
                            </p>
                            <p className="text-gray-500 flex items-center">
                              <span className="mr-1">📍</span>
                              {item.location}
                            </p>
                          </div>
                          <div className="lg:ml-4 mt-2 lg:mt-0">
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200">
                              📅 {item.startDate} - {item.endDate}
                            </span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                        {/* Description List */}
                        <div className="space-y-3">
                          {item.description.map((desc, descIndex) => (
                            <div
                              key={descIndex}
                              className="flex items-start space-x-3 group/item hover:bg-blue-50/50 rounded-lg p-3 transition-colors"
                            >
                              <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-0.5">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                              <p className="text-gray-700 leading-relaxed text-sm lg:text-base group-hover/item:text-gray-900 transition-colors">
                                {desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Card Footer with Status Badges */}
                        {getStatusBadges(item.endDate, index)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                {content.highlight}
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

          {/* Skills & Technologies Section */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                🛠️ Technologies & Skills Used
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: "Python", icon: "🐍" },
                  { name: "PyTorch", icon: "🔥" },
                  { name: "React", icon: "⚛️" },
                  { name: "Django", icon: "🎸" },
                  { name: "JavaScript", icon: "💛" },
                  { name: "Java", icon: "☕" },
                  { name: "MongoDB", icon: "🍃" },
                  { name: "PostgreSQL", icon: "🐘" },
                  { name: "Git", icon: "📦" },
                  { name: "Linux", icon: "🐧" },
                  { name: "LaTeX", icon: "📄" },
                  { name: "HTML/CSS", icon: "🎨" }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 text-center hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:scale-105 border border-blue-100"
                  >
                    <div className="text-2xl mb-1">{tech.icon}</div>
                    <div className="text-sm font-medium text-gray-700">{tech.name}</div>
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

export default Experience;