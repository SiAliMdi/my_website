import React from 'react';
import { useContent } from '../../hooks/useContent';
import type { CertificationsContent } from '../../types/SectionsContents';
import { FaExternalLinkAlt, FaCalendar, FaCertificate, FaTags, FaCheckCircle, FaClock, FaInfinity } from 'react-icons/fa';

const Certifications: React.FC = () => {
  const { content, loading, error } = useContent<CertificationsContent>('certifications');

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-gray-600 font-medium">Loading certifications...</span>
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

  // Helper function to get level colors
  const getLevelColors = (level: string) => {
    switch (level) {
      case 'foundational':
        return {
          bg: 'from-green-50 to-emerald-50',
          border: 'border-green-200',
          text: 'text-green-600',
          badge: 'bg-green-100 text-green-800 border-green-200'
        };
      case 'intermediate':
        return {
          bg: 'from-blue-50 to-cyan-50',
          border: 'border-blue-200',
          text: 'text-blue-600',
          badge: 'bg-blue-100 text-blue-800 border-blue-200'
        };
      case 'advanced':
        return {
          bg: 'from-purple-50 to-pink-50',
          border: 'border-purple-200',
          text: 'text-purple-600',
          badge: 'bg-purple-100 text-purple-800 border-purple-200'
        };
      case 'professional':
        return {
          bg: 'from-orange-50 to-red-50',
          border: 'border-orange-200',
          text: 'text-orange-600',
          badge: 'bg-orange-100 text-orange-800 border-orange-200'
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

  // Helper function to get status icon and colors
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'active':
        return {
          icon: <FaCheckCircle />,
          color: 'text-green-600',
          bg: 'bg-green-100',
          label: 'Active'
        };
      case 'expired':
        return {
          icon: <FaClock />,
          color: 'text-red-600',
          bg: 'bg-red-100',
          label: 'Expired'
        };
      case 'permanent':
        return {
          icon: <FaInfinity />,
          color: 'text-blue-600',
          bg: 'bg-blue-100',
          label: 'Permanent'
        };
      default:
        return {
          icon: <FaCheckCircle />,
          color: 'text-gray-600',
          bg: 'bg-gray-100',
          label: 'Unknown'
        };
    }
  };

  const handleCertificationClick = (url: string) => {
    if (url !== '#') {
      window.open(url, '_blank');
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

          {/* Certifications Sections */}
          <div className="max-w-6xl mx-auto">
            {content.sections.map((section) => (
              <div key={section.id} className="mb-16">
                {/* Section Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{section.title}</h2>
                  <p className="text-gray-600">{section.description}</p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {section.items.map((cert) => {
                    const levelColors = getLevelColors(cert.level);
                    const statusInfo = getStatusInfo(cert.status);
                    
                    return (
                      <div
                        key={cert.id}
                        className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                        onClick={() => handleCertificationClick(cert.url)}
                      >
                        {/* Certificate Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <FaCertificate className={`mr-2 ${levelColors.text}`} />
                              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                {cert.name}
                              </h3>
                              {cert.url !== '#' && (
                                <FaExternalLinkAlt className="ml-2 text-gray-400 group-hover:text-blue-500 transition-colors" size={14} />
                              )}
                            </div>
                            <p className="text-gray-600 font-medium">{cert.issuer}</p>
                          </div>
                        </div>

                        {/* Certificate Details */}
                        <div className="space-y-4 mb-6">
                          {/* Date and Credential ID */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <FaCalendar className="text-gray-400 mr-2" size={14} />
                              <span className="text-gray-600 text-sm">{cert.date}</span>
                            </div>
                            <span className="text-gray-500 text-xs font-mono">
                              ID: {cert.credentialId}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-700 leading-relaxed text-sm">
                            {cert.description}
                          </p>
                        </div>

                        {/* Skills Tags */}
                        <div className="mb-6">
                          <div className="flex items-center mb-2">
                            <FaTags className="text-gray-400 mr-2" size={12} />
                            <span className="text-xs font-semibold text-gray-700">Skills</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className={`inline-block px-3 py-1 rounded-full text-xs bg-gradient-to-r ${levelColors.bg} ${levelColors.text} border ${levelColors.border}`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Badges */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex space-x-2">
                            {/* Level Badge */}
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${levelColors.badge}`}>
                              📊 {cert.level.charAt(0).toUpperCase() + cert.level.slice(1)}
                            </span>
                            
                            {/* Status Badge */}
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusInfo.bg} ${statusInfo.color} border`}>
                              <span className="mr-1">{statusInfo.icon}</span>
                              {statusInfo.label}
                            </span>
                          </div>
                          
                          {cert.url !== '#' && (
                            <span className="text-xs text-gray-500">
                              Click to verify
                            </span>
                          )}
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
                📊 Certification Overview
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {content.statistics.map((stat, index) => (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                      <span className="text-2xl text-white">{stat.icon}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                      {stat.title}
                    </h4>
                    <p className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</p>
                    <p className="text-gray-600 text-xs">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">🚀 Continuous Learning</h3>
              <p className="text-blue-100 mb-6">
                I'm always expanding my skills and earning new certifications to stay current with industry trends and technologies.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-sm font-medium">
                  🎯 Next: Advanced AI Certification
                </span>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-sm font-medium">
                  📚 In Progress: Cloud Architecture
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Certifications;