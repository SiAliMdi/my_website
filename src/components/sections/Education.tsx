import React from 'react';
import { useContent } from '../../hooks/useContent';
import type { EducationContent } from '../../types/SectionsContents';
import { FaExternalLinkAlt, FaCertificate, FaEye } from 'react-icons/fa';

const Education: React.FC = () => {
  const { content, loading, error } = useContent<EducationContent>('education');

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-gray-600 font-medium">Loading education...</span>
        </div>
      </div>
    );
  }

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

  const handleCertificationView = (url: string) => {
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

          {/* Education Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 hidden md:block"></div>

              <div className="space-y-12">
                {content.items.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                    {/* Content Card */}
                    <div className="md:ml-20 ml-0">
                      <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                        {/* Card Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                              {item.degree}
                            </h3>
                            <p className="text-lg text-blue-600 font-semibold mb-1 flex items-center">
                              {item.institution}
                            </p>
                            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200 mt-2">
                              {item.year}
                            </span>
                          </div>

                          {/* Certification Button */}
                          <div className="lg:ml-4 mt-4 lg:mt-0 flex flex-col sm:flex-row gap-3">
                            <button
                              onClick={() => handleCertificationView(item.certifUrl)}
                              className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium text-sm group/cert"
                              title="View Certificate"
                            >
                              <FaCertificate className="mr-2 group-hover/cert:scale-110 transition-transform" size={16} />
                              <span>{item.certifBtnTxt}

                              </span>
                              <FaExternalLinkAlt className="ml-2 group-hover/cert:translate-x-1 transition-transform" size={12} />
                            </button>
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

                        {/* Card Footer with Achievement Badge */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                            <div className="flex flex-wrap items-center gap-2">
                              {index === 0 && (
                                <>
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                    🎯 In Progress
                                  </span>
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                                    🔬 Research Phase
                                  </span>
                                </>
                              )}

                              {index === 1 && (
                                <>
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                    ✅ Completed
                                  </span>
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
                                    🏆 With Distinction
                                  </span>
                                </>
                              )}
                            </div>

                            {/* Certificate Preview Info */}
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                              <FaEye size={12} />
                              <span>Click certificate to view official document</span>
                            </div>
                          </div>
                        </div>

                        {/* Certificate Preview Indicator */}
                        <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                                <FaCertificate className="text-white" size={14} />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-green-800">
                                  {item.certifDesc}
                                </p>
                                {/* <p className="text-xs text-green-600">Click the button above to view the verified document</p> */}
                              </div>
                            </div>
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-100"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-200"></div>
                            </div>
                          </div>
                        </div>
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
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">{content.highlight}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.statistics.map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                      <span className="text-2xl text-white">{stat.icon}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{stat.title}</h4>
                    <p className="text-lg font-bold text-purple-600">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          {/* <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">📚 Academic Excellence</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                My educational journey reflects a commitment to academic excellence and continuous learning.
                All certificates are available for verification and demonstrate my qualifications and achievements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-sm font-medium">
                  🎓 Advanced Degree Programs
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-sm font-medium">
                  🔬 Research Experience
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-sm font-medium">
                  📄 Verified Credentials
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Education;