import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Services = () => {
  const { t } = useLanguage()
  const [heroIndex, setHeroIndex] = useState(0)

  const heroImages = [
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const services = [
    { 
      icon: 'fa-map-marked-alt', 
      titleKey: 'services.content.guiding.title',
      descKey: 'services.content.guiding.description'
    },
    { 
      icon: 'fa-route', 
      titleKey: 'services.content.organization.title',
      descKey: 'services.content.organization.description'
    },
    { 
      icon: 'fa-car', 
      titleKey: 'services.content.transfers.title',
      descKey: 'services.content.transfers.description'
    },
    { 
      icon: 'fa-compass', 
      titleKey: 'services.content.excursions.title',
      descKey: 'services.content.excursions.description'
    },
    { 
      icon: 'fa-comments', 
      titleKey: 'services.content.assistance.title',
      descKey: 'services.content.assistance.description'
    },
    { 
      icon: 'fa-camera-retro', 
      titleKey: 'services.content.photos.title',
      descKey: 'services.content.photos.description'
    },
  ]

  const chooseReasons = [
    {
      num: '1',
      titleKey: 'services.why.reason1.title',
      descKey: 'services.why.reason1.description'
    },
    {
      num: '2',
      titleKey: 'services.why.reason2.title',
      descKey: 'services.why.reason2.description'
    },
    {
      num: '3',
      titleKey: 'services.why.reason3.title',
      descKey: 'services.why.reason3.description'
    },
    {
      num: '4',
      titleKey: 'services.why.reason4.title',
      descKey: 'services.why.reason4.description'
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[heroIndex]}
            alt="Services"
            className="w-full h-full object-cover transition-all duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        {/* Content */}
        <div className="container-custom text-center text-white relative z-10 px-4 min-w-0">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 flex items-center justify-center gap-3 break-words">
            <i className="fas fa-concierge-bell text-emerald-400 shrink-0"></i> <span>{t('services.hero.title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto break-words">
            {t('services.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap shrink-0 max-w-full truncate text-center"
            >
              {t('services.hero.cta_contact')}
            </Link>
            <a 
              href="#services-list" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-medium px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 max-w-full truncate text-center"
            >
              {t('services.hero.cta_list')}
            </a>
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
      <div className="py-20 overflow-hidden" id="services-list">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 min-w-0">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 break-words">
              {t('services.content.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto break-words">
              {t('services.content.subtitle')}
            </p>
          </div>
        
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-w-0">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden min-w-0"
              >
                <div className="min-w-0">
                  <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/20 dark:text-emerald-400 rounded-2xl flex items-center justify-center text-2xl mb-6 shrink-0">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 break-words">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base mb-6 break-words">
                    {t(service.descKey)}
                  </p>
                </div>

                <Link 
                  to="/contact" 
                  className="text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-2 group text-sm whitespace-nowrap shrink-0"
                >
                  <span className="truncate">{t('services.content.quote_cta')}</span> <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1 shrink-0"></i>
                </Link>
              </div>
            ))}
          </div>

          {/* Why Choose Me Section */}
          <div className="mt-24 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl overflow-hidden min-w-0">
            <div className="text-center mb-12 min-w-0">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-4 break-words">
                {t('services.why.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto break-words">
                {t('services.why.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 min-w-0">
              {chooseReasons.map((reason) => (
                <div key={reason.num} className="flex items-start gap-4 sm:gap-5 bg-white/80 dark:bg-white/5 p-5 sm:p-6 rounded-2xl border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm dark:shadow-none overflow-hidden min-w-0">
                  <div className="bg-emerald-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl font-extrabold shadow-lg shrink-0">
                    {reason.num}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-white break-words">
                      {t(reason.titleKey)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed break-words">
                      {t(reason.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services