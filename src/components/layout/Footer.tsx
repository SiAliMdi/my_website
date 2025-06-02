import React from 'react';
import { Link } from 'react-router-dom';
// import SocialLinks from '../common/SocialLinks';
import { FaHeart, FaCode, } from 'react-icons/fa';
import type { FooterContent, HeroContent, NavigationContent } from '../../types/SectionsContents';
import { useContent } from '../../hooks/useContent';
import LanguageSwitcher from '../common/LanguageSwitcher';
import SocialLinks from '../common/SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const { content: navContent, loading: navLoading, error: navError } = useContent<NavigationContent>('navigation');
  const { content: heroContent, loading: heroLoading, error: heroError } = useContent<HeroContent>('hero');
  const { content: footerContent, loading: footerLoading, error: footerError } = useContent<FooterContent>('footer');

  // Loading state
  if (navLoading) {
    return (
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
            <div className="hidden md:flex space-x-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-200 h-6 w-20 rounded"></div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <div className="animate-pulse bg-gray-200 h-8 w-24 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Error state
  if (navError || !navContent) {
    return (
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-red-600">Error loading navigation</div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <SocialLinks />
          </div>
        </div>
      </header>
    );
  }
  // Loading state
  if (heroLoading && !heroContent) {
    return (
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
            <div className="hidden md:flex space-x-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-200 h-6 w-20 rounded"></div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <div className="animate-pulse bg-gray-200 h-8 w-24 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Error state
  if (heroError || !heroContent) {
    return (
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-red-600">Error loading hero</div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <SocialLinks />
          </div>
        </div>
      </header>
    );
  }
  // Loading state
  if (footerLoading && !footerContent) {
    return (
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            <div className="animate-pulse bg-gray-200 h-8 w-32 rounded"></div>
            <div className="hidden md:flex space-x-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse bg-gray-200 h-6 w-20 rounded"></div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <div className="animate-pulse bg-gray-200 h-8 w-24 rounded"></div>
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Error state
  if (footerError || !footerContent) {
    return (
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-red-600">Error loading footer</div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <SocialLinks />
          </div>
        </div>
      </header>
    );
  }

  // Filter out the home link for the main navigation (we'll use it for brand)
  const navigationLinks = navContent.links.filter(link => link.id !== 'mine');

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {heroContent.name}
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  {heroContent.subtitle}
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-3 mb-6">
                {heroContent.highlights.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm">{achievement.icon}</span>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              {/* <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Connect with me:</span>
                <SocialLinks />
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <span className="mr-2">🔗</span>
                {footerContent.navigation.title}
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors group"
                    >
                      <span className="group-hover:scale-110 transition-transform">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <span className="mr-2">📞</span>
                {footerContent.contact.title}
              </h4>
              <div className="space-y-4">
                <div className="group">
                  <p className="text-gray-400 text-sm mb-1">
                    {footerContent.contact.fields.email.label}
                  </p>
                  <a
                    href={"mailto:" + footerContent.contact.fields.email.value}
                    className="text-gray-300 hover:text-blue-400 transition-colors break-all group-hover:underline"
                  >
                    {footerContent.contact.fields.email.value}
                  </a>
                </div>
                <div className="group">
                  <p className="text-gray-400 text-sm mb-1">
                    {footerContent.contact.fields.location.label}
                  </p>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {footerContent.contact.fields.location.value}
                  </p>
                </div>
                <div className="group">
                  <p className="text-gray-400 text-sm mb-1">
                    {footerContent.contact.fields.status.label}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm font-medium">
                      {footerContent.contact.fields.status.value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© {currentYear}</span>
                <span className="text-blue-400 font-medium">{heroContent.name}</span>
                <span>- {footerContent.copyright.builtWith}
                </span>
                <FaHeart className="text-red-400 animate-pulse" />
                <span>
                  {footerContent.copyright.and}
                </span>
                <FaCode className="text-blue-400" />
                <span>
                . {footerContent.copyright.rightsReserved}
                </span>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">
                  {footerContent.copyright.techStackLabel}
                </span>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 bg-gray-800 rounded-full px-3 py-1">
                    <span className="text-blue-400">⚛️</span>
                    <span className="text-xs text-gray-300">React</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-gray-800 rounded-full px-3 py-1">
                    <span className="text-blue-400">📘</span>
                    <span className="text-xs text-gray-300">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-gray-800 rounded-full px-3 py-1">
                    <span className="text-cyan-400">💨</span>
                    <span className="text-xs text-gray-300">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full translate-y-12 -translate-x-12"></div>
      </div>
    </footer>
  );
};

export default Footer;