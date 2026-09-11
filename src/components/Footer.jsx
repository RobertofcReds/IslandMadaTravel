import { Link } from 'react-router-dom'
import logo from '../images/islandmadatravel.png'
import { useLanguage } from '../context/LanguageContext'

const Footer = ({ className = '' }) => {
  const { t } = useLanguage()
  return (
    <footer className={`bg-gray-900/95 dark:bg-gray-950/95 backdrop-blur-sm text-white pt-16 pb-8 border-t border-gray-800 overflow-hidden ${className}`}>
      <div className="container-custom max-w-7xl mx-auto px-6">

        {/* Banner CTA WhatsApp */}
        <div className="bg-gradient-to-r from-emerald-900/60 to-teal-900/40 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl overflow-hidden min-w-0">
          <div className="min-w-0">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2 break-words">{t('footer.cta.title')}</h3>
            <p className="text-gray-300 text-sm break-words">{t('footer.cta.subtitle')}</p>
          </div>
          <a
            href="https://wa.me/261325539635"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/20 whitespace-nowrap shrink-0 max-w-full truncate"
          >
            <i className="fab fa-whatsapp text-xl shrink-0"></i>
            <span className="truncate">{t('footer.cta.button')}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pb-12">

          {/* Brand & Bio */}
          <div className="lg:col-span-2 min-w-0">
            <Link to="/" className="flex items-center gap-3 mb-4 shrink-0">
              <img src={logo} alt="ISLAND MADA TRAVEL" className="h-10 w-auto shrink-0" />
              <span className="font-serif text-xl font-bold text-white tracking-wide whitespace-nowrap">
                ISLAND MADA <span className="text-emerald-400">TRAVEL</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm mb-6 max-w-sm break-words">
              {t('footer.bio')}
            </p>
            <div className="flex gap-3 shrink-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 hover:text-white text-gray-300 rounded-full flex items-center justify-center transition-all border border-gray-700 shrink-0">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 hover:text-white text-gray-300 rounded-full flex items-center justify-center transition-all border border-gray-700 shrink-0">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/261325539635" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-emerald-500 hover:text-white text-gray-300 rounded-full flex items-center justify-center transition-all border border-gray-700 shrink-0">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-xs text-emerald-400 break-words">{t('footer.navigation')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors break-words">{t('footer.nav_home')}</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-emerald-400 transition-colors break-words">{t('footer.nav_destinations')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-emerald-400 transition-colors break-words">{t('footer.nav_services')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-emerald-400 transition-colors break-words">{t('footer.nav_about')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors break-words">{t('footer.nav_contact')}</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="min-w-0">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-xs text-emerald-400 break-words">{t('footer.highlights')}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/diego" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 break-words"><i className="fas fa-map-marker-alt text-xs text-emerald-500 shrink-0"></i> <span>{t('footer.highlight_diego')}</span></Link></li>
              <li><Link to="/nosy" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5 break-words"><i className="fas fa-map-marker-alt text-xs text-emerald-500 shrink-0"></i> <span>{t('footer.highlight_nosy')}</span></Link></li>
              <li><span className="text-gray-400 flex items-center gap-1.5 break-words"><i className="fas fa-check text-xs text-emerald-500 shrink-0"></i> <span>{t('footer.highlight_emerald')}</span></span></li>
              <li><span className="text-gray-400 flex items-center gap-1.5 break-words"><i className="fas fa-check text-xs text-emerald-500 shrink-0"></i> <span>{t('footer.highlight_ankarana')}</span></span></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="min-w-0">
            <h4 className="text-white font-semibold text-base mb-4 tracking-wider uppercase text-xs text-emerald-400 break-words">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400 break-words">
                <i className="fas fa-map-marker-alt text-emerald-400 mt-1 shrink-0"></i>
                <span className="break-words">Antsiranana (Diégo-Suarez), Madagascar</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 min-w-0">
                <i className="fas fa-envelope text-emerald-400 shrink-0"></i>
                <a href="mailto:contact@islandmadatravel.com" className="hover:text-white transition-colors break-all min-w-0">islandmadatravel@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 whitespace-nowrap">
                <i className="fas fa-phone text-emerald-400 shrink-0"></i>
                <a href="tel:+261325539635" className="hover:text-white transition-colors">+261 32 55 396 35</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p className="break-words text-center md:text-left">&copy; {new Date().getFullYear()} ISLAND MADA TRAVEL. {t('footer.copyright')}</p>
          <div className="flex gap-6 whitespace-nowrap shrink-0">
            <Link to="#" className="hover:text-gray-400 transition-colors">{t('footer.privacy')}</Link>
            <Link to="#" className="hover:text-gray-400 transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer