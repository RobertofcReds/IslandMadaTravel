import diegoTroisBaies from '../images/destination/Les Trois Baies.jpg'
import diegoMontagneAmbre from '../images/destination/Forêt de Montagne d\'Ambre.jpg'
import diegoTsingyRouges from '../images/destination/Tsingy Rouges.jpg'
import diegoRamena from '../images/destination/Plage de Ramena.jpg'
import diegoMerEmeraude from '../images/destination/Mer d\'Émeraude.jpg'

import diegoImg1 from '../images/diego/024-img-20180622-wa0016-largejpg.jpg'
import diegoImg2 from '../images/diego/024-the-kind-of-boats-that.jpg'
import diegoImg3 from '../images/diego/025-north-mada-kite.jpg'
import diegoImg4 from '../images/diego/025-north-mada-kite1.jpg'
import diegoImg5 from '../images/diego/026-ambre.jpg'
import diegoImg6 from '../images/diego/027-Tsingy_Ankarana_Madagascar_16-07-2004.jpg'
import diegoImg7 from '../images/diego/027-unica.jpg'
import diegoImg8 from '../images/diego/028-photo4jpg.jpg'
import diegoImg9 from '../images/diego/029-caption.jpg'
import diegoImg10 from '../images/diego/029-caption1.jpg'
import diegoImg11 from '../images/diego/029-caption2.jpg'
import diegoImg12 from '../images/diego/029-pain-de-sucre.jpg'
import diegoImg13 from '../images/diego/029-photo0jpg.jpg'
import diegoImg14 from '../images/diego/030-schone-zeit-auf-den-seychellen.jpg'
import diegoImg15 from '../images/diego/030-schone-zeit-auf-den-seychellen1.jpg'
import diegoImg16 from '../images/diego/031-cap diego.jpg'
import diegoImg17 from '../images/diego/031-cap diego_one.jpg'
import diegoImg18 from '../images/diego/031-cap diego_three.jpg'
import diegoImg19 from '../images/diego/032-Montagne-dAmbre-Parc-Madagascar-1200x540.jpg'

export const diegoHeroImages = [
  diegoImg1, diegoImg2, diegoImg3, diegoImg4, diegoImg5,
  diegoImg6, diegoImg7, diegoImg8, diegoImg9, diegoImg10,
  diegoImg11, diegoImg12, diegoImg13, diegoImg14, diegoImg15,
  diegoImg16, diegoImg17, diegoImg18, diegoImg19
]

const diegoData = {
  beaches: {
    title: {
      fr: "Baies, Plages & Lagons",
      en: "Bays, Beaches & Lagoons",
      it: "Baie, Spiagge & Lagune",
      de: "Buchten, Strände & Lagunen",
      es: "Bahías, Playas & Lagunas"
    },
    icon: "fas fa-umbrella-beach",
    description: {
      fr: "Des eaux turquoise aux sables immaculés, une côte d'exception",
      en: "From turquoise waters to pristine sands, an exceptional coastline",
      it: "Dalle acque turchesi alle sabbie immacolate, una costa eccezionale",
      de: "Von türkisblauem Wasser bis hin zu unberührtem Sand, eine außergewöhnliche Küste",
      es: "De aguas turquesas a arenas vírgenes, una costa excepcional"
    },
    places: [
      {
        id: "emeraude",
        rating: "4.9",
        name: {
          fr: "La Mer d'Émeraude",
          en: "The Emerald Sea",
          it: "Il Mare di Smeraldo",
          de: "Das Smaragdmeer",
          es: "El Mar de Esmeralda"
        },
        badge: {
          fr: "Incontournable",
          en: "Must-See",
          it: "Imperdibile",
          de: "Must-See",
          es: "Imperdible"
        },
        location: {
          fr: "Baie de Diégo-Suarez",
          en: "Diego-Suarez Bay",
          it: "Baia di Diego-Suarez",
          de: "Diego-Suarez Bucht",
          es: "Bahía de Diego-Suárez"
        },
        description: {
          fr: "Un lagon naturel d'une beauté saisissante, protégé par des récifs coralliens. Ses eaux d'un vert émeraude intense sont parmi les plus photographiées de Madagascar.",
          en: "A natural lagoon of striking beauty, protected by coral reefs. Its intense emerald-green waters are among the most photographed in Madagascar.",
          it: "Una laguna naturale di straordinaria bellezza, protetta da barriere coralline. Le sue acque di un verde smeraldo intenso sono tra le più fotografate del Madagascar.",
          de: "Eine natürliche Lagune von atemberaubender Schönheit, geschützt durch Korallenriffe. Das intensive smaragdgrüne Wasser gehört zu den meistfotografierten Madagaskars.",
          es: "Una laguna natural de sorprendente belleza, protegida por arrecifes de coral. Sus intensas aguas verde esmeralda se encuentran entre las más fotografiadas de Madagascar."
        },
        history: {
          fr: "Découverte par les marins arabes puis portugais au XVe siècle, la Mer d'Émeraude tire son nom de la couleur unique que prennent ses eaux peu profondes au lever du soleil. Elle fut longtemps un refuge pour les boutres de commerce qui sillonnaient l'océan Indien.",
          en: "Discovered by Arab and Portuguese navigators in the 15th century, the Emerald Sea takes its name from the unique hue of its shallow waters at sunrise. It was long a haven for trading dhows sailing across the Indian Ocean.",
          it: "Scoperto da marinai arabi e portoghesi nel XV secolo, il Mare di Smeraldo prende il nome dal colore unico che assumono le sue acque basse all'alba. Fu a lungo un rifugio per i sambuchi commerciali che solcavano l'Oceano Indiano.",
          de: "Im 15. Jahrhundert von arabischen und portugiesischen Seefahrern entdeckt, verdankt das Smaragdmeer seinen Namen den einzigartigen Farben bei Sonnenaufgang. Es diente jahrhundertelang als Zuflucht für Handelsschiffe im Indischen Ozean.",
          es: "Descubierto por marineros árabes y portugueses en el siglo XV, el Mar de Esmeralda toma su nombre del color único que adquieren sus aguas poco profundas al amanecer. Fue refugio histórico para los barcos comerciales del Océano Índico."
        },
        quote: {
          fr: "Une piscine naturelle offerte par les dieux de l'océan.",
          en: "A natural pool gifted by the gods of the ocean.",
          it: "Una piscina naturale donata dagli dèi dell'oceano.",
          de: "Ein natürlicher Pool, geschenkt von den Göttern des Ozeans.",
          es: "Una piscina natural regalada por los dioses del océano."
        },
        quoteAuthor: {
          fr: "Voyageur anonyme, 1910",
          en: "Anonymous traveler, 1910",
          it: "Viaggiatore anonimo, 1910",
          de: "Anonymer Reisender, 1910",
          es: "Viajero anónimo, 1910"
        },
        events: {
          fr: [
            { title: "Lever de soleil magique", description: "À 5h30 du matin, les eaux passent du violet au vert émeraude en quelques minutes — un spectacle inoubliable." },
            { title: "Pleine lune sur le lagon", description: "Les nuits de pleine lune, des pêcheurs locaux sortent leurs pirogues pour une pêche traditionnelle aux flambeaux." },
            { title: "Balade en pirogue", description: "Des excursions en pirogue traditionnelle permettent d'atteindre les bancs de sable inhabités au centre du lagon." }
          ],
          en: [
            { title: "Magical Sunrise", description: "At 5:30 AM, the waters shift from purple to vivid emerald in minutes — an unforgettable spectacle." },
            { title: "Full Moon on the Lagoon", description: "On full moon nights, local fishermen take out their traditional canoes for torchlight fishing." },
            { title: "Traditional Canoe Ride", description: "Pirogue excursions take you to uninhabited sandbanks right in the middle of the lagoon." }
          ],
          it: [
            { title: "Alba magica", description: "Alle 5:30 del mattino, le acque passano dal viola al verde smeraldo in pochi minuti — uno spettacolo indimenticabile." },
            { title: "Luna piena sulla laguna", description: "Nelle notti di luna piena, i pescatori locali escono in piroga per la tradizionale pesca con le torce." },
            { title: "Giro in piroga", description: "Escursioni in piroga tradizionale permettono di raggiungere banchi di sabbia disabitati al centro della laguna." }
          ],
          de: [
            { title: "Magischer Sonnenaufgang", description: "Um 5:30 Uhr morgens wechselt das Wasser in wenigen Minuten von Violett zu Smaragdgrün — unvergesslich." },
            { title: "Vollmond über der Lagune", description: "In Vollmondnächten fahren lokale Fischer mit ihren Pirogen zum traditionellen Fackelfischen hinaus." },
            { title: "Pirogen-Ausflug", description: "Ausflüge mit traditionellen Holzbooten führen zu einsamen Sandbänken mitten in der Lagune." }
          ],
          es: [
            { title: "Amanecer mágico", description: "A las 5:30 de la mañana, las aguas pasan del violeta al verde esmeralda en minutos — un espectáculo inolvidable." },
            { title: "Luna llena en la laguna", description: "En noches de luna llena, los pescadores locales navegan en piraguas para la pesca tradicional con antorchas." },
            { title: "Paseo en piragua", description: "Excursiones en piragua tradicional permiten llegar a bancos de arena deshabitados en el centro de la laguna." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-ruler-combined", label: "Superficie", value: "Environ 18 km² de lagon protégé" },
            { icon: "fas fa-water", label: "Profondeur", value: "50 cm à 2 m selon les zones — idéal pour la baignade" },
            { icon: "fas fa-fish", label: "Faune marine", value: "Raies, étoiles de mer, concombres de mer et poissons multicolores" },
            { icon: "fas fa-sailboat", label: "Accès", value: "En bateau depuis Ramena (25 min) ou Diego centre (45 min)" },
            { icon: "fas fa-sun", label: "Meilleure saison", value: "Avril à novembre — eaux calmes et visibilité optimale" }
          ],
          en: [
            { icon: "fas fa-ruler-combined", label: "Area", value: "About 18 km² of protected lagoon" },
            { icon: "fas fa-water", label: "Depth", value: "50 cm to 2 m depending on areas — ideal for swimming" },
            { icon: "fas fa-fish", label: "Marine Life", value: "Stingrays, starfish, sea cucumbers, and colorful tropical fish" },
            { icon: "fas fa-sailboat", label: "Access", value: "By boat from Ramena (25 min) or Diego center (45 min)" },
            { icon: "fas fa-sun", label: "Best Season", value: "April to November — calm waters and optimal visibility" }
          ],
          it: [
            { icon: "fas fa-ruler-combined", label: "Superficie", value: "Circa 18 km² di laguna protetta" },
            { icon: "fas fa-water", label: "Profondità", value: "Da 50 cm a 2 m a seconda delle zone — ideale per nuotare" },
            { icon: "fas fa-fish", label: "Fauna marina", value: "Razze, stelle marine, oloturie e pesci tropicali variopinti" },
            { icon: "fas fa-sailboat", label: "Accesso", value: "In barca da Ramena (25 min) o dal centro di Diego (45 min)" },
            { icon: "fas fa-sun", label: "Stagione ideale", value: "Da aprile a novembre — acque calme e ottima visibilità" }
          ],
          de: [
            { icon: "fas fa-ruler-combined", label: "Fläche", value: "Ca. 18 km² geschützte Lagune" },
            { icon: "fas fa-water", label: "Tiefe", value: "50 cm bis 2 m je nach Bereich — ideal zum Schwimmen" },
            { icon: "fas fa-fish", label: "Meeresfauna", value: "Rochen, Seesterne, Seegurken und bunte tropische Fische" },
            { icon: "fas fa-sailboat", label: "Anreise", value: "Mit dem Boot von Ramena (25 Min.) oder Diego Zentrum (45 Min.)" },
            { icon: "fas fa-sun", label: "Beste Reisezeit", value: "April bis November — ruhiges Wasser und optimale Sicht" }
          ],
          es: [
            { icon: "fas fa-ruler-combined", label: "Superficie", value: "Aproximadamente 18 km² de laguna protegida" },
            { icon: "fas fa-water", label: "Profundidad", value: "De 50 cm a 2 m según la zona — ideal para nadar" },
            { icon: "fas fa-fish", label: "Fauna marina", value: "Rayas, estrellas de mar, pepinos de mar y peces multicolores" },
            { icon: "fas fa-sailboat", label: "Acceso", value: "En barco desde Ramena (25 min) o el centro de Diego (45 min)" },
            { icon: "fas fa-sun", label: "Mejor temporada", value: "De abril a noviembre — aguas tranquilas y óptima visibilidad" }
          ]
        },
        tips: {
          fr: [
            "Portez des chaussures aquatiques — le fond est parfois corallien.",
            "Partez en excursion tôt le matin pour éviter le vent de l'après-midi.",
            "Emportez de l'eau et un chapeau — pas d'ombre directe sur le lagon.",
            "Profitez d'un repas de poissons et fruits de mer frais grillés sur l'îlot Suarez."
          ],
          en: [
            "Wear water shoes — the seabed can be rocky or have coral patches.",
            "Depart early in the morning to avoid afternoon winds.",
            "Bring fresh water and a sun hat — minimal natural shade on the sandbanks.",
            "Enjoy fresh grilled seafood on Suarez Island."
          ],
          it: [
            "Indossate scarpette da scoglio — il fondale ha zone coralline.",
            "Partite la mattina presto per evitare il vento pomeridiano.",
            "Portate acqua e cappello — poca ombra sulla laguna.",
            "Gustate il pesce fresco grigliato sull'isolotto di Suarez."
          ],
          de: [
            "Badeschuhe tragen — der Meeresboden ist stellenweise korallenreich.",
            "Früh morgens starten, um Nachmittagswinde zu vermeiden.",
            "Wasser und Sonnenhut mitbringen — wenig Schatten auf den Sandbänken.",
            "Genießen Sie frischen gegrillten Fisch auf der Insel Suarez."
          ],
          es: [
            "Lleve escarpines o calzado acuático — el fondo tiene zonas de coral.",
            "Salga temprano por la mañana para evitar el viento de la tarde.",
            "Lleve agua y sombrero para el sol — poca sombra en la laguna.",
            "Disfrute de pescado y mariscos frescos a la parrilla en el islote Suarez."
          ]
        },
        images: [
          { url: diegoMerEmeraude, caption: "La Mer d'Émeraude" },
          { url: diegoImg2, caption: "Bateaux et bancs de sable immaculés" },
          { url: diegoImg3, caption: "Kitesurf et glisse sur le lagon" },
          { url: diegoImg4, caption: "Sensations nautiques au nord de Madagascar" }
        ]
      },
      {
        id: "ramena",
        rating: "4.7",
        name: {
          fr: "Plage de Ramena",
          en: "Ramena Beach",
          it: "Spiaggia di Ramena",
          de: "Ramena Strand",
          es: "Playa de Ramena"
        },
        badge: {
          fr: "Village de pêcheurs",
          en: "Fishermen Village",
          it: "Villaggio di pescatori",
          de: "Fischerdorf",
          es: "Pueblo pesquero"
        },
        location: {
          fr: "Ramena, 18 km de Diego",
          en: "Ramena, 18 km from Diego",
          it: "Ramena, 18 km da Diego",
          de: "Ramena, 18 km von Diego",
          es: "Ramena, a 18 km de Diego"
        },
        description: {
          fr: "Un village de pêcheurs authentique avec une plage de sable doré s'étirant sur plusieurs kilomètres. Le coucher de soleil y est légendaire.",
          en: "An authentic fishing village with a golden sand beach stretching for several kilometers. Sunsets here are legendary.",
          it: "Un autentico villaggio di pescatori con una spiaggia di sabbia dorata che si estende per chilometri. I tramonti qui sono leggendari.",
          de: "Ein authentisches Fischerdorf mit einem kilometerlangen goldenen Sandstrand. Die Sonnenuntergänge sind legendär.",
          es: "Un auténtico pueblo pesquero con una playa de arena dorada que se extiende a lo largo de varios kilómetros. Las puestas de sol son legendarias."
        },
        history: {
          fr: "Ramena est l'un des plus anciens villages côtiers de la baie de Diégo-Suarez. Ses habitants de la communauté Antakarana perpétuent une tradition de pêche millénaire.",
          en: "Ramena is one of the oldest coastal villages in Diego-Suarez Bay. Its Antakarana inhabitants maintain centuries-old fishing traditions.",
          it: "Ramena è uno dei più antichi villaggi costieri della baia di Diego-Suarez. I suoi abitanti Antakarana tramandano tradizioni di pesca millenarie.",
          de: "Ramena ist eines der ältesten Küstendörfer der Bucht von Diego-Suarez. Die Antakarana-Gemeinschaft pflegt hier uralte Fischereitraditionen.",
          es: "Ramena es uno de los pueblos costeros más antiguos de la bahía de Diego-Suárez. La comunidad Antakarana mantiene tradiciones pesqueras ancestrales."
        },
        quote: {
          fr: "Ici, le temps s'arrête avec la marée.",
          en: "Here, time stands still with the tide.",
          it: "Qui il tempo si ferma con la marea.",
          de: "Hier bleibt die Zeit mit den Gezeiten stehen.",
          es: "Aquí el tiempo se detiene con la marea."
        },
        quoteAuthor: {
          fr: "Proverbe côtier malgache",
          en: "Malagasy coastal proverb",
          it: "Proverbio costiero malgascio",
          de: "Madagassisches Küstensprichwort",
          es: "Proverbio costero malgache"
        },
        events: {
          fr: [
            { title: "Retour de pêche matinal", description: "Chaque matin, les pêcheurs ramènent leur pêche de nuit dans une ambiance colorée." },
            { title: "Régates de pirogues", description: "En haute saison, des courses festives de pirogues à voile animent la baie." }
          ],
          en: [
            { title: "Morning Fishermen Return", description: "Every morning, fishermen bring in their overnight catch in a colorful, lively scene." },
            { title: "Sailing Canoe Regattas", description: "During high season, festive sailing pirogue races animate the bay." }
          ],
          it: [
            { title: "Ritorno dei pescatori all'alba", description: "Ogni mattina i pescatori portano il pescato notturno in un'atmosfera vivace e colorata." },
            { title: "Regate di piroghe", description: "In alta stagione, regate festive di piroghe a vela animano la baia." }
          ],
          de: [
            { title: "Morgendliche Fischereinkehr", description: "Jeden Morgen bringen die Fischer ihren Fang in einer bunten und lebendigen Atmosphäre an Land." },
            { title: "Pirogen-Regatten", description: "In der Hochsaison beleben traditionelle Segelregatten die Bucht." }
          ],
          es: [
            { title: "Llegada matutina de pescadores", description: "Cada mañana, los pescadores regresan con la pesca nocturna en un ambiente lleno de vida." },
            { title: "Regatas de piraguas", description: "En temporada alta, regatas festivas de piraguas a vela animan la bahía." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-ruler-horizontal", label: "Longueur", value: "3,5 km de plage de sable fin" },
            { icon: "fas fa-utensils", label: "Spécialité", value: "Langoustes grillées et poissons frais du jour" },
            { icon: "fas fa-route", label: "Distance", value: "18 km de Diego-Suarez (route asphaltée, 25 min)" }
          ],
          en: [
            { icon: "fas fa-ruler-horizontal", label: "Length", value: "3.5 km of soft golden sand" },
            { icon: "fas fa-utensils", label: "Specialty", value: "Grilled lobster and fresh catch of the day" },
            { icon: "fas fa-route", label: "Distance", value: "18 km from Diego-Suarez (paved road, 25 min)" }
          ],
          it: [
            { icon: "fas fa-ruler-horizontal", label: "Lunghezza", value: "3,5 km di spiaggia di sabbia fine" },
            { icon: "fas fa-utensils", label: "Specialità", value: "Aragoste alla griglia e pesce fresco di giornata" },
            { icon: "fas fa-route", label: "Distanza", value: "18 km da Diego-Suarez (strada asfaltata, 25 min)" }
          ],
          de: [
            { icon: "fas fa-ruler-horizontal", label: "Länge", value: "3,5 km feiner Sandstrand" },
            { icon: "fas fa-utensils", label: "Spezialität", value: "Gegrillter Hummer und fangfrischer Fisch" },
            { icon: "fas fa-route", label: "Distanz", value: "18 km von Diego-Suarez (asphaltierte Straße, 25 Min.)" }
          ],
          es: [
            { icon: "fas fa-ruler-horizontal", label: "Longitud", value: "3,5 km de playa de arena fina" },
            { icon: "fas fa-utensils", label: "Especialidad", value: "Langosta a la parrilla y pescado fresco del día" },
            { icon: "fas fa-route", label: "Distancia", value: "18 km desde Diego-Suárez (carretera asfaltada, 25 min)" }
          ]
        },
        tips: {
          fr: [
            "Goûtez aux langoustes grillées directement sur la plage.",
            "La plage est très calme en semaine et plus animée le dimanche.",
            "Point de départ parfait pour les excursions en bateau vers la Mer d'Émeraude."
          ],
          en: [
            "Taste freshly grilled lobster right on the beachfront.",
            "Very tranquil on weekdays, lively with local families on Sundays.",
            "Perfect departure hub for boat trips to the Emerald Sea."
          ],
          it: [
            "Assaggiate le aragoste grigliate direttamente sulla spiaggia.",
            "Molto tranquilla durante la settimana e vivace la domenica.",
            "Punto di partenza ideale per escursioni in barca verso il Mare di Smeraldo."
          ],
          de: [
            "Probieren Sie frisch gegrillten Hummer direkt am Strand.",
            "Unter der Woche sehr ruhig, sonntags herrlich lebendig.",
            "Idealer Ausgangspunkt für Bootstouren zum Smaragdmeer."
          ],
          es: [
            "Pruebe las langostas a la parrilla directamente en los chiringuitos de la playa.",
            "Muy tranquila de lunes a viernes, más animada los domingos.",
            "Punto de partida ideal para excursiones en barco al Mar de Esmeralda."
          ]
        },
        images: [
          { url: diegoRamena, caption: "Plage de Ramena" },
          { url: diegoImg1, caption: "Atmosphère authentique sur le rivage de Ramena" },
          { url: diegoImg14, caption: "Rivage doré et coucher de soleil" },
          { url: diegoImg15, caption: "Village de pêcheurs au crépuscule" }
        ]
      },
      {
        id: "trois-baies",
        rating: "4.8",
        name: {
          fr: "Les Trois Baies",
          en: "The Three Bays",
          it: "Le Tre Baie",
          de: "Die Drei Buchten",
          es: "Las Tres Bahías"
        },
        badge: {
          fr: "Vue panoramique",
          en: "Panoramic View",
          it: "Vista panoramica",
          de: "Panoramablick",
          es: "Vista panorámica"
        },
        location: {
          fr: "Côte Est de Diégo-Suarez",
          en: "East Coast of Diego-Suarez",
          it: "Costa Est di Diego-Suarez",
          de: "Ostküste von Diego-Suarez",
          es: "Costa Este de Diego-Suárez"
        },
        description: {
          fr: "Succession féerique de la Baie des Dunes, de la Baie des Pigeons et de la Baie des Sakalava. Paysages sauvages battus par les vents et eaux turquoise.",
          en: "A magical succession of Dunes Bay, Pigeons Bay, and Sakalava Bay. Wild windswept landscapes and pristine turquoise lagoons.",
          it: "Una magica successione della Baia delle Dune, Baia dei Piccioni e Baia di Sakalava. Paesaggi selvaggi e lagune turchesi.",
          de: "Eine zauberhafte Abfolge von Dünenbucht, Taubenbucht und Sakalava-Bucht. Wilde Landschaften und kristallklare Lagunen.",
          es: "Sucesión mágica de la Bahía de las Dunas, Bahía de las Palomas y Bahía de Sakalava. Paisajes salvajes y aguas turquesas."
        },
        history: {
          fr: "Ces baies sauvages abritent d'anciens avant-postes coloniaux et de spectaculaires dunes fossiles forgées par le vent alizé Varatraza.",
          en: "These wild bays host ancient colonial outposts and striking fossil dunes sculpted by the prevailing Varatraza trade winds.",
          it: "Queste baie selvagge ospitano antichi avamposti coloniali e spettacolari dune fossili modellate dal vento aliseo Varatraza.",
          de: "Diese wilden Buchten beherbergen alte Kolonialposten und spektakuläre fossile Dünen, geformt durch den Varatraza-Passatwind.",
          es: "Estas bahías vírgenes albergan antiguos puestos coloniales y espectaculares dunas fósiles esculpidas por el viento alisio Varatraza."
        },
        quote: {
          fr: "Trois baies, un seul regard — la géographie à l'état pur.",
          en: "Three bays, one single glance — pristine geography at its finest.",
          it: "Tre baie, un solo sguardo — la geografia allo stato puro.",
          de: "Drei Buchten, ein einziger Blick — Natur in ihrer reinsten Form.",
          es: "Tres bahías, una sola mirada — geografía en estado puro."
        },
        quoteAuthor: {
          fr: "Guide local Antsiranana",
          en: "Antsiranana local guide",
          it: "Guida locale di Antsiranana",
          de: "Lokaler Guide Antsiranana",
          es: "Guía local de Antsiranana"
        },
        events: {
          fr: [
            { title: "Kitesurf à Sakalava", description: "Spot de renommée mondiale pour le kitesurf et la planche à voile de mai à novembre." },
            { title: "Randonnée côtière", description: "Sentier pédestre reliant les trois baies à travers les dunes et les sentiers côtiers." }
          ],
          en: [
            { title: "Kitesurfing in Sakalava", description: "World-class kitesurfing and windsurfing spot from May to November." },
            { title: "Coastal Trekking", description: "Scenic footpath connecting all three bays across dunes and coastal cliffs." }
          ],
          it: [
            { title: "Kitesurf a Sakalava", description: "Spot di fama mondiale per kitesurf e windsurf da maggio a novembre." },
            { title: "Trekking costiero", description: "Sentiero panoramico che collega le tre baie tra dune e scogliere." }
          ],
          de: [
            { title: "Kitesurfen in Sakalava", description: "Weltklasse-Spot für Kitesurfen und Windsurfen von Mai bis November." },
            { title: "Küstenwanderung", description: "Wunderschöner Wanderweg, der alle drei Buchten über Dünen und Klippen verbindet." }
          ],
          es: [
            { title: "Kitesurf en Sakalava", description: "Spot de fama mundial para kitesurf y windsurf de mayo a noviembre." },
            { title: "Senderismo costero", description: "Hermoso sendero que conecta las tres bahías a través de dunas y acantilados." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-wind", label: "Conditions", value: "Idéal pour le kitesurf (vent régulier 20-30 nœuds)" },
            { icon: "fas fa-person-hiking", label: "Randonnée", value: "Parcours pédestre d'environ 3h accessible à tous" },
            { icon: "fas fa-truck-pickup", label: "Accès", value: "Accessible en 4x4 ou quad depuis Diego / Ramena" }
          ],
          en: [
            { icon: "fas fa-wind", label: "Conditions", value: "World-class kitesurf (steady wind 20-30 knots)" },
            { icon: "fas fa-person-hiking", label: "Hiking", value: "Approx. 3h scenic coastal walk suitable for all" },
            { icon: "fas fa-truck-pickup", label: "Access", value: "Accessible by 4x4 or quad from Diego / Ramena" }
          ],
          it: [
            { icon: "fas fa-wind", label: "Condizioni", value: "Ideale per il kitesurf (vento costante 20-30 nodi)" },
            { icon: "fas fa-person-hiking", label: "Escursione", value: "Percorso a piedi di circa 3 ore accessibile a tutti" },
            { icon: "fas fa-truck-pickup", label: "Accesso", value: "Raggiungibile in 4x4 o quad da Diego / Ramena" }
          ],
          de: [
            { icon: "fas fa-wind", label: "Bedingungen", value: "Optimal zum Kitesurfen (konstanter Wind 20-30 Knoten)" },
            { icon: "fas fa-person-hiking", label: "Wanderung", value: "Ca. 3-stündige Küstenwanderung, für jeden machbar" },
            { icon: "fas fa-truck-pickup", label: "Anfahrt", value: "Erreichbar mit 4x4 oder Quad ab Diego / Ramena" }
          ],
          es: [
            { icon: "fas fa-wind", label: "Condiciones", value: "Ideal para kitesurf (viento constante 20-30 nudos)" },
            { icon: "fas fa-person-hiking", label: "Senderismo", value: "Ruta a pie de unas 3 horas apta para todos" },
            { icon: "fas fa-truck-pickup", label: "Acceso", value: "Accesible en 4x4 o quad desde Diego / Ramena" }
          ]
        },
        tips: {
          fr: [
            "Prévoyez des lunettes de soleil et de l'eau, le sable blanc est très réverbérant.",
            "La Baie des Sakalava abrite des éco-lodges parfaits pour déjeuner les pieds dans l'eau.",
            "Possibilité d'excursion combinée 4x4 + randonnée sur la journée."
          ],
          en: [
            "Bring sunglasses and water as the white sand is highly reflective.",
            "Sakalava Bay has lovely eco-lodges perfect for beachfront lunch.",
            "Can be done as a combined 4x4 driving and hiking day trip."
          ],
          it: [
            "Portate occhiali da sole e acqua: la sabbia bianca è molto riflettente.",
            "La Baia di Sakalava ospita eco-lodge perfetti per pranzare in riva al mare.",
            "Ideale come escursione combinata 4x4 e passeggiata di una giornata."
          ],
          de: [
            "Sonnenbrille und Trinkwasser mitnehmen, der helle Sand reflektiert stark.",
            "In der Sakalava-Bucht gibt es schöne Eco-Lodges für ein Mittagessen direkt am Wasser.",
            "Hervorragend als kombinierte 4x4- und Tagestour geeignet."
          ],
          es: [
            "Lleve gafas de sol y agua, la arena blanca es muy reflectante.",
            "La Bahía de Sakalava cuenta con eco-lodges ideales para almorzar frente al mar.",
            "Se puede realizar como excursión de un día combinando 4x4 y senderismo."
          ]
        },
        images: [
          { url: diegoTroisBaies, caption: "Vue panoramique sur les trois baies" },
          { url: diegoImg16, caption: "Cap Diego et côte sauvage préservée" },
          { url: diegoImg17, caption: "Sentier côtier le long des falaises" }
        ]
      },
      {
        id: "baie-diego-suarez",
        rating: "4.9",
        name: {
          fr: "Baie de Diego Suarez (Antsiranana)",
          en: "Diego Suarez Bay (Antsiranana)",
          it: "Baia di Diego Suarez (Antsiranana)",
          de: "Bucht von Diego Suarez (Antsiranana)",
          es: "Bahía de Diego Suárez (Antsiranana)"
        },
        badge: {
          fr: "2e plus grande baie du monde",
          en: "2nd Largest Bay in the World",
          it: "2ª baia più grande del mondo",
          de: "2. größte Bucht der Welt",
          es: "2.ª bahía más grande del mundo"
        },
        location: {
          fr: "Antsiranana, extrême nord de Madagascar",
          en: "Antsiranana, far north of Madagascar",
          it: "Antsiranana, estremo nord del Madagascar",
          de: "Antsiranana, äußerster Norden Madagaskars",
          es: "Antsiranana, extremo norte de Madagascar"
        },
        description: {
          fr: "Considérée comme la deuxième plus grande baie naturelle du monde, la baie de Diego Suarez est un vaste plan d'eau protégé subdivisé en quatre parties distinctes : la Baie du Tonnerre, la Baie des Cailloux Blancs, le Cul-de-sac Gallois et la Baie des Français, chacune avec son caractère unique.",
          en: "Considered the second largest natural bay in the world, Diego Suarez Bay is a vast protected waterway divided into four distinct parts: Baie du Tonnerre, Baie des Cailloux Blancs, Cul-de-sac Gallois, and Baie des Français, each with its own unique character.",
          it: "Considerata la seconda baia naturale più grande del mondo, la baia di Diego Suarez è un vasto specchio d'acqua protetto suddiviso in quattro parti distinte: la Baie du Tonnerre, la Baie des Cailloux Blancs, il Cul-de-sac Gallois e la Baie des Français, ognuna con il suo carattere unico.",
          de: "Die als zweitgrößte natürliche Bucht der Welt geltende Bucht von Diego Suarez ist ein weitläufiges, geschütztes Gewässer, das in vier eigenständige Teile unterteilt ist: die Baie du Tonnerre, die Baie des Cailloux Blancs, den Cul-de-sac Gallois und die Baie des Français — jeder mit seinem einzigartigen Charakter.",
          es: "Considerada la segunda bahía natural más grande del mundo, la bahía de Diego Suárez es una vasta extensión de agua protegida subdividida en cuatro partes distintas: la Baie du Tonnerre, la Baie des Cailloux Blancs, el Cul-de-sac Gallois y la Baie des Français, cada una con su carácter propio."
        },
        history: {
          fr: "Découverte par les navigateurs portugais au XVIe siècle, puis développée comme base navale stratégique par la France, cette baie gigantesque abrita l'une des plus importantes flottes militaires de l'océan Indien.",
          en: "Discovered by Portuguese navigators in the 16th century and later developed as a strategic French naval base, this enormous bay once sheltered one of the most powerful naval fleets in the Indian Ocean.",
          it: "Scoperta dai navigatori portoghesi nel XVI secolo e successivamente sviluppata come base navale strategica dalla Francia, questa gigantesca baia ospitò una delle flotte militari più importanti dell'Oceano Indiano.",
          de: "Im 16. Jahrhundert von portugiesischen Seefahrern entdeckt und später als strategischer französischer Marinesstützpunkt ausgebaut, beherbergte diese riesige Bucht einst eine der bedeutendsten Militärflotten des Indischen Ozeans.",
          es: "Descubierta por navegantes portugueses en el siglo XVI y desarrollada más tarde como base naval estratégica por Francia, esta enorme bahía albergó una de las flotas militares más importantes del Océano Índico."
        },
        quote: {
          fr: "Une baie aux proportions titanesques, où chaque bras d'eau raconte une page de l'histoire maritime mondiale.",
          en: "A bay of titanic proportions, where each arm of water tells a page of the world's maritime history.",
          it: "Una baia di proporzioni titaniche, dove ogni braccio d'acqua racconta una pagina della storia marittima mondiale.",
          de: "Eine Bucht von titanischen Ausmaßen, in der jeder Wasserarm eine Seite der Weltmeeresgeschichte erzählt.",
          es: "Una bahía de proporciones titánicas, donde cada brazo de agua narra una página de la historia marítima mundial."
        },
        quoteAuthor: {
          fr: "Capitaine de marine, XIXe siècle",
          en: "Naval Captain, 19th century",
          it: "Capitano di marina, XIX secolo",
          de: "Marinekapitän, 19. Jahrhundert",
          es: "Capitán de marina, siglo XIX"
        },
        events: {
          fr: [
            { title: "Baie du Tonnerre", description: "La partie la plus spectaculaire, battue par les vents, aux eaux profondes et aux falaises abruptes qui résonnent lors des orages." },
            { title: "Baie des Cailloux Blancs", description: "Une baie plus calme et secrète, connue pour ses galets blancs immaculés et ses eaux limpides idéales pour la baignade." },
            { title: "Cul-de-sac Gallois", description: "Un bras de mer enclavé d'une quiétude absolue, ancien mouillage des navires militaires, aujourd'hui paradis pour la pêche artisanale." },
            { title: "Baie des Français", description: "Le cœur historique de la baie, avec le Pain de Sucre et les vestiges de la présence navale française du XIXe siècle." }
          ],
          en: [
            { title: "Baie du Tonnerre", description: "The most dramatic section, exposed to strong winds, with deep waters and steep cliffs that echo during storms." },
            { title: "Baie des Cailloux Blancs", description: "A calmer, more secluded bay known for its immaculate white pebbles and crystal-clear waters perfect for swimming." },
            { title: "Cul-de-sac Gallois", description: "A deeply enclosed arm of the sea, once a naval moorage, now a haven for artisanal fishing in absolute serenity." },
            { title: "Baie des Français", description: "The historical heart of the bay, home to the Sugarloaf and remnants of French naval presence from the 19th century." }
          ],
          it: [
            { title: "Baie du Tonnerre", description: "La parte più spettacolare, esposta ai venti, con acque profonde e scogliere ripide che riecheggiano durante i temporali." },
            { title: "Baie des Cailloux Blancs", description: "Una baia più tranquilla e segreta, famosa per i suoi ciottoli bianchi immacolati e le acque limpide ideali per nuotare." },
            { title: "Cul-de-sac Gallois", description: "Un braccio di mare racchiuso in assoluta quiete, ex ancoraggio navale, oggi paradiso per la pesca artigianale." },
            { title: "Baie des Français", description: "Il cuore storico della baia, con il Pan di Zucchero e i resti della presenza navale francese del XIX secolo." }
          ],
          de: [
            { title: "Baie du Tonnerre", description: "Der spektakulärste Abschnitt, dem Wind ausgesetzt, mit tiefen Gewässern und steilen Klippen, die bei Stürmen widerhallen." },
            { title: "Baie des Cailloux Blancs", description: "Eine ruhigere, abgeschiedenere Bucht mit makellosem weißen Kiesstrand und kristallklarem Wasser zum Schwimmen." },
            { title: "Cul-de-sac Gallois", description: "Ein tief eingeschnittener Meeresarm, einst Ankerplatz der Marine, heute Paradies für die handwerkliche Fischerei." },
            { title: "Baie des Français", description: "Das historische Herz der Bucht mit dem Zuckerhut und Überresten der französischen Marinepräsenz aus dem 19. Jahrhundert." }
          ],
          es: [
            { title: "Baie du Tonnerre", description: "La parte más espectacular, expuesta a los vientos, con aguas profundas y acantilados escarpados que resuenan durante las tormentas." },
            { title: "Baie des Cailloux Blancs", description: "Una bahía más tranquila y recóndita, conocida por sus guijarros blancos inmaculados y sus aguas cristalinas ideales para nadar." },
            { title: "Cul-de-sac Gallois", description: "Un brazo de mar muy cerrado de absoluta quietud, antiguo fondeadero naval, hoy paraíso para la pesca artesanal." },
            { title: "Baie des Français", description: "El corazón histórico de la bahía, con el Pan de Azúcar y vestigios de la presencia naval francesa del siglo XIX." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-water", label: "Superficie", value: "L'une des plus grandes baies naturelles du monde" },
            { icon: "fas fa-map", label: "Subdivisions", value: "4 parties : Tonnerre, Cailloux Blancs, Cul-de-sac Gallois, Français" },
            { icon: "fas fa-sailboat", label: "Navigation", value: "Accès en bateau depuis Diego — excursions d'une demi-journée à une journée" },
            { icon: "fas fa-shield-halved", label: "Stratégie", value: "Ancienne base navale française — l'une des plus importantes de l'océan Indien" }
          ],
          en: [
            { icon: "fas fa-water", label: "Size", value: "One of the largest natural bays in the world" },
            { icon: "fas fa-map", label: "Subdivisions", value: "4 parts: Tonnerre, Cailloux Blancs, Cul-de-sac Gallois, Français" },
            { icon: "fas fa-sailboat", label: "Navigation", value: "Boat access from Diego — half-day to full-day excursions" },
            { icon: "fas fa-shield-halved", label: "Strategy", value: "Former French naval base — one of the most important in the Indian Ocean" }
          ],
          it: [
            { icon: "fas fa-water", label: "Dimensione", value: "Una delle baie naturali più grandi del mondo" },
            { icon: "fas fa-map", label: "Suddivisioni", value: "4 parti: Tonnerre, Cailloux Blancs, Cul-de-sac Gallois, Français" },
            { icon: "fas fa-sailboat", label: "Navigazione", value: "Accesso in barca da Diego — escursioni da mezza giornata a tutta la giornata" },
            { icon: "fas fa-shield-halved", label: "Strategia", value: "Ex base navale francese — tra le più importanti dell'Oceano Indiano" }
          ],
          de: [
            { icon: "fas fa-water", label: "Größe", value: "Eine der größten natürlichen Buchten der Welt" },
            { icon: "fas fa-map", label: "Unterteilungen", value: "4 Teile: Tonnerre, Cailloux Blancs, Cul-de-sac Gallois, Français" },
            { icon: "fas fa-sailboat", label: "Navigation", value: "Bootzugang von Diego — halbtägige bis ganztägige Ausflüge" },
            { icon: "fas fa-shield-halved", label: "Strategie", value: "Ehemaliger französischer Marinestützpunkt — einer der wichtigsten im Indischen Ozean" }
          ],
          es: [
            { icon: "fas fa-water", label: "Tamaño", value: "Una de las bahías naturales más grandes del mundo" },
            { icon: "fas fa-map", label: "Subdivisiones", value: "4 partes: Tonnerre, Cailloux Blancs, Cul-de-sac Gallois, Français" },
            { icon: "fas fa-sailboat", label: "Navegación", value: "Acceso en barco desde Diego — excursiones de medio día a jornada completa" },
            { icon: "fas fa-shield-halved", label: "Estrategia", value: "Antigua base naval francesa — una de las más importantes del Océano Índico" }
          ]
        },
        tips: {
          fr: [
            "Louez un bateau avec guide local pour explorer les quatre parties en une journée.",
            "La Baie du Tonnerre est impressionnante par temps venteux — préférez la Baie des Cailloux Blancs pour la baignade.",
            "Ne manquez pas le coucher de soleil sur la Baie des Français depuis la côte."
          ],
          en: [
            "Hire a local guide and boat to explore all four sections in a single day.",
            "The Baie du Tonnerre is dramatic in windy weather — opt for Baie des Cailloux Blancs for calm swimming.",
            "Don't miss the sunset over Baie des Français from the shoreline."
          ],
          it: [
            "Noleggiate una barca con guida locale per esplorare tutte e quattro le parti in una sola giornata.",
            "La Baie du Tonnerre è spettacolare con il vento — per nuotare preferite la Baie des Cailloux Blancs.",
            "Non perdete il tramonto sulla Baie des Français dalla riva."
          ],
          de: [
            "Mieten Sie ein Boot mit lokalem Guide, um alle vier Abschnitte an einem Tag zu erkunden.",
            "Die Baie du Tonnerre ist bei Wind beeindruckend — für ruhiges Schwimmen lieber die Baie des Cailloux Blancs.",
            "Verpassen Sie nicht den Sonnenuntergang über der Baie des Français von der Küste aus."
          ],
          es: [
            "Alquile un barco con guía local para explorar las cuatro partes en un solo día.",
            "La Baie du Tonnerre es impresionante con viento fuerte — elija la Baie des Cailloux Blancs para nadar con calma.",
            "No se pierda el atardecer sobre la Baie des Français desde la orilla."
          ]
        },
        images: [
          { url: diegoImg17, caption: "Vue aérienne sur la grande baie de Diego Suarez" },
          { url: diegoImg18, caption: "Les eaux protégées de la baie des Français" },
          { url: diegoImg16, caption: "Cap Diego et entrée de la grande passe" }
        ]
      },
      {
        id: "orangea",
        rating: "4.7",
        name: {
          fr: "Plage d'Orangea",
          en: "Orangea Beach",
          it: "Spiaggia di Orangea",
          de: "Orangea Strand",
          es: "Playa de Orangea"
        },
        badge: {
          fr: "Crique sauvage & Sentier militaire",
          en: "Wild Cove & Military Trail",
          it: "Cala selvaggia & Sentiero militare",
          de: "Wilde Bucht & Militärpfad",
          es: "Cala salvaje & Sendero militar"
        },
        location: {
          fr: "Au-delà de Ramena, côte nord-est",
          en: "Beyond Ramena, northeast coast",
          it: "Oltre Ramena, costa nord-est",
          de: "Jenseits von Ramena, Nordostküste",
          es: "Más allá de Ramena, costa noreste"
        },
        description: {
          fr: "Plus sauvage et moins fréquentée que Ramena, la plage d'Orangea se découvre en suivant le sentier militaire historique au-delà du village. Elle offre une belle crique ombragée, des eaux turquoise et une solitude presque garantie.",
          en: "Wilder and far less visited than Ramena, Orangea Beach is reached by following the historic military trail past the village. It reveals a beautiful shaded cove, turquoise waters, and an almost guaranteed sense of solitude.",
          it: "Più selvaggia e meno frequentata di Ramena, la spiaggia di Orangea si raggiunge seguendo il sentiero militare storico oltre il villaggio. Offre una bella cala ombreggiata, acque turchesi e una solitudine quasi garantita.",
          de: "Wilder und weit weniger besucht als Ramena, erreicht man Orangea Beach durch den historischen Militärpfad hinter dem Dorf. Er führt zu einer wunderschönen schattigen Bucht, türkisfarbenem Wasser und fast garantierter Abgeschiedenheit.",
          es: "Más salvaje y mucho menos frecuentada que Ramena, la playa de Orangea se descubre siguiendo el histórico sendero militar más allá del pueblo. Ofrece una hermosa cala sombreada, aguas turquesas y una soledad casi garantizada."
        },
        history: {
          fr: "La zone d'Orangea fait partie d'une zone militaire historique remontant à l'époque coloniale française. Le sentier qui y mène longeait autrefois des fortifications et des postes d'observation de la grande passe.",
          en: "The Orangea area is part of a historic military zone dating back to the French colonial era. The trail leading there once ran past fortifications and observation posts overlooking the great bay passage.",
          it: "La zona di Orangea fa parte di un'area militare storica risalente all'era coloniale francese. Il sentiero che vi conduce costeggiava antiche fortificazioni e posti di osservazione sul grande passaggio della baia.",
          de: "Das Gebiet von Orangea ist Teil einer historischen Militärzone aus der französischen Kolonialzeit. Der Pfad dorthin verlief einst an Befestigungen und Beobachtungsposten über dem großen Buchteneingang.",
          es: "La zona de Orangea forma parte de una histórica área militar que data de la época colonial francesa. El sendero que conduce hasta allí bordeaba antiguas fortificaciones y puestos de observación sobre el gran paso de la bahía."
        },
        quote: {
          fr: "Après Ramena, le sentier vous emmène là où le monde s'arrête et où la nature reprend tous ses droits.",
          en: "Past Ramena, the trail takes you to where the world ends and nature reclaims everything.",
          it: "Oltre Ramena, il sentiero porta dove il mondo finisce e la natura riprende il sopravvento.",
          de: "Hinter Ramena führt der Pfad dorthin, wo die Welt endet und die Natur alles zurückfordert.",
          es: "Más allá de Ramena, el sendero lleva a donde el mundo termina y la naturaleza lo reclama todo."
        },
        quoteAuthor: {
          fr: "Randonneur côtier local",
          en: "Local Coastal Hiker",
          it: "Escursionista costiero locale",
          de: "Lokaler Küstenwanderer",
          es: "Excursionista costero local"
        },
        events: {
          fr: [
            { title: "Randonnée sur le sentier militaire", description: "Parcourez le chemin historique reliant Ramena à Orangea à travers la végétation côtière et les traces du passé colonial." },
            { title: "Baignade en crique isolée", description: "Profitez d'une des rares plages encore vierges du nord de Madagascar, à l'écart des flux touristiques." }
          ],
          en: [
            { title: "Military Trail Hike", description: "Walk the historic path connecting Ramena to Orangea through coastal vegetation and remnants of colonial history." },
            { title: "Swimming in an Isolated Cove", description: "Enjoy one of the rare unspoiled beaches in northern Madagascar, far from tourist crowds." }
          ],
          it: [
            { title: "Escursione sul sentiero militare", description: "Percorrete il cammino storico che collega Ramena a Orangea attraverso la vegetazione costiera e i resti del passato coloniale." },
            { title: "Bagno nella cala isolata", description: "Godetevi una delle rare spiagge ancora incontaminate del nord del Madagascar, lontano dal turismo di massa." }
          ],
          de: [
            { title: "Wanderung auf dem Militärpfad", description: "Laufen Sie den historischen Pfad von Ramena nach Orangea durch Küstenvegetation und Überreste der Kolonialzeit." },
            { title: "Baden in einer abgelegenen Bucht", description: "Genießen Sie einen der noch unberührten Strände im Norden Madagaskars abseits des Tourismus." }
          ],
          es: [
            { title: "Senderismo por el sendero militar", description: "Recorra el camino histórico que conecta Ramena con Orangea a través de la vegetación costera y huellas del pasado colonial." },
            { title: "Baño en una cala aislada", description: "Disfrute de una de las pocas playas aún vírgenes del norte de Madagascar, lejos del turismo masivo." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-person-hiking", label: "Accès", value: "Sentier pédestre depuis Ramena (40 min à 1h de marche)" },
            { icon: "fas fa-shield-halved", label: "Historique", value: "Zone militaire coloniale — vestiges de fortifications le long du sentier" },
            { icon: "fas fa-umbrella-beach", label: "Cadre", value: "Crique ombragée par la végétation côtière, eaux calmes et peu fréquentées" }
          ],
          en: [
            { icon: "fas fa-person-hiking", label: "Access", value: "On foot from Ramena (40 min to 1h walk)" },
            { icon: "fas fa-shield-halved", label: "History", value: "Colonial military zone — fortification ruins visible along the trail" },
            { icon: "fas fa-umbrella-beach", label: "Setting", value: "Shaded cove with coastal vegetation, calm and rarely crowded" }
          ],
          it: [
            { icon: "fas fa-person-hiking", label: "Accesso", value: "A piedi da Ramena (40 min – 1 ora di cammino)" },
            { icon: "fas fa-shield-halved", label: "Storia", value: "Zona militare coloniale — rovine di fortificazioni visibili lungo il sentiero" },
            { icon: "fas fa-umbrella-beach", label: "Ambiente", value: "Cala ombreggiata dalla vegetazione costiera, acque calme e poco frequentate" }
          ],
          de: [
            { icon: "fas fa-person-hiking", label: "Anreise", value: "Zu Fuß von Ramena (40 Min. bis 1 Std. Wanderung)" },
            { icon: "fas fa-shield-halved", label: "Geschichte", value: "Koloniale Militärzone — Ruinen von Befestigungen am Wegrand sichtbar" },
            { icon: "fas fa-umbrella-beach", label: "Umgebung", value: "Schattige Bucht mit Küstenvegetation, ruhig und selten überfüllt" }
          ],
          es: [
            { icon: "fas fa-person-hiking", label: "Acceso", value: "A pie desde Ramena (40 min a 1h de caminata)" },
            { icon: "fas fa-shield-halved", label: "Historia", value: "Zona militar colonial — ruinas de fortificaciones visibles a lo largo del sendero" },
            { icon: "fas fa-umbrella-beach", label: "Entorno", value: "Cala sombreada por vegetación costera, aguas tranquilas y poco frecuentada" }
          ]
        },
        tips: {
          fr: [
            "Portez de bonnes chaussures de marche — le sentier militaire peut être escarpé par endroits.",
            "Apportez de l'eau et un pique-nique : aucune infrastructure sur place.",
            "Idéale en semaine pour une solitude totale — évitez les jours fériés malgaches."
          ],
          en: [
            "Wear proper hiking shoes — the military trail can be steep in places.",
            "Bring water and a packed lunch: no facilities on site.",
            "Best visited on weekdays for total solitude — avoid Malagasy public holidays."
          ],
          it: [
            "Indossate scarpe da trekking adatte — il sentiero militare può essere ripido in alcuni punti.",
            "Portate acqua e pranzo al sacco: nessuna struttura sul posto.",
            "Ideale nei giorni feriali per solitudine totale — evitate i giorni festivi malgasci."
          ],
          de: [
            "Feste Wanderschuhe tragen — der Militärpfad kann stellenweise steil sein.",
            "Wasser und Proviant mitnehmen: keinerlei Einrichtungen vor Ort.",
            "Unter der Woche für absolute Stille — madagassische Feiertage meiden."
          ],
          es: [
            "Use calzado de senderismo adecuado — el sendero militar puede ser empinado en algunos tramos.",
            "Lleve agua y comida: no hay ningún servicio en el lugar.",
            "Ideal entre semana para total soledad — evite los días festivos malgaches."
          ]
        },
        images: [
          { url: diegoRamena, caption: "Côte sauvage entre Ramena et Orangea" },
          { url: diegoImg14, caption: "Sentier côtier longeant la végétation tropicale" },
          { url: diegoImg15, caption: "Crique isolée d'Orangea et ses eaux turquoise" }
        ]
      }
    ]
  },
  parks: {
    title: {
      fr: "Parcs Nationaux & Réserves",
      en: "National Parks & Nature Reserves",
      it: "Parchi Nazionali & Riserve",
      de: "Nationalparks & Naturschutzgebiete",
      es: "Parques Nacionales & Reservas"
    },
    icon: "fas fa-tree",
    description: {
      fr: "Une biodiversité unique, des paysages lunaires et des forêts primaires",
      en: "Unique biodiversity, otherworldly landscapes, and primary rainforests",
      it: "Una biodiversità unica, paesaggi lunari e foreste pluviali primarie",
      de: "Einzigartige Artenvielfalt, Mondlandschaften und uralte Regenwälder",
      es: "Biodiversidad única, paisajes lunares y selvas tropicales primarias"
    },
    places: [
      {
        id: "montagne-ambre",
        rating: "4.8",
        name: {
          fr: "Parc National Montagne d'Ambre",
          en: "Amber Mountain National Park",
          it: "Parco Nazionale Montagna d'Ambra",
          de: "Nationalpark Montagne d'Ambre",
          es: "Parque Nacional Montaña de Ámbar"
        },
        badge: {
          fr: "Forêt primaire",
          en: "Primary Rainforest",
          it: "Foresta primaria",
          de: "Urwald",
          es: "Selva primaria"
        },
        location: {
          fr: "Joffreville, 40 km de Diego",
          en: "Joffreville, 40 km from Diego",
          it: "Joffreville, 40 km da Diego",
          de: "Joffreville, 40 km von Diego",
          es: "Joffreville, a 40 km de Diego"
        },
        description: {
          fr: "Une forêt humide d'altitude peuplée de lémuriens, de caméléons nains et de cascades spectaculaires. Un sanctuaire de fraîcheur et de biodiversité.",
          en: "A high-altitude rainforest inhabited by lemurs, miniature chameleons, and breathtaking waterfalls. A cool oasis of biodiversity.",
          it: "Una foresta pluviale d'alta quota popolata da lemuri, camaleonti nani e spettacolari cascate. Un'oasi di freschezza e biodiversità.",
          de: "Ein hochgelegener tropischer Regenwald mit Lemuren, Zwergchamäleons und tosenden Wasserfällen. Eine erfrischende Oase der Artenvielfalt.",
          es: "Una selva tropical de altura poblada de lémures, camaleones enanos y espectaculares cascadas. Un santuario de frescura y biodiversidad."
        },
        history: {
          fr: "Créé en 1958, c'est l'un des premiers parcs nationaux de Madagascar. Son microclimat unique alimente en eau douce toute la région d'Antsiranana.",
          en: "Created in 1958, it is one of the earliest national parks in Madagascar. Its unique microclimate supplies fresh water to the entire Antsiranana region.",
          it: "Istituito nel 1958, è uno dei primi parchi nazionali del Madagascar. Il suo microclima unico rifornisce di acqua dolce l'intera regione di Antsiranana.",
          de: "1958 gegründet, zählt er zu den ältesten Nationalparks Madagaskars. Sein besonderes Mikroklima versorgt die gesamte Region Antsiranana mit Trinkwasser.",
          es: "Creado en 1958, es uno de los primeros parques nacionales de Madagascar. Su microclima único abastece de agua dulce a toda la región de Antsiranana."
        },
        quote: {
          fr: "Entrer dans la Montagne d'Ambre, c'est entrer dans un monde où l'évolution a suivi sa propre voie.",
          en: "Entering Amber Mountain is stepping into a world where evolution carved its own miraculous path.",
          it: "Entrare nella Montagna d'Ambra significa entrare in un mondo in cui l'evoluzione ha seguito la propria via.",
          de: "Die Montagne d'Ambre zu betreten bedeutet, eine Welt zu entdecken, in der die Evolution eigene Wege ging.",
          es: "Entrar en la Montaña de Ámbar es entrar en un mundo donde la evolución siguió su propio camino."
        },
        quoteAuthor: {
          fr: "Naturaliste explorateur",
          en: "Exploratory Naturalist",
          it: "Naturalista esploratore",
          de: "Naturforscher",
          es: "Naturalista explorador"
        },
        events: {
          fr: [
            { title: "Observation des lémuriens", description: "Rencontrez le lémurien couronné et le lémurien de Sanford au cœur de la canopée." },
            { title: "Découverte des cascades", description: "Randonnez vers la Grande Cascade et la cascade sacrée d'Antomboka." }
          ],
          en: [
            { title: "Lemur Watching", description: "Spot crowned lemurs and Sanford's brown lemurs active in the canopy." },
            { title: "Waterfalls Trail", description: "Hike towards the Great Waterfall and the sacred Antomboka falls." }
          ],
          it: [
            { title: "Avvistamento dei lemuri", description: "Incontrate il lemure coronato e il lemure di Sanford nella canopea." },
            { title: "Sentiero delle cascate", description: "Camminate verso la Grande Cascata e la cascata sacra di Antomboka." }
          ],
          de: [
            { title: "Lemuren-Beobachtung", description: "Entdecken Sie Kronenlemuren und Sanford-Lemuren in den Baumkronen." },
            { title: "Wasserfall-Rundweg", description: "Wandern Sie zum Großen Wasserfall und zur heiligen Antomboka-Kaskade." }
          ],
          es: [
            { title: "Avistamiento de lémures", description: "Observe el lémur coronado y el lémur de Sanford entre las copas de los árboles." },
            { title: "Ruta de las cascadas", description: "Camine hacia la Gran Cascada y la cascada sagrada de Antomboka." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-tree", label: "Superficie", value: "18 200 hectares de forêt tropicale protégée" },
            { icon: "fas fa-feather-pointed", label: "Faune", value: "8 espèces de lémuriens, 75 espèces d'oiseaux, caméléons nains" },
            { icon: "fas fa-temperature-half", label: "Climat", value: "Climat frais et tempéré (prévoir un vêtement chaud/pluie)" }
          ],
          en: [
            { icon: "fas fa-tree", label: "Area", value: "18,200 hectares of protected rainforest" },
            { icon: "fas fa-feather-pointed", label: "Wildlife", value: "8 lemur species, 75 bird species, pygmy chameleons" },
            { icon: "fas fa-temperature-half", label: "Climate", value: "Cool mountain climate (bring a light jacket/raincoat)" }
          ],
          it: [
            { icon: "fas fa-tree", label: "Superficie", value: "18.200 ettari di foresta pluviale protetta" },
            { icon: "fas fa-feather-pointed", label: "Fauna", value: "8 specie di lemuri, 75 specie di uccelli, camaleonti nani" },
            { icon: "fas fa-temperature-half", label: "Clima", value: "Clima fresco di montagna (portare giacca leggera/antipioggia)" }
          ],
          de: [
            { icon: "fas fa-tree", label: "Fläche", value: "18.200 Hektar geschützter Regenwald" },
            { icon: "fas fa-feather-pointed", label: "Tierwelt", value: "8 Lemurenarten, 75 Vogelarten, Zwergchamäleons" },
            { icon: "fas fa-temperature-half", label: "Klima", value: "Angenehm kühles Bergklima (leichte Jacke/Regenschutz mitnehmen)" }
          ],
          es: [
            { icon: "fas fa-tree", label: "Superficie", value: "18.200 hectáreas de selva tropical protegida" },
            { icon: "fas fa-feather-pointed", label: "Fauna", value: "8 especies de lémures, 75 especies de aves, camaleones enanos" },
            { icon: "fas fa-temperature-half", label: "Clima", value: "Clima fresco de montaña (llevar chaqueta ligera/impermeable)" }
          ]
        },
        tips: {
          fr: [
            "Partez tôt le matin avec un guide pour maximiser les chances d'observer les caméléons minuscules Brookesia.",
            "Prévoyez de bonnes chaussures de marche et une veste imperméable.",
            "Faites une pause gourmande dans le village historique de Joffreville."
          ],
          en: [
            "Start early in the morning with a guide to spot the tiny Brookesia leaf chameleons.",
            "Wear sturdy walking shoes and bring a lightweight waterproof jacket.",
            "Enjoy a pleasant break in the historic colonial village of Joffreville."
          ],
          it: [
            "Iniziate presto con la guida per avvistare i minuscoli camaleonti foglia Brookesia.",
            "Indossate scarpe da trekking e portate una giacca impermeabile.",
            "Fate una sosta nel villaggio coloniale di Joffreville."
          ],
          de: [
            "Früh morgens mit Guide starten, um die winzigen Brookesia-Zwergchamäleons zu sehen.",
            "Feste Wanderschuhe und eine wetterfeste Jacke einpacken.",
            "Gönnen Sie sich eine Pause im Kolonialdorf Joffreville."
          ],
          es: [
            "Salga temprano con un guía para tener mayores probabilidades de ver los diminutos camaleones Brookesia.",
            "Lleve calzado adecuado para caminar y una chaqueta impermeable.",
            "Aproveche para visitar el histórico pueblo de Joffreville."
          ]
        },
        images: [
          { url: diegoMontagneAmbre, caption: "Forêt primaire de la Montagne d'Ambre" },
          { url: diegoImg5, caption: "Cascade et végétation luxuriante" },
          { url: diegoImg19, caption: "Sentier de découverte du Parc National" }
        ]
      },
      {
        id: "tsingy-rouges",
        rating: "4.9",
        name: {
          fr: "Les Tsingy Rouges",
          en: "Red Tsingy",
          it: "I Tsingy Rossi",
          de: "Die Roten Tsingy",
          es: "Los Tsingy Rojos"
        },
        badge: {
          fr: "Paysage féerique",
          en: "Fairytale Landscape",
          it: "Paesaggio fiabesco",
          de: "Märchenhafte Landschaft",
          es: "Paisaje de ensueño"
        },
        location: {
          fr: "Irodo, 50 km au sud de Diego",
          en: "Irodo, 50 km south of Diego",
          it: "Irodo, 50 km a sud di Diego",
          de: "Irodo, 50 km südlich von Diego",
          es: "Irodo, a 50 km al sur de Diego"
        },
        description: {
          fr: "Un chef-d'œuvre géologique éphémère sculpté dans la latérite et le grès. Ces aiguilles d'un rouge flamboyant offrent un spectacle visuel unique au monde.",
          en: "An ephemeral geological masterpiece carved from laterite clay and sandstone. These fiery red needles offer a one-of-a-kind visual wonder.",
          it: "Un capolavoro geologico effimero scolpito nell'argilla lateritica e arenaria. Queste guglie rosso fiammante offrono uno spettacolo visivo unico al mondo.",
          de: "Ein vergängliches geologisches Meisterwerk aus Laterit und Sandstein. Diese flammend roten Nadeln bieten ein weltweit einzigartiges Naturschauspiel.",
          es: "Una obra maestra geológica esculpida en laterita y arenisca. Estas agujas de un rojo vibrante ofrecen un espectáculo visual único en el mundo."
        },
        history: {
          fr: "Formés par l'érosion des pluies et du vent sur les strates sédimentaires, les Tsingy Rouges évoluent continuellement au fil des saisons.",
          en: "Formed by rainwater and wind erosion carving through sedimentary layers, the Red Tsingy constantly evolve across seasons.",
          it: "Creati dall'erosione di pioggia e vento sugli strati sedimentari, i Tsingy Rossi cambiano continuamente con il passare delle stagioni.",
          de: "Durch Regen- und Winderosion in den Sedimentschichten entstanden, verändern sich die Roten Tsingy kontinuierlich im Laufe der Jahreszeiten.",
          es: "Formados por la erosión de las lluvias y el viento en estratos sedimentarios, los Tsingy Rojos evolucionan continuamente con las estaciones."
        },
        quote: {
          fr: "On croirait marcher dans une cathédrale d'argile bâtie par la pluie.",
          en: "It feels like stepping into a natural clay cathedral sculpted by the rain.",
          it: "Sembra di camminare in una cattedrale d'argilla scolpita dalla pioggia.",
          de: "Es fühlt sich an wie in einer Kathedrale aus rotem Lehm, geformt vom Regen.",
          es: "Parece caminar por una catedral de arcilla esculpida por la lluvia."
        },
        quoteAuthor: {
          fr: "Photographe de voyage",
          en: "Travel Photographer",
          it: "Fotografo di viaggio",
          de: "Reisefotograf",
          es: "Fotógrafo de viajes"
        },
        events: {
          fr: [
            { title: "Lumière dorée de fin de journée", description: "Les couleurs rouges et ocres s'embrasent sous les rayons du soleil couchant." },
            { title: "Descente dans le canyon", description: "Parcourez le lit sablonneux du canyon pour admirer les pitons d'argile de près." }
          ],
          en: [
            { title: "Golden Afternoon Light", description: "The deep red and ochre colors glow vividly under late afternoon sunlight." },
            { title: "Canyon Descent", description: "Walk through the sandy canyon riverbed to admire the clay pinnacles up close." }
          ],
          it: [
            { title: "Luce dorata del tardo pomeriggio", description: "I colori rosso e ocra si accendono sotto i raggi del sole calante." },
            { title: "Discesa nel canyon", description: "Camminate sul fondo sabbioso del canyon per ammirare i pinnacoli da vicino." }
          ],
          de: [
            { title: "Goldenes Nachmittagslicht", description: "Die roten und ockerfarbenen Töne leuchten im späten Sonnenlicht intensiv auf." },
            { title: "Abstieg in den Canyon", description: "Spazieren Sie durch das sandige Flussbett, um die Spitzen aus der Nähe zu bewundern." }
          ],
          es: [
            { title: "Luz dorada de la tarde", description: "Los colores rojos y ocres resplandecen bajo los rayos del atardecer." },
            { title: "Descenso al cañón", description: "Camine por el lecho arenoso del cañón para admirar las formaciones de cerca." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-palette", label: "Couleurs", value: "Nuances intenses de rouge, pourpre, ocre et blanc" },
            { icon: "fas fa-truck-pickup", label: "Accès", value: "Accessible en 4x4 via une piste pittoresque (1h45)" },
            { icon: "fas fa-camera", label: "Photographie", value: "L'un des sites les plus photogéniques de Madagascar" }
          ],
          en: [
            { icon: "fas fa-palette", label: "Colors", value: "Vivid hues of deep red, crimson, ochre, and white" },
            { icon: "fas fa-truck-pickup", label: "Access", value: "Accessible by 4x4 through scenic countryside tracks (1h45)" },
            { icon: "fas fa-camera", label: "Photography", value: "One of the most photogenic spots in Madagascar" }
          ],
          it: [
            { icon: "fas fa-palette", label: "Colori", value: "Sfumature intense di rosso, cremisi, ocra e bianco" },
            { icon: "fas fa-truck-pickup", label: "Accesso", value: "Raggiungibile in 4x4 tramite pista panoramica (1h45)" },
            { icon: "fas fa-camera", label: "Fotografia", value: "Uno dei luoghi più fotogenici di tutto il Madagascar" }
          ],
          de: [
            { icon: "fas fa-palette", label: "Farben", value: "Intensive Nuancen von Rot, Purpur, Ocker und Weiß" },
            { icon: "fas fa-truck-pickup", label: "Anreise", value: "Mit dem 4x4 über eine malerische Piste erreichbar (1h45)" },
            { icon: "fas fa-camera", label: "Fotografie", value: "Einer der fotogensten Orte auf ganz Madagaskar" }
          ],
          es: [
            { icon: "fas fa-palette", label: "Colores", value: "Intensas tonalidades de rojo, carmesí, ocre y blanco" },
            { icon: "fas fa-truck-pickup", label: "Acceso", value: "Accesible en 4x4 a través de una pintoresca pista (1h45)" },
            { icon: "fas fa-camera", label: "Fotografía", value: "Uno de los sitios más fotogénicos de Madagascar" }
          ]
        },
        tips: {
          fr: [
            "Ne touchez pas les aiguilles : la latérite est extrêmement friable.",
            "Combinez la visite avec la Montagne d'Ambre ou l'Ankarana.",
            "Emportez chapeau et crème solaire, la réverbération dans le canyon est forte."
          ],
          en: [
            "Do not touch the fragile pinnacles: the laterite clay is very delicate.",
            "Combine this trip with Amber Mountain or Ankarana National Park.",
            "Bring a sun hat and sunscreen as sunlight reflects strongly in the canyon."
          ],
          it: [
            "Non toccate le guglie: l'argilla lateritica è estremamente fragile.",
            "Combinate la visita con la Montagna d'Ambra o l'Ankarana.",
            "Portate cappello e crema solare per via del riverbero nel canyon."
          ],
          de: [
            "Nadeln nicht berühren: Der Laterit-Sandstein ist äußerst empfindlich.",
            "Ideal kombinierbar mit der Montagne d'Ambre oder dem Ankarana-Park.",
            "Sonnenhut und Sonnenschutz mitnehmen, die Wärme staut sich im Canyon."
          ],
          es: [
            "No toque las formaciones: la arcilla laterítica es muy quebradiza.",
            "Combine la visita con la Montaña de Ámbar o el Parque Ankarana.",
            "Lleve sombrero y protector solar, el calor se concentra en el cañón."
          ]
        },
        images: [
          { url: diegoTsingyRouges, caption: "Les Tsingy Rouges d'Irodo" },
          { url: diegoImg8, caption: "Pinnacles d'argile sculptés" }
        ]
      },
      {
        id: "ankarana",
        rating: "4.9",
        name: {
          fr: "Parc National de l'Ankarana",
          en: "Ankarana National Park",
          it: "Parco Nazionale dell'Ankarana",
          de: "Ankarana Nationalpark",
          es: "Parque Nacional de Ankarana"
        },
        badge: {
          fr: "Tsingy calcaires & Grottes",
          en: "Limestone Tsingy & Caves",
          it: "Tsingy calcarei & Grotte",
          de: "Kalkstein-Tsingy & Höhlen",
          es: "Tsingy calcáreos & Cuevas"
        },
        location: {
          fr: "Mahamasina, 100 km au sud de Diego",
          en: "Mahamasina, 100 km south of Diego",
          it: "Mahamasina, 100 km a sud di Diego",
          de: "Mahamasina, 100 km südlich von Diego",
          es: "Mahamasina, a 100 km al sur de Diego"
        },
        description: {
          fr: "Une spectaculaire forteresse calcaire karstique abritant d'impressionnantes forêts de pierre acérée (Tsingy gris), des grottes sacrées et des rivières souterraines.",
          en: "A dramatic karst limestone fortress featuring sharp grey stone forests (Tsingy), sacred underground caves, and subterranean rivers.",
          it: "Una spettacolare fortezza calcarea carsica con imponenti foreste di pietra affilata (Tsingy grigi), grotte sacre e fiumi sotterranei.",
          de: "Eine spektakuläre Karstkalk-Festung mit scharfen grauen Steinwäldern (Tsingy), heiligen Höhlen und unterirdischen Flüssen.",
          es: "Una espectacular fortaleza kárstica con impresionantes bosques de piedra afilada (Tsingy grises), cuevas sagradas y ríos subterráneos."
        },
        history: {
          fr: "Refuge historique du peuple royal Antakarana face aux guerres du XIXe siècle, les grottes abritent encore des sépultures royales sacrées régies par de stricts fady.",
          en: "A historic sanctuary where the Antakarana royal people sought refuge during 19th-century conflicts; the caves still house sacred royal tombs.",
          it: "Rifugio storico del popolo reale Antakarana durante le guerre del XIX secolo, le grotte custodiscono ancora tombe reali sacre.",
          de: "Historischer Zufluchtsort des königlichen Antakarana-Volkes im 19. Jahrhundert; die Höhlen beherbergen bis heute heilige Königsgräber.",
          es: "Refugio histórico del pueblo real Antakarana durante los conflictos del siglo XIX; las cuevas albergan tumbas reales sagradas."
        },
        quote: {
          fr: "Une forteresse minérale imprenable où la nature et l'histoire se confondent.",
          en: "An impregnable mineral fortress where nature and history become one.",
          it: "Un'inespugnabile fortezza minerale dove natura e storia si fondono.",
          de: "Eine uneinnehmbare Felsenfestung, in der Natur und Geschichte verschmelzen.",
          es: "Una fortaleza mineral inexpugnable donde la naturaleza y la historia se unen."
        },
        quoteAuthor: {
          fr: "Guide traditionnel Antakarana",
          en: "Antakarana Traditional Guide",
          it: "Guida tradizionale Antakarana",
          de: "Traditioneller Antakarana-Guide",
          es: "Guía tradicional Antakarana"
        },
        events: {
          fr: [
            { title: "Traversée des passerelles suspendues", description: "Passez au-dessus des failles calcaires sur des ponts de singe spectaculaires." },
            { title: "Exploration des grottes sacrées", description: "Découvrez stalactites géantes, chauves-souris et sanctuaires ancestraux à la lampe torche." }
          ],
          en: [
            { title: "Suspension Bridges Crossing", description: "Walk over deep limestone chasms on thrilling suspension footbridges." },
            { title: "Sacred Caves Exploration", description: "Discover giant stalactites, bat colonies, and ancestral shrines with headlamps." }
          ],
          it: [
            { title: "Attraversamento dei ponti sospesi", description: "Camminate sopra i canyon calcarei su spettacolari ponti sospesi." },
            { title: "Esplorazione delle grotte sacre", description: "Scoprite stalattiti giganti, colonie di pipistrelli e santuari ancestrali." }
          ],
          de: [
            { title: "Hängebrücken-Überquerung", description: "Überqueren Sie tiefe Kalksteinschluchten auf spektakulären Hängebrücken." },
            { title: "Erkundung der heiligen Höhlen", description: "Entdecken Sie riesige Tropfsteine, Fledermäuse und uralte Heiligtümer mit Taschenlampen." }
          ],
          es: [
            { title: "Cruce de puentes colgantes", description: "Camine sobre profundas grietas calcáreas en espectaculares puentes colgantes." },
            { title: "Exploración de cuevas sagradas", description: "Descubra estalactitas gigantes, murciélagos y santuarios ancestrales con linterna." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-mountain", label: "Géologie", value: "Massif jurassique calcaire érodé de plus de 150 millions d'années" },
            { icon: "fas fa-paw", label: "Faune", value: "Lémuriens couronnés, chauves-souris, mangoustes, caméléons" },
            { icon: "fas fa-shoe-prints", label: "Randonnée", value: "Circuits de 2h à la journée complète (bonne condition physique)" }
          ],
          en: [
            { icon: "fas fa-mountain", label: "Geology", value: "Eroded Jurassic limestone massif over 150 million years old" },
            { icon: "fas fa-paw", label: "Wildlife", value: "Crowned lemurs, bats, ring-tailed mongooses, chameleons" },
            { icon: "fas fa-shoe-prints", label: "Trekking", value: "Circuits from 2h to full day (moderate fitness recommended)" }
          ],
          it: [
            { icon: "fas fa-mountain", label: "Geologia", value: "Massiccio calcareo giurassico eroso di oltre 150 milioni di anni" },
            { icon: "fas fa-paw", label: "Fauna", value: "Lemuri coronati, pipistrelli, manguste, camaleonti" },
            { icon: "fas fa-shoe-prints", label: "Trekking", value: "Percorsi da 2 ore a giornata intera (buona forma fisica)" }
          ],
          de: [
            { icon: "fas fa-mountain", label: "Geologie", value: "Über 150 Millionen Jahre altes erodiertes Jura-Kalksteinmassiv" },
            { icon: "fas fa-paw", label: "Tierwelt", value: "Kronenlemuren, Fledermäuse, Madagaskar-Mangusten, Chamäleons" },
            { icon: "fas fa-shoe-prints", label: "Wandern", value: "Routen von 2 Std. bis Ganztagestouren (gute Kondition empfohlen)" }
          ],
          es: [
            { icon: "fas fa-mountain", label: "Geología", value: "Macizo calizo jurásico erosionado de más de 150 millones de años" },
            { icon: "fas fa-paw", label: "Fauna", value: "Lémures coronados, murciélagos, mangostas, camaleones" },
            { icon: "fas fa-shoe-prints", label: "Senderismo", value: "Rutas de 2 horas a jornada completa (buena condición física)" }
          ]
        },
        tips: {
          fr: [
            "Munissez-vous d'une bonne lampe frontale pour la visite des grottes.",
            "Portez des chaussures de randonnée rigides à semelles épaisses (le calcaire est coupant).",
            "Respectez scrupuleusement les fady (tabous locaux) indiqués par votre guide."
          ],
          en: [
            "Bring a powerful headlamp or flashlight for exploring the dark cave chambers.",
            "Wear sturdy hiking shoes with thick soles (the limestone edges are very sharp).",
            "Respect local fady (cultural taboos) explained by your licensed guide."
          ],
          it: [
            "Munitevi di una buona torcia frontale per visitare le grotte.",
            "Indossate scarpe da trekking robuste con suola spessa (il calcare è tagliente).",
            "Rispettate rigorosamente i fady (tabù locali) indicati dalla vostra guida."
          ],
          de: [
            "Bringen Sie eine helle Stirnlampe für die Höhlenbesichtigung mit.",
            "Feste Wanderschuhe mit dicker Sohle tragen (der Kalkstein ist rasiermesserscharf).",
            "Beachten Sie unbedingt die lokalen Fady (Traditionelle Tabus), die Ihr Guide erklärt."
          ],
          es: [
            "Lleve una linterna frontal potente para la visita a las cuevas.",
            "Use calzado resistente de senderismo con suela gruesa (la roca caliza es muy afilada).",
            "Respete escrupulosamente los fady (tabúes locales) indicados por el guía."
          ]
        },
        images: [
          { url: diegoImg6, caption: "Tsingy calcaires de l'Ankarana" },
          { url: diegoImg7, caption: "Canyons et formations karstiques uniques" }
        ]
      }
    ]
  },
  hiking: {
    title: {
      fr: "Points de vue, Randonnées & Curiosités",
      en: "Viewpoints, Hikes & Landmarks",
      it: "Punti panoramici, Escursioni & Curiosità",
      de: "Aussichtspunkte, Wanderungen & Highlights",
      es: "Miradores, Senderismo & Curiosidades"
    },
    icon: "fas fa-hiking",
    description: {
      fr: "Des sommets panoramiques aux îles sacrées, des aventures inoubliables",
      en: "From panoramic peaks to sacred islands, unforgettable adventures",
      it: "Dai picchi panoramici alle isole sacre, avventure indimenticabili",
      de: "Von Panorama-Gipfeln bis zu heiligen Inseln, unvergessliche Abenteuer",
      es: "Desde cumbres panorámicas hasta islas sagradas, aventuras inolvidables"
    },
    places: [
      {
        id: "montagne-francais",
        rating: "4.8",
        name: {
          fr: "La Montagne des Français",
          en: "French Mountain",
          it: "La Montagna dei Francesi",
          de: "Montagne des Français",
          es: "La Montaña de los Franceses"
        },
        badge: {
          fr: "Randonnée & Vue 360°",
          en: "Hike & 360° View",
          it: "Trekking & Vista 360°",
          de: "Wanderung & 360°-Blick",
          es: "Senderismo & Vista 360°"
        },
        location: {
          fr: "Entre Diego et Ramena",
          en: "Between Diego and Ramena",
          it: "Tra Diego e Ramena",
          de: "Zwischen Diego und Ramena",
          es: "Entre Diego y Ramena"
        },
        description: {
          fr: "Un massif calcaire culminant à plus de 400 m, couvert de baobabs endémiques d'Andasonia suarezensis et offrant un panorama exceptionnel sur toute la baie.",
          en: "A limestone massif rising over 400 m, dotted with rare endemic Adansonia suarezensis baobabs and granting a 360° panorama over Diego Bay.",
          it: "Un massiccio calcareo che supera i 400 m, ricoperto di baobab endemici e con un panorama eccezionale su tutta la baia.",
          de: "Ein über 400 m hohes Kalkmassiv, bewachsen mit seltenen Baobabs, mit atemberaubendem Rundumblick über die gesamte Bucht.",
          es: "Un macizo calizo de más de 400 m, cubierto de baobabs endémicos y con una vista panorámica excepcional de toda la bahía."
        },
        history: {
          fr: "Site de batailles historiques durant la Seconde Guerre mondiale en 1942, le sommet conserve d'anciens tunnels, grottes et postes militaires fortifiés.",
          en: "Site of historic military clashes during World War II in 1942, its summit preserves former tunnels, caves, and fortified outposts.",
          it: "Sito di scontri storici durante la Seconda Guerra Mondiale nel 1942, conserva antichi tunnel e postazioni militari fortificate.",
          de: "Schauplatz historischer Gefechte während des 2. Weltkriegs (1942); der Gipfel birgt noch alte Tunnel, Höhlen und Festungsreste.",
          es: "Lugar de batallas históricas durante la Segunda Guerra Mundial en 1942, la cima conserva antiguos túneles y fortificaciones militares."
        },
        quote: {
          fr: "Du haut de la Montagne des Français, l'histoire et la beauté se rencontrent.",
          en: "From the heights of French Mountain, history and pure beauty meet.",
          it: "Dall'alto della Montagna dei Francesi, la storia e la bellezza si incontrano.",
          de: "Vom Gipfel der Montagne des Français begegnen sich Geschichte und pure Schönheit.",
          es: "Desde lo alto de la Montaña de los Franceses, la historia y la belleza se unen."
        },
        quoteAuthor: {
          fr: "Historien malgache",
          en: "Malagasy Historian",
          it: "Storico malgascio",
          de: "Madagassischer Historiker",
          es: "Historiador malgache"
        },
        events: {
          fr: [
            { title: "Randonnée au lever du soleil", description: "Départ à l'aube pour gravir le chemin de croix ombragé et admirer les baobabs sculpturaux." },
            { title: "Escalade et voies aménagées", description: "Plusieurs secteurs équipés pour l'escalade sur calcaire de renommée internationale." }
          ],
          en: [
            { title: "Sunrise Trek", description: "Early morning climb along the shaded path to admire the iconic Adansonia baobab silhouettes." },
            { title: "Rock Climbing", description: "International standard limestone rock climbing routes available for climbers of all levels." }
          ],
          it: [
            { title: "Trekking all'alba", description: "Partenza all'alba per salire lungo il sentiero ombreggiato e ammirare i maestosi baobab." },
            { title: "Arrampicata su roccia", description: "Diversi settori attrezzati per l'arrampicata su calcare di livello internazionale." }
          ],
          de: [
            { title: "Wanderung zum Sonnenaufgang", description: "Früher Aufstieg im kühlen Schatten mit unvergesslichem Blick auf majestätische Baobabs." },
            { title: "Klettern", description: "Mehrere international bekannte Kletterrouten im griffigen Kalkstein." }
          ],
          es: [
            { title: "Senderismo al amanecer", description: "Salida al amanecer para subir por el sendero sombreado y contemplar los emblemáticos baobabs." },
            { title: "Escalada en roca", description: "Varias vías equipadas para escalada en roca caliza de renombre internacional." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-mountain", label: "Altitude", value: "412 mètres au-dessus du niveau de la mer" },
            { icon: "fas fa-tree", label: "Flore", value: "Baobabs endémiques Adansonia suarezensis et aloès sauvages" },
            { icon: "fas fa-clock", label: "Durée", value: "Environ 2h30 à 3h de marche aller-retour" }
          ],
          en: [
            { icon: "fas fa-mountain", label: "Altitude", value: "412 meters above sea level" },
            { icon: "fas fa-tree", label: "Flora", value: "Endemic Adansonia suarezensis baobabs and wild aloes" },
            { icon: "fas fa-clock", label: "Duration", value: "Approx. 2.5 to 3 hours round-trip hike" }
          ],
          it: [
            { icon: "fas fa-mountain", label: "Altitudine", value: "412 metri sul livello del mare" },
            { icon: "fas fa-tree", label: "Flora", value: "Baobab endemici Adansonia suarezensis e aloe selvatiche" },
            { icon: "fas fa-clock", label: "Durata", value: "Circa 2,5 - 3 ore di cammino andata/ritorno" }
          ],
          de: [
            { icon: "fas fa-mountain", label: "Höhe", value: "412 Meter über dem Meeresspiegel" },
            { icon: "fas fa-tree", label: "Flora", value: "Endemische Baobabs (Adansonia suarezensis) und wilde Aloen" },
            { icon: "fas fa-clock", label: "Dauer", value: "Ca. 2,5 bis 3 Stunden Wanderung hin und zurück" }
          ],
          es: [
            { icon: "fas fa-mountain", label: "Altitud", value: "412 metros sobre el nivel del mar" },
            { icon: "fas fa-tree", label: "Flora", value: "Baobabs endémicos Adansonia suarezensis y aloes silvestres" },
            { icon: "fas fa-clock", label: "Duración", value: "Aproximadamente 2,5 a 3 horas ida y vuelta" }
          ]
        },
        tips: {
          fr: [
            "Partez avant 7h du matin pour éviter la forte chaleur sur la roche.",
            "Emportez au moins 1,5L d'eau par personne et de bonnes chaussures adhérentes.",
            "Prenez le temps d'observer les oiseaux et les baobabs géants sur le sentier."
          ],
          en: [
            "Start before 7 AM to beat the tropical heat on the exposed rocks.",
            "Bring at least 1.5L of water per person and shoes with good grip.",
            "Look out for endemic birdlife and majestic giant baobabs along the ascent."
          ],
          it: [
            "Partite prima delle 7 del mattino per evitare il forte caldo sulle rocce.",
            "Portate almeno 1,5 litri di acqua a persona e scarpe con ottima aderenza.",
            "Ammirate la vista sui baobab giganti lungo tutto il percorso."
          ],
          de: [
            "Vor 7:00 Uhr morgens aufbrechen, um der Mittagshitze auf den Felsen zu entgehen.",
            "Mindestens 1,5 Liter Wasser pro Person und griffige Wanderschuhe mitbringen.",
            "Halten Sie Ausschau nach Vögeln und uralten Riesenbaobabs am Wegesrand."
          ],
          es: [
            "Empiece antes de las 7:00 para evitar el calor intenso sobre la roca.",
            "Lleve al menos 1,5L de agua por persona y calzado con buen agarre.",
            "Tómese el tiempo para admirar los baobabs gigantes a lo largo del sendero."
          ]
        },
        images: [
          { url: diegoImg9, caption: "Vue depuis le sommet de la Montagne des Français" },
          { url: diegoImg10, caption: "Sentier calcaire et baobabs" },
          { url: diegoImg11, caption: "Panorama sur la baie de Diégo-Suarez" }
        ]
      },
      {
        id: "pain-sucre",
        rating: "4.7",
        name: {
          fr: "Le Pain de Sucre (Nosy Lonjo)",
          en: "Sugarloaf Island (Nosy Lonjo)",
          it: "Il Pan di Zucchero (Nosy Lonjo)",
          de: "Der Zuckerhut (Nosy Lonjo)",
          es: "El Pan de Azúcar (Nosy Lonjo)"
        },
        badge: {
          fr: "Îlot sacré",
          en: "Sacred Islet",
          it: "Isolotto sacro",
          de: "Heilige Insel",
          es: "Islote sagrado"
        },
        location: {
          fr: "Baie des Français, Diégo",
          en: "French Bay, Diego",
          it: "Baia dei Francesi, Diego",
          de: "Franzosenbucht, Diego",
          es: "Bahía de los Franceses, Diego"
        },
        description: {
          fr: "Un îlot pyramidal d'origine volcanique surgissant au milieu de la mer, emblème géographique absolu d'Antsiranana et haut lieu spirituel Antakarana.",
          en: "A striking volcanic pyramid rising straight out of the bay, iconic symbol of Antsiranana and sacred sanctuary for the Antakarana people.",
          it: "Un isolotto piramidale di origine vulcanica che sorge in mezzo alla baia, simbolo iconico di Antsiranana e luogo spirituale Antakarana.",
          de: "Eine markante Vulkanpyramide mitten in der Bucht, das weltberühmte Wahrzeichen von Antsiranana und spiritueller Ort der Antakarana.",
          es: "Un islote piramidal de origen volcánico que emerge en medio de la bahía, emblema indiscutible de Antsiranana y lugar sagrado Antakarana."
        },
        history: {
          fr: "Considéré comme sacré, cet îlot est protégé par des fady stricts. Il accueille des rites traditionnels d'invocation des ancêtres royaux.",
          en: "Revered as sacred, this islet is protected by strict cultural rules (fady). Traditional rituals and ancestral ceremonies are held here.",
          it: "Ritenuto sacro, questo isolotto è protetto da rigidi fady. Ospita cerimonie tradizionali di invocazione degli antenati reali.",
          de: "Als heilig verehrt, ist diese Felsinsel durch strenge Fady geschützt und dient traditionellen Zeremonien zur Ehrung der Ahnen.",
          es: "Considerado sagrado, este islote está protegido por estrictos fady. Alberga ceremonias tradicionales en honor a los ancestros reales."
        },
        quote: {
          fr: "L'âme protectrice de la baie de Diego veille depuis ce cône de pierre.",
          en: "The guardian soul of Diego Bay stands watch from this solitary stone cone.",
          it: "L'anima protettrice della baia di Diego veglia da questo cono di pietra.",
          de: "Die schützende Seele der Bucht von Diego wacht von diesem Felskegel aus.",
          es: "El alma protectora de la bahía de Diego vigila desde este cono de piedra."
        },
        quoteAuthor: {
          fr: "Légende Antakarana",
          en: "Antakarana Legend",
          it: "Leggenda Antakarana",
          de: "Antakarana Legende",
          es: "Leyenda Antakarana"
        },
        events: {
          fr: [
            { title: "Contemplation depuis la côte", description: "Admirez le Pain de Sucre depuis la route de Ramena ou lors de la traversée en bateau." },
            { title: "Coucher de soleil sur la baie", description: "Le Pain de Sucre se découpe en ombre chinoise sur des ciels crépusculaires flamboyants." }
          ],
          en: [
            { title: "Coastal Scenic Viewpoints", description: "Admire Sugarloaf Island from the scenic coastal road to Ramena or during boat crossings." },
            { title: "Sunset Silhouette", description: "Watch the Sugarloaf form a dramatic black silhouette against flaming sunset skies." }
          ],
          it: [
            { title: "Vista panoramica dalla costa", description: "Ammirate il Pan di Zucchero dalla strada per Ramena o in navigazione." },
            { title: "Tramonto sulla baia", description: "Il Pan di Zucchero si staglia come sagoma suggestiva su cieli infuocati." }
          ],
          de: [
            { title: "Aussicht von der Küstenstraße", description: "Bestaunen Sie den Zuckerhut von der Ramena-Straße aus oder vom Boot." },
            { title: "Sonnenuntergang in der Bucht", description: "Der Zuckerhut zeichnet sich als dramatische Silhouette am Abendhimmel ab." }
          ],
          es: [
            { title: "Vistas desde la costa", description: "Admire el Pan de Azúcar desde la carretera de Ramena o en barco." },
            { title: "Atardecer en la bahía", description: "El Pan de Azúcar recorta su silueta contra los intensos colores del crepúsculo." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-volcano", label: "Origine", value: "Formation volcanique érodée en forme de pain de sucre" },
            { icon: "fas fa-shield-halved", label: "Statut", value: "Site sacré (accès réglementé et respect des traditions)" }
          ],
          en: [
            { icon: "fas fa-volcano", label: "Origin", value: "Volcanic cone sculpted by millennia of marine erosion" },
            { icon: "fas fa-shield-halved", label: "Status", value: "Sacred sanctuary (strictly regulated landing, respect local customs)" }
          ],
          it: [
            { icon: "fas fa-volcano", label: "Origine", value: "Formazione vulcanica conica erosa dal mare" },
            { icon: "fas fa-shield-halved", label: "Status", value: "Sito sacro (accesso regolamentato e rispetto delle tradizioni)" }
          ],
          de: [
            { icon: "fas fa-volcano", label: "Ursprung", value: "Vulkankegel, durch jahrtausendelange Meereserosion geformt" },
            { icon: "fas fa-shield-halved", label: "Status", value: "Heiliger Ort (Betreten streng geregelt, lokale Traditionen achten)" }
          ],
          es: [
            { icon: "fas fa-volcano", label: "Origen", value: "Formación volcánica cónica erosionada por el mar" },
            { icon: "fas fa-shield-halved", label: "Estatus", value: "Sitio sagrado (acceso regulado y respeto de tradiciones)" }
          ]
        },
        tips: {
          fr: [
            "Le meilleur angle photo se trouve sur la route panoramique reliant Diego à Ramena.",
            "Respectez le caractère sacré : il est interdit d'y débarquer sans autorisation traditionnelle."
          ],
          en: [
            "The top photo angle is from the scenic coastal road between Diego and Ramena.",
            "Respect its sacred nature: landing on the islet is forbidden without traditional permission."
          ],
          it: [
            "La migliore angolazione fotografica è lungo la litoranea panoramica Diego-Ramena.",
            "Rispettate la sacralità: è vietato sbarcare senza autorizzazioni tradizionali."
          ],
          de: [
            "Der beste Fotopunkt liegt an der Panoramastraße zwischen Diego und Ramena.",
            "Heiligen Status respektieren: Betreten ohne traditionelle Genehmigung untersagt."
          ],
          es: [
            "El mejor punto fotográfico está en la carretera panorámica entre Diego y Ramena.",
            "Respete su carácter sagrado: está prohibido desembarcar sin autorización tradicional."
          ]
        },
        images: [
          { url: diegoImg12, caption: "Nosy Lonjo — Le Pain de Sucre" },
          { url: diegoImg13, caption: "Eaux turquoise autour du Pain de Sucre" },
          { url: diegoImg9, caption: "Vue panoramique sur l'îlot sacré" }
        ]
      },
      {
        id: "cap-mine",
        rating: "4.6",
        name: {
          fr: "Le Cap Miné",
          en: "Cap Miné",
          it: "Cap Miné",
          de: "Cap Miné",
          es: "Cap Miné"
        },
        badge: {
          fr: "Site militaire historique",
          en: "Historic Military Site",
          it: "Sito militare storico",
          de: "Historischer Militärstandort",
          es: "Sitio militar histórico"
        },
        location: {
          fr: "Près d'Orangea, nord de Ramena",
          en: "Near Orangea, north of Ramena",
          it: "Vicino a Orangea, nord di Ramena",
          de: "Bei Orangea, nördlich von Ramena",
          es: "Cerca de Orangea, norte de Ramena"
        },
        description: {
          fr: "Situé à proximité de la plage d'Orangea, le Cap Miné est un site militaire historique de l'époque coloniale française. Il offre une vue magnifique sur l'entrée de la grande passe et l'immensité de l'océan Indien.",
          en: "Located near Orangea Beach, Cap Miné is a historic military site from the French colonial era. It offers a breathtaking view over the entrance to the great bay passage and the vast expanse of the Indian Ocean.",
          it: "Situato vicino alla spiaggia di Orangea, il Cap Miné è un sito militare storico dell'era coloniale francese. Offre una magnifica vista sull'ingresso della grande passe e sull'immensità dell'Oceano Indiano.",
          de: "In der Nähe des Strandes von Orangea gelegen, ist Cap Miné ein historischer Militärstandort aus der französischen Kolonialzeit. Er bietet einen atemberaubenden Blick auf den Eingang zur großen Durchfahrt und die Weite des Indischen Ozeans.",
          es: "Ubicado cerca de la playa de Orangea, el Cap Miné es un sitio militar histórico de la época colonial francesa. Ofrece una vista impresionante sobre la entrada de la gran passe y la inmensidad del Océano Índico."
        },
        history: {
          fr: "Fortifié au début du XXe siècle pour contrôler l'entrée de la baie, le Cap Miné fut l'un des points de défense stratégique de la base navale française d'Antsiranana durant les deux guerres mondiales.",
          en: "Fortified in the early 20th century to control the bay's entrance, Cap Miné was one of the strategic defense positions of the French naval base of Antsiranana during both World Wars.",
          it: "Fortificato all'inizio del XX secolo per controllare l'ingresso della baia, il Cap Miné fu uno dei punti di difesa strategica della base navale francese di Antsiranana durante le due guerre mondiali.",
          de: "Zu Beginn des 20. Jahrhunderts befestigt, um den Zugang zur Bucht zu kontrollieren, war Cap Miné einer der strategischen Verteidigungspunkte des französischen Marinestützpunkts Antsiranana in beiden Weltkriegen.",
          es: "Fortificado a principios del siglo XX para controlar la entrada de la bahía, el Cap Miné fue uno de los puntos de defensa estratégica de la base naval francesa de Antsiranana durante las dos guerras mundiales."
        },
        quote: {
          fr: "Du haut du Cap Miné, la grande passe s'ouvre comme une porte entre deux mondes.",
          en: "From the heights of Cap Miné, the great passage opens like a doorway between two worlds.",
          it: "Dall'alto del Cap Miné, la grande passe si apre come una porta tra due mondi.",
          de: "Vom Cap Miné aus öffnet sich die große Durchfahrt wie ein Tor zwischen zwei Welten.",
          es: "Desde lo alto del Cap Miné, el gran paso se abre como una puerta entre dos mundos."
        },
        quoteAuthor: {
          fr: "Officier de marine, 1942",
          en: "Naval Officer, 1942",
          it: "Ufficiale di marina, 1942",
          de: "Marineoffizier, 1942",
          es: "Oficial de marina, 1942"
        },
        events: {
          fr: [
            { title: "Vue sur la grande passe", description: "Observez les navires entrant et sortant de la baie par l'unique passage maritime, véritable spectacle de navigation." },
            { title: "Exploration des fortifications", description: "Découvrez les vestiges de batteries de canons et de postes de guet de l'époque coloniale." },
            { title: "Panorama sur l'océan Indien", description: "Vue imprenable à 180° sur l'horizon de l'océan Indien depuis ce promontoire historique." }
          ],
          en: [
            { title: "View of the Great Bay Passage", description: "Watch ships entering and leaving the bay through the unique sea passage, a remarkable navigation spectacle." },
            { title: "Fortification Exploration", description: "Discover the remains of colonial cannon batteries and watchtower posts." },
            { title: "Indian Ocean Panorama", description: "A sweeping 180° view over the Indian Ocean horizon from this historic promontory." }
          ],
          it: [
            { title: "Vista sulla grande passe", description: "Osservate le navi entrare e uscire dalla baia attraverso l'unico passaggio marittimo, vero spettacolo di navigazione." },
            { title: "Esplorazione delle fortificazioni", description: "Scoprite i resti di batterie di cannoni e postazioni di guardia dell'epoca coloniale." },
            { title: "Panorama sull'Oceano Indiano", description: "Vista mozzafiato a 180° sull'orizzonte dell'Oceano Indiano da questo promontorio storico." }
          ],
          de: [
            { title: "Blick auf die große Durchfahrt", description: "Beobachten Sie Schiffe beim Ein- und Ausfahren durch den einzigen Meereskanal — ein beeindruckendes Schauspiel." },
            { title: "Erkundung der Befestigungen", description: "Entdecken Sie die Überreste kolonialer Kanonenbatterien und Wachposten." },
            { title: "Panorama über den Indischen Ozean", description: "Atemberaubender 180°-Blick auf den Horizont des Indischen Ozeans von diesem historischen Kap." }
          ],
          es: [
            { title: "Vista sobre el gran paso", description: "Observe los barcos entrando y saliendo de la bahía por el único paso marítimo, un espectáculo de navegación notable." },
            { title: "Exploración de las fortificaciones", description: "Descubra los restos de baterías de cañones y puestos de vigilancia de la época colonial." },
            { title: "Panorámica sobre el Océano Índico", description: "Impresionante vista de 180° sobre el horizonte del Océano Índico desde este promontorio histórico." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-shield-halved", label: "Période", value: "Site fortifié du début XXe siècle, actif pendant les deux guerres mondiales" },
            { icon: "fas fa-eye", label: "Vue", value: "Panorama exceptionnel sur la grande passe et l'océan Indien" },
            { icon: "fas fa-person-hiking", label: "Accès", value: "Accessible à pied depuis Orangea ou Ramena (terrain parfois escarpé)" }
          ],
          en: [
            { icon: "fas fa-shield-halved", label: "Period", value: "Fortified site from early 20th century, active during both World Wars" },
            { icon: "fas fa-eye", label: "View", value: "Exceptional panorama over the great bay passage and Indian Ocean" },
            { icon: "fas fa-person-hiking", label: "Access", value: "Accessible on foot from Orangea or Ramena (can be steep)" }
          ],
          it: [
            { icon: "fas fa-shield-halved", label: "Periodo", value: "Sito fortificato all'inizio del XX secolo, attivo durante le due guerre mondiali" },
            { icon: "fas fa-eye", label: "Vista", value: "Panorama eccezionale sulla grande passe e l'Oceano Indiano" },
            { icon: "fas fa-person-hiking", label: "Accesso", value: "Raggiungibile a piedi da Orangea o Ramena (talvolta ripido)" }
          ],
          de: [
            { icon: "fas fa-shield-halved", label: "Zeitraum", value: "Befestigter Standort aus dem frühen 20. Jh., aktiv in beiden Weltkriegen" },
            { icon: "fas fa-eye", label: "Aussicht", value: "Außergewöhnliches Panorama über die große Durchfahrt und den Indischen Ozean" },
            { icon: "fas fa-person-hiking", label: "Anreise", value: "Zu Fuß von Orangea oder Ramena erreichbar (stellenweise steil)" }
          ],
          es: [
            { icon: "fas fa-shield-halved", label: "Período", value: "Sitio fortificado de principios del siglo XX, activo durante las dos guerras mundiales" },
            { icon: "fas fa-eye", label: "Vista", value: "Panorámica excepcional sobre el gran paso y el Océano Índico" },
            { icon: "fas fa-person-hiking", label: "Acceso", value: "Accesible a pie desde Orangea o Ramena (puede ser empinado)" }
          ]
        },
        tips: {
          fr: [
            "Combinez la visite avec la plage d'Orangea en une seule demi-journée de randonnée côtière.",
            "Emportez des jumelles pour observer les navires passant par la grande passe.",
            "Partez tôt le matin pour éviter la chaleur et profiter de la meilleure lumière photo."
          ],
          en: [
            "Combine the visit with Orangea Beach in one half-day coastal hike.",
            "Bring binoculars to watch ships navigating through the great bay passage.",
            "Go early in the morning to avoid the heat and catch the best photo light."
          ],
          it: [
            "Combinate la visita con la spiaggia di Orangea in una sola mezza giornata di escursione costiera.",
            "Portate binocolo per osservare le navi che passano dalla grande passe.",
            "Partite la mattina presto per evitare il caldo e catturare la migliore luce fotografica."
          ],
          de: [
            "Kombinieren Sie den Besuch mit dem Orangea Strand für eine halbtägige Küstenwanderung.",
            "Fernglas mitbringen, um Schiffe in der großen Durchfahrt zu beobachten.",
            "Früh morgens starten für angenehmere Temperaturen und das beste Fotolicht."
          ],
          es: [
            "Combine la visita con la playa de Orangea en una sola excursión costera de medio día.",
            "Lleve prismáticos para observar los barcos navegando por el gran paso.",
            "Salga temprano por la mañana para evitar el calor y aprovechar la mejor luz fotográfica."
          ]
        },
        images: [
          { url: diegoImg17, caption: "Vue depuis le Cap Miné sur la grande passe" },
          { url: diegoImg16, caption: "Promontoire historique du Cap Miné" },
          { url: diegoImg18, caption: "Côte sauvage et panorama sur l'océan" }
        ]
      }
    ]
  },
  history: {
    title: {
      fr: "Histoire, Ville & Urbanisme",
      en: "History, City & Heritage",
      it: "Storia, Città & Patrimonio",
      de: "Geschichte, Stadt & Kulturerbe",
      es: "Historia, Ciudad & Patrimonio"
    },
    icon: "fas fa-landmark",
    description: {
      fr: "Architecture coloniale, culture Antakarana et patrimoine maritime",
      en: "Colonial architecture, Antakarana culture, and rich maritime heritage",
      it: "Architettura coloniale, cultura Antakarana e ricco patrimonio marittimo",
      de: "Kolonialarchitektur, Antakarana-Kultur und maritimes Erbe",
      es: "Arquitectura colonial, cultura Antakarana y patrimonio marítimo"
    },
    places: [
      {
        id: "centre-ville",
        rating: "4.6",
        name: {
          fr: "Centre-Ville & Architecture Coloniale",
          en: "Historic Center & Colonial Architecture",
          it: "Centro Storico & Architettura Coloniale",
          de: "Historisches Zentrum & Kolonialarchitektur",
          es: "Centro Histórico & Arquitectura Colonial"
        },
        badge: {
          fr: "Patrimoine & Culture",
          en: "Heritage & Culture",
          it: "Patrimonio & Cultura",
          de: "Kulturerbe",
          es: "Patrimonio & Cultura"
        },
        location: {
          fr: "Antsiranana Centre",
          en: "Antsiranana Center",
          it: "Centro di Antsiranana",
          de: "Zentrum von Antsiranana",
          es: "Centro de Antsiranana"
        },
        description: {
          fr: "Flânez dans les grandes avenues ombragées bordées de bâtiments coloniaux aux vérandas en fer forgé, découvrez les marchés aux épices et l'ambiance cosmopolite.",
          en: "Stroll along wide tree-lined avenues lined with historical colonial houses, wrought-iron verandas, vibrant spice markets, and a lively cosmopolitan atmosphere.",
          it: "Passeggiate lungo gli ampi viali ombreggiati con edifici coloniali d'epoca, verande in ferro battuto, mercati delle spezie e vivace atmosfera cosmopolita.",
          de: "Schlendern Sie durch schattige Alleen mit historischen Kolonialbauten, schmiedeeisernen Veranden, bunten Gewürzmärkten und weltoffener Atmosphäre.",
          es: "Pasee por amplias avenidas sombreadas con edificios coloniales históricos, balcones de hierro forjado, mercados de especias y un vibrante ambiente cosmopolita."
        },
        history: {
          fr: "Port stratégique fondé au XIXe siècle, Diégo-Suarez fut une escale majeure de l'océan Indien où se croisent influences françaises, arabes, indiennes et malgaches.",
          en: "A strategic deep-water port founded in the 19th century, Diego-Suarez served as a major crossroads connecting French, Arab, Indian, and Malagasy influences.",
          it: "Porto strategico fondato nel XIX secolo, Diego-Suarez fu un crocevia fondamentale dove si incontrano culture francesi, arabe, indiane e malgasce.",
          de: "Im 19. Jahrhundert als strategischer Tiefseehafen gegründet, war Diego-Suarez ein bedeutender Knotenpunkt französischer, arabischer, indischer und madagassischer Kulturen.",
          es: "Puerto estratégico fundado en el siglo XIX, Diego-Suárez fue una encrucijada marítima donde se entrelazan influencias francesas, árabes, indias y malgaches."
        },
        quote: {
          fr: "Diego garde en elle l'âme de tous les peuples marins qui l'ont traversée.",
          en: "Diego holds in its heart the soul of all seafaring cultures that sailed through its waters.",
          it: "Diego conserva nel cuore l'anima di tutti i popoli navigatori che l'hanno attraversata.",
          de: "Diego bewahrt die Seele aller Seefahrervölker, die hier je angelegt haben.",
          es: "Diego guarda en su esencia el alma de todos los pueblos marineros que la navegaron."
        },
        quoteAuthor: {
          fr: "Mémoire d'Antsiranana",
          en: "Antsiranana Chronicle",
          it: "Memoria di Antsiranana",
          de: "Chronik von Antsiranana",
          es: "Crónica de Antsiranana"
        },
        events: {
          fr: [
            { title: "Visite du Grand Marché Bazary Be", description: "Immergez-vous dans les senteurs de vanille, poivre sauvage et artisanat local." },
            { title: "Balade sur la Place Joffre", description: "Admirez la vue sur la baie et l'ancien gouvernorat face au coucher du soleil." }
          ],
          en: [
            { title: "Bazary Be Grand Market Visit", description: "Immerse your senses in fresh vanilla, wild black pepper, and artisanal local crafts." },
            { title: "Stroll on Place Joffre", description: "Enjoy wide vistas over the bay and historical colonial buildings at sunset." }
          ],
          it: [
            { title: "Visita al Grande Mercato Bazary Be", description: "Immergetevi nei profumi di vaniglia, pepe selvatico e artigianato locale." },
            { title: "Passeggiata in Place Joffre", description: "Ammirate la vista sulla baia e gli antichi edifici coloniali al tramonto." }
          ],
          de: [
            { title: "Besuch des Bazary Be Großmarkts", description: "Tauchen Sie ein in Düfte von Bourbon-Vanille, wildem Pfeffer und Kunsthandwerk." },
            { title: "Spaziergang auf dem Place Joffre", description: "Genießen Sie den weiten Blick über die Bucht und alte Kolonialresidenzen im Abendlicht." }
          ],
          es: [
            { title: "Visita al Gran Mercado Bazary Be", description: "Sumérjase en los aromas de vainilla bourbon, pimienta salvaje y artesanía local." },
            { title: "Paseo por la Plaza Joffre", description: "Disfrute de la vista sobre la bahía y los edificios coloniales al atardecer." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-landmark", label: "Époque", value: "Constructions coloniales et ruelles historiques du XIXe et XXe siècle" },
            { icon: "fas fa-basket-shopping", label: "Artisanat", value: "Vanille de Madagascar, épices, broderies et sculptures sur bois" }
          ],
          en: [
            { icon: "fas fa-landmark", label: "Era", value: "19th and early 20th-century colonial residences and historic avenues" },
            { icon: "fas fa-basket-shopping", label: "Crafts", value: "Bourbon vanilla, rare spices, embroidery, and handcrafted woodwork" }
          ],
          it: [
            { icon: "fas fa-landmark", label: "Epoca", value: "Edifici coloniali e viali storici del XIX e XX secolo" },
            { icon: "fas fa-basket-shopping", label: "Artigianato", value: "Vaniglia del Madagascar, spezie, ricami e intagli in legno" }
          ],
          de: [
            { icon: "fas fa-landmark", label: "Epoche", value: "Kolonialbauten und historische Straßenzüge aus dem 19. und 20. Jahrhundert" },
            { icon: "fas fa-basket-shopping", label: "Handwerk", value: "Madagaskar-Vanille, Gewürze, Stickereien und Holzschnitzereien" }
          ],
          es: [
            { icon: "fas fa-landmark", label: "Época", value: "Edificios coloniales y avenidas históricas del siglo XIX y XX" },
            { icon: "fas fa-basket-shopping", label: "Artesanía", value: "Vainilla de Madagascar, especias, bordados y tallas en madera" }
          ]
        },
        tips: {
          fr: [
            "Faites un tour en tuk-tuk jaune typique pour découvrir la ville avec charme.",
            "Prenez un verre en terrasse face à la baie en fin d'après-midi."
          ],
          en: [
            "Take a ride in a signature yellow tuk-tuk to explore the town with local charm.",
            "Enjoy a fresh drink on a scenic terrace overlooking the bay in late afternoon."
          ],
          it: [
            "Fate un giro nei caratteristici tuk-tuk gialli per visitare la città con stile.",
            "Godetevi un drink in terrazza con vista sulla baia nel tardo pomeriggio."
          ],
          de: [
            "Fahren Sie mit einem der typischen gelben Tuk-Tuks durch die charmante Innenstadt.",
            "Genießen Sie am späten Nachmittag ein kühles Getränk auf einer Terrasse mit Blick auf die Bucht."
          ],
          es: [
            "Dé un paseo en un característico tuk-tuk amarillo para recorrer la ciudad con encanto.",
            "Disfrute de una bebida en una terraza frente a la bahía al final de la tarde."
          ]
        },
        images: [
          { url: diegoImg16, caption: "Architecture et baies de Diégo-Suarez" },
          { url: diegoImg1, caption: "Atmosphère chaleureuse de la baie" },
          { url: diegoImg13, caption: "Points de vue et vie locale" }
        ]
      },
      {
        id: "cap-diego",
        rating: "4.8",
        name: {
          fr: "Cap Diego",
          en: "Cap Diego",
          it: "Cap Diego",
          de: "Cap Diego",
          es: "Cap Diego"
        },
        badge: {
          fr: "Promontoire légendaire",
          en: "Legendary Promontory",
          it: "Promontorio leggendario",
          de: "Legendäres Kap",
          es: "Promontorio legendario"
        },
        location: {
          fr: "Pointe nord de la baie de Diego Suarez",
          en: "Northern tip of Diego Suarez Bay",
          it: "Punta nord della baia di Diego Suarez",
          de: "Nordspitze der Bucht von Diego Suarez",
          es: "Punta norte de la bahía de Diego Suárez"
        },
        description: {
          fr: "Emblème géographique et historique de Diégo-Suarez, le Cap Diego est la pointe nord-est de la baie, qui sépare l'océan Indien de la grande baie intérieure. Ce promontoire offre des vues saisissantes sur la mer, les falaises et l'horizon infini de l'océan.",
          en: "The geographic and historical emblem of Diego-Suarez, Cap Diego is the northeastern tip of the bay separating the Indian Ocean from the great inner bay. This promontory commands breathtaking views over the sea, coastal cliffs, and the endless ocean horizon.",
          it: "Emblema geografico e storico di Diego-Suarez, il Cap Diego è la punta nord-est della baia che separa l'Oceano Indiano dalla grande baia interna. Questo promontorio offre viste mozzafiato sul mare, le scogliere costiere e l'infinito orizzonte dell'oceano.",
          de: "Das geografische und historische Wahrzeichen von Diego-Suarez, Cap Diego ist die nordöstliche Spitze der Bucht, die den Indischen Ozean von der großen Innenbucht trennt. Dieses Kap bietet atemberaubende Ausblicke auf das Meer, die Steilküste und den endlosen Horizont.",
          es: "Emblema geográfico e histórico de Diego-Suárez, el Cap Diego es la punta noreste de la bahía que separa el Océano Índico de la gran bahía interior. Este promontorio ofrece impresionantes vistas sobre el mar, los acantilados costeros y el horizonte infinito del océano."
        },
        history: {
          fr: "Le Cap Diego tient son nom des navigateurs portugais Diego Dias et Fernão Soares qui explorèrent la région au début du XVIe siècle. Fortifié successivement par des pirates, des marchands arabes et la marine française, il constitua le verrou naturel de la grande rade de Diégo-Suarez.",
          en: "Cap Diego takes its name from the Portuguese navigators Diego Dias and Fernão Soares who explored the region in the early 16th century. Successively fortified by pirates, Arab merchants, and the French Navy, it formed the natural lock of the great harbor of Diego-Suarez.",
          it: "Il Cap Diego prende il nome dai navigatori portoghesi Diego Dias e Fernão Soares che esplorarono la regione all'inizio del XVI secolo. Progressivamente fortificato da pirati, mercanti arabi e dalla marina francese, costituì il chiavistello naturale del grande porto di Diego-Suarez.",
          de: "Cap Diego verdankt seinen Namen den portugiesischen Seefahrern Diego Dias und Fernão Soares, die die Region Anfang des 16. Jahrhunderts erkundeten. Nacheinander von Piraten, arabischen Händlern und der französischen Marine befestigt, bildete es das natürliche Schloss des großen Hafens von Diego-Suarez.",
          es: "El Cap Diego toma su nombre de los navegantes portugueses Diego Dias y Fernão Soares, que exploraron la región a principios del siglo XVI. Sucesivamente fortificado por piratas, mercaderes árabes y la marina francesa, constituyó el candado natural del gran puerto de Diego-Suárez."
        },
        quote: {
          fr: "Diego n'existe que parce qu'il y a ce cap. C'est lui qui a attiré tous les navigateurs du monde.",
          en: "Diego exists only because of this cape. It is what drew all the world's navigators here.",
          it: "Diego esiste solo grazie a questo capo. È lui che ha attirato tutti i navigatori del mondo.",
          de: "Diego existiert nur wegen dieses Kaps. Es war das Kap, das alle Seefahrer der Welt hierher zog.",
          es: "Diego existe solo por este cabo. Fue él quien atrajo a todos los navegantes del mundo."
        },
        quoteAuthor: {
          fr: "Historien de la marine malgache",
          en: "Malagasy Maritime Historian",
          it: "Storico navale malgascio",
          de: "Madagassischer Marinehistoriker",
          es: "Historiador naval malgache"
        },
        events: {
          fr: [
            { title: "Panorama sur l'entrée de la baie", description: "Vue spectaculaire sur la jonction entre l'océan Indien ouvert et les eaux protégées de la grande baie." },
            { title: "Photographie de paysages marins", description: "Cadrage idéal pour photographier les falaises, la mer turquoise et les bateaux naviguant sur la passe." },
            { title: "Découverte du patrimoine militaire", description: "Vestiges de fortifications et de canons témoignant des siècles de présence militaire sur ce site stratégique." }
          ],
          en: [
            { title: "Panorama over the Bay Entrance", description: "Spectacular view of the junction between the open Indian Ocean and the sheltered waters of the great bay." },
            { title: "Seascape Photography", description: "Perfect framing for photographing the cliffs, turquoise sea, and ships navigating through the pass." },
            { title: "Military Heritage Discovery", description: "Remnants of fortifications and cannons bearing witness to centuries of military presence at this strategic site." }
          ],
          it: [
            { title: "Panorama sull'ingresso della baia", description: "Vista spettacolare sulla giunzione tra l'Oceano Indiano aperto e le acque protette della grande baia." },
            { title: "Fotografia di paesaggi marini", description: "Inquadratura ideale per fotografare le scogliere, il mare turchese e le navi che navigano nella passe." },
            { title: "Scoperta del patrimonio militare", description: "Resti di fortificazioni e cannoni che testimoniano secoli di presenza militare su questo sito strategico." }
          ],
          de: [
            { title: "Panorama über den Buchteneingang", description: "Atemberaubende Aussicht auf die Verbindung zwischen dem offenen Indischen Ozean und den geschützten Gewässern der großen Bucht." },
            { title: "Meereslandschaftsfotografie", description: "Ideale Komposition für Fotos der Klippen, des türkisblauen Meeres und der durch die Durchfahrt fahrenden Schiffe." },
            { title: "Militärische Erkundung", description: "Überreste von Befestigungen und Kanonen als Zeugen jahrhundertelanger Militärpräsenz an diesem strategischen Ort." }
          ],
          es: [
            { title: "Panorámica sobre la entrada de la bahía", description: "Vista espectacular de la unión entre el Océano Índico abierto y las aguas protegidas de la gran bahía." },
            { title: "Fotografía de paisajes marinos", description: "Encuadre perfecto para fotografiar los acantilados, el mar turquesa y los barcos que navegan por el paso." },
            { title: "Descubrimiento del patrimonio militar", description: "Restos de fortificaciones y cañones que testimonian siglos de presencia militar en este sitio estratégico." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-anchor", label: "Origine", value: "Nommé en hommage au navigateur portugais Diego Dias (XVIe siècle)" },
            { icon: "fas fa-eye", label: "Vue", value: "Point de vue exceptionnel sur la jonction entre l'océan et la baie" },
            { icon: "fas fa-shield-halved", label: "Défense", value: "Site fortifié successivement par pirates, Arabes et marine coloniale française" },
            { icon: "fas fa-camera", label: "Photo", value: "L'un des spots photographiques les plus emblématiques de la région" }
          ],
          en: [
            { icon: "fas fa-anchor", label: "Origin", value: "Named in honor of Portuguese navigator Diego Dias (16th century)" },
            { icon: "fas fa-eye", label: "View", value: "Exceptional vantage point overlooking the ocean-bay junction" },
            { icon: "fas fa-shield-halved", label: "Defense", value: "Fortified successively by pirates, Arabs, and French colonial navy" },
            { icon: "fas fa-camera", label: "Photography", value: "One of the most iconic photography spots in the region" }
          ],
          it: [
            { icon: "fas fa-anchor", label: "Origine", value: "Intitolato al navigatore portoghese Diego Dias (XVI secolo)" },
            { icon: "fas fa-eye", label: "Vista", value: "Punto panoramico eccezionale sul raccordo tra oceano e baia" },
            { icon: "fas fa-shield-halved", label: "Difesa", value: "Progressivamente fortificato da pirati, Arabi e marina coloniale francese" },
            { icon: "fas fa-camera", label: "Foto", value: "Uno dei luoghi più iconici per la fotografia della regione" }
          ],
          de: [
            { icon: "fas fa-anchor", label: "Ursprung", value: "Benannt zu Ehren des portugiesischen Seefahrers Diego Dias (16. Jh.)" },
            { icon: "fas fa-eye", label: "Aussicht", value: "Außergewöhnlicher Aussichtspunkt über die Verbindung zwischen Ozean und Bucht" },
            { icon: "fas fa-shield-halved", label: "Verteidigung", value: "Nacheinander von Piraten, Arabern und der französischen Kolonialmarine befestigt" },
            { icon: "fas fa-camera", label: "Fotografie", value: "Einer der ikonischsten Fotospots der Region" }
          ],
          es: [
            { icon: "fas fa-anchor", label: "Origen", value: "Bautizado en homenaje al navegante portugués Diego Dias (siglo XVI)" },
            { icon: "fas fa-eye", label: "Vista", value: "Excepcional mirador sobre la unión entre el océano y la bahía" },
            { icon: "fas fa-shield-halved", label: "Defensa", value: "Fortifcado sucesivamente por piratas, árabes y la marina colonial francesa" },
            { icon: "fas fa-camera", label: "Fotografía", value: "Uno de los spots fotográficos más emblemáticos de la región" }
          ]
        },
        tips: {
          fr: [
            "Passez-y en fin d'après-midi pour des photos au coucher de soleil sur l'océan.",
            "Combinez la visite avec la Montagne des Français toute proche pour une journée panoramique complète.",
            "Les jours venteux offrent des vagues impressionnantes contre les falaises — spectacle garanti."
          ],
          en: [
            "Visit in late afternoon for stunning ocean sunset photography.",
            "Combine with nearby French Mountain for a complete panoramic day.",
            "On windy days, impressive waves crash against the cliffs — a guaranteed spectacle."
          ],
          it: [
            "Passateci nel tardo pomeriggio per fotografie spettacolari al tramonto sull'oceano.",
            "Combinate la visita con la vicina Montagna dei Francesi per una giornata panoramica completa.",
            "Nei giorni ventosi le onde si infrangono spettacolarmente sulle scogliere."
          ],
          de: [
            "Besuchen Sie das Kap am späten Nachmittag für atemberaubende Sonnenuntergangsfotos.",
            "Kombination mit der nahen Montagne des Français für einen vollständigen Panoramatag empfohlen.",
            "An windigen Tagen schlagen beeindruckende Wellen gegen die Klippen — garantiertes Schauspiel."
          ],
          es: [
            "Visítelo a última hora de la tarde para fotos espectaculares del atardecer sobre el océano.",
            "Combínelo con la cercana Montaña de los Franceses para una jornada panorámica completa.",
            "En días de viento, las olas se rompen de forma impresionante contra los acantilados."
          ]
        },
        images: [
          { url: diegoImg16, caption: "Cap Diego — emblème de la baie d'Antsiranana" },
          { url: diegoImg17, caption: "Vue sur la grande passe depuis le Cap Diego" },
          { url: diegoImg18, caption: "Côte sauvage et falaises du Cap Diego" }
        ]
      }
    ]
  }
}

export function getDiegoSections(lang = 'fr') {
  const currentLang = ['fr', 'en', 'it', 'de', 'es'].includes(lang) ? lang : 'fr'

  return Object.entries(diegoData).map(([sectionKey, section]) => {
    return {
      id: sectionKey,
      title: section.title[currentLang] || section.title.fr,
      icon: section.icon,
      description: section.description[currentLang] || section.description.fr,
      places: section.places.map(place => ({
        id: place.id,
        rating: place.rating,
        name: place.name[currentLang] || place.name.fr,
        badge: place.badge[currentLang] || place.badge.fr,
        location: place.location[currentLang] || place.location.fr,
        description: place.description[currentLang] || place.description.fr,
        history: place.history[currentLang] || place.history.fr,
        quote: place.quote[currentLang] || place.quote.fr,
        quoteAuthor: place.quoteAuthor[currentLang] || place.quoteAuthor.fr,
        events: place.events[currentLang] || place.events.fr,
        facts: place.facts[currentLang] || place.facts.fr,
        tips: place.tips[currentLang] || place.tips.fr,
        images: place.images
      }))
    }
  })
}
