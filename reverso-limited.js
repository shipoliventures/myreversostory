/* ============================================================
   MY REVERSO STORY — LIMITED EDITIONS REGISTRY
   ------------------------------------------------------------
   A general, extensible list of every limited, special and
   market edition we can document — whether or not the case-back
   was personalised. Drives reverso-limited.html.

   This is deliberately NOT restricted to Grande Taille. Add new
   families by giving entries a new `family` value; the page
   builds its filter buttons from the data.

   back:  'engraved'  case-back carries a crest / engraving / enamel
                      (these ALSO appear on the Archive page)
          'dial'      special dial and/or hands, standard back
          '—'         unknown / not established

   FIELD NOTE — references, years and piece counts are compiled
   from a range of open sources and are not all verified. In many
   cases `back` is a judgement call rather than a documented fact.
   Corrections are welcome.
   ============================================================ */

window.RLIMITED = (function () {

const EDITIONS = [

/* ---------- the six 500-piece anniversary complications ---------- */

/* ---------- Hybris Artistica ---------- */
{ slot:'le-hybris-179-pink', year:'2023', name:'Reverso Hybris Artistica Calibre 179',
  ref:'Q39424E3', run:'10 pieces', cat:'artistica', family:'Hybris Artistica', cal:'Cal. 179 — flying Gyrotourbillon',
  material:'Pink gold', market:'International', back:'engraved',
  note:'The fastest Gyrotourbillon the manufacture has built — the inner cage turns once every 16 seconds, the outer frame once a minute, 123 components floating on a ring of ball bearings between the two dials. Duoface on the reverse, showing a second time zone and 24-hour indicator. The front dial\u2019s Art Deco lattice in gold, black and grey lacquer echoes the original 1931 case; the reverse is fully skeletonised and hand-bevelled, roughly 14 hours of finishing on the tourbillon cage alone.' },

{ slot:'le-hybris-179-white', year:'2025', name:'Reverso Hybris Artistica Calibre 179',
  ref:'Q39434E1', run:'Limited', cat:'artistica', family:'Hybris Artistica', cal:'Cal. 179 — flying Gyrotourbillon',
  material:'White gold', market:'International', back:'engraved',
  note:'The Calibre 179 Gyrotourbillon — 123 components, a full rotation every 16 seconds — reissued in white gold for 2025, with the same Duoface second time zone on the reverse.' },

{ slot:'le-hybris-179-pegasus', year:'2026', name:'Reverso Hybris Artistica Calibre 179 “Pegasus”',
  ref:'Q39424E5', run:'5 pieces', cat:'artistica', family:'Hybris Artistica', cal:'Cal. 179 — flying Gyrotourbillon',
  material:'Pink gold', market:'International', back:'engraved',
  note:'A master engraver spends 180 hours wrapping a sculptural Pegasus relief around the case, hiding the join between its sections. The front dial echoes the cloud motif in pink gold and hand-filled blue lacquer, framing the open-worked Calibre 179 Gyrotourbillon.' },

{ slot:'le-gt-tourbillon-squelette', year:'2013', name:'Hybris Artistica 8 — Grande Reverso Tourbillon Squelette',
  ref:'—', run:'Very limited', cat:'artistica', family:'Hybris Artistica', cal:'Skeletonised tourbillon',
  material:'—', market:'International', back:'—',
  note:'The reversible half of the case turned transparent rather than removed: both faces are sapphire crystal tiles, so the fully skeletonised, hand-decorated tourbillon movement is visible from either side as the case swivels — the tourbillon beating at six, the mainspring uncoiling in its barrel at twelve. The movement sits in a metal frame that appears to float inside the case. Since the Reverso\u2019s outline isn\u2019t round, water resistance on a sapphire-tile case of this kind is a genuine engineering problem rather than a routine spec.' },

{ slot:'le-cordonnet-neva', year:'2014', name:'Hybris Artistica 9 — Reverso Cordonnet Neva',
  ref:'22233x1', run:'Very limited', cat:'artistica', family:'Hybris Artistica', cal:'—',
  material:'Gold, snow-set diamonds', market:'International', back:'—',
  note:'A 1930s cord-strap Reverso reinterpreted almost entirely in diamonds: hundreds of stones of varying diameter, snow-set across the dial, case, lugs and even the cord itself, pressed edge to edge with no visible claws so the surface reads as continuously smooth. Each stone is set individually and held in place only by tension against its neighbours — the setter works from personal judgement rather than a fixed plan, so the final pattern isn\u2019t known until the last stone goes in. On the gold case the effect is meant to suggest the Neva river rippling beneath winter ice.' },


/* ---------- Métiers Rares ---------- */
{ slot:'le-enamel-hokusai', year:'2018 – 2026', name:'Reverso Tribute Enamel — Hokusai “Waterfalls”',
  ref:'Q39334T3–T9', run:'10 pieces per reference · 9 references', link:'reverso-series.html?s=hokusai', cat:'metiersrares', series:'enamel',
  family:'Métiers Rares', cal:'Cal. 822', material:'White gold', market:'International', back:'engraved',
  note:'An eight-year cycle reproducing every waterfall Hokusai printed, plus <em>The Great Wave</em>. Around fourteen layers of fired enamel per case-back, roughly 100 hours apiece. Full set catalogued on the Archive.' },

{ slot:'le-enamel-hidden', year:'2021', name:'Reverso Tribute Enamel — “Hidden Treasures”',
  ref:'—', run:'10 pieces per reference · 3 references', link:'reverso-series.html?s=hidden-treasures', cat:'metiersrares', series:'enamel',
  family:'Métiers Rares', cal:'Cal. 822', material:'White gold', market:'International', back:'engraved',
  note:'Klimt, Van Gogh and Courbet — three paintings that were each lost and found again. Made for the Reverso\u2019s 90th anniversary.' },

{ slot:'le-enamel-monet', year:'2024', name:'Reverso Tribute Enamel — Monet “Venice Series”',
  ref:'Q39334M4–M6', run:'10 pieces per reference · 3 references', link:'reverso-series.html?s=monet-venice', cat:'metiersrares', series:'enamel',
  family:'Métiers Rares', cal:'Cal. 822', material:'White gold', market:'International', back:'engraved',
  note:'Three Monet views of Venice, made for the Homo Faber biennial — canvases over 65 × 92 cm reduced to a case-back.' },

{ slot:'le-enamel-turner', year:'2025', name:'Reverso Tribute Enamel — “Turner Series”',
  ref:'Q39334W1–W4', run:'10 pieces per reference · 4 references', link:'reverso-series.html?s=turner-venice', cat:'metiersrares', series:'enamel',
  family:'Métiers Rares', cal:'Cal. 822', material:'White gold', market:'International', back:'engraved',
  note:'Venice again, fifty years earlier and through English eyes. All four use paillonnage — silver foil laid beneath the enamel — to give the water its glint.' },

{ slot:'le-enamel-shahnameh', year:'2025', name:'Reverso Tribute Enamel — “Shahnameh”',
  ref:'Q39334S1–S4', run:'10 pieces per reference · 4 references', link:'reverso-series.html?s=shahnameh', cat:'metiersrares', series:'enamel',
  family:'Métiers Rares', cal:'Cal. 822', material:'Gold', market:'International', back:'engraved',
  note:'Scenes from the 10th-century Persian Book of Kings — a miniature art form rendered in another miniature art form.' },

{ slot:'le-enamel-mucha', year:'2018', name:'Reverso Tribute Enamel — Alfons Mucha',
  ref:'Q39334M1 / Q39314M2 / Q39314M3', run:'8 pieces per reference · 3 references', link:'reverso-series.html?s=alfons-mucha', cat:'metiersrares', family:'M\u00e9tiers Rares',
  cal:'Cal. 822A/2', material:'White gold (Summer) \u00b7 yellow gold (Spring, Autumn)', market:'International', back:'engraved',
  note:'Summer, Spring, and Autumn from Mucha\u2019s "The Seasons" (1896) \u2014 Winter is the one panel left out, following a full four-piece set JLC made of the same theme back in 1996. Full set catalogued on its own page.' },

{ slot:'le-enamel-mucha-precious-stones', year:'1999\u20132000', name:'Reverso Montre de Poche “Pierres Précieuses” — Alfons Mucha',
  ref:'\u2014', run:'Production quantities not documented', link:'reverso-series.html?s=mucha-precious-stones', cat:'metiersrares', family:'M\u00e9tiers Rares',
  cal:'Cal. 822 / 823', material:'18k white or yellow gold, gem-set', market:'International', back:'enamelled',
  note:'Not a wristwatch \u2014 a full pocket watch, jewelled cradle and all. Topaz, Amethyst, Ruby, Emerald: Mucha\u2019s four Precious Stones panels, all four made in enamel. Full set catalogued on its own page.' },

{ slot:'le-eclipse-nudes', year:'2006\u2013', name:'Reverso à Éclipses — Famous Nudes',
  ref:'\u2014', run:'Platinum (3\u201310 pieces) or pink gold (5 pieces) per subject', link:'reverso-series.html?s=reverso-a-eclipse', cat:'eclipses', family:'M\u00e9tiers Rares',
  cal:'Cal. 849', material:'Platinum or pink gold', market:'International', back:'various',
  note:'Ingres, Klimt, Renoir, Botticelli and more, each reproduced in enamel behind a sliding shutter on the dial rather than the case-back \u2014 the largest theme within the \u00c9clipses range. Full set catalogued on its own page.' },

{ slot:'le-eclipse-travel', year:'2006\u2013', name:'Reverso à Éclipses — Voyages et Découvertes',
  ref:'\u2014', run:'Platinum (3 pieces) or pink gold (5 pieces) per subject', link:'reverso-series.html?s=reverso-a-eclipse', cat:'eclipses', family:'M\u00e9tiers Rares',
  cal:'Cal. 849', material:'Platinum or pink gold', market:'International', back:'various',
  note:'Named cities and landmarks \u2014 New York, Singapore, Constantinople, the Great Wall, the Silk Road, La Rochelle \u2014 hidden behind the same \u00c9clipses shutter mechanism. Full set catalogued on its own page.' },

{ slot:'le-eclipse-grandfeu', year:'2006\u2013', name:'Reverso à Éclipses — Grand Feu',
  ref:'\u2014', run:'Varies by piece', link:'reverso-series.html?s=reverso-a-eclipse', cat:'eclipses', family:'M\u00e9tiers Rares',
  cal:'Cal. 849', material:'Pink or rose gold', market:'International', back:'various',
  note:'Named-artist single subjects and one-off commissions \u2014 Malevich, Van Gogh, a Mughal miniature theme, and Zep\u2019s unique Titeuf piece \u2014 plus the Chinese Zodiac design. Full set catalogued on its own page.' },

{ slot:'le-enamel-mucha-etoile-clairdelune', year:'1996', name:'Reverso “Étoile du Matin et Clair de Lune” — Alfons Mucha',
  ref:'276 14 01 (M) / 276 14 02 (M)', run:'25 sets of 2', link:'reverso-series.html?s=mucha-etoile-clairdelune', cat:'metiersrares', family:'M\u00e9tiers Rares',
  cal:'Cal. 822', material:'18k yellow gold', market:'International', back:'engraved',
  note:'Enamelled on both dial and case-back \u2014 by the enameller Miklos Merczel\u2019s own account, this may be where his entire Reverso enamel practice began. Full set catalogued on its own page.' },

{ slot:'le-enamel-mucha-aurore-crepuscule', year:'1999', name:'Reverso “Aurore et Crépuscule” — Alfons Mucha, 1999',
  ref:'276.1.62', run:'25 sets of 2 (50 watches)', link:'reverso-series.html?s=mucha-aurore-crepuscule', cat:'metiersrares', family:'M\u00e9tiers Rares',
  cal:'Cal. 822', material:'18k yellow gold', market:'International', back:'engraved',
  note:'Dawn and dusk, from Mucha\u2019s 1899 panels of the same name, sold together rather than separately. Full set catalogued on its own page.' },

{ slot:'le-enamel-mucha96', year:'1996', name:'Reverso “Four Seasons” — Alfons Mucha, 1996',
  ref:'276.1.62', run:'25 sets of 4 (100 watches)', link:'reverso-series.html?s=mucha-four-seasons-1996', cat:'metiersrares', family:'M\u00e9tiers Rares',
  cal:'Cal. 822', material:'18k yellow gold', market:'International', back:'engraved',
  note:'Jaeger-LeCoultre\u2019s first enamelled Reverso, and the only Reversos ever built with a genuinely enamelled dial. Full set catalogued on its own page.' },

{ slot:'le-enamel-friedrich', year:'2002', name:'Reverso “\u00c9mail Friedrich” — Caspar David Friedrich',
  ref:'246.1.15', run:'5 pieces per painting (10 watches)', link:'reverso-series.html?s=caspar-david-friedrich', cat:'metiersrares', family:'M\u00e9tiers Rares',
  cal:'Cal. 875 \u00b7 8-day reserve', material:'18k yellow gold', market:'International', back:'engraved',
  note:'Two Romantic seascapes on an 8-day grande complication base \u2014 the first Reverso enamel set built on an opaline-over-guilloch\u00e9 finish. Full set catalogued on its own page.' },

{ slot:'le-enamel-hodler', year:'2018', name:'Reverso Tribute Enamel — Ferdinand Hodler',
  ref:'Q39334H1 / H2 / H3', run:'8 pieces per reference \u00b7 3 references', link:'reverso-series.html?s=hodler-tribute', cat:'metiersrares', family:'M\u00e9tiers Rares',
  cal:'Cal. 822', material:'White gold', market:'International', back:'engraved and enamelled',
  note:'Three Swiss lake landscapes marking the centenary of the painter\u2019s death, each dial hand-guilloch\u00e9d and engraved before enamelling. Full set catalogued on its own page.' },

{ slot:'le-enamel-famousartists', year:'2018', name:'Reverso Tribute Enamel — Famous Artists',
  ref:'Q39334P1 / C1 / T1', run:'8 pieces per reference · 3 references', link:'reverso-series.html?s=famous-artists', cat:'metiersrares', family:'M\u00e9tiers Rares',
  cal:'Cal. 822', material:'White gold', market:'International', back:'engraved',
  note:'The original trio: Seurat\u2019s pointillism, Xu Beihong\u2019s ink wash, Hokusai\u2019s woodblock printing, each attempted in enamel miniature for the first time. Full set catalogued on its own page.' },

{ slot:'le-enamel-xubeihong', year:'2025', name:'Reverso Tribute Enamel — “Xu Beihong”',
  ref:'Q39334B1–B3', run:'10 pieces per reference · 3 references', link:'reverso-series.html?s=xu-beihong', cat:'metiersrares', series:'enamel',
  family:'Métiers Rares', cal:'Cal. 822', material:'White gold', market:'International', back:'engraved',
  note:'Three ink horses by Xu Beihong, each shrunk from over a square metre of paper to a case-back roughly 80 hours in the making.' },

{ slot:'le-enamel-zodiac', year:'2022\u2013', name:'Reverso Tribute Enamel \u2014 Chinese Zodiac',
  ref:'Q39324K1 / D1 / D2 / D3', run:'Made-to-order (Tiger, Dragon, Snake) \u00b7 10 pieces (Horse)', link:'reverso-series.html?s=chinese-zodiac', cat:'metiersrares', family:'M\u00e9tiers Rares',
  cal:'Cal. 822 / 822A/2', material:'18k pink gold', market:'Boutique only', back:'engraved',
  note:'One Lunar New Year animal at a time \u2014 Tiger, Dragon, Snake, Horse so far \u2014 each modelled-engraved into a caseback that was enamelled black first. Full set catalogued on its own page.' },

/* ---------- Reverso Joaillerie ---------- */
{ slot:'le-joaillerie-101', year:'c.1990', name:'Reverso Joaillerie, Calibre 101',
  ref:'280.3.70', run:'Very limited', cat:'joaillerie', family:'Reverso Joaillerie', cal:'Cal. 101',
  material:'White gold, fully diamond-set (236 diamonds)', market:'International', back:'—',
  note:'The case entirely set with diamonds, running the smallest mechanical movement ever series-produced (14 x 4.8 x 3.4 mm, introduced 1929), with the winding crown moved to the back because there is nowhere else for it to go. 11 x 27.5 mm; retailed for roughly US$87,500 when new.' },

{ slot:'le-grande-reverso-101', year:'c.2005', name:'Grande Reverso 101, diamonds and platinum',
  ref:'3006430', run:'Very limited', cat:'joaillerie', family:'Reverso Joaillerie', cal:'Cal. 101',
  material:'Platinum, diamond-set skeleton', market:'International', back:'sapphire',
  note:'A larger platinum sibling to the white gold Reverso Joaillerie Calibre 101 above \u2014 29 x 46 mm rather than 11 x 27.5 mm \u2014 with a fully skeletonised, diamond-set dial visible through a sapphire back, showing off the tiny calibre 101 movement rather than hiding it.' },

{ slot:'le-night-and-day-joaillerie', year:'c.2000', name:'Reverso Joaillerie “Night and Day”',
  ref:'280.2.70', run:'Very limited', cat:'joaillerie', family:'Reverso Joaillerie', cal:'Cal. 1005',
  material:'Yellow gold, diamond-set', market:'International', back:'—',
  note:'An integrated-bracelet Joaillerie Reverso with twisting diamond \u201cevening\u201d links, running the miniature manual calibre 1005 \u2014 by one auction house\u2019s own account, among the smallest Reversos ever made. 11 x 27 mm.' },

{ slot:'le-reverso-ring', year:'1998', name:'The Reverso Ring Watch',
  ref:'280.3.70', run:'Unique piece', cat:'joaillerie', family:'Reverso Joaillerie', cal:'Keyless lever',
  material:'Gold, diamond and emerald-set', market:'International', back:'—',
  note:'The Reverso concept as a ring rather than a wristwatch \u2014 catalogued in full as a Pi\u00e8ce Unique elsewhere in this archive, since it isn\u2019t part of any numbered edition.' },


{ slot:'le-cordonnet-jewellery', year:'2021', name:'Reverso One Cordonnet Jewellery',
  ref:'—', run:'Limited', link:'reverso-series.html?s=cordonnet-jewellery', cat:'joaillerie', family:'Reverso Joaillerie', cal:'Cal. 844',
  material:'Gold, pavé diamonds', market:'International', back:'—',
  note:'The 1930s silk cord reimagined in gold and pavé diamonds, on a Duetto case — mother-of-pearl on the day dial, onyx on the night.' },

{ slot:'le-precious-flowers', year:'2021 – 2024', name:'Reverso One “Precious Flowers”',
  ref:'Q3292422 and others', run:'10 pieces per reference', link:'reverso-series.html?s=precious-flowers', cat:'joaillerie', family:'Reverso Joaillerie',
  cal:'Reverso One', material:'White or pink gold', market:'International', back:'engraved',
  note:'Floral case-backs combining three rare crafts at once — enamelling, hand engraving and gem-setting — rather than showcasing one.' },

{ slot:'le-precious-colours', year:'2025', name:'Reverso One “Precious Colours”',
  ref:'—', run:'Limited', link:'reverso-series.html?s=precious-colours', cat:'joaillerie', family:'Reverso Joaillerie', cal:'Reverso One',
  material:'Gold, gem-set', market:'International', back:'engraved',
  note:'The colour-led companion to Precious Flowers, organised around stone and hue rather than botanical subject.' },

{ slot:'le-vallee-merveilles', year:'2026', name:'Reverso One “La Vallée des Merveilles”',
  ref:'—', run:'20 pieces per reference', link:'reverso-series.html?s=vallee-merveilles', cat:'joaillerie', family:'Reverso Joaillerie', cal:'Cal. 846',
  material:'Pink or white gold, mother-of-pearl', market:'International', back:'engraved',
  note:'The opening capsule of a nature series — hummingbirds over hibiscus, combining enamel, paillonnage, gem-setting and lacquer.' },

{ slot:'le-secret-necklace', year:'2023', name:'Reverso Secret Necklace',
  ref:'—', run:'Unique / very limited', link:'reverso-series.html?s=secret-necklace', cat:'joaillerie', family:'Reverso Joaillerie', cal:'—',
  material:'Gold, gem-set', market:'International', back:'—',
  note:'The Reverso taken off the wrist entirely — the swivelling case as a secret pendant that turns to conceal the dial. There\u2019s real precedent for this: a yellow gold and diamond pendant version, ref. 465.1.86, circa 2000, on a black cord with an 18k gold clasp and manual calibre 844, has surfaced at auction — a genuine ancestor to the 2023 piece rather than just a similar idea.' },

/* ---------- Commemorative: MR PORTER cities ---------- */
{ slot:'le-mrporter-cities', year:'2021 & 2023', name:'JLC \u00d7 MR PORTER City Editions',
  ref:'Q385852 + city letter', run:'8 cities across two waves', link:'reverso-series.html?s=mrporter-cities',
  cat:'market', family:'Commemorative', cal:'Cal. 822/2',
  material:'Stainless steel', market:'MR PORTER exclusive', back:'engraved',
  note:'Reverso Classic Monoface Small Seconds, each hand-engraved with a landmark of its city and delivered on a Casa Fagliano strap. New York led the first wave in 2021 (London, Paris, Milan, Hong Kong); Los Angeles, Singapore and Sydney followed in 2023. Full set catalogued on its own page.' },

{ slot:'le-60eme', year:'1991', name:'Reverso Grande Taille 60th Anniversary (60ème)',
  ref:'270.2.64', run:'500 pieces', cat:'first', family:'Grande Taille — 500 series', cal:'Cal. 824',
  material:'Pink gold', market:'International', back:'—',
  note:'The watch that created the Grande Taille case. Power reserve and date, and the first Reverso ever given a transparent case-back so the movement could be seen.' },

{ slot:'le-gt-tourbillon', year:'1993', name:'Reverso Grande Taille Tourbillon',
  ref:'270.2.68', run:'500 pieces', cat:'first', family:'Grande Taille — 500 series', cal:'Cal. 828',
  material:'Pink gold', market:'International', back:'—',
  note:'Jaeger-LeCoultre\u2019s first modern tourbillon, and it went straight into the rectangle.' },

{ slot:'le-gt-repeater', year:'1994', name:'Reverso Grande Taille Minute Repeater',
  ref:'270.2.73', run:'500 pieces', cat:'first', family:'Grande Taille — 500 series', cal:'Cal. 943',
  material:'Pink gold', market:'International', back:'—',
  note:'The world\u2019s first rectangular minute-repeater movement.' },

{ slot:'le-gt-chrono', year:'1996', name:'Reverso Grande Taille Retrograde Chronograph',
  ref:'270.2.69', run:'500 pieces', cat:'first', family:'Grande Taille — 500 series', cal:'Cal. 829',
  material:'Pink gold', market:'International', back:'—',
  note:'A chronograph split across two dials with a retrograde hand \u2014 the sensible answer to a rectangular face.' },

{ slot:'le-gt-geographic', year:'1998', name:'Reverso Grande Taille Geographic',
  ref:'270.2.58', run:'500 pieces', cat:'first', family:'Grande Taille — 500 series', cal:'Cal. 858',
  material:'Pink gold', market:'International', back:'—',
  note:'World time with a city selector on the back; not revisited until the 2025 Tribute Geographic.' },

{ slot:'le-gt-perpetual', year:'2000', name:'Reverso Grande Taille Perpetual Calendar',
  ref:'270.2.55', run:'500 pieces', cat:'first', family:'Grande Taille — 500 series', cal:'Cal. 855',
  material:'Pink gold', market:'International', back:'—',
  note:'The sixth and final watch of the anniversary series, released for the millennium.' },

/* ---------- Grande Taille platinum limited ---------- */
{ slot:'le-platinum-one', year:'2002', name:'Reverso Grande Taille Platinum Number One',
  ref:'270.6.49', run:'500 pieces', cat:'gtspecial', series:'platinum', family:'Grande Taille — platinum', cal:'Tourbillon',
  material:'Platinum', market:'International', back:'—',
  note:'Dated here to 2002 at 500 pieces; some sources give 2001. Worth resolving.' },

{ slot:'le-platinum-two', year:'2004', name:'Reverso Grande Taille Platinum Number Two',
  ref:'270.6.48', run:'500 pieces', cat:'gtspecial', series:'platinum', family:'Grande Taille — platinum', cal:'Tourbillon',
  material:'Platinum', market:'International', back:'—',
  note:'Dated here to 2004; some sources give 2003.' },

{ slot:'le-platinum-squelette', year:'2005', name:'Reverso Grande Taille Platinum Squelette',
  ref:'270.6.48', run:'35 pieces', cat:'gtspecial', series:'platinum', family:'Grande Taille — platinum', cal:'Skeletonised',
  material:'Platinum', market:'International', back:'—',
  note:'Thirty-five pieces \u2014 one of the smallest Grande Taille runs of all, sharing its reference with Number Two.' },

{ slot:'le-gt-sunmoon-pt', year:'1999', name:'Reverso Grande Taille Sun Moon, platinum',
  ref:'270.6.63', run:'125 pieces', cat:'gtspecial', series:'platinum', family:'Grande Taille — platinum', cal:'Cal. 823',
  material:'Platinum', market:'International', back:'—',
  note:'Power reserve, moon phase and night-and-day. The platinum version was capped at 125; pink and white gold were standard production.' },

/* ---------- Grande Taille market & retailer editions (special dials) ---------- */
{ slot:'le-seibu', year:'—', name:'Reverso Grande Taille “Seibu”',
  ref:'270.8.62', run:'Unknown', cat:'market', family:'Grande Taille — market editions', cal:'Cal. 822',
  material:'Stainless steel', market:'Japan', back:'dial',
  note:'For the Japanese department store Seibu. The edition size has never been established.' },

{ slot:'le-anshindo', year:'—', name:'Reverso Grande Taille “Anshindo”',
  ref:'270.8.62', run:'50 pieces', cat:'market', family:'Grande Taille — market editions', cal:'Cal. 822',
  material:'Stainless steel', market:'Japan', back:'dial',
  note:'For the Japanese retailer Anshindo.' },

{ slot:'le-japan', year:'—', name:'Reverso Grande Taille “Japan”',
  ref:'270.8.62', run:'150 pieces', cat:'market', family:'Grande Taille — market editions', cal:'Cal. 822',
  material:'Stainless steel', market:'Japan', back:'dial',
  note:'A market edition for Japan \u2014 evidence of how important that market was to the Reverso in this period.' },

{ slot:'le-premiere', year:'—', name:'Grande Taille Duoface “Première”',
  ref:'270.1.54 / 270.8.54', run:'39 pieces (gold) · 300 pieces (steel), ×3 colours', link:'reverso-series.html?s=gt-duoface-premiere',
  cat:'market', family:'Grande Taille — market editions', cal:'Cal. 854',
  material:'Yellow gold or stainless steel', market:'Japan', back:'dial',
  note:'Three dial colours — green, red and blue — for the Japanese market, each issued in both yellow gold (39 pieces) and steel (300 pieces): six watches in total. Full set catalogued on its own page.' },

{ slot:'le-hayashi', year:'—', name:'Reverso Grande Taille Duoface “Hayashi”',
  ref:'272.8.54', run:'30 pieces', cat:'market', family:'Grande Taille — market editions', cal:'Cal. 854',
  material:'Stainless steel', market:'Japan', back:'dial',
  note:'For the Japanese retailer Hayashi, on the second-generation Duoface case \u2014 thirty pieces.' },

/* ---------- national anniversary & country editions ---------- */
{ slot:'ed-helvetia', year:'1997', name:'Reverso “Helvetia”',
  ref:'250.340.867 H', run:'150 pieces', cat:'market', family:'National anniversary editions', cal:'Cal. 846',
  material:'18k white gold', market:'Switzerland', back:'engraved',
  note:'For the 150th anniversary of the Swiss Confederation. Per Jaeger-LeCoultre\u2019s own certificate, dated Le Sentier, 3 March 1997: black dial, painted silver Roman numerals, dauphine hands, and a case-back \u201cdecorated with a special engraving, which commemorates the 150 years of the Swiss Confederation\u201d \u2014 the Swiss flag.' },

{ slot:'ed-geneva-fountain', year:'1995', name:'Reverso “Geneva Fountain”',
  ref:'257.342.626 / 270.3.62', run:'50 pieces — 30 yellow gold, 20 white gold', cat:'market', family:'National anniversary editions', cal:'—',
  material:'Yellow or white gold', market:'Switzerland', back:'engraved',
  note:'Small seconds and guilloch\u00e9 dial on the front; the reverse is engraved with Geneva\u2019s skyline \u2014 the Jet d\u2019Eau and St. Pierre Cathedral \u2014 set with 40 diamonds.' },

{ slot:'ed-italica', year:'2011', name:'Grande Reverso Ultra Thin “Italica”',
  ref:'277.8.62 (steel) / 277.1.62 (rose gold)', run:'150 pieces per metal', cat:'market', family:'National anniversary editions', cal:'Cal. 822',
  material:'Stainless steel or rose gold', market:'Italy', back:'solid',
  note:'For the 150th anniversary of Italian unification, close to the Reverso\u2019s own 80th: the numeral \u20188\u2019 replaced by a red \u2018R\u2019, the Roman numeral for 80. Sources disagree on the exact steel/gold split \u2014 150/150 in one account, 150/50 in another.' },

{ slot:'ed-rio', year:'—', name:'Grande Reverso Night & Day “Rio de Janeiro”',
  ref:'Q380848M', run:'85 pieces', cat:'market', family:'National anniversary editions', cal:'Cal. 967B',
  material:'Stainless steel', market:'Brazil', back:'engraved',
  note:'A double anniversary: 85 pieces for the 85th anniversary of both Christ the Redeemer and the Reverso itself. Blue dial, day/night indicator, statue engraved on the back.' },

{ slot:'ed-singapore-sg50', year:'2015', name:'Grande Reverso Night & Day “Singapore SG50”',
  ref:'Q3808420', run:'50 pieces', cat:'market', family:'National anniversary editions', cal:'Cal. 967B',
  material:'Stainless steel', market:'Singapore', back:'engraved',
  note:'For 50 years of Singapore\u2019s independence: a map of Singapore in red and white lacquer on the back, unnumbered, sold only at two Singapore boutiques.' },

{ slot:'ed-rama-ix', year:'—', name:'Reverso 1931 “King Rama IX of Thailand”',
  ref:'Q380841G', run:'39 pieces', cat:'market', family:'National anniversary editions', cal:'Cal. 967B',
  material:'—', market:'Thailand', back:'engraved',
  note:'Thirty-nine pieces for the ninth king of the Chakri dynasty; a deep yellow "dawn" dial and Wat Arun (Temple of Dawn) engraved on the back.' },

{ slot:'ed-kuwait-25th', year:'2016', name:'Grande Reverso 976 “25th Anniversary of Kuwait”',
  ref:'278.2.56', run:'25 pieces', cat:'market', family:'National anniversary editions', cal:'Cal. 967B',
  material:'Rose gold', market:'Kuwait', back:'—',
  note:'Marking the 1991 liberation of Kuwait: green dial, scarlet numerals at 2 and 5 o\u2019clock spelling \u201825\u2019. Paired with a steel 55th-anniversary sibling the same year.' },

{ slot:'ed-kuwait-55th', year:'2016', name:'Grande Reverso 976 “55th Anniversary of Kuwait”',
  ref:'278.8.56', run:'55 pieces', cat:'market', family:'National anniversary editions', cal:'Cal. 967B',
  material:'Stainless steel', market:'Kuwait', back:'—',
  note:'Marking 55 years since Kuwait\u2019s independence from British protection: same green dial and flag palette, a single scarlet \u201855\u2019 replacing the \u20185\u2019.' },

{ slot:'ed-wakaya', year:'2016', name:'Grande Reverso 1931 Seconde Centrale “Wakaya”',
  ref:'278.3.66 (Q381357J)', run:'Personal commission, presented rather than retailed', cat:'market', family:'Personal commission', cal:'Cal. 966A',
  material:'18k white gold', market:'Fiji', back:'engraved and enamelled',
  note:'Engraved and enamelled with the logo of The Wakaya Club & Spa, Fiji, and the initials of its owner, David H. Gilmour, who also founded Fiji Water. Presented to Gilmour personally rather than sold at retail.' },

{ slot:'le-atelier-stone', year:'2017', name:'Atelier Reverso — Natural Stone Dials',
  ref:'\u2014', run:'Made to order (bespoke)', cat:'gtspecial', family:'Atelier Reverso',
  cal:'Cal. 822/2', material:'Stainless steel', market:'Boutique / app', back:'dial',
  note:'Not a numbered edition but an ongoing customisation programme, launched 2016 for the Reverso Classic Large Duo Small Second, with a claimed 5,277 possible front/back/strap combinations \u2014 most originally aimed at women\u2019s Reversos, some styled by Christian Louboutin. This 2017 update added men\u2019s reverse-dial options in green marble and tiger\u2019s eye, plus a bright blue galvanic-coated dial, ordered via boutique or a dedicated iPhone app.' },

{ slot:'le-diamond-sapphire-mop', year:'2004', name:'Reverso, diamond and sapphire-set, mother-of-pearl dial',
  ref:'\u2014', run:'Unknown', cat:'joaillerie', family:'Reverso Joaillerie',
  cal:'\u2014', material:'18k white gold, diamond and sapphire-set', market:'International', back:'\u2014',
  note:'A jewelled Reverso combining a mother-of-pearl dial with power reserve and thermometer indications \u2014 an unusually complicated dial layout for a gem-set piece. Neither a name nor an edition size has surfaced for this specific example; catalogued here on the strength of Sotheby\u2019s own 2008 lot description alone.' },

{ slot:'le-email-guilloche', year:'2013\u20132014', name:'Grande Reverso “Email”, enamel guilloch\u00e9 dial',
  ref:'273.3.62 (white gold) \u00b7 273.2.62 (pink gold)', run:'50 pieces (white gold) \u00b7 200 pieces (pink gold)', cat:'gtspecial', family:'Special Dials & Precious Metals',
  cal:'Cal. 822', material:'White or pink gold', market:'International', back:'solid',
  note:'A blue grand feu enamel dial over hand-guilloch\u00e9, on the Grande Taille case \u2014 white gold limited to 50 pieces, pink gold to 200. Not tied to any particular story or theme, unlike most of the enamel pieces cross-referenced elsewhere in this archive; a straightforward showcase of the guilloch\u00e9-and-enamel technique itself.' },

{ slot:'le-proto-zero', year:'2011\u20132012', name:'“Proto Zero” — Blue Enamel Prototype',
  ref:'273.3.62', run:'Unique prototype', cat:'gtspecial', family:'Special Dials & Precious Metals',
  cal:'\u2014', material:'White gold', market:'Hong Kong', back:'\u2014',
  note:'A genuine factory prototype, case No. 2\u2019786\u2019828, stamped \u201cProto 0\u201d \u2014 the zeroth example built while developing what became the production blue enamel guilloch\u00e9 Grande Reverso \u201cEmail\u201d on this same reference, catalogued separately above. It was sold with real purpose: in November 2011, for the Grand Opening of its 1881 Heritage boutique in Hong Kong, Jaeger-LeCoultre launched a \u201cProto Zero\u201d initiative offering prototypes of select limited editions through that boutique, with 10% of each sale earmarked for the End Child Sexual Abuse Foundation (ECSAF), a Hong Kong charity founded in 1998 by actress and child psychologist Ms Siao Fong Fong. For this particular watch, sold through Christie\u2019s, Jaeger-LeCoultre donated the entire proceeds of the sale to ECSAF, and Christie\u2019s donated the full buyer\u2019s premium on top \u2014 none of the standard 10% arrangement applied here; the whole hammer price and premium went to the cause. ECSAF\u2019s work spans counselling, academic research into the causes of child sexual abuse, and education programmes and workshops raising public awareness of child protection.' },

{ slot:'le-tricolor-1935', year:'1935', name:'The Tri-Colour Gold Bracelet Reverso',
  ref:'\u2014', run:'Unique / very rare', cat:'gtspecial', family:'Special Dials & Precious Metals',
  cal:'\u2014', material:'Tri-colour gold (yellow, pink, white)', market:'International', back:'\u2014',
  note:'An unusually early Reverso built with an integrated bracelet rather than a strap, its case and links combining yellow, pink, and white gold \u2014 a tri-colour treatment more commonly associated with later 20th-century jewellery watches than with a design only four years removed from its 1931 patent. Movement No. 61603, case No. 31935, dated by its numbering to 1935 itself.' },

/* ---------- Grande Taille special dials ---------- */
{ slot:'le-double-gold-a', year:'—', name:'GT Duoface “Double Gold A”',
  ref:'270.0.54', run:'250 pieces', cat:'gtspecial', family:'Grande Taille — special dials', cal:'Cal. 854',
  material:'White & pink gold', market:'International', back:'dial',
  note:'Two golds in one case \u2014 white on one face, pink on the other. About as literal a use of the Duoface idea as the maison has attempted.' },
{ slot:'le-double-gold-b', year:'—', name:'GT Duoface “Double Gold B”',
  ref:'270.0.54', run:'100 pieces', cat:'gtspecial', family:'Grande Taille — special dials', cal:'Cal. 854',
  material:'Pink & white gold', market:'International', back:'dial',
  note:'The inverse of Double Gold A, with the metals swapped.' },
{ slot:'le-latitude-1', year:'—', name:'Reverso Grande Taille “Latitude 1”',
  ref:'270.8.62', run:'Unnumbered, unlimited', cat:'gtspecial', family:'Grande Taille — special dials', cal:'Cal. 822',
  material:'Stainless steel', market:'International', back:'dial', note:'The first of two Latitude dial variants.' },
{ slot:'le-latitude-2', year:'—', name:'Reverso Grande Taille “Latitude 2”',
  ref:'270.8.62', run:'Unnumbered, unlimited', cat:'gtspecial', family:'Grande Taille — special dials', cal:'Cal. 822',
  material:'Stainless steel', market:'International', back:'dial', note:'The second Latitude variant, sharing its reference with the first.' },

/* ---------- commemorative (also on the Archive page) ---------- */
{ slot:'ed-magritte-1', year:'2016', name:'Reverso in tribute to René Magritte, Series 1 — “La Trahison des images”',
  ref:'—', run:'20 pieces total — 5 white gold, 15 steel', cat:'commemorative', family:'Commemorative', cal:'Cal. 822',
  material:'White gold and stainless steel', market:'Maison De Greef, Brussels', back:'engraved',
  note:'Five years in the making, and it began as a conversation in a Brussels jeweller\u2019s shop. Charly Herscovici, president of the Magritte Foundation, was a long-standing customer of Maison De Greef — the oldest jeweller in Belgium, run by the same family since 1848 — and one day the talk with Jacques Wittmann turned to a watch Magritte himself would not have disowned. The result marks two anniversaries at once: the Reverso\u2019s 85th in 2016, and the 50th of Magritte\u2019s death in 2017. The case-back carries a lacquered engraving of <em>The Treachery of Images</em> (1929) — the pipe beneath the schoolchild\u2019s handwriting reading \u201cCeci n\u2019est pas une pipe\u201d. Design director Janek Deleskiewicz admitted the flat, absolutely even colour was \u201ca real challenge\u201d. Five pieces in white gold as the Grande Reverso Ultra Thin 1931, fifteen in steel as the Tribute to 1931.' },

{ slot:'ed-magritte-2', year:'2017', name:'Reverso in tribute to René Magritte, Series 2 — “L\u2019Oiseau de Ciel”',
  ref:'Q3828420', run:'33 pieces', cat:'commemorative', family:'Commemorative', cal:'Cal. 822/2',
  material:'Stainless steel', market:'Maison De Greef, Brussels', back:'engraved',
  note:'The second of a planned triptych. A Reverso Classic Large in steel whose reverse carries a miniature of Magritte\u2019s <em>L\u2019Oiseau de Ciel</em> (1966) — the silhouette of a dove filled with clouds, its blue picked up by the numerals on the dial. The edition size is the quiet joke: thirty-three pieces, for 1833, the year the manufacture was founded. A third series was promised within two years.' },

{ slot:'ed-juventus', year:'—', name:'Reverso Grande Taille “Juventus 100th”',
  ref:'270.3.62 (also seen as 275.3.62)', run:'100 pieces', cat:'commemorative', family:'Commemorative', cal:'Cal. 822',
  material:'White gold', market:'Italy', back:'engraved',
  note:'For the centenary of Juventus F.C. Reference discrepancy: sources give both 270.3.62 and 275.3.62.' },
{ slot:'ed-torino', year:'—', name:'Reverso Grande Taille “Torino F.C. 100th”',
  ref:'270.2.62', run:'25 pieces', cat:'commemorative', family:'Commemorative', cal:'Cal. 822',
  material:'Pink gold', market:'Italy', back:'engraved',
  note:'The other Turin club, and far rarer than the Juventus edition \u2014 25 against 100.' },
{ slot:'ed-wempe-rg', year:'—', name:'Reverso Grande Taille “Wempé 125th”, pink gold',
  ref:'270.2.44', run:'25 pieces', cat:'commemorative', family:'Commemorative', cal:'Cal. 822',
  material:'Pink gold', market:'Germany', back:'engraved',
  note:'For the 125th anniversary of the German retailer Wempe.' },
{ slot:'ed-wempe-steel', year:'—', name:'Reverso Grande Taille “Wempé 125th”, steel',
  ref:'270.8.44', run:'100 pieces', cat:'commemorative', family:'Commemorative', cal:'Cal. 822',
  material:'Stainless steel', market:'Germany', back:'engraved',
  note:'The steel companion to the pink-gold Wempe anniversary piece.' },
{ slot:'ed-romanelli', year:'—', name:'Reverso GT “Darren Romanelli — 75th Anniversary”',
  ref:'270.8.62', run:'50 pieces', cat:'commemorative', family:'Commemorative', cal:'Cal. 822',
  material:'Stainless steel', market:'Colette, Paris', back:'engraved',
  note:'A collaboration with designer Darren Romanelli for the Reverso\u2019s 75th anniversary, sold through the Paris concept store Colette.' },
{ slot:'ed-arte-portuguesa', year:'2000\u20132012', name:'Reverso / Arte Portuguesa',
  ref:'Various', run:'20\u201340 pieces per edition \u00b7 5 artists', link:'reverso-series.html?s=arte-portuguesa', cat:'commemorative', family:'Commemorative', cal:'Cal. 822 / 822/2',
  material:'White gold, pink gold, or steel', market:'Portugal', back:'engraved / enamelled',
  note:'Five Portuguese artists over twelve years \u2014 J\u00falio Pomar, Manuel Cargaleiro, Paula Rego, Jos\u00e9 de Guimar\u00e3es, Juli\u00e3o Sarmento \u2014 each given the Reverso case-back as a canvas. Full set catalogued on its own page.' },
{ slot:'ed-mondriaan', year:'2017', name:'Reverso Tribute to Piet Mondriaan (De Stijl / Steltman centenary)',
  ref:'—', run:'25 pieces', cat:'commemorative', family:'Commemorative', cal:'Cal. 822/2',
  material:'Stainless steel', market:'Steltman, The Hague', back:'engraved',
  note:'Hand-painted miniature of Mondriaan\u2019s 1921 Composition on the reverse; the front is an entirely standard Reverso Classic Large Small Second with no mention of the edition.' },

{ slot:'ed-acmilan', year:'2011', name:'Reverso in the colours of AC Milan',
  ref:'—', run:'For club staff and players', cat:'commemorative', family:'Commemorative', cal:'—',
  material:'—', market:'AC Milan', back:'engraved',
  note:'Made by the Métiers Rares craftsmen in the club\u2019s red and black; a separately personalised piece was made for Adriano Galliani.' },

{ slot:'ed-madmen', year:'2012', name:'Grande Reverso Ultra Thin Tribute to “Mad Men”',
  ref:'—', run:'25 pieces', cat:'commemorative', family:'Commemorative', cal:'Cal. 822',
  material:'Stainless steel', market:'North America', back:'engraved',
  note:'Sterling Cooper Draper Pryce logo engraved on the back with the edition number. Shipped in a walnut box with a letter written in character as Roger Sterling.' },

{ slot:'ed-london', year:'2015', name:'Grande Reverso Ultra Thin 1931 “London Edition”',
  ref:'Q278853L', run:'26 pieces', cat:'commemorative', family:'Commemorative', cal:'Cal. 822',
  material:'Stainless steel', market:'Bond Street boutique', back:'engraved',
  note:'For the opening of the Bond Street boutique, sold only there, in person.' },
{ slot:'ed-ny-skyline', year:'—', name:'Grande Reverso Ultra Thin “Tribute to 1931” New York Skyline',
  ref:'—', run:'3 pieces', cat:'commemorative', family:'Commemorative', cal:'Cal. 822',
  material:'Stainless steel', market:'New York', back:'engraved',
  note:'Three pieces. The engraving came from an advertisement JLC ran in The New Yorker announcing a boutique opening.' },

{ slot:'ed-ceniceros', year:'2011', name:'Grande Reverso 976 “Guillermo Ceniceros”',
  ref:'Q373847M / Q373247M', run:'50 pieces steel · 10 pieces rose gold', cat:'commemorative', family:'Commemorative', cal:'Cal. 976',
  material:'Stainless steel or rose gold', market:'Mexico', back:'engraved',
  note:'For the Reverso\u2019s 80th anniversary and the Mexico City boutique opening: Mexican muralist Guillermo Ceniceros engraved \u201cman\u2019s duality\u201d (steel) and \u201cman in motion\u201d (rose gold) onto the case-back.' },

{ slot:'ed-magritte-cinema', year:'2014', name:'Reverso “Les Magritte du Cinéma 2014”',
  ref:'—', run:'Presentation pieces, not retailed', cat:'commemorative', family:'Commemorative', cal:'—',
  material:'—', market:'Belgium', back:'engraved',
  note:'Award presentation piece for Belgium\u2019s Magritte film awards, given to Best Actor Beno\u00eet Poelvoorde and Best Actress Pauline \u00c9tienne; the honorary award went to director Emir Kusturica, who received a matching Atmos clock instead.' },

{ slot:'ed-osesp', year:'2014', name:'Grande Reverso “OSESP 60 Anos”',
  ref:'—', run:'50 watches reported', cat:'commemorative', family:'Commemorative', cal:'—',
  material:'Steel or gold', market:'Brazil', back:'engraved',
  note:'For the 60th anniversary of the S\u00e3o Paulo State Symphony Orchestra; sales funded roughly 70% of the orchestra\u2019s free Sunday concerts, and Jaeger-LeCoultre separately took on the upkeep of the historic public clock at the orchestra\u2019s home, Sala S\u00e3o Paulo.' },

{ slot:'ed-batman-forever', year:'1995', name:'Reverso Grande Taille “Batman Forever”',
  ref:'270.8.62', run:'35 pieces (30 steel, 5 gold) — not for sale', cat:'commemorative', family:'Commemorative', cal:'Cal. 822',
  material:'Stainless steel or 18k yellow gold', market:'United States', back:'lacquered',
  note:'A black bat-symbol with \u201cFOREVER\u201d through it, made alongside the 1995 film and never sold \u2014 distributed for promotion, charity auctions, and cast/crew gifts. Most of the 35 examples have never resurfaced.' },

{ slot:'ed-batman-darkknight', year:'2012', name:'Grande Reverso Ultra Thin Tribute to 1931 “The Dark Knight Rises”',
  ref:'277.8.62', run:'10 pieces — not for sale', cat:'commemorative', family:'Commemorative', cal:'Cal. 822',
  material:'Stainless steel', market:'International', back:'engraved',
  note:'A black Bat-Shield engraved and lacquered on the case-back, visible only when flipped; made for Warner Bros. executives and Christopher Nolan himself. A planned wider release never happened.' },

{ slot:'ed-chemin-verite', year:'2010', name:'Reverso GT Email “Chemin de la Vérité”',
  ref:'\u2014', run:'8 pieces', cat:'metiersrares', family:'M\u00e9tiers Rares', cal:'\u2014',
  material:'Yellow gold', market:'International', back:'enamelled',
  note:'An enamel miniature titled \u201cThe Path of Truth,\u201d limited to eight pieces \u2014 little else about it is documented beyond the subject and edition size.' },

{ slot:'ed-greaterchina', year:'1997', name:'Reverso “Greater China” Special Edition',
  ref:'270.8.62', run:'97 pieces', cat:'market', family:'National anniversary editions', cal:'Cal. 822',
  material:'Stainless steel', market:'Hong Kong / China', back:'engraved and enamelled',
  note:'For the 1997 Hong Kong handover: a tri-colour enamelled map of Greater China on the case-back, with dual English/Chinese certificates.' },

{ slot:'ed-windsor-horseshow', year:'2005', name:'Reverso Grande Automatique, Royal Windsor Horse Show',
  ref:'Q3038120', run:'5 pieces', cat:'commemorative', family:'Commemorative', cal:'Automatic',
  material:'Stainless steel', market:'United Kingdom', back:'\u2014',
  note:'A steel automatic dual-time Reverso with date, made for the Royal Windsor Horse Show \u2014 one of the smallest runs in this archive.' },

{ slot:'ed-65th-anniversary', year:'1996', name:'Reverso “65th Anniversary, 1931–1996”',
  ref:'250.2.86', run:'65 pieces', cat:'gtspecial', family:'Special Dials & Precious Metals', cal:'Cal. 846',
  material:'Pink gold', market:'International', back:'engraved',
  note:'Marking 65 years since the Reverso\u2019s 1931 patent, run-size matched to the anniversary number.' },

{ slot:'ed-orgueil-valais', year:'1996', name:'“Orgueil du Valais” (Pride of Valais)',
  ref:'250386', run:'65 pieces', cat:'commemorative', family:'Commemorative', cal:'Cal. 846',
  material:'White gold', market:'Switzerland', back:'engraved',
  note:'The same 1996 anniversary, engraved instead with the Matterhorn \u2014 the peak most associated with the Valais region and with Switzerland abroad.' },

{ slot:'ed-sincere-boutique', year:'2006', name:'Reverso Grande Réserve, Série Boutique “Sincere”, 1954–2004',
  ref:'240.8.14', run:'50 pieces', cat:'market', family:'National anniversary editions', cal:'8-day power reserve',
  material:'Stainless steel', market:'Singapore', back:'\u2014',
  note:'For Sincere, the Singapore watch retailer\u2019s 50th anniversary, on the 8-day Grande R\u00e9serve platform rather than a simple three-hand base.' },

{ slot:'ed-st-barth', year:'2016', name:'Ultra Thin Grand Reverso “Tribute to St Barth”',
  ref:'277.2.62', run:'15 pieces', cat:'market', family:'National anniversary editions', cal:'Cal. 822',
  material:'Pink gold', market:'Saint Barth\u00e9lemy', back:'\u2014',
  note:'A single-island commemorative in the same spirit as Wakaya and the MR PORTER city editions \u2014 fifteen pieces, one of the smallest boutique-exclusive runs documented.' },

{ slot:'ed-dubai-expo', year:'\u2014', name:'Grande Reverso Ultra Thin Tribute to 1931 “Dubai Expo”',
  ref:'\u2014', run:'Unknown, likely small', cat:'market', family:'National anniversary editions', cal:'Manual-winding',
  material:'Stainless steel', market:'United Arab Emirates', back:'\u2014',
  note:'Made to mark Expo 2020 Dubai \u2014 one of relatively few Reverso editions tied to a World\u2019s Fair.' },

{ slot:'ed-ferrari', year:'2003', name:'Reverso Grande Taille Enamel “Ferrari”',
  ref:'276.1.62', run:'Unknown, likely small', cat:'commemorative', family:'Commemorative', cal:'\u2014',
  material:'Yellow gold', market:'Italy', back:'enamelled',
  note:'The prancing horse enamelled onto the case-back, on the same case reference used elsewhere for the Mucha enamel sets.' },

{ slot:'ed-theo-fennell', year:'2000', name:'Reverso “Theo Fennell”',
  ref:'270162', run:'20 pieces', cat:'gtspecial', family:'Special Dials & Precious Metals', cal:'\u2014',
  material:'Gold', market:'United Kingdom', back:'\u2014',
  note:'A collaboration with the British jeweller, in a run of just twenty pieces.' },

/* ---------- modern anniversary & complication limited ---------- */
{ slot:'le-repeater-2021', year:'2021', name:'Reverso Tribute Minute Repeater',
  ref:'—', run:'10 pieces', cat:'mechanica', family:'Grand complication', cal:'Cal. 944 (revised)',
  material:'18k pink gold', market:'International', back:'—',
  note:'Marking 90 years of the Reverso and 150 years since Jaeger-LeCoultre\u2019s first minute repeater in 1870. Skeletonised front and back, with patented trebuchet hammers and a new generation of gongs. 35 h power reserve.' },

{ slot:'le-repeater-2025', year:'2025', name:'Reverso Tribute Minute Repeater',
  ref:'Q7122480', run:'30 pieces', cat:'mechanica', family:'Grand complication', cal:'Cal. 953',
  material:'Pink gold', market:'International', back:'engraved',
  note:'Calibre 953 brings together seven patented chime inventions — trebuchet hammers, crystal gongs, silent-interval elimination — with a 48-hour reserve, unusually long for a repeater. A teal grand feu enamel dial up front; a fully open-worked, blue-lacquered reverse. Part of the six-watch Nonanti\u00e8me Collector\u2019s Box.' },

{ slot:'le-chrono-pinkgold', year:'2024', name:'Reverso Tribute Chronograph, “full pink gold”',
  ref:'Q389256J', run:'250 pieces', cat:'anniversary', family:'Anniversary', cal:'Cal. 860',
  material:'Solid 18k pink gold — case, dial, bridges, indexes, buckle', market:'International', back:'—',
  note:'The first limited edition in the Tribute Chronograph range. Solid gold dial laser-engraved with Art Deco lines; gold bridges echo the 1996 original. Integrated manual chronograph with retrograde 30-minute counter, 52 h reserve.' },

{ slot:'le-art-deco-pg', year:'1992', name:'Reverso Grande Taille “Art Deco” (pink gold)',
  ref:'270.2.62', run:'Very small series', cat:'gtspecial', family:'Grande Taille — special dials', cal:'Cal. 822, skeletonised',
  material:'Pink gold', market:'International', back:'—',
  note:'A hand-engraved, skeletonised movement shown through a sapphire display back. Made in tiny numbers and easily overlooked beside the anniversary pieces of the same period.' },

{ slot:'le-art-deco-wg', year:'1992', name:'Reverso Grande Taille “Art Deco” (white gold)',
  ref:'270.3.62', run:'Very small series', cat:'gtspecial', family:'Grande Taille — special dials', cal:'Cal. 822, skeletonised',
  material:'White gold', market:'International', back:'—',
  note:'The white gold counterpart, carrying its own reference. Same skeletonised, hand-engraved movement under a sapphire display back.' },


{ slot:'le-septantieme', year:'2001', name:'Reverso Septantième (70ème)',
  ref:'—', run:'500 pieces', cat:'anniversary', family:'Anniversary', cal:'Cal. 879',
  material:'Platinum', market:'International', back:'—',
  note:'Eight-day double barrel and the patented large date that opened the Grande Reverso chapter.' },
{ slot:'le-triptyque', year:'2006', name:'Reverso Grande Complication à Triptyque',
  ref:'—', run:'75 pieces', cat:'mechanica', family:'Grand complication', cal:'Cal. 175',
  material:'Platinum', market:'International', back:'—',
  note:'The 75th-anniversary watch: three dials from one movement, 18 functions, six patents.' },
{ slot:'le-squadra-gmt', year:'2007\u20132010', name:'Reverso Squadra Chronographe GMT',
  ref:'230.2.45 (pink gold) \u00b7 230.8.45 (steel)', run:'30 or 500 pieces in pink gold (sources disagree) \u00b7 100 pieces in steel', cat:'anniversary', family:'Anniversary & Milestone Editions', cal:'Cal. 754',
  material:'Pink gold or stainless steel', market:'International', back:'transparent',
  note:'A large automatic dual-time chronograph on the squarer Squadra case rather than the classic Reverso silhouette, certified under JLC\u2019s own 1000 Hours Control testing programme. 50 x 35 mm, 39 jewels. Two auction houses cite the pink gold reference with very different figures \u2014 Antiquorum records No. 14 of 30 pieces made in 2007, while Christie\u2019s separately records No. 378 of a 500-piece run made in 2008 \u2014 which may mean two distinct production batches under one reference, or a transcription error at one house; we haven\u2019t been able to resolve which. The steel version, ref. 230.8.45, runs to 100 pieces.' },
{ slot:'le-tribute-1931-500', year:'2011', name:'Grande Reverso Ultra Thin “Tribute to 1931”',
  ref:'Q2782521 / 277.2.62', run:'500 pieces', cat:'gtspecial', family:'Grande Taille — special dials & precious metals', cal:'Cal. 822',
  material:'Rose gold', market:'International', back:'solid',
  note:'For the Reverso\u2019s 80th anniversary: a deliberately stripped-back dial without the JLC signature, echoing the earliest 1930s examples. Featured on the cover of a WatchTime special issue, and on Jay-Z\u2019s wrist during his 2012 \u201cSuit & Tie\u201d performance at Carnegie Hall.' },
{ slot:'le-duodate-1500', year:'2009', name:'Grande Reverso 986 Duodate',
  ref:'274.8.85', run:'1,500 pieces', cat:'gtspecial', family:'Grande Taille — special dials & precious metals', cal:'Automatic',
  material:'Stainless steel', market:'International', back:'\u2014',
  note:'A dual time-zone automatic Reverso with date \u2014 a large production run by this archive\u2019s standards, in a family more often seen in far smaller editions.' },
{ slot:'le-duoface-fagliano', year:'2018', name:'Reverso Tribute Duoface, Casa Fagliano',
  ref:'Q396245J', run:'Limited', cat:'gtspecial', family:'Grande Taille — special dials & precious metals', cal:'Cal. 854',
  material:'Pink gold', market:'International', back:'\u2014',
  note:'A day/night Duoface paired with a strap from Casa Fagliano, the Argentine polo bootmaker whose straps also appear on several other Reverso partnership pieces in this archive.' },
{ slot:'le-squadra-hometime', year:'2006\u2013', name:'Reverso Squadra Hometime',
  ref:'Q7002671 / 230.2.77 (pink gold) \u00b7 230.8.77 (steel)', run:'Limited (pink gold) \u00b7 50 pieces (steel)', cat:'anniversary', family:'Anniversary & Milestone Editions', cal:'Automatic',
  material:'Pink gold or stainless steel', market:'International', back:'\u2014',
  note:'A dual time-zone Squadra with date and day/night indication, made in both pink gold and steel \u2014 the steel version confirmed to a run of fifty pieces.' },
{ slot:'le-squadra-worldchrono', year:'2008', name:'Reverso Squadra World Chronograph',
  ref:'231.T.50', run:'1,500 pieces', cat:'anniversary', family:'Anniversary & Milestone Editions', cal:'Automatic',
  material:'Titanium', market:'International', back:'\u2014',
  note:'A double-dialled world time automatic chronograph with date and day/night indication, on titanium rather than the more usual precious metal or steel.' },
{ slot:'le-grande-reverso-101-artdeco', year:'2011', name:'Grande Reverso 101 Art Déco',
  ref:'240.3.70', run:'5 pieces', cat:'joaillerie', family:'Reverso Joaillerie', cal:'Cal. 101',
  material:'White gold', market:'International', back:'\u2014',
  note:'A third distinct reference built around the tiny calibre 101 \u2014 alongside the Reverso Joaillerie (280.3.70) and Grande Reverso 101 (3006430) elsewhere in this section \u2014 here on a straight-line movement in an Art D\u00e9co case, limited to just five pieces.' },
{ slot:'le-gyro2', year:'2008', name:'Reverso Gyrotourbillon 2',
  ref:'—', run:'75 pieces', cat:'mechanica', family:'Grand complication', cal:'Cal. 174',
  material:'Platinum', market:'International', back:'—',
  note:'Spherical multi-axis tourbillon; first wristwatch with a cylindrical hairspring.' },
{ slot:'le-rideau', year:'2011', name:'Reverso Répétition Minutes à Rideau',
  ref:'—', run:'Limited', cat:'mechanica', family:'Grand complication', cal:'Cal. 944',
  material:'Gold', market:'International', back:'—',
  note:'A minute repeater behind a sliding curtain, with trebuchet hammers.' },
{ slot:'le-tribute-gyro', year:'2016', name:'Reverso Tribute Gyrotourbillon',
  ref:'—', run:'75 pieces', cat:'mechanica', family:'Grand complication', cal:'Cal. 179',
  material:'Platinum', market:'International', back:'—',
  note:'85th anniversary. Bi-axial flying tourbillon, ~30% smaller than the 2008 Gyrotourbillon 2.' },
{ slot:'le-fagliano', year:'2016 / 2021', name:'Reverso Tribute Duoface Fagliano',
  ref:'—', run:'190 pieces', cat:'anniversary', family:'Anniversary', cal:'Cal. 854A/2',
  material:'Pink gold', market:'International', back:'—',
  note:'Straps by the Argentine polo bootmaker Casa Fagliano. Reissued for the 90th anniversary.' },
{ slot:'le-tourbillon-duoface', year:'2018', name:'Reverso Tribute Tourbillon Duoface',
  ref:'—', run:'50 pieces', cat:'anniversary', family:'Anniversary', cal:'Flying tourbillon',
  material:'Gold', market:'International', back:'—',
  note:'For the manufacture\u2019s own 185th anniversary.' },
{ slot:'le-quadriptyque', year:'2021', name:'Hybris Mechanica Cal. 185 Quadriptyque',
  ref:'—', run:'10 pieces', cat:'mechanica', family:'Grand complication', cal:'Cal. 185',
  material:'White gold', market:'International', back:'—',
  note:'90th anniversary. Four working faces, eleven complications, twelve patents.' },
{ slot:'le-nonantieme', year:'2021', name:'Reverso Tribute Nonantième',
  ref:'—', run:'190 pieces', cat:'anniversary', family:'Anniversary', cal:'Cal. 826',
  material:'Pink gold', market:'International', back:'—',
  note:'Ninetieth, in Swiss-French \u2014 continuing the Soixanti\u00e8me/Septanti\u00e8me naming. Moon phase and date on the front; on the back, a complication never before put on a Reverso: a semi-jumping digital hour beside a rotating minute disc and a day/night indicator, over a hand-engraved star field in deep blue lacquer.' },
{ slot:'le-geographic-gold', year:'2025', name:'Reverso Tribute Geographic, pink gold',
  ref:'—', run:'150 pieces', cat:'anniversary', family:'Anniversary', cal:'Cal. 834',
  material:'Pink gold', market:'International', back:'—',
  note:'World time returns to the Reverso. The steel version joined the standing catalogue; gold was capped at 150.' }
];

/* ---------------------------------------------------------------
   CATEGORIES — order here is the order on the page.
   SERIES — sub-groups shown collapsed inside a category.
   --------------------------------------------------------------- */
const CATEGORIES = [
  { id:'first',        name:'The First Complications',  years:'1991 \u2013 2000',
    blurb:'Six watches, 500 pieces each, roughly one new complication every two years. The decade that turned a design classic into a horological platform \u2014 collectors treat the six as a single set.' },
  { id:'mechanica',    name:'Hybris Mechanica',         years:'2006 \u2013 today',
    blurb:'The maison\u2019s programme for its most extreme mechanics, and the hardest things anyone has fitted into a rectangle: three and four working faces, spherical and multi-axis tourbillons, striking movements.' },
  { id:'artistica',    name:'Hybris Artistica',         years:'2012 \u2013 today',
    blurb:'Where a grand complication is handed to the rare-crafts atelier \u2014 mechanism and decoration in the same watch, rather than one serving the other.' },
  { id:'eclipses',     name:'Reverso \u00e0 \u00c9clipses',      years:'2006 \u2013 today',
    blurb:'A miniature shutter over the case-back, opened by a wheel beside the crown, concealing a painted enamel beneath. The only Reverso whose decoration has to be unveiled twice.' },
  { id:'metiersrares', name:'M\u00e9tiers Rares',            years:'2018 \u2013 today',
    blurb:'The case-back as a canvas \u2014 grand feu enamel, miniature painting, guillochage, paillonnage. Each set below is catalogued piece by piece on the Archive.' },
  { id:'joaillerie',   name:'Reverso Joaillerie',       years:'1990 \u2013 today',
    blurb:'Diamond-set cases, jewelled cords, and the Reverso worn as something other than a wristwatch.' },
  { id:'anniversary',  name:'Anniversary & Milestone Editions', years:'2001 \u2013 today',
    blurb:'Production models marking a birthday \u2014 the Reverso\u2019s own, or the manufacture\u2019s.' },
  { id:'commemorative',name:'Commemorative & Partnership Editions', years:'1990s \u2013 today',
    blurb:'A club, a city, a boutique opening, an artist, a television series. What qualifies here is that the back was given a meaning.' },
  { id:'market',       name:'Market & Retailer Editions', years:'1990s \u2013 today',
    blurb:'Made for a particular country or a particular shop \u2014 overwhelmingly for Japan, which asked for them constantly, and latterly for MR PORTER.' },
  { id:'gtspecial',    name:'Special Dials & Precious Metals', years:'1992 \u2013 2000s',
    blurb:'Small runs distinguished by dial, finish or metal rather than by complication.' }
];

/* Retired: sub-categories were removed from the page. Kept only so the
   file's exported shape stays stable; nothing reads this any more. */
const SERIES = [
  { id:'enamel',   cat:'metiersrares', name:'Reverso Tribute Enamel',
    blurb:'The miniature-painting programme. One card per set \u2014 click through for the full piece-by-piece catalogue.' },
  { id:'mrporter', cat:'market',       name:'JLC \u00d7 MR PORTER City Editions',
    blurb:'Eight cities across two waves, each with a hand-engraved landmark on the reverse.' },
  { id:'premiere', cat:'market',       name:'Grande Taille Duoface \u201cPremi\u00e8re\u201d',
    blurb:'Three dial colours for Japan, each in yellow gold and steel \u2014 39 and 300 pieces respectively.' },
  { id:'platinum', cat:'gtspecial',    name:'The Platinum Grande Tailles',
    blurb:'Four platinum references, including the smallest Grande Taille run of all at 35 pieces.' }
];

return { EDITIONS, CATEGORIES, SERIES };
})();
