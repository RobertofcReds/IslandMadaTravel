import { useEffect, useState, useMemo } from 'react'
import { useTheme } from '../context/ThemeContext'

const StarBackground = () => {
  const { isDark } = useTheme()
  const [stars, setStars] = useState([])

  // Génération unique des étoiles pour éviter les re-calculs superflus
  useEffect(() => {
    const starCount = 120
    const generatedStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }))
    setStars(generatedStars)
  }, [])

  // Positions prédéfinies pour les étoiles filantes
  const shootingStars = useMemo(() => [
    { id: 1, top: '15%', left: '80%', duration: '4.5s', delay: '1s' },
    { id: 2, top: '35%', left: '60%', duration: '6s', delay: '3.5s' },
    { id: 3, top: '10%', left: '40%', duration: '5s', delay: '6s' },
  ], [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Fond dégradé fluide */}
      <div 
        className={`absolute inset-0 transition-colors duration-1000 ${
          isDark 
            ? 'bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950' 
            : 'bg-gradient-to-b from-emerald-50/40 via-sky-50/30 to-indigo-50/40'
        }`}
      />

      {/* Étoiles Scintillantes */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full animate-twinkle ${
            isDark ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'bg-emerald-400/80'
          }`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--duration': `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Étoiles Filantes */}
      <div className="absolute inset-0 overflow-hidden">
        {shootingStars.map((s) => (
          <div
            key={s.id}
            className={`absolute h-0.5 rounded-full animate-shooting ${
              isDark 
                ? 'w-24 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_12px_rgba(255,255,255,0.9)]' 
                : 'w-20 bg-gradient-to-r from-transparent via-emerald-400 to-transparent'
            }`}
            style={{
              top: s.top,
              left: s.left,
              '--duration': s.duration,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default StarBackground