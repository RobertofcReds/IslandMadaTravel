import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { t, language } = useLanguage()
  const [heroIndex, setHeroIndex] = useState(0)

  const heroImages = [
    'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    dates: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(t('contact.form.success'))
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      dates: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[heroIndex]}
            alt="Contact"
            className="w-full h-full object-cover transition-all duration-1000 scale-105"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        <div className="container-custom text-center text-white relative z-10 px-4 min-w-0">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 flex items-center justify-center gap-3 break-words">
            <i className="fas fa-envelope text-emerald-400 shrink-0"></i> <span>{t('contact.hero.title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto break-words">
            {t('contact.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/261325539635" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap shrink-0 max-w-full truncate text-center"
            >
              <i className="fab fa-whatsapp text-xl shrink-0"></i> <span>{t('contact.hero.cta_whatsapp')}</span>
            </a>
            <a 
              href="#contact-form" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-medium px-8 py-3.5 rounded-full transition-all whitespace-nowrap shrink-0 max-w-full truncate text-center"
            >
              {t('contact.hero.cta_form')}
            </a>
          </div>
        </div>

        {/* Carousel Indicators */}
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
      <div className="py-20 overflow-hidden" id="contact-form">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 min-w-0">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 break-words">{t('contact.info.title')}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto break-words">
              {t('contact.info.subtitle')}
            </p>
          </div>
        
          <div className="grid lg:grid-cols-2 gap-12 min-w-0">
            {/* Contact Info Side */}
            <div className="space-y-8 min-w-0">
              <h3 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white break-words">
                {t('contact.info.coordinates')}
              </h3>
              
              <div className="space-y-6 min-w-0">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/20 dark:text-emerald-400 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white break-words">{t('contact.info.location')}</h4>
                    <p className="text-gray-600 dark:text-gray-300 break-words">{t('contact.info.location_value')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 min-w-0">
                  <div className="bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/20 dark:text-emerald-400 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white break-words">{t('contact.info.email')}</h4>
                    <a href="mailto:islandmadatravel@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors break-all block min-w-0">
                      islandmadatravel@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 min-w-0">
                  <div className="bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/20 dark:text-emerald-400 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white break-words">{t('contact.info.phone')}</h4>
                    <a href="tel:+261325539635" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors whitespace-nowrap block min-w-0">
                      +261 32 55 396 35
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 min-w-0">
                  <div className="bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/20 dark:text-emerald-400 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white break-words">{t('contact.info.whatsapp')}</h4>
                    <p className="text-gray-600 dark:text-gray-300 whitespace-nowrap">+261 32 55 396 35</p>
                  </div>
                </div>
              </div>

              {/* Map Box */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800 h-64 min-w-0">
                <iframe
                  title="Diégo-Suarez Map"
                  src={`https://maps.google.com/maps?q=Antsiranana%20Madagascar&t=&z=12&ie=UTF8&iwloc=&output=embed&hl=${language}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="bg-gray-50 dark:bg-gray-800/80 p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden min-w-0">
              <h3 className="font-serif text-2xl font-semibold text-gray-900 dark:text-white mb-6 break-words">
                {t('contact.form.title')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 min-w-0">
                <div className="min-w-0">
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 break-words">{t('contact.form.label_name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all dark:text-white min-w-0"
                    placeholder={t('contact.form.placeholder_name')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-w-0">
                  <div className="min-w-0">
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 break-words">{t('contact.form.label_email')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all dark:text-white min-w-0"
                      placeholder={t('contact.form.placeholder_email')}
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 break-words">{t('contact.form.label_phone')}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all dark:text-white min-w-0"
                      placeholder={t('contact.form.placeholder_phone')}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-w-0">
                  <div className="min-w-0">
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 break-words">{t('contact.form.label_destination')}</label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all dark:text-white min-w-0 truncate"
                    >
                      <option value="">{t('contact.form.select_destination')}</option>
                      <option value="diego">{t('contact.form.option_diego')}</option>
                      <option value="nosy">{t('contact.form.option_nosy')}</option>
                      <option value="both">{t('contact.form.option_both')}</option>
                    </select>
                  </div>

                  <div className="min-w-0">
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 break-words">{t('contact.form.label_dates')}</label>
                    <input
                      type="text"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all dark:text-white min-w-0"
                      placeholder={t('contact.form.placeholder_dates')}
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 break-words">{t('contact.form.label_message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all resize-none dark:text-white min-w-0"
                    placeholder={t('contact.form.placeholder_message')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 rounded-xl shadow-lg transition-all hover:shadow-emerald-500/20 whitespace-nowrap truncate shrink-0"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact