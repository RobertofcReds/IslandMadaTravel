import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { languages } from '../data/translations'
import { ChevronDown } from 'lucide-react'

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLang = languages.find((l) => l.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative shrink-0" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition-all text-xs lg:text-sm font-medium border border-gray-200 dark:border-gray-700 whitespace-nowrap shrink-0"
        aria-label="Changer de langue"
      >
        <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-3.5 object-cover rounded-sm shrink-0" />
        <span className="uppercase text-xs font-bold tracking-wide">{currentLang.code}</span>
        <ChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} size={14}/>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 z-50 animate-fadeIn">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                language === lang.code
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <span className="flex items-center gap-2.5 truncate">
                <img src={lang.flag} alt={lang.label} className="w-5 h-3.5 object-cover rounded-sm shrink-0" />
                <span className="truncate">{lang.label}</span>
              </span>
              {language === lang.code && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
