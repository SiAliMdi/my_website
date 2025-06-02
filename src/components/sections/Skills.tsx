import React from 'react';
import { useContent } from '../../hooks/useContent';
import type { SkillsContent } from '../../types/SectionsContents';

const Skills: React.FC = () => {
    const { content, loading, error } = useContent<SkillsContent>('skills');

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span className="text-gray-600 font-medium">Loading skills...</span>
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

    // Helper function to get category colors
    const getCategoryColors = (type: string) => {
        switch (type) {
            case 'technical':
                return {
                    gradient: 'from-blue-500 to-cyan-500',
                    bg: 'from-blue-50 to-cyan-50',
                    border: 'border-blue-200',
                    text: 'text-blue-600'
                };
            case 'academic':
                return {
                    gradient: 'from-purple-500 to-pink-500',
                    bg: 'from-purple-50 to-pink-50',
                    border: 'border-purple-200',
                    text: 'text-purple-600'
                };
            case 'language':
                return {
                    gradient: 'from-green-500 to-emerald-500',
                    bg: 'from-green-50 to-emerald-50',
                    border: 'border-green-200',
                    text: 'text-green-600'
                };
            case 'creative':
                return {
                    gradient: 'from-orange-500 to-red-500',
                    bg: 'from-orange-50 to-red-50',
                    border: 'border-orange-200',
                    text: 'text-orange-600'
                };
            default:
                return {
                    gradient: 'from-gray-500 to-slate-500',
                    bg: 'from-gray-50 to-slate-50',
                    border: 'border-gray-200',
                    text: 'text-gray-600'
                };
        }
    };

    // Helper function to get level badge colors
    /* const getLevelColors = (level: string) => {
      const lowerLevel = level.toLowerCase();
      if (lowerLevel.includes('expert') || lowerLevel.includes('خبير') || lowerLevel.includes('native') || lowerLevel.includes('maternelle') || lowerLevel.includes('اللغة الأم')) {
        return 'bg-green-100 text-green-800 border-green-200';
      } else if (lowerLevel.includes('advanced') || lowerLevel.includes('avancé') || lowerLevel.includes('متقدم') || lowerLevel.includes('dalf') || lowerLevel.includes('professional') || lowerLevel.includes('professionnel') || lowerLevel.includes('مهني')) {
        return 'bg-blue-100 text-blue-800 border-blue-200';
      } else {
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      }
    }; */

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

                    {/* Skills Categories */}
                    <div className="max-w-6xl mx-auto">
                        <div className="space-y-12">
                            {content.categories.map((category) => {
                                const colors = getCategoryColors(category.type);

                                return (
                                    <div key={category.id} className="relative">
                                        {/* Category Card */}
                                        <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] group">
                                            {/* Category Header */}
                                            <div className="flex items-center mb-6">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                                                    <span className="text-white text-xl">
                                                        {category.title.split(' ')[0]}
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className={`text-2xl font-bold text-gray-800 group-hover:${colors.text} transition-colors`}>
                                                        {category.title.slice(2)}
                                                    </h3>
                                                    <p className="text-gray-500 text-sm capitalize">
                                                        {category.typeDescription}
                                                        {/* {category.type === 'technical' && '💻 Technical Skills'}
                                                        {category.type === 'academic' && '🎓 Academic & Research'}
                                                        {category.type === 'language' && '🌍 Language Proficiency'}
                                                        {category.type === 'creative' && '🎨 Creative & Design'} */}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Divider */}
                                            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-6"></div>

                                            {/* Skills Grid */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {category.skills.map((skill, skillIndex) => (
                                                    <div
                                                        key={skillIndex}
                                                        className={`bg-gradient-to-r ${colors.bg} rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:scale-105 ${colors.border} border group/skill`}
                                                    >
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div className="flex items-center">
                                                                <span className="text-2xl mr-3 group-hover/skill:scale-110 transition-transform">
                                                                    {skill.icon}
                                                                </span>
                                                                <h4 className="font-semibold text-gray-800 group-hover/skill:text-gray-900 transition-colors">
                                                                    {skill.name}
                                                                </h4>
                                                            </div>
                                                        </div>
                                                        {/* <div className="flex justify-end">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getLevelColors(skill.level)}`}>
                                {skill.level}
                              </span>
                            </div> */}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Category Footer */}
                                            <div className="mt-6 pt-6 border-t border-gray-100">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-500">
                                                        {`${category.skills.length} ${content.skillsCountDescription}`}
                                                    </span>
                                                    <div className="flex space-x-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <div
                                                                key={i}
                                                                className={`w-2 h-2 rounded-full ${i < Math.min(category.skills.length / 2, 5)
                                                                    ? `bg-gradient-to-r ${colors.gradient}`
                                                                    : 'bg-gray-200'
                                                                    }`}
                                                            ></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Skills Summary Statistics */}
                    {/* <div className="mt-20 max-w-4xl mx-auto">
                        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                                📊 Skills Overview
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                <div className="text-center group hover:scale-105 transition-transform duration-300">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                                        <span className="text-2xl text-white">💻</span>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                        Technical
                                    </h4>
                                    <p className="text-3xl font-bold text-blue-600 mb-1">
                                        {content.categories.filter(cat => cat.type === 'technical').reduce((acc, cat) => acc + cat.skills.length, 0)}
                                    </p>
                                    <p className="text-gray-600 text-sm">Programming & Tools</p>
                                </div>

                                <div className="text-center group hover:scale-105 transition-transform duration-300">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                                        <span className="text-2xl text-white">🎓</span>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                                        Academic
                                    </h4>
                                    <p className="text-3xl font-bold text-purple-600 mb-1">
                                        {content.categories.filter(cat => cat.type === 'academic').reduce((acc, cat) => acc + cat.skills.length, 0)}
                                    </p>
                                    <p className="text-gray-600 text-sm">Research & Teaching</p>
                                </div>

                                <div className="text-center group hover:scale-105 transition-transform duration-300">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                                        <span className="text-2xl text-white">🌍</span>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                                        Languages
                                    </h4>
                                    <p className="text-3xl font-bold text-green-600 mb-1">
                                        {content.categories.filter(cat => cat.type === 'language').reduce((acc, cat) => acc + cat.skills.length, 0)}
                                    </p>
                                    <p className="text-gray-600 text-sm">Multilingual</p>
                                </div>

                                <div className="text-center group hover:scale-105 transition-transform duration-300">
                                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                                        <span className="text-2xl text-white">🎨</span>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                                        Creative
                                    </h4>
                                    <p className="text-3xl font-bold text-orange-600 mb-1">
                                        {content.categories.filter(cat => cat.type === 'creative').reduce((acc, cat) => acc + cat.skills.length, 0)}
                                    </p>
                                    <p className="text-gray-600 text-sm">Design & UX</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Skills Proficiency Legend */}
                    {/* <div className="mt-12 max-w-2xl mx-auto">
                        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                                📈 Proficiency Levels
                            </h4>
                            <div className="flex flex-wrap justify-center gap-4">
                                <div className="flex items-center">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200 mr-2">
                                        Expert/Native
                                    </span>
                                    <span className="text-sm text-gray-600">Advanced mastery</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 mr-2">
                                        Advanced/Professional
                                    </span>
                                    <span className="text-sm text-gray-600">Strong proficiency</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200 mr-2">
                                        Intermediate
                                    </span>
                                    <span className="text-sm text-gray-600">Working knowledge</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
};

export default Skills;