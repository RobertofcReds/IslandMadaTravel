import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage doit être utilisé dans un LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'fr'
  })
  const [translations, setTranslations] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await import(`../locales/${language}.json`)
        setTranslations(response.default)
        setLoading(false)
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error)
        // Fallback to French if loading fails
        try {
          const fallback = await import(`../locales/fr.json`)
          setTranslations(fallback.default)
        } catch (fallbackError) {
          console.error('Failed to load fallback translations:', fallbackError)
        }
        setLoading(false)
      }
    }

    loadTranslations()
  }, [language])

  const t = (path) => {
    if (loading) return path
    const keys = path.split('.')
    let result = translations
    
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key]
      } else {
        return path
      }
    }
    return result
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, loading }}>
      {children}
    </LanguageContext.Provider>
  )
}
