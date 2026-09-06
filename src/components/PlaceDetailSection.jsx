import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X, MapPin, Clock, Star, Info, Camera, BookOpen, MessageCircle, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const PlaceDetailSection = ({ place, onClose }) => {
  const [activeTab, setActiveTab] = useState('story')
  const [imgIndex, setImgIndex] = useState(0)
  const [imgLoaded, setImgLoaded] = useState(false)
  const sectionRef = useRef(null)

  // Scroll automatique doux vers cette section dès qu'un lieu est choisi
  useEffect(() => {
    if (place && sectionRef.current) {
      setImgIndex(0)
      setActiveTab('story')
      const timer = setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 80)
      return () => clearTimeout(timer)
    }
  }, [place?.id])

  const nextImg = useCallback(() => {
    if (!place?.images?.length) return
    setImgLoaded(false)
    setImgIndex(i => (i + 1) % place.images.length)
  }, [place?.images?.length])

  const prevImg = useCallback(() => {
    if (!place?.images?.length) return
    setImgLoaded(false)
    setImgIndex(i => (i === 0 ? place.images.length - 1 : i - 1))
  }, [place?.images?.length])

  // Défilement automatique doux des photos du lieu
  useEffect(() => {
    if (!place?.images || place.images.length <= 1) return
    const interval = setInterval(nextImg, 6000)
    return () => clearInterval(interval)
  }, [nextImg, place?.images])

  if (!place) return null

  const tabs = [
    { id: 'story', label: 'Histoire & Récit', shortLabel: 'Histoire', icon: BookOpen },
    { id: 'facts', label: 'À Savoir & Conseils', shortLabel: 'À Savoir', icon: Info },
    { id: 'gallery', label: `Galerie (${place.images?.length || 0})`, shortLabel: `Photos (${place.images?.length || 0})`, icon: Camera },
  ]

  const whatsappMessage = encodeURIComponent(
    `Bonjour ISLAND MADA TRAVEL ! Je souhaite avoir plus d'informations et organiser une excursion pour : ${place.name} (${place.location || ''}).`
  )

  return (
    <div
      ref={sectionRef}
      id="place-details-inline"
      className="my-3 sm:my-5 scroll-mt-28 bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border-2 border-emerald-500/30 dark:border-emerald-500/20 overflow-hidden w-full max-w-full min-w-0 transition-all duration-500"
      style={{
        animation: 'fadeInUp 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Barre supérieure d'en-tête in-page avec contrôles */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 w-full min-w-0">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping shrink-0" />
          <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase text-emerald-100 truncate">
            Détails du lieu
          </span>
          <span className="hidden sm:inline text-emerald-200/60">•</span>
          <span className="hidden sm:inline text-xs text-emerald-100 font-medium truncate">
            {place.name}
          </span>
        </div>

        <button
          onClick={onClose}
          className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 active:scale-95 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-all shadow-sm cursor-pointer shrink-0"
          title="Fermer les détails"
        >
          <span>Masquer</span>
          <X size={15} />
        </button>
      </div>

      {/* Hero visuel panoramique du lieu */}
      <div className="relative h-60 sm:h-80 md:h-96 lg:h-[420px] bg-gray-900 group overflow-hidden w-full max-w-full">
        {place.images?.[imgIndex] && (
          <img
            key={imgIndex}
            src={place.images[imgIndex].url}
            alt={place.images[imgIndex].caption || place.name}
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Dégradés cinématiques */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Flèches de navigation de photos */}
        {place.images?.length > 1 && (
          <>
            <button
              onClick={prevImg}
              aria-label="Photo précédente"
              className="absolute left-2.5 sm:left-6 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/70 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all opacity-85 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextImg}
              aria-label="Photo suivante"
              className="absolute right-2.5 sm:right-6 top-1/2 -translate-y-1/2 bg-black/45 hover:bg-black/70 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all opacity-85 hover:opacity-100 hover:scale-110 cursor-pointer"
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </button>

            {/* Pagination dots */}
            <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
              {place.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setImgLoaded(false); setImgIndex(i) }}
                  aria-label={`Aller à la photo ${i + 1}`}
                  className={`transition-all rounded-full cursor-pointer ${
                    i === imgIndex ? 'w-5 sm:w-6 h-1.5 sm:h-2 bg-emerald-400' : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/60 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Informations superposées sur le Hero */}
        <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-6 md:p-8 z-10 max-w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4 max-w-5xl">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                {place.badge && (
                  <span className="bg-emerald-500 text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:py-1 rounded-full shadow-md">
                    {place.badge}
                  </span>
                )}
                {place.images?.length > 1 && (
                  <span className="bg-black/50 backdrop-blur-md text-white/90 text-[10px] sm:text-xs px-2 py-0.5 rounded-full">
                    📷 {imgIndex + 1} / {place.images.length}
                  </span>
                )}
              </div>

              <h2 className="text-white font-serif text-xl sm:text-3xl lg:text-4xl font-extrabold drop-shadow-xl leading-tight truncate">
                {place.name}
              </h2>

              {place.location && (
                <p className="text-emerald-300 text-xs sm:text-sm md:text-base flex items-center gap-1.5 mt-1 font-medium truncate">
                  <MapPin size={14} className="text-emerald-400 shrink-0" />
                  <span className="truncate">{place.location}</span>
                </p>
              )}
            </div>

            {place.rating && (
              <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl self-start sm:self-auto border border-white/10 shadow-lg shrink-0">
                <Star size={15} className="text-yellow-400 fill-yellow-400" />
                <span className="text-white font-bold text-xs sm:text-sm">{place.rating}</span>
                <span className="text-white/60 text-[10px] sm:text-xs">/ 5</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Barre d'onglets - Grid 3 colonnes fluide (ZÉRO scroll horizontal) */}
      <div className="grid grid-cols-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50/90 dark:bg-gray-900/90 w-full min-w-0">
        {tabs.map(tab => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-1 sm:gap-2 py-3 sm:py-3.5 px-1 sm:px-3 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer text-center min-w-0 ${
                isActive
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-gray-800'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              <Icon size={16} className={`shrink-0 ${isActive ? 'text-emerald-500' : ''}`} />
              <span className="hidden md:inline truncate">{tab.label}</span>
              <span className="md:hidden truncate text-[11px] sm:text-xs">{tab.shortLabel}</span>
            </button>
          )
        })}
      </div>

      {/* Contenu de l'onglet actif */}
      <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 w-full min-w-0 max-w-full overflow-hidden">
        {/* ONGLET 1 : HISTOIRE & RÉCIT */}
        {activeTab === 'story' && (
          <div className="space-y-4 sm:space-y-6 max-w-5xl">
            {/* Citation */}
            {place.quote && (
              <div className="relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border-l-4 border-emerald-500">
                <p className="text-gray-700 dark:text-gray-200 italic text-sm sm:text-base md:text-lg leading-relaxed font-serif">
                  « {place.quote} »
                </p>
                {place.quoteAuthor && (
                  <footer className="text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-semibold mt-1.5">
                    — {place.quoteAuthor}
                  </footer>
                )}
              </div>
            )}

            {/* Description */}
            {place.description && (
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block shrink-0" />
                  <span>Présentation du lieu</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {place.description}
                </p>
              </div>
            )}

            {/* Histoire & Anecdotes */}
            {place.history && (
              <div className="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-700/40 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <h3 className="font-serif font-bold text-amber-900 dark:text-amber-300 mb-2 flex items-center gap-2 text-sm sm:text-base">
                  <BookOpen size={17} className="text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>Histoire, Origines & Légendes</span>
                </h3>
                <p className="text-amber-950 dark:text-amber-200/90 text-xs sm:text-sm md:text-base leading-relaxed">
                  {place.history}
                </p>
              </div>
            )}

            {/* Événements & Moments magiques */}
            {place.events && place.events.length > 0 && (
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-emerald-500 shrink-0" />
                  <span>Événements recommandés & Meilleurs moments</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {place.events.map((event, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700"
                    >
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 dark:bg-emerald-400/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                        {i + 1}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                          {event.title}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ONGLET 2 : À SAVOIR & CONSEILS */}
        {activeTab === 'facts' && (
          <div className="space-y-4 sm:space-y-6 max-w-5xl">
            {/* Faits pratiques */}
            {place.facts && place.facts.length > 0 && (
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                  <Info size={18} className="text-emerald-500 shrink-0" />
                  <span>Informations pratiques & Accès</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {place.facts.map((fact, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 dark:bg-gray-700/50 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border border-gray-100 dark:border-gray-700 flex items-start gap-3.5 hover:border-emerald-200 dark:hover:border-emerald-700/60 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 text-base shadow-sm group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-200">
                        {fact.icon?.startsWith?.('fa') ? (
                          <i className={fact.icon} />
                        ) : (
                          <span className="text-lg">{fact.icon}</span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                          {fact.label}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Conseils du guide */}
            {place.tips && place.tips.length > 0 && (
              <div className="bg-emerald-50/70 dark:bg-emerald-950/25 border border-emerald-200/80 dark:border-emerald-800/40 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <h3 className="font-serif font-bold text-emerald-900 dark:text-emerald-200 mb-2.5 flex items-center gap-2 text-sm sm:text-base">
                  <Star size={17} className="text-emerald-500 shrink-0" />
                  <span>Conseils exclusifs de votre guide local</span>
                </h3>
                <ul className="space-y-2">
                  {place.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-emerald-950 dark:text-emerald-200/90 text-xs sm:text-sm leading-relaxed">
                      <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✦</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* ONGLET 3 : GALERIE PHOTOS */}
        {activeTab === 'gallery' && (
          <div>
            <h3 className="font-serif text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center justify-between flex-wrap gap-2">
              <span className="flex items-center gap-2">
                <Camera size={18} className="text-emerald-500 shrink-0" />
                <span>Photos haute résolution</span>
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-normal">
                Touchez pour agrandir
              </span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-4">
              {place.images?.map((img, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setImgIndex(i)
                    setImgLoaded(false)
                    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
                  }}
                  className={`group/thumb relative aspect-4/3 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 text-left cursor-pointer ${
                    i === imgIndex
                      ? 'ring-3 sm:ring-4 ring-emerald-500 shadow-xl scale-[0.98]'
                      : 'hover:scale-[0.98] opacity-90 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption || `${place.name} photo ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/thumb:opacity-100 transition-opacity p-2 flex items-end">
                    <p className="text-white text-[11px] sm:text-xs font-medium line-clamp-2">
                      {img.caption || `Photo ${i + 1}`}
                    </p>
                  </div>
                  {i === imgIndex && (
                    <div className="absolute top-1.5 right-1.5 bg-emerald-500 text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-md">
                      Vue
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Barre d'action finale au bas des détails */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 w-full min-w-0">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/261325539635?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 text-xs sm:text-sm text-center"
            >
              <MessageCircle size={16} className="shrink-0" />
              <span className="truncate">Réserver ce lieu</span>
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2 text-xs sm:text-sm text-center"
            >
              <span>Poser une question</span>
            </Link>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer py-1.5"
          >
            <ArrowUp size={14} />
            <span>Fermer et remonter</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PlaceDetailSection
