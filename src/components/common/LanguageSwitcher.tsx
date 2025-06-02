import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { ChevronDown, Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    nativeName: 'English'
  },
  {
    code: 'fr',
    name: 'French',
    flag: '🇫🇷',
    nativeName: 'Français'
  },
  {
    code: 'ar',
    name: 'Arabic',
    flag: '🇩🇿',
    nativeName: 'العربية'
  }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const getCurrentLanguage = (): string => i18n.language || 'en';

  const changeLanguage = (languageCode: string): void => {
    i18n.changeLanguage(languageCode);
  };

  const currentLang = languages.find(lang => lang.code === getCurrentLanguage()) || languages[0];

  // Sort languages to put current language first
  const sortedLanguages = [
    currentLang,
    ...languages.filter(lang => lang.code !== getCurrentLanguage())
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300 transition-colors"
        >
          <Globe className="w-4 h-4 text-gray-600" />
          {/* <span className="text-lg">{currentLang.flag}</span> */}
          <span className="hidden sm:inline-block font-medium text-gray-700">
            {currentLang.code.toUpperCase()}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-48 bg-white border shadow-lg rounded-lg"
        sideOffset={5}
      >
        {sortedLanguages.map((language, index) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className={`flex items-center space-x-3 px-3 py-2 cursor-pointer transition-colors ${language.code === getCurrentLanguage()
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'hover:bg-gray-50 text-gray-700'
              } ${index === 0 ? 'border-b border-gray-100' : ''}`}
          >
            <span className="text-xl">{language.flag}</span>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{language.name}</span>
              <span className="text-xs text-gray-500">{language.nativeName}</span>
            </div>
            {language.code === getCurrentLanguage() && (
              <div className="ml-auto">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;