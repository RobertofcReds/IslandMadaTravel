import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  const [heroIndex, setHeroIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(heroInterval)
  }, [heroImages.length])

  const guideImages = [
    { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Guidage dans la forêt de Montagne d\'Ambre' },
    { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Visite des Tsingy Rouges' },
    { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Excursion à la Mer d\'Émeraude' },
    { url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Randonnée à la Montagne des Français' },
    { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', caption: 'Découverte de Nosy Be' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % guideImages.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [guideImages.length])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[heroIndex]}
            alt="À Propos"
            className="w-full h-full object-cover transition-all duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        <div className="container-custom text-center text-white relative z-10 px-4 min-w-0">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 flex items-center justify-center gap-3 break-words">
            <i className="fas fa-user text-emerald-400 shrink-0"></i> <span>{t('about.hero.title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto break-words">
            {t('about.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/261325539635" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg whitespace-nowrap shrink-0 max-w-full truncate text-center"
            >
              {t('about.hero.cta_contact')}
            </a>
            <a 
              href="#about" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-medium px-8 py-3.5 rounded-full transition-all whitespace-nowrap shrink-0 max-w-full truncate text-center"
            >
              {t('about.hero.cta_learn')}
            </a>
          </div>
        </div>

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
      <div className="py-20 overflow-hidden" id="about">
        <div className="container-custom max-w-7xl mx-auto px-6">
          
          {/* Bio + Image Slider */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 min-w-0">
            <div className="min-w-0">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 break-words">
                {t('about.bio.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base sm:text-lg break-words">
                {t('about.bio.paragraph1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base sm:text-lg break-words">
                {t('about.bio.paragraph2')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg break-words">
                {t('about.bio.paragraph3')}
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[360px] sm:h-[420px] border border-gray-100 dark:border-gray-800 min-w-0">
              <img
                src={guideImages[currentImageIndex].url}
                alt={guideImages[currentImageIndex].caption}
                className="w-full h-full object-cover transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 min-w-0">
                <p className="text-white font-medium text-lg sm:text-xl mb-4 truncate min-w-0">{guideImages[currentImageIndex].caption}</p>
                <div className="flex gap-2 shrink-0">
                  {guideImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentImageIndex ? 'w-8 bg-emerald-400' : 'w-2 bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-gray-50 dark:bg-gray-800/80 p-8 rounded-3xl text-center border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden min-w-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-500 dark:text-emerald-400 mb-2 break-words">5+</div>
              <div className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-medium break-words">{t('about.stats.experience')}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/80 p-8 rounded-3xl text-center border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden min-w-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-500 dark:text-emerald-400 mb-2 break-words">500+</div>
              <div className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-medium break-words">{t('about.stats.travelers')}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/80 p-8 rounded-3xl text-center border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden min-w-0">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-500 dark:text-emerald-400 mb-2 break-words">100%</div>
              <div className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-medium break-words">{t('about.stats.custom')}</div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white rounded-3xl p-10 md:p-16 shadow-2xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-600 dark:text-emerald-400">
              {t('about.values.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center space-y-3">
                <div className="text-4xl text-emerald-600 dark:text-emerald-400 mb-4">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="font-serif text-2xl font-semibold">{t('about.values.authenticity.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {t('about.values.authenticity.description')}
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="text-4xl text-emerald-600 dark:text-emerald-400 mb-4">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3 className="font-serif text-2xl font-semibold">{t('about.values.ecotourism.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {t('about.values.ecotourism.description')}
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="text-4xl text-emerald-600 dark:text-emerald-400 mb-4">
                  <i className="fas fa-star"></i>
                </div>
                <h3 className="font-serif text-2xl font-semibold">{t('about.values.serenity.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {t('about.values.serenity.description')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About