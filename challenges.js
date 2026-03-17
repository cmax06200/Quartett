// ─────────────────────────────────────────────
//  QUARTETT — Fichier des défis
//  Format : { v: niveau (1-4), c: catégorie, t: texte, d: règle alcool }
//  Utilise {A} {B} {C} {D} pour les joueurs (tirés au sort à chaque défi)
// ─────────────────────────────────────────────

const CHALLENGES = [

  // ══════════════════════════════════════════
  //  NIVEAU 1 — Warm-up
  // ══════════════════════════════════════════

  { v:1, c:"Vérité",   t:"{A} avoue à {B} la chose la plus hot qu'il ait faite.",                                                                               d:"S'il refuse → il boit un verre entier." },
  { v:1, c:"Physique", t:"{A} et {B} s'embrassent pendant 30 secondes, mains autorisées partout.",                                                              d:"Qui s'arrête en premier boit." },
  { v:1, c:"Strip",    t:"{A} retire un vêtement de {B} avec les dents uniquement.",                                                                            d:"S'il utilise les mains → il boit." },
  { v:1, c:"Vérité",   t:"Tout le monde vote en même temps : qui voudrait se faire prendre par qui ce soir ? On compare.",                                      d:"Les minorités boivent." },
  { v:1, c:"Physique", t:"{A} fait un massage des épaules à {B} pendant 1 minute. {B} ne peut pas faire de bruit.",                                             d:"Si {B} gémit → il boit." },
  { v:1, c:"Vérité",   t:"{A} décrit son fantasme le plus crade en détail, sans omettre quoi que ce soit.",                                                     d:"S'il banalise ou zappe → shot." },
  { v:1, c:"Physique", t:"{A} fait un lap dance à {B} pendant 1 minute.",                                                                                       d:"Si {B} ne réagit pas → il boit." },
  { v:1, c:"Vérité",   t:"Vote : qui du groupe a la plus belle queue ? Mains levées. Le moins voté boit.",                                                      d:"Égalité → ils boivent tous les deux." },
  { v:1, c:"Physique", t:"{A} et {B} se font un câlin prolongé de 45 secondes, très proches, sans rire.",                                                       d:"Celui qui rigole boit." },
  { v:1, c:"Vérité",   t:"{A} choisit {B} et lui dit ce qu'il adorerait lui faire si les couples n'existaient pas ce soir.",                                    d:"S'il est trop vague → le groupe décide s'il boit." },
  { v:1, c:"Strip",    t:"Tout le monde enlève un vêtement en même temps. Le dernier à finir boit.",                                                            d:"Dernier à finir → shot." },
  { v:1, c:"Physique", t:"{A} embrasse le cou de {B} pendant 30 secondes.",                                                                                     d:"{B} doit rester immobile. S'il bouge → il boit." },
  { v:1, c:"Vérité",   t:"{A} dit à voix haute le surnom sexuel qu'il donnerait à chacun des 3 autres.",                                                        d:"S'il ne trouve pas pour quelqu'un → shot." },

  // ══════════════════════════════════════════
  //  NIVEAU 2 — Hot
  // ══════════════════════════════════════════

  { v:2, c:"Oral",           t:"{A} suce {B} pendant 2 minutes, sans les mains.",                                                                               d:"Utilise les mains → boit et recommence." },
  { v:2, c:"Gorge profonde", t:"Duel : {A} vs {B}, gorge profonde sur {C} et {D}. {C} et {D} jugent. Le moins convaincant boit.",                               d:"Perdant → deux shots." },
  { v:2, c:"Oral",           t:"{A} se fait lécher par {B} où {B} veut pendant 1 minute. {A} ne peut pas guider.",                                              d:"Si {A} guide → il boit." },
  { v:2, c:"Strip",          t:"{A} fait un strip-tease complet. Vote du groupe /10. Sous 6 → il boit.",                                                        d:"Note < 6 → verre entier." },
  { v:2, c:"Oral",           t:"{A} et {B} se sucent en même temps pendant 2 minutes. Celui qui s'arrête en premier boit.",                                     d:"Premier à lâcher → shot." },
  { v:2, c:"Main",           t:"{A} essaie de faire jouir {B} uniquement à la main. Il a 3 minutes.",                                                           d:"Fail → {A} boit deux shots. Succès → {B} boit." },
  { v:2, c:"Physique",       t:"{A} se masturbe devant le groupe pendant 1 minute. Pas de jouissance, juste le show.",                                          d:"S'il arrête → il boit." },
  { v:2, c:"Vérité",         t:"{A} décrit la dernière fois qu'il s'est fait prendre, en détail. Pas de censure.",                                              d:"Censure → shot." },
  { v:2, c:"Oral",           t:"{A} tient la tête de {B} pendant que {B} suce {C} pendant 1 minute. {A} donne le rythme.",                                     d:"Si {A} lâche → il boit." },
  { v:2, c:"Gorge profonde", t:"{A} essaie une gorge profonde sur {B}. Il a 2 minutes.",                                                                        d:"Fail → boit. Succès → {B} boit." },
  { v:2, c:"Strip",          t:"Tout le monde se déshabille complètement. Le dernier nu boit.",                                                                  d:"Dernier → shot." },
  { v:2, c:"Main",           t:"{A} se masturbe avec la main de {B} (c'est la main de {B} qui fait le travail). Il a 1 minute pour finir.",                     d:"Fail → {A} boit. Succès → {B} boit." },
  { v:2, c:"Oral",           t:"{C} et {D} sucent respectivement {A} et {B} pendant 2 minutes. Les récepteurs ne peuvent pas bouger.",                          d:"Si un récepteur bouge → il boit." },

  // ══════════════════════════════════════════
  //  NIVEAU 3 — Très chaud
  // ══════════════════════════════════════════

  { v:3, c:"Yeux bandés",    t:"{A} a les yeux bandés. {B}, {C} et {D} passent chacun 45 sec à lui sucer dans un ordre secret. Il doit retrouver l'ordre.",    d:"Chaque erreur → shot. 0 erreur → les 3 autres boivent." },
  { v:3, c:"Yeux bandés",    t:"{A} a les yeux bandés. Il se fait prendre par {B}, {C} et {D} dans un ordre secret. Il annonce l'ordre ensuite.",               d:"Verre entier s'il se plante. Chaque bonne réponse économise un shot." },
  { v:3, c:"Endurance",      t:"{A} reçoit de {B}, {C} et {D} en rotation (1 min chacun). Il ne doit pas jouir. S'il craque → il boit.",                       d:"Crack avant la fin → verre entier + choisit son prochain défi." },
  { v:3, c:"Couples croisés",t:"Les couples s'échangent : {A} avec {C}, {B} avec {D} pendant 3 minutes. Vote : quelle paire avait l'air la plus chaude ?",     d:"La paire la moins convaincante → ils boivent." },
  { v:3, c:"Prise",          t:"{A} prend {B} pendant 3 minutes. Position imposée : le groupe vote parmi 3 options que {A} propose.",                           d:"Si {A} n'y arrive pas → deux shots." },
  { v:3, c:"Trio",           t:"{A}, {B} et {C} ensemble pendant 3 minutes. {D} dirige les positions depuis le côté.",                                          d:"{D} boit si le trio s'arrête avant 3 min." },
  { v:3, c:"Oral",           t:"Train oral : {A} suce {B}, {B} suce {C}, {C} suce {D} simultanément pendant 1 minute.",                                        d:"Tout le monde boit si quelqu'un rigole." },
  { v:3, c:"Prise",          t:"{A} se fait prendre par {B} et {C} successivement (1 min 30 chacun). Ils décident de l'ordre entre eux. {A} ne sait pas.",     d:"Chaque hésitation > 10 sec → shot pour l'hésitant." },
  { v:3, c:"Main",           t:"{A} doit faire jouir {B} à la main devant tout le groupe. Pas de limite de temps.",                                             d:"{A} s'arrête → deux shots. Succès → {B} boit." },
  { v:3, c:"Yeux bandés",    t:"{A} a les yeux bandés. {B} l'embrasse pendant 2 minutes en changeant de technique toutes les 30 sec. {A} décrit à voix haute ce qu'il ressent.", d:"S'il se tait plus de 10 sec → shot." },
  { v:3, c:"Gorge profonde", t:"Tournoi gorge profonde : tout le monde essaie sur le joueur de son choix. Vote du groupe. Le moins bon boit deux verres.",      d:"Dernier au classement → deux verres." },
  { v:3, c:"Prise",          t:"{B} et {C} prennent {A} en même temps (l'un devant, l'autre derrière). Ils tiennent 2 minutes sans s'arrêter.",                d:"Qui s'arrête avant → verre entier." },

  // ══════════════════════════════════════════
  //  NIVEAU 4 — Extrême
  // ══════════════════════════════════════════

  { v:4, c:"Extrême", t:"{A} est à la disposition du groupe pendant 5 minutes. Il pose 2 limites max avant de commencer. Le reste est au choix des autres.",    d:"S'il utilise une limite → verre entier." },
  { v:4, c:"Extrême", t:"{A} a les yeux bandés et les mains dans le dos. Les 3 autres se relaient comme ils veulent pendant 4 minutes. {A} doit identifier tout le monde.", d:"Tout le monde correctement identifié → les 3 autres boivent double." },
  { v:4, c:"Extrême", t:"Gang bang en jeu : {A} reçoit chacun en rotation (1 min par joueur). L'ordre est tiré au sort, {A} tient le chrono.",                  d:"Qui coupe court → deux verres." },
  { v:4, c:"Extrême", t:"Tous les 4 ensemble pendant 4 minutes. Chaque joueur doit changer de rôle au moins une fois. Vote final : le meilleur.",               d:"Dernier au vote → boit." },
  { v:4, c:"Extrême", t:"{A} impose tout pour le prochain round : partenaires, positions, durée. Les autres exécutent sans discussion.",                        d:"Refus → double verre pour le récalcitrant." },
  { v:4, c:"Extrême", t:"Deux duos simultanés ({A}+{C}) et ({B}+{D}) dans la même pièce pendant 3 minutes. Interdit de s'arrêter pour regarder.",              d:"Qui s'arrête pour regarder → shot immédiat." },
  { v:4, c:"Extrême", t:"{A} se fait prendre par {B} pendant que {C} suce {A}. {D} dirige et change les positions toutes les 30 sec.",                         d:"Désobéissance à {D} → shot immédiat." },
  { v:4, c:"Extrême", t:"Vote confiance : qui fait le plus confiance aux autres ? Le gagnant a les yeux bandés 3 minutes avec les 3 autres autour.",            d:"Le gagnant refuse → tout le monde boit sauf lui." },
  { v:4, c:"Extrême", t:"{A} choisit le scénario de son fantasme le plus poussé. Le groupe essaie de le réaliser en 5 minutes.",                               d:"Groupe refuse → chacun boit. {A} change d'avis → {A} boit." },
  { v:4, c:"Extrême", t:"Tout le monde a les yeux bandés. 2 minutes de libre. On fait ce qu'on trouve. Interdit de parler pendant toute la durée.",            d:"Qui parle → shot." },

];
