/* ============================================================
   MY REVERSO STORY — SERIES & EDITIONS DATA
   ------------------------------------------------------------
   Drives reverso-collection.html (cards) and
   reverso-series.html?s=<slug> (the dedicated set pages).

   PHOTOS — each piece takes TWO images:
        images/<pieceSlot>-front.jpg
        images/<pieceSlot>-back.jpg
   The card flips between them. Drop both in and it just works.

   Series cover image:  images/<seriesSlug>-cover.jpg

   CONFIDENCE
   ok      = reference confirmed in a cited source
   partial = piece confirmed, reference number not yet verified
   todo    = we know the set exists but not this piece's details
   ============================================================ */

window.RSERIES = (function () {

const SERIES = [

/* ---------------------------------------------------------- */
{ slug:'xu-beihong',
  name:'Reverso Tribute Enamel “Xu Beihong”',
  year:'2025', craft:'Grand feu enamel · miniature painting · guillochage',
  limited:'10 pieces per reference', cal:'Calibre 822 · manual-wound · 42 h reserve', case:'45.6 \u00d7 27.4 \u00d7 9.73 mm, 18k white gold',
  blurb:'Three ink horses, each translated from a square metre of paper to two square centimetres of enamel.',
  intro:'A trio built around Xu Beihong (1895\u20131953), the Chinese painter whose ink-and-wash horses helped define modern Chinese art \u2014 and, with the Lunar Year of the Horse arriving in February 2026, a deliberately timed subject. It isn\u2019t the first time Jaeger-LeCoultre has used his work: a different Xu Beihong trio appeared in 2018 as part of a set dedicated to several artists. This version keeps the format \u2014 three case-backs, three paintings \u2014 in the classic 45.6 \u00d7 27.4 mm Grande Taille case. Each back takes roughly 80 hours of miniature enamel painting in the M\u00e9tiers Rares atelier to shrink a canvas originally over a square metre onto a surface of about two square centimetres; the fronts pair translucent flinqu\u00e9 grand feu enamel with hand-guilloch\u00e9 patterns cut on a traditional hand-operated rose engine. Ref. Q39334B1\u2013B3, 10 pieces of each, roughly US$150,000\u2013153,000 at launch.',
  links:[
    {t:'SJX \u2014 introduction', u:'https://watchesbysjx.com/2025/10/jaeger-lecoultre-reverso-enamel-xu-beihong.html'},
    {t:'Watch Collecting Lifestyle', u:'https://www.watchcollectinglifestyle.com/home/jaeger-lecoultre-reverso-tribute-enamel-xu-beihong-review'}
  ],
  pieces:[
    { slot:'xb-running', name:'“The Running Horse”', ref:'Q39334B3', conf:'ok', artist:'Xu Beihong, ink on paper',
      text:'A single horse caught mid-gallop, its form suggesting motion beyond the physical. The dial is Evergreen Pine Green grand feu enamel over a 120-line sunray guilloch\u00e9 \u2014 pine standing, in Chinese symbolism, for unwavering strength and vitality.' },
    { slot:'xb-two-horses', name:'“Two Horses”', ref:'Q39334B2', conf:'ok', artist:'Xu Beihong, ink on paper',
      text:'One dark horse, one pale, in synchronized motion \u2014 a study in the kind of paired opposites classical Chinese thought would read as yin and yang. The dial runs Distant Mountain Blue grand feu enamel over a barleycorn guilloch\u00e9, the blue standing in for peaks lost in morning mist.' },
    { slot:'xb-standing', name:'“The Standing Horse”', ref:'Q39334B1', conf:'ok', artist:'Xu Beihong, ink on paper',
      text:'Stillness charged with held power \u2014 a horse at rest but clearly not at ease. The dial pairs a 120-line herringbone guilloch\u00e9 with Crimson Dawn Orange grand feu enamel, echoing the warm light of the original ink landscape at sunrise.' }
  ]
},

{ slug:'alfons-mucha',
  name:'Reverso Tribute Enamel — Alfons Mucha',
  year:'2018', craft:'Grand feu enamel miniature painting · guillochage · hand engraving',
  limited:'8 pieces per reference', cal:'Calibre 822A/2', case:'45.5 \u00d7 27.4 \u00d7 9.7 mm \u2014 Summer in white gold, Spring and Autumn in yellow gold',
  blurb:'Three of the four panels from Mucha\u2019s “The Seasons” (1896), each framed in hand-engraved gold.',
  intro:'A second 2018 trio, distinct from the Seurat/Xu Beihong/Hokusai set released earlier that year: three of the four panels from Alfons Mucha\u2019s <em>The Seasons</em>, his celebrated 1896 series of decorative panels \u2014 Winter is the one season left out, for reasons Jaeger-LeCoultre never explained. It wasn\u2019t the manufacture\u2019s first attempt at the set: a complete run of all four seasons appeared in 1996, 25 pieces each, painted by Miklos Merczel, then JLC\u2019s Head Enamel Artist (since retired). This 2018 revival used three different, more junior hands to reinterpret the theme. Each case-back miniature sits inside a frame that is entirely hand-engraved and hand-carved \u2014 unusual even by M\u00e9tiers Rares standards, since the engraving happens after enamelling, working a special chisel around the fired miniature without disturbing it. Reproducing Mucha\u2019s Art Nouveau line at roughly 3 by 2 cm meant working with a far more limited palette than Mucha himself had, while planning ahead for how each oxide colour would shift after firing at 800\u00b0C and again during cooling \u2014 a minimum of fifteen firings per watch between the base coats, the miniature itself, and six to eight protective top layers. Mucha had already inspired Jaeger-LeCoultre before this trio, in the 1996 "The Seasons" itself, the 1999 "Precious Gemstones", and the 2001 "Clair de Lune". Eight pieces of each reference, boutique-only, roughly \u20ac95,500 for the set of three at launch.',
  links:[
    {t:'James Magazine', u:'https://www.jamesmagazine.it/art/jaeger-lecoultre-reverso-tribute-enamel-alfons-mucha/'},
    {t:'GMT Post', u:'https://www.gmtpost.com/post/the-new-jaeger-lecoultre-reverso-tribute-enamel-alfons-mucha'},
    {t:'Watch I Love', u:'https://watchilove.com/2018/11/jaeger-lecoultre-presents-the-new-reverso-tribute-enamel-alfons-mucha/'},
    {t:'Deployant \u2014 hands-on', u:'https://deployant.com/important-watches-jaeger-lecoultre-reverso-tribute-enamel-alfons-mucha/'}
  ],
  pieces:[
    { slot:'mucha-summer', name:'“Summer”', ref:'Q39334M1', conf:'ok', artist:'Alfons Mucha, 1896, from “The Seasons” \u00b7 white gold',
      text:'White gold case with a blue Grand Feu enamel front dial \u2014 the season rendered in the same deep, saturated colour family as a summer sky, guilloch\u00e9d in sunburst under the transparent enamel to harmonise with the miniature on the reverse.' },
    { slot:'mucha-spring', name:'“Spring”', ref:'Q39314M2', conf:'ok', artist:'Alfons Mucha, 1896, from “The Seasons” \u00b7 yellow gold',
      text:'Mucha personifies the season as a young blonde woman in a translucent white dress, standing beneath a flowering tree. The flowing lines of the dress fought the enamel\u2019s protective top layers, which flatten spontaneity in a drawing this fluid \u2014 getting them right took extensive research and repeated trials, as did the small details: the white flowers in her hair, the birds, the densely detailed background. Over 100 hours total for the caseback: roughly 70 of enamel painting, 30 of hand engraving for the sculpted frame around the miniature.' },
    { slot:'mucha-autumn', name:'“Autumn”', ref:'Q39314M3', conf:'ok', artist:'Alfons Mucha, 1896, from “The Seasons” \u00b7 yellow gold',
      text:'The same sunburst guilloch\u00e9 as Spring, under a different-coloured translucent lacquer. Mucha\u2019s Autumn is a playful, bountiful figure set among a rich tapestry of autumnal plants, fruit and flowers, a wreath of chrysanthemums in her long auburn hair, gathering grapes from an abundant vine \u2014 a fairly direct metaphor for the season\u2019s harvest.' }
  ]
},

{ slug:'mucha-precious-stones',
  name:'Reverso Montre de Poche “Pierres Précieuses” — Alfons Mucha',
  year:'1999\u20132000', craft:'Grand feu enamel miniature painting, Miklos Merczel \u00b7 gem-setting',
  limited:'Production quantities not documented', cal:'Calibre 822 (Topaze, Am\u00e9thyste) / Calibre 823 (Rubis, Emeraude)', case:'18k white or yellow gold, pocket-watch form, set with diamonds and matching gemstone baguettes',
  blurb:'Four gemstone women from 1900, and the one time this whole enamel programme left the wrist entirely.',
  intro:'Every other Mucha Reverso in this archive is a wristwatch. These four are not \u2014 they\u2019re Reverso <em>Montres de poche</em>, full pocket watches with the reversible case flipped up on a hinge inside a jewelled cradle, the enamel miniature mounted where a fob watch\u2019s portrait would traditionally sit. The subject is Mucha\u2019s <em>The Precious Stones</em>, four 1900 lithographed panels personifying Topaz, Amethyst, Ruby and Emerald as women dressed and lit to match each gem\u2019s colour. Jaeger-LeCoultre made all four in enamel: Topaze and Am\u00e9thyste first in 1999, Rubis and Emeraude following in 2000 on an updated calibre. Every case is set with diamonds and baguette-cut stones matching its gem, and the cradle itself can be personalised with an enamelled monogram in a colour keyed to the watch\u2019s palette. This places the series squarely in the earliest years of Miklos Merczel\u2019s enamel workshop \u2014 after the 1996 Four Seasons, in the same run of years as Clair de Lune and \u00c9toile du Matin \u2014 though unlike those wrist pieces, exact production numbers for Pierres Pr\u00e9cieuses have not surfaced in any source we\u2019ve found; we\u2019re leaving that figure blank rather than borrowing the Four Seasons\u2019 25-piece run without evidence.',
  links:[],
  pieces:[
    { slot:'mucha-topaze', name:'“Topaze”', ref:'\u2014', conf:'partial', artist:'After Alfons Mucha, The Precious Stones: Topaz, 1900',
      text:'The dreamiest of the four figures, per the Mucha Foundation\u2019s own description of the original \u2014 auburn hair, a circular mosaic halo, and an ochre-and-turquoise palette that Jaeger-LeCoultre\u2019s enamellers had to rebuild almost from scratch, since the original lithograph\u2019s colours had faded well past their original intensity by the 1990s. Miklos Merczel: \u201cthe difficulty lay in finding shades which corresponded to the variations of topazes and amethysts chosen by Mucha, particularly as the original colours had lost much of their intensity and we had to accentuate them in order to restore their full radiance and depth.\u201d' },
    { slot:'mucha-amethyste', name:'“Améthyste”', ref:'\u2014', conf:'partial', artist:'After Alfons Mucha, The Precious Stones: Amethyst, 1900',
      text:'A field of violet and mauve tones built to track the natural colour range of amethyst itself, paired with Topaze as the first half of the set in 1999. The two were explicitly conceived together \u2014 JLC\u2019s own launch copy calls them \u201codes to women and to lovers of horological beauty,\u201d each cradle\u2019s monogram enamelled in a shade pulled from its own watch\u2019s palette.' },
    { slot:'mucha-rubis', name:'“Rubis”', ref:'\u2014', conf:'partial', artist:'After Alfons Mucha, The Precious Stones: Ruby, 1900',
      text:'Arrived a year after Topaze and Am\u00e9thyste, on the newer calibre 823 rather than 822. Miklos Merczel again: \u201cwe had to find the palette of shades inherent to each stone and choose those which correspond to the choices made by Mucha \u2026 we accentuated the various hues of ruby and emerald to enable them to glow with their full radiance and express their symbolism.\u201d White gold case set with brilliant and baguette-cut diamonds.' },
    { slot:'mucha-emeraude', name:'“Emeraude”', ref:'\u2014', conf:'partial', artist:'After Alfons Mucha, The Precious Stones: Emerald, 1900',
      text:'The fourth and final panel of the set, paired with Rubis on the same calibre 823 platform in 2000 \u2014 completing all four Precious Stones in enamel, a full decade before Mucha next returned to the Reverso in 2018.' }
  ]
},

{ slug:'mucha-etoile-clairdelune',
  name:'Reverso “Étoile du Matin et Clair de Lune” — Alfons Mucha',
  year:'1996', craft:'Grand feu enamel dial and case-back, Miklos Merczel',
  limited:'25 sets of 2, in a wooden presentation box', cal:'Calibre 822', case:'26 \u00d7 42 mm, 18k yellow gold',
  blurb:'Morning star and moonlight, both sides of the case enamelled \u2014 and, by the enameller\u2019s own account, where his Reverso work began.',
  intro:'A pairing of two Mucha allegories \u2014 <em>L\u2019\u00c9toile du Matin</u> (The Morning Star) and <em>Clair de Lune</em> (Moonlight, 1902) \u2014 sold together in a limited run of 25 sets, each delivered in its own wooden presentation box. Christie\u2019s has catalogued the same pairing in English as \u201cThe Moon and the Stars,\u201d dating it to circa 1996 \u2014 the same year as JLC\u2019s better-known Four Seasons set, making 1996 an unusually productive first year for Miklos Merczel\u2019s enamel atelier rather than a single release. Unlike the later Aurore/Cr\u00e9puscule pairing, where only the case-back carries the enamel miniature and the dial stays a plain printed white, both faces of these two watches are enamelled: dial and case-back alike, in grand feu. Merczel himself has said Clair de Lune was in fact his very first enamelled Reverso model \u2014 \u201cI started enamelling the backgrounds of the Reverso, and my first model was Mucha\u2019s \u2018Clair de Lune\u2019\u201d \u2014 which would put it right at the start of the same year as the Four Seasons, rather than clearly before or after it. One auction house catalogued a single example of Clair de Lune as a run of 24 rather than 25; we\u2019ve gone with the 25-set figure since it comes directly from Jaeger-LeCoultre\u2019s own launch brochure and is corroborated by Christie\u2019s cataloguing of the pair.',
  links:[],
  pieces:[
    { slot:'mucha-etoile-matin', name:'“L’Étoile du Matin” (The Morning Star)', ref:'276 14 01 (M)', conf:'ok', artist:'After Alfons Mucha',
      text:'A figure haloed in radiating light, one arm raised to shield or greet the dawn \u2014 grand feu enamel on both the case-back miniature and the dial itself, rather than the case-back alone. Manual calibre 822; crocodile strap with an 18k yellow gold folding buckle.' },
    { slot:'mucha-clair-de-lune', name:'“Clair de Lune” (Moonlight)', ref:'276 14 02 (M)', conf:'ok', artist:'After Alfons Mucha, 1902',
      text:'Mucha\u2019s 1902 allegory of the moon, read by contemporary auction cataloguing as unusually sensual for the artist \u2014 a red-haired figure wrapped in green beneath a crescent moon on a deep blue ground. By Miklos Merczel\u2019s own account, this was the design that started his entire enamelled-Reverso practice, before the Four Seasons, before Aurore and Cr\u00e9puscule, before any of it.' }
  ]
},

{ slug:'mucha-aurore-crepuscule',
  name:'Reverso “Aurore et Crépuscule” — Alfons Mucha, 1999',
  year:'1999', craft:'Grand feu enamel miniature painting, Miklos Merczel',
  limited:'25 sets of 2 (50 watches total)', cal:'Calibre 822', case:'42 \u00d7 26 mm, 18k yellow gold',
  blurb:'Dawn and dusk, painted in 1899, put back on the wrist for the turn of the following century.',
  intro:'A pair rather than a trio or a set of four: two Grande Taille Reversos built around Alfons Mucha\u2019s 1899 panels <em>Aurore</em> (Dawn) and <em>Cr\u00e9puscule</em> (Dusk), painted by Mucha himself right at the turn of the previous century. Jaeger-LeCoultre\u2019s own launch material draws the parallel directly: one figure covers her body at nightfall, the other hesitates to disrobe as a new day breaks \u2014 read at the time as mankind\u2019s uncertainty facing an unknown future, and picked up again by Miklos Merczel\u2019s atelier for the turn of the millennium a hundred years later. The gold case-back is sandwiched between coats of white enamel first, so it won\u2019t warp under the 850\u00b0C firing; the miniature is then built up in layers with a brush tapered to a single hair, each layer fired separately, with the artist having to predict how every colour will shift once it comes out of the kiln, intensifying the palette layer by layer until the final image reads true. Twenty-five sets of two were made, sold together rather than separately, in 18k yellow gold.',
  links:[],
  pieces:[
    { slot:'mucha-aurore', name:'“Aurore” (Dawn)', ref:'276.1.62 (case No. 1\u2019952\u2019322)', conf:'ok', artist:'After Alfons Mucha, 1899',
      text:'The hesitant counterpart to Cr\u00e9puscule: a figure caught at the moment of a new day breaking, read by Jaeger-LeCoultre\u2019s own material as the more hopeful half of the pair. White enamel dial with subsidiary seconds at six; manual calibre 822; black leather strap with an 18k yellow gold deployant clasp.' },
    { slot:'mucha-crepuscule', name:'“Crépuscule” (Dusk)', ref:'276.1.62 (case No. 1\u2019952\u2019325)', conf:'ok', artist:'After Alfons Mucha, 1899',
      text:'Mucha\u2019s own words for the painting, per Jaeger-LeCoultre\u2019s launch material: \u201cthe shivering form of this woman covering herself at the close of the day illustrates mankind\u2019s fears and hesitations in the face of an unknown future.\u201d Same case, dial, and movement specification as Aurore \u2014 the two were conceived and sold as a single dawn/dusk statement rather than as two independent watches.' }
  ]
},

{ slug:'mucha-four-seasons-1996',
  name:'Reverso “Four Seasons” — Alfons Mucha, 1996',
  year:'1996', craft:'Grand feu enamel miniature painting',
  limited:'25 sets of 4 (100 watches total)', cal:'Calibre 822 · manual-wound', case:'28 \u00d7 42 \u00d7 11 mm, 18k yellow gold',
  blurb:'The set that started it all: Jaeger-LeCoultre\u2019s first enamelled Reverso, and the only Reversos ever made with true enamel dials.',
  intro:'Not to be confused with the three-piece Mucha set from 2018 elsewhere in this archive \u2014 this is the original, and the watch that began Jaeger-LeCoultre\u2019s modern enamel programme entirely. In 1991 Miklos Merczel, a Hungarian-trained watchmaker who had moved through Cartier\u2019s complications department before joining LeCoultre, spotted an antique enamelled pocket watch at the Basel Fair. Self-taught from there, he earned the title of Master Enameller in 1995, and in 1996 unveiled his first enamelled Reverso set: four watches after Alfons Mucha\u2019s <em>The Seasons</em>, one of the most recognisable Art Nouveau images of the 1890s. Each case-back carries a painted enamel portrait of a woman personifying her season; the dials are white enamel with painted Arabic numerals, a blue minute track, and blued steel \u00e9p\u00e9e hands \u2014 the only Reversos, before or since, built with a genuinely enamelled dial rather than a lacquered or guilloch\u00e9 one. Twenty-five sets of four were made, all in 18k yellow gold, and sold as complete sets rather than individually \u2014 which makes a full matching set, rather than a single watch, the rare thing to find today.',
  links:[
    {t:'Antiquorum \u2014 complete set', u:'https://catalog.antiquorum.swiss/en/lots/jaeger-lecoultre-lot-164-11'},
    {t:'Sotheby\u2019s \u2014 Spring', u:'https://www.sothebys.com/en/buy/auction/2020/important-watches/jaeger-lecoultre-reverso-four-seasons-reference-2'},
    {t:'Sotheby\u2019s \u2014 Summer', u:'https://www.sothebys.com/en/buy/auction/2020/important-watches/jaeger-lecoultre-reverso-four-seasons-reference'},
    {t:'Sotheby\u2019s \u2014 Autumn', u:'https://www.sothebys.com/en/buy/auction/2020/important-watches/jaeger-lecoultre-reverso-four-seasons-reference-3'},
    {t:'Sotheby\u2019s \u2014 Winter', u:'https://www.sothebys.com/en/buy/auction/2020/important-watches/jaeger-lecoultre-reverso-four-seasons-reference-4'}
  ],
  pieces:[
    { slot:'mucha96-spring', name:'“Spring”', ref:'276.1.62 (case No. 1\u2019912\u2019000)', conf:'ok', artist:'After Alfons Mucha, 1896',
      text:'A fair maiden stands under blossoming trees, celebrating rebirth with a lyre in hand; bright flowers and green leaves surround her, and her translucent white dress reads as purity \u2014 spring cast as the innocent opening act of the year.' },
    { slot:'mucha96-summer', name:'“Summer”', ref:'276.1.62 (case No. 1\u2019912\u2019003)', conf:'ok', artist:'After Alfons Mucha, 1896',
      text:'A woman rests against a blossoming poppy field, dipping her feet into a cool lake, a red flower crown against fiery hair and a deep blue sky behind her \u2014 heat and abundance held in the same image.' },
    { slot:'mucha96-autumn', name:'“Autumn”', ref:'276.1.62 (case No. 1\u2019912\u2019002)', conf:'ok', artist:'After Alfons Mucha, 1896',
      text:'A crimson-haired figure gathers grapes from a laden vine, a chrysanthemum wreath in her hair, set against a tangerine harvest landscape \u2014 the same imagery Jaeger-LeCoultre would echo again in its 2018 Mucha revival.' },
    { slot:'mucha96-winter', name:'“Winter”', ref:'276.1.62 (case No. 1\u2019912\u2019001)', conf:'ok', artist:'After Alfons Mucha, 1896',
      text:'A bashful figure in a green cape cradles a small bird against the cold, snow covering the ground around her \u2014 winter read not as an ending but as patience, life held in reserve until spring returns.' }
  ]
},

{ slug:'caspar-david-friedrich',
  name:'Reverso “Émail Friedrich” — Caspar David Friedrich',
  year:'2002', craft:'Grand feu enamel over hand-guilloch\u00e9, opaline finish',
  limited:'5 pieces per painting (10 watches total)', cal:'Calibre 875 · manual-wound · 8-day power reserve', case:'29 \u00d7 46.5 mm, 18k yellow gold',
  blurb:'An 8-day movement, two Romantic seascapes, and a technique Jaeger-LeCoultre had never used before.',
  intro:'A small 2002 follow-on to the Mucha and Warhol/Lichtenstein enamel sets Miklos Merczel\u2019s atelier had already produced \u2014 this time built around two paintings by Caspar David Friedrich, the German Romantic landscape painter known for solitary figures set against mist, night sky, or ruin. Merczel has described this set as the first time the atelier laid an opaline finish over a guilloch\u00e9 base rather than painting straight onto plain white enamel, giving the dial a faint pearlescent translucency the earlier Mucha and artist sets didn\u2019t have. The watch itself is unusually serious hardware to carry a miniature painting: calibre 875 is a manual-wound movement with an 8-day power reserve, small seconds, and a date \u2014 a genuine grande complication base rather than the simpler dial/time-only calibres used for most of the enamel programme. Five pieces of each painting, yellow gold, 10 watches in total.',
  links:[
    {t:'WatchProSite \u2014 overview', u:'https://www.watchprosite.com/digest/jaeger-lecoultre-reverso-caspar-friedrich-overview/'},
    {t:'Phillips \u2014 “Mondaufgang am Meer”', u:'https://www.phillips.com/detail/jaegerlecoultre/197718'},
    {t:'Worldtempus \u2014 Merczel interview', u:'https://en.worldtempus.com/article/watches/trends-and-style/jaeger-lecoultre-a-van-gogh-for-the-wrist-22349.html'}
  ],
  pieces:[
    { slot:'friedrich-mondaufgang', name:'“Mondaufgang am Meer” (Moonrise by the Sea)', ref:'246.1.15, Q3761409', conf:'ok', artist:'After Caspar David Friedrich, 1822',
      text:'Three silhouetted figures look out to sea as the moon rises through a band of violet cloud \u2014 one of Friedrich\u2019s best-known Romantic seascapes, its quiet horizon line reproduced in a case-back roughly 3 cm across, limited to 5 pieces.' },
    { slot:'friedrich-lebensstufen', name:'“Die Lebensstufen” (The Stages of Life)', ref:'246.1.15, Q3761408', conf:'ok', artist:'After Caspar David Friedrich, c. 1835',
      text:'Friedrich\u2019s late allegory of ageing: figures and ships at different distances from the shore, read together as stages of a single life \u2014 one of his most personal, and most quietly melancholic, compositions.' }
  ]
},

{ slug:'arte-portuguesa',
  name:'Reverso / Arte Portuguesa',
  year:'2000\u20132012', craft:'Enamel, engraving, hand-painted miniature \u2014 technique varies by artist',
  limited:'20\u201340 pieces per edition (see individual pieces)', cal:'Calibre 822 / 822/2, manual-wound', case:'Grande Taille / Grande Reverso 976, various metals',
  blurb:'Five Portuguese artists, twelve years, one watch each turned into a private commission.',
  intro:'Launched in 2000 by Pedro Torres, an art and watch collector who ran Torres Distribui\u00e7\u00e3o \u2014 Jaeger-LeCoultre\u2019s distributor in Portugal \u2014 Reverso/Arte Portuguesa invited major Portuguese artists to use the Reverso\u2019s case-back as a canvas for their own interpretation of time. Each edition paired a numbered, limited Reverso with a silkscreen print of the artwork, hand-signed by the artist; the case-back additionally carries the edition number, movement number, and the artist\u2019s name. Editions ran from 20 to 40 pieces (plus one artist\u2019s proof, given to the artist). J\u00falio Pomar opened the series in 2000 and returned in a later year with a sculptural piece for the round Master Control line \u2014 counted separately from the Reverso editions below \u2014 which is generally why Juli\u00e3o Sarmento\u2019s 2012 pair is referred to as the \u201csixth edition\u201d despite being only the fifth Reverso in the set.',
  links:[
    {t:'MasterHorologer \u2014 Sarmento, 6th edition', u:'https://masterhorologer.com/2012/06/06/jaeger-lecoultre-reverso-arte-portuguesa-sixth-edition-in-association-with-portuguese-artist-juliao-sarmento/'},
    {t:'Espiral do Tempo \u2014 20 years retrospective', u:'https://espiraldotempo.com/icones-20-anos-depois-recordar-a-colecao-reverso-arte-portuguesa/'},
    {t:'Espiral do Tempo \u2014 a reader\u2019s story', u:'https://espiraldotempo.com/um-leitor-uma-historia-reverso-arte-portuguesa-no-pulso/'},
    {t:'Esta\u00e7\u00e3o Chronographica, May 2012', u:'https://estacaochronographica.blogspot.com/2012/05/chegado-ao-mercado-jaeger-lecoultre_30.html'}
  ],
  pieces:[
    { slot:'ap-pomar', name:'J\u00falio Pomar — the hare and the tortoise', ref:'\u2014', conf:'ok', artist:'2000 \u00b7 Reverso Date, white gold',
      text:'Pomar, one of 20th-century Portugal\u2019s major painters and known for recurring animal imagery, chose Aesop\u2019s fable of the hare and the tortoise to represent time \u2014 \u201cthe hare seems to be keeping the beat, and the tortoise asks why it\u2019s making so much noise,\u201d in his own words. Base model: Reverso Date in white gold, with a pointer date and an off-centre day window. Example No. 1 was auctioned for charity through Casa do Artista, opening at roughly 3,500 contos and closing at 5,150 (about \u20ac25,000).' },
    { slot:'ap-cargaleiro', name:'Manuel Cargaleiro — cosmos and azulejo', ref:'\u2014', conf:'ok', artist:'2001 \u00b7 Reverso Or D\u00e9co, white gold',
      text:'Cargaleiro, a painter, printmaker and ceramicist, called his own style \u201clyrical abstraction.\u201d His engraved composition pairs a spiral \u2014 his personal symbol for eternal return \u2014 with three red spheres standing for the cosmos, over an azulejo-tile pattern referencing Portugal\u2019s best-known decorative art form; the blue is the sea, the palette a nod to the flag of Geneva. Base model: Reverso Or D\u00e9co, white gold case, floral numerals. No. 1 sold for \u20ac20,500 at a Cabral Moncada charity auction benefiting pianist Maria Jo\u00e3o Pires\u2019s Centro para o Estudo das Artes de Belgais; retail was \u20ac18,750.' },
    { slot:'ap-rego', name:'Paula Rego — woman and pelican', ref:'270.2.62', conf:'ok', artist:'2002 \u00b7 Grande Taille, rose gold',
      text:'Rego \u2014 later recognised as the most internationally significant Portuguese painter of her generation \u2014 chose an image she had returned to across her career: a woman kissing a pelican, a bird said to feed its young from its own body, in an embrace she describes as reading like Leda and the Swan. In her words, the image carries \u201csome complicity on the part of the woman, otherwise she would have fled,\u201d and doubles as a study of who dominates whom \u2014 \u201ceternal time,\u201d repeating endlessly. Base model: Reverso Grande Taille in rose gold, signature on the dial. 40 pieces at \u20ac21,900 including the print.' },
    { slot:'ap-guimaraes', name:'Jos\u00e9 de Guimar\u00e3es — the serpent', ref:'\u2014', conf:'ok', artist:'2003 \u00b7 Reverso Gran\u2019Sport, steel',
      text:'The first Arte Portuguesa edition in steel rather than gold, the first on a Gran\u2019Sport case, the first with a strap designed specifically for it, and the first with the artist\u2019s signature engraved directly on the case. Guimar\u00e3es used a serpent \u2014 a symbol of eternity in some African traditions he draws on \u2014 with one green eye and one red eye, the colours of the Portuguese flag, over a mottled white ground reproducing the relief texture of his original drawing. 40 pieces at \u20ac9,750, the most accessible edition in the series.' },
    { slot:'ap-sarmento', name:'Juli\u00e3o Sarmento — the female form', ref:'\u2014', conf:'ok', artist:'2012 \u00b7 Grande Reverso 976, rose gold or steel',
      text:'The sixth Arte Portuguesa commission overall (fifth in a Reverso case, following Pomar\u2019s separate Master Control sculpture piece), issued as two parallel editions: 20 in rose gold with a black dial and a round small-seconds sub-dial (\u20ac17,900), 30 in steel with a rectangular small-seconds sub-dial (\u20ac9,900). Sarmento\u2019s engraved female silhouette \u2014 the recurring subject of his career \u2014 is paired with a silkscreen print in dark yellow for the gold version and black-and-white for the steel. \u201cIt has to do with the space a woman occupies, and with an indeterminate time in which she simply exists \u2014 not a fleeting time, an eternal one,\u201d Sarmento has said of the theme.' }
  ]
},

{ slug:'hodler-tribute',
  name:'Reverso Tribute Enamel — Ferdinand Hodler',
  year:'2018', craft:'Grand feu enamel miniature painting \u00b7 hand-guilloch\u00e9 and engraved dial',
  limited:'8 pieces per reference (24 watches total)', cal:'Calibre 822', case:'45.5 \u00d7 27.4 mm, 18k white gold',
  blurb:'Three Swiss lake landscapes, for the 100th anniversary of the painter\u2019s death.',
  intro:'Marking the centenary of Ferdinand Hodler\u2019s death in 1918 \u2014 one of Switzerland\u2019s most significant 19th-century painters, known for a style he called \u201cparallelism,\u201d a symbolist take on landscape built around repetition and symmetry \u2014 Jaeger-LeCoultre reproduced three of his Swiss lake paintings in enamel across a purpose-built white gold case. Each dial is finished with a fine hand-guilloch\u00e9 and engraved basket-weave pattern under translucent enamel, its colour chosen to echo the mood of the landscape on the case-back; each miniature took an enameller more than fifty hours to complete, reproducing a canvas many times the size of the finished 3 cm\u00b2 case-back. Eight pieces of each subject, twenty-four watches in total, sold exclusively through Jaeger-LeCoultre boutiques.',
  links:[],
  pieces:[
    { slot:'hodler-geneva', name:'“Lake Geneva with Mont Blanc in Morning Light”', ref:'Q39334H1', conf:'ok', artist:'After Ferdinand Hodler',
      text:'The Alps reflected in still water at first light \u2014 a mirror effect Hodler returned to often \u2014 rendered under a light sky-blue translucent enamel chosen to match the softness of the blue and white shades in the original.' },
    { slot:'hodler-thun-sunrise', name:'“Lake Thun with Symmetric Reflections, Painted Before Sunrise”', ref:'Q39334H2', conf:'ok', artist:'After Ferdinand Hodler, 1904',
      text:'A pine-green enamel dial, chosen after the rocks at the base of the original painting suggested the right shade \u2014 the water\u2019s transparency lets the lakebed show through, a detail the enameller had to carry over from canvas to case-back.' },
    { slot:'hodler-thun-mirror', name:'“Thunersee mit symmetrischer Spiegelung” (Lake Thun with Symmetric Mirroring)', ref:'Q39334H3', conf:'ok', artist:'After Ferdinand Hodler, 1909',
      text:'Painted between Thun and Interlaken, this is generally reckoned the most sought-after of the three subjects. A calm blue enamel dial mirrors the sky reflected across Hodler\u2019s lake.' }
  ]
},

{ slug:'famous-artists',
  name:'Reverso Tribute Enamel — Famous Artists',
  year:'2018', craft:'Grand feu enamel miniature painting · guillochage',
  limited:'8 pieces per reference', cal:'Calibre 822', case:'45.6 \u00d7 27.4 mm, white gold',
  blurb:'The trio that started it all \u2014 three painting techniques, none of them ever attempted in enamel miniature at Jaeger-LeCoultre before.',
  intro:'Before Hidden Treasures, before Hokusai\u2019s Waterfalls, before Shahnameh or Xu Beihong\u2019s horses came back in 2025 \u2014 there was this: the first Reverso trio built explicitly around reproducing three painting techniques never before attempted in enamel miniature at the manufacture. Pointillism, Chinese ink wash, and Japanese woodblock printing, each picked through one representative master and one representative work: Georges Seurat, Xu Beihong, and Katsushika Hokusai. Each dial is hand-guilloch\u00e9d in a pattern that echoes its case-back \u2014 lozenges for Seurat, lengthwise geometric lines for Xu Beihong, small waves for Hokusai \u2014 under translucent Grand Feu enamel colour-matched to the painting behind it. Eight pieces of each, white gold, boutique-only.',
  links:[
    {t:'GMT Post', u:'https://www.gmtpost.com/post/jaeger-lecoultre-reverso-tribute-enamel'},
    {t:'Swisswatches Magazine', u:'https://swisswatches-magazine.com/jaeger-lecoultre-reverso-tribute-enamel-models/'}
  ],
  pieces:[
    { slot:'fa-seurat', name:'Georges Seurat — “A Sunday Afternoon on the Island of La Grande Jatte”', ref:'Q39334P1', conf:'ok', artist:'Georges Seurat, 1884\u20131886',
      text:'Pointillism had never been attempted in enamel at the manufacture, so the enameller had to invent the tools for it \u2014 including an extremely fine, frequently-replaced brush. The original painting is nearly 2 by 3 metres and took Seurat two years and over 60 preparatory sketches; here it\u2019s reduced to about 3 cm\u00b2, painted in a deliberately darker shade than the source to compensate for the way the enamel\u2019s protective top layers dull colour on firing. Roughly 70 hours of work, not counting the research to find the right colour balance. The dial\u2019s lozenge guilloch\u00e9 sits under deep green translucent enamel.' },
    { slot:'fa-xubeihong-2018', name:'Xu Beihong — Two Horses', ref:'Q39334C1', conf:'ok', artist:'Xu Beihong',
      text:'A different Xu Beihong from the pair added to the archive in 2025: this one draws two horses out of an original painting over 5 metres wide, showing ten horses galloping through a landscape. Ink wash painting is built on movement and near-monochrome restraint, both of which fight against enamel\u2019s glassy protective layers \u2014 the artisan had to find a way to keep the horses\u2019 energy legible, down to individual strands of mane, while working in a palette close to black and white. The dial\u2019s lengthwise guilloch\u00e9 sits under an opalescent ivory enamel meant to read like mother-of-pearl.' },
    { slot:'hok-greatwave', name:'Katsushika Hokusai — “The Great Wave off Kanagawa”', ref:'Q39334T1', conf:'ok', artist:'Katsushika Hokusai, c. 1831',
      text:'The same watch now also catalogued on the Hokusai Waterfalls series page \u2014 it carries the same Q39334T-prefix reference scheme as that later waterfall cycle, but it actually launched here, in 2018, as the third leg of this original artists\u2019 trio, well before the waterfalls series existed. The dial\u2019s small-wave guilloch\u00e9 sits under an ocean-deep blue enamel that has to read as calm sky and turbulent water in the same piece \u2014 by the enameller\u2019s own account, the hardest of the three commissions, combining the fine detail of the Seurat with the compositional restraint of the Xu Beihong.' }
  ]
},

{ slug:'chinese-zodiac',
  name:'Reverso Tribute Enamel — Chinese Zodiac',
  year:'2022\u2013', craft:'Grand feu enamel · modelled engraving',
  limited:'10 pieces (Horse) \u00b7 made-to-order (Tiger, Dragon, Snake)', cal:'Calibre 822 / 822A/2 \u00b7 manual-wound \u00b7 42 h reserve', case:'45.5\u201345.6 \u00d7 27.4 \u00d7 9.73 mm, 18k pink gold',
  blurb:'A different animal each Lunar New Year, engraved into a background it was enamelled onto first.',
  intro:'An ongoing run of Lunar New Year editions, one animal at a time \u2014 Tiger (2022), Dragon (2023), Snake (2024, for the 2025 New Year), and Horse (2025, for the 2026 New Year). All four share the same unusual sequence: the case-back is painted with black enamel first, leaving the animal\u2019s silhouette bare, then fired and polished to a glassy finish before a master engraver works the reserved area in low relief using modelled engraving \u2014 roughly 55 to 80 hours per watch, entirely by hand, on a surface that can\u2019t be repaired if the enamel chips. Every piece pairs the engraved back with a matching black grand feu enamel dial, so the animal is the only thing on the watch that isn\u2019t glass-smooth.',
  links:[
    {t:'SJX \u2014 Tiger', u:'https://watchesbysjx.com/2022/01/jaeger-lecoultre-reverso-tribute-enamel-tiger.html'},
    {t:'SJX \u2014 Dragon', u:'https://watchesbysjx.com/2023/12/jaeger-lecoultre-reverso-tribute-enamel-dragon.html'},
    {t:'JLC Press \u2014 Snake', u:'https://press.jaeger-lecoultre.com/presenting-the-reverso-tribute-enamel-snake/'},
    {t:'JLC Press \u2014 Horse', u:'https://press.jaeger-lecoultre.com/introducing-the-reverso-tribute-enamel-horse/'}
  ],
  pieces:[
    { slot:'cz-tiger', name:'“Tiger”', ref:'Q39324K1', conf:'ok', artist:'2022 \u00b7 Year of the Tiger',
      text:'A first for Jaeger-LeCoultre in recent memory: figurative engraving combined with enamel on the same surface. The tiger leaps from black clouds, its stripes picked out afterward in black lacquer; 55 hours of engraving on a caseback already coated in fired enamel. Made to order rather than numbered, roughly \u20ac90,000 before tax at launch.' },
    { slot:'cz-dragon', name:'“Dragon”', ref:'Q39324D1', conf:'ok', artist:'2023 \u00b7 Year of the Wood Dragon',
      text:'A dragon coiled in clouds against the same stark black ground, its scales finished in black rhodium once the engraving is complete. Ten gravers, up to 80 hours of work \u2014 longer than the Tiger a year earlier. Made to order, roughly US$107,000 before tax at launch.' },
    { slot:'cz-snake', name:'“Snake”', ref:'Q39324D2', conf:'ok', artist:'2024 \u00b7 Year of the Snake',
      text:'A snake emerging from a wreath of golden clouds, its scales hand-drawn in black rhodium against sandblasted cloud texture for contrast. Ten chisels, 80 hours of modelled engraving on the pre-enamelled back; getting the black grand feu right took five or six enamel layers and 24 hours of firing and cooling alone \u2014 16 for the back, 8 for the dial \u2014 before half a day of polishing. Made to order, presented for the 2025 Lunar New Year.' },
    { slot:'cz-horse', name:'“Horse”', ref:'Q39324D3', conf:'ok', artist:'2025 \u00b7 Year of the Horse',
      text:'The fourth in the series, and the first limited to a fixed edition of 10 rather than made to order. A horse\u2019s head and forelegs appear to leap from sand-blasted golden clouds, mane and muzzle drawn in black rhodium for contrast; the engraver used ten differently sized chisels and modelled engraving \u2014 sculpting for depth rather than flat outline \u2014 across 80 hours of work on the enamelled back. Presented ahead of the Lunar New Year at Jaeger-LeCoultre\u2019s Dream Shaper exhibition in Shanghai, September 2025.' }
  ]
},

{ slug:'hidden-treasures',
  name:'Reverso Tribute Enamel “Hidden Treasures”',
  year:'2021', craft:'Grand feu enamel · miniature painting · guillochage',
  limited:'10 pieces per reference', cal:'Calibre 822', case:'45.6 × 27.4 mm, white gold',
  blurb:'Three paintings that were all lost and found again.',
  intro:'For the Reverso\u2019s 90th anniversary, the Métiers Rares atelier reproduced three paintings chosen not only for their beauty but for their provenance: each had vanished for decades and was assumed lost forever. The artists were picked because all three were active in the era that produced the Reverso itself — spanning 19th-century Realism, Post-Impressionism, and the Viennese Secession. Jaeger-LeCoultre approached the museums now holding the works to agree the interpretations and colours.',
  links:[
    {t:'Jaeger-LeCoultre', u:'https://www.jaeger-lecoultre.com/us-en/news/watchmaking/reverso-tribute-enamel-hidden-treasures'},
    {t:'Hodinkee — the enameller', u:'https://www.hodinkee.com/articles/meet-the-woman-mastering-the-masters-for-jaeger-lecoultre'},
    {t:'Quill & Pad', u:'https://quillandpad.com/2022/02/05/jaeger-lecoultre-reverso-tribute-enamel-hidden-treasures-stories-of-lost-and-found/'},
    {t:'Revolution', u:'https://revolutionwatch.com/jaeger-lecoutre-introduces-the-reverso-tribute-enamel-hidden-treasures-collection/'},
    {t:'Watchonista', u:'https://www.watchonista.com/articles/closer-look/closer-look-jaeger-lecoultres-new-reverso-tribute-enamel-hidden-treasures-collection'}
  ],
  pieces:[
    { slot:'ht-klimt', name:'Klimt — “Portrait of a Lady”', ref:'Q39334K1', conf:'ok', artist:'Gustav Klimt, 1917',
      text:'The only known “double” portrait by Klimt, painted over an earlier one — a fact undiscovered until 1996, when art student Claudia Maga spotted that the underlying portrait had been missing since 1912. Klimt had reportedly fallen in love with a young woman who then died suddenly; he painted over her portrait to ease the loss. In the late 1990s the work was stolen days before an exhibition in Italy, and found shortly afterwards by a gardener — stuffed into a crevice in a stone wall under ivy, inside a waterproof bag, in perfect condition. On the watch, a barleycorn guilloché dial in green Grand Feu enamel echoes the painting\u2019s background.' },
    { slot:'ht-vangogh', name:'Van Gogh — “Sunset at Montmajour”', ref:'Q39334V1', conf:'ok', artist:'Vincent van Gogh, 1888',
      text:'Painted near Arles in 1888 and long dismissed as not being by Van Gogh at all — it spent years in an attic after being declared a fake. It was finally authenticated in 2013, one of very few full-size Van Gogh canvases confirmed in modern times. The dial\u2019s sunray guilloché in Grand Feu enamel plays against the case-back\u2019s reproduction of the artist\u2019s heavy impasto brushwork.' },
    { slot:'ht-courbet', name:'Courbet — “View of Lake Leman”', ref:'Q39334C2', conf:'ok', artist:'Gustave Courbet, 1876',
      text:'Painted in the last years of Courbet\u2019s life, in exile in Switzerland on the shore of Lake Geneva — within sight of the valley where the Reverso would be made half a century later. A herringbone guilloché dial in misty grey-blue Grand Feu enamel picks up the painting\u2019s soft, atmospheric palette.' }
  ]
},

/* ---------------------------------------------------------- */
{ slug:'hokusai',
  name:'Reverso Tribute Enamel — Hokusai',
  year:'2018 – 2026', craft:'Grand feu enamel miniature · flinqué guilloché dials',
  limited:'10 pieces per reference', cal:'Calibre 822', case:'45.6 × 27.4 × 9.73 mm, white gold',
  blurb:'An eight-year cycle: every waterfall Hokusai ever printed.',
  intro:'The longest artistic project in the Reverso\u2019s history. It began in 2018 with <em>The Great Wave off Kanagawa</em>, then turned to Hokusai\u2019s eight-print series <em>A Tour of the Waterfalls of the Provinces</em> — the first time falling water was treated as a subject in ukiyo-e, and one of the earliest uses of the then-new Prussian blue pigment. Jaeger-LeCoultre released them a few at a time across 2021, 2022, 2023 and finally 2026, completing all eight. Each case-back is built from around fourteen layers of enamel fired successively, roughly 100 hours per watch, reproducing a composition at about 2 cm² — including the original Japanese inscriptions at near-microscopic scale.',
  links:[
    {t:'Jaeger-LeCoultre — Hokusai', u:'https://www.jaeger-lecoultre.com/eu-en/news/watchmaking/reverso-tribute-enamel-hokusai'},
    {t:'JLC — Kiyotaki Waterfall Q39334T8', u:'https://www.jaeger-lecoultre.com/us-en/watches/reverso/reverso-tribute/reverso-tribute-enamel-hokusai-kiyotaki-waterfall-q39334t8'},
    {t:'Hodinkee', u:'https://www.hodinkee.com/articles/jaeger-lecoultre-reverso-tribute-enamel-hokusai-waterfalls-series'},
    {t:'Monochrome', u:'https://monochrome-watches.com/introducing-jaeger-lecoultre-reverso-tribute-enamel-katsushika-hokusai-waterfalls-series-watches-and-wonders-specs-price-pics/'},
    {t:'WatchProSite guide', u:'https://www.watchprosite.com/digest/jaeger-lecoultre-reverso-tribute-enamel-hokusai-guide-2/'}
  ],
  pieces:[
    { slot:'hok-greatwave', name:'The Great Wave off Kanagawa', ref:'Q39334T1', conf:'ok', artist:'2018',
      text:'The first Hokusai on a Reverso, and not part of the waterfalls cycle — the most reproduced image in Japanese art, reduced to the size of a case-back.' },
    { slot:'hok-kirifuri', name:'Kirifuri Waterfall at Kurokami Mountain, Shimotsuke', ref:'Q39334T2', conf:'ok', artist:'2021',
      text:'The first of the waterfalls series. “Kirifuri” means falling mist — the print shows tiny figures dwarfed by the cascade, a favourite Hokusai device for scale.' },
    { slot:'hok-amida', name:'The Amida Falls in the Far Reaches of the Kisokaidō Road', ref:'Q39334T3', conf:'ok', artist:'2022',
      text:'The most abstract print in the series: the water emerges from a near-perfect circle in the rock, said to resemble the head of the Amida Buddha.' },
    { slot:'hok-yoshitsune', name:'The Waterfall Where Yoshitsune Washed His Horse, Yoshino', ref:'Q39334T4', conf:'ok', artist:'2023 · lozenge guilloché dial',
      text:'A legend rather than a landscape: the warrior Minamoto no Yoshitsune washing his horse at the falls in Yamato Province.' },
    { slot:'hok-ono', name:'The Waterfall at Ono on the Kisokaidō Road', ref:'Q39334T5', conf:'ok', artist:'2023 · barleycorn guilloché dial',
      text:'A traveller\u2019s view from the old Kisokaidō highway, one of the two great routes between Edo and Kyoto.' },
    { slot:'hok-roben', name:'Rōben Waterfall at Ōyama, Sagami Province', ref:'Q39334T7', conf:'ok', artist:'2026 · barleycorn guilloché, walnut-brown enamel',
      text:'Pilgrims purifying themselves beneath the falls at Ōyama — a site of ritual ablution, which Hokusai renders as bodies braced against falling water.' },
    { slot:'hok-kiyotaki', name:'Kiyotaki Kannon Waterfall at Sakanoshita, Tōkaidō', ref:'Q39334T8', conf:'ok', artist:'2026 · wavy guilloché, emerald enamel',
      text:'Named for the Kannon shrine beside it, on the Tōkaidō — the coastal road immortalised in Hiroshige\u2019s fifty-three stations.' },
    { slot:'hok-yoro', name:'Yōrō Waterfall in Mino Province', ref:'Q39334T6', conf:'ok', artist:'2026',
      text:'Subject of one of Japan\u2019s best-known filial-piety legends, in which the falls run with sake for a devoted son.' },
    { slot:'hok-aoigaoka', name:'The Falls at Aoigaoka in the Eastern Capital', ref:'Q39331T9', conf:'ok', artist:'2026',
      text:'The eighth and final print — and an urban one, a waterfall inside Edo itself, closing a cycle begun eight years earlier.' }
  ]
},

/* ---------------------------------------------------------- */
{ slug:'monet-venice',
  name:'Reverso Tribute Enamel “Venice Series” — Monet',
  year:'2024', craft:'Miniature painting · enamelling · guillochage',
  limited:'10 pieces per reference', cal:'Calibre 822', case:'45.6 × 27.4 × 9.73 mm, white gold',
  blurb:'Three Monets, each shrunk from a metre wide to 25 × 20 mm.',
  intro:'Made for the Homo Faber biennial in Venice. Monet arrived in the city with his wife in autumn 1908 and at first declared it “too beautiful to paint”; he then chose a dozen sites and painted each repeatedly at different hours to catch the changing light. The challenge here was reducing canvases over 65 × 92 cm onto a surface of 25 × 20 mm, while faking the impasto of the original brushwork so the miniature keeps its depth. The San Giorgio miniature alone took roughly 70 hours. Each dial beneath is hand-guilloché — about eight hours of work — under translucent coloured enamel.',
  links:[
    {t:'SJX', u:'https://watchesbysjx.com/2024/09/monets-venice-in-miniature-enamel-by-jaeger-lecoultre.html'},
    {t:'Fratello', u:'https://www.fratellowatches.com/jaeger-lecoultre-reverso-tribute-enamel/'},
    {t:'JLC — San Giorgio Maggiore', u:'https://www.jaeger-lecoultre.com/sa-en/watches/reverso/reverso-tribute/reverso-tribute-enamel-monet-san-giorgio-maggiore-q39334m4'},
    {t:'JLC — The Grand Canal', u:'https://www.jaeger-lecoultre.com/sa-en/watches/reverso/reverso-tribute/reverso-tribute-enamel-monet-the-grand-canal-q39334m5'},
    {t:'JLC — The Doge\u2019s Palace', u:'https://www.jaeger-lecoultre.com/sa-en/watches/reverso/reverso-tribute/reverso-tribute-enamel-monet-the-doge-s-palace-q39334m6'}
  ],
  pieces:[
    { slot:'mon-sangiorgio', name:'San Giorgio Maggiore at Dusk', ref:'Q39334M4', conf:'ok', artist:'Claude Monet, 1908',
      text:'The island opposite St Mark\u2019s Square, painted as the sun set behind it. Monet reduces the buildings almost to silhouette and gives the picture over to light, colour and reflection. The miniaturised reproduction required roughly 70 hours of work.' },
    { slot:'mon-grandcanal', name:'The Grand Canal', ref:'Q39334M5', conf:'ok', artist:'Claude Monet, 1908',
      text:'The view down the Grand Canal past the mooring poles toward Santa Maria della Salute — one of the sites Monet returned to again and again at different hours.' },
    { slot:'mon-doges', name:'The Doge\u2019s Palace', ref:'Q39334M6', conf:'ok', artist:'Claude Monet, 1908',
      text:'The palace seen from the water, its Gothic arcades dissolving into the lagoon\u2019s reflected light.' }
  ]
},

/* ---------------------------------------------------------- */
{ slug:'turner-venice',
  name:'Reverso Tribute Enamel “Turner Series”',
  year:'2025', craft:'Grand feu enamel · paillonnage · miniature painting',
  limited:'10 pieces per reference', cal:'Calibre 822', case:'45.6 × 27.4 mm, white gold',
  blurb:'Venice again — but fifty years earlier, and through English eyes.',
  intro:'A second Venetian series, released for Jaeger-LeCoultre\u2019s participation in the Homo Faber Biennale at the Fondazione Giorgio Cini on San Giorgio Maggiore. Turner was already 44 when he first reached Venice, his imagination primed by Shakespeare and Byron; he visited in late summer, when humidity softened the outlines of buildings and the lagoon became a mirror. Across his career he produced roughly 150 watercolours and as many as 900 drawings, often at astonishing speed. All four watches use <em>paillonnage</em> — strips of silver foil laid beneath the enamel — to give the water a texture and glint before it is painted over.',
  links:[
    {t:'JLC — Turner Q39334W4', u:'https://www.jaeger-lecoultre.com/us-en/watches/reverso/reverso-tribute/reverso-tribute-enamel-turner-q39334w4'},
    {t:'Oracle of Time', u:'https://oracleoftime.com/jaeger-lecoultre-launch-reverso-tribute-enamel-turner-series-for-homo-faber-venice/'},
    {t:'Mr Watchmaster', u:'https://mrwatchmaster.com/jaeger-lecoultre-reverso-tribute-enamel-turner-series-shines-a-light-on-venice/'},
    {t:'The Hour Markers', u:'https://www.thehourmarkers.com/articles/jeager-le-coultre-reverso-tribute-enamel-turner'},
    {t:'Watch Collecting Lifestyle', u:'https://www.watchcollectinglifestyle.com/home/jaeger-lecoultre-reverso-tribute-enamel-turner-series-venice'}
  ],
  pieces:[
    { slot:'tur-dogana', name:'Venice, the Dogana and San Giorgio Maggiore', ref:'Q39334W1', conf:'ok', artist:'J.M.W. Turner, 1834',
      text:'The site of the Homo Faber exhibition itself, painted by Turner in 1834. The soft green of the water is echoed by both the green alligator strap and the dial on the reverse.' },
    { slot:'tur-salute', name:'Venice, from the Porch of Madonna della Salute', ref:'Q39334W2', conf:'ok', artist:'J.M.W. Turner, 1835',
      text:'Turner frames the city from inside the porch of the Salute, using the architecture as a proscenium arch for the light beyond.' },
    { slot:'tur-sighs', name:'Bridge of Sighs, Ducal Palace and Customhouse', ref:'Q39334W3', conf:'ok', artist:'J.M.W. Turner',
      text:'Three Venetian landmarks compressed into one composition — the Bridge of Sighs, the Doge\u2019s Palace and the Dogana together.' },
    { slot:'tur-sighs2', name:'Venice, the Bridge of Sighs', ref:'Q39334W4', conf:'ok', artist:'J.M.W. Turner, 1840',
      text:'A darker foreground set against glowing reflected light. When Turner exhibited this 1840 work he paired it with two lines adapted from Byron: “I stood upon a bridge, a palace and a prison on each hand” — a lament for the fallen Venetian Republic. A wavy, lavender-tinted guilloché dial (41 lines, 369 lathe passages) evokes the rippling light on the canals.' }
  ]
},

/* ---------------------------------------------------------- */
{ slug:'shahnameh',
  name:'Reverso Tribute Enamel “Shahnameh”',
  year:'2025', craft:'Grand feu enamel over guilloché gold',
  limited:'10 pieces per reference', cal:'Calibre 822', case:'45.6 × 27.4 mm',
  blurb:'The Persian Book of Kings, in four miniatures.',
  intro:'Scenes from the <em>Shahnameh</em> — the 10th-century Persian epic by Ferdowsi, one of the longest poems ever written by a single author, and the foundation of Persian literary identity. Painting it in miniature enamel is a deliberate echo: the Shahnameh\u2019s own manuscript tradition is one of illuminated miniatures, so this is a miniature art form rendered in another miniature art form.',
  links:[
    {t:'JLC Press', u:'https://press.jaeger-lecoultre.com/reverso-tribute--enamel-shahnameh/'},
    {t:'SJX', u:'https://watchesbysjx.com/2025/08/jaeger-lecoultre-reverso-tribute-enamel-shahnameh.html'},
    {t:'Revolution', u:'https://revolutionwatch.com/a-closer-look-jaeger-lecoultre-reverso-tribute-enamel-shahnameh-review/'},
    {t:'The Watch Pages — “Faridun Tests His Sons”', u:'https://www.thewatchpages.com/watches/jaeger-lecoultre-reverso-tribute-enamel-shahnameh-faridun-tests-his-sons-q39334s2'}
  ],
  pieces:[
    { slot:'sha-siyavush', name:'Siyavush Plays Polo before Afrasiyab', ref:'Q39334S1', conf:'ok', artist:'Ferdowsi, c. 1525\u201330 (Met folio, attrib. Qasim ibn \u2018Ali)',
      text:'The one Shahnameh scene that shows polo directly: the rival Turanian king Afrasiyab challenges the Persian hero Siyavush to a match, and loses. A fitting subject for a Reverso, given the watch\u2019s own origin on the polo field. Vivid blue Grand Feu enamel over a sunray guilloché dial (120 lines, 7 hours of engraving plus 8 of enamelling) echoes the sky in the painting.' },
    { slot:'sha-faridun', name:'Faridun Tests His Sons', ref:'Q39334S2', conf:'ok', artist:'Ferdowsi, c. 1525\u201335 (Aga Khan Museum folio, attrib. Aqa Mirak)',
      text:'One of the epic\u2019s central parables: the king Faridun disguises himself as a dragon to test the courage of his three sons before dividing his kingdom between them. Their reactions — flight, recklessness, and judgement — decide their inheritance and set the tragedy in motion. A herringbone guilloché dial (120 lines, 7 hours) in light blue Grand Feu enamel matches the landscape where the sons confront the dragon.' },
    { slot:'sha-saam', name:'Saam Comes to Mount Alburz', ref:'Q39334S3', conf:'ok', artist:'Ferdowsi, c. 1535 (Museum f\u00fcr Islamische Kunst folio, attrib. commissioned by Sultan Muhammad)',
      text:'The warrior Saam abandoned his white-haired newborn son Zal on Mount Alburz, believing the boy demonically marked; the mythical bird Simurgh raised the child, and Saam later returned in regret to seek forgiveness and reclaim him. A wavy guilloché dial (32 lines, 7 hours) in translucent green Grand Feu enamel echoes the painting\u2019s palette.' },
    { slot:'sha-rustam', name:'Rustam Pursues Akvan', ref:'Q39334S4', conf:'ok', artist:'Ferdowsi, c. 1530\u201335 (Aga Khan Museum folio, attrib. Muzaffar \u2018Ali)',
      text:'Rustam — son of Zal, grandson of Saam, the most celebrated champion of Persian folklore — is sent to slay a wild ass threatening the Shah\u2019s horses. As his lasso touches its neck, the animal vanishes, revealing itself as Akvan, a demon in disguise. A lozenge guilloché dial (980 lines, 7 hours) in rich green Grand Feu enamel matches the painting\u2019s vegetation.' }
  ]
},

/* ---------------------------------------------------------- */
{ slug:'precious-flowers',
  name:'Reverso One “Precious Flowers”',
  year:'2021 – 2024', craft:'Enamel · hand engraving · gem-setting',
  limited:'10 pieces per reference', cal:'Reverso One', case:'White or pink gold',
  blurb:'Three rare crafts at once, on a case-back the size of a stamp.',
  intro:'Floral compositions on the Reverso One, notable because each piece combines three separate Métiers Rares disciplines simultaneously — enamelling, hand engraving and gem-setting — rather than showcasing one. The series was extended with further hibiscus designs after the original quartet.',
  links:[
    {t:'JLC — Precious Flowers', u:'https://www.jaeger-lecoultre.com/us-en/news/watchmaking/reverso-one-precious-flowers'},
    {t:'JLC — new Precious Flowers', u:'https://www.jaeger-lecoultre.com/us-en/news/watchmaking/new-reverso-one-precious-flowers'},
    {t:'JLC — Sea Green Arums Q3292434', u:'https://www.jaeger-lecoultre.com/us-en/watches/reverso/reverso-one/reverso-one-precious-flowers-q3292434'},
    {t:'JLC — Purple Arums Q3292435', u:'https://www.jaeger-lecoultre.com/us-en/watches/reverso/reverso-one/reverso-one-precious-flowers-q3292435'},
    {t:'The Watch Pages — Hibiscus', u:'https://www.thewatchpages.com/watches/jaeger-lecoultre-reverso-one-precious-flowers-hibiscus-enamel-q3292422'},
    {t:'Watch Collecting Lifestyle', u:'https://www.watchcollectinglifestyle.com/home/jaeger-lecoutlre-reverso-one-precious-flowers-introducing'}
  ],
  pieces:[
    { slot:'pf-blue-arums', name:'Blue Arums', ref:'Q3293401', conf:'ok', artist:'Enamel, diamond-set foliage',
      text:'“A symbol of admiration and appreciation.” The blooms are enamelled in graduated shades of blue against a light blue lacquered background, while the foliage is fully diamond-set. The winding crown carries a reverse-set diamond, and grain-set diamonds wrap the case from front to back.' },
    { slot:'pf-seagreen-arums', name:'Sea Green Arums', ref:'Q3292434', conf:'ok', artist:'Enamel, full snow-setting',
      text:'“A symbol of charm and passion.” A fully diamond-set model in sea green — flowers and leaves are enamelled, and the entire background is snow-set, a technique that takes roughly an hour to set just five or six stones. In total the gem-setting on this piece runs to 95 hours, wrapping seamlessly from the case-sides to the bezel.' },
    { slot:'pf-pink-arums', name:'Pink Arums', ref:'Q3292430', conf:'ok', artist:'Enamel, 409 diamonds · 2.59 ct',
      text:'Pink gold with a mother-of-pearl dial and a black lacquered case-back for contrast, the blooms enamelled in graduated pink over foliage fully set with 409 diamonds (2.59 ct). Reverse-set diamond on the crown; shiny pink alligator strap. Manual-wound calibre 846, 38-hour power reserve, limited to 10 pieces.' },
    { slot:'pf-purple-arums', name:'Purple Arums', ref:'Q3292435', conf:'ok', artist:'Enamel, 626 diamonds · 1.98 ct',
      text:'Purple arums on pink gold, symbolising charm and passion. Flowers and leaves are fully enamelled and the background snow-set with 626 diamonds (1.98 ct) — about 95 hours of gem-setting, wrapping from the case-back around to the bezel. Shiny green alligator strap; manual-wound calibre 846, 38-hour power reserve; 10 pieces.' },
    { slot:'pf-white-lilies', name:'White Lilies', ref:'Q3293420', conf:'ok', artist:'Relief engraving, enamel, 335 diamonds · 2.44 ct',
      text:'White lilies — purity, devotion, honour — on a white gold case whose back is relief-engraved: the background metal sculpted away so only the raised floral outline remains, each bloom hand-engraved to replicate petal texture. Leaves are enamelled in a rich blue, stamens in light blue, and the sky-blue background is laid with tissue-fine wafers of mother-of-pearl. 335 grain-set diamonds (2.44 ct) wrap front to back; reverse-set diamond crown. Shiny blue alligator strap; manual-wound calibre 846; 10 pieces.' },
    { slot:'pf-hibiscus-diamonds', name:'Hibiscus Diamonds', ref:'Q3292423', conf:'ok', artist:'Enamel, paillonnage, diamond-setting',
      text:'Blue hibiscus flowers in Grand Feu champlevé enamel — 12 colour trials to get the shade transitions right, roughly 30 hours of enamelling — with stamens accented in 24-carat gold leaf beneath the enamel. Set against snow-set diamonds like the Birds of Paradise piece; the gadroons and lugs carry a further ~523 diamonds (2.02 ct), 20 hours of setting. 150 hours of Métiers Rares craftsmanship in total.' },
    { slot:'pf-hibiscus', name:'Hibiscus Enamel', ref:'Q3292422', conf:'ok', artist:'Grand feu enamel, paillonnage, 157 diamonds · 1.25 ct',
      text:'The tropical hibiscus in tones evoking a sun-drenched lagoon — the first Métiers Rares Reverso One to run Grand Feu enamel across the full background, over the convex case-sides and onto the dial. Flowers and leaves use 12 enamel colours across nine layers; paillonnage accents the golden stamens with 24-carat gold leaf beneath the enamel. Gadroons and lugs carry ~157 diamonds (1.25 ct). 50 hours of enamelling plus 22 of gem-setting — 72 hours of Métiers d\u2019Art work. Bespoke shiny blue alligator strap, tinted to match.' },
    { slot:'pf-birds-paradise', name:'Birds of Paradise', ref:'Q3292421', conf:'ok', artist:'Grand feu champlevé enamel, 331 diamonds · 1.64 ct',
      text:'Freedom and joy, rendered as a bird-of-paradise flower carved from the flat gold case-back before enamelling. Shaped 24-carat gold leaf pieces sit beneath the orange and gold tones; the enameller layers 19 pigments across up to nine layers, roughly 60 hours of work. Snow-set diamonds — nine hand-set sizes, 331 stones (1.64 ct), 65 hours — surround the flower for continuous sparkle. Custom-dyed shiny green alligator strap. 125 hours of Métiers Rares craftsmanship in total.' }
  ]
},

/* ---------------------------------------------------------- */
{ slug:'precious-colours',
  name:'Reverso One “Precious Colours”',
  year:'2025', craft:'Enamel · gem-setting · lacquer',
  limited:'Limited edition', cal:'Reverso One', case:'Gold',
  blurb:'The colour-led companion to Precious Flowers.',
  intro:'A continuation of the Précieux line opened by Precious Flowers, this time organised around colour and stone rather than botanical subject.',
  links:[
    {t:'JLC Press', u:'https://press.jaeger-lecoultre.com/reverso-one--precious-colours/'},
    {t:'Jaeger-LeCoultre', u:'https://www.jaeger-lecoultre.com/us-en/news/watchmaking/reverso-one-precious-colours'},
    {t:'Watch Collecting Lifestyle', u:'https://www.watchcollectinglifestyle.com/home/aeger-lecoultre-reverso-one-precious-flowers-and-reverso-one-precious-colors'}
  ],
  pieces:[
    { slot:'pc-green', name:'Precious Colours — Green', ref:'—', conf:'ok', artist:'—', text:'The green colourway of the set. Jaeger-LeCoultre has not issued individual reference numbers for the three Precious Colours variants, so the dash here is intentional rather than unconfirmed.' },
    { slot:'pc-blue', name:'Precious Colours — Blue', ref:'—', conf:'ok', artist:'—', text:'The blue colourway of the set. As with the others, no individual reference number is issued.' },
    { slot:'pc-pink', name:'Precious Colours — Pink', ref:'—', conf:'ok', artist:'—', text:'The pink colourway of the set. As with the others, no individual reference number is issued.' }
  ]
},

/* ---------------------------------------------------------- */
{ slug:'cordonnet-jewellery',
  name:'Reverso One Cordonnet Jewellery',
  year:'2021', craft:'Full pavé diamond setting',
  limited:'Limited edition', cal:'Calibre 844', case:'Duetto, gold',
  blurb:'The 1930s cord strap, remade in gold and diamonds.',
  intro:'A direct descendant of the 1936 Reverso Cordonnet, which was worn on a plain black silk cord in keeping with 1930s fashion. Here the cord is reinterpreted in gold and pavé diamonds and paired with a Duetto case — mother-of-pearl on one dial, onyx on the other, both driven by the hand-wound calibre 844.',
  links:[
    {t:'Luxe Magazine', u:'https://www.luxe-magazine.com/en/article/11657-jaeger_lecoultre_reverso_one_cordonnet_sparkling_elegance.html'},
    {t:'Watches News', u:'https://www.watches-news.com/reverso-one-cordonnet-jewellery/'},
    {t:'Lifetime Magazine', u:'https://lifetimemagazine.co/jaeger-lecoultre-the-reverso-one-duetto-jewellery/'}
  ],
  pieces:[
    { slot:'cj-1', name:'Cordonnet Jewellery', ref:'—', conf:'ok', artist:'Pavé diamond, mother-of-pearl / onyx',
      text:'Mother-of-pearl on the day dial, onyx on the night dial, with the cord itself set in diamonds. No individual reference number is issued for this piece.' }
  ]
},

/* ---------------------------------------------------------- */
{ slug:'vallee-merveilles',
  name:'Reverso One “La Vallée des Merveilles”',
  year:'2026', craft:'Enamel · paillonnage · gem-setting · lacquer',
  limited:'20 pieces per reference', cal:'Calibre 846', case:'Reverso One, pink or white gold',
  blurb:'A new nature series — first stop, Hawaii and Japan.',
  intro:'The opening capsule of a new ongoing series dedicated to the natural world, from “the world\u2019s last pristine places to the artistry of the most beautiful gardens”. Announced at Watches and Wonders 2026 under Jaeger-LeCoultre\u2019s “Valley of Inventions” theme, with mother-of-pearl dials and the in-house calibre 846.',
  links:[
    {t:'Jaeger-LeCoultre', u:'https://www.jaeger-lecoultre.com/us-en/watches/la-vallee-des-merveilles'},
    {t:'Master Horologer', u:'https://masterhorologer.com/2026/04/29/jaeger-lecoultre-la-vallee-des-merveilles/'},
    {t:'Mr Watchmaster', u:'https://mrwatchmaster.com/jaeger-lecoultre-introduces-la-vallee-des-merveilles-capsule-collection/'},
    {t:'WatchPro', u:'https://www.watchpro.com/jaeger-lecoultre-the-vallee-des-merveilles-watch/'},
    {t:'JLC — Hibiscus Syriacus Q3292424', u:'https://www.jaeger-lecoultre.com/us-en/watches/reverso/reverso-one/reverso-one-hibiscus-syriacus-q3292424'},
    {t:'JLC — Hibiscus Rosa Q3292425', u:'https://www.jaeger-lecoultre.com/us-en/watches/reverso/reverso-one/reverso-one-hibiscus-rosa-q3292425'},
    {t:'JLC — The Sakura Q3293426', u:'https://www.jaeger-lecoultre.com/us-en/watches/reverso/reverso-one/reverso-one-sakura-q3293426'}
  ],
  pieces:[
    { slot:'vm-syriacus', name:'“Hibiscus Syriacus”', ref:'Q3292424', conf:'ok', artist:'Hawaii · white gold',
      text:'A hummingbird sipping nectar from a blue hibiscus — the first of the two Hawaii-inspired pieces.' },
    { slot:'vm-rosa', name:'“Hibiscus Rosa”', ref:'Q3292425', conf:'ok', artist:'Hawaii · pink gold',
      text:'A hummingbird poised over a vivid red hibiscus, the emblematic flower of Hawaii.' },
    { slot:'vm-sakura', name:'The Sakura', ref:'Q3293426', conf:'ok', artist:'Japan',
      text:'The third piece of the capsule, celebrating Japan with cherry blossom.' }
  ]
},

/* ---------------------------------------------------------- */
{ slug:'secret-necklace',
  name:'Reverso Secret Necklace',
  year:'2023', craft:'Gem-setting · jewellery',
  limited:'Unique / very limited', cal:'—', case:'Reverso as pendant',
  blurb:'The Reverso taken off the wrist entirely.',
  intro:'A high-jewellery piece in which the Reverso becomes the centrepiece of a necklace — the swivelling case reimagined as a secret pendant that turns to conceal or reveal the dial. It follows a genuine historical thread: the vintage reference table includes a unisex <em>pendant</em> Reverso (ref. 205) from the 1930s, so the watch has been worn off the wrist before.',
  links:[
    {t:'Jaeger-LeCoultre', u:'https://www.jaeger-lecoultre.com/us-en/news/watchmaking/reverso-secret-necklace'},
    {t:'Watches and Wonders', u:'https://www.watchesandwonders.com/en/geneva-2023/brands/jaeger-lecoultre/reverso/reverso-secret-necklace'},
    {t:'The Hour Markers', u:'https://www.thehourmarkers.com/articles/jaegerlecoultre-takes-the-secret-route-with-the-reverso-secret-necklace'}
  ],
  pieces:[
    { slot:'sn-1', name:'Reverso Secret Necklace', ref:'—', conf:'ok', artist:'Gem-set, gold',
      text:'The case suspended as a pendant, turning to hide the dial — the original idea of concealment, applied to jewellery rather than sport. No individual reference number is issued for this piece. It follows real precedent: a yellow gold and diamond pendant Reverso, ref. 465.1.86, circa 2000, has surfaced at auction on a black cord with an 18k gold clasp, running the manual calibre 844 — confirming the concept existed at least two decades before this current version.' }
  ]
},

/* ---------------------------------------------------------- */
{ slug:'mrporter-cities', group:'commemorative',
  name:'Jaeger-LeCoultre \u00d7 MR PORTER — City Editions',
  year:'2021 & 2023', craft:'Hand-engraved case-back',
  limited:'Limited edition per city', cal:'Calibre 822/2 \u00b7 19 jewels \u00b7 21,600 vph \u00b7 42 h',
  case:'45.6 \u00d7 27.4 \u00d7 9.73 mm, stainless steel',
  blurb:'Eight cities, eight engraved skylines \u2014 sold only through MR PORTER.',
  intro:'The largest set of commemorative Reversos ever made, and a genuinely modern answer to the 1930s engraved case-back. MR PORTER launched the collaboration in 2021 for its own tenth anniversary with five cities \u2014 Hong Kong, London, Milan, Paris and New York \u2014 each carrying a hand-engraved landmark on the reverse. Two years later the series continued with three more: Los Angeles, Singapore and Sydney. All are built on the Reverso Classic Monoface Small Seconds in steel, with a silvered dial, guilloch\u00e9 centre, petrol-blue hands and a Casa Fagliano strap \u2014 the same Argentine polo bootmaker who makes the Fagliano edition straps.',
  links:[
    {t:'MR PORTER — The Journal', u:'https://www.mrporter.com/en-us/journal/watches/exclusive-watches-reverso-limited-edition-carrera-24684090'},
    {t:'MR PORTER — limited editions', u:'https://www.mrporter.com/en-gb/mens/designer/jaeger-lecoultre/luxury-watches/exclusives-and-limited-editions'},
    {t:'Mr Stateless — Sydney', u:'https://mrstateless.com/introducing-the-jaeger-lecoultre-x-mr-porter-reverso-sydney-city-limited-edition/'},
    {t:'Time+Tide — Sydney', u:'https://timeandtidewatches.com/jaeger-lecoultre-x-mr-porter-reverso-classic-monoface-small-seconds-sydney-introducing/'},
    {t:'European Watch — New York Q385852Y', u:'https://www.europeanwatch.com/watch/jaeger-lecoultre-q385852y-reverso-classique-new-york-city-mr-port-49976'},
    {t:'Watch Advice', u:'https://www.watchadvice.com.au/21990/mr-porter-x-jaeger-lecoultre-watch-collaboration-pays-homage-to-sydney/'}
  ],
  pieces:[
    { slot:'mp-newyork', name:'New York', ref:'Q385852Y', conf:'ok', artist:'2021 \u00b7 first wave',
      text:'The Statue of Liberty engraved on the case-back, rendered as a radiating figure. Part of the original five released for MR PORTER\u2019s tenth anniversary.' },
    { slot:'mp-london', name:'London', ref:'Q385852L', conf:'ok', artist:'2021 \u00b7 first wave',
      text:'Engraved with the Queen Elizabeth II Tower and the Palace of Westminster, as viewed from Westminster Bridge.' },
    { slot:'mp-paris', name:'Paris', ref:'Q385852P', conf:'ok', artist:'2021 \u00b7 first wave',
      text:'Engraved with the Eiffel Tower.' },
    { slot:'mp-milan', name:'Milan', ref:'Q385852M', conf:'ok', artist:'2021 \u00b7 first wave',
      text:'Engraved with the Gothic spires of the Duomo.' },
    { slot:'mp-hongkong', name:'Hong Kong', ref:'Q385852H', conf:'ok', artist:'2021 \u00b7 first wave',
      text:'Engraved with Hong Kong\u2019s iconic skyline and harbour.' },
    { slot:'mp-losangeles', name:'Los Angeles', ref:'Q385852', conf:'ok', artist:'2023 \u00b7 second wave',
      text:'The Los Angeles skyline seen from the seafront, against the Santa Monica mountains.' },
    { slot:'mp-singapore', name:'Singapore', ref:'Q385852G', conf:'ok', artist:'2023 \u00b7 second wave',
      text:'Marina Bay Sands with its three towers and SkyPark, alongside the ArtScience Museum.' },
    { slot:'mp-sydney', name:'Sydney', ref:'Q385852E', conf:'ok', artist:'2023 \u00b7 second wave',
      text:'The harbour, with the Opera House and the Harbour Bridge.' }
  ]
},

/* ---------------------------------------------------------- */
{ slug:'collectibles-capsule', group:'commemorative',
  name:'The Collectibles \u2014 Reverso Across Every Capsule',
  year:'2023\u2013', craft:'Sourced, authenticated and restored in-house',
  limited:'17 Reverso watches across six capsules so far, 1931\u20132003', cal:'Tavannes 063/051 \u00b7 JLC 410/437/438/411/822/823/840/413',
  case:'Original vintage cases, museum-grade restoration',
  blurb:'Every Reverso the maison has quietly resurfaced through its own certified pre-owned programme.',
  intro:'Not new watches \u2014 old ones, brought back. <em>The Collectibles</em> is Jaeger-LeCoultre\u2019s own certified pre-owned programme, launched in 2023 for the manufacture\u2019s 190th anniversary: it sources, authenticates and restores museum-grade vintage pieces in a dedicated atelier in the Vall\u00e9e de Joux, where ten master watchmakers overhaul each watch and missing components are recreated by hand from historical references or pulled from the archives. The programme covers seventeen emblematic models from the 1920s to the early 1970s \u2014 not just the Reverso, but the Duoplan, Memovox, Powermatic, Geomatic and others alongside it. Six capsules have been presented so far, travelling from the Vall\u00e9e de Joux to Los Angeles, Singapore, Paris, New York and London. Only one \u2014 the fifth, in New York \u2014 was devoted entirely to the Reverso, with eight watches spanning 1931 to 1937. Every other capsule mixed in one or two Reversos among the other model lines; this page collects all of them, grouped by capsule. Only the fourth capsule (Paris) had no Reverso in its offering, as it was dedicated to the Duoplan model. We will add other Reversos as they are offered in the upcoming capsules around the world.',
  links:[
    {t:'Jaeger-LeCoultre \u2014 The Collectibles', u:'https://www.jaeger-lecoultre.com/us-en/jaeger-lecoultre-collectibles-history'},
    {t:'JLC Press \u2014 Fifth Capsule (New York)', u:'https://press.jaeger-lecoultre.com/introducing-the-collectibles/'},
    {t:'JLC Press \u2014 Sixth Capsule (London)', u:'https://press.jaeger-lecoultre.com/introducing-the-collectibles-vi/'},
    {t:'JLC Press \u2014 Third Capsule (Singapore)', u:'https://press.jaeger-lecoultre.com/third-edition-of-the-collectibles-in-singapore/'},
    {t:'Fratello \u2014 Sixth Capsule', u:'https://www.fratellowatches.com/jaeger-lecoultre-presents-its-sixth-the-collectibles-capsule-collection/'},
    {t:'Fratello \u2014 eight curated Reversos (NY)', u:'https://www.fratellowatches.com/eight-curated-jaeger-lecoultre-reverso-watches-from-the-1930s/'},
    {t:'aBlogtoWatch \u2014 New York', u:'https://www.ablogtowatch.com/jaeger-lecoultre-the-collectibles-the-fifth-capsule-collection-present-8-vintage-reverso-watches/'},
    {t:'Worn & Wound \u2014 inside the capsule', u:'https://wornandwound.com/inside-jaeger-lecoultres-reverso-collectibles-capsule-how-the-brand-is-redefining-vintage-watch-curation/'},
    {t:'Watch Collecting Lifestyle \u2014 New York', u:'https://www.watchcollectinglifestyle.com/home/jaeger-lecoultre-collectibles-fifth-capsule-vintage-reverso'},
    {t:'Hodinkee \u2014 Second Capsule (LA)', u:'https://www.hodinkee.com/articles/jaeger-lecoultre-introduces-its-second-vintage-capsule-of-the-collectibles'},
    {t:'Hodinkee \u2014 First Capsule (Vall\u00e9e de Joux)', u:'https://www.hodinkee.com/articles/jaeger-lecoultre-raids-its-archives-for-a-new-vintage-watch-collection'}
  ],
  pieces:[
    { slot:'col-vdj-smallseconds', name:'Reverso Small Seconds', ref:'QV020101', conf:'ok', artist:'1933 \u00b7 Staybrite steel \u00b7 calibre 410',
      group:'Capsule I \u2014 Vall\u00e9e de Joux', groupNote:'January 2023 \u00b7 the programme\u2019s launch',
      text:'A Staybrite steel example from 1933 \u2014 90 years old at the time of sale \u2014 with a lacquered toffee-brown dial still perfectly intact. Colour on a Reverso dial was a deliberate provocation in its day: LeCoultre offered blue, red and brown dials on request even as the rest of the industry stayed with traditional silver, marketing black and colour alike as "the dial of the future." This particular dial is signed "Jaeger Fab Suisse." Powered by the rectangular manual-winding LeCoultre calibre 410, on a new dark brown calfskin strap.' },

    { slot:'col-la-centralseconds', name:'Reverso Central Seconds', ref:'QV020102', conf:'ok', artist:'1930s \u00b7 calibre 437',
      group:'Capsule II \u2014 Los Angeles', groupNote:'June 2023',
      text:'An uncommon vintage Reverso with a black dial and central seconds \u2014 far less common than the two-hand or subsidiary-seconds versions from the same decade, and rarer still with a luminous black dial. Dates to the 1930s and runs the calibre 437. Matthieu Sauret, the programme\u2019s curator, has described pieces like this as a "travelling museum watch."' },

    { slot:'col-sg-smallseconds', name:'Reverso Small Seconds', ref:'QV020100', conf:'ok', artist:'1930s \u00b7 men\u2019s',
      group:'Capsule III \u2014 Singapore', groupNote:'October 2024 \u00b7 10 pieces, first Asia capsule',
      text:'A men\u2019s Reverso with the subsidiary-seconds layout at six o\u2019clock that defined the model through the 1930s, shown alongside the ladies\u2019 1934 piece below as the capsule\u2019s two Reverso entries in a ten-watch set that otherwise spanned the Duoplan, Powermatic and Memovox lines.' },
    { slot:'col-sg-lady', name:'Reverso Lady', ref:'QVE50101', conf:'ok', artist:'1934 \u00b7 steel',
      text:'A ladies\u2019 Reverso from 1934 with a rare, eye-catching chocolate dial in a steel case \u2014 one of three women\u2019s pieces in the Singapore capsule, alongside a Duoplan Coulissante and an avant-garde Calibre 101 bracelet watch.' },

    { slot:'col-1931-black', name:'Reverso 1931, black dial', ref:'QVE65101', conf:'ok', artist:'1931 \u00b7 men\u2019s \u00b7 Tavannes calibre',
      group:'Capsule V \u2014 New York', groupNote:'5\u201323 February 2026 \u00b7 eight watches, all Reverso, 1931\u20131937',
      text:'Described at launch as \u201cthe dial of the future\u201d \u2014 black was radical in 1931, when silver dominated. Railway minute track and trapezoidal indexes, both of which directly informed today\u2019s Reverso Tribute aesthetic.' },
    { slot:'col-1936-twotone', name:'Reverso 1936, two-tone', ref:'QVE10800', conf:'ok', artist:'1936 \u00b7 men\u2019s \u00b7 steel & 9K yellow gold (350/1000)',
      text:'Runs the calibre 410, the first movement JLC developed specifically for the Reverso, with small seconds at six. The two-tone case was a practical idea as much as an aesthetic one: gold combined with harder metal made a watch more robust than solid gold while staying elegant.' },
    { slot:'col-1937-413', name:'Reverso 1937, small seconds', ref:'QVE10100', conf:'ok', artist:'1937 \u00b7 men\u2019s \u00b7 calibre 413',
      text:'The manufacture\u2019s fourth in-house Reverso movement. Its black dial carries the name <em>Jaeger-LeCoultre</em> for the first time \u2014 marking the 1937 merger of the two houses, and dating the watch precisely to that year.' },
    { slot:'col-dame-gold', name:'Reverso 1931 Dame, yellow & white gold', ref:'QVE50300', conf:'ok', artist:'1931 \u00b7 women\u2019s \u00b7 18K (750/1000)',
      text:'A white gold cradle with yellow gold lugs and case. Its dial replaces the minute track with corner brackets at each of the four corners \u2014 a detail carried straight into today\u2019s Reverso One collection.' },
    { slot:'col-dame-double', name:'Reverso 1931 Dame, double signature', ref:'QVE65100', conf:'ok', artist:'1931 \u00b7 women\u2019s \u00b7 steel',
      text:'Heat-blued hands and a rare double signature on the dial \u2014 evidence of limited deliveries to selected retailers whose own names appeared alongside the manufacture\u2019s. On a blue strap.' },
    { slot:'col-cordonnet', name:'Reverso 1931 Cordonnet', ref:'QVE90100', conf:'ok', artist:'1931 \u00b7 women\u2019s',
      text:'The cord-strap Reverso \u2014 the ancestor of the modern Reverso One Cordonnet, worn on a slim silk cord in keeping with 1930s fashion.' },
    { slot:'col-dame-black', name:'Reverso 1931 Dame, black dial', ref:'QVE50103', conf:'ok', artist:'1931 \u00b7 women\u2019s \u00b7 18K',
      text:'The women\u2019s counterpart to the black-dialled 1931 piece above \u2014 the same radical break from the era\u2019s silver dials, scaled down to the smaller 1931 Dame case with plain baton markers and no minute track.' },
    { slot:'col-dame-black-numbers', name:'Reverso 1931 Dame, black dial with numbers', ref:'QVE50102', conf:'ok', artist:'1931 \u00b7 women\u2019s \u00b7 18K',
      text:'A variant of the black-dial 1931 Dame with Arabic numerals in place of plain batons \u2014 the eighth piece of the New York capsule, completing the set at five women\u2019s watches to three men\u2019s.' },

    { slot:'col-ld-1931', name:'Reverso 1931', ref:'QVE10101', conf:'ok', artist:'1931 \u00b7 men\u2019s \u00b7 Tavannes calibre 063',
      group:'Capsule VI \u2014 London', groupNote:'15 June \u2013 18 July 2026 \u00b7 7 Reverso + 5 other model lines, 12 pieces total',
      text:'The bold black dial with railroad minute track and elongated trapezoidal indexes, fitted with the Tavannes calibre 063 \u2014 a pragmatic early solution before Jaeger-LeCoultre began developing its own shaped movements in 1933. On a hand-crafted black calfskin strap.' },
    { slot:'col-ld-dame', name:'Reverso 1931 Dame', ref:'QVE50104', conf:'ok', artist:'1931 \u00b7 women\u2019s \u00b7 steel \u00b7 Tavannes calibre 051',
      text:'Cased in steel and powered by the Tavannes calibre 051, showing how quickly the model adapted for different wearers: the men\u2019s minute track gives way to bracket-like corner markers and refined Art Deco corners with trapezoidal indexes \u2014 details echoed today in the Reverso One collection. Black calfskin strap.' },
    { slot:'col-ld-central', name:'Reverso Central Seconds \u2014 the Doctor\u2019s Reverso', ref:'QVE20300', conf:'ok', artist:'1938 \u00b7 steel \u00b7 calibre 411',
      text:'Steel-cased and running the manufacture calibre 411, its central seconds display marks five-second intervals aligned with elongated hour markers \u2014 designed for taking a pulse at a glance. The practicality earned it a lasting nickname among the doctors who wore it: the "Doctor\u2019s Reverso." Black calfskin strap.' },
    { slot:'col-ld-twotone', name:'Reverso Small Seconds, two-tone', ref:'QVE20105', conf:'ok', artist:'1941 \u00b7 steel & 18K yellow gold (750/1000) \u00b7 calibre 438',
      text:'Steel paired with 18K yellow gold, its case stamped with the eagle-head hallmark for French gold. Runs the manufacture calibre 438 with small seconds at six \u2014 a configuration introduced in 1933 that became one of the defining signatures of early Reverso design. Light-brown calfskin strap with cream stitching.' },
    { slot:'col-ld-corvo', name:'Reverso Corvo', ref:'QVEREV01', conf:'ok', artist:'1972 \u00b7 steel \u00b7 calibre 840 \u00b7 one of 200',
      text:'A pivotal chapter in the Reverso\u2019s survival: when the post-war era and the quartz crisis turned taste toward purely functional watches, Giorgio Corvo bought the maison\u2019s final 200 unused Reverso cases in 1972 and fitted them with the mechanical calibre 840. Said to have sold out within a month to Italian clients, the Corvo proved demand for the design had never really gone away \u2014 and helped pave the way for its 1990s revival. Silver dial, black calfskin strap.' },
    { slot:'col-ld-sunmoon', name:'Reverso Sun Moon', ref:'QVE27033', conf:'ok', artist:'2000 \u00b7 18K white gold (750/1000) \u00b7 calibre 823',
      text:'A product of the 1990s complication revival, when Jaeger-LeCoultre began fitting the Reverso with sapphire display backs to show off its new generation of complication calibres. The manual-winding calibre 823 (first developed in 1999) drives a black dial tracking the sun through a rotating 24-hour disc, with a moon-phase at six and a power reserve at eleven, framed by a railway track and Arabic numerals. Paired with a black Cordovan strap by Casa Fagliano, the Argentinian polo bootmaker.' },
    { slot:'col-ld-artdeco', name:'Reverso Art Deco', ref:'QVE27734', conf:'ok', artist:'2003 \u00b7 18K white gold (750/1000) \u00b7 skeletonised calibre 822',
      text:'The sapphire caseback\u2019s other consequence: skeletonisation, first introduced to the line in 1995. This 2003 example pairs a hand-decorated, skeletonised calibre 822 \u2014 blued screws, hand-engraved bridges in a barleycorn motif \u2014 with a salmon-toned solid silver dial combining hand-guilloch\u00e9 patterns with vertical brushing, dauphine hands and trapezoidal indexes. Archival records suggest no more than ten were made a month. Black Cordovan strap by Casa Fagliano.' }
  ]
},

{ slug:'reverso-a-eclipse', group:'commemorative',
  name:'Reverso à Éclipses',
  year:'2006\u2013', craft:'Grand feu enamel miniature painting on the dial, behind a sliding shutter',
  limited:'Varies by piece \u2014 see individual entries', cal:'Calibre 849 \u00b7 manual-wound \u00b7 ultra-thin', case:'Platinum, pink gold, or rose gold, various sizes',
  blurb:'The one Reverso family that put the art on the dial instead of the case-back \u2014 hidden behind a shutter, so you decide when to look.',
  intro:'Launched in 2006 for the Reverso\u2019s 75th anniversary, the Reverso \u00e0 \u00c9clipses inverted the usual logic of an enamelled Reverso: instead of a miniature painted on the blank case-back, the artwork sits on the <em>dial</em>, hidden behind a working shutter that slides open on a wheel at 2 o\u2019clock. The mechanism \u2014 developed by JLC\u2019s then Artistic and Design Director Janek Deleskiewicz and engineered by Daniel Wild \u2014 is a genuine miniature complication in its own right: a chain just 1.6 cm long and 4 mm thick, built from 192 parts, driving shutters only 0.25 mm thick yet reportedly able to withstand 5 kg of pressure. Each enamel miniature behind the shutter takes roughly a month of painting, built up layer by layer and fired repeatedly at around 800\u00b0C, the same technique used elsewhere in JLC\u2019s enamel programme. Two case references anchor most of the run: 246.6.79 in platinum, generally for the larger Famous Nudes editions (3 to 10 pieces per subject), and 246.2.79 in pink gold, used both for smaller 5-piece runs of some Famous Nudes and Voyages et D\u00e9couvertes subjects and for genuine one-off commissions. The range was organised around four recurring themes \u2014 Famous Nudes, Voyages et D\u00e9couvertes (\u201cVoyages of Discovery\u201d: named cities and landmarks including New York, Singapore, Constantinople, Venice, the Great Wall, and the Silk Road), Chinese Zodiac, and Grand Feu \u2014 plus occasional one-off personalised commissions. Collectors describe the series as having gone quiet for some years before resurfacing; as of the mid-2010s Jaeger-LeCoultre still offered the concept as a custom order even after it left the standard catalogue.',
  links:[],
  pieces:[
    { slot:'ecl-newyork', name:'“Port of New York”', ref:'246.6.79', conf:'ok', artist:'2008 \u00b7 platinum',
      group:'Voyages of Discovery', groupNote:'Officially “Voyages et D\u00e9couvertes” \u2014 cityscapes and travel imagery from 2006 \u00b7 platinum runs of 3, pink gold runs of 5',
      text:'A view of New York harbour behind the shutter \u2014 one of a small set of port cities and travel views produced alongside the painting-based themes, on the same case references as the rest of the \u00c9clipses range.' },
    { slot:'ecl-singapore', name:'“Port of Singapore”', ref:'246.2.79', conf:'ok', artist:'2008 \u00b7 pink gold',
      text:'A view of Singapore\u2019s harbour, part of the same Voyages of Discovery port-city set as Port of New York, this one in pink gold.' },
    { slot:'ecl-constantinople', name:'“Vue de Constantinople” (View of Constantinople)', ref:'377 64 09 (platinum) \u00b7 246.2.79 (pink gold)', conf:'ok', artist:'2008 \u00b7 pink gold and platinum',
      text:'A view of Constantinople (Istanbul), part of the Voyages of Discovery set, made in both pink gold and platinum (ref. 377 64 09, 950 platinum).' },
    { slot:'ecl-greatwall', name:'“The Great Wall” (of China)', ref:'\u2014', conf:'ok', artist:'2008 \u00b7 pink gold and platinum \u00b7 5 pieces',
      text:'The Great Wall of China, made in both pink gold and platinum, part of a 5-piece run per metal \u2014 a landmark rather than a city view, but grouped with the same Voyages of Discovery travel theme and edition pattern as the port cities above.' },
    { slot:'ecl-silkroad', name:'“The Silk Road”', ref:'Q3776413 (platinum) \u00b7 246.2.79 (pink gold)', conf:'ok', artist:'2006 \u00b7 platinum and pink gold',
      text:'A miniature depicting the Silk Road, produced in both platinum and pink gold \u2014 confirming the theme\u2019s official French name, \u201cVoyages et D\u00e9couvertes,\u201d directly from an owner\u2019s own description of the piece. The platinum version is notably heavy on the wrist given the solid case: 29 mm wide, 39.5 mm long, on a white gold Jaeger-LeCoultre double deployant clasp, calibre 849 (19 jewels). The platinum run is limited to 3 pieces \u2014 smaller than the 5-piece pink gold city views, consistent with the smaller-platinum-run pattern seen in Famous Nudes.' },
    { slot:'ecl-larochelle', name:'“The Port of La Rochelle” — after Claude-Joseph Vernet', ref:'Q3772421', conf:'ok', artist:'18-carat pink gold',
      text:'A reproduction of Vernet\u2019s 1762 painting of the port of La Rochelle, one of the French master\u2019s celebrated series of French port views. Per Jaeger-LeCoultre\u2019s own catalogue description, the enameller combined traditional opaque enamel with translucent enamel over a guilloch\u00e9 ground specifically to light the sky \u2014 a technique distinguishing this piece from the flatter colour fields used on most other \u00c9clipses miniatures.' },

    { slot:'ecl-love-terrace', name:'“Love on Terrace Scene”', ref:'\u2014', conf:'ok', artist:'18-carat pink gold',
      group:'Grand Feu', groupNote:'Named-artist single subjects, the Chinese Zodiac design, and bespoke commissions',
      text:'A reproduction of a classic theme from Mughal miniature painting \u2014 a couple on a terrace \u2014 rather than a Western old master, per Jaeger-LeCoultre\u2019s own catalogue description. Little else about this piece is documented beyond the subject and case metal.' },
    { slot:'ecl-malevich', name:'Homage to Kazimir Malevich', ref:'\u2014', conf:'ok', artist:'2011 \u00b7 pink gold \u00b7 5 pieces',
      text:'Made with the State Russian Museum of St Petersburg\u2019s assistance, to mark both the Reverso\u2019s 80th anniversary and the opening of Jaeger-LeCoultre\u2019s St Petersburg boutique: a miniature of Malevich\u2019s <em>Peasant Woman</em> (1931), from the final and most complex period of the Suprematist painter\u2019s career, still held by the State Russian Museum today. Pink gold, five pieces.' },
    { slot:'ecl-vangogh-sunflowers', name:'Van Gogh — “Sunflowers”', ref:'\u2014', conf:'ok', artist:'2015 \u00b7 rose gold \u00b7 5 pieces',
      text:'Made with Amsterdam\u2019s Van Gogh Museum for the 125th anniversary of the artist\u2019s death: one of Van Gogh\u2019s 1888 <em>Sunflowers</em> still lifes, the series he painted to impress fellow painter Gauguin by building a powerful image from variations on a single colour. Rose gold, calibre 849 (1.85 mm thick, 35-hour reserve), five pieces; the watch itself is displayed at the Van Gogh Museum.' },
    { slot:'ecl-vangogh-selfportrait', name:'Van Gogh — “Self-Portrait as a Painter”', ref:'\u2014', conf:'ok', artist:'2016 \u00b7 platinum \u00b7 4 pieces',
      text:'The second Van Gogh collaboration with the Van Gogh Museum, for the Reverso\u2019s 85th anniversary: his 1887\u20131888 <em>Self-Portrait as a Painter</em>, a work Van Gogh himself described in a letter to his sister as exhausting to make \u2014 \u201cwrinkles in forehead and around the mouth, stiffly wooden, a very red beard, quite unkempt and sad.\u201d Platinum, calibre 849, four pieces, sold only at the Van Gogh Museum boutique in Amsterdam for roughly \u20ac101,000 excluding tax.' },
    { slot:'ecl-zep-titeuf', name:'Zep — “Titeuf”', ref:'\u2014', conf:'ok', artist:'2011 \u00b7 pink gold \u00b7 unique piece',
      text:'Not a themed edition but a one-off personal commission, also catalogued as a Pi\u00e8ce Unique elsewhere in this archive: Swiss cartoonist Philippe Chappuis \u2014 \u201cZep,\u201d creator of the comic character Titeuf \u2014 was invited to the manufacture for the Reverso\u2019s 80th anniversary and designed a dial showing Titeuf climbing inside the watch\u2019s own gear train, a nod to Chaplin in <em>Modern Times</em>. More than eighty hours of enamel work. Unveiled at the Veytay Polo Club during the Jaeger-LeCoultre Polo Masters Geneva, then auctioned at Artcurial in Paris on 29 November 2011 in aid of the Association Mon\u00e9gasque contre les Myopathies.' },
    { slot:'ecl-zodiac', name:'Chinese Zodiac', ref:'246.2.79 / Q3772402', conf:'ok', artist:'2013 \u00b7 pink or rose gold \u00b7 28\u201329 pieces',
      text:'Not twelve individual animal watches but one design showing the full Chinese zodiac in white over a blue ground, by the Japanese painter Hiroshi Senju \u2014 an unusual choice of a living, named contemporary artist rather than a historical master. 46.6 \u00d7 29.4 mm, snap-on case-back, closed position reveals a plain gold dial with black Arabic numerals. Calibre 849, 123 parts, 19 jewels, 35-hour reserve. Sources disagree slightly on the edition size \u2014 Antiquorum\u2019s cataloguing gives 29 pieces on case reference 246.2.79, while a separate retailer listing (commercial reference Q3772402) gives 28; one recorded example was numbered in the high twenties, consistent with the smaller 28-piece figure.' },

    { slot:'ecl-ingres', name:'“The Source” — Jean-Auguste-Dominique Ingres', ref:'likely 246.6.79', conf:'partial', artist:'Famous Nudes \u00b7 platinum \u00b7 3 pieces',
      group:'Famous Nudes', groupNote:'8+ subjects \u00b7 platinum (3\u201310 pieces) and pink gold (5 pieces) versions',
      text:'A nude holding an upturned pitcher, water flowing out \u2014 Ingres\u2019s 19th-century academic classic, reproduced in miniature enamel. This example\u2019s case-back was left plain, though JLC could decorate the reverse as well on request. Other Famous Nudes subjects share the platinum case reference 246.6.79; this piece likely does too, though it hasn\u2019t been individually confirmed.' },
    { slot:'ecl-klimt', name:'“Judith” — Gustav Klimt', ref:'likely 246.6.79', conf:'partial', artist:'Famous Nudes \u00b7 platinum \u00b7 3 pieces',
      text:'Klimt\u2019s gilded, unsettling <em>Judith</em>, one of the Vienna Secession\u2019s defining images, shrunk onto a Reverso dial \u2014 the earlier of two Klimt subjects in the octet, the other being <em>The Kiss</em>.' },
    { slot:'ecl-renoir', name:'“La Baigneuse” (The Bather) — Pierre-Auguste Renoir', ref:'377 64 01 (platinum) \u00b7 246.2.79 (pink gold)', conf:'ok', artist:'Famous Nudes \u00b7 pink gold and platinum',
      text:'Renoir\u2019s <em>La Baigneuse</em>, one of his many bather studies, completing the roster of named Famous Nudes subjects alongside Ingres, Klimt, and Botticelli. Made in both platinum (ref. 377 64 01, 950 platinum) and pink gold (ref. 246.2.79) \u2014 the pink gold example catalogued by Sotheby\u2019s dated circa 2007.' },
    { slot:'ecl-botticelli', name:'“Primavera” — Sandro Botticelli', ref:'246.6.79', conf:'ok', artist:'Famous Nudes \u00b7 platinum',
      text:'Botticelli\u2019s <em>Primavera</em> (c. 1480), one of the most reproduced paintings in Western art, reduced to a Reverso dial \u2014 confirmed via Christie\u2019s cataloguing of an example on the platinum Famous Nudes case reference 246.6.79.' },
    { slot:'ecl-ingres-turkishbath', name:'“The Turkish Bath” — Jean-Auguste-Dominique Ingres', ref:'246.6.79 (platinum) / 246.2.79 (pink gold)', conf:'ok', artist:'Famous Nudes',
      text:'A second Ingres subject in the octet alongside <em>The Source</em>: <em>Le Bain Turc</em> (1862), Ingres\u2019s crowded, circular late-career harem scene. Made in at least two metals \u2014 a platinum example on the standard Famous Nudes case reference 246.6.79 (Sotheby\u2019s dates one to circa 2006), and a pink gold version on 246.2.79 (Antiquorum) \u2014 suggesting Famous Nudes subjects were produced in small pink gold runs of 5 alongside the platinum editions.' },
    { slot:'ecl-klimt-kiss', name:'“The Kiss” — Gustav Klimt', ref:'Q3772434 / 246.6.79', conf:'ok', artist:'2008 \u00b7 platinum \u00b7 10 pieces',
      text:'A second Klimt subject alongside <em>Judith</em> and <em>Dana\u00eb</em>: his best-known image, <em>The Kiss</em> (1907\u20131908), on the same 246.6.79 platinum case \u2014 but in a run of 10 rather than the 3 or 5 pieces documented for other Famous Nudes subjects, suggesting edition size varied by design rather than being fixed across the whole series. Distinct commercial reference (Q3772434) from the pink gold Dana\u00eb (Q3772408), confirming these are two separate Klimt watches within the range rather than metal variants of one design.' },
    { slot:'ecl-danae', name:'“Danaë” — Gustav Klimt', ref:'Q3772408 / 246.2.79', conf:'ok', artist:'Famous Nudes \u00b7 pink gold \u00b7 5 pieces \u00b7 c. 2006\u20132012',
      text:'A third Klimt subject in the range, distinct from <em>Judith</em> and <em>The Kiss</em>: his <em>Dana\u00eb</em> (1907\u20131908), reinterpreting the Greek myth of Zeus visiting the imprisoned princess Dana\u00eb as a shower of gold, from which she conceived Perseus \u2014 Klimt turns the myth into a curled, fetal-shaped figure wrapped in purple fabric, the gold stream running through it, described by the Klimt Foundation as a deliberately sensual reworking of the source story. Phillips dates the Famous Nudes project generally to 2006, the year both the Reverso\u2019s 75th anniversary and the \u00c9clipses model itself arrived, though individual examples were evidently completed and sold later \u2014 this one, case No. 2\u2019542\u2019744, dates to around 2012. Pink gold, approximately 29 \u00d7 47 mm, manual calibre 849 (roughly 35-hour reserve), five pieces; listed at \u20ac72,000 in Jaeger-LeCoultre\u2019s own October 2012 European price list.' },
    { slot:'ecl-gabrielle-destrees', name:'“Presumed Portrait of Gabrielle d\u2019Estrées and Her Sister, the Duchess of Villars”', ref:'246.2.79', conf:'ok', artist:'Famous Nudes \u00b7 pink (rose) gold \u00b7 5 pieces \u00b7 sold from 2009',
      text:'The one Famous Nudes subject in this archive not attributed to a named painter \u2014 the original, a Second School of Fontainebleau work from around 1594 now in the Louvre, has never had its artist identified, despite entering the museum\u2019s collection in 1937. It shows two women, believed to be Gabrielle d\u2019Estr\u00e9es (mistress of King Henry IV of France) and her sister the Duchess of Villars, sitting in a bath; the intimate hand gesture is generally read as a symbol of Gabrielle\u2019s pregnancy with Henry\u2019s illegitimate child, the ring she holds a further reference to the king. Rose gold, calibre 849, 29 \u00d7 39 mm, black Arabic numerals printed directly onto the rose gold shutters. Limited to 5 pieces; one example was originally sold by Jaeger-LeCoultre on 30 April 2009 and later resold at Bonhams in June 2016 for £27,500 including premium.' },
    { slot:'ecl-kamasutra', name:'An erotic scene (sometimes described as Kama Sutra)', ref:'Q3776408 / 246.6.79 (platinum) \u00b7 246.2.79 (pink gold)', conf:'ok', artist:'Famous Nudes \u00b7 platinum and pink gold',
      text:'Catalogued by Christie\u2019s simply as an unnamed \u201cerotic scene,\u201d on the platinum Famous Nudes case (case No. 2\u2019454\u2019653), one of 3 pieces \u2014 matching the run size reported elsewhere for the Ingres <em>Source</em>. Also produced in pink gold, following the same dual-metal pattern as other Famous Nudes subjects. Other, secondary sources describe a Famous Nudes subject drawn from the Kama Sutra; this may be the same piece, though the auction house\u2019s own description doesn\u2019t use that name, so the two aren\u2019t stated as identical with certainty.' },
    { slot:'ecl-unique-erotic', name:'A unique erotic scene (pink gold)', ref:'246.2.79', conf:'ok', artist:'Unique piece',
      text:'Not part of the numbered Famous Nudes run at all: a one-off pink gold \u00c9clipses with its own erotic enamel scene, on the separate 246.2.79 case reference. Catalogued by Christie\u2019s as a genuine unique piece \u2014 likely a bespoke commission in the same spirit as Zep\u2019s Titeuf watch below.' },
    { slot:'ecl-dormeuse', name:'“La Dormeuse” (The Sleeping Woman)', ref:'246.2.79 (pink gold)', conf:'ok', artist:'Famous Nudes \u00b7 pink gold and platinum \u00b7 c. 2009',
      text:'A reclining-nude subject in the Famous Nudes run, made in both pink gold and platinum, limited to 5 pieces per metal. Sotheby\u2019s catalogued the pink gold example only by its French title, without naming the original painting or artist behind it.' },
    { slot:'ecl-annunciation', name:'“The Annunciation to the Blessed Virgin Mary”', ref:'246.2.79', conf:'ok', artist:'Famous Nudes \u00b7 pink gold \u00b7 5 pieces',
      text:'The one confirmed subject in the entire \u00c9clipses range that isn\u2019t a nude at all, despite being catalogued within the \u201cFamous Nudes\u201d series: the Angel Gabriel\u2019s announcement to the Virgin Mary. Sotheby\u2019s own catalogue note names the scene directly and confirms a run of 5 examples. Why a religious Annunciation scene sits inside a line explicitly branded around nude paintings isn\u2019t explained by the source \u2014 possibly a cataloguing inconsistency on Jaeger-LeCoultre\u2019s own part, or evidence that \u201cFamous Nudes\u201d had become a loose umbrella name for the pink gold 5-piece runs generally, not a strict thematic rule.' }
  ]
},

{ slug:'gt-duoface-premiere', group:'commemorative', unlisted:true,
  name:'Grande Taille Duoface \u201cPremi\u00e8re\u201d',
  year:'1990s', craft:'Made for the Japanese market', cal:'Cal. 854',
  limited:'39 pieces (gold) \u00b7 300 pieces (steel), per colour', case:'270.1.54 (gold) \u00b7 270.8.54 (steel)',
  blurb:'Three dial colours, two metals each \u2014 six watches built for one market.',
  intro:'A Grande Taille Duoface issued for Japan in three dial colours \u2014 green, red and blue \u2014 each offered in both yellow gold and stainless steel. The gold versions were capped at 39 pieces per colour, the steel at 300, for six watches in total sharing one calibre and one case architecture, distinguished only by dial and metal.',
  links:[],
  pieces:[
    { slot:'le-premiere-green-yg', name:'\u201cPremi\u00e8re Green\u201d, yellow gold', ref:'270.1.54', conf:'ok', artist:'Yellow gold \u00b7 39 pieces',
      text:'One of three colours in the Japanese Premi\u00e8re Duoface run; the gold versions were 39 pieces each.' },
    { slot:'le-premiere-green-st', name:'\u201cPremi\u00e8re Green\u201d, steel', ref:'270.8.54', conf:'ok', artist:'Stainless steel \u00b7 300 pieces',
      text:'The steel version of the green Premi\u00e8re.' },
    { slot:'le-premiere-red-yg', name:'\u201cPremi\u00e8re Red\u201d, yellow gold', ref:'270.1.54', conf:'ok', artist:'Yellow gold \u00b7 39 pieces',
      text:'The red dial in yellow gold.' },
    { slot:'le-premiere-red-st', name:'\u201cPremi\u00e8re Red\u201d, steel', ref:'270.8.54', conf:'ok', artist:'Stainless steel \u00b7 300 pieces',
      text:'The red Premi\u00e8re in steel.' },
    { slot:'le-premiere-blue-yg', name:'\u201cPremi\u00e8re Blue\u201d, yellow gold', ref:'270.1.54', conf:'ok', artist:'Yellow gold \u00b7 39 pieces',
      text:'The blue dial in yellow gold, completing the trio.' },
    { slot:'le-premiere-blue-st', name:'\u201cPremi\u00e8re Blue\u201d, steel', ref:'270.8.54', conf:'ok', artist:'Stainless steel \u00b7 300 pieces',
      text:'The blue Premi\u00e8re in steel.' }
  ]
}
];

/* ---------------------------------------------------------------
   COMMEMORATIVE EDITIONS
   Not Métiers Rares art pieces — club editions, boutique
   exclusives, anniversary runs and numbered complications.
   --------------------------------------------------------------- */
const EDITIONS = [
  { slot:'ed-magritte-1', year:'2016', name:'Reverso in tribute to Ren\u00e9 Magritte \u2014 Series 1, \u201cLa Trahison des images\u201d', ref:'\u2014', run:'5 in white gold, 15 in steel',
    cat:'Artist tribute \u00b7 Maison De Greef, Brussels',
    text:'Five years in the making, and it began as a conversation in a Brussels jeweller\u2019s shop. Charly Herscovici, president of the Magritte Foundation, was a long-standing customer of Maison De Greef \u2014 the oldest jeweller in Belgium, run by the same family since 1848 \u2014 and one day the talk with Jacques Wittmann turned to a watch Magritte himself would not have disowned. The result marks two anniversaries at once: the Reverso\u2019s 85th in 2016, and the 50th of Magritte\u2019s death in 2017. The case-back carries a lacquered engraving of <em>The Treachery of Images</em> (1929) \u2014 the pipe beneath the schoolchild\u2019s handwriting reading \u201cCeci n\u2019est pas une pipe\u201d. Design director Janek Deleskiewicz admitted the flat, absolutely even colour was \u201ca real challenge\u201d. Five pieces in white gold as the Grande Reverso Ultra Thin 1931, fifteen in steel as the Tribute to 1931.' },

  { slot:'ed-magritte-2', year:'2017', name:'Reverso in tribute to Ren\u00e9 Magritte \u2014 Series 2, \u201cL\u2019Oiseau de Ciel\u201d', ref:'Q3828420', run:'33 pieces',
    cat:'Artist tribute \u00b7 Maison De Greef, Brussels',
    text:'The second of a planned triptych. A Reverso Classic Large in steel whose reverse carries a miniature of Magritte\u2019s <em>L\u2019Oiseau de Ciel</em> (1966) \u2014 the silhouette of a dove filled with clouds, its blue picked up by the numerals on the dial. The edition size is the quiet joke: thirty-three pieces, for 1833, the year the manufacture was founded. A third series was promised within two years.' },

  { slot:'ed-juventus', year:'\u2014', name:'Reverso Grande Taille \u201cJuventus 100th\u201d', ref:'270.3.62 (also seen as 275.3.62)', run:'100 pieces',
    cat:'Club centenary \u00b7 Italy',
    text:'Made for the centenary of Juventus F.C., in white gold for the Italian market. Reference discrepancy worth resolving: sources give both 270.3.62 and 275.3.62.' },

  { slot:'ed-torino', year:'\u2014', name:'Reverso Grande Taille \u201cTorino F.C. 100th\u201d', ref:'270.2.62', run:'25 pieces',
    cat:'Club centenary \u00b7 Italy',
    text:'The other Turin club, in pink gold \u2014 and far rarer than the Juventus edition at twenty-five pieces against a hundred. Together the two record a city\u2019s footballing rivalry on the back of the same watch.' },



  { slot:'ed-romanelli', year:'\u2014', name:'Reverso GT \u201cDarren Romanelli \u2014 75th Anniversary\u201d', ref:'270.8.62', run:'50 pieces',
    cat:'Anniversary collaboration \u00b7 Colette, Paris',
    text:'A collaboration with the American designer Darren Romanelli marking the Reverso\u2019s 75th anniversary, sold through the Paris concept store Colette \u2014 an unusually streetwear-adjacent partner for a house like this, and only fifty pieces.' },

  { slot:'ed-mondriaan', year:'2017', name:'Reverso Tribute to Piet Mondriaan \u2014 De Stijl / Steltman centenary', ref:'\u2014', run:'25 pieces',
    cat:'Double centenary \u00b7 The Hague',
    text:'Commissioned to mark two Dutch hundredths at once: the founding of the art movement <em>De Stijl</em> in Leiden in 1917, and the founding of the Hague jeweller Steltman the same year. The front gives nothing away \u2014 a standard Reverso Classic Large Small Second in steel, calibre 822/2, with no mention of Mondriaan, De Stijl or Steltman anywhere on the dial. Turn it over and there is a hand-painted miniature of Mondriaan\u2019s 1921 <em>Composition with Large Red Plane, Yellow, Black, Grey and Blue</em>. The M\u00e9tiers Rares atelier had to invent a new technique for it: De Stijl demands dead-straight lines and flat, absolutely even fields of single colour, which miniature enamel painting does not naturally produce. Each miniature is kiln-dried and sealed under colourless varnish, and because each is painted by hand every watch is subtly unique. Sold only at Steltman in The Hague.' },

  { slot:'ed-london', year:'2015', name:'Grande Reverso Ultra Thin 1931 \u201cLondon Edition\u201d', ref:'Q278853L', run:'26 pieces',
    cat:'Boutique opening \u00b7 London',
    text:'Made to mark the opening of the Bond Street boutique and sold only there, in person, to selected clients \u2014 26 pieces in all. It sold out before reaching the wider market.' },

  { slot:'ed-ny-skyline', year:'\u2014', name:'Grande Reverso Ultra Thin \u201cTribute to 1931\u201d New York Skyline', ref:'\u2014', run:'3 pieces',
    cat:'Boutique opening \u00b7 New York',
    text:'Very possibly the rarest Reverso of the modern era: three pieces, each with the New York skyline on the case-back. The design was lifted from an advertisement Jaeger-LeCoultre ran in <em>The New Yorker</em> to announce a boutique opening \u2014 an advertisement turned into an engraving turned into a watch.' },

  { slot:'ed-acmilan', year:'2011', name:'Reverso in the colours of AC Milan', ref:'\u2014', run:'For club managers, coaches and players',
    cat:'Club partnership \u00b7 Italy',
    text:'Made by the Métiers Rares craftsmen for the managers, coaches and players of AC Milan, in the club\u2019s red and black. Announced by Adriano Galliani, then the club\u2019s Executive Vice President and CEO, who noted the shared ground between the two houses \u2014 the club was 112 years old at the time, the manufacture had been running since 1833. Alongside the team pieces, an individually personalised Reverso was made for Galliani himself.' },

  { slot:'ed-madmen', year:'2012', name:'Grande Reverso Ultra Thin Tribute to \u201cMad Men\u201d', ref:'\u2014', run:'25 pieces',
    cat:'Television \u00b7 Sterling Cooper Draper Pryce',
    text:'Twenty-five pieces, each with the fictional Sterling Cooper Draper Pryce logo engraved on the case-back beside its edition number. Steel, heritage dial, calibre 822. The partnership was real rather than a licensing deal: show creator Matthew Weiner had put a vintage JLC Memovox on Don Draper\u2019s wrist from season one, and a Reverso Classique later \u2014 and JLC\u2019s North American president Philippe Bonay set just two rules for the edition, a very small run and a model true to the period. Each watch shipped in a walnut box with the agency logo, and a letter written in character as Roger Sterling.' },

  { slot:'ed-wakaya', year:'2016', name:'Grande Reverso 1931 Seconde Centrale \u201cWakaya\u201d', ref:'278.3.66 (Q381357J)', run:'Special edition, presented rather than sold at retail',
    cat:'Personal commission \u00b7 Fiji',
    text:'A white gold Reverso 1931 Seconde Centrale, its case-back engraved and enamelled with the logo of The Wakaya Club & Spa and the initials of David H. Gilmour beneath it. Gilmour, a Canadian-born entrepreneur, bought the small private island of Wakaya in Fiji and opened the Club there in 1990 on a former coconut plantation \u2014 eight suites that drew guests including Tom Cruise, Bill and Melinda Gates, and Keith Richards. Noticing his guests preferred imported Swiss water, he traced a silica-rich aquifer beneath Viti Levu\u2019s volcanic highlands and in 1996 launched Fiji Natural Artesian Water, which went on to become the second-best-selling imported bottled water in the United States after San Pellegrino. This watch, case No. 3\u2019033\u2019453, automatic calibre 966A, was presented to Gilmour personally rather than sold through the ordinary retail run.' },

  { slot:'ed-helvetia', year:'1997', name:'Reverso \u201cHelvetia\u201d', ref:'250.340.867 H', run:'150 pieces',
    cat:'National anniversary \u00b7 Switzerland',
    text:'Made for the 150th anniversary of the Swiss Confederation: an 18k white gold Reverso Classic with a black dial, painted silver Roman numerals, dauphine hands, and manual-wound calibre 846. Jaeger-LeCoultre\u2019s own certificate of authenticity, dated Le Sentier, 3 March 1997, describes it precisely: the watch \u201cis part of a unique and limited series of 150 pieces produced by the Manufacture Jaeger-LeCoultre in Switzerland,\u201d and \u201cthe back of the 18ct solid gold reversible case is decorated with a special engraving, which commemorates the 150 years of the Swiss Confederation\u201d \u2014 the Swiss flag, engraved into the case-back beside the serial number.' },

  { slot:'ed-geneva-fountain', year:'1995', name:'Reverso \u201cGeneva Fountain\u201d', ref:'257.342.626 (yellow gold) / 270.3.62 (white gold)', run:'50 pieces \u2014 30 yellow gold, 20 white gold',
    cat:'City edition \u00b7 Geneva',
    text:'A white or yellow gold Reverso with small seconds and a clean guilloch\u00e9 dial on the front; the reverse carries an engraved skyline of Geneva \u2014 the Jet d\u2019Eau fountain and the Cathedral of St. Pierre \u2014 set with 40 diamonds (0.16 ct total). Twenty examples were made in white gold, thirty in yellow, fifty in total.' },

  { slot:'ed-rio', year:'\u2014', name:'Grande Reverso Night & Day \u201cRio de Janeiro\u201d', ref:'Q380848M', run:'85 pieces',
    cat:'Landmark anniversary \u00b7 Brazil',
    text:'A double anniversary: 85 pieces for the 85th anniversary of both Rio\u2019s Christ the Redeemer statue and the Reverso itself. Stainless steel, automatic calibre 967B, blue dial with a 24-hour day/night indicator at six; the case-back carries a solid engraving of the statue. 46.8 \u00d7 27.4 mm, 9.1 mm thick, 42-hour reserve.' },

  { slot:'ed-singapore-sg50', year:'2015', name:'Grande Reverso Night & Day \u201cSingapore SG50\u201d', ref:'Q3808420', run:'50 pieces',
    cat:'National anniversary \u00b7 Singapore',
    text:'Marking 50 years of Singapore\u2019s independence (1965\u20132015): steel case, silver-toned guilloch\u00e9 Clous de Paris dial, blued baton hands and a blue day/night indicator. The case-back carries a map of Singapore filled in red and white lacquer \u2014 the flag\u2019s colours \u2014 with \u201c1965\u20132015\u201d beneath it and no individual edition numbering. Automatic calibre 967B, 46.8 \u00d7 27.4 mm, sold only at the Jaeger-LeCoultre boutiques at ION Orchard and Marina Bay Sands.' },

  { slot:'ed-rama-ix', year:'\u2014', name:'Reverso 1931 \u201cKing Rama IX of Thailand\u201d', ref:'Q380841G', run:'39 pieces',
    cat:'Royal tribute \u00b7 Thailand',
    text:'Thirty-nine pieces \u2014 3 for the colours of the Thai flag, 9 for Rama IX, the ninth king of the Chakri dynasty, who died in 2016 after a 70-year reign. A deep yellow dial in his royal colour reads as \u201cdawn\u201d; the case-back is engraved with Wat Arun, the Temple of Dawn. Automatic calibre 967B, 42-hour reserve, railway minute track with Art Deco markers around the day/night indicator.' },

  { slot:'ed-kuwait-25th', year:'2016', name:'Grande Reverso 976 \u201c25th Anniversary of Kuwait\u201d', ref:'278.2.56', run:'25 pieces',
    cat:'National anniversary \u00b7 Kuwait',
    text:'Rose gold, marking the 25th anniversary of Kuwait\u2019s 1991 liberation at the end of the Gulf War. A green dial with vertical guilloch\u00e9 in the centre carries scarlet red numerals at 2 and 5 o\u2019clock \u2014 spelling out \u201c25\u201d across the dial \u2014 alongside sober Arabic numerals and sword hands, echoing the Kuwaiti flag. Self-winding calibre 967B, 200 parts, 42-hour reserve. Issued alongside a steel sibling (278.8.56) marking Kuwait\u2019s 55th National Day the same year.' },

  { slot:'ed-kuwait-55th', year:'2016', name:'Grande Reverso 976 \u201c55th Anniversary of Kuwait\u201d', ref:'278.8.56', run:'55 pieces',
    cat:'National anniversary \u00b7 Kuwait',
    text:'The steel counterpart to the 25th Anniversary rose gold piece above, marking Kuwait\u2019s 55th National Day (55 years since independence from British protection in 1961) rather than the Gulf War liberation. Same green dial and flag-colour logic, but here a single scarlet red \u201c55\u201d replaces the \u20185\u2019 at five o\u2019clock. 46 \u00d7 27 \u00d7 9 mm, self-winding calibre 967B, delivered with three straps including two by Casa Fagliano.' },

  { slot:'ed-italica', year:'2011', name:'Grande Reverso Ultra Thin \u201cItalica\u201d', ref:'277.8.62 (steel) / 277.1.62 (rose gold)', run:'150 pieces per metal',
    cat:'National anniversary \u00b7 Italy',
    text:'For the 150th anniversary of Italian unification (and close to the Reverso\u2019s own 80th): the thinnest Grande Reverso line at the time, 7.2 mm, manual calibre 822 (134 parts in 2.94 mm of height). The silvered dial\u2019s hour markers print in red, and the numeral \u20188\u2019 is replaced by a red \u2018R\u2019 \u2014 the Roman numeral for 80, the Reverso\u2019s age that year. Issued in steel and rose gold; sources disagree on the exact split, with one account giving 150 pieces of each metal and another giving 150 steel to 50 rose gold.' },

  { slot:'ed-ceniceros', year:'2011', name:'Grande Reverso 976 \u201cGuillermo Ceniceros\u201d', ref:'Q373847M (steel) / Q373247M (rose gold)', run:'50 pieces steel \u00b7 10 pieces rose gold',
    cat:'Artist collaboration \u00b7 Mexico',
    text:'For the Reverso\u2019s 80th anniversary and the opening of Jaeger-LeCoultre\u2019s Mexico City boutique in Polanco, the manufacture invited Mexican muralist, painter and engraver Guillermo Ceniceros \u2014 born 1939 in El Salto, Durango, and a member of David Alfaro Siqueiros\u2019s mural team \u2014 to use the Reverso\u2019s case-back as a canvas. The steel version (50 pieces) depicts \u201cman\u2019s duality from a modernistic perspective\u201d in engraving and lacquer; the rose gold version (10 pieces) shows \u201cman in motion,\u201d engraved directly into the gold. Both share the same Grande Reverso 976 base: 48.5 \u00d7 30 mm, manual calibre 976 (151 parts, 19 jewels, 48-hour reserve), a black vertically guilloch\u00e9 Clous de Paris dial, and vintage-orange numerals and hands on a black alligator strap.' },

  { slot:'ed-magritte-cinema', year:'2014', name:'Reverso \u201cLes Magritte du Cin\u00e9ma 2014\u201d', ref:'\u2014', run:'Presentation pieces, not a numbered retail edition',
    cat:'Award presentation \u00b7 Brussels',
    text:'Not a commercial edition but an award piece: the case-back engraved \u201cLES MAGRITTE DU CIN\u00c9MA 2014\u201d in the ceremony\u2019s own colours, presented to Best Actor Beno\u00eet Poelvoorde (for <em>Une place sur la terre</em>) and Best Actress Pauline \u00c9tienne (for <em>La Religieuse</em>) at the fourth Magritte Awards \u2014 Belgium\u2019s French-language film prize, organised by the Acad\u00e9mie Andr\u00e9 Delvaux since 2011 and named, like the Ren\u00e9 Magritte enamel Reversos elsewhere in this archive, after the painter, though the two projects are unrelated. That year\u2019s honorary award went to director Emir Kusturica, who received a matching personalised Atmos clock rather than a watch \u2014 confirmed by period photographs of Kusturica holding the Atmos beside \u00c9tienne holding her Reverso at the partners\u2019 dinner in Brussels.',
    src:'Jaeger-LeCoultre press materials, Feb 2014' },

  { slot:'ed-osesp', year:'2014', name:'Grande Reverso \u201cOSESP 60 Anos\u201d', ref:'\u2014', run:'50 watches reported (steel and gold)',
    cat:'Fundraising partnership \u00b7 Brazil',
    text:'Engraved \u201c60 ANOS OSESP 2014\u201d \u2014 the circular anniversary logo at left can read as the letters \u201cSESP\u201d at a glance \u2014 for the 60th anniversary of the Orquestra Sinf\u00f4nica do Estado de S\u00e3o Paulo, founded 1954. Fifty Grande Reversos were made and sold to fund roughly 70% of the cost of OSESP\u2019s free Sunday-morning concerts at Sala S\u00e3o Paulo, reported at the time as reaching some 40,000 people; contemporary Brazilian pricing ran around R$28,000 in steel and R$57,000 in gold, though the exact split between metals across the 50 watches isn\u2019t documented. The partnership extended beyond the watch: Jaeger-LeCoultre took on the roughly R$18,000 annual maintenance cost of the monumental public clock at Pra\u00e7a J\u00falio Prestes, the historic railway station that houses Sala S\u00e3o Paulo, and proposed restoring its long-closed interior clock room \u2014 timekeeping, music, and a public building tied together in one sponsorship.',
    src:'Folha de S.Paulo, May 2014' },

  { slot:'ed-batman-forever', year:'1995', name:'Reverso Grande Taille \u201cBatman Forever\u201d', ref:'270.8.62', run:'35 pieces (30 steel, 5 yellow gold) \u2014 not for sale',
    cat:'Film promotion \u00b7 Warner Bros.',
    text:'Made alongside <em>Batman Forever</em>, Val Kilmer\u2019s 1995 turn as the character: a black bat-symbol on the case-back with \u201cFOREVER\u201d in white capitals running through it, on the Grande Taille introduced four years earlier for the Reverso\u2019s 60th anniversary. None of the 35 watches \u2014 30 steel, 5 in 18k yellow gold \u2014 were ever sold; they went to cast, crew, and promotional or charity use, including at least one example shown at the 1998 Carousel of Hope Ball silent auction for the Children\u2019s Diabetes Foundation. Only the first example is confirmed to remain in Jaeger-LeCoultre\u2019s own collection, occasionally shown at watch events; most of the other 34 have never resurfaced. Manual calibre 822, 21 jewels.',
    src:'Auction house cataloguing, various; Carousel of Hope Ball, 1998' },

  { slot:'ed-batman-darkknight', year:'2012', name:'Grande Reverso Ultra Thin Tribute to 1931 \u201cThe Dark Knight Rises\u201d', ref:'277.8.62', run:'10 pieces \u2014 not for sale',
    cat:'Film promotion \u00b7 Warner Bros.',
    text:'Seventeen years after the Batman Forever edition, Jaeger-LeCoultre returned to the character for the conclusion of Christopher Nolan\u2019s trilogy: a black Bat-Shield engraved and lacquered onto the case-back of a Grande Reverso Ultra Thin Tribute to 1931, visible only when the case is flipped. In the film, Bruce Wayne wears a Reverso Grande Date on-screen. Ten steel examples were made \u2014 reportedly for Warner Bros. executives involved in the production, along with Nolan himself \u2014 and a wider commercial release was apparently planned but never happened, leaving these ten the only examples that exist. Jaeger-LeCoultre displayed the original Reverso in its Geneva, London, Los Angeles, and Hong Kong boutiques around the film\u2019s July 2012 release.',
    src:'Auction house cataloguing, various; Jaeger-LeCoultre press materials, July 2012' },

  { slot:'ed-chemin-verite', year:'2010', name:'Reverso GT Email “Chemin de la Vérité” (The Path of Truth)', ref:'\u2014', run:'8 pieces',
    cat:'Artistic miniature \u00b7 Métiers Rares',
    text:'A yellow gold Grande Taille enamel Reverso reproducing a miniature painting titled \u201cThe Path of Truth,\u201d limited to eight pieces. Beyond the subject, edition size, and metal, little further detail on this piece has surfaced \u2014 it doesn\u2019t appear in Jaeger-LeCoultre\u2019s own major press announcements for the better-documented enamel tribute series, suggesting it may have been a smaller, quieter release.',
    src:'Sotheby\u2019s, Hong Kong, 2018' },

  { slot:'ed-greaterchina', year:'1997', name:'Reverso “Greater China” Special Edition', ref:'270.8.62', run:'97 pieces',
    cat:'National commemoration \u00b7 Hong Kong handover',
    text:'Made to mark the 1997 handover of Hong Kong from British to Chinese sovereignty: a steel Reverso whose case-back is engraved and enamelled in yellow, red, and black with a map of Greater China. The colour-coding carries real content \u2014 yellow for mainland Chinese territories, red for the wider autonomous regions (Guangxi, Tibet, Xinjiang, Inner Mongolia, Ningxia), and black for the major cities and special administrative regions (Hong Kong, Macao, Shanghai, Tianjin, Beijing). Ninety-seven pieces, accompanied by dual English and Chinese certificates of authenticity.',
    src:'Phillips, Hong Kong; Antiquorum cataloguing' },

  { slot:'ed-windsor-horseshow', year:'2005', name:'Reverso Grande Automatique, Royal Windsor Horse Show', ref:'Q3038120', run:'5 pieces',
    cat:'Equestrian sponsorship \u00b7 United Kingdom',
    text:'A steel automatic dual-time Reverso with date, made for the Royal Windsor Horse Show \u2014 fitting sponsorship territory for a watch whose case shape traces back to 1930s polo players. Limited to five pieces, an unusually small run even by this archive\u2019s standards.',
    src:'Sotheby\u2019s, Geneva, 2012' },

  { slot:'ed-orgueil-valais', year:'1996', name:'“Orgueil du Valais” (Pride of Valais)', ref:'250386', run:'65 pieces',
    cat:'Anniversary edition \u00b7 Swiss regional',
    text:'Made alongside the 65th Anniversary piece above, for the same 1996 milestone \u2014 the Reverso\u2019s manufacture sits in the Vall\u00e9e de Joux, within the canton of Vaud bordering Valais, and this white gold example\u2019s case-back is engraved with the Matterhorn (Mont Cervin), the peak that has come to symbolise the Valais region and Switzerland itself internationally. Blue dial with painted silver Roman numerals. Sixty-five pieces, first sold in September 1999.',
    src:'Antiquorum, Hong Kong, 2008' },

  { slot:'ed-st-barth', year:'2016', name:'Ultra Thin Grand Reverso “Tribute to St Barth”', ref:'277.2.62', run:'15 pieces',
    cat:'Resort / island edition \u00b7 Saint Barth\u00e9lemy',
    text:'A pink gold Ultra Thin Grand Reverso made for the French Caribbean island of Saint Barth\u00e9lemy, in the same spirit as other single-location commemorative Reversos elsewhere in this archive (Wakaya, the various MR PORTER cities) \u2014 fifteen pieces, an especially small run even among boutique-exclusive editions.',
    src:'Christie\u2019s, various' },

  { slot:'ed-dubai-expo', year:'\u2014', name:'Grande Reverso Ultra Thin Tribute to 1931 “Dubai Expo”', ref:'\u2014', run:'Unknown, likely small',
    cat:'World\u2019s Fair commemoration \u00b7 United Arab Emirates',
    text:'A steel Ultra Thin Tribute to 1931 made to mark Expo 2020 Dubai (delayed to 2021\u201322 by the pandemic) \u2014 one of relatively few Reverso editions tied to a World\u2019s Fair rather than a national anniversary, sporting event, or retailer milestone.',
    src:'Christie\u2019s, various' },

  { slot:'ed-ferrari', year:'2003', name:'Reverso Grande Taille Enamel “Ferrari”', ref:'276.1.62', run:'Unknown, likely small',
    cat:'Automotive partnership \u00b7 Italy',
    text:'A yellow gold Grande Taille whose case-back is enamelled with Ferrari\u2019s prancing horse rather than a painting or landscape \u2014 the same case reference used elsewhere in this archive for the 1996 Mucha Four Seasons and 1999 Aurore/Cr\u00e9puscule sets, here repurposed for a corporate rather than artistic commission.',
    src:'Christie\u2019s cataloguing, case no. 2\u2019074\u2019550' },

];

return { SERIES, EDITIONS };
})();
