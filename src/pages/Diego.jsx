import { Link } from 'react-router-dom'
import { useState, useEffect, Fragment } from 'react'
import { useLanguage } from '../context/LanguageContext'
import PlaceCard from '../components/PlaceCard'
import PlaceDetailSection from '../components/PlaceDetailSection'

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

// ──────────────────────────────────────────────
// Données enrichies : chaque lieu a images, histoire, anecdotes, faits, conseils
// ──────────────────────────────────────────────
const diegoSections = [
  {
    id: 'beaches',
    title: 'Baies, Plages & Lagons',
    icon: 'fas fa-umbrella-beach',
    description: 'Des eaux turquoise aux sables immaculés, une côte d\'exception',
    places: [
      {
        id: 'emeraude',
        name: 'La Mer d\'Émeraude',
        badge: 'Incontournable',
        rating: '4.9',
        location: 'Baie de Diégo-Suarez',
        description: 'Un lagon naturel d\'une beauté saisissante, protégé par des récifs coralliens. Ses eaux d\'un vert émeraude intense sont parmi les plus photographiées de Madagascar.',
        history: 'Découverte par les marins arabes puis portugais au XVe siècle, la Mer d\'Émeraude tire son nom de la couleur unique que prennent ses eaux peu profondes au lever du soleil. Elle fut longtemps un refuge pour les boutrés de commerce qui sillonnaient l\'océan Indien.',
        quote: 'Une piscine naturelle offerte par les dieux de l\'océan.',
        quoteAuthor: 'Voyageur anonyme, 1910',
        events: [
          { title: 'Lever de soleil magique', description: 'À 5h30 du matin, les eaux passent du violet au vert émeraude en quelques minutes — un spectacle inoubliable.' },
          { title: 'Pleine lune sur le lagon', description: 'Les nuits de pleine lune, des pêcheurs locaux sortent leurs pirogues pour une pêche traditionnelle aux flambeaux.' },
          { title: 'Balade en pirogue', description: 'Des excursions en pirogue traditionnelle permettent d\'atteindre les bancs de sable inhabités au centre du lagon.' },
        ],
        facts: [
          { icon: 'fas fa-ruler-combined', label: 'Superficie', value: 'Environ 18 km² de lagon protégé' },
          { icon: 'fas fa-water', label: 'Profondeur', value: '50 cm à 2 m selon les zones — idéal pour la baignade' },
          { icon: 'fas fa-fish', label: 'Faune marine', value: 'Raies, étoiles de mer, concombres de mer et poissons multicolores' },
          { icon: 'fas fa-sailboat', label: 'Accès', value: 'En bateau depuis Ramena (25 min) ou depuis Diego centre (45 min)' },
          { icon: 'fas fa-sun', label: 'Meilleure saison', value: 'Avril à novembre — eaux calmes et visibilité optimale' },
          { icon: 'fas fa-camera', label: 'Photo idéale', value: 'Entre 6h et 8h du matin pour capturer la couleur émeraude emblématique' },
        ],
        tips: [
          'Portez des chaussures aquatiques — le fond est parfois rocheux et corallien.',
          'Partez en excursion tôt le matin pour éviter le vent de l\'après-midi.',
          'Emportez de l\'eau et un chapeau — pas d\'ombre sur le lagon.',
          'Négociez le prix de la pirogue avant de monter ; comptez environ 15 000 à 25 000 Ar pour le tour.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'La Mer d\'Émeraude au lever du soleil' },
          { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Bancs de sable immaculés' },
          { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Vue aérienne du lagon' },
        ],
      },
      {
        id: 'ramena',
        name: 'Plage de Ramena',
        badge: 'Village de pêcheurs',
        rating: '4.7',
        location: 'Ramena, 18 km de Diego',
        description: 'Un village de pêcheurs authentique avec une plage de sable doré s\'étirant sur plusieurs kilomètres. Le coucher de soleil y est légendaire.',
        history: 'Ramena est l\'un des plus anciens villages côtiers de la baie de Diégo-Suarez. Ses habitants, issus de la communauté Antakarana, maintiennent des traditions de pêche millénaires. Le village est aussi connu pour ses courses de pirogues Sakamby organisées lors des grandes fêtes.',
        quote: 'Ici, le temps s\'arrête avec la marée.',
        events: [
          { title: 'Marché du matin', description: 'Chaque matin, les pêcheurs ramènent leur pêche de nuit. Un spectacle vivant et coloré à ne pas manquer.' },
          { title: 'Courses de pirogues', description: 'En juillet-août, des régates de pirogues traditionnelles animent la baie dans une atmosphère festive.' },
          { title: 'Festival Donia', description: 'La plage accueille occasionnellement des concerts en plein air lors du festival Donia de Nosy Be.' },
        ],
        facts: [
          { icon: 'fas fa-ruler-horizontal', label: 'Longueur', value: '3,5 km de plage de sable fin' },
          { icon: 'fas fa-house-chimney', label: 'Village', value: 'Environ 3 000 habitants, communauté Antakarana' },
          { icon: 'fas fa-utensils', label: 'Spécialité', value: 'Langouste grillée fraîche — les meilleurs prix de la région' },
          { icon: 'fas fa-route', label: 'Distance', value: '18 km de Diego-Suarez, route asphaltée (25 min)' },
          { icon: 'fas fa-cloud-sun', label: 'Coucher de soleil', value: 'Face à l\'ouest — idéal pour les photos de fin de journée' },
        ],
        tips: [
          'Goûtez aux langoustes grillées directement sur la plage — fraîches du matin même.',
          'La plage est plus tranquille en semaine ; le week-end, les habitants de Diego y viennent nombreux.',
          'Prenez le taxi-brousse depuis Diego pour 2 000 Ar ou louez un scooter.',
          'Evitez de vous baigner trop loin — des courants peuvent être forts en saison.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Plage de Ramena et ses pirogues' },
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Village de pêcheurs au coucher du soleil' },
          { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Eaux cristallines de la baie' },
        ],
      },
      {
        id: 'trois-baies',
        name: 'Les Trois Baies',
        badge: 'Vue panoramique',
        rating: '4.8',
        location: 'Presqu\'île de Diégo',
        description: 'Depuis le belvédère des Trois Baies, contemplez simultanément trois baies spectaculaires : la grande baie de Diégo-Suarez, la baie des Français et la baie de la Reine. Un panorama à 270° unique en son genre.',
        history: 'Ce site stratégique fut utilisé par les militaires français dès 1885 pour surveiller l\'entrée de la baie. Un poste d\'observation y fut construit, dont les vestiges sont encore visibles. La vue imprenable sur trois baies simultanément en faisait un point de défense idéal.',
        quote: 'Trois baies, un seul regard — la géographie à l\'état pur.',
        events: [
          { title: 'Randonnée du soir', description: 'La descente au crépuscule offre une lumière dorée sur les trois baies — moment photographique exceptionnel.' },
          { title: 'Bivouac observatoire', description: 'Certains guides proposent des nuits en tente pour observer les étoiles depuis ce promontoire isolé.' },
        ],
        facts: [
          { icon: 'fas fa-mountain', label: 'Altitude', value: '330 mètres au-dessus de la mer' },
          { icon: 'fas fa-person-hiking', label: 'Randonnée', value: '2h30 aller-retour depuis le parking — sentier balisé' },
          { icon: 'fas fa-paw', label: 'Faune', value: 'Caméléons, geckos et lémuriens Sanford visibles sur le sentier' },
          { icon: 'fas fa-clock', label: 'Meilleure heure', value: 'En fin d\'après-midi pour la lumière dorée sur les baies' },
        ],
        tips: [
          'Portez des chaussures de randonnée — le sentier peut être glissant après la pluie.',
          'La vue est plus spectaculaire par temps clair, évitez les jours de brume matinale.',
          'Partez avec un guide local pour découvrir la faune cachée du sentier.',
          'Emportez de l\'eau — pas de point d\'eau sur le site.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Vue panoramique sur les trois baies' },
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Coucher de soleil depuis le belvédère' },
        ],
      },
      {
        id: 'ampasindava',
        name: 'Plage d\'Ampasindava',
        badge: 'Sauvage & Isolée',
        rating: '4.6',
        location: 'Presqu\'île d\'Ampasindava',
        description: 'Une plage vierge quasi-inaccessible, préservée du tourisme de masse. Ses eaux claires et son sable blanc immaculé en font un paradis pour ceux qui cherchent l\'authenticité absolue.',
        history: 'Ampasindava signifie "l\'endroit du campement" en malgache — cette plage fut historiquement un point d\'arrêt pour les boutres arabes faisant le commerce entre Madagascar et la côte est-africaine. Des fouilles archéologiques ont mis à jour des tessons de céramique persane datant du XIIe siècle.',
        events: [
          { title: 'Nidification des tortues', description: 'De novembre à février, des tortues marines viennent pondre sur cette plage isolée — spectacle rare et émouvant.' },
          { title: 'Excursion en 4x4', description: 'La piste d\'accès nécessite un 4x4, transformant le trajet en aventure à part entière à travers la savane.' },
        ],
        facts: [
          { icon: 'fas fa-truck-pickup', label: 'Accès', value: 'Piste 4x4 obligatoire — 1h30 depuis Diego-Suarez' },
          { icon: 'fas fa-shield-halved', label: 'Tortues marines', value: 'Nidification de nov. à fév. (tortues vertes et caouannes)' },
          { icon: 'fas fa-compass', label: 'Isolement', value: 'Aucune infrastructure touristique — paradis sauvage absolu' },
          { icon: 'fas fa-water', label: 'Snorkeling', value: 'Récifs coralliens préservés à moins de 100m du bord' },
        ],
        tips: [
          'Indispensable : un véhicule 4x4 (location possible à Diego pour ~70 000 Ar/jour).',
          'Apportez tout le nécessaire : eau, nourriture, protection solaire — rien sur place.',
          'Prévenez quelqu\'un de votre itinéraire — zone isolée sans réseau mobile.',
          'La meilleure période est juillet-octobre pour des conditions de mer calmes.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Plage d\'Ampasindava, vierge et sauvage' },
          { url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Eaux cristallines et sable blanc' },
          { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Vue depuis les hauteurs' },
        ],
      },
    ],
  },
  {
    id: 'parks',
    title: 'Parcs Nationaux & Réserves',
    icon: 'fas fa-tree',
    description: 'Une biodiversité unique, des paysages lunaires et des forêts primaires',
    places: [
      {
        id: 'montagne-ambre',
        name: 'Parc National Montagne d\'Ambre',
        badge: 'Forêt primaire',
        rating: '4.8',
        location: 'Joffreville, 40 km de Diego',
        description: 'Une forêt humide d\'altitude peuplée de lémuriens, de caméléons et de cascades spectaculaires. Le seul parc national de montagne du nord de Madagascar.',
        history: 'La Montagne d\'Ambre fut classée Réserve naturelle intégrale dès 1927, sous la colonisation française, en raison de sa biodiversité exceptionnelle. Son nom provient probablement de l\'ambre gris que les baleines échouaient autrefois sur les côtes voisines. Le colonel Joffre, futur maréchal de France, y installa son camp de base lors de la conquête française en 1885.',
        quote: 'Entrer dans la Montagne d\'Ambre, c\'est entrer dans un monde où l\'évolution a suivi sa propre voie.',
        events: [
          { title: 'Parade nuptiale des caméléons', description: 'En saison des pluies (nov-mars), les caméléons panthères mâles arborent des couleurs spectaculaires pour séduire les femelles.' },
          { title: 'Chants nocturnes des lémuriens', description: 'Les lémuriens bruns chantent à l\'aube et au crépuscule — un réveil naturel inoubliable pour ceux qui campent dans le parc.' },
          { title: 'Grande Cascade en crue', description: 'Après les pluies de décembre-janvier, la Grande Cascade atteint 80 mètres de hauteur et un débit impressionnant.' },
        ],
        facts: [
          { icon: 'fas fa-tree', label: 'Superficie', value: '18 200 hectares de forêt primaire' },
          { icon: 'fas fa-feather-pointed', label: 'Espèces', value: '75 espèces d\'oiseaux, 25 espèces de reptiles, 8 espèces de lémuriens' },
          { icon: 'fas fa-water', label: 'Cascades', value: '3 cascades majeures dont la Grande Cascade (60m)' },
          { icon: 'fas fa-signs-post', label: 'Circuits', value: '6 sentiers balisés de 1h à une journée complète' },
          { icon: 'fas fa-car', label: 'Accès', value: '40 km de Diego-Suarez, route asphaltée puis piste' },
          { icon: 'fas fa-ticket', label: 'Entrée', value: '55 000 Ar (guide obligatoire inclus)' },
        ],
        tips: [
          'Commencez tôt le matin (6h-7h) — les animaux sont actifs au lever du soleil.',
          'Portez des vêtements à manches longues — les moustiques sont présents en forêt.',
          'Le guide obligatoire vaut vraiment le détour — il connaît les cachettes des caméléons.',
          'Séjournez une nuit à Joffreville pour profiter du parc sur 2 jours complets.',
          'Lotion antimoustique et imperméable léger indispensables toute l\'année.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Forêt primaire de la Montagne d\'Ambre' },
          { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'La Grande Cascade' },
          { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Caméléon panthère dans son habitat naturel' },
        ],
      },
      {
        id: 'tsingy-rouges',
        name: 'Les Tsingy Rouges',
        badge: 'Paysage lunaire',
        rating: '4.9',
        location: 'Irodo, 80 km de Diego',
        description: 'Un paysage martien unique au monde — des forêts de pitons d\'argile rouge érodés par les pluies tropicales. Les Tsingy Rouges sont l\'une des merveilles géologiques les plus singulières de Madagascar.',
        history: 'Les Tsingy Rouges se sont formés sur plusieurs millions d\'années par l\'érosion de latérite (argile rouge riche en fer et aluminium). Les pluies intenses de la saison humide sculptent ces pitons fragiles qui poussent de quelques centimètres par an. Le site ne fut "découvert" par le monde extérieur qu\'au début des années 2000.',
        quote: 'On se croit sur Mars, mais c\'est Madagascar qui nous offre cette vision.',
        events: [
          { title: 'Après les pluies', description: 'Juste après la saison des pluies (mars-avril), la couleur rouge-orangé des tsingy est à son maximum d\'intensité.' },
          { title: 'Lumière rasante', description: 'En fin d\'après-midi, la lumière dorée crée des ombres dramatiques entre les pitons — paradis pour les photographes.' },
        ],
        facts: [
          { icon: 'fas fa-route', label: 'Distance', value: '80 km de Diego-Suarez (1h30 en 4x4)' },
          { icon: 'fas fa-layer-group', label: 'Matière', value: 'Latérite (argile riche en fer et aluminium oxydés)' },
          { icon: 'fas fa-arrows-up-down', label: 'Hauteur', value: 'Pitons de 1 à 10 mètres de hauteur' },
          { icon: 'fas fa-triangle-exclamation', label: 'Fragilité', value: 'Ne touchez pas les tsingy — ils s\'effritent facilement' },
          { icon: 'fas fa-truck-pickup', label: 'Véhicule', value: '4x4 obligatoire — la piste est impraticable en berline' },
        ],
        tips: [
          'Portez des vêtements que vous n\'avez pas peur de salir — la latérite tache énormément.',
          'Les Tsingy Rouges sont facilement combinables avec la plage d\'Irodo le même jour.',
          'Visitez en matinée pour la meilleure luminosité photographique.',
          'Respectez le site fragile — aucune grimpette ni cassure volontaire.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Les Tsingy Rouges au coucher du soleil' },
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Forêt de pitons de latérite' },
          { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Vue rapprochée des formations géologiques' },
        ],
      },
      {
        id: 'ankarana',
        name: 'Réserve Spéciale d\'Ankarana',
        badge: 'Grottes & Tsingy',
        rating: '4.7',
        location: 'Anivorano, 110 km de Diego',
        description: 'Un plateau calcaire karstique troué de grottes spectaculaires, de tsingy gris acérés et de canyons mystérieux. La réserve abrite des crocodiles sacrés, des lémuriens et des milliers de chauves-souris.',
        history: 'L\'Ankarana est profondément lié à l\'histoire du royaume Antakarana. Au XIXe siècle, le roi Tsimiharo et son peuple se réfugièrent dans les grottes d\'Ankarana pour fuir les armées Merina. Les crocodiles du lac Sacré sont toujours considérés comme les ancêtres des rois Antakarana et protégés par un fady (tabou) absolu.',
        quote: 'Les grottes d\'Ankarana gardent les secrets de tout un peuple.',
        events: [
          { title: 'Sortie des chauves-souris', description: 'Chaque soir au crépuscule, des millions de chauves-souris roussettes sortent des grottes en nuée spectaculaire.' },
          { title: 'Cérémonie Tromba', description: 'Lors des cérémonies Antakarana, des offrandes sont déposées au bord du lac aux crocodiles sacrés.' },
        ],
        facts: [
          { icon: 'fas fa-moon', label: 'Chauves-souris', value: 'Plus d\'1 million résidant dans les grandes grottes' },
          { icon: 'fas fa-shield-halved', label: 'Crocodiles sacrés', value: 'Lac Sacré avec des crocodiles protégés par un fady depuis des siècles' },
          { icon: 'fas fa-paw', label: 'Lémuriens', value: '9 espèces dont le lémurien couronné et le lémurien sanford' },
          { icon: 'fas fa-dungeon', label: 'Grottes', value: 'Réseau de 90 km de grottes dont certaines encore inexplorées' },
          { icon: 'fas fa-hourglass-half', label: 'Visite', value: 'Prévoir 1 à 2 jours pour explorer correctement le site' },
        ],
        tips: [
          'La visite des grottes nécessite une lampe frontale puissante — apportez la vôtre.',
          'Respectez absolument le fady des crocodiles sacrés — ne tentez pas de les nourrir ou approcher.',
          'Le camping dans la réserve est possible et vivement recommandé pour 2 jours de visite.',
          'Engagez un guide local Antakarana — leur connaissance du terrain et des légendes enrichit immensément la visite.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Tsingy et canyons d\'Ankarana' },
          { url: 'https://images.unsplash.com/photo-1583417261010-2523d24e22c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Entrée des grandes grottes' },
          { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Végétation luxuriante dans les canyons' },
        ],
      },
    ],
  },
  {
    id: 'hiking',
    title: 'Points de vue, Randonnées & Curiosités',
    icon: 'fas fa-hiking',
    description: 'Des sommets panoramiques aux lacs sacrés, des aventures inoubliables',
    places: [
      {
        id: 'montagne-francais',
        name: 'La Montagne des Français',
        badge: 'Randonnée & Vue',
        rating: '4.8',
        location: 'Entre Diego et Ramena',
        description: 'Une randonnée sur un massif calcaire culminant à 412 mètres, offrant une vue à 360° sur la baie de Diégo-Suarez, la Mer d\'Émeraude et les montagnes environnantes. Habitat naturel de lémuriens et caméléons.',
        history: 'La "Montagne des Français" tire son nom du cimetière militaire français installé à son pied lors des conflits de 1942-1947. Lors de la Seconde Guerre mondiale, des soldats britanniques y prirent position pour surveiller les mouvements des forces de Vichy dans la baie stratégique de Diego-Suarez.',
        quote: 'Du haut de la Montagne des Français, l\'histoire et la beauté se rencontrent.',
        events: [
          { title: 'Randonnée aurore', description: 'Le départ à 5h du matin permet d\'atteindre le sommet au lever du soleil — un spectacle de lumière sur la baie inoubliable.' },
          { title: 'Observation des lémuriens', description: 'Les lémuriens Sanford sont actifs le matin et font régulièrement des passages près du sentier.' },
        ],
        facts: [
          { icon: 'fas fa-mountain', label: 'Altitude', value: '412 mètres — point culminant de la presqu\'île' },
          { icon: 'fas fa-stopwatch', label: 'Durée', value: '3 à 4 heures aller-retour (niveau moyen)' },
          { icon: 'fas fa-paw', label: 'Faune', value: 'Lémuriens Sanford, caméléons, rapaces, baobabs' },
          { icon: 'fas fa-ticket', label: 'Entrée', value: 'Accès libre — guide local recommandé' },
          { icon: 'fas fa-temperature-high', label: 'Conseil', value: 'Partez avant 7h pour éviter la chaleur de midi' },
        ],
        tips: [
          'Partez absolument avec des chaussures de rando — le calcaire est tranchant et glissant.',
          'Emportez au moins 1,5L d\'eau par personne — pas de source en chemin.',
          'Un guide local (~15 000 Ar) est précieux pour les raccourcis et la faune.',
          'Le sentier des lémuriens en descente vaut le détour même s\'il est moins direct.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Vue depuis le sommet de la Montagne des Français' },
          { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Sentier de randonnée calcaire' },
          { url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Panorama sur la baie de Diego-Suarez' },
        ],
      },
      {
        id: 'windsor-castle',
        name: 'Windsor Castle',
        badge: 'Site militaire historique',
        rating: '4.5',
        location: 'Presqu\'île de Diego, 8 km',
        description: 'Les ruines d\'une fortification militaire britannique (1942) perchée sur une falaise surplombant la baie. Un site historique fascinant mêlant stratégie militaire et vue imprenable sur l\'océan.',
        history: 'Windsor Castle fut construit en 1942 par les forces britanniques lors de l\'opération Ironclad, la prise de Diégo-Suarez aux forces françaises de Vichy. Ce poste d\'artillerie côtière contrôlait l\'entrée de la baie — une position stratégique majeure dans la guerre des Alliés en océan Indien. Ses canons de marine sont encore en place.',
        quote: 'La rouille de ces canons porte encore les cicatrices de la guerre.',
        events: [
          { title: 'Découverte des canons', description: 'Les canons de marine britanniques, rouillés mais intacts, pointent encore vers l\'horizon — vestiges saisissants de 1942.' },
          { title: 'Vue nocturne', description: 'Lors des nuits claires, la vue sur les lumières de Diego et les étoiles vaut le déplacement en soirée.' },
        ],
        facts: [
          { icon: 'fas fa-calendar-days', label: 'Date', value: 'Construit en 1942 lors de l\'Opération Ironclad (WWII)' },
          { icon: 'fas fa-flag', label: 'Nationalité', value: 'Construction britannique, armée royale' },
          { icon: 'fas fa-route', label: 'Accès', value: '8 km de Diego — piste 4x4 ou randonnée (2h)' },
          { icon: 'fas fa-mountain', label: 'Altitude', value: 'Environ 250 mètres sur la falaise' },
        ],
        tips: [
          'Combinez avec la visite du cimetière militaire français au pied de la montagne.',
          'Attention aux ruines — certaines zones sont instables, restez sur les chemins balisés.',
          'La visite prend 1h30 sur place — prévoyez de quoi pique-niquer avec la vue.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Les ruines de Windsor Castle' },
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Vue stratégique sur la baie' },
        ],
      },
      {
        id: 'nosy-lonjo',
        name: 'Nosy Lonjo — Le Pain de Sucre',
        badge: 'Île sacrée',
        rating: '4.6',
        location: 'Baie de Diégo-Suarez',
        description: 'Un rocher volcanique en pain de sucre émergeant au milieu de la baie, considéré comme sacré par les Antakarana. Son accès est réglementé et se fait uniquement en bateau.',
        history: 'Nosy Lonjo ("l\'île longue") est une île sacrée Antakarana depuis des siècles. La légende locale raconte que l\'île est la demeure des esprits des ancêtres du peuple Antakarana, et qu\'un fady (tabou) interdit d\'y dormir et d\'y apporter certains aliments. Des cérémonies rituelles y sont encore pratiquées par les guérisseurs traditionnels.',
        quote: 'Certains lieux appartiennent aux vivants, d\'autres aux ancêtres. Nosy Lonjo appartient aux deux.',
        events: [
          { title: 'Cérémonie du Tsaboraha', description: 'Plusieurs fois par an, des cérémonies de bénédiction Antakarana se tiennent sur l\'île, avec musique et offrandes.' },
          { title: 'Nidification des oiseaux de mer', description: 'Des colonies de sternes et de frégates nichent au sommet de l\'île — visible depuis le bateau.' },
        ],
        facts: [
          { icon: 'fas fa-sailboat', label: 'Accès', value: 'En pirogue ou bateau depuis Ramena (20 min)' },
          { icon: 'fas fa-ban', label: 'Respect', value: 'Île sacrée — respectez les fady locaux sans exception' },
          { icon: 'fas fa-dove', label: 'Oiseaux', value: 'Colonie de sternes, frégates et pailles-en-queue' },
          { icon: 'fas fa-water', label: 'Snorkeling', value: 'Eaux claires autour de l\'île — excellent pour le snorkeling' },
        ],
        tips: [
          'Demandez à votre guide les fady (tabous) à respecter avant de débarquer.',
          'Ne cueillez rien, ne prenez aucune pierre — respectez le caractère sacré du lieu.',
          'Le snorkeling autour de l\'île est magnifique — apportez votre masque et tuba.',
          'Combinez avec la Mer d\'Émeraude le même jour pour une excursion en mer complète.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Nosy Lonjo émergeant de la baie' },
          { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Eaux turquoise autour du Pain de Sucre' },
        ],
      },
    ],
  },
  {
    id: 'history',
    title: 'Histoire, Ville & Urbanisme',
    icon: 'fas fa-landmark',
    description: 'Architecture coloniale, culture Antakarana et patrimoine multiculturel',
    places: [
      {
        id: 'centre-ville',
        name: 'Centre-Ville Historique',
        badge: 'Architecture coloniale',
        rating: '4.5',
        location: 'Antsiranana (Diego-Suarez)',
        description: 'Un centre-ville aux airs de port méditerranéen, avec ses immeubles coloniaux colorés, ses ruelles animées et sa place Joffre encadrée de palmiers. Un mélange unique de cultures malgache, française, arabe et indienne.',
        history: 'Diégo-Suarez fut fondée officiellement comme ville coloniale française en 1886, après la prise de la baie. La ville porte le nom du navigateur portugais Diego Dias, qui découvrit la baie en 1500. Le général Joffre, futur héros de la Marne, y débuta sa carrière militaire. La ville fut un port stratégique majeur jusqu\'en 1973, date du retrait de la base navale française.',
        quote: 'Diego garde en elle l\'âme de tous les peuples qui l\'ont traversée.',
        events: [
          { title: 'Marché couvert du Bazary Be', description: 'Le grand marché couvert, véritable institution locale, déborde de couleurs, d\'épices et de vie chaque matin dès 6h.' },
          { title: 'Fête nationale du 26 juin', description: 'Défilé militaire et festivités populaires sur la place Joffre — une célébration de l\'indépendance de 1960 très animée.' },
          { title: 'Soirées boulevard du port', description: 'En soirée, le boulevard du port s\'anime de restaurants de fruits de mer, de musique live et de buvettes locales.' },
        ],
        facts: [
          { icon: 'fas fa-landmark', label: 'Fondation', value: 'Port colonial français établi en 1886' },
          { icon: 'fas fa-users', label: 'Population', value: 'Environ 115 000 habitants (2021)' },
          { icon: 'fas fa-globe', label: 'Multiculturalisme', value: 'Malgaches Antakarana, Français, Arabes, Indiens, Comoriens' },
          { icon: 'fas fa-masks-theater', label: 'Vie culturelle', value: 'Nombreux festivals, marchés artisanaux et musique vazimba' },
          { icon: 'fas fa-building-columns', label: 'Architecture', value: 'Immeubles coloniaux classés du début du XXe siècle' },
        ],
        tips: [
          'La visite à pied du centre prend 2-3h — partez tôt le matin pour éviter la chaleur.',
          'Le Bazary Be est à ne pas manquer pour une immersion culturelle authentique.',
          'Goûtez au mofo gasy (galettes de riz) et au lasopy (soupe) chez un marchand de rue.',
          'Les vendeurs de vanille et d\'épices sur le marché proposent de très bonnes affaires.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Architecture coloniale du centre-ville' },
          { url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'La place Joffre en soirée' },
          { url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Marché traditionnel coloré' },
        ],
      },
      {
        id: 'jardin-tropical',
        name: 'Jardin Tropical de Diégo',
        badge: 'Botanique & Tranquillité',
        rating: '4.3',
        location: 'Diego-Suarez centre',
        description: 'Un havre de verdure en pleine ville, avec une collection remarquable de plantes tropicales, d\'orchidées et d\'espèces endémiques de Madagascar. Un lieu de promenade et de sérénité.',
        history: 'Ce jardin botanique fut créé au début du XXe siècle par l\'administration coloniale française pour étudier et acclimater des plantes tropicales. Il abrita un temps une station météorologique et devint rapidement le poumon vert de la ville coloniale en pleine expansion.',
        events: [
          { title: 'Floraison des orchidées', description: 'En octobre-novembre, les orchidées indigènes du jardin sont en pleine floraison — spectacle végétal exceptionnel.' },
        ],
        facts: [
          { icon: 'fas fa-seedling', label: 'Collection', value: 'Plus de 200 espèces de plantes tropicales et endémiques' },
          { icon: 'fas fa-calendar-days', label: 'Fondation', value: 'Créé au début du XXe siècle, époque coloniale française' },
          { icon: 'fas fa-stopwatch', label: 'Visite', value: '1 à 2 heures de promenade tranquille' },
          { icon: 'fas fa-ticket', label: 'Entrée', value: 'Gratuit ou entrée symbolique selon période' },
        ],
        tips: [
          'Idéal en milieu de journée pour se mettre à l\'ombre et récupérer de l\'ardeur du soleil.',
          'Apportez un livre — les bancs ombragés sont parfaits pour une pause lecture.',
          'Un photographe amateur trouvera d\'excellents sujets macro avec les orchidées.',
        ],
        images: [
          { url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Jardin tropical luxuriant' },
          { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', caption: 'Orchidées et végétation tropicale' },
        ],
      },
    ],
  },
]

// ──────────────────────────────────────────────
// Composant principal Diego
// ──────────────────────────────────────────────
const Diego = () => {
  const { t } = useLanguage()
  const [heroIndex, setHeroIndex] = useState(0)
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [activeSection, setActiveSection] = useState('beaches')

  const heroImages = [
    diegoImg1,
    diegoImg2,
    diegoImg3,
    diegoImg4,
    diegoImg5,
    diegoImg6,
    diegoImg7,
    diegoImg8,
    diegoImg9,
    diegoImg10,
    diegoImg11,
    diegoImg12,
    diegoImg13,
    diegoImg14,
    diegoImg15,
    diegoImg16,
    diegoImg17,
    diegoImg18,
    diegoImg19,
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const currentSection = diegoSections.find(s => s.id === activeSection) || diegoSections[0]

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[heroIndex]}
            alt="Diégo-Suarez"
            className="w-full h-full object-cover transition-all duration-1000 scale-105"
          />
        </div>

        <div className="container-custom text-center text-white relative z-10 px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm px-4 py-1.5 rounded-full mb-6">
            <i className="fas fa-map-marker-alt text-emerald-400 text-xs" />
            <span>Antsiranana — Nord de Madagascar</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-4 flex items-center justify-center gap-3 drop-shadow-lg">
            <i className="fas fa-wind text-emerald-400 shrink-0" />
            <span>{t('diego.hero.title')}</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto drop-shadow-md">
            {t('diego.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-full transition-all shadow-lg flex items-center gap-2"
            >
              <i className="fas fa-calendar-check" />
              {t('diego.hero.cta_book')}
            </Link>
            <a
              href="#explore"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-medium px-8 py-3.5 rounded-full transition-all flex items-center gap-2"
            >
              <i className="fas fa-compass" />
              {t('diego.hero.cta_explore')}
            </a>
          </div>
        </div>

        {/* Dots */}
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
                style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }}
              />
            </div>
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider text-sm uppercase mb-2 block">
                {t('diego.about.badge')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {t('diego.about.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {t('diego.about.paragraph1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('diego.about.paragraph2')}
              </p>
              <div className="bg-emerald-500/10 dark:bg-emerald-400/10 p-4 rounded-xl mb-8 border border-emerald-500/20">
                <h3 className="font-semibold text-emerald-800 dark:text-emerald-300 mb-1 flex items-center gap-2">
                  <i className="fas fa-calendar-alt text-emerald-500" />
                  {t('diego.about.best_time_label')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{t('diego.about.best_time_value')}</p>
              </div>
              <Link
                to="/contact"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all inline-block shadow-md"
              >
                {t('diego.about.cta')}
              </Link>
            </div>
          </div>

          {/* ── Tabs des sections ── */}
          <div className="mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-2">
              Explorer Diégo-Suarez
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
              Cliquez sur un lieu pour découvrir son histoire, ses secrets et les conseils du guide
            </p>

            {/* Navigation des sections */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {diegoSections.map(section => (
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

            {/* Section active */}
            <div
              key={activeSection}
              style={{ animation: 'modalIn 0.3s ease-out' }}
            >
              {/* En-tête de section */}
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

              {/* Grille de cartes avec détails sous la carte cliquée */}
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

          {/* ── CTA final ── */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} />
            <div className="relative z-10">
              <i className="fas fa-compass text-emerald-400 text-4xl mb-4 block" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
                Prêt à explorer Diégo-Suarez ?
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                Je vous guide sur mesure à travers tous ces lieux extraordinaires. Contactez-moi pour construire votre itinéraire idéal.
              </p>
              <Link
                to="/contact"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <i className="fas fa-envelope" />
                Planifier mon séjour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diego