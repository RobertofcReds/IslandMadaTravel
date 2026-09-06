import { Link } from 'react-router-dom'
import { useState, useEffect, Fragment } from 'react'
import { useLanguage } from '../context/LanguageContext'
import PlaceCard from '../components/PlaceCard'
import PlaceDetailSection from '../components/PlaceDetailSection'

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

// ──────────────────────────────────────────────
// Données enrichies Nosy Be
// ──────────────────────────────────────────────
const nosySections = [
  {
    id: 'islands',
    title: 'Îles & Excursions Maritimes',
    icon: 'fas fa-water',
    description: 'Un archipel de rêve — îles désertes, récifs coralliens et faune marine préservée',
    places: [
      {
        id: 'nosy-iranja',
        name: 'Nosy Iranja',
        badge: 'Île aux tortues',
        rating: '5.0',
        location: '70 km au sud de Nosy Be',
        description: 'Deux îlots reliés par un banc de sable blanc accessible à marée basse, entourés d\'eaux turquoise d\'une clarté absolue. Nosy Iranja est souvent qualifiée de "plus belle île de Madagascar".',
        history: 'Nosy Iranja (littéralement "île au gingembre") tire son nom des plants de gingembre sauvage qui poussaient autrefois sur ses hauteurs. Pendant des siècles, l\'île fut un refuge pour les pêcheurs Sakalava qui venaient y sécher leur poisson. Un phare colonial français, construit en 1910, marque encore le sommet de la grande île.',
        quote: 'À Nosy Iranja, le paradis n\'est pas une promesse — c\'est une certitude.',
        events: [
          { title: 'Marée basse — le banc de sable apparaît', description: 'À marée basse, un banc de sable blanc de 700 mètres relie les deux îles — une apparition magique que vous pouvez traverser à pied dans 30 cm d\'eau.' },
          { title: 'Nidification des tortues vertes', description: 'De novembre à février, des tortues marines vertes pondent sur les plages de Nosy Iranja — les bébés émergent souvent à la tombée du jour.' },
          { title: 'Snorkeling au récif corallien', description: 'Autour des deux îlots, des récifs coralliens préservés abritent une faune marine exceptionnelle : tortues, raies léopard, poissons-perroquets.' },
        ],
        facts: [
          { icon: 'fas fa-shield-halved', label: 'Tortues marines', value: 'Nidification de tortues vertes (Chelonia mydas) nov.-fév.' },
          { icon: 'fas fa-umbrella-beach', label: 'Composition', value: 'Nosy Iranja Be et Nosy Iranja Kely reliées à marée basse' },
          { icon: 'fas fa-ship', label: 'Accès', value: '2h30 en bateau depuis Nosy Be (mer parfois agitée)' },
          { icon: 'fas fa-water', label: 'Snorkeling', value: 'Visibilité jusqu\'à 15 m — parmi les meilleures de Madagascar' },
          { icon: 'fas fa-tower-observation', label: 'Phare', value: 'Phare colonial de 1910 — vue panoramique depuis le sommet' },
          { icon: 'fas fa-anchor', label: 'Idéal pour', value: 'Excursion journée complète avec pique-nique sur la plage' },
        ],
        tips: [
          'Réservez pour la période de marée basse pour traverser le banc de sable — demandez les horaires à votre guide.',
          'La mer peut être agitée en saison des pluies — privilégiez mai-octobre pour la traversée.',
          'Apportez votre masque et tuba — la location sur place est limitée.',
          'L\'excursion prend une journée complète — départ à 7h depuis Nosy Be.',
          'Un guide marin connaissant les zones de nidification est précieux pour observer les tortues.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Le banc de sable blanc de Nosy Iranja' },
          { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Eaux turquoise cristallines' },
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Plage immaculée au coucher du soleil' },
        ],
      },
      {
        id: 'nosy-tanikely',
        name: 'Nosy Tanikely',
        badge: 'Réserve marine',
        rating: '4.9',
        location: '7 km au sud de Nosy Be',
        description: 'Une réserve marine protégée avec un des meilleurs spots de snorkeling de la région — tortues, bancs de poissons multicolores et coraux magnifiques à quelques mètres du bord.',
        history: 'Nosy Tanikely est classée réserve marine depuis 1997. Son phare, construit en 1904, est l\'un des plus anciens de Madagascar et offre une vue panoramique exceptionnelle sur l\'archipel. L\'île fut longtemps la gardienne de la navigation dans le canal du Mozambique.',
        quote: 'Sous l\'eau à Tanikely, vous n\'êtes plus un visiteur — vous faites partie de l\'aquarium.',
        events: [
          { title: 'Rencontre avec les tortues', description: 'Les tortues vertes et imbriquées nagent librement autour de l\'île, tellement habituées aux plongeurs qu\'elles ne fuient plus.' },
          { title: 'Montée au phare historique', description: 'En haut du phare de 1904, une vue à 360° sur Nosy Be, Nosy Komba et les îlots environnants récompense l\'ascension.' },
        ],
        facts: [
          { icon: 'fas fa-water', label: 'Snorkeling', value: 'Profondeur 3-8m — accès direct depuis la plage' },
          { icon: 'fas fa-shield-halved', label: 'Tortues', value: 'Tortues vertes et caouannes résidentes, visibles garanties' },
          { icon: 'fas fa-ship', label: 'Distance', value: '45 min en bateau depuis Nosy Be' },
          { icon: 'fas fa-tower-observation', label: 'Phare', value: 'Construit en 1904 — monument historique classé' },
          { icon: 'fas fa-fish', label: 'Poissons', value: 'Plus de 150 espèces de poissons identifiées autour de l\'île' },
          { icon: 'fas fa-ticket', label: 'Entrée', value: 'Réserve marine — droits d\'accès obligatoires' },
        ],
        tips: [
          'Combinez avec Nosy Komba pour une journée d\'excursion parfaite.',
          'La plongée masque-tuba est suffisante — pas besoin de formation plongée pour profiter.',
          'Respectez la réserve marine : ne touchez pas les coraux et ne nourrissez pas les poissons.',
          'Montez au phare — la vue valait absolument les 10 minutes d\'ascension.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Eaux limpides de la réserve marine' },
          { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Tortue marine en liberté' },
          { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Vue depuis le phare historique' },
        ],
      },
      {
        id: 'nosy-komba',
        name: 'Nosy Komba',
        badge: 'Île aux lémuriens',
        rating: '4.7',
        location: '15 km au sud de Nosy Be',
        description: 'L\'île aux lémuriens noirs — une montagne volcanique entourée de villages de pêcheurs artisanaux, où les lémuriens macaco vivent en liberté et viennent manger dans vos mains.',
        history: 'Nosy Komba ("île des lémuriens" en malgache) est protégée par un fady ancien interisant de chasser les lémuriens noirs. Cette protection traditionnelle a permis à l\'espèce de prospérer sur l\'île. Les villageois du village d\'Ampangorina, fondé il y a plusieurs siècles, maintiennent cet interdit avec fierté.',
        quote: 'Les lémuriens de Komba n\'ont jamais connu la peur des humains — on se prend à oublier qui est le visiteur.',
        events: [
          { title: 'Lémuriens dans les arbres du village', description: 'Des groupes de lémuriens noirs descendent quotidiennement dans les arbres du village, acceptant les bananes tendues par les visiteurs.' },
          { title: 'Marché artisanal d\'Ampangorina', description: 'Le village produit des bijoux en perles, des nattes tressées et des sculptures en bois — achat direct chez l\'artisan.' },
        ],
        facts: [
          { icon: 'fas fa-paw', label: 'Lémuriens', value: 'Lémurien macaco noir (Eulemur macaco) — espèce protégée par fady' },
          { icon: 'fas fa-house-chimney', label: 'Village', value: 'Ampangorina — village de pêcheurs Sakalava ancestral' },
          { icon: 'fas fa-ship', label: 'Distance', value: '30 min en bateau depuis Nosy Be' },
          { icon: 'fas fa-palette', label: 'Artisanat', value: 'Célèbre pour la broderie et les bijoux en perles locaux' },
          { icon: 'fas fa-mountain', label: 'Randonnée', value: 'Montée possible jusqu\'au sommet (2h30) avec vue magnifique' },
        ],
        tips: [
          'Les lémuriens sont actifs le matin et en fin d\'après-midi — évitez les heures chaudes.',
          'Ne forcez jamais un lémurien à monter sur vous — laissez-les venir naturellement.',
          'Achetez des bijoux directement aux artisanes — le prix profite à la communauté.',
          'La montée au sommet de l\'île vaut l\'effort — vue à 360° sur l\'archipel.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Lémurien noir dans son habitat naturel' },
          { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Village d\'Ampangorina et ses artisans' },
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Vue panoramique sur l\'archipel' },
        ],
      },
      {
        id: 'mitsio',
        name: 'Archipel des Mitsio',
        badge: 'Aventure & Isolement',
        rating: '4.8',
        location: '50 km au nord-est de Nosy Be',
        description: 'Un archipel d\'îles volcaniques sauvages, dont la spectaculaire "Orgue des Mitsio" — des colonnes basaltiques de 50 mètres comparables aux orgues de basalte d\'Islande. Une aventure maritime d\'exception.',
        history: 'L\'Archipel des Mitsio reste l\'un des territoires les moins explorés de Madagascar. Les colonnes basaltiques de Grande Mitsio — baptisées "Orgue de Mitsio" — se sont formées lors d\'une éruption volcanique il y a plus de 65 millions d\'années. Les premiers navigateurs arabes les utilisaient comme repère de navigation dans le canal du Mozambique.',
        quote: 'Les Mitsio, c\'est Madagascar avant les hommes — la nature à l\'état originel.',
        events: [
          { title: 'L\'Orgue de Mitsio au lever du soleil', description: 'Les colonnes basaltiques de 50 mètres captent les premières lueurs de l\'aube dans un silence absolu — moment de contemplation rare.' },
          { title: 'Plongée dans les grottes sous-marines', description: 'Des grottes sous-marines peu connues abritent des gorgones géantes, des homards et des murènes — plongée de niveau avancé recommandée.' },
        ],
        facts: [
          { icon: 'fas fa-gem', label: 'Géologie', value: 'Colonnes basaltiques de 50m formées il y a 65 millions d\'années' },
          { icon: 'fas fa-ship', label: 'Accès', value: '4-5h de bateau depuis Nosy Be — excursion de 2-3 jours recommandée' },
          { icon: 'fas fa-fish-fins', label: 'Faune marine', value: 'Requins-baleines observés fréquemment en saison (oct-déc)' },
          { icon: 'fas fa-campground', label: 'Logistique', value: 'Excursion de 2-3 jours avec nuit à bord ou en camping' },
          { icon: 'fas fa-fish', label: 'Pêche', value: 'Pêche sportive exceptionnelle — thon, marlin, dorade coryphène' },
        ],
        tips: [
          'Cette excursion est pour les aventuriers confirmés — prévoir 2-3 jours minimum.',
          'Coordonnez avec un organisateur de Nosy Be pour la logistique bateau et camping.',
          'La météo est déterminante — idéal entre juin et octobre (mer calme).',
          'Apportez tout le nécessaire : eau, nourriture, tente, protection solaire maximale.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'L\'Orgue de Mitsio — colonnes basaltiques' },
          { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Îles volcaniques sauvages' },
          { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Eaux profondes et transparentes' },
        ],
      },
    ],
  },
  {
    id: 'beaches',
    title: 'Plages de Nosy Be',
    icon: 'fas fa-umbrella-beach',
    description: 'Des plages de sable blanc bordées de palmiers, chacune avec son caractère unique',
    places: [
      {
        id: 'andilana',
        name: 'Plage d\'Andilana',
        badge: 'La plus belle',
        rating: '4.9',
        location: 'Pointe nord de Nosy Be',
        description: 'La plage la plus spectaculaire de Nosy Be — 2 km de sable blanc immaculé, des eaux cristallines peu profondes et une atmosphère de bout du monde. Le meilleur coucher de soleil de l\'île.',
        history: 'Andilana était autrefois un hameau de pêcheurs isolé, inaccessible en voiture jusqu\'aux années 1990. Le développement de la route côtière a ouvert ce joyau au tourisme, mais la plage a su préserver son caractère sauvage grâce à l\'absence de constructions sur le bord de mer.',
        quote: 'Andilana, c\'est la plage telle qu\'on l\'imagine dans ses rêves les plus fous.',
        events: [
          { title: 'Coucher de soleil spectaculaire', description: 'Orientée à l\'ouest, Andilana offre les plus beaux couchers de soleil de Nosy Be — ciels orange et rose se reflétant dans les eaux peu profondes.' },
          { title: 'Marché de poissons au crépuscule', description: 'Les pêcheurs locaux ramènent leur pêche en fin d\'après-midi — une scène de vie authentique qui contraste avec la beauté sauvage du décor.' },
        ],
        facts: [
          { icon: 'fas fa-ruler-horizontal', label: 'Longueur', value: '2 km de plage de sable blanc fin' },
          { icon: 'fas fa-water', label: 'Profondeur', value: 'Très peu profonde sur 200m — idéale pour les enfants' },
          { icon: 'fas fa-cloud-sun', label: 'Coucher de soleil', value: 'Face à l\'ouest — meilleur spectacle de 17h30 à 18h30' },
          { icon: 'fas fa-hotel', label: 'Hébergement', value: 'Quelques lodges de charme en retrait de la plage' },
          { icon: 'fas fa-car', label: 'Distance', value: '30 km d\'Hell-Ville — route asphaltée mais sinueuse' },
        ],
        tips: [
          'Arrivez en fin d\'après-midi pour profiter du coucher de soleil et rester pour le dîner.',
          'La plage est quasi-déserte en semaine — le week-end les résidents locaux y viennent en famille.',
          'Les vendeurs de coco frais et de brochettes de langoustes s\'installent en fin de journée.',
          'Partez à l\'aurore pour avoir la plage entièrement pour vous pendant 2 heures.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Plage d\'Andilana au coucher du soleil' },
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Eaux turquoise peu profondes' },
          { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Pirogues de pêcheurs au coucher du soleil' },
        ],
      },
      {
        id: 'madirokely',
        name: 'Plage de Madirokely',
        badge: 'Animée & Conviviale',
        rating: '4.6',
        location: 'Hellville, côte nord-ouest',
        description: 'La plage la plus accessible et la plus animée de Nosy Be, avec ses restaurants de plage, ses bars à cocktails et ses sports nautiques. Le cœur vivant de la vie touristique de l\'île.',
        history: 'Madirokely (littéralement "le petit port qui reçoit les tempêtes") fut l\'un des premiers sites habités par les Sakalava sur l\'île. Dès les années 1980, les premiers hôtels s\'y installèrent, et la plage devint rapidement le centre névralgique du tourisme à Nosy Be.',
        events: [
          { title: 'Kite-surf au vent du nord', description: 'De mai à octobre, les vents réguliers font de Madirokely l\'un des meilleurs spots de kite-surf de Madagascar.' },
          { title: 'Soirées karaoké & musique live', description: 'Plusieurs bars de plage organisent des soirées musicales jusqu\'à minuit — ambiance garantie mêlant locaux et touristes.' },
        ],
        facts: [
          { icon: 'fas fa-martini-glass-citrus', label: 'Restaurants', value: 'Nombreux restaurants de plage avec fruits de mer frais' },
          { icon: 'fas fa-wind', label: 'Sports nautiques', value: 'Kite-surf, jet-ski, kayak, planche à voile disponibles' },
          { icon: 'fas fa-hotel', label: 'Hébergements', value: 'Hôtels de toutes catégories à moins de 5 min à pied' },
          { icon: 'fas fa-taxi', label: 'Accès', value: '3 km d\'Hell-Ville — taxi ou moto-taxi (2 000 Ar)' },
          { icon: 'fas fa-music', label: 'Animations', value: 'Marché artisanal et soirées musicales certains soirs' },
        ],
        tips: [
          'Idéale pour les familles avec enfants — plage surveillée et commodités disponibles.',
          'Négociez les prix des sports nautiques avant de payer — les tarifs varient selon la saison.',
          'Les restaurants côté plage sont plus chers mais l\'ambiance vaut l\'addition.',
          'Louez un vélo ou un scooter pour relier facilement Madirokely à Ambatoloaka.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Plage de Madirokely animée' },
          { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Sports nautiques sur la plage' },
        ],
      },
      {
        id: 'ambatoloaka',
        name: 'Plage d\'Ambatoloaka',
        badge: 'Authentique',
        rating: '4.5',
        location: 'Côte ouest de Nosy Be',
        description: 'Une plage plus sauvage et authentique, prisée des voyageurs cherchant une atmosphère locale sans fioritures touristiques. Bons restaurants de fruits de mer et ambiance décontractée garantis.',
        history: 'Ambatoloaka ("le rocher lisse" en malgache) doit son nom à un grand rocher poli par la mer qui marque l\'entrée de la plage. Ce rocher était historiquement un lieu de rendez-vous pour les pêcheurs qui attendaient la marée favorable pour partir au large.',
        events: [
          { title: 'Débarquement des pêcheurs', description: 'Chaque matin entre 6h et 8h, les pirogues de pêche reviennent chargées de poissons, thons et langoustes — une scène vivante de la vie maritime locale.' },
          { title: 'Barbecue de rue en soirée', description: 'À la tombée du jour, des vendeurs ambulants installent des grillades de rue avec poissons et brochettes pour une expérience gastronomique locale.' },
        ],
        facts: [
          { icon: 'fas fa-fish', label: 'Pêche', value: 'Village de pêcheurs actif — arrivée du poisson frais chaque matin' },
          { icon: 'fas fa-utensils', label: 'Cuisine', value: 'Restaurants locaux avec poissons grillés et "romazava" (plat national)' },
          { icon: 'fas fa-coins', label: 'Budget', value: 'Moins cher que Madirokely — idéal pour voyageurs à petit budget' },
          { icon: 'fas fa-water', label: 'Snorkeling', value: 'Bons spots de snorkeling accessibles à 200m de la plage' },
        ],
        tips: [
          'Essayez le "carry de poisson" dans les gargotes locales — c\'est délicieux et très abordable.',
          'Les nuits à Ambatoloaka sont plus calmes qu\'à Madirokely — idéal pour les voyageurs recherchant le repos.',
          'Profitez du lever du soleil avec les pêcheurs — une expérience de voyage mémorable.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Plage d\'Ambatoloaka et ses pirogues' },
          { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Eaux calmes et atmosphère locale' },
        ],
      },
    ],
  },
  {
    id: 'parks',
    title: 'Parcs, Nature & Biodiversité',
    icon: 'fas fa-leaf',
    description: 'Forêt primaire, réserves éco-botaniques et espèces endémiques exceptionnelles',
    places: [
      {
        id: 'lokobe',
        name: 'Réserve Naturelle de Lokobe',
        badge: 'Forêt primaire',
        rating: '4.8',
        location: 'Pointe sud-est de Nosy Be',
        description: 'La dernière forêt primaire de Nosy Be, classée réserve naturelle intégrale. Unique habitat malgache du python de Seba et du lémurien macaco noir. Une plongée dans la biodiversité exceptionnelle de l\'île aux parfums.',
        history: 'Lokobe doit son nom à une plante médicinale rare qui pousse dans sa forêt. La réserve fut classée intégrale en 1927 par les autorités coloniales françaises — l\'une des premières réserves naturelles créées à Madagascar. Les villageois de Befotaka, à l\'orée de la réserve, maintiennent une relation ancestrale avec la forêt et ses spirits.',
        quote: 'Lokobe est le souffle vert de Nosy Be — sans elle, l\'île perdrait son âme.',
        events: [
          { title: 'Nuit en forêt avec les lémuriens', description: 'Des excursions nocturnes permettent d\'observer les lémuriens nocturnes (Microcebus) et les caméléons endormis aux lumières de lampe frontale.' },
          { title: 'Traversée en pirogue vers la réserve', description: 'L\'accès par pirogue depuis Befotaka est en lui-même une expérience mémorable — longeant la mangrove avant d\'entrer dans la forêt primaire.' },
        ],
        facts: [
          { icon: 'fas fa-tree', label: 'Superficie', value: '740 hectares de forêt primaire protégée' },
          { icon: 'fas fa-shield-halved', label: 'Python', value: 'Seul habitat malgache du Python de Seba (hasta 5 mètres)' },
          { icon: 'fas fa-dragon', label: 'Caméléons', value: '5 espèces de caméléons endémiques dont Calumma boettgeri' },
          { icon: 'fas fa-paw', label: 'Lémuriens', value: 'Lémurien macaco noir — espèce emblématique de Nosy Be' },
          { icon: 'fas fa-sailboat', label: 'Accès', value: 'Pirogue obligatoire depuis Befotaka (20 min)' },
          { icon: 'fas fa-ticket', label: 'Permis', value: 'Permis obligatoire — obtenu via MNP à Hell-Ville' },
        ],
        tips: [
          'Réservez le permis à l\'avance auprès de Madagascar National Parks à Hell-Ville.',
          'La visite nocturne vaut absolument le détour — les caméléons dormant visibles sur les branches.',
          'Portez des vêtements longs et de la lotion antimoustique — forêt humide.',
          'Le guide local Befotaka connaît les cachettes de chaque espèce — indispensable.',
          'Combinable avec la plage de la baie de Sakatia le même jour.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Forêt primaire de Lokobe' },
          { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Lémurien macaco noir dans sa forêt' },
          { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Végétation luxuriante et caméléon' },
        ],
      },
    ],
  },
  {
    id: 'culture',
    title: 'Points de vue, Histoire & Culture',
    icon: 'fas fa-mountain',
    description: 'Belvédères panoramiques, sites sacrés et villages millénaires',
    places: [
      {
        id: 'mont-passot',
        name: 'Mont Passot & Lacs Sacrés',
        badge: 'Coucher de soleil légendaire',
        rating: '5.0',
        location: 'Centre de Nosy Be, 318m',
        description: 'Le point culminant de Nosy Be — un belvédère panoramique dominant sept lacs sacrés aux couleurs changeantes selon l\'heure. Le coucher de soleil depuis le Mont Passot est unanimement considéré comme le plus beau de Madagascar.',
        history: 'Le Mont Passot et ses lacs sont au cœur de la spiritualité Sakalava depuis des siècles. Les lacs sont considérés comme sacrés ("fady") — aucun être humain ni animal ne peut y pêcher ou y nager. Les crocodiles du lac Bemary sont vénérés comme les ancêtres royaux Sakalava et protégés par des lois ancestrales et modernes.',
        quote: 'Du sommet du Mont Passot, on comprend pourquoi Nosy Be fut surnommée "l\'île du parfum" — même le soleil semble vouloir y rester.',
        events: [
          { title: 'Coucher de soleil sur les 7 lacs', description: 'Entre 17h45 et 18h30, le soleil se couche sur l\'horizon et baigne les sept lacs sacrés de teintes or, rouge et violet — le spectacle le plus photographié de l\'île.' },
          { title: 'Crocodiles sacrés au lac Bemary', description: 'De la rive, on peut observer les crocodiles du Nil peuplant le lac sacré Bemary — protégés depuis des siècles par un fady Sakalava.' },
          { title: 'Cérémonie du Fanompoa', description: 'Une fois par an, lors du Fanompoa (cérémonie de renouveau Sakalava), des offrandes sont déposées sur les rives des lacs sacrés au lever du soleil.' },
        ],
        facts: [
          { icon: 'fas fa-mountain', label: 'Altitude', value: '318 mètres — point culminant de Nosy Be' },
          { icon: 'fas fa-water', label: 'Lacs sacrés', value: '7 lacs aux couleurs différentes visibles depuis le sommet' },
          { icon: 'fas fa-shield-halved', label: 'Crocodiles', value: 'Lac Bemary — crocodiles sacrés Sakalava, intouchables' },
          { icon: 'fas fa-car', label: 'Accès', value: 'Route carrossable jusqu\'au sommet (15 km d\'Hell-Ville)' },
          { icon: 'fas fa-cloud-sun', label: 'Meilleure heure', value: '17h-19h pour le coucher de soleil spectaculaire' },
          { icon: 'fas fa-camera', label: 'Photographie', value: 'Un trépied est utile pour les photos en lumière de fin de journée' },
        ],
        tips: [
          'Arrivez une heure avant le coucher de soleil pour trouver un bon emplacement — c\'est très fréquenté.',
          'Apportez un pull léger — il fait frais au sommet en soirée même en saison chaude.',
          'Respectez absolument le fady des lacs — ne vous baignez pas et ne pêchez pas.',
          'La route est praticable en voiture normale — pas besoin de 4x4.',
          'Associez avec la visite du village de Marodoka (5 km en contrebas) pour une journée complète.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Coucher de soleil depuis le Mont Passot' },
          { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Les lacs sacrés vus du sommet' },
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Panorama 360° sur l\'archipel' },
        ],
      },
      {
        id: 'marodoka',
        name: 'Village de Marodoka',
        badge: 'Village historique',
        rating: '4.6',
        location: 'Côte est de Nosy Be',
        description: 'L\'un des plus vieux villages de Nosy Be, fondé au XVe siècle par les Sakalava. Ses ruines de mosquées et ses inscriptions arabes témoignent d\'une intense activité commerciale maritime avec la côte est-africaine et l\'Arabie.',
        history: 'Marodoka ("la grande ruine" en malgache) fut le premier port commercial de Nosy Be, fondé vers le XVe siècle lors des échanges marchands entre Madagascar, le sultanat d\'Oman et la côte swahili. Des fouilles archéologiques ont mis à jour des pièces de monnaie arabes, des céramiques chinoises et des perles de verre venues d\'Asie — témoignant de son importance dans les routes commerciales de l\'Océan Indien.',
        quote: 'Sous les pierres de Marodoka sommeillent mille ans d\'échanges entre les civilisations de l\'Océan Indien.',
        events: [
          { title: 'Visite des ruines de la mosquée', description: 'Les vestiges d\'une mosquée du XVIIe siècle, encore debout, témoignent de la présence commerciale arabe et de l\'islam à Madagascar.' },
          { title: 'Marché local du vendredi', description: 'Le marché hebdomadaire de Marodoka est un moment de rencontre authentique entre les habitants des villages environnants.' },
        ],
        facts: [
          { icon: 'fas fa-calendar-days', label: 'Fondation', value: 'XVe siècle — parmi les plus anciens villages de Nosy Be' },
          { icon: 'fas fa-mosque', label: 'Patrimoine', value: 'Ruines de mosquées et inscriptions arabes du XVIIe siècle' },
          { icon: 'fas fa-landmark', label: 'Archéologie', value: 'Poteries chinoises, perles de verre asiatiques exhumées' },
          { icon: 'fas fa-route', label: 'Distance', value: '12 km d\'Hell-Ville — piste partielle' },
          { icon: 'fas fa-handshake', label: 'Authenticité', value: 'Village vivant — rencontres avec des habitants dans leur quotidien' },
        ],
        tips: [
          'Un guide local est précieux pour comprendre l\'histoire et les légendes du village.',
          'Visitez le vendredi pour profiter du petit marché hebdomadaire.',
          'Demandez la permission avant de photographier les habitants — le respect mutuel est essentiel.',
          'Associez avec la montée au Mont Passot le même jour pour une belle journée culturelle.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Ruines historiques de Marodoka' },
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Village authentique et ses habitants' },
          { url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Vestiges de la mosquée du XVIIe siècle' },
        ],
      },
      {
        id: 'hellville',
        name: 'Hell-Ville (Andoany)',
        badge: 'Capitale de Nosy Be',
        rating: '4.4',
        location: 'Hell-Ville, Nosy Be',
        description: 'La capitale et principale ville de Nosy Be — un port animé avec un marché coloré, des bâtiments coloniaux, et l\'ambiance unique d\'une ville malgache ouverte sur l\'océan. Idéale pour l\'immersion culturelle.',
        history: 'Hell-Ville fut nommée ainsi en l\'honneur de l\'amiral de Hell, qui prit possession de Nosy Be au nom de la France en 1841. Le roi Sakalava Tsiomeko avait sollicité la protection française contre les raids Merina du royaume central. Le port fut ensuite développé pour exporter l\'ylang-ylang, la vanille et le café produits sur l\'île.',
        quote: 'Hell-Ville porte bien mal son nom — c\'est l\'un des ports les plus agréables de l\'océan Indien.',
        events: [
          { title: 'Marché du Bazary Be', description: 'Le grand marché couvert d\'Hell-Ville déborde d\'épices, de vanille, d\'ylang-ylang et de produits locaux — une expérience sensorielle intense.' },
          { title: 'Arrivée des boutres arabes', description: 'Occasionnellement en novembre-décembre, des boutres en bois traditionnels accostent dans le port d\'Hell-Ville, poursuivant une tradition nautique millénaire.' },
          { title: 'Festival de la Vanille', description: 'En période de récolte (juillet-août), un marché spécial vanille s\'installe dans les rues du centre — parfums enivrants garantis.' },
        ],
        facts: [
          { icon: 'fas fa-city', label: 'Population', value: 'Environ 25 000 habitants — principale ville de Nosy Be' },
          { icon: 'fas fa-anchor', label: 'Port', value: 'Port de commerce actif et terminal ferries pour le continent' },
          { icon: 'fas fa-spa', label: 'Ylang-ylang', value: 'Centre de commerce des huiles essentielles d\'ylang-ylang' },
          { icon: 'fas fa-building-columns', label: 'Architecture', value: 'Immeubles coloniaux français du début du XXe siècle' },
          { icon: 'fas fa-calendar-days', label: 'Fondation', value: 'Nommée en 1841 sous la protection française (amiral de Hell)' },
        ],
        tips: [
          'Le Bazary Be est à visiter tôt le matin (6h-9h) avant la chaleur et la foule.',
          'Achetez de la vanille directement aux producteurs du marché — qualité et prix imbattables.',
          'Goûtez au "ranon\'apango" (eau de riz) ou au jus de coco frais dans les stands locaux.',
          'Promenez-vous sur le front de mer en soirée pour voir les pêcheurs préparer leurs filets.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Port d\'Hell-Ville et ses boutres' },
          { url: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Marché coloré du Bazary Be' },
          { url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Architecture coloniale du centre-ville' },
        ],
      },
    ],
  },
]

// ──────────────────────────────────────────────
// Composant principal Nosy
// ──────────────────────────────────────────────
const Nosy = () => {
  const { t } = useLanguage()
  const [heroIndex, setHeroIndex] = useState(0)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [activeSection, setActiveSection] = useState('islands')

  const heroImages = [
    nosyImg1,
    nosyImg2,
    nosyImg3,
    nosyImg4,
    nosyImg5,
    nosyImg6,
    nosyImg7,
    nosyImg8,
    nosyImg9,
    nosyImg10,
    nosyImg11,
    nosyImg12,
    nosyImg13,
    nosyImg14,
    nosyImg15,
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const currentSection = nosySections.find(s => s.id === activeSection) || nosySections[0]

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[heroIndex]}
            alt="Nosy Be"
            className="w-full h-full object-cover transition-all duration-1000 scale-105"
          />
        </div>

        <div className="container-custom text-center text-white relative z-10 px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm px-4 py-1.5 rounded-full mb-6">
            <i className="fas fa-map-marker-alt text-emerald-400 text-xs" />
            <span>Nosy Be — Archipel de l'Océan Indien</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 flex items-center justify-center gap-3 drop-shadow-lg">
            <i className="fas fa-tree text-emerald-400 shrink-0" />
            <span>{t('nosy.hero.title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto drop-shadow-md">
            {t('nosy.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg flex items-center gap-2"
            >
              <i className="fas fa-calendar-check" />
              {t('nosy.hero.cta_book')}
            </Link>
            <a
              href="#explore"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-medium px-8 py-3.5 rounded-full transition-all flex items-center gap-2"
            >
              <i className="fas fa-compass" />
              {t('nosy.hero.cta_explore')}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setHeroIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === heroIndex ? 'bg-emerald-400 scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── À propos ── */}
      <div className="py-20" id="explore">
        <div className="container-custom max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
              />
            </div>
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider text-sm uppercase mb-2 block">
                {t('nosy.about.badge')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('nosy.about.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {t('nosy.about.paragraph1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('nosy.about.paragraph2')}
              </p>
              <div className="bg-emerald-500/10 dark:bg-emerald-400/10 p-4 rounded-xl mb-8 border border-emerald-500/20">
                <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center gap-2">
                  <i className="fas fa-calendar-alt text-emerald-500" />
                  {t('nosy.about.best_time_label')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{t('nosy.about.best_time_value')}</p>
              </div>
              <Link
                to="/contact"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all inline-block shadow-md"
              >
                {t('nosy.about.cta')}
              </Link>
            </div>
          </div>

          {/* ── Tabs des sections ── */}
          <div className="mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
              Explorer Nosy Be
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
              Cliquez sur un lieu pour découvrir son histoire, ses secrets et les conseils du guide
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {nosySections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                >
                  <i className={`${section.icon} text-sm`} />
                  <span>{section.title}</span>
                </button>
              ))}
            </div>

            <div
              key={activeSection}
              style={{ animation: 'modalIn 0.3s ease-out' }}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 mb-6 text-white">
                <div className="flex items-center gap-3 mb-1">
                  <i className={`${currentSection.icon} text-2xl`} />
                  <h3 className="font-serif text-2xl font-bold">{currentSection.title}</h3>
                </div>
                <p className="text-emerald-50 text-sm">{currentSection.description}</p>
                <p className="text-emerald-200 text-xs mt-2">
                  {currentSection.places.length} lieu{currentSection.places.length > 1 ? 'x' : ''} à découvrir — cliquez sur une carte pour les détails
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {currentSection.places.map(place => (
                  <Fragment key={place.id}>
                    <PlaceCard
                      place={place}
                      isSelected={selectedPlace?.id === place.id}
                      onClick={(p) => setSelectedPlace(prev => prev?.id === p.id ? null : p)}
                    />
                    {/* Détails apparaissant directement sous ce lieu */}
                    {selectedPlace?.id === place.id && (
                      <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 w-full min-w-0 max-w-full overflow-hidden">
                        <PlaceDetailSection
                          place={selectedPlace}
                          onClose={() => setSelectedPlace(null)}
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
            <div className="relative z-10">
              <i className="fas fa-anchor text-emerald-400 text-4xl mb-4 block" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                Prêt à découvrir le paradis de Nosy Be ?
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Partez à la découverte des îles, plages et merveilles naturelles de l\'archipel avec un guide passionné à votre écoute.
              </p>
              <Link
                to="/contact"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <i className="fas fa-envelope" />
                Planifier mon séjour à Nosy Be
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nosy