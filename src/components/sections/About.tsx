import React from 'react';
// import myPhoto from '../../assets/my_photo.png';
import { useContent } from '../../hooks/useContent';
import type { AboutContent } from '../../types/SectionsContents';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const About: React.FC = () => {
  const { content, loading, error } = useContent<AboutContent>('about');

  const fileId = "1gXqYJD1bDqBwexytdvC5vwwTkZniSd6G";
  const myPhoto = `https://lh3.googleusercontent.com/d/${fileId}=w2000?authuser=0`;
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="text-gray-600 font-medium">Loading about...</span>
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

  const s = 'sid';
  const a = 'ali';
  const m = 'mahmoud';
  const ph1 = '07 84';
  const ph2 = ' 88 79';
  const ph3 = ' 26';
  const phoneNumber = '(+33) ' + ph1 + ph2 + ph3;
  const phoneLink = 'tel:' + phoneNumber.replace(/\s/g, '');
  const emailLink = 'mailto:eng.' + s + a+'.' + m + 'i@gmail.com';
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
          </div>

          {/* Profile and Description */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row items-center">
                <div className="relative mb-8 lg:mb-0 lg:mr-12">
                  <div className="w-56 h-56 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={myPhoto}
                      alt={content.profileAlt}
                      className="w-full h-full rounded-full object-cover border-4 border-white"
                    />
                  </div>
                  {/* Floating decoration */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm">✨</span>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
  <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors mb-8">
    {content.description}
  </p>
  
  {/* Contact Information */}
  <div className="space-y-4">
    {/* Phone Contact */}
    <div className="flex items-center justify-center lg:justify-start group/contact">
      <div className="flex items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:scale-105 border border-blue-100">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 group-hover/contact:scale-110 transition-transform">
          <FaPhone className="text-white" size={16} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Phone</span>
          <a 
            href={phoneLink} 
            title={phoneNumber}
            className="text-gray-800 font-semibold hover:text-blue-600 transition-colors"
          >
            {phoneNumber}
          </a>
        </div>
      </div>
    </div>

    {/* Email Contact */}
    <div className="flex items-center justify-center lg:justify-start group/contact">
      <div className="flex items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 hover:scale-105 border border-purple-100">
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 group-hover/contact:scale-110 transition-transform">
          <FaEnvelope className="text-white" size={16} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Email</span>
          <a 
            href={emailLink} 
            title={'eng.' + s + a + '.' + m + 'i@gmail.com'}
            className="text-gray-800 font-semibold hover:text-purple-600 transition-colors break-all"
          >
            {'eng.' + s + a + '.' + m + 'i@gmail.com'}
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Call to Action */}
  {/* <div className="mt-8 pt-6 border-t border-gray-200">
    <p className="text-sm text-gray-600 text-center lg:text-left">
      💬 Feel free to reach out for collaborations, research opportunities, or just to say hello!
    </p>
  </div> */}
</div>              </div>
            </div>
          </div>

          {/* Education and Experience Grid */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education Section */}
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {content.educationTitle}
                  </h3>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                <ul className="space-y-4">
                  <li className="flex items-start group/item hover:bg-blue-50/50 rounded-lg p-3 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                      {content.educationItem1}
                    </span>
                  </li>
                  <li className="flex items-start group/item hover:bg-blue-50/50 rounded-lg p-3 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                      {content.educationItem2}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Experience Section */}
              <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {content.experienceTitle}
                  </h3>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                <ul className="space-y-4">
                  <li className="flex items-start group/item hover:bg-purple-50/50 rounded-lg p-3 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                      {content.experienceItem1}
                    </span>
                  </li>
                  <li className="flex items-start group/item hover:bg-purple-50/50 rounded-lg p-3 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                      {content.experienceItem2}
                    </span>
                  </li>
                  <li className="flex items-start group/item hover:bg-purple-50/50 rounded-lg p-3 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mt-0.5 mr-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                      {content.experienceItem3}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{content.funTitle}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full mt-2"></div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🚴‍♂️</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors">
                    {content.funItem1}
                  </span>
                </div>

                <div className="flex items-start bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">👂</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors">
                    {content.funItem2}
                  </span>
                </div>

                <div className="flex items-start bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🏊‍♂️</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-900 transition-colors">
                    {content.funItem3}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;