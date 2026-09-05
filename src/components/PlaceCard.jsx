import { MapPin, ArrowRight, Star } from 'lucide-react'

const PlaceCard = ({ place, onClick, isSelected }) => {
  const mainImage = place.images?.[0]?.url || ''

  return (
    <button
      onClick={() => onClick(place)}
      className={`group relative w-full text-left rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
        isSelected ? 'ring-4 ring-emerald-400 shadow-2xl shadow-emerald-500/30 -translate-y-1' : ''
      }`}
      style={{ minHeight: '260px' }}
    >
      {/* Background image */}
      {mainImage && (
        <img
          src={mainImage}
          alt={place.name}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            isSelected ? 'scale-105 opacity-100' : 'opacity-90 group-hover:opacity-100'
          }`}
        />
      )}

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
        isSelected ? 'from-black/95 via-black/50 to-black/20' : 'from-black/90 via-black/40 to-transparent group-hover:from-black/80'
      }`} />

      {/* Badge top-right */}
      <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5 z-10">
        {place.badge && (
          <span className="bg-emerald-500/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
            {place.badge}
          </span>
        )}
        {isSelected && (
          <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-pulse">
            Actif en bas ↓
          </span>
        )}
      </div>

      {/* Rating top-left */}
      {place.rating && (
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/40 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full z-10">
          <Star size={11} className="text-yellow-400 fill-yellow-400" />
          <span className="font-semibold">{place.rating}</span>
        </div>
      )}

      {/* Multiple images indicator */}
      {place.images?.length > 1 && (
        <div className="absolute top-3 left-3 mt-8 flex gap-0.5 z-10">
          {place.images.slice(0, Math.min(3, place.images.length)).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/60" />
          ))}
          {place.images.length > 3 && <span className="text-white/60 text-[10px] ml-0.5">+{place.images.length - 3}</span>}
        </div>
      )}

      {/* Content bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-300 z-10">
        <h3 className="text-white font-serif font-bold text-lg leading-tight mb-1 drop-shadow-md">
          {place.name}
        </h3>

        {place.location && (
          <p className="text-white/70 text-xs flex items-center gap-1 mb-2">
            <MapPin size={11} className="text-emerald-400 shrink-0" />
            <span className="truncate">{place.location}</span>
          </p>
        )}

        {/* Short description preview */}
        {place.description && (
          <p className={`text-white/60 text-xs line-clamp-2 leading-relaxed mb-3 transition-all duration-300 ${
            isSelected ? 'opacity-100 translate-y-0 text-white/80' : 'opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'
          }`}>
            {place.description}
          </p>
        )}

        {/* CTA */}
        <div className={`flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 ${
          isSelected
            ? 'text-emerald-300 opacity-100 translate-y-0'
            : 'text-emerald-400 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0'
        }`}>
          <span>{isSelected ? 'Détails ouverts en bas ↓' : 'Voir les détails'}</span>
          <ArrowRight size={13} className={`transition-transform ${isSelected ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
        </div>
      </div>

      {/* Bottom border accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300 ${
        isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`} />
    </button>
  )
}

export default PlaceCard
