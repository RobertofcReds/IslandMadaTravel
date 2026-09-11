import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

// Local destination images imports
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

const Home = () => {
  const { t } = useLanguage()
  const [heroIndex, setHeroIndex] = useState(0)
  const [diegoIndex, setDiegoIndex] = useState(0)
  const [nosyIndex, setNosyIndex] = useState(0)

  const heroImages = [
    diegoMerEmeraude,
    nosyIranja,
    diegoTroisBaies,
    nosyParfums,
    diegoTsingyRouges,
    nosyTanikely,
    diegoMontagneAmbre,
    nosyAndilana,
  ]

  const diegoMedia = [
    { type: 'image', url: diegoTroisBaies, caption: 'Baie de Diégo-Suarez' },
    { type: 'image', url: diegoMontagneAmbre, caption: "Forêt de Montagne d'Ambre" },
    { type: 'image', url: diegoTsingyRouges, caption: 'Tsingy Rouges' },
    { type: 'image', url: diegoRamena, caption: 'Plage de Ramena' },
    { type: 'image', url: diegoMerEmeraude, caption: "Mer d'Émeraude" },
  ]

  const nosyMedia = [
    { type: 'image', url: nosyParfums, caption: 'Nosy Be - Île aux Parfums' },
    { type: 'image', url: nosyIranja, caption: 'Nosy Iranja' },
    { type: 'image', url: nosyTanikely, caption: 'Nosy Tanikely' },
    { type: 'image', url: nosyAndilana, caption: "Plage d'Andilana" },
    { type: 'image', url: nosyKomba, caption: 'Nosy Komba' },
  ]

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    const diegoInterval = setInterval(() => {
      setDiegoIndex((prev) => (prev + 1) % diegoMedia.length)
    }, 5000)

    const nosyInterval = setInterval(() => {
      setNosyIndex((prev) => (prev + 1) % nosyMedia.length)
    }, 5000)

    return () => {
      clearInterval(heroInterval)
      clearInterval(diegoInterval)
      clearInterval(nosyInterval)
    }
  }, [heroImages.length, diegoMedia.length, nosyMedia.length])

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Carousel d'images fluides en arrière-plan */}
        <div className="absolute inset-0 bg-black">
          {heroImages.map((imgUrl, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === heroIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{ transitionProperty: 'opacity, transform' }}
            >
              <img
                src={imgUrl}
                alt="Madagascar"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Layer de dégradé adouci pour faire ressortir les images tout en gardant une excellente lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/15"></div>
        </div>

        {/* Content */}
        <div className="container-custom text-center text-white relative z-10 px-4 max-w-4xl mx-auto min-w-0">
          <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs md:text-sm font-medium tracking-wider uppercase mb-4 border border-white/30 truncate max-w-full">
            {t('home.hero.badge')}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-md break-words">
            {t('home.hero.title')}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-10 text-gray-200 font-light max-w-2xl mx-auto leading-relaxed break-words" dangerouslySetInnerHTML={{__html: t('home.hero.subtitle').replace('Diégo-Suarez', `<span class="font-semibold text-white underline decoration-emerald-400">${t('navbar.diego')}</span>`).replace('Nosy Be', `<span class="font-semibold text-white underline decoration-emerald-400">${t('navbar.nosy')}</span>`)}}>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/destinations" 
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1 text-center whitespace-nowrap shrink-0"
            >
              {t('home.hero.cta_explore')}
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 font-medium px-8 py-4 rounded-full transition-all transform hover:-translate-y-1 text-center whitespace-nowrap shrink-0"
            >
              {t('home.hero.cta_contact')}
            </Link>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shrink-0">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === heroIndex 
                  ? 'w-8 h-2.5 bg-emerald-400' 
                  : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 min-w-0">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-3 break-words">{t('home.destinations.title')}</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-4 shrink-0"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto break-words">{t('home.destinations.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Diégo-Suarez Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700/60 flex flex-col justify-between min-w-0">
              <div className="min-w-0">
                <div className="relative h-72 overflow-hidden group min-w-0">
                  {diegoMedia.map((media, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        idx === diegoIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {media.type === 'image' ? (
                        <img
                          src={media.url}
                          alt={media.caption}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <video
                          src={media.url}
                          autoPlay
                          muted
                          loop
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  ))}
                  <span className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md z-10 tracking-wide uppercase truncate max-w-[75%] whitespace-nowrap shrink-0">
                    {t('home.destinations.diego.badge')}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 z-10 flex justify-between items-end gap-3 min-w-0">
                    <p className="text-white font-medium text-sm tracking-wide truncate min-w-0">{diegoMedia[diegoIndex].caption}</p>
                    
                    {/* Inner Card Dots */}
                    <div className="flex gap-1.5 shrink-0">
                      {diegoMedia.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setDiegoIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === diegoIndex ? 'bg-emerald-400 w-4' : 'bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 min-w-0">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 break-words">
                    <i className="fas fa-wind text-emerald-500 shrink-0"></i> <span>{t('home.destinations.diego.title')}</span>
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-4 flex items-center gap-2 break-words">
                    <i className="fas fa-location-dot shrink-0"></i> <span>{t('home.destinations.diego.location')}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm break-words">
                    {t('home.destinations.diego.description')}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm text-gray-700 dark:text-gray-300 min-w-0">
                    <li className="flex items-center gap-2 min-w-0"><i className="fas fa-compass text-emerald-500 text-xs shrink-0"></i> <span className="break-words min-w-0">{t('home.destinations.diego.feature_bays')}</span></li>
                    <li className="flex items-center gap-2 min-w-0"><i className="fas fa-tree text-emerald-500 text-xs shrink-0"></i> <span className="break-words min-w-0">{t('home.destinations.diego.feature_parks')}</span></li>
                    <li className="flex items-center gap-2 min-w-0"><i className="fas fa-mountain text-emerald-500 text-xs shrink-0"></i> <span className="break-words min-w-0">{t('home.destinations.diego.feature_hiking')}</span></li>
                    <li className="flex items-center gap-2 min-w-0"><i className="fas fa-camera text-emerald-500 text-xs shrink-0"></i> <span className="break-words min-w-0">{t('home.destinations.diego.feature_culture')}</span></li>
                  </ul>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8 min-w-0">
                <Link to="/diego" className="block w-full text-center bg-gray-900 dark:bg-gray-700 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-white font-medium py-3 rounded-2xl transition-colors whitespace-nowrap truncate">
                  {t('home.destinations.diego.cta')}
                </Link>
              </div>
            </div>

            {/* Nosy Be Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700/60 flex flex-col justify-between min-w-0">
              <div className="min-w-0">
                <div className="relative h-72 overflow-hidden group min-w-0">
                  {nosyMedia.map((media, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        idx === nosyIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {media.type === 'image' ? (
                        <img
                          src={media.url}
                          alt={media.caption}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <video
                          src={media.url}
                          autoPlay
                          muted
                          loop
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  ))}
                  <span className="absolute top-4 right-4 bg-teal-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-md z-10 tracking-wide uppercase truncate max-w-[75%] whitespace-nowrap shrink-0">
                    {t('home.destinations.nosy.badge')}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 z-10 flex justify-between items-end gap-3 min-w-0">
                    <p className="text-white font-medium text-sm tracking-wide truncate min-w-0">{nosyMedia[nosyIndex].caption}</p>
                    
                    {/* Inner Card Dots */}
                    <div className="flex gap-1.5 shrink-0">
                      {nosyMedia.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setNosyIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === nosyIndex ? 'bg-teal-400 w-4' : 'bg-white/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 min-w-0">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2 break-words">
                    <i className="fas fa-umbrella-beach text-teal-500 shrink-0"></i> <span>{t('home.destinations.nosy.title')}</span>
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium text-sm mb-4 flex items-center gap-2 break-words">
                    <i className="fas fa-location-dot shrink-0"></i> <span>{t('home.destinations.nosy.location')}</span>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm break-words">
                    {t('home.destinations.nosy.description')}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm text-gray-700 dark:text-gray-300 min-w-0">
                    <li className="flex items-center gap-2 min-w-0"><i className="fas fa-sailboat text-teal-500 text-xs shrink-0"></i> <span className="break-words min-w-0">{t('home.destinations.nosy.feature_excursions')}</span></li>
                    <li className="flex items-center gap-2 min-w-0"><i className="fas fa-water text-teal-500 text-xs shrink-0"></i> <span className="break-words min-w-0">{t('home.destinations.nosy.feature_beaches')}</span></li>
                    <li className="flex items-center gap-2 min-w-0"><i className="fas fa-fish text-teal-500 text-xs shrink-0"></i> <span className="break-words min-w-0">{t('home.destinations.nosy.feature_snorkeling')}</span></li>
                    <li className="flex items-center gap-2 min-w-0"><i className="fas fa-sun text-teal-500 text-xs shrink-0"></i> <span className="break-words min-w-0">{t('home.destinations.nosy.feature_sunset')}</span></li>
                  </ul>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8 min-w-0">
                <Link to="/nosy" className="block w-full text-center bg-gray-900 dark:bg-gray-700 hover:bg-teal-600 dark:hover:bg-teal-600 text-white font-medium py-3 rounded-2xl transition-colors whitespace-nowrap truncate">
                  {t('home.destinations.nosy.cta')}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white dark:bg-gray-950 transition-colors overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 min-w-0">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-3 break-words">{t('home.services.title')}</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-4 shrink-0"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto break-words">{t('home.services.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'fa-map-location-dot', titleKey: 'home.services.guiding.title', descKey: 'home.services.guiding.description' },
              { icon: 'fa-clipboard-check', titleKey: 'home.services.organization.title', descKey: 'home.services.organization.description' },
              { icon: 'fa-van-shuttle', titleKey: 'home.services.transfers.title', descKey: 'home.services.transfers.description' },
              { icon: 'fa-route', titleKey: 'home.services.excursions.title', descKey: 'home.services.excursions.description' },
              { icon: 'fa-comments', titleKey: 'home.services.translation.title', descKey: 'home.services.translation.description' },
              { icon: 'fa-camera-retro', titleKey: 'home.services.photos.title', descKey: 'home.services.photos.description' },
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-900/60 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden min-w-0"
              >
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shrink-0">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 dark:text-white mb-3 break-words">{t(service.titleKey)}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed break-words">{t(service.descKey)}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-14">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all whitespace-nowrap shrink-0"
            >
              <span className="truncate">{t('home.services.cta')}</span>
              <i className="fas fa-arrow-right text-xs shrink-0"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-gray-950 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container-custom max-w-4xl mx-auto text-center relative z-10 px-6 min-w-0">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-6 leading-tight break-words">{t('home.cta.title')}</h2>
          <p className="text-lg sm:text-xl mb-10 text-emerald-100 font-light max-w-2xl mx-auto break-words">
            {t('home.cta.subtitle')}
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-emerald-900 hover:bg-emerald-50 font-semibold px-9 py-4 rounded-full shadow-2xl transition-all hover:scale-105 inline-block whitespace-nowrap shrink-0 max-w-full truncate"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </section>
      </div>
  )
}

export default Home