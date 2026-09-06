import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

import diegoTroisBaies from '../images/destination/Les Trois Baies.jpg'
import diegoMontagneAmbre from '../images/destination/Forêt de Montagne d\'Ambre.jpg'
import diegoTsingyRouges from '../images/destination/Tsingy Rouges.jpg'
import diegoRamena from '../images/destination/Plage de Ramena.jpg'
import diegoMerEmeraude from '../images/destination/Mer d\'Émeraude.jpg'
import nosyParfums from '../images/destination/Nosy Be - Île aux Parfums.jpg'
import nosyIranja from '../images/destination/Nosy Iranja.jpg'
import nosyTanikely from '../images/destination/Nosy Tanikely.jpg'
import nosyAndilana from '../images/destination/Plage d\'Andilana.jpg'
import nosyKomba from '../images/destination/Nosy Komba.jpg'

const Destinations = () => {
  const { t } = useLanguage()
  const [heroIndex, setHeroIndex] = useState(0)

  const heroImages = [
    diegoMerEmeraude,
    nosyIranja,
    diegoTroisBaies,
    nosyParfums,
    diegoMontagneAmbre,
    nosyTanikely,
    diegoTsingyRouges,
    nosyAndilana,
    diegoRamena,
    nosyKomba,
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[heroIndex]}
            alt="Destinations"
            className="w-full h-full object-cover transition-all duration-1000 scale-105"
          />
        </div>

        {/* Content */}
        <div className="container-custom text-center text-white relative z-10 px-4 min-w-0">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 flex items-center justify-center gap-3 break-words drop-shadow-lg">
            <i className="fas fa-map-marked-alt text-emerald-400 shrink-0"></i> <span>{t('destinations.hero.title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto break-words drop-shadow-md">
            {t('destinations.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/diego" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap shrink-0 max-w-full truncate text-center"
            >
              {t('destinations.hero.cta_diego')}
            </Link>
            <Link 
              to="/nosy" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-medium px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 max-w-full truncate text-center"
            >
              {t('destinations.hero.cta_nosy')}
            </Link>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 shrink-0">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === heroIndex ? 'bg-emerald-400 scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="py-20 overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 min-w-0">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 break-words">
              {t('destinations.content.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto break-words">
              {t('destinations.content.subtitle')}
            </p>
          </div>
        
          <div className="grid md:grid-cols-2 gap-10 min-w-0">
            {/* Diégo-Suarez Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between min-w-0">
              <div className="min-w-0">
                <div 
                  className="relative h-72 bg-cover bg-center min-w-0"
                  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${diegoMerEmeraude}")` }}
                >
                  <span className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow truncate max-w-[75%] whitespace-nowrap shrink-0">
                    {t('destinations.content.diego.badge')}
                  </span>
                </div>
                
                <div className="p-6 sm:p-8 min-w-0">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3 break-words">
                    <i className="fas fa-wind text-emerald-500 dark:text-emerald-400 shrink-0"></i> <span>{t('destinations.content.diego.title')}</span>
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4 flex items-center gap-2 break-words">
                    <i className="fas fa-map-marker-alt shrink-0"></i> <span>{t('destinations.content.diego.location')}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base break-words">
                    {t('destinations.content.diego.description')}
                  </p>
                  <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300 min-w-0 text-sm sm:text-base">
                    <li className="flex items-center gap-3 min-w-0 break-words">
                      <i className="fas fa-check-circle text-emerald-500 dark:text-emerald-400 shrink-0"></i>
                      <span className="break-words min-w-0">{t('destinations.content.diego.feature_bays')}</span>
                    </li>
                    <li className="flex items-center gap-3 min-w-0 break-words">
                      <i className="fas fa-check-circle text-emerald-500 dark:text-emerald-400 shrink-0"></i>
                      <span className="break-words min-w-0">{t('destinations.content.diego.feature_parks')}</span>
                    </li>
                    <li className="flex items-center gap-3 min-w-0 break-words">
                      <i className="fas fa-check-circle text-emerald-500 dark:text-emerald-400 shrink-0"></i>
                      <span className="break-words min-w-0">{t('destinations.content.diego.feature_tsingy')}</span>
                    </li>
                    <li className="flex items-center gap-3 min-w-0 break-words">
                      <i className="fas fa-check-circle text-emerald-500 dark:text-emerald-400 shrink-0"></i>
                      <span className="break-words min-w-0">{t('destinations.content.diego.feature_history')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 min-w-0">
                <Link 
                  to="/diego" 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-xl transition-all text-center block shadow-md hover:shadow-emerald-500/20 whitespace-nowrap truncate shrink-0"
                >
                  {t('destinations.content.diego.cta')} <i className="fas fa-arrow-right ml-2 shrink-0"></i>
                </Link>
              </div>
            </div>

            {/* Nosy Be Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between min-w-0">
              <div className="min-w-0">
                <div 
                  className="relative h-72 bg-cover bg-center min-w-0"
                  style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${nosyIranja}")` }}
                >
                  <span className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow truncate max-w-[75%] whitespace-nowrap shrink-0">
                    {t('destinations.content.nosy.badge')}
                  </span>
                </div>
                
                <div className="p-6 sm:p-8 min-w-0">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3 break-words">
                    <i className="fas fa-tree text-emerald-500 dark:text-emerald-400 shrink-0"></i> <span>{t('destinations.content.nosy.title')}</span>
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4 flex items-center gap-2 break-words">
                    <i className="fas fa-map-marker-alt shrink-0"></i> <span>{t('destinations.content.nosy.location')}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base break-words">
                    {t('destinations.content.nosy.description')}
                  </p>
                  <ul className="space-y-3 mb-8 text-gray-700 dark:text-gray-300 min-w-0 text-sm sm:text-base">
                    <li className="flex items-center gap-3 min-w-0 break-words">
                      <i className="fas fa-check-circle text-emerald-500 dark:text-emerald-400 shrink-0"></i>
                      <span className="break-words min-w-0">{t('destinations.content.nosy.feature_excursions')}</span>
                    </li>
                    <li className="flex items-center gap-3 min-w-0 break-words">
                      <i className="fas fa-check-circle text-emerald-500 dark:text-emerald-400 shrink-0"></i>
                      <span className="break-words min-w-0">{t('destinations.content.nosy.feature_snorkeling')}</span>
                    </li>
                    <li className="flex items-center gap-3 min-w-0 break-words">
                      <i className="fas fa-check-circle text-emerald-500 dark:text-emerald-400 shrink-0"></i>
                      <span className="break-words min-w-0">{t('destinations.content.nosy.feature_lokobe')}</span>
                    </li>
                    <li className="flex items-center gap-3 min-w-0 break-words">
                      <i className="fas fa-check-circle text-emerald-500 dark:text-emerald-400 shrink-0"></i>
                      <span className="break-words min-w-0">{t('destinations.content.nosy.feature_sunset')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 min-w-0">
                <Link 
                  to="/nosy" 
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-xl transition-all text-center block shadow-md hover:shadow-emerald-500/20 whitespace-nowrap truncate shrink-0"
                >
                  {t('destinations.content.nosy.cta')} <i className="fas fa-arrow-right ml-2 shrink-0"></i>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Destinations