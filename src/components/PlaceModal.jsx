import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X, MapPin, Clock, Star, Info, Camera, BookOpen } from 'lucide-react'

const PlaceModal = ({ place, onClose }) => {
  const [activeTab, setActiveTab] = useState('story')
  const [imgIndex, setImgIndex] = useState(0)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const nextImg = useCallback(() => {
    setImgLoaded(false)
    setImgIndex(i => (i + 1) % place.images.length)
  }, [place.images.length])

  const prevImg = useCallback(() => {
    setImgLoaded(false)
    setImgIndex(i => (i === 0 ? place.images.length - 1 : i - 1))
  }, [place.images.length])

  useEffect(() => {
    if (place.images.length <= 1) return
    const t = setInterval(nextImg, 5000)
    return () => clearInterval(t)
  }, [nextImg, place.images.length])

  if (!place) return null

  const tabs = [
    { id: 'story', label: 'Histoire & Récit', icon: BookOpen },
    { id: 'facts', label: 'À Savoir', icon: Info },
    { id: 'gallery', label: 'Galerie', icon: Camera },
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />

      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        style={{ animation: 'modalIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        {/* Image Hero */}
        <div className="relative h-64 sm:h-80 flex-shrink-0 overflow-hidden bg-gray-900 group">
          <img
            key={imgIndex}
            src={place.images[imgIndex].url}
            alt={place.images[imgIndex].caption || place.name}
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {place.images.length > 1 && (
            <>
              <button
                onClick={prevImg}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2.5 rounded-full transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2.5 rounded-full transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {place.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setImgLoaded(false); setImgIndex(i) }}
                    className={`transition-all rounded-full ${i === imgIndex ? 'w-5 h-1.5 bg-emerald-400' : 'w-1.5 h-1.5 bg-white/50 hover:bg-white'}`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                {place.badge && (
                  <span className="inline-block bg-emerald-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 backdrop-blur-sm">
                    {place.badge}
                  </span>
                )}
                <h2 className="text-white font-serif text-2xl sm:text-3xl font-bold drop-shadow-lg leading-tight">
                  {place.name}
                </h2>
                {place.location && (
                  <p className="text-white/80 text-sm flex items-center gap-1.5 mt-1">
                    <MapPin size={13} className="text-emerald-400" />
                    {place.location}
                  </p>
                )}
              </div>
              {place.rating && (
                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex-shrink-0">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-sm font-semibold">{place.rating}</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-2 rounded-full transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs navigation */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 px-2 flex-shrink-0 bg-white dark:bg-gray-900">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3.5 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">

          {/* STORY TAB */}
          {activeTab === 'story' && (
            <div className="p-6 space-y-6">
              {place.quote && (
                <blockquote className="border-l-4 border-emerald-500 pl-5 py-1">
                  <p className="text-gray-600 dark:text-gray-300 italic text-base leading-relaxed">
                    "{place.quote}"
                  </p>
                  {place.quoteAuthor && (
                    <footer className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mt-1.5">
                      — {place.quoteAuthor}
                    </footer>
                  )}
                </blockquote>
              )}

              {place.description && (
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-emerald-500 rounded-full inline-block"></span>
                    À propos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[15px]">
                    {place.description}
                  </p>
                </div>
              )}

              {place.history && (
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 rounded-2xl p-5">
                  <h3 className="font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-2 text-sm">
                    <BookOpen size={15} />
                    Histoire & Anecdotes
                  </h3>
                  <p className="text-amber-900 dark:text-amber-200/80 text-sm leading-relaxed">
                    {place.history}
                  </p>
                </div>
              )}

              {place.events && place.events.length > 0 && (
                <div>
                  <h3 className="font-serif text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Clock size={18} className="text-emerald-500" />
                    Événements & Moments
                  </h3>
                  <div className="space-y-3">
                    {place.events.map((event, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex-shrink-0 w-7 h-7 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">{i + 1}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{event.title}</p>
                          <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mt-0.5">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 pb-1">
                <a
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-emerald-500/30 text-sm"
                >
                  Visiter ce lieu avec un guide
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>
          )}

          {/* FACTS TAB */}
          {activeTab === 'facts' && (
            <div className="p-6 space-y-4">
              {place.facts && place.facts.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-3">
                  {place.facts.map((fact, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border border-gray-100 dark:border-gray-700 flex items-start gap-3"
                    >
                      <span className="text-2xl flex-shrink-0">{fact.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{fact.label}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 leading-relaxed">{fact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {place.tips && place.tips.length > 0 && (
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/40 rounded-2xl p-5">
                  <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-3 flex items-center gap-2 text-sm">
                    <Star size={15} className="text-emerald-500" />
                    Conseils du guide
                  </h3>
                  <ul className="space-y-2">
                    {place.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-emerald-900 dark:text-emerald-200/80 text-xs leading-relaxed">
                        <span className="text-emerald-500 mt-0.5 flex-shrink-0">✦</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* GALLERY TAB */}
          {activeTab === 'gallery' && (
            <div className="p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {place.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => { setImgIndex(i); setImgLoaded(false); setActiveTab('story') }}
                    className={`relative aspect-square rounded-xl overflow-hidden group/thumb transition-all ${i === imgIndex ? 'ring-2 ring-emerald-500 scale-[0.98]' : 'hover:scale-[0.98]'}`}
                  >
                    <img
                      src={img.url}
                      alt={img.caption || `Photo ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                    />
                    {img.caption && (
                      <div className="absolute inset-0 bg-black/0 group-hover/thumb:bg-black/50 transition-all flex items-end p-2">
                        <p className="text-white text-xs font-medium opacity-0 group-hover/thumb:opacity-100 transition-all translate-y-2 group-hover/thumb:translate-y-0 line-clamp-2">
                          {img.caption}
                        </p>
                      </div>
                    )}
                    {i === imgIndex && (
                      <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        ✓
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PlaceModal
