import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import LanguageSelector from './LanguageSelector'
import logo from '../images/islandmadatravel.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Style avec ombre/blur dès qu'on quitte le sommet
      setScrolled(currentScrollY > 30)

      // Si le menu mobile est ouvert, on ne masque jamais le header
      if (isOpen) {
        setIsVisible(true)
        return
      }

      // Si on est en tout début de page, header toujours visible
      if (currentScrollY <= 60) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 8) {
        // Scroll vers le bas -> cacher le header
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 8) {
        // Scroll vers le haut -> faire réapparaître le header
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isOpen])

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Automatically close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: t('navbar.home'), path: '/', icon: 'fa-house' },
    { name: t('navbar.destinations'), path: '/destinations', icon: 'fa-compass' },
    { name: t('navbar.services'), path: '/services', icon: 'fa-concierge-bell' },
    { name: t('navbar.about'), path: '/about', icon: 'fa-circle-info' },
    { name: t('navbar.contact'), path: '/contact', icon: 'fa-paper-plane' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-2.5 sm:px-6 lg:px-8 pt-3 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <nav
        className={`max-w-7xl mx-auto rounded-full transition-all duration-500 ${scrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-xl border border-gray-200/50 dark:border-gray-800/50 py-2 px-3 sm:px-5 lg:px-6'
            : 'bg-white dark:bg-gray-900 shadow-md py-3 px-3 sm:px-5 lg:px-6'
          }`}
      >
        <div className="flex items-center justify-between gap-1.5 sm:gap-3 lg:gap-4 flex-nowrap min-w-0">

          {/* Logo & Marque - visible avec taille adaptée sur mobile, tablette et desktop */}
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2.5 lg:gap-3 group shrink-0 min-w-0">
            <img src={logo} alt="ISLAND MADA TRAVEL" className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105 shrink-0" />
            <span className="font-serif text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-extrabold tracking-tight sm:tracking-wide text-gray-900 dark:text-white whitespace-nowrap">
              ISLAND MADA<span className="text-emerald-600 dark:text-emerald-400"> TRAVEL</span>
            </span>
          </Link>

          {/* Central Airbnb-Style Quick Search / Pills */}
          <div className="hidden xl:flex items-center bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 rounded-full py-1.5 px-3 shadow-inner hover:shadow-md transition-all cursor-pointer whitespace-nowrap shrink-0">
            <Link to="/diego" className="px-3 py-1 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:text-emerald-600 transition-colors border-r border-gray-300 dark:border-gray-700 whitespace-nowrap">
              {t('navbar.diego')}
            </Link>
            <Link to="/nosy" className="px-3 py-1 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:text-emerald-600 dark:border-gray-700 whitespace-nowrap">
              {t('navbar.nosy')}
            </Link>
          </div>

          {/* Desktop Navigation Links & Actions */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-5 shrink-0 min-w-0">
            <div className="flex items-center gap-2 lg:gap-3.5 xl:gap-4.5 whitespace-nowrap">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs lg:text-sm font-medium transition-all hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap ${location.pathname === link.path
                      ? 'text-emerald-600 dark:text-emerald-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="h-4 lg:h-5 w-[1px] bg-gray-300 dark:bg-gray-700 shrink-0"></div>

            {/* Language Selector */}
            <LanguageSelector />

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 lg:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300 shrink-0"
              aria-label="Toggle theme"
            >
              {isDark ? <i className="fas fa-sun text-amber-400"></i> : <i className="fas fa-moon text-gray-600"></i>}
            </button>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/261325539635"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] sm:text-xs xl:text-sm font-medium px-2.5 sm:px-3 lg:px-4 py-1.5 lg:py-2 rounded-full flex items-center gap-1.5 lg:gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0 overflow-hidden min-w-0 max-w-full"
            >
              <i className="fab fa-whatsapp text-sm lg:text-base shrink-0"></i>
              <span className="truncate">{t('navbar.reservation')}</span>
            </a>
          </div>

          {/* Mobile Controls (Dark Toggle & Morphing Hamburger Button) */}
          <div className="md:hidden flex items-center gap-2 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {isDark ? <i className="fas fa-sun text-amber-400"></i> : <i className="fas fa-moon text-gray-700"></i>}
            </button>

            {/* Animated Morphing Hamburger Icon Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-2xl bg-gray-100/90 dark:bg-gray-800/90 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-100 transition-all focus:outline-none relative overflow-hidden"
              aria-label="Menu de navigation"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <span className={`absolute h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-5 rotate-45' : 'w-5 -translate-y-1.5'}`}></span>
                <span className={`absolute h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-5 opacity-100'}`}></span>
                <span className={`absolute h-0.5 bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-5 -rotate-45' : 'w-5 translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop Overlay (Ferme le menu au clic extérieur) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Modern Slide-Over Glassmorphic Mobile Drawer Panel */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm h-[100dvh] bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl shadow-2xl border-l border-gray-200/50 dark:border-gray-800/50 flex flex-col justify-between transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100 dark:border-gray-800/80 shrink-0">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 min-w-0">
            <img src={logo} alt="ISLAND MADA TRAVEL" className="h-8 w-auto shrink-0" />
            <span className="font-serif text-sm sm:text-base font-extrabold tracking-wide text-gray-900 dark:text-white truncate">
              ISLAND MADA<span className="text-emerald-600 dark:text-emerald-400"> TRAVEL</span>
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shrink-0"
            aria-label="Fermer"
          >
            <i className="fas fa-times text-base"></i>
          </button>
        </div>

        {/* Scrollable Main Navigation Links Area */}
        <div className="overflow-y-auto p-4 sm:p-5 space-y-4 flex-1 min-w-0">
          <div className="space-y-1.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-3 sm:p-3.5 rounded-2xl transition-all duration-200 ${isActive
                      ? 'bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-600/20'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/70 font-medium'
                    }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm shrink-0 ${isActive ? 'bg-white/20 text-white' : 'bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400'
                      }`}>
                      <i className={`fas ${link.icon}`}></i>
                    </div>
                    <span className="text-sm sm:text-base truncate">{link.name}</span>
                  </div>
                  <i className={`fas fa-chevron-right text-xs transition-transform ${isActive ? 'text-white translate-x-0.5' : 'text-gray-400 opacity-60'}`}></i>
                </Link>
              )
            })}
          </div>

          {/* Quick Destination Pills inside Drawer */}
          <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800/80 space-y-2.5">
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-1">
              {t('navbar.destinations')}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link
                to="/diego"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl hover:text-emerald-600 border border-gray-200/60 dark:border-gray-700 shadow-sm truncate"
              >
                {t('navbar.diego')}
              </Link>
              <Link
                to="/nosy"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl hover:text-emerald-600 border border-gray-200/60 dark:border-gray-700 shadow-sm truncate"
              >
                {t('navbar.nosy')}
              </Link>
            </div>
          </div>

          {/* Multilingual Selector Container */}
          <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800/80 flex items-center justify-between gap-3 min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              <i className="fas fa-globe text-emerald-500 shrink-0 text-base"></i>
              <span className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider truncate">Langue</span>
            </div>
            <LanguageSelector />
          </div>
        </div>

        {/* Drawer Footer with WhatsApp CTA */}
        <div className="p-4 sm:p-5 border-t border-gray-100 dark:border-gray-800/80 bg-gray-50/50 dark:bg-gray-900/50 shrink-0">
          <a
            href="https://wa.me/261325539635"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-medium py-3 px-4 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/25 transition-all min-w-0"
          >
            <i className="fab fa-whatsapp text-lg shrink-0"></i>
            <span className="text-xs sm:text-sm font-semibold truncate">{t('navbar.contactWhatsapp')}</span>
          </a>
        </div>
      </aside>
    </header>
  )
}

export default Navbar