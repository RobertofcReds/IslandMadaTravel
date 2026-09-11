import nosyParfums from '../images/destination/Nosy Be - Île aux Parfums.jpg'
import nosyIranja from '../images/destination/Nosy Iranja.jpg'
import nosyTanikely from '../images/destination/Nosy Tanikely.jpg'
import nosyAndilana from '../images/destination/Plage d\'Andilana.jpg'
import nosyKomba from '../images/destination/Nosy Komba.jpg'

import nosyImg1 from '../images/nosy/013-remo-e-berenice.jpg'
import nosyImg2 from '../images/nosy/014---nosy-tanikely.jpg'
import nosyImg3 from '../images/nosy/015-plage-de-nosy-iranja.jpg'
import nosyImg4 from '../images/nosy/016-20180711-171613-largejpg.jpg'
import nosyImg5 from '../images/nosy/016-kratersee.jpg'
import nosyImg6 from '../images/nosy/018-baleines-randeau-nosy.jpg'
import nosyImg7 from '../images/nosy/018-requin-baleine-rand-eau.jpg'
import nosyImg8 from '../images/nosy/019-caption.jpg'
import nosyImg9 from '../images/nosy/019-caption1.jpg'
import nosyImg10 from '../images/nosy/019-caption2.jpg'
import nosyImg11 from '../images/nosy/019-terrasse-de-restaurant.jpg'
import nosyImg12 from '../images/nosy/020-andilana-beach-resort1.jpg'
import nosyImg13 from '../images/nosy/020-andilana-beach-resort2.jpg'
import nosyImg14 from '../images/nosy/021-cascade_caption.jpg'
import nosyImg15 from '../images/nosy/022-nosy-be-original.jpg'

export const nosyHeroImages = [
  nosyImg1, nosyImg2, nosyImg3, nosyImg4, nosyImg5,
  nosyImg6, nosyImg7, nosyImg8, nosyImg9, nosyImg10,
  nosyImg11, nosyImg12, nosyImg13, nosyImg14, nosyImg15
]

const nosyData = {
  islands: {
    title: {
      fr: "Îles & Excursions Maritimes",
      en: "Islands & Sea Excursions",
      it: "Isole & Escursioni Marittime",
      de: "Inseln & Meeresausflüge",
      es: "Islas & Excursiones Marítimas"
    },
    icon: "fas fa-water",
    description: {
      fr: "Un archipel de rêve — îles désertes, bancs de sable coralliens et faune marine d'exception",
      en: "A dream archipelago — deserted isles, coral sandbanks, and exceptional marine life",
      it: "Un arcipelago da sogno — isole deserte, banchi di sabbia corallini e ricca fauna marina",
      de: "Ein Traumarchipel — einsame Inseln, Korallensandbänke und außergewöhnliche Meeresfauna",
      es: "Un archipiélago de ensueño — islas desiertas, bancos de arena coralinos y fauna marina excepcional"
    },
    places: [
      {
        id: "nosy-iranja",
        rating: "5.0",
        name: {
          fr: "Nosy Iranja",
          en: "Nosy Iranja",
          it: "Nosy Iranja",
          de: "Nosy Iranja",
          es: "Nosy Iranja"
        },
        badge: {
          fr: "L'Île aux Tortues",
          en: "Turtle Island",
          it: "L'Isola delle Tartarughe",
          de: "Die Schildkröteninsel",
          es: "La Isla de las Tortugas"
        },
        location: {
          fr: "45 km au sud-ouest de Nosy Be",
          en: "45 km southwest of Nosy Be",
          it: "45 km a sud-ovest di Nosy Be",
          de: "45 km südwestlich von Nosy Be",
          es: "45 km al suroeste de Nosy Be"
        },
        description: {
          fr: "Deux îlots paradisiaques reliés à marée basse par un spectaculaire banc de sable blanc immaculé de plus d'un kilomètre, baigné par des eaux turquoise d'une clarté absolue.",
          en: "Two paradise islets connected at low tide by a pristine white sandbank stretching over a kilometer, surrounded by crystal-clear turquoise waters.",
          it: "Due isolotti paradisiaci collegati con la bassa marea da una spettacolare lingua di sabbia bianca incontaminata di oltre un chilometro.",
          de: "Zwei paradiesische Inselchen, bei Ebbe verbunden durch eine über einen Kilometer lange, strahlend weiße Sandbank im türkisblauen Ozean.",
          es: "Dos islotes paradisíacos conectados durante la marea baja por un espectacular banco de arena blanca virgen de más de un kilómetro."
        },
        history: {
          fr: "Site de ponte privilégié pour les tortues marines depuis la nuit des temps, Nosy Iranja abrite également un phare historique conçu par Gustave Eiffel.",
          en: "A legendary nesting sanctuary for sea turtles since time immemorial, Nosy Iranja also features a historic lighthouse designed by Gustave Eiffel.",
          it: "Sito privilegiato di nidificazione per le tartarughe marine, Nosy Iranja ospita anche uno storico faro progettato da Gustave Eiffel.",
          de: "Seit jeher ein Schutzgebiet für Meeresschildkröten; Nosy Iranja beherbergt zudem einen historischen Leuchtturm, entworfen von Gustave Eiffel.",
          es: "Santuario de anidación para tortugas marinas desde tiempos inmemoriales, Nosy Iranja alberga también un faro histórico diseñado por Gustave Eiffel."
        },
        quote: {
          fr: "Marcher sur le banc de sable d'Iranja, c'est marcher au cœur même de l'océan.",
          en: "Walking along the Iranja sandbank feels like strolling right through the heart of the ocean.",
          it: "Camminare sulla lingua di sabbia di Iranja è come camminare nel cuore stesso dell'oceano.",
          de: "Über die Sandbank von Iranja zu wandern fühlt sich an, als ginge man mitten durch das Herz des Ozeans.",
          es: "Caminar por el banco de arena de Iranja es caminar en el corazón mismo del océano."
        },
        quoteAuthor: {
          fr: "Journal des voyageurs",
          en: "Travelers Journal",
          it: "Diario dei viaggiatori",
          de: "Reisetagebuch",
          es: "Diario de viajeros"
        },
        events: {
          fr: [
            { title: "Traversée du banc de sable", description: "Profitez de la marée basse pour marcher entre les deux îles sur le sable immaculé." },
            { title: "Nidification des tortues", description: "Observation respectueuse des tortues vertes et imbriquées venant pondre sur les plages." },
            { title: "Montée au phare Eiffel", description: "Panorama à 360° imprenable sur tout le lagon depuis le phare de la grande île." }
          ],
          en: [
            { title: "Sandbank Walk", description: "Take advantage of low tide to walk between both islets along the pristine sand ridge." },
            { title: "Turtle Nesting", description: "Eco-friendly observation of green and hawksbill sea turtles nesting on the beaches." },
            { title: "Eiffel Lighthouse Climb", description: "Stunning 360° panoramic view of the entire turquoise lagoon from the summit." }
          ],
          it: [
            { title: "Passeggiata sulla lingua di sabbia", description: "Approfittate della bassa marea per camminare tra le due isole sulla sabbia immacolata." },
            { title: "Nidificazione delle tartarughe", description: "Avvistamento rispettoso delle tartarughe verdi ed embricate che nidificano sulla spiaggia." },
            { title: "Salita al faro Eiffel", description: "Spettacolare panorama a 360° sull'intera laguna dalla cima dell'isola grande." }
          ],
          de: [
            { title: "Sandbank-Wanderung", description: "Nutzen Sie die Ebbe, um über die makellose weiße Sandbank zwischen beiden Inseln zu spazieren." },
            { title: "Schildkröten-Beobachtung", description: "Respektvolles Beobachten der grünen Meeresschildkröten an den geschützten Stränden." },
            { title: "Aufstieg zum Eiffel-Leuchtturm", description: "Überwältigender 360°-Rundumblick über die gesamte Lagune von der Anhöhe." }
          ],
          es: [
            { title: "Paseo por el banco de arena", description: "Aproveche la marea baja para caminar entre las dos islas sobre la arena blanca." },
            { title: "Anidación de tortugas", description: "Observación respetuosa de tortugas verdes y carey que anidan en las playas." },
            { title: "Subida al faro Eiffel", description: "Impresionante panorama de 360° sobre toda la laguna desde lo alto." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-shield-halved", label: "Tortues", value: "Sanctuaire de reproduction des tortues marines vertes" },
            { icon: "fas fa-sailboat", label: "Accès", value: "Excursion d'une journée en vedette rapide (1h30 de trajet)" },
            { icon: "fas fa-tower-observation", label: "Phare", value: "Phare historique du début du XXe siècle" }
          ],
          en: [
            { icon: "fas fa-shield-halved", label: "Turtles", value: "Reproduction sanctuary for green sea turtles" },
            { icon: "fas fa-sailboat", label: "Access", value: "Full-day speedboat excursion (approx. 1h30 crossing)" },
            { icon: "fas fa-tower-observation", label: "Lighthouse", value: "Historic early 20th-century lighthouse" }
          ],
          it: [
            { icon: "fas fa-shield-halved", label: "Tartarughe", value: "Santuario di riproduzione delle tartarughe marine verdi" },
            { icon: "fas fa-sailboat", label: "Accesso", value: "Escursione di una giornata in motoscafo (1h30 di navigazione)" },
            { icon: "fas fa-tower-observation", label: "Faro", value: "Faro storico dei primi del Novecento" }
          ],
          de: [
            { icon: "fas fa-shield-halved", label: "Schildkröten", value: "Fortpflanzungsschutzgebiet für grüne Meeresschildkröten" },
            { icon: "fas fa-sailboat", label: "Anreise", value: "Ganztagesausflug mit dem Schnellboot (ca. 1h30 Fahrt)" },
            { icon: "fas fa-tower-observation", label: "Leuchtturm", value: "Historischer Leuchtturm aus dem frühen 20. Jahrhundert" }
          ],
          es: [
            { icon: "fas fa-shield-halved", label: "Tortugas", value: "Santuario de reproducción de tortugas marinas verdes" },
            { icon: "fas fa-sailboat", label: "Acceso", value: "Excursión de un día en lancha rápida (1h30 de trayecto)" },
            { icon: "fas fa-tower-observation", label: "Faro", value: "Faro histórico de principios del siglo XX" }
          ]
        },
        tips: {
          fr: [
            "Prévoyez un masque et un tuba, les récifs proches abritent une multitude de poissons tropicaux.",
            "Portez une protection solaire maximale et un chapeau (ombre limitée sur le banc de sable).",
            "Dégustez le buffet de poissons et crabes préparé par l'équipage sur la plage."
          ],
          en: [
            "Bring mask and snorkel to explore the vibrant coral reefs around the sandbar.",
            "Apply high-protection sunscreen and wear a hat (minimal shade on the open sandbank).",
            "Enjoy the fresh seafood and grilled fish buffet prepared on the beach."
          ],
          it: [
            "Portate maschera e boccaglio per ammirare i pesci tropicali lungo la barriera.",
            "Protezione solare alta e cappello (poca ombra sulla lingua di sabbia).",
            "Assaporate il pranzo a base di pesce fresco e grigliate preparato in spiaggia."
          ],
          de: [
            "Schnorchelausrüstung mitnehmen, die Korallenriffe sind voller bunter Rifffische.",
            "Sehr hohen Sonnenschutz und Kopfbedeckung einpacken (wenig Schatten auf der Sandbank).",
            "Genießen Sie das frisch am Strand zubereitete Meeresfrüchte- und Fischbuffet."
          ],
          es: [
            "Lleve gafas de buceo y tubo para explorar los arrecifes cercanos llenos de vida.",
            "Protección solar alta y sombrero (poca sombra en el banco de arena).",
            "Disfrute del almuerzo con mariscos y pescados frescos a la parrilla en la playa."
          ]
        },
        images: [
          { url: nosyIranja, caption: "Le banc de sable blanc emblématique de Nosy Iranja" },
          { url: nosyImg3, caption: "Plage paradisiaque et eaux turquoise" },
          { url: nosyImg7, caption: "Eaux cristallines et faune marine d'exception" }
        ]
      },
      {
        id: "nosy-tanikely",
        rating: "4.9",
        name: {
          fr: "Nosy Tanikely",
          en: "Nosy Tanikely",
          it: "Nosy Tanikely",
          de: "Nosy Tanikely",
          es: "Nosy Tanikely"
        },
        badge: {
          fr: "Parc National Marin",
          en: "Marine National Park",
          it: "Parco Nazionale Marino",
          de: "Meeresnationalpark",
          es: "Parque Nacional Marino"
        },
        location: {
          fr: "10 km au sud de Nosy Be",
          en: "10 km south of Nosy Be",
          it: "10 km a sud di Nosy Be",
          de: "10 km südlich von Nosy Be",
          es: "10 km al sur de Nosy Be"
        },
        description: {
          fr: "Véritable aquarium naturel protégé, Nosy Tanikely est l'un des meilleurs spots de snorkeling et de plongée de Madagascar, où nager aux côtés des tortues et coraux intacts.",
          en: "A true protected natural aquarium, Nosy Tanikely is one of Madagascar's premier snorkeling and diving hubs, where you swim alongside friendly turtles in pristine corals.",
          it: "Un vero e proprio acquario naturale protetto, Nosy Tanikely è uno dei migliori spot di snorkeling e immersioni dove nuotare con le tartarughe.",
          de: "Ein echtes geschütztes Natur-Aquarium: Nosy Tanikely ist einer der besten Schnorchel- und Tauchspots Madagaskars mit zahmen Schildkröten und intakten Korallen.",
          es: "Un auténtico acuario natural protegido, Nosy Tanikely es uno de los mejores puntos de snorkel y buceo para nadar con tortugas marinas y corales intactos."
        },
        history: {
          fr: "Classée réserve marine protégée depuis 2010, cette petite île volcanique conserve un écosystème marin intact et un phare centenaire érigé en 1908.",
          en: "Protected as a marine reserve since 2010, this small volcanic island preserves an untouched coral reef ecosystem and a century-old lighthouse built in 1908.",
          it: "Dichiarata riserva marina protetta dal 2010, questa piccola isola vulcanica vanta una barriera corallina incontaminata e un faro del 1908.",
          de: "Seit 2010 Meeresnationalpark, schützt die kleine Vulkaninsel ein unberührtes Riffökosystem und besitzt einen Leuchtturm von 1908.",
          es: "Declarada reserva marina protegida desde 2010, esta pequeña isla volcánica preserva un ecosistema de coral virgen y un faro de 1908."
        },
        quote: {
          fr: "Dès les premiers mètres dans l'eau, les tortues marines viennent nager à vos côtés.",
          en: "Just steps into the water, graceful sea turtles glide right beside you.",
          it: "Fin dai primi metri in acqua, le tartarughe marine vengono a nuotare al vostro fianco.",
          de: "Schon wenige Meter im Wasser schwimmen Meeresschildkröten friedlich neben Ihnen.",
          es: "Desde los primeros metros en el agua, las tortugas marinas nadan a su lado."
        },
        quoteAuthor: {
          fr: "Guide plongée sous-marine",
          en: "Scuba Diving Instructor",
          it: "Istruttore subacqueo",
          de: "Tauchlehrer",
          es: "Instructor de buceo"
        },
        events: {
          fr: [
            { title: "Snorkeling avec les tortues marines", description: "Rencontre garantie à quelques mètres du rivage avec tortues vertes, raies et bancs multicolores." },
            { title: "Montée au phare historique", description: "Sentier ombragé jusqu'au sommet de l'île pour une vue panoramique et observer les lémuriens." }
          ],
          en: [
            { title: "Snorkeling with Sea Turtles", description: "Guaranteed encounters with green turtles, stingrays, and clownfish just meters from the shore." },
            { title: "Historic Lighthouse Trail", description: "Shaded walk to the island's peak for panoramic views and spotting local lemurs in the trees." }
          ],
          it: [
            { title: "Snorkeling con le tartarughe marine", description: "Incontro garantito a pochi metri dalla riva con tartarughe verdi, razze e pesci pagliaccio." },
            { title: "Salita al faro storico", description: "Sentiero ombreggiato verso la cima dell'isola con vista panoramica e avvistamento di lemuri." }
          ],
          de: [
            { title: "Schnorcheln mit Meeresschildkröten", description: "Garantierte Begegnungen mit grünen Meeresschildkröten, Rochen und bunten Rifffischen direkt am Strand." },
            { title: "Weg zum historischen Leuchtturm", description: "Schattiger Pfad zum Aussichtsgipfel der Insel mit weitem Rundblick und Lemuren." }
          ],
          es: [
            { title: "Snorkel con tortugas marinas", description: "Encuentro garantizado a pocos metros de la orilla con tortugas verdes, rayas y peces de colores." },
            { title: "Subida al faro histórico", description: "Sendero sombreado hasta la cima con vista panorámica y observación de lémures." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-fish-fins", label: "Faune", value: "Tortues vertes, raies pastenagues, mérous, coraux tabulaires" },
            { icon: "fas fa-clock", label: "Trajet", value: "30 minutes en bateau depuis le port de Nosy Be" },
            { icon: "fas fa-shield-halved", label: "Protection", value: "Pêche et prélèvements strictement interdits" }
          ],
          en: [
            { icon: "fas fa-fish-fins", label: "Marine Life", value: "Green turtles, stingrays, groupers, table corals" },
            { icon: "fas fa-clock", label: "Transit", value: "30 minutes by boat from Nosy Be harbor" },
            { icon: "fas fa-shield-halved", label: "Protection", value: "Fully protected reserve; fishing strictly prohibited" }
          ],
          it: [
            { icon: "fas fa-fish-fins", label: "Fauna", value: "Tartarughe verdi, trigoni, cernie, coralli tabulari" },
            { icon: "fas fa-clock", label: "Tragitto", value: "30 minuti di barca dal porto di Nosy Be" },
            { icon: "fas fa-shield-halved", label: "Tutela", value: "Pesca e prelievi severamente vietati" }
          ],
          de: [
            { icon: "fas fa-fish-fins", label: "Meeresleben", value: "Grüne Meeresschildkröten, Stachelrochen, Zackenbarsche, Tischkorallen" },
            { icon: "fas fa-clock", label: "Überfahrt", value: "30 Minuten mit dem Boot vom Hafen Nosy Be" },
            { icon: "fas fa-shield-halved", label: "Schutzstatus", value: "Vollständig geschützter Meerespark; Fischen streng verboten" }
          ],
          es: [
            { icon: "fas fa-fish-fins", label: "Vida marina", value: "Tortugas verdes, rayas, meros, corales tabulares" },
            { icon: "fas fa-clock", label: "Trayecto", value: "30 minutos en barco desde el puerto de Nosy Be" },
            { icon: "fas fa-shield-halved", label: "Protección", value: "Parque marino protegido; pesca estrictamente prohibida" }
          ]
        },
        tips: {
          fr: [
            "Combinez Nosy Tanikely et Nosy Komba lors d'une même journée d'excursion maritime.",
            "Ne touchez jamais les tortues ni les coraux pour préserver la réserve.",
            "Prenez vos chaussures de marche pour monter confortablement au phare."
          ],
          en: [
            "Combine Nosy Tanikely and Nosy Komba into a single, rewarding day excursion.",
            "Never touch or harass turtles and delicate corals to preserve the marine park.",
            "Wear walking shoes for the short scenic hike up to the lighthouse."
          ],
          it: [
            "Combinate Nosy Tanikely e Nosy Komba nella stessa giornata in barca.",
            "Non toccate mai le tartarughe né i coralli per preservare l'ecosistema.",
            "Portate scarpe comode per salire fino al faro panoramico."
          ],
          de: [
            "Kombinieren Sie Nosy Tanikely und Nosy Komba zu einem perfekten Tagesausflug.",
            "Schildkröten und empfindliche Korallen niemals berühren.",
            "Bequeme Schuhe für den kurzen Spaziergang zum Leuchtturm einpacken."
          ],
          es: [
            "Combine Nosy Tanikely y Nosy Komba en una misma excursión de un día en barco.",
            "Nunca toque las tortugas ni los corales para preservar la reserva.",
            "Lleve calzado cómodo para subir fácilmente hasta el faro."
          ]
        },
        images: [
          { url: nosyTanikely, caption: "Eaux limpides de la réserve marine de Nosy Tanikely" },
          { url: nosyImg2, caption: "Plage de sable fin et récif corallien" },
          { url: nosyImg7, caption: "Snorkeling avec la faune marine en liberté" }
        ]
      },
      {
        id: "nosy-komba",
        rating: "4.8",
        name: {
          fr: "Nosy Komba",
          en: "Nosy Komba",
          it: "Nosy Komba",
          de: "Nosy Komba",
          es: "Nosy Komba"
        },
        badge: {
          fr: "L'Île aux Lémuriens",
          en: "Lemur Island",
          it: "L'Isola dei Lemuri",
          de: "Die Lemureninsel",
          es: "La Isla de los Lémures"
        },
        location: {
          fr: "Entre Nosy Be et la Grande Terre",
          en: "Between Nosy Be and the Mainland",
          it: "Tra Nosy Be e la terraferma",
          de: "Zwischen Nosy Be und dem Festland",
          es: "Entre Nosy Be y la Gran Tierra"
        },
        description: {
          fr: "Une majestueuse île volcanique sans voitures, réputée pour ses lémuriens noirs (Eulemur macaco) dociles et ses villages d'artisans sculpteurs et brodeuses.",
          en: "A majestic car-free volcanic island famous for its docile black lemurs (Eulemur macaco) and traditional villages filled with woodcarvers and lace embroiderers.",
          it: "Una suggestiva isola vulcanica senza auto, famosa per i lemuri neri mansueti e i villaggi di artigiani scultori e ricamatrici.",
          de: "Eine autofreie Vulkaninsel, berühmt für ihre zahmen schwarzen Lemuren (Eulemur macaco) und traditionsreiche Kunsthandwerkerdörfer.",
          es: "Una majestuosa isla volcánica sin coches, famosa por sus lémures negros dóciles y sus pueblos de artesanos talladores y bordadoras."
        },
        history: {
          fr: "Protégés par les traditions sacrées locales (fady), les lémuriens cohabitent harmonieusement avec les habitants du village d'Ampangorina depuis des générations.",
          en: "Protected by ancestral local taboos (fady), black lemurs have coexisted peacefully alongside the villagers of Ampangorina for generations.",
          it: "Protetti dalle antiche tradizioni sacre (fady), i lemuri convivono pacificamente con gli abitanti del villaggio di Ampangorina.",
          de: "Dank uralter lokaler Tabus (Fady) geschützt, leben die schwarzen Lemuren seit Generationen friedlich mit den Dorfbewohnern zusammen.",
          es: "Protegidos por las tradiciones sagradas locales (fady), los lémures conviven en armonía con los habitantes del pueblo de Ampangorina."
        },
        quote: {
          fr: "Sur cette île sans moteur, la nature et les traditions battent au rythme du cœur.",
          en: "On this car-free island, pure nature and authentic crafts beat with gentle harmony.",
          it: "Su quest'isola senza motori, la natura e le tradizioni battono con armonia.",
          de: "Auf dieser autofreien Insel schlagen Natur und Traditionen im friedlichen Einklang.",
          es: "En esta isla sin vehículos de motor, la naturaleza y las tradiciones laten en armonía."
        },
        quoteAuthor: {
          fr: "Artisan d'Ampangorina",
          en: "Ampangorina Craftsman",
          it: "Artigiano di Ampangorina",
          de: "Kunsthandwerker aus Ampangorina",
          es: "Artesano de Ampangorina"
        },
        events: {
          fr: [
            { title: "Rencontre avec les lémuriens noirs", description: "Nourrissez les lémuriens qui descendent délicatement sur les épaules des visiteurs." },
            { title: "Visite du village artisanal", description: "Découvrez les nappes brodées au point de Richelieu, vanille et sculptures sur bois précieux." }
          ],
          en: [
            { title: "Black Lemur Encounters", description: "Gentle interaction with wild lemurs hopping onto your shoulders under guide supervision." },
            { title: "Artisanal Village Tour", description: "Browse traditional Richelieu hand-embroidered tablecloths, vanilla, and woodcarvings." }
          ],
          it: [
            { title: "Incontro con i lemuri neri", description: "Interagite con i docili lemuri che scendono delicatamente sulle spalle dei visitatori." },
            { title: "Visita al villaggio artigianale", description: "Scoprite le tovaglie ricamate a mano in punto Richelieu, vaniglia e sculture in legno." }
          ],
          de: [
            { title: "Begegnung mit schwarzen Lemuren", description: "Sanfte Begegnungen mit zahmen Lemuren, die behutsam auf die Schultern klettern." },
            { title: "Besuch des Handwerkerdorfes", description: "Entdecken Sie handgestickte Richelieu-Tischdecken, frische Vanille und Edelschnitzereien." }
          ],
          es: [
            { title: "Encuentro con los lémures negros", description: "Interactúe con los dóciles lémures que bajan con suavidad a hombros de los visitantes." },
            { title: "Visita al pueblo artesanal", description: "Descubra mantelerías bordadas a mano, vainilla fresca y tallas de madera noble." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-paw", label: "Espèce", value: "Lémurien noir (Eulemur macaco) endémique du nord-ouest" },
            { icon: "fas fa-shirt", label: "Artisanat", value: "Broderie artisanale traditionnelle et sculptures sur palissandre" },
            { icon: "fas fa-clock", label: "Accès", value: "20 minutes de traversée en bateau depuis Nosy Be" }
          ],
          en: [
            { icon: "fas fa-paw", label: "Species", value: "Black lemur (Eulemur macaco) endemic to northwest Madagascar" },
            { icon: "fas fa-shirt", label: "Crafts", value: "Traditional hand embroidery and rosewood carvings" },
            { icon: "fas fa-clock", label: "Access", value: "20 minutes boat ride from Nosy Be" }
          ],
          it: [
            { icon: "fas fa-paw", label: "Specie", value: "Lemure nero (Eulemur macaco) endemico del nord-ovest" },
            { icon: "fas fa-shirt", label: "Artigianato", value: "Ricami tradizionali a mano e sculture in palissandro" },
            { icon: "fas fa-clock", label: "Accesso", value: "20 minuti di barca da Nosy Be" }
          ],
          de: [
            { icon: "fas fa-paw", label: "Tierart", value: "Schwarzer Lemur (Eulemur macaco), endemisch im Nordwesten" },
            { icon: "fas fa-shirt", label: "Handwerk", value: "Traditionelle Handstickerei und Palisander-Schnitzereien" },
            { icon: "fas fa-clock", label: "Anreise", value: "20 Minuten Bootsfahrt ab Nosy Be" }
          ],
          es: [
            { icon: "fas fa-paw", label: "Especie", value: "Lémur negro (Eulemur macaco) endémico del noroeste" },
            { icon: "fas fa-shirt", label: "Artesanía", value: "Bordado tradicional a mano y tallas en madera de palisandro" },
            { icon: "fas fa-clock", label: "Acceso", value: "20 minutos en barco desde Nosy Be" }
          ]
        },
        tips: {
          fr: [
            "Les lémuriens adorent les bananes distribuées par votre guide local.",
            "Prévoyez de la monnaie locale (Ariary) pour vos achats d'artisanat et de vanille.",
            "L'île est escarpée : prévoyez de bonnes chaussures de marche pour la visite du parc."
          ],
          en: [
            "The friendly lemurs love banana treats handed out by your licensed local guide.",
            "Bring local cash (Ariary) for authentic souvenirs, vanilla, and embroidery.",
            "The terrain is hilly: wear comfortable walking shoes for the nature park loop."
          ],
          it: [
            "I lemuri adorano i pezzetti di banana distribuiti dalla guida locale.",
            "Portate contanti locali (Ariary) per acquistare artigianato e vaniglia.",
            "Sentieri collinari: indossate scarpe da ginnastica per visitare il parco."
          ],
          de: [
            "Die Lemuren freuen sich über Bananenstücke, die Ihr Guide bereithält.",
            "Bargeld (Ariary) für Souvenirs, echte Vanille und Stickereien mitnehmen.",
            "Hügeliges Gelände: Bequeme Schuhe für den Rundgang im Park tragen."
          ],
          es: [
            "A los lémures les encantan los trocitos de plátano que proporciona el guía.",
            "Lleve dinero en efectivo (Ariary) para comprar artesanía y vainilla.",
            "Terreno empinado: use calzado cómodo para el recorrido por el parque."
          ]
        },
        images: [
          { url: nosyKomba, caption: "L'île montagneuse de Nosy Komba" },
          { url: nosyImg1, caption: "Village d'Ampangorina et artisans locaux" },
          { url: nosyParfums, caption: "Panorama sur l'archipel de Nosy Be" }
        ]
      },
      {
        id: "nosy-sakatia",
        rating: "4.7",
        name: {
          fr: "Nosy Sakatia",
          en: "Nosy Sakatia",
          it: "Nosy Sakatia",
          de: "Nosy Sakatia",
          es: "Nosy Sakatia"
        },
        badge: {
          fr: "L'Île aux Orchidées",
          en: "Orchid Island",
          it: "L'Isola delle Orchidee",
          de: "Die Orchideninsel",
          es: "La Isla de las Orquídeas"
        },
        location: {
          fr: "À quelques km à l'ouest de Nosy Be",
          en: "A few km west of Nosy Be",
          it: "A pochi km a ovest di Nosy Be",
          de: "Einige km westlich von Nosy Be",
          es: "A pocos km al oeste de Nosy Be"
        },
        description: {
          fr: "Petite île enchanteresse couverte d'orchidées sauvages et de forêts tropicales luxuriantes, réputée pour ses fonds marins exceptionnels et sa quiétude absolue.",
          en: "An enchanting little island blanketed by wild orchids and lush tropical forest, renowned for its exceptional underwater world and absolute tranquility.",
          it: "Una piccola isola incantevole coperta di orchidee selvatiche e foreste tropicali rigogliose, rinomata per i fondali marini eccezionali e la quiete assoluta.",
          de: "Eine bezaubernde kleine Insel voller wilder Orchideen und üppiger Regenwälder, bekannt für ihre außergewöhnliche Unterwasserwelt und vollkommene Ruhe.",
          es: "Una pequeña isla encantadora cubierta de orquídeas silvestres y exuberante selva tropical, famosa por sus fondos marinos excepcionales y su tranquilidad absoluta."
        },
        history: {
          fr: "Ancienne retraite de missionnaires et de naturalistes, Nosy Sakatia conserve une végétation tropicale remarquable et une biodiversité marine préservée grâce à son isolement.",
          en: "Once a retreat for missionaries and naturalists, Nosy Sakatia preserves remarkable tropical flora and a rich marine biodiversity thanks to its peaceful isolation.",
          it: "Ex rifugio per missionari e naturalisti, Nosy Sakatia conserva una straordinaria flora tropicale e una ricca biodiversità marina grazie al suo isolamento.",
          de: "Einst Rückzugsort für Missionare und Naturforscher, bewahrt Nosy Sakatia dank seiner abgeschiedenen Lage eine bemerkenswerte Tropenflora und reiche Meeresbiodiversität.",
          es: "Antiguo refugio de misioneros y naturalistas, Nosy Sakatia conserva una notable flora tropical y una rica biodiversidad marina gracias a su aislamiento."
        },
        quote: {
          fr: "Sur Sakatia, le temps s'arrête entre les orchidées et le chant des vagues.",
          en: "On Sakatia, time stands still between the orchids and the sound of the waves.",
          it: "A Sakatia, il tempo si ferma tra le orchidee e il canto delle onde.",
          de: "Auf Sakatia hält die Zeit inne — zwischen den Orchideen und dem Rauschen der Wellen.",
          es: "En Sakatia, el tiempo se detiene entre las orquídeas y el sonido de las olas."
        },
        quoteAuthor: {
          fr: "Botaniste voyageur",
          en: "Travelling Botanist",
          it: "Botanico viaggiatore",
          de: "Reisender Botaniker",
          es: "Botánico viajero"
        },
        events: {
          fr: [
            { title: "Plongée et snorkeling", description: "Des récifs coralliens intacts abritant raies, poulpes, nudibrancles et poissons multicolores." },
            { title: "Observation des orchidées", description: "Randonnée dans la forêt tropicale pour découvrir les orchidées sauvages et les caméléons endémiques." },
            { title: "Kayak autour de l'île", description: "Tour de l'île en kayak de mer avec exploration des criques et mangroves secrètes." }
          ],
          en: [
            { title: "Diving & Snorkeling", description: "Pristine coral reefs sheltering rays, octopus, nudibranchs, and vibrant reef fish." },
            { title: "Wild Orchid Spotting", description: "Hike through lush rainforest to discover wild orchids and endemic chameleons." },
            { title: "Kayaking Around the Island", description: "Sea kayak tour around the island exploring hidden coves and secret mangroves." }
          ],
          it: [
            { title: "Immersioni e snorkeling", description: "Barriere coralline incontaminate con razze, polpi, nudibranchi e pesci dai mille colori." },
            { title: "Osservazione delle orchidee", description: "Trekking nella foresta pluviale per scoprire orchidee selvatiche e camaleonti endemici." },
            { title: "Kayak intorno all'isola", description: "Tour in kayak marino con esplorazione di calette nascoste e mangrovie segrete." }
          ],
          de: [
            { title: "Tauchen & Schnorcheln", description: "Unberührte Korallenriffe mit Rochen, Tintenfischen, Nacktschnecken und bunten Rifffischen." },
            { title: "Wilde Orchideen entdecken", description: "Wanderung durch den Regenwald zur Entdeckung wilder Orchideen und endemischer Chamäleons." },
            { title: "Kajak rund um die Insel", description: "Seekajak-Tour um die Insel mit Erkundung versteckter Buchten und geheimer Mangroven." }
          ],
          es: [
            { title: "Buceo y snórkel", description: "Arrecifes de coral pristinos con rayas, pulpos, nudibranquios y peces de colores vibrantes." },
            { title: "Avistamiento de orquídeas silvestres", description: "Senderismo por la selva tropical para descubrir orquídeas silvestres y camaleones endémicos." },
            { title: "Kayak alrededor de la isla", description: "Tour en kayak de mar rodeando la isla, explorando calas escondidas y manglares secretos." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-seedling", label: "Flore", value: "Orchidées sauvages, ylang-ylang, forêt tropicale humide et mangroves" },
            { icon: "fas fa-sailboat", label: "Accès", value: "10 à 15 minutes en bateau depuis Nosy Be" },
            { icon: "fas fa-fish-fins", label: "Vie marine", value: "Fonds exceptionnels : coraux, dugongs, raies léopards et poulpes" }
          ],
          en: [
            { icon: "fas fa-seedling", label: "Flora", value: "Wild orchids, ylang-ylang, humid rainforest, and mangroves" },
            { icon: "fas fa-sailboat", label: "Access", value: "10 to 15 minutes by boat from Nosy Be" },
            { icon: "fas fa-fish-fins", label: "Marine Life", value: "Exceptional seabed: corals, dugongs, leopard rays, and octopuses" }
          ],
          it: [
            { icon: "fas fa-seedling", label: "Flora", value: "Orchidee selvatiche, ylang-ylang, foresta pluviale e mangrovie" },
            { icon: "fas fa-sailboat", label: "Accesso", value: "Da 10 a 15 minuti in barca da Nosy Be" },
            { icon: "fas fa-fish-fins", label: "Vita marina", value: "Fondali eccezionali: coralli, dugonghi, razze leopardo e polpi" }
          ],
          de: [
            { icon: "fas fa-seedling", label: "Flora", value: "Wilde Orchideen, Ylang-Ylang, Regenwald und Mangroven" },
            { icon: "fas fa-sailboat", label: "Anreise", value: "10 bis 15 Minuten per Boot von Nosy Be" },
            { icon: "fas fa-fish-fins", label: "Meeresleben", value: "Außergewöhnlicher Meeresboden: Korallen, Dugongs, Leopardenrochen und Oktopusse" }
          ],
          es: [
            { icon: "fas fa-seedling", label: "Flora", value: "Orquídeas silvestres, ylang-ylang, bosque tropical húmedo y manglares" },
            { icon: "fas fa-sailboat", label: "Acceso", value: "De 10 a 15 minutos en barco desde Nosy Be" },
            { icon: "fas fa-fish-fins", label: "Vida marina", value: "Fondos excepcionales: corales, dugongos, rayas leopardo y pulpos" }
          ]
        },
        tips: {
          fr: [
            "Réservez une nuit sur place dans l'un des petits lodges pour profiter de l'île après le départ des excursionnistes.",
            "Apportez votre équipement de plongée ou snorkeling — les fonds marins sont parmi les plus riches de l'archipel.",
            "La forêt est riche en caméléons et lézards : partez en balade à l'aube ou au crépuscule."
          ],
          en: [
            "Book a night at one of the small island lodges to enjoy Sakatia after day-trippers leave.",
            "Bring your own diving or snorkeling gear — the reefs are among the richest in the archipelago.",
            "The forest is full of chameleons and lizards: explore at dawn or dusk for the best sightings."
          ],
          it: [
            "Prenotate una notte in uno dei piccoli lodge sull'isola per goderla dopo la partenza dei visitatori.",
            "Portate la vostra attrezzatura da immersione o snorkeling — i fondali sono tra i più ricchi dell'arcipelago.",
            "La foresta è ricca di camaleonti e lucertole: esplorate all'alba o al tramonto per gli avvistamenti migliori."
          ],
          de: [
            "Buchen Sie eine Nacht in einem der kleinen Lodges, um die Insel nach Abreise der Tagesgäste zu genießen.",
            "Eigene Tauch- oder Schnorchelausrüstung mitbringen — die Riffe gehören zu den reichsten des Archipels.",
            "Der Wald ist voller Chamäleons und Eidechsen: bei Morgen- oder Abenddämmerung auf Entdeckungstour gehen."
          ],
          es: [
            "Reserve una noche en uno de los pequeños lodges para disfrutar de la isla después de que partan los excursionistas.",
            "Lleve su propio equipo de buceo o snórkel — los arrecifes están entre los más ricos del archipiélago.",
            "El bosque está lleno de camaleones y lagartos: explore al amanecer o al atardecer para los mejores avistamientos."
          ]
        },
        images: [
          { url: nosyImg6, caption: "Les eaux calmes entourant Nosy Sakatia" },
          { url: nosyImg14, caption: "Forêt tropicale et végétation luxuriante de Sakatia" },
          { url: nosyImg7, caption: "Vie marine exceptionnelle autour de Nosy Sakatia" }
        ]
      }
    ]
  },
  beaches: {
    title: {
      fr: "Plages de Nosy Be",
      en: "Nosy Be Beaches",
      it: "Spiagge di Nosy Be",
      de: "Strände von Nosy Be",
      es: "Playas de Nosy Be"
    },
    icon: "fas fa-umbrella-beach",
    description: {
      fr: "Des étendues de sable fin bordées de cocotiers, face à des couchers de soleil féeriques",
      en: "Stretches of soft sand fringed by palm trees, facing magical tropical sunsets",
      it: "Distese di sabbia fine orlate di palme da cocco, di fronte a tramonti incantevoli",
      de: "Feine Sandstrände gesäumt von Kokospalmen vor zauberhaften Sonnenuntergängen",
      es: "Extensiones de arena fina bordeadas de cocoteros, frente a mágicas puestas de sol"
    },
    places: [
      {
        id: "andilana",
        rating: "4.9",
        name: {
          fr: "Plage d'Andilana",
          en: "Andilana Beach",
          it: "Spiaggia di Andilana",
          de: "Andilana Strand",
          es: "Playa de Andilana"
        },
        badge: {
          fr: "La plus belle plage",
          en: "Top Rated Beach",
          it: "La spiaggia più bella",
          de: "Schönster Strand",
          es: "La playa más bella"
        },
        location: {
          fr: "Nord de Nosy Be",
          en: "North Nosy Be",
          it: "Nord di Nosy Be",
          de: "Norden von Nosy Be",
          es: "Norte de Nosy Be"
        },
        description: {
          fr: "Considérée comme la plus belle plage de Nosy Be : deux baies de sable blanc immaculé, des eaux calmes et peu profondes d'une limpidité remarquable.",
          en: "Renowned as Nosy Be's most stunning beach: twin curved bays of powdery white sand, calm, shallow turquoise waters, and world-class sunsets.",
          it: "Ritenuta la più bella spiaggia di Nosy Be: due baie di sabbia bianca finissima, acque calme e limpide ideali per nuotare.",
          de: "Gilt als der schönste Strand auf Nosy Be: Zwei geschwungene Buchten mit feinstem weißem Sand und kristallklarem, ruhigem Wasser.",
          es: "Considerada la playa más hermosa de Nosy Be: dos bahías gemelas de arena blanca, aguas tranquilas y cristalinas ideales para el baño."
        },
        history: {
          fr: "Autrefois paisible crique de pêcheurs, Andilana est devenue l'icône balnéaire de l'île tout en préservant son authenticité et ses collines verdoyantes.",
          en: "Once a secluded fishing cove, Andilana has become the island's premier coastal jewel while preserving its lush tropical hillsides.",
          it: "Un tempo tranquillo villaggio di pescatori, Andilana è diventata il gioiello balneare dell'isola pur conservando le sue verdi colline.",
          de: "Einst eine einsame Fischerbucht, ist Andilana heute das Aushängeschild der Insel, umgeben von üppig grünen Hügeln.",
          es: "Antaño una tranquila ensenada de pescadores, Andilana se ha convertido en el icono costero de la isla conservando sus verdes colinas."
        },
        quote: {
          fr: "À Andilana, le bleu de la mer se confond avec la douceur de vivre malgache.",
          en: "At Andilana, the blue ocean melts into the warm, relaxing Malagasy way of life.",
          it: "Ad Andilana, l'azzurro del mare si fonde con la dolcezza del vivere malgascio.",
          de: "In Andilana verschmilzt das Blau des Meeres mit der madagassischen Gelassenheit.",
          es: "En Andilana, el azul del mar se funde con la calidez del estilo de vida malgache."
        },
        quoteAuthor: {
          fr: "Chroniqueur voyage",
          en: "Travel Writer",
          it: "Scrittore di viaggi",
          de: "Reiseautor",
          es: "Cronista de viajes"
        },
        events: {
          fr: [
            { title: "Baignade en eaux calmes", description: "Idéal à marée haute comme à marée basse grâce à un dénivelé très doux." },
            { title: "Coucher de soleil sur la mer", description: "Les couleurs crépusculaires transforment la baie en tableau doré chaque soir." }
          ],
          en: [
            { title: "Gentle Swimming", description: "Ideal swimming conditions at both high and low tide with a very gentle slope." },
            { title: "Sunset Dining", description: "Spectacular dusk colors bathe the entire bay in golden hues every evening." }
          ],
          it: [
            { title: "Bagno in acque calme", description: "Ideale sia con l'alta che con la bassa marea grazie a un fondale dolcissimo." },
            { title: "Tramonto sulla baia", description: "I colori del crepuscolo trasformano la baia in un quadro dorato ogni sera." }
          ],
          de: [
            { title: "Baden in ruhigem Wasser", description: "Sowohl bei Ebbe als auch bei Flut herrliche Badebedingungen durch den flach abfallenden Sand." },
            { title: "Sonnenuntergang am Strand", description: "Das Abendrot taucht die gesamte Bucht jeden Tag in ein goldenes Lichtermeer." }
          ],
          es: [
            { title: "Baño en aguas tranquilas", description: "Condiciones ideales con marea alta o baja gracias a una suave pendiente." },
            { title: "Atardecer frente al mar", description: "Los colores del atardecer transforman la bahía en un lienzo dorado cada noche." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-water", label: "Baignade", value: "Eaux cristallines et protégées, sécurisées pour toute la famille" },
            { icon: "fas fa-utensils", label: "Restauration", value: "Restaurants de plage réputés pour poissons et langoustes" },
            { icon: "fas fa-car", label: "Accès", value: "Accessible en taxi ou véhicule en 35 min depuis Hell-Ville" }
          ],
          en: [
            { icon: "fas fa-water", label: "Swimming", value: "Crystal-clear protected waters, safe and family-friendly" },
            { icon: "fas fa-utensils", label: "Dining", value: "Celebrated beach restaurants serving fresh fish and lobster" },
            { icon: "fas fa-car", label: "Access", value: "Accessible by taxi or car in 35 min from Hell-Ville" }
          ],
          it: [
            { icon: "fas fa-water", label: "Balneazione", value: "Acque cristalline protette, sicure per tutta la famiglia" },
            { icon: "fas fa-utensils", label: "Ristoranti", value: "Ristoranti sulla spiaggia celebri per pesce fresco e aragoste" },
            { icon: "fas fa-car", label: "Accesso", value: "Raggiungibile in taxi o auto in 35 min da Hell-Ville" }
          ],
          de: [
            { icon: "fas fa-water", label: "Baden", value: "Kristallklares, geschütztes Wasser, sicher für die ganze Familie" },
            { icon: "fas fa-utensils", label: "Gastronomie", value: "Beliebte Strandrestaurants mit frischem Fisch und Hummer" },
            { icon: "fas fa-car", label: "Anfahrt", value: "In 35 Minuten mit Taxi oder PKW von Hell-Ville erreichbar" }
          ],
          es: [
            { icon: "fas fa-water", label: "Baño", value: "Aguas cristalinas protegidas, seguras para toda la familia" },
            { icon: "fas fa-utensils", label: "Gastronomía", value: "Restaurantes de playa famosos por pescado fresco y langostas" },
            { icon: "fas fa-car", label: "Acceso", value: "Accesible en taxi o vehículo en 35 min desde Hell-Ville" }
          ]
        },
        tips: {
          fr: [
            "Passez-y la fin d'après-midi pour combiner baignade et dîner face au coucher de soleil.",
            "Goûtez à la noix de coco fraîchement cueillie sur la plage."
          ],
          en: [
            "Spend late afternoon here to combine a refreshing swim with beachfront sunset dinner.",
            "Try freshly cracked coconuts sold directly on the beach."
          ],
          it: [
            "Trascorrete qui il tardo pomeriggio per unire bagno e cena al tramonto.",
            "Assaggiate il cocco fresco aperto direttamente in spiaggia."
          ],
          de: [
            "Verbringen Sie den späten Nachmittag hier für ein Bad mit anschließendem Abendessen am Meer.",
            "Probieren Sie frische Kokosnüsse direkt am Strand."
          ],
          es: [
            "Pase la tarde aquí para combinar baño y cena frente a la puesta de sol.",
            "Pruebe el agua de coco fresca directamente en la playa."
          ]
        },
        images: [
          { url: nosyAndilana, caption: "Plage d'Andilana au coucher du soleil" },
          { url: nosyImg12, caption: "Eaux turquoise et sable fin d'Andilana" },
          { url: nosyImg13, caption: "Rivage immaculé et calme tropical" }
        ]
      },
      {
        id: "madirokely",
        rating: "4.6",
        name: {
          fr: "Plage de Madirokely",
          en: "Madirokely Beach",
          it: "Spiaggia di Madirokely",
          de: "Madirokely Strand",
          es: "Playa de Madirokely"
        },
        badge: {
          fr: "Ambiance & Nautisme",
          en: "Vibrant & Nautical",
          it: "Vivace & Nautica",
          de: "Lebendig & Wassersport",
          es: "Ambiente & Náutica"
        },
        location: {
          fr: "Sud-Ouest de Nosy Be",
          en: "Southwest Nosy Be",
          it: "Sud-Ovest di Nosy Be",
          de: "Südwesten von Nosy Be",
          es: "Suroeste de Nosy Be"
        },
        description: {
          fr: "Le cœur animé du littoral de Nosy Be : point de départ de nombreuses excursions nautiques, bordé de terrasses, de cafés et de restaurants conviviaux.",
          en: "The vibrant heartbeat of Nosy Be's coast: main departure point for sea tours, lined with beachfront cafes, terraces, and lively local eateries.",
          it: "Il cuore vivace della costa di Nosy Be: punto di partenza per tour in barca, terrazze panoramiche e ristoranti tipici.",
          de: "Das lebendige Zentrum der Küste: Hauptausgangspunkt für Bootstouren, gesäumt von Strandcafés, Terrassen und Restaurants.",
          es: "El animado corazón de la costa de Nosy Be: punto de partida de excursiones marítimas, terrazas y acogedores restaurantes."
        },
        history: {
          fr: "Village de pêcheurs traditionnel devenu au fil des décennies le principal pôle d'activités nautiques et de convivialité de l'île.",
          en: "A traditional fishing hamlet that grew over decades into the island's primary hub for water activities and seaside dining.",
          it: "Tradizionale villaggio di pescatori diventato negli anni il punto di riferimento per attività nautiche e vita serale.",
          de: "Ein traditionelles Fischerdorf, das sich zum zentralen Ausgangspunkt für Wassersport und Inselausflüge entwickelt hat.",
          es: "Pueblo de pescadores tradicional que con el tiempo se convirtió en el principal centro de actividades náuticas de la isla."
        },
        quote: {
          fr: "Le point de ralliement idéal pour embarquer vers les îles.",
          en: "The ultimate gathering point to set sail towards the surrounding islands.",
          it: "Il punto di partenza perfetto per salpare verso le isole.",
          de: "Der perfekte Ausgangspunkt, um zu den Trauminseln aufzubrechen.",
          es: "El punto de encuentro ideal para zarpar hacia las islas."
        },
        quoteAuthor: {
          fr: "Capitaine d'excursion",
          en: "Boat Captain",
          it: "Capitano di escursioni",
          de: "Bootskapitän",
          es: "Capitán de excursiones"
        },
        events: {
          fr: [
            { title: "Départs des bateaux le matin", description: "Spectacle des pirogues et vedettes prenant le large pour les îles voisines." },
            { title: "Soirées conviviales en bord de mer", description: "Musique live acoustique et saveurs locales dans les paillotes de plage." }
          ],
          en: [
            { title: "Morning Boat Departures", description: "Lively morning scene with boats setting out across the azure sea towards the archipelago." },
            { title: "Seaside Evening Vibes", description: "Acoustic live music and authentic Malagasy cuisine in beachfront open-air restaurants." }
          ],
          it: [
            { title: "Partenza mattutina delle barche", description: "Spettacolo delle imbarcazioni che salpano verso le isole vicine all'alba." },
            { title: "Serate musicali sul lungomare", description: "Musica dal vivo e sapori locali nei ristoranti affacciati sul mare." }
          ],
          de: [
            { title: "Morgendliche Bootsabfahrten", description: "Malerisches Treiben am Ufer, wenn Boote zu den Nachbarinseln aufbrechen." },
            { title: "Abendstimmung am Strand", description: "Live-Musik und madagassische Spezialitäten in gemütlichen Strandlokalen." }
          ],
          es: [
            { title: "Salidas en barco por la mañana", description: "Animada escena matinal con embarcaciones zarpando hacia el archipiélago." },
            { title: "Ambiente nocturno junto al mar", description: "Música en vivo y gastronomía local en restaurantes frente a la playa." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-sailboat", label: "Activités", value: "Plongée, location de bateaux, pêche au gros, sorties baleines" },
            { icon: "fas fa-route", label: "Localisation", value: "À 10 min d'Hell-Ville (liaisons permanentes en tuk-tuk)" }
          ],
          en: [
            { icon: "fas fa-sailboat", label: "Activities", value: "Scuba diving, private boat charters, big game fishing, whale watching" },
            { icon: "fas fa-route", label: "Location", value: "10 minutes from Hell-Ville (frequent tuk-tuk connections)" }
          ],
          it: [
            { icon: "fas fa-sailboat", label: "Attività", value: "Immersioni, noleggio barche, pesca d'altura, safari balene" },
            { icon: "fas fa-route", label: "Posizione", value: "A 10 min da Hell-Ville (collegamenti continui in tuk-tuk)" }
          ],
          de: [
            { icon: "fas fa-sailboat", label: "Aktivitäten", value: "Tauchen, Bootscharter, Hochseeangeln, Walbeobachtungstouren" },
            { icon: "fas fa-route", label: "Lage", value: "Nur 10 Min. von Hell-Ville entfernt (stetige Tuk-Tuk-Verbindungen)" }
          ],
          es: [
            { icon: "fas fa-sailboat", label: "Actividades", value: "Buceo, alquiler de barcos, pesca de altura, avistamiento de ballenas" },
            { icon: "fas fa-route", label: "Ubicación", value: "A 10 min de Hell-Ville (constantes conexiones en tuk-tuk)" }
          ]
        },
        tips: {
          fr: [
            "Idéal pour organiser facilement vos sorties en mer le matin même.",
            "Nombreux centres de plongée certifiés PADI situés directement sur la plage."
          ],
          en: [
            "Convenient hub to organize your marine excursions and island hops.",
            "Certified PADI dive centers located directly along the beach front."
          ],
          it: [
            "Punto comodo per organizzare uscite in barca ed escursioni.",
            "Numerosi centri immersioni PADI certificati direttamente sulla spiaggia."
          ],
          de: [
            "Praktischer Knotenpunkt für spontane Bootstouren und Inselausflüge.",
            "Mehrere zertifizierte PADI-Tauchschulen direkt am Strand."
          ],
          es: [
            "Punto ideal para organizar fácilmente excursiones en barco y salidas marinas.",
            "Centros de buceo certificados PADI ubicados directamente en la playa."
          ]
        },
        images: [
          { url: nosyImg11, caption: "Terrasse de restaurant en bord de plage à Madirokely" },
          { url: nosyImg8, caption: "Plage de Madirokely animée" },
          { url: nosyImg9, caption: "Ambiance locale et activités nautiques" }
        ]
      },
      {
        id: "ambatoloaka",
        rating: "4.5",
        name: {
          fr: "Plage d'Ambatoloaka",
          en: "Ambatoloaka Beach",
          it: "Spiaggia di Ambatoloaka",
          de: "Ambatoloaka Strand",
          es: "Playa de Ambatoloaka"
        },
        badge: {
          fr: "Vie nocturne & Détente",
          en: "Nightlife & Relaxation",
          it: "Vita notturna & Relax",
          de: "Nachtleben & Entspannung",
          es: "Vida nocturna & Relax"
        },
        location: {
          fr: "Côte Ouest de Nosy Be",
          en: "West Coast of Nosy Be",
          it: "Costa Ovest di Nosy Be",
          de: "Westküste von Nosy Be",
          es: "Costa Oeste de Nosy Be"
        },
        description: {
          fr: "La plage la plus animée de Nosy Be le soir, réputée pour ses bars de plage, ses restaurants et sa vie nocturne festive au bord de l'eau.",
          en: "Nosy Be's liveliest beach after dark, famed for its beach bars, open-air restaurants, and a vibrant seaside nightlife scene.",
          it: "La spiaggia più animata di Nosy Be al calare del sole, rinomata per i suoi bar sulla riva, ristoranti all'aperto e movida serale.",
          de: "Der lebendigste Strand von Nosy Be in den Abendstunden, bekannt für seine Strandbars, Open-Air-Restaurants und ausgelassenes Nachtleben.",
          es: "La playa más animada de Nosy Be al caer la noche, famosa por sus bares en la orilla, restaurantes al aire libre y vibrante vida nocturna."
        },
        history: {
          fr: "Autrefois simple village côtier, Ambatoloaka est devenu le principal centre de vie nocturne et de divertissement de l'île, tout en conservant son charme local.",
          en: "Once a quiet coastal village, Ambatoloaka evolved into the island's primary entertainment and nightlife center while keeping its local charm.",
          it: "Un tempo tranquillo villaggio costiero, Ambatoloaka si è trasformato nel principale centro di intrattenimento dell'isola conservando il suo fascino locale.",
          de: "Einst ein stilles Küstendorf, hat sich Ambatoloaka zum wichtigsten Unterhaltungs- und Nachtlebenzentrum der Insel entwickelt.",
          es: "Antaño un tranquilo pueblo costero, Ambatoloaka se convirtió en el principal centro de entretenimiento nocturno de la isla, conservando su encanto local."
        },
        quote: {
          fr: "Ici, la nuit tombe doucement sur la mer et la fête commence.",
          en: "Here, night falls gently over the sea and the celebration begins.",
          it: "Qui, la notte scende dolcemente sul mare e la festa ha inizio.",
          de: "Hier fällt die Nacht sanft über das Meer, und das Fest beginnt.",
          es: "Aquí, la noche cae suavemente sobre el mar y la fiesta comienza."
        },
        quoteAuthor: {
          fr: "Habitant local",
          en: "Local Resident",
          it: "Abitante locale",
          de: "Einheimischer",
          es: "Habitante local"
        },
        events: {
          fr: [
            { title: "Soirées musicales sur la plage", description: "Bars et paillotes proposant musique live, cocktails tropicaux et ambiance festive en bord de mer." },
            { title: "Coucher de soleil spectaculaire", description: "La côte ouest offre des couchers de soleil époustouflants qui embrasent l'horizon chaque soir." }
          ],
          en: [
            { title: "Beach Music Evenings", description: "Beach bars and open huts offering live music, tropical cocktails, and a festive waterfront vibe." },
            { title: "Spectacular Sunset Views", description: "The west-facing coast delivers breathtaking sunsets painting the horizon every evening." }
          ],
          it: [
            { title: "Serate musicali in spiaggia", description: "Bar e capanne sulla riva con musica dal vivo, cocktail tropicali e atmosfera festosa." },
            { title: "Tramonti spettacolari", description: "La costa ovest regala tramonti mozzafiato che dipingono l'orizzonte ogni sera." }
          ],
          de: [
            { title: "Strandabende mit Live-Musik", description: "Strandbars und offene Hütten mit Live-Musik, tropischen Cocktails und Feststimmung." },
            { title: "Spektakuläre Sonnenuntergänge", description: "Die westlich gelegene Küste bietet atemberaubende Abenddämmerungen am Horizont." }
          ],
          es: [
            { title: "Veladas musicales en la playa", description: "Bares y chozas a pie de playa con música en vivo, cócteles tropicales y ambiente festivo." },
            { title: "Puestas de sol espectaculares", description: "La costa orientada al oeste ofrece atardeceres impresionantes que tiñen el horizonte cada noche." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-martini-glass", label: "Vie nocturne", value: "Bars, restaurants et discothèques en bord de mer ouverts tard" },
            { icon: "fas fa-route", label: "Accès", value: "À 12 min d'Hell-Ville en tuk-tuk ou taxi" },
            { icon: "fas fa-sun", label: "Exposition", value: "Plage orientée ouest, idéale pour les couchers de soleil" }
          ],
          en: [
            { icon: "fas fa-martini-glass", label: "Nightlife", value: "Beach bars, restaurants, and late-night venues by the water" },
            { icon: "fas fa-route", label: "Access", value: "12 minutes from Hell-Ville by tuk-tuk or taxi" },
            { icon: "fas fa-sun", label: "Exposure", value: "West-facing beach, perfect for watching sunsets" }
          ],
          it: [
            { icon: "fas fa-martini-glass", label: "Vita notturna", value: "Bar, ristoranti e locali notturni sul lungomare aperti fino a tardi" },
            { icon: "fas fa-route", label: "Accesso", value: "A 12 min da Hell-Ville in tuk-tuk o taxi" },
            { icon: "fas fa-sun", label: "Esposizione", value: "Spiaggia orientata a ovest, perfetta per i tramonti" }
          ],
          de: [
            { icon: "fas fa-martini-glass", label: "Nachtleben", value: "Strandbars, Restaurants und Spätlokale direkt am Wasser" },
            { icon: "fas fa-route", label: "Anreise", value: "12 Minuten von Hell-Ville per Tuk-Tuk oder Taxi" },
            { icon: "fas fa-sun", label: "Ausrichtung", value: "Westlich ausgerichteter Strand, ideal für Sonnenuntergänge" }
          ],
          es: [
            { icon: "fas fa-martini-glass", label: "Vida nocturna", value: "Bares de playa, restaurantes y locales nocturnos junto al agua" },
            { icon: "fas fa-route", label: "Acceso", value: "A 12 min de Hell-Ville en tuk-tuk o taxi" },
            { icon: "fas fa-sun", label: "Orientación", value: "Playa orientada al oeste, ideal para las puestas de sol" }
          ]
        },
        tips: {
          fr: [
            "Profitez de l'heure dorée en fin d'après-midi pour des photos et un apéritif face à la mer.",
            "Explorez les petits restaurants locaux en bord de plage pour une cuisine authentique à prix doux."
          ],
          en: [
            "Come during golden hour for stunning photos and a sunset cocktail by the sea.",
            "Explore the small local restaurants along the beachfront for authentic cuisine at affordable prices."
          ],
          it: [
            "Approfittate dell'ora d'oro per foto stupende e un aperitivo davanti al mare.",
            "Esplorate i piccoli ristoranti locali sul lungomare per cucina autentica a prezzi accessibili."
          ],
          de: [
            "Genießen Sie die goldene Stunde für tolle Fotos und einen Cocktail am Meer.",
            "Entdecken Sie die kleinen Strandrestaurants für authentische Küche zu günstigen Preisen."
          ],
          es: [
            "Venga durante la hora dorada para fotos impresionantes y un cóctel frente al mar.",
            "Explore los pequeños restaurantes locales a lo largo de la playa para cocina auténtica a precios accesibles."
          ]
        },
        images: [
          { url: nosyImg10, caption: "Plage d'Ambatoloaka au coucher du soleil" },
          { url: nosyImg9, caption: "Ambiance festive en bord de mer" },
          { url: nosyImg15, caption: "Vue panoramique sur la côte ouest de Nosy Be" }
        ]
      },
      {
        id: "ambondrona",
        rating: "4.7",
        name: {
          fr: "Plage d'Ambondrona",
          en: "Ambondrona Beach",
          it: "Spiaggia di Ambondrona",
          de: "Ambondrona Strand",
          es: "Playa de Ambondrona"
        },
        badge: {
          fr: "Havre de paix sauvage",
          en: "Unspoiled Paradise",
          it: "Paradiso incontaminato",
          de: "Stilles Naturparadies",
          es: "Paraíso virgen"
        },
        location: {
          fr: "Nord-Est de Nosy Be",
          en: "Northeast Nosy Be",
          it: "Nord-Est di Nosy Be",
          de: "Nordosten von Nosy Be",
          es: "Noreste de Nosy Be"
        },
        description: {
          fr: "Une plage encore préservée du nord-est de Nosy Be, offrant un cadre sauvage et serein avec son sable doré, ses eaux transparentes et ses cocoteraies ombragées.",
          en: "A pristine and peaceful beach on the northeast coast of Nosy Be, featuring golden sand, clear waters, and shaded coconut groves far from the tourist crowds.",
          it: "Una spiaggia incontaminata e tranquilla nel nord-est di Nosy Be, con sabbia dorata, acque limpide e palme ombreggiate lontano dal turismo di massa.",
          de: "Ein noch unberührter, ruhiger Strand im Nordosten von Nosy Be mit goldenem Sand, klarem Wasser und schattigen Kokospalmenhainen abseits des Massentourismus.",
          es: "Una playa virgen y tranquila en la costa noreste de Nosy Be, con arena dorada, aguas cristalinas y cocoteros sombreados lejos del turismo masivo."
        },
        history: {
          fr: "Longtemps connue des seuls pêcheurs locaux, la plage d'Ambondrona commence à s'ouvrir au tourisme durable tout en conservant son environnement naturel intact.",
          en: "Long known only to local fishermen, Ambondrona beach is gradually opening to sustainable tourism while preserving its pristine natural environment.",
          it: "Nota per lungo tempo solo ai pescatori locali, la spiaggia di Ambondrona si sta aprendo lentamente al turismo sostenibile mantenendo intatto il suo ambiente.",
          de: "Lange nur lokalen Fischern bekannt, öffnet sich der Strand von Ambondrona allmählich dem nachhaltigen Tourismus und bewahrt dabei seine unberührte Natur.",
          es: "Conocida durante mucho tiempo solo por los pescadores locales, la playa de Ambondrona se abre gradualmente al turismo sostenible conservando su entorno natural."
        },
        quote: {
          fr: "Un coin de paradis que l'on garde jalousement pour soi.",
          en: "A corner of paradise you'll want to keep all to yourself.",
          it: "Un angolo di paradiso che si vorrebbe tenere tutto per sé.",
          de: "Ein Stück Paradies, das man am liebsten für sich allein behalten möchte.",
          es: "Un rincón del paraíso que uno querría guardar para sí mismo."
        },
        quoteAuthor: {
          fr: "Voyageur indépendant",
          en: "Independent Traveler",
          it: "Viaggiatore indipendente",
          de: "Individualreisender",
          es: "Viajero independiente"
        },
        events: {
          fr: [
            { title: "Baignade en eaux cristallines", description: "Des eaux calmes et peu profondes, idéales pour se baigner en famille ou en couple." },
            { title: "Pêche traditionnelle au lever du jour", description: "Observation des pêcheurs locaux tirant leurs filets à l'aube dans un cadre serein." }
          ],
          en: [
            { title: "Swimming in Crystal Waters", description: "Calm and shallow waters perfect for swimming, relaxing, or a quiet family beach day." },
            { title: "Traditional Fishing at Dawn", description: "Watch local fishermen cast their nets at sunrise in a peaceful and authentic setting." }
          ],
          it: [
            { title: "Bagno in acque cristalline", description: "Acque calme e basse, ideali per nuotare in famiglia o in coppia." },
            { title: "Pesca tradizionale all'alba", description: "Osservare i pescatori locali che tirano le reti all'alba in un contesto sereno." }
          ],
          de: [
            { title: "Baden in kristallklarem Wasser", description: "Ruhige und seichte Gewässer — perfekt für ein Bad im Familienkreis oder zu zweit." },
            { title: "Traditionelles Fischen bei Sonnenaufgang", description: "Erleben Sie lokale Fischer beim morgendlichen Netzeinzug in einer friedvollen Atmosphäre." }
          ],
          es: [
            { title: "Baño en aguas cristalinas", description: "Aguas calmadas y poco profundas, ideales para bañarse en familia o en pareja." },
            { title: "Pesca tradicional al amanecer", description: "Observe a los pescadores locales lanzando sus redes al alba en un entorno sereno." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-leaf", label: "Environnement", value: "Plage préservée entourée de végétation tropicale dense" },
            { icon: "fas fa-car", label: "Accès", value: "Accessible en 4x4 ou quad depuis Hell-Ville (environ 30 min)" },
            { icon: "fas fa-water", label: "Baignade", value: "Eaux calmes et sécurisées, idéales pour la snorkeling côtier" }
          ],
          en: [
            { icon: "fas fa-leaf", label: "Environment", value: "Pristine beach surrounded by dense tropical vegetation" },
            { icon: "fas fa-car", label: "Access", value: "Reachable by 4x4 or quad from Hell-Ville (about 30 min)" },
            { icon: "fas fa-water", label: "Swimming", value: "Calm, safe waters ideal for coastal snorkeling" }
          ],
          it: [
            { icon: "fas fa-leaf", label: "Ambiente", value: "Spiaggia incontaminata circondata da fitta vegetazione tropicale" },
            { icon: "fas fa-car", label: "Accesso", value: "Raggiungibile in 4x4 o quad da Hell-Ville (circa 30 min)" },
            { icon: "fas fa-water", label: "Balneazione", value: "Acque calme e sicure, ideali per lo snorkeling costiero" }
          ],
          de: [
            { icon: "fas fa-leaf", label: "Umgebung", value: "Unberührter Strand umgeben von dichter tropischer Vegetation" },
            { icon: "fas fa-car", label: "Anreise", value: "Per 4x4 oder Quad von Hell-Ville erreichbar (ca. 30 Min.)" },
            { icon: "fas fa-water", label: "Baden", value: "Ruhiges, sicheres Wasser — ideal zum Küstenschnorcheln" }
          ],
          es: [
            { icon: "fas fa-leaf", label: "Entorno", value: "Playa virgen rodeada de densa vegetación tropical" },
            { icon: "fas fa-car", label: "Acceso", value: "Accesible en 4x4 o quad desde Hell-Ville (unos 30 min)" },
            { icon: "fas fa-water", label: "Baño", value: "Aguas tranquilas y seguras, ideales para el snórkel costero" }
          ]
        },
        tips: {
          fr: [
            "Partez tôt le matin pour profiter de la plage avant l'arrivée des visiteurs.",
            "Emportez des provisions : peu de restaurants à proximité immédiate.",
            "Idéale pour une excursion en quad qui combine découverte de l'île et farniente en bord de mer."
          ],
          en: [
            "Go early in the morning to enjoy the beach before other visitors arrive.",
            "Bring your own food and water — few restaurants are nearby.",
            "Great for a quad tour that combines island exploration with beach relaxation."
          ],
          it: [
            "Partite di mattina presto per godere della spiaggia prima degli altri visitatori.",
            "Portate provviste: pochi ristoranti nelle vicinanze.",
            "Ideale per un'escursione in quad che unisce scoperta dell'isola e relax al mare."
          ],
          de: [
            "Früh morgens kommen, um den Strand vor anderen Besuchern zu genießen.",
            "Eigene Verpflegung mitbringen — wenige Restaurants in der Nähe.",
            "Ideal für eine Quad-Tour, die Inselerkundung und Strandentspannung verbindet."
          ],
          es: [
            "Llegue temprano por la mañana para disfrutar de la playa antes que otros visitantes.",
            "Lleve sus propios alimentos y agua — pocos restaurantes en los alrededores.",
            "Ideal para una excursión en quad que combina exploración de la isla y relax en la playa."
          ]
        },
        images: [
          { url: nosyImg4, caption: "Plage d'Ambondrona et ses eaux transparentes" },
          { url: nosyImg5, caption: "Végétation tropicale et cadre préservé" },
          { url: nosyAndilana, caption: "Sable doré et eaux calmes de la côte nord-est" }
        ]
      }
    ]
  },
  culture: {
    title: {
      fr: "Points de vue, Nature & Culture",
      en: "Viewpoints, Nature & Culture",
      it: "Punti panoramici, Natura & Cultura",
      de: "Aussichtspunkte, Natur & Kultur",
      es: "Miradores, Naturaleza & Cultura"
    },
    icon: "fas fa-mountain",
    description: {
      fr: "Lacs volcaniques sacrés, forêts primaires et belvédères à couper le souffle",
      en: "Sacred volcanic crater lakes, primary forests, and breathtaking panoramic viewpoints",
      it: "Laghi vulcanici sacri, foreste primarie e belvederi mozzafiato",
      de: "Heilige Vulkankraterseen, Primärwälder und atemberaubende Aussichtspunkte",
      es: "Lagos volcánicos sagrados, bosques primarios y miradores impresionantes"
    },
    places: [
      {
        id: "mont-passot",
        rating: "5.0",
        name: {
          fr: "Mont Passot & Lacs Sacrés",
          en: "Mont Passot & Sacred Crater Lakes",
          it: "Mont Passot & Laghi Sacri",
          de: "Mont Passot & Heilige Kraterseen",
          es: "Mont Passot & Lagos Sagrados"
        },
        badge: {
          fr: "Coucher de soleil légendaire",
          en: "Legendary Sunset",
          it: "Tramonto leggendario",
          de: "Legendärer Sonnenuntergang",
          es: "Atardecer legendario"
        },
        location: {
          fr: "Centre-Nord de Nosy Be (329 m)",
          en: "North-Central Nosy Be (329 m)",
          it: "Centro-Nord di Nosy Be (329 m)",
          de: "Zentral-Norden von Nosy Be (329 m)",
          es: "Centro-Norte de Nosy Be (329 m)"
        },
        description: {
          fr: "Le point culminant de l'île offrant un panorama spectaculaire à 360° sur l'archipel et les onze lacs de cratère volcaniques sacrés nichés dans la verdure.",
          en: "The highest peak on the island offering a 360° view of the archipelago and eleven sacred volcanic crater lakes tucked amid tropical greenery.",
          it: "Il punto più alto dell'isola con una vista spettacolare a 360° sull'arcipelago e gli undici laghi vulcanici sacri incastonati nel verde.",
          de: "Der höchste Punkt der Insel mit spektakulärem 360°-Blick über den Archipel und elf heilige Vulkankraterseen inmitten tropischer Vegetation.",
          es: "El punto más alto de la isla que ofrece una vista de 360° sobre el archipiélago y los once lagos de cráter volcánicos sagrados."
        },
        history: {
          fr: "Dédié au capitaine Pierre Passot qui prit possession de l'île en 1841, le site est entouré de lacs sacrés habités par les esprits des rois Sakalava.",
          en: "Named after Captain Pierre Passot who established French presence in 1841, the surrounding crater lakes are revered sanctuaries of Sakalava royal spirits.",
          it: "Dedicato al capitano Pierre Passot (1841), il sito è circondato da laghi sacri protetti dagli spiriti degli antichi re Sakalava.",
          de: "Benannt nach Kapitän Pierre Passot (1841); die umliegenden Kraterseen sind heilige Orte der Ahnengeister der Sakalava-Könige.",
          es: "Dedicado al capitán Pierre Passot (1841), el lugar está rodeado de lagos sagrados habitados por los espíritus de los reyes Sakalava."
        },
        quote: {
          fr: "Le soleil plonge dans l'océan Indien et embrase tous les lacs d'or et de pourpre.",
          en: "The sun plunges into the Indian Ocean, setting all crater lakes ablaze in gold and crimson.",
          it: "Il sole scende nell'Oceano Indiano e accende tutti i laghi d'oro e porpora.",
          de: "Die Sonne versinkt im Indischen Ozean und taucht die Kraterseen in pures Gold und Purpur.",
          es: "El sol se sumerge en el Océano Índico e ilumina todos los lagos con tonos dorados y púrpuras."
        },
        quoteAuthor: {
          fr: "Guide touristique de Nosy Be",
          en: "Nosy Be Tour Guide",
          it: "Guida turistica di Nosy Be",
          de: "Reiseleiter Nosy Be",
          es: "Guía turístico de Nosy Be"
        },
        events: {
          fr: [
            { title: "Coucher de soleil féerique", description: "Le spectacle incontournable de Nosy Be : ciel flamboyant et reflets sur les lacs." },
            { title: "Sentier botanique et lémuriens", description: "Petites randonnées autour des lacs pour observer oiseaux aquatiques et caméléons." }
          ],
          en: [
            { title: "Sunset Spectacle", description: "Nosy Be's iconic must-see: flaming sky reflecting across pristine volcanic crater lakes." },
            { title: "Nature & Birdwatching Trails", description: "Short trails around the lakes to observe waterfowl, chameleons, and lush flora." }
          ],
          it: [
            { title: "Tramonto magico", description: "Lo spettacolo imperdibile di Nosy Be: cielo infuocato e riflessi sui laghi vulcanici." },
            { title: "Sentiero botanico e fauna", description: "Passeggiate intorno ai laghi per ammirare uccelli acquatici, camaleonti e flora lussureggiante." }
          ],
          de: [
            { title: "Spektakulärer Sonnenuntergang", description: "Das absolute Highlight auf Nosy Be: Glühender Abendhimmel spiegelt sich in den Kraterseen." },
            { title: "Naturlehrpfade & Vogelbeobachtung", description: "Kurze Rundwege um die Seen zur Beobachtung von Wasservögeln, Chamäleons und Pflanzenwelt." }
          ],
          es: [
            { title: "Atardecer inolvidable", description: "El espectáculo imprescindible de Nosy Be: cielo radiante reflejado en los lagos volcánicos." },
            { title: "Senderos botánicos y fauna", description: "Paseos alrededor de los lagos para observar aves acuáticas, camaleones y flora tropical." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-mountain", label: "Altitude", value: "329 mètres (point culminant de Nosy Be)" },
            { icon: "fas fa-water", label: "Lacs", value: "11 lacs de cratère sacrés d'origine volcanique" },
            { icon: "fas fa-road", label: "Accès", value: "Route goudronnée et belvédère aménagé accessible à tous" }
          ],
          en: [
            { icon: "fas fa-mountain", label: "Altitude", value: "329 meters (highest peak of Nosy Be)" },
            { icon: "fas fa-water", label: "Lakes", value: "11 sacred volcanic crater lakes" },
            { icon: "fas fa-road", label: "Access", value: "Paved road and landscaped observation terrace suitable for all" }
          ],
          it: [
            { icon: "fas fa-mountain", label: "Altitudine", value: "329 metri (cima più alta di Nosy Be)" },
            { icon: "fas fa-water", label: "Laghi", value: "11 laghi vulcanici sacri" },
            { icon: "fas fa-road", label: "Accesso", value: "Strada asfaltata e terrazza panoramica accessibile a tutti" }
          ],
          de: [
            { icon: "fas fa-mountain", label: "Höhe", value: "329 Meter (höchster Gipfel auf Nosy Be)" },
            { icon: "fas fa-water", label: "Seen", value: "11 heilige Vulkankraterseen" },
            { icon: "fas fa-road", label: "Anfahrt", value: "Asphaltierte Straße mit modern ausgebauter Aussichtsplattform" }
          ],
          es: [
            { icon: "fas fa-mountain", label: "Altitud", value: "329 metros (cima más alta de Nosy Be)" },
            { icon: "fas fa-water", label: "Lagos", value: "11 lagos volcánicos sagrados" },
            { icon: "fas fa-road", label: "Acceso", value: "Carretera asfaltada y mirador acondicionado apto para todos" }
          ]
        },
        tips: {
          fr: [
            "Arrivez vers 17h pour profiter de la lumière dorée avant le coucher de soleil à 17h45.",
            "Respectez le caractère sacré des lacs : baignade et pêche y sont interdites par la tradition (fady).",
            "Profitez du bar panoramique au sommet pour siroter un jus de fruits frais."
          ],
          en: [
            "Arrive around 5:00 PM to catch the magical golden hour before sunset at 5:45 PM.",
            "Respect the sacred nature of the lakes: swimming and fishing are prohibited (fady).",
            "Enjoy fresh tropical fruit juices at the panoramic viewpoint terrace."
          ],
          it: [
            "Arrivate verso le 17:00 per godervi la luce dorata prima del tramonto alle 17:45.",
            "Rispettate la sacralità dei laghi: il bagno e la pesca sono vietati dalla tradizione (fady).",
            "Godetevi un succo di frutta fresca sulla terrazza panoramica in vetta."
          ],
          de: [
            "Gegen 17:00 Uhr ankommen, um das goldene Vorabendlicht vor Sonnenuntergang (17:45 Uhr) zu genießen.",
            "Den heiligen Status der Seen respektieren: Schwimmen und Angeln sind traditionell verboten (Fady).",
            "Genießen Sie einen frischen tropischen Fruchtsaft auf der Aussichtsterrasse."
          ],
          es: [
            "Llegue sobre las 17:00 para disfrutar de la hora dorada antes del atardecer a las 17:45.",
            "Respete la sacralidad de los lagos: el baño y la pesca están prohibidos por tradición (fady).",
            "Disfrute de un zumo de frutas frescas en la terraza panorámica de la cima."
          ]
        },
        images: [
          { url: nosyImg5, caption: "Les lacs sacrés et cratères volcaniques vus du Mont Passot" },
          { url: nosyImg4, caption: "Coucher de soleil flamboyant depuis le sommet" },
          { url: nosyImg15, caption: "Panorama 360° sur tout l'archipel de Nosy Be" }
        ]
      },
      {
        id: "lokobe",
        rating: "4.8",
        name: {
          fr: "Réserve Naturelle de Lokobe",
          en: "Lokobe Strict Nature Reserve",
          it: "Riserva Naturale di Lokobe",
          de: "Naturschutzgebiet Lokobe",
          es: "Reserva Natural de Lokobe"
        },
        badge: {
          fr: "Forêt primaire préservée",
          en: "Pristine Rainforest",
          it: "Foresta primaria incontaminata",
          de: "Geschützter Primärwald",
          es: "Selva primaria virgen"
        },
        location: {
          fr: "Sud-Est de Nosy Be",
          en: "Southeast Nosy Be",
          it: "Sud-Est di Nosy Be",
          de: "Südosten von Nosy Be",
          es: "Sureste de Nosy Be"
        },
        description: {
          fr: "L'ultime forêt primaire de Nosy Be, sanctuaire écologique abritant lémuriens noirs, boas endémiques, caméléons nains et essences végétales médicinales rares.",
          en: "Nosy Be's last remaining primary rainforest, an ecological sanctuary hosting black lemurs, endemic tree boas, miniature leaf chameleons, and rare medicinal plants.",
          it: "L'ultima foresta primaria di Nosy Be, santuario ecologico con lemuri neri, boa endemici, camaleonti nani e rare piante medicinali.",
          de: "Der letzte ursprüngliche Primärregenwald auf Nosy Be: Ein ökologisches Refugium für schwarze Lemuren, seltene Boas, Zwergchamäleons und Heilpflanzen.",
          es: "La última selva primaria de Nosy Be, santuario ecológico que alberga lémures negros, boas endémicas, camaleones enanos y plantas medicinales."
        },
        history: {
          fr: "Protégée depuis 1927, la réserve est accessible par pirogue traditionnelle en bois, perpétuant le mode de transport ancestral des communautés côtières.",
          en: "Protected since 1927, the reserve is reached via traditional wooden outrigger canoes, preserving the ancestral transport heritage of local coastal communities.",
          it: "Protetta dal 1927, la riserva si raggiunge a bordo di tradizionali piroghe a bilanciere in legno attraverso la baia.",
          de: "Seit 1927 unter strengem Schutz; die Anreise erfolgt stilecht per traditioneller Holzpirogue über das ruhige Meer.",
          es: "Protegida desde 1927, se accede a la reserva en piragua tradicional de madera a través de la bahía."
        },
        quote: {
          fr: "Glisser en pirogue vers la jungle de Lokobe, c'est remonter aux origines de Madagascar.",
          en: "Paddling across calm waters toward Lokobe's deep jungle feels like stepping back into the origins of Madagascar.",
          it: "Scivolare in piroga verso la giungla di Lokobe significa risalire alle origini del Madagascar.",
          de: "Mit der Piroge durch das stille Wasser zum Dschungel von Lokobe zu gleiten, ist wie eine Reise zu den Ursprüngen Madagaskars.",
          es: "Navegar en piragua hacia la selva de Lokobe es regresar a los orígenes mismos de Madagascar."
        },
        quoteAuthor: {
          fr: "Guide éco-tourisme",
          en: "Ecotourism Guide",
          it: "Guida ecoturistica",
          de: "Ökotourismus-Guide",
          es: "Guía de ecoturismo"
        },
        events: {
          fr: [
            { title: "Traversée en pirogue traditionnelle", description: "Ramez le long de la mangrove et des baies sauvages pour rejoindre l'orée de la forêt." },
            { title: "Randonnée faunistique guidée", description: "Observez le boa de Madagascar, les geckos feuilles camouflés et les lémuriens nocturnes dans leur habitat." }
          ],
          en: [
            { title: "Traditional Canoe Crossing", description: "Paddle along peaceful mangroves and coastal bays to reach the rainforest trailhead." },
            { title: "Guided Wildlife Safari", description: "Spot Madagascar tree boas, leaf-tailed geckos with amazing camouflage, and wild lemurs." }
          ],
          it: [
            { title: "Traversata in piroga tradizionale", description: "Pagaia lungo le mangrovie e le baie selvagge per raggiungere la foresta pluviale." },
            { title: "Trekking guidato alla scoperta della fauna", description: "Osservate il boa del Madagascar, gechi mimetici e lemuri nel loro habitat naturale." }
          ],
          de: [
            { title: "Pirogen-Fahrt", description: "Paddeln Sie entlang der Mangroven und idyllischen Buchten zum Eingang des Regenwaldes." },
            { title: "Geführte Dschungelwanderung", description: "Entdecken Sie Madagaskar-Boas, perfekt getarnte Blattschwanzgeckos und freilebende Lemuren." }
          ],
          es: [
            { title: "Travesía en piragua tradicional", description: "Reme a lo largo de manglares y bahías vírgenes para llegar al corazón de la selva." },
            { title: "Senderismo guiado de fauna", description: "Observe boas de Madagascar, geckos camuflados y lémures en su hábitat natural." }
          ]
        },
        facts: {
          fr: [
            { icon: "fas fa-tree", label: "Statut", value: "Réserve Naturelle Intégrale protégée (740 hectares)" },
            { icon: "fas fa-sailboat", label: "Accès", value: "Départ d'Ambatozavavy en pirogue à rames" },
            { icon: "fas fa-paw", label: "Faune", value: "Lémurien macaco, microcèbe, boa de Madagascar, caméléons" }
          ],
          en: [
            { icon: "fas fa-tree", label: "Status", value: "Strict Nature Reserve (740 protected hectares)" },
            { icon: "fas fa-sailboat", label: "Access", value: "Departure from Ambatozavavy via traditional outrigger canoe" },
            { icon: "fas fa-paw", label: "Wildlife", value: "Black lemur, mouse lemur, Madagascar tree boa, pygmy chameleons" }
          ],
          it: [
            { icon: "fas fa-tree", label: "Status", value: "Riserva Naturale Integrale protetta (740 ettari)" },
            { icon: "fas fa-sailboat", label: "Accesso", value: "Partenza da Ambatozavavy in piroga a remi" },
            { icon: "fas fa-paw", label: "Fauna", value: "Lemure macaco, microcebo, boa del Madagascar, camaleonti" }
          ],
          de: [
            { icon: "fas fa-tree", label: "Status", value: "Strenges Naturschutzgebiet (740 geschützte Hektar)" },
            { icon: "fas fa-sailboat", label: "Anreise", value: "Abfahrt in Ambatozavavy mit traditioneller Holzpiroge" },
            { icon: "fas fa-paw", label: "Tierwelt", value: "Schwarzer Lemur, Mausmaki, Madagaskar-Boa, Zwergchamäleons" }
          ],
          es: [
            { icon: "fas fa-tree", label: "Estatus", value: "Reserva Natural Integral protegida (740 hectáreas)" },
            { icon: "fas fa-sailboat", label: "Acceso", value: "Salida desde Ambatozavavy en piragua tradicional de remos" },
            { icon: "fas fa-paw", label: "Fauna", value: "Lémur macaco, microcebo, boa de Madagascar, camaleones" }
          ]
        },
        tips: {
          fr: [
            "Portez des vêtements légers à manches longues et de la lotion antimoustique.",
            "Munissez-vous de bonnes chaussures fermées pour la marche en forêt.",
            "Dégustez un repas traditionnel cuisiné au village d'accueil après la marche."
          ],
          en: [
            "Wear lightweight long sleeves and eco-friendly insect repellent.",
            "Put on sturdy closed-toe walking shoes for forest trails.",
            "Enjoy a delicious traditional home-cooked meal in the host village after the hike."
          ],
          it: [
            "Indossate maniche lunghe leggere e repellente per zanzare.",
            "Scarpe chiuse comode per camminare sui sentieri della foresta.",
            "Pranzo tradizionale cucinato nel villaggio locale dopo l'escursione."
          ],
          de: [
            "Leichte lange Kleidung und Mückenschutzmittel mitnehmen.",
            "Feste geschlossene Wanderschuhe für die Dschungelpfade anziehen.",
            "Freuen Sie sich auf ein traditionelles Essen im Gastdorf nach der Wanderung."
          ],
          es: [
            "Lleve ropa ligera de manga larga y repelente de insectos.",
            "Use calzado cerrado para caminar por los senderos de la selva.",
            "Disfrute de una deliciosa comida tradicional en el pueblo local tras la caminata."
          ]
        },
        images: [
          { url: nosyImg14, caption: "Cascade et végétation luxuriante de Lokobe" },
          { url: nosyParfums, caption: "Forêt primaire et biodiversité préservée" },
          { url: nosyKomba, caption: "Faune endémique et lémuriens protégés" }
        ]
      }
    ]
  }
}

export function getNosySections(lang = 'fr') {
  const currentLang = ['fr', 'en', 'it', 'de', 'es'].includes(lang) ? lang : 'fr'

  return Object.entries(nosyData).map(([sectionKey, section]) => {
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
