import { Link } from 'react-router-dom'
import { useState, useEffect, Fragment } from 'react'
import { useLanguage } from '../context/LanguageContext'
import PlaceCard from '../components/PlaceCard'
import PlaceDetailSection from '../components/PlaceDetailSection'
import diegoMerEmeraude from '../images/destination/Mer d\'Émeraude.jpg'
import diegoTroisBaies from '../images/destination/Les Trois Baies.jpg'
import { getDiegoSections, diegoHeroImages } from '../data/diegoData'

const Diego = () => {
  const { t, language } = useLanguage()
  const [heroIndex, setHeroIndex] = useState(0)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [activeSection, setActiveSection] = useState('beaches')

  const heroImages = diegoHeroImages
  const diegoSections = getDiegoSections(language)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  // Sync selectedPlace with current language if a place is currently open
  useEffect(() => {
    if (selectedPlace) {
      for (const sec of diegoSections) {
        const found = sec.places.find(p => p.id === selectedPlace.id)
        if (found) {
          setSelectedPlace(found)
          break
        }
      }
    }
  }, [language])

  const currentSection = diegoSections.find(s => s.id === activeSection) || diegoSections[0]

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[heroIndex]}
            alt="Diégo-Suarez"
            className="w-full h-full object-cover transition-all duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
        </div>

        <div className="container-custom text-center text-white relative z-10 px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm px-4 py-1.5 rounded-full mb-6">
            <i className="fas fa-map-marker-alt text-emerald-400 text-xs" />
            <span>{t('diego_page.location_badge')}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 flex items-center justify-center gap-3 drop-shadow-lg">
            <i className="fas fa-wind text-emerald-400 shrink-0" />
            <span>{t('diego.hero.title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto drop-shadow-md">
            {t('diego.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg flex items-center gap-2"
            >
              <i className="fas fa-calendar-check" />
              {t('diego.hero.cta_book')}
            </Link>
            <a
              href="#explore"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-medium px-8 py-3.5 rounded-full transition-all flex items-center gap-2"
            >
              <i className="fas fa-compass" />
              {t('diego.hero.cta_explore')}
            </a>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === heroIndex ? 'bg-emerald-400 scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── À propos ── */}
      <div className="py-20" id="explore">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url("${diegoMerEmeraude}")` }}
              />
            </div>
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider text-sm uppercase mb-2 block">
                {t('diego.about.badge')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('diego.about.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {t('diego.about.paragraph1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('diego.about.paragraph2')}
              </p>
              <div className="bg-emerald-500/10 dark:bg-emerald-400/10 p-4 rounded-xl mb-8 border border-emerald-500/20">
                <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center gap-2">
                  <i className="fas fa-calendar-alt text-emerald-500" />
                  {t('diego.about.best_time_label')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{t('diego.about.best_time_value')}</p>
              </div>
              <Link
                to="/contact"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all inline-block shadow-md"
              >
                {t('diego.about.cta')}
              </Link>
            </div>
          </div>

          {/* ── Tabs des sections ── */}
          <div className="mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
              {t('diego_page.explore_title')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
              {t('diego_page.explore_subtitle')}
            </p>

            {/* Navigation des sections */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {diegoSections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                >
                  <i className={`${section.icon} text-sm`} />
                  <span>{section.title}</span>
                </button>
              ))}
            </div>

            {/* Section active */}
            <div
              key={activeSection}
              style={{ animation: 'modalIn 0.3s ease-out' }}
            >
              {/* En-tête de section */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 mb-6 text-white">
                <div className="flex items-center gap-3 mb-1">
                  <i className={`${currentSection.icon} text-2xl`} />
                  <h3 className="font-serif text-2xl font-bold">{currentSection.title}</h3>
                </div>
                <p className="text-emerald-50 text-sm">{currentSection.description}</p>
                <p className="text-emerald-200 text-xs mt-2">
                  {currentSection.places.length} {t('diego_page.places_suffix')}
                </p>
              </div>

              {/* Grille de cartes avec détails sous la carte cliquée */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {currentSection.places.map(place => (
                  <Fragment key={place.id}>
                    <PlaceCard
                      place={place}
                      isSelected={selectedPlace?.id === place.id}
                      onClick={(p) => setSelectedPlace(prev => prev?.id === p.id ? null : p)}
                    />
                    {/* Détails apparaissant directement sous ce lieu */}
                    {selectedPlace?.id === place.id && (
                      <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 w-full min-w-0 max-w-full overflow-hidden">
                        <PlaceDetailSection
                          place={selectedPlace}
                          onClose={() => setSelectedPlace(null)}
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* ── CTA final ── */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("${diegoTroisBaies}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
            <div className="relative z-10">
              <i className="fas fa-compass text-emerald-400 text-4xl mb-4 block" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                {t('diego_page.cta_title')}
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                {t('diego_page.cta_subtitle')}
              </p>
              <Link
                to="/contact"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <i className="fas fa-envelope" />
                {t('diego_page.cta_btn')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diego