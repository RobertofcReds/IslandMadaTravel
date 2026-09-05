import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageCarousel = ({ images = [], title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    if (!images.length) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const goToPrevious = () => {
    if (!images.length) return
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Auto-play contrôlé avec pause au survol
  useEffect(() => {
    if (isPaused || images.length <= 1) return

    const interval = setInterval(() => {
      goToNext()
    }, 4500)

    return () => clearInterval(interval)
  }, [isPaused, goToNext, images.length])

  if (!images.length) return null

  return (
    <div 
      className="bg-white dark:bg-gray-800/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700/60 transition-all duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* En-tête du Carrousel */}
      {(title || description) && (
        <div className="p-6 pb-4">
          {title && (
            <h3 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Zone Image Principale */}
      <div className="relative group">
        <div className="relative h-80 sm:h-96 md:h-[420px] w-full overflow-hidden bg-gray-900">
          <img
            src={images[currentIndex].url}
            alt={images[currentIndex].caption || `Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          
          {/* Dégradé & Légende */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
            {images[currentIndex].caption && (
              <p className="text-white font-medium text-lg md:text-xl drop-shadow-md transform transition-all duration-300">
                {images[currentIndex].caption}
              </p>
            )}
          </div>
        </div>

        {/* Boutons de Navigation */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-full backdrop-blur-md shadow-lg transition-all transform -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Image précédente"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 text-gray-800 dark:text-white p-3 rounded-full backdrop-blur-md shadow-lg transition-all transform translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Image suivante"
        >
          <ChevronRight size={22} />
        </button>

        {/* Navigation par Puces (Dots) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-6 bg-emerald-400'
                  : 'w-2 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Vignettes (Thumbnails) */}
      <div className="p-4 bg-gray-50/50 dark:bg-gray-800/40 border-t border-gray-100 dark:border-gray-700/50 flex gap-3 overflow-x-auto scrollbar-thin">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 focus:outline-none ${
              index === currentIndex
                ? 'ring-2 ring-emerald-500 scale-105 shadow-md'
                : 'opacity-60 hover:opacity-100 hover:scale-95'
            }`}
          >
            <img
              src={image.url}
              alt={image.caption || `Miniature ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel