const player = {
  taille: 1.70,
  poids: 56,
  poste: "Latéral gauche",
  atout: "Vision de jeu",
  objectif: "Meilleur latéral gauche du monde"
};

const phaseSummaries = {
  fondations: {
    title: "Phase 1 · Fondations (Semaines 1–6)",
    text: "Construire la base physique et technique. Aucun entraînement intensif sans socle solide. Focus : musculation corps entier, technique balle simple, endurance aérobie, gainage. Objectif à valider : 5 km en moins de 25 min, gainage 2 min, passe propre 9/10.",
    weeks: 6
  },
  developpement: {
    title: "Phase 2 · Développement Physique (Semaines 7–14)",
    text: "Explosivité, vitesse, puissance. Prendre de la masse musculaire utile (cible 60–62 kg). Sprints progressifs, pliométrie, force maximale, 1v1 défensif. La vision de jeu existante s'appuie sur un corps plus fort.",
    weeks: 8
  },
  specialisation: {
    title: "Phase 3 · Spécialisation Latéral (Semaines 15–20)",
    text: "Situations SPÉCIFIQUES au poste : overlap, transitions D→A, positionnement ligne défensive, phases arrêtées. Analyse vidéo des modèles (Theo Hernandez, Andy Robertson, Alphonso Davies). Intégrer la vision de jeu dans des séquences réelles.",
    weeks: 6
  },
  performance: {
    title: "Phase 4 · Performance Match (Semaines 21–24)",
    text: "Tout intégrer en situation de match réel. Analyse vidéo, préparation mentale, activation pré-match, récupération post-match. Évaluation des KPIs : sprint 30 m < 4,2 s, duels > 65%, centres 7/10.",
    weeks: 4
  }
};

// ── Catalogue complet de séances ─────────────────────────────────────────────

const sessionCatalog = {

  // ── FONDATIONS ──
  fond_muscu_corps_entier: {
    title: "Musculation · Corps entier",
    type: "Salle",
    duration: "60 min",
    desc: "Squat gobelet 3×12, fentes marchées 3×10, pompes 3×15, tractions 3×8, gainage frontal 3×45 s, gainage latéral 3×30 s. Repos 90 s entre séries.",
    steps: [
      "Échauffement : 10 min mobilité hanches + épaules",
      "Squat gobelet (haltère) : 3 séries × 12 reps, descente 3 s",
      "Fentes marchées : 3 × 10 par jambe, gainage du buste",
      "Pompes : 3 × 15 (pieds surélevés si trop facile)",
      "Tractions prise large : 3 × 8 (élastique si besoin)",
      "Gainage frontal : 3 × 45 s",
      "Gainage latéral : 3 × 30 s par côté",
      "Étirements : 10 min ischios + quadriceps + fléchisseurs hanche"
    ]
  },
  fond_technique_passe: {
    title: "Technique · Passe courte + contrôle orienté",
    type: "Terrain",
    duration: "75 min",
    desc: "Passes à 10/15/20 m, contrôles orientés vers la ligne, jeu à 1-2 touches. Répétitions jusqu'à automatisme.",
    steps: [
      "Jonglerie libre : 10 min (objectif 50 touches consécutives)",
      "Passes contre un mur à 10 m : 3 × 3 min, alternance pied droit/gauche",
      "Contrôle orienté : recevoir + orienter vers l'avant en 1 touche, 4 × 10 reps",
      "Passes longues à 20 m avec plot cible : 3 × 10 passes",
      "Jeu à 1 touche : passe-passe avec plot ou partenaire imaginaire, 4 × 2 min",
      "Tirs au but après contrôle : 10 tirs côté gauche + 10 côté droit"
    ]
  },
  fond_endurance_aerob: {
    title: "Endurance · Aérobie continu",
    type: "Terrain / Route",
    duration: "50 min",
    desc: "Course continue 5–8 km à 70 % FC max (environ 140 bpm). Pas de ballon. Travail du foncier.",
    steps: [
      "Échauffement : 5 min marche rapide",
      "Course continue 5 km minimum à allure conversationnelle (tu peux parler)",
      "Cible : finir 5 km en moins de 28 min (semaine 1), moins de 25 min (semaine 6)",
      "Retour calme : 5 min marche",
      "Étirements statiques : mollets, ischios, quadriceps (30 s chaque)"
    ]
  },
  fond_gainage_mobilite: {
    title: "Gainage + Mobilité articulaire",
    type: "Salle / Terrain",
    duration: "45 min",
    desc: "Circuit gainage complet + travail de mobilité des hanches, chevilles et épaules. Fondamental pour éviter les blessures.",
    steps: [
      "Dead bug : 3 × 10 reps (bras + jambe opposés)",
      "Bird dog : 3 × 10 reps par côté",
      "Pont fessier : 3 × 15 reps, tenir 2 s en haut",
      "Gainage frontal : 4 × 45 s → progresser jusqu'à 2 min",
      "Gainage latéral étoile : 3 × 20 s par côté",
      "Mobilité hanches : cercles, fente hip flexor, pigeon stretch",
      "Mobilité cheville : 3 × 15 rotations par pied",
      "Foam roller : dos, ischios, IT band (10 min)"
    ]
  },
  fond_technique_couloir: {
    title: "Technique · Conduite + centre dans le couloir",
    type: "Terrain",
    duration: "75 min",
    desc: "Conduite de balle à vitesse progressive dans le couloir gauche, puis centre dans la surface. Répéter jusqu'à automatisme.",
    steps: [
      "Échauffement balle au pied : jonglerie + conduite libre 10 min",
      "Conduite sur 30 m en ligne droite, accélération finale : 5 × aller-retour",
      "Slalom 6 plots espacés de 2 m puis sprint final : 4 × 3 passages",
      "Conduite + centre bas (ras du sol) vers plot cible : 3 × 10",
      "Conduite + centre tendu en l'air vers zone penalty : 3 × 10",
      "Récupération : 1 min entre chaque série"
    ]
  },
  fond_endurance_intervalles: {
    title: "Endurance · Intervalles couloir",
    type: "Terrain",
    duration: "60 min",
    desc: "Sprints sur 30 m avec ballon, récupération trot retour. Simule les montées/descentes du latéral.",
    steps: [
      "Échauffement : 10 min trot léger + étirements dynamiques",
      "Série 1 : 6 × sprint 30 m avec ballon, récup 45 s trot",
      "Repos 3 min",
      "Série 2 : 6 × sprint 30 m sans ballon (vitesse maximale), récup 45 s",
      "Repos 3 min",
      "Série 3 : 4 × 60 m (montée + retour) avec ballon, récup 1 min",
      "Retour calme + étirements 10 min"
    ]
  },
  fond_duel_1v1_base: {
    title: "1v1 · Fondamentaux défensifs",
    type: "Terrain",
    duration: "60 min",
    desc: "Posture défensive, lecture des appuis adversaires, tacle glissé. Travail solo avec visualisation.",
    steps: [
      "Posture défensive : genoux fléchis, poids avant, regard balle — tenir 3 × 30 s par côté",
      "Déplacements latéraux défensifs : 4 × 10 m aller-retour en position, 3 séries",
      "Simulation retard défensif : reculer en rétro sur 15 m en guidant adversaire vers la touche, 5 reps",
      "Tacle glissé sur plot : 3 × 8 (pied gauche + pied droit)",
      "Contre-pied : sprint + pivot 180° sur signal, 4 × 5 reps",
      "Visualisation : 5 min yeux fermés, imaginer 10 duels gagnés"
    ]
  },
  fond_repos_actif: {
    title: "Repos actif · Récupération",
    type: "Maison / Salle",
    duration: "30 min",
    desc: "Pas d'effort. Mobilité douce, foam roller, respiration. Essentiel pour la progression.",
    steps: [
      "Marche légère 15 min (pas de course)",
      "Foam roller : dos, ischios, mollets (10 min)",
      "Étirements statiques doux : toutes les chaînes musculaires",
      "Respiration abdominale : 5 min (4 s inspir, 4 s expir)",
      "Boire minimum 2 L d'eau dans la journée"
    ]
  },

  // ── DÉVELOPPEMENT PHYSIQUE ──
  dev_force_puissance: {
    title: "Force/Puissance · Jambes & explosivité",
    type: "Salle",
    duration: "65 min",
    desc: "Squat + soulevé de terre + presse. Séries courtes, charges lourdes. Objectif : prendre 4–6 kg de masse musculaire.",
    steps: [
      "Échauffement : 10 min vélo ou rameur léger",
      "Squat barre : 4 séries × 6 reps à 75–80 % 1RM, repos 2 min",
      "Soulevé de terre roumain : 3 × 6 reps, focus ischios et fessiers",
      "Presse cuisses : 3 × 8 reps lourde",
      "Hip thrust (fessiers) : 3 × 10 reps, tenir 1 s en haut",
      "Mollets debout : 4 × 15 reps lents",
      "Gainage de fin : 2 × 60 s",
      "Protéines dans les 30 min post-séance (shake ou repas)"
    ]
  },
  dev_vitesse_sprint: {
    title: "Vitesse · Sprints explosifs progressifs",
    type: "Terrain",
    duration: "55 min",
    desc: "Sprints maximaux 10/20/30 m. Départs arrêtés, départs depuis position défensive. Développer la vitesse de démarrage.",
    steps: [
      "Échauffement : 15 min (trot + jambes + éducatifs : genoux hauts, talons-fesses, foulées bondissantes)",
      "Sprints 10 m départ arrêté : 5 × 3 reps, récup 1 min",
      "Sprints 20 m départ depuis position défensive (genoux fléchis) : 5 × 3 reps, récup 90 s",
      "Sprints 30 m vitesse max : 4 × 3 reps, récup 2 min",
      "Sprint 30 m + arrêt brutal + redépart (simulation changement de direction) : 4 × 2 reps",
      "Retour calme : 10 min trot léger",
      "Objectif semaine 8 : 30 m en moins de 4,2 s"
    ]
  },
  dev_technique_vitesse: {
    title: "Technique · Conduite haute vitesse + frappe",
    type: "Terrain",
    duration: "75 min",
    desc: "Conduite à grande vitesse + centre/frappe en fin de course. Travaille la technique sous fatigue.",
    steps: [
      "Conduite 40 m sprint + frappe : 4 × 8 (alternance pied G et D)",
      "Slalom 8 plots + centre bas : 4 × 10",
      "Conduite + changement de direction 180° + reprise de balle : 3 × 6",
      "Passe longue 30 m après sprint : 3 × 8",
      "Centre en course depuis la ligne de fond : 3 × 10 (zone 1er poteau + 2e poteau)",
      "Repos : 1 min entre chaque série"
    ]
  },
  dev_pliometrie: {
    title: "Pliométrie · Sauts & puissance explosive",
    type: "Terrain / Salle",
    duration: "55 min",
    desc: "Circuit 5 postes pliométriques. Développe la puissance musculaire et la réactivité neuro-musculaire.",
    steps: [
      "Échauffement : 10 min (jumping jacks + montées genoux + skip)",
      "Poste 1 — Box jump : 4 × 6 sauts sur caisse 40–50 cm",
      "Poste 2 — Sauts latéraux (ligne de touche) : 4 × 10 allers-retours",
      "Poste 3 — Bonds en foulées : 3 × 20 m",
      "Poste 4 — Drop jump + sprint : 3 × 5 (sauter, poser, sprinter 10 m)",
      "Poste 5 — Saut vertical max : 3 × 5 (mesurer la hauteur)",
      "Repos 90 s entre postes",
      "Retour calme : étirements dynamiques 10 min"
    ]
  },
  dev_duel_defensif: {
    title: "1v1 · Défensif avancé",
    type: "Terrain",
    duration: "65 min",
    desc: "Duels contre ailier rapide, gestion des feintes, retard défensif pour fermer le couloir. 10 scénarios.",
    steps: [
      "Retard défensif sur 10 m : accompagner adversaire vers touche, 4 × 5",
      "Lecture des appuis : départ sur feinte de corps, 3 × 8",
      "Tacle propre depuis derrière : 3 × 6 (plot = adversaire)",
      "1v1 couloir serré (2 m) : tenir position 5 s minimum, 4 × 5",
      "Récupération balle + relance rapide : 4 × 6",
      "Sprint de récupération sur 15 m après être mis en défaut : 4 × 5",
      "Repos 1 min entre chaque exercice"
    ]
  },
  dev_fractionne: {
    title: "Endurance · Fractionné 30-30",
    type: "Terrain",
    duration: "55 min",
    desc: "30 s effort maximal / 30 s récupération trot. 15 à 20 répétitions. Développe le VO2max.",
    steps: [
      "Échauffement : 15 min progressif",
      "Fractionné 30-30 : 15 reps (semaine 1) → 20 reps (semaine 8)",
      "Effort : courir à 90–95 % FC max sur 30 s",
      "Récup : trot léger 30 s (ne pas s'arrêter)",
      "Repos 3 min à mi-séance",
      "Retour calme : 10 min trot + étirements"
    ]
  },
  dev_recuperation: {
    title: "Récupération · Bain froid + étirements",
    type: "Maison",
    duration: "45 min",
    desc: "Protocole de récupération post-charge lourde. Essentiel pour la progression.",
    steps: [
      "Bain froid ou douche froide : 3–10 min à eau froide (jambes++)",
      "Foam roller : IT band, quadriceps, ischios, mollets (15 min)",
      "Étirements statiques longs : toutes les chaînes (20 min)",
      "Hydratation : 500 ml eau + sel ou boisson récupération",
      "Repas riche en protéines dans les 2 h",
      "Dormir 8 h minimum"
    ]
  },

  // ── SPÉCIALISATION LATÉRAL ──
  spe_overlap: {
    title: "Overlap & Sous-overlap · Timing des courses",
    type: "Terrain",
    duration: "75 min",
    desc: "Timing des montées en overlap avec le milieu gauche, lecture du déclenchement, position du défenseur adverse.",
    steps: [
      "Overlap simple : cours dans le dos du plot-ailier, reçois et centre, 4 × 10",
      "Sous-overlap : passe et reste en dedans pour la 2e vague, 4 × 8",
      "Lecture du déclenchement : partir uniquement quand le milieu a la balle et tourne, 3 × 6",
      "Centre après overlap sur 3 touches max : 4 × 10",
      "Simulation retour : après centre, sprint retour 40 m en 6 s max, 3 × 5",
      "Récup : 1 min entre chaque exercice",
      "Analyse vidéo : regarder 2 actions d'overlap de Theo Hernandez ce soir"
    ]
  },
  spe_transition: {
    title: "Transition · Défense → Attaque",
    type: "Terrain",
    duration: "75 min",
    desc: "Récupération balle + sprint immédiat dans le couloir. Ne jamais attendre. Choix : centre, passe, dribble.",
    steps: [
      "Récup balle + sprint 30 m sans adversaire : 4 × 8",
      "Récup balle + lecture : si couloir ouvert → sprint, si fermé → passe intérieure, 4 × 6",
      "Transition après corner perdu : sprint 50 m en 7 s max pour repositionnement, 3 × 5",
      "Séquence complète : récup → sprint → centre → retour défensif, 3 × 5",
      "Repos : 90 s entre répétitions",
      "Mesurer ton temps de transition (objectif < 5 s récup → premier appui de sprint)"
    ]
  },
  spe_positionnement: {
    title: "Positionnement · Ligne défensive",
    type: "Terrain",
    duration: "70 min",
    desc: "Occupation de la zone, distance avec le centre-back, couverture des espaces dans le dos.",
    steps: [
      "Position de base : placer le corps entre l'ailier adv. et le but, 3 × 5 min de simulation",
      "Ligne défensive : se déplacer latéralement synchronisé avec plots CB, 4 × 10",
      "Angle de couverture : se positionner pour voir balle ET ailier simultanément, 3 × 5",
      "Sortie sur ailier : quand sortir, quand couvrir ? (règle : si balle côté + ailier dans le dos → sortir), 3 × 8",
      "Communication imaginaire : répéter à voix haute 'je sors' / 'couvert' / 'ligne' pendant les exercices",
      "Analyse vidéo : regarder un match d'Andy Robertson, noter 5 positionnements défensifs"
    ]
  },
  spe_phases_arretees: {
    title: "Phases arrêtées · Corners, touches, coups francs",
    type: "Terrain",
    duration: "60 min",
    desc: "Corners entrants pied gauche, rentrées de touche, coups francs indirects depuis la gauche.",
    steps: [
      "Corner entrant : 4 × 10 corners depuis le coin, viser zone 1er poteau et 2e poteau",
      "Corner sortant (en cas d'urgence) : 2 × 5",
      "Rentrée de touche longue : lancer à 25–30 m, 3 × 8",
      "Coup franc indirect depuis 30 m : 3 × 10, viser loin poteau",
      "Coup franc direct depuis 20 m (ton point fort à développer) : 3 × 10",
      "Récupération : 45 s entre chaque série"
    ]
  },
  spe_lecture_jeu: {
    title: "Lecture de jeu · Analyse & décision rapide",
    type: "Terrain",
    duration: "70 min",
    desc: "Exploiter la vision de jeu innée : scanner avant de recevoir, trouver le bon dézonage, anticipation.",
    steps: [
      "Scanner avant réception : tourner la tête 2 fois avant de recevoir CHAQUE balle, 4 × 10",
      "Exercice de décision rapide : reçois balle, 3 options de passe dessinées au sol, décide en < 2 s, 4 × 8",
      "Lecture du pressing adverse : quand garder, quand jouer long, 3 × 6 simulations",
      "Circuit de passes en triangle : 1 touche max, lecture des appels, 3 × 5 min",
      "Visualisation match : 10 min yeux fermés, imaginer 20 situations de jeu et tes décisions",
      "Note le soir : 3 situations où ta vision a fait la différence"
    ]
  },
  spe_analyse_video: {
    title: "Analyse vidéo · Modèles de référence",
    type: "Maison",
    duration: "60 min",
    desc: "Étudier les meilleurs latéraux gauches du monde. Prendre des notes, reproduire mentalement.",
    steps: [
      "Regarder 1 match complet de Theo Hernandez (AC Milan) ou highlights 20 min",
      "Observer : ses placements défensifs, ses déclenchements d'overlap, ses centres",
      "Regarder 10 min de highlights Alphonso Davies : vitesse, dribbles 1v1, récupérations",
      "Regarder 10 min Andy Robertson : pressing, passes courtes, communication",
      "Prendre 10 notes concrètes : 'je dois faire ça dans ma prochaine séance'",
      "Avant de dormir : visualisation 5 min — imaginer que TU es sur le terrain et TU fais ces actions"
    ]
  },
  spe_force_laterale: {
    title: "Force · Spécifique latéral (unilateral)",
    type: "Salle",
    duration: "60 min",
    desc: "Renforcement unilatéral pour équilibrer les deux jambes. Focus stabilité hanche et genou.",
    steps: [
      "Bulgarian split squat : 4 × 8 par jambe (jambe arrière sur banc)",
      "Fentes latérales lestées : 3 × 10 par côté",
      "Hip thrust unilatéral : 3 × 10 par fessier",
      "Step-up sur banc : 3 × 10 par jambe avec haltère",
      "Résistance bande élastique : déplacements latéraux 3 × 20 pas",
      "Gainage de fin : 2 × 60 s"
    ]
  },

  // ── PERFORMANCE MATCH ──
  perf_analyse_adversaire: {
    title: "Analyse · Adversaire du prochain match",
    type: "Maison",
    duration: "45 min",
    desc: "Étudier l'ailier adverse. Préparer les réponses tactiques personnalisées.",
    steps: [
      "Regarder 2–3 matchs ou highlights de l'ailier adverse",
      "Identifier : pied fort, type de feinte préférée, vitesse, tendance à couper ou déborder",
      "Préparer ta réponse : si coupeur → fermer l'intérieur, si débordeur → tenir ta ligne",
      "Visualisation : 3 duels contre lui et tu gagnes les 3",
      "Note tes 3 priorités défensives pour ce match"
    ]
  },
  perf_activation: {
    title: "Activation · Pré-match J-1",
    type: "Terrain",
    duration: "35 min",
    desc: "Activation légère sans fatigue. Réveiller les muscles, activer la concentration.",
    steps: [
      "Trot léger : 10 min",
      "Éducatifs : genoux hauts, talons-fesses, foulées bondissantes (5 min)",
      "4 × sprints 20 m à 80 % (pas au max)",
      "Jonglerie + passes courtes : 10 min",
      "3 tirs au but côté gauche",
      "Visualisation 5 min : ton meilleur match"
    ]
  },
  perf_match_complet: {
    title: "MATCH · Performance complète",
    type: "Terrain",
    duration: "90 min",
    desc: "Match officiel ou simulation 11v11. Appliquer TOUT le programme. Mesurer les KPIs.",
    steps: [
      "Échauffement 20 min avec l'équipe",
      "PENDANT : 3 priorités — positionnement, transition D→A, duels gagnés",
      "Compter mentalement ou demander à quelqu'un : centres réussis, duels gagnés, sprints couverts",
      "Après match : noter 3 réussites + 3 erreurs à corriger",
      "Récupération : étirements 15 min + hydratation"
    ]
  },
  perf_preparation_mentale: {
    title: "Mental · Préparation psychologique",
    type: "Maison",
    duration: "30 min",
    desc: "Visualisation, routines pré-match, ancrage mental. Le mental est le dernier séparateur entre bons joueurs.",
    steps: [
      "Visualisation positive : 10 min, yeux fermés, imaginer ton meilleur match",
      "Routine d'ancrage : geste physique (ex: claquer les mains) + phrase clé (ex: 'je suis le plus rapide')",
      "Lecture : 20 min de Robert Greene (Les 48 lois du pouvoir) ou biographie d'un grand joueur",
      "Journal : écrire 3 progrès de la semaine + 1 objectif pour le match",
      "Musique motivation : créer une playlist de 15 min pour l'échauffement"
    ]
  },
  perf_bilan_semaine: {
    title: "Bilan hebdomadaire · Analyse & progression",
    type: "Maison",
    duration: "45 min",
    desc: "Mesurer les progrès, ajuster le programme, analyser les données de la semaine.",
    steps: [
      "Mesurer les KPIs : sprint 30 m, gainage, poids, FC repos",
      "Revoir les notes de toutes les séances de la semaine",
      "Comparer avec les objectifs de la phase",
      "Identifier le point le plus faible → le mettre en priorité semaine suivante",
      "Planifier les 7 séances de la semaine prochaine",
      "Regarder 1 action de match de Theo Hernandez ou Robertson pour rester motivé"
    ]
  },
  perf_recuperation_complete: {
    title: "Récupération · Protocole post-match complet",
    type: "Maison",
    duration: "45 min",
    desc: "Récupération optimale après match pour être prêt 48h après.",
    steps: [
      "Dans les 30 min post-match : repas glucides + protéines (riz + poulet ou équivalent)",
      "Bain froid ou douche froide 5–10 min (si possible)",
      "Foam roller : jambes complètes, dos (20 min)",
      "Étirements statiques longs (20 min)",
      "Analyse vidéo du match si disponible : noter 3 erreurs + 3 réussites",
      "Dormir 9 h minimum cette nuit"
    ]
  }
};

// ── Programme semaine par semaine ─────────────────────────────────────────────

const phasePrograms = {

  fondations: {
    1: [
      { jour: "Lundi",    key: "fond_muscu_corps_entier" },
      { jour: "Mardi",    key: "fond_technique_passe" },
      { jour: "Mercredi", key: "fond_endurance_aerob" },
      { jour: "Jeudi",    key: "fond_gainage_mobilite" },
      { jour: "Vendredi", key: "fond_technique_couloir" },
      { jour: "Samedi",   key: "fond_endurance_intervalles" },
      { jour: "Dimanche", key: "fond_repos_actif" }
    ],
    2: [
      { jour: "Lundi",    key: "fond_muscu_corps_entier" },
      { jour: "Mardi",    key: "fond_technique_couloir" },
      { jour: "Mercredi", key: "fond_endurance_aerob" },
      { jour: "Jeudi",    key: "fond_gainage_mobilite" },
      { jour: "Vendredi", key: "fond_technique_passe" },
      { jour: "Samedi",   key: "fond_endurance_intervalles" },
      { jour: "Dimanche", key: "fond_duel_1v1_base" }
    ],
    3: [
      { jour: "Lundi",    key: "fond_muscu_corps_entier" },
      { jour: "Mardi",    key: "fond_technique_passe" },
      { jour: "Mercredi", key: "fond_endurance_aerob" },
      { jour: "Jeudi",    key: "fond_gainage_mobilite" },
      { jour: "Vendredi", key: "fond_technique_couloir" },
      { jour: "Samedi",   key: "fond_duel_1v1_base" },
      { jour: "Dimanche", key: "fond_repos_actif" }
    ],
    4: [
      { jour: "Lundi",    key: "fond_muscu_corps_entier" },
      { jour: "Mardi",    key: "fond_technique_couloir" },
      { jour: "Mercredi", key: "fond_endurance_aerob" },
      { jour: "Jeudi",    key: "fond_gainage_mobilite" },
      { jour: "Vendredi", key: "fond_technique_passe" },
      { jour: "Samedi",   key: "fond_endurance_intervalles" },
      { jour: "Dimanche", key: "fond_duel_1v1_base" }
    ],
    5: [
      { jour: "Lundi",    key: "fond_muscu_corps_entier" },
      { jour: "Mardi",    key: "fond_technique_passe" },
      { jour: "Mercredi", key: "fond_endurance_aerob" },
      { jour: "Jeudi",    key: "fond_gainage_mobilite" },
      { jour: "Vendredi", key: "fond_technique_couloir" },
      { jour: "Samedi",   key: "fond_duel_1v1_base" },
      { jour: "Dimanche", key: "fond_repos_actif" }
    ],
    6: [
      { jour: "Lundi",    key: "fond_muscu_corps_entier" },
      { jour: "Mardi",    key: "fond_technique_couloir" },
      { jour: "Mercredi", key: "fond_endurance_aerob" },
      { jour: "Jeudi",    key: "fond_gainage_mobilite" },
      { jour: "Vendredi", key: "fond_technique_passe" },
      { jour: "Samedi",   key: "fond_endurance_intervalles" },
      { jour: "Dimanche", key: "fond_duel_1v1_base" }
    ]
  },

  developpement: {
    1: [
      { jour: "Lundi",    key: "dev_force_puissance" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "dev_technique_vitesse" },
      { jour: "Jeudi",    key: "dev_pliometrie" },
      { jour: "Vendredi", key: "dev_duel_defensif" },
      { jour: "Samedi",   key: "dev_fractionne" },
      { jour: "Dimanche", key: "dev_recuperation" }
    ],
    2: [
      { jour: "Lundi",    key: "dev_force_puissance" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "dev_fractionne" },
      { jour: "Jeudi",    key: "dev_pliometrie" },
      { jour: "Vendredi", key: "dev_technique_vitesse" },
      { jour: "Samedi",   key: "dev_duel_defensif" },
      { jour: "Dimanche", key: "dev_recuperation" }
    ],
    3: [
      { jour: "Lundi",    key: "dev_force_puissance" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "dev_technique_vitesse" },
      { jour: "Jeudi",    key: "dev_pliometrie" },
      { jour: "Vendredi", key: "dev_fractionne" },
      { jour: "Samedi",   key: "dev_duel_defensif" },
      { jour: "Dimanche", key: "dev_recuperation" }
    ],
    4: [
      { jour: "Lundi",    key: "dev_force_puissance" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "dev_fractionne" },
      { jour: "Jeudi",    key: "dev_pliometrie" },
      { jour: "Vendredi", key: "dev_technique_vitesse" },
      { jour: "Samedi",   key: "dev_duel_defensif" },
      { jour: "Dimanche", key: "dev_recuperation" }
    ],
    5: [
      { jour: "Lundi",    key: "dev_force_puissance" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "dev_technique_vitesse" },
      { jour: "Jeudi",    key: "dev_pliometrie" },
      { jour: "Vendredi", key: "dev_fractionne" },
      { jour: "Samedi",   key: "dev_duel_defensif" },
      { jour: "Dimanche", key: "dev_recuperation" }
    ],
    6: [
      { jour: "Lundi",    key: "dev_force_puissance" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "dev_fractionne" },
      { jour: "Jeudi",    key: "dev_pliometrie" },
      { jour: "Vendredi", key: "dev_technique_vitesse" },
      { jour: "Samedi",   key: "dev_duel_defensif" },
      { jour: "Dimanche", key: "dev_recuperation" }
    ],
    7: [
      { jour: "Lundi",    key: "dev_force_puissance" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "dev_technique_vitesse" },
      { jour: "Jeudi",    key: "dev_pliometrie" },
      { jour: "Vendredi", key: "dev_fractionne" },
      { jour: "Samedi",   key: "dev_duel_defensif" },
      { jour: "Dimanche", key: "dev_recuperation" }
    ],
    8: [
      { jour: "Lundi",    key: "dev_force_puissance" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "dev_fractionne" },
      { jour: "Jeudi",    key: "dev_pliometrie" },
      { jour: "Vendredi", key: "dev_technique_vitesse" },
      { jour: "Samedi",   key: "dev_duel_defensif" },
      { jour: "Dimanche", key: "dev_recuperation" }
    ]
  },

  specialisation: {
    1: [
      { jour: "Lundi",    key: "spe_overlap" },
      { jour: "Mardi",    key: "spe_transition" },
      { jour: "Mercredi", key: "dev_fractionne" },
      { jour: "Jeudi",    key: "dev_duel_defensif" },
      { jour: "Vendredi", key: "spe_phases_arretees" },
      { jour: "Samedi",   key: "spe_positionnement" },
      { jour: "Dimanche", key: "spe_analyse_video" }
    ],
    2: [
      { jour: "Lundi",    key: "spe_overlap" },
      { jour: "Mardi",    key: "spe_lecture_jeu" },
      { jour: "Mercredi", key: "dev_fractionne" },
      { jour: "Jeudi",    key: "spe_force_laterale" },
      { jour: "Vendredi", key: "spe_transition" },
      { jour: "Samedi",   key: "spe_positionnement" },
      { jour: "Dimanche", key: "spe_analyse_video" }
    ],
    3: [
      { jour: "Lundi",    key: "spe_overlap" },
      { jour: "Mardi",    key: "spe_phases_arretees" },
      { jour: "Mercredi", key: "dev_fractionne" },
      { jour: "Jeudi",    key: "spe_force_laterale" },
      { jour: "Vendredi", key: "spe_lecture_jeu" },
      { jour: "Samedi",   key: "spe_transition" },
      { jour: "Dimanche", key: "spe_analyse_video" }
    ],
    4: [
      { jour: "Lundi",    key: "spe_overlap" },
      { jour: "Mardi",    key: "spe_positionnement" },
      { jour: "Mercredi", key: "dev_fractionne" },
      { jour: "Jeudi",    key: "spe_force_laterale" },
      { jour: "Vendredi", key: "spe_transition" },
      { jour: "Samedi",   key: "spe_phases_arretees" },
      { jour: "Dimanche", key: "spe_analyse_video" }
    ],
    5: [
      { jour: "Lundi",    key: "spe_overlap" },
      { jour: "Mardi",    key: "spe_lecture_jeu" },
      { jour: "Mercredi", key: "dev_fractionne" },
      { jour: "Jeudi",    key: "spe_force_laterale" },
      { jour: "Vendredi", key: "spe_phases_arretees" },
      { jour: "Samedi",   key: "spe_transition" },
      { jour: "Dimanche", key: "spe_analyse_video" }
    ],
    6: [
      { jour: "Lundi",    key: "spe_overlap" },
      { jour: "Mardi",    key: "spe_positionnement" },
      { jour: "Mercredi", key: "dev_fractionne" },
      { jour: "Jeudi",    key: "spe_force_laterale" },
      { jour: "Vendredi", key: "spe_lecture_jeu" },
      { jour: "Samedi",   key: "spe_transition" },
      { jour: "Dimanche", key: "spe_analyse_video" }
    ]
  },

  performance: {
    1: [
      { jour: "Lundi",    key: "perf_analyse_adversaire" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "spe_overlap" },
      { jour: "Jeudi",    key: "perf_preparation_mentale" },
      { jour: "Vendredi", key: "perf_activation" },
      { jour: "Samedi",   key: "perf_match_complet" },
      { jour: "Dimanche", key: "perf_recuperation_complete" }
    ],
    2: [
      { jour: "Lundi",    key: "perf_bilan_semaine" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "spe_transition" },
      { jour: "Jeudi",    key: "perf_preparation_mentale" },
      { jour: "Vendredi", key: "perf_activation" },
      { jour: "Samedi",   key: "perf_match_complet" },
      { jour: "Dimanche", key: "perf_recuperation_complete" }
    ],
    3: [
      { jour: "Lundi",    key: "perf_analyse_adversaire" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "spe_lecture_jeu" },
      { jour: "Jeudi",    key: "perf_preparation_mentale" },
      { jour: "Vendredi", key: "perf_activation" },
      { jour: "Samedi",   key: "perf_match_complet" },
      { jour: "Dimanche", key: "perf_recuperation_complete" }
    ],
    4: [
      { jour: "Lundi",    key: "perf_bilan_semaine" },
      { jour: "Mardi",    key: "dev_vitesse_sprint" },
      { jour: "Mercredi", key: "spe_overlap" },
      { jour: "Jeudi",    key: "perf_preparation_mentale" },
      { jour: "Vendredi", key: "perf_activation" },
      { jour: "Samedi",   key: "perf_match_complet" },
      { jour: "Dimanche", key: "perf_recuperation_complete" }
    ]
  }
};

// ── Rendu interface ───────────────────────────────────────────────────────────

function renderPhaseSummary(phaseKey) {
  const summaryEl = document.getElementById("phase-summary");
  const data = phaseSummaries[phaseKey];
  if (!data) { summaryEl.innerHTML = ""; return; }
  const maxWeeks = data.weeks;
  summaryEl.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.text}</p>
    <p style="margin-top:0.5rem;font-size:0.85rem;opacity:0.7">📅 ${maxWeeks} semaines · ${maxWeeks * 7} séances au total</p>
  `;
  const weekInput = document.getElementById("week-input");
  if (weekInput) {
    weekInput.max = maxWeeks;
    if (parseInt(weekInput.value) > maxWeeks) weekInput.value = 1;
  }
}

function renderWeek(phaseKey, weekNumber) {
  const container = document.getElementById("sessions");
  container.innerHTML = "";

  const phase = phasePrograms[phaseKey] || {};
  const weekPlan = phase[weekNumber] || phase[1] || [];

  weekPlan.forEach((session, index) => {
    const catalogItem = sessionCatalog[session.key];
    const doneKey = `phase_${phaseKey}_week_${weekNumber}_session_${index}`;
    const done = localStorage.getItem(doneKey) === "1";

    const card = document.createElement("article");
    card.className = "session-card";

    let title = "Séance";
    let type = "";
    let desc = "";
    let duration = "";
    let steps = [];

    if (catalogItem) {
      title = catalogItem.title;
      type = catalogItem.type;
      desc = catalogItem.desc;
      duration = catalogItem.duration;
      steps = catalogItem.steps || [];
    }

    const stepsHtml = steps.length
      ? `<ol class="session-steps">${steps.map(s => `<li>${s}</li>`).join("")}</ol>`
      : "";

    card.innerHTML = `
      <div class="session-meta">
        <span>${session.jour}</span>
        <span>${duration}</span>
      </div>
      <div class="session-title">${title}</div>
      <div class="session-type">${type}</div>
      <div class="session-desc">${desc}</div>
      ${stepsHtml}
      <div class="session-actions">
        <button class="session-done-btn" data-key="${doneKey}">
          ${done ? "Séance faite ✔" : "Marquer comme faite"}
        </button>
        <span class="session-status ${done ? "done" : ""}">
          ${done ? "✅ Cochée" : "⬜ Non cochée"}
        </span>
      </div>
    `;

    container.appendChild(card);
  });

  container.querySelectorAll(".session-done-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      const alreadyDone = localStorage.getItem(key) === "1";
      localStorage.setItem(key, alreadyDone ? "0" : "1");
      const phaseSelect = document.getElementById("phase-select");
      const weekInput = document.getElementById("week-input");
      renderWeek(phaseSelect.value, parseInt(weekInput.value, 10) || 1);
    });
  });
}

function initApp() {
  const phaseSelect = document.getElementById("phase-select");
  const weekInput = document.getElementById("week-input");
  const generateBtn = document.getElementById("generate-btn");

  generateBtn.addEventListener("click", () => {
    const phaseKey = phaseSelect.value;
    const weekNumber = parseInt(weekInput.value, 10) || 1;
    renderPhaseSummary(phaseKey);
    renderWeek(phaseKey, weekNumber);
  });

  phaseSelect.addEventListener("change", () => {
    renderPhaseSummary(phaseSelect.value);
  });

  renderPhaseSummary("fondations");
  renderWeek("fondations", 1);
}

document.addEventListener("DOMContentLoaded", initApp);
