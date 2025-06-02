import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContent } from '../../hooks/useContent';
import type { NavigationContent } from '../../types/SectionsContents';
import SocialLinks from '../common/SocialLinks';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content, loading, error } = useContent<NavigationContent>('navigation');

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Loading state
  if (loading) {
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
  if (error || !content) {
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

  // Filter out the home link for the main navigation (we'll use it for brand)
  const navigationLinks = content.links.filter(link => link.id !== 'mine');
  const homeLink = content.links.find(link => link.id === 'mine');

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          {/* Brand - using home link or fallback */}
          <Link
            to={homeLink?.path || "/"}
            className="text-xl font-bold hover:text-blue-600 transition-colors group"
            title={homeLink?.description || content.brand.tagline}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
              {homeLink?.label || content.brand.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`hover:text-blue-500 transition-colors flex items-center space-x-1 group ${isActive(link.path)
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700'
                  }`}
                title={link.description}
              >
                <span className="group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label={isMobileMenuOpen ? content.mobileMenu.closeLabel : content.mobileMenu.openLabel}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col space-y-2 p-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                onClick={closeMobileMenu}
                className={`p-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-3 ${isActive(link.path)
                    ? 'text-blue-600 font-semibold bg-blue-50'
                    : 'text-gray-700'
                  }`}
              >
                <span className="text-lg">{link.icon}</span>
                <div className="flex flex-col">
                  <span className="font-medium">{link.label}</span>
                  <span className="text-xs text-gray-500">{link.description}</span>
                </div>
              </Link>
            ))}

            {/* Mobile Footer Section */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <div className="flex flex-col space-y-4">
                <LanguageSwitcher />
                <SocialLinks />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;