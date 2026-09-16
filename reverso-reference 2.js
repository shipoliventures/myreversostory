/* ============================================================
   MY REVERSO STORY — SHARED REFERENCE DATA
   ------------------------------------------------------------
   Drives reverso-models.html, reverso-calibres.html and
   reverso-collection.html.

   PHOTOS
   Every entry has a "slot" id. The page looks for:
        images/<slot>.jpg
   If the file isn't there, a placeholder shows instead.
   To add a photo: save it as images/<slot>.jpg — nothing else
   to change. See PHOTO-GUIDE.md for the full slot list.

   SOURCES are noted per entry where a specific claim needs one.
   ============================================================ */

window.RR = (function () {

  /* ---------------------------------------------------------
     1. MODELS — chronological, grouped into eras
     --------------------------------------------------------- */
  const ERAS = [
    { id: 'e1', num: 'I',    name: 'The First Series',        years: '1931 – 1948',
      lede: 'From a borrowed Tavannes movement to a watch discontinued and nearly forgotten. Everything here is vintage; nothing here was ever called a "Reverso Classic".' },
    { id: 'e2', num: 'II',   name: 'The Long Silence & the Rescue', years: '1948 – 1985',
      lede: 'Twenty-four years out of the catalogue, two hundred forgotten cases, and the slow, cautious rebuild of a watch nobody at the manufacture was sure anyone still wanted.' },
    { id: 'e3', num: 'III',  name: 'The Complication Decade', years: '1991 – 2000',
      lede: 'Six anniversary limited editions, 500 pieces each, one new complication roughly every two years. The decade that turned a design classic into a horological platform.' },
    { id: 'e4', num: 'IV',   name: 'Bigger, Sportier, Grander', years: '1998 – 2012',
      lede: 'Gran\u2019Sport, Grande Taille, XGT, Grande, Squadra. The Reverso spent the 2000s growing — and building the most complicated watches it has ever carried.' },
    { id: 'e5', num: 'V',    name: 'The Modern Rationalisation', years: '2016 – 2023',
      lede: 'SIHH 2016 swept away a fragmented line-up and replaced it with three clear families: Classic, Tribute, and One. Almost everything sold today descends from this reset.' },
    { id: 'e6', num: 'VI',   name: 'Polo Club & the Valley of Inventions', years: '2024 – 2026',
      lede: 'The most recent chapters — and the one still being written.' }
  ];

  const MODELS = [
    /* ---------------- ERA I ---------------- */
    { era:'e1', slot:'m-1931-original', year:'1931', name:'Reverso (first series)',
      cal:'Tavannes cal. 064', size:'38 × 23 mm', status:'historic',
      tags:['Time only','No seconds','Staybrite steel'],
      text:'Born of a contract signed in Lausanne by Chauvot, the Geneva casemakers A. \u0026 E. Wenger, and C\u00e9sar de Trey with his son Pierre \u2014 Chauvot taking SFr 2.50 for every watch sold. They projected 5,000 pieces a year in steel and gold, in two sizes, and wanted stock in shops for Christmas 1931. Article 14 of that contract quietly permitted movements from Tavannes, Movado <em>or</em> Jaeger/LeCoultre \u2014 an escape clause in case Le Sentier could not deliver in time, which is exactly what happened. It was also marketed hard on toughness: a 1940 advertisement called it <em>la montre id\u00e9ale aux arm\u00e9es</em>, built in Staybrite steel, \u201cabsolutely stainless, and of a hardness proof against any test\u201d. No seconds hand, and the dial signed simply \u201cReverso\u201d \u2014 no Jaeger, no LeCoultre, because there was no LeCoultre movement inside to claim.',
      src:'Basha, <em>JLC: A Guide for the Collector</em>' },

    { era:'e1', slot:'m-1931-ladies', year:'1931', name:'Reverso, ladies\u2019 first series',
      cal:'Smaller Tavannes calibre', size:'approx. 28 × 16 mm', status:'historic',
      tags:['Women\u2019s model','First series only'],
      text:'A women\u2019s Reverso existed from the very beginning \u2014 which is telling, because there was no meaningful market of female polo players. It appears only in the first series (1931\u201333) and then vanishes, making it one of the scarcer vintage configurations. The line went further than the wrist: Artcurial\u2019s 2011 sale included a c.1933 Staybrite <em>pendant</em> Reverso \u2014 a keyless bag watch, case no. 14494, movement no. 38029, 34 \u00d7 23 mm \u2014 confirming the ref. 205 pendant listed in the period tables.' },

    { era:'e1', slot:'m-deluxe', year:'1932', name:'Reverso “De Luxe”',
      cal:'Tavannes cal. 064, adjusted', size:'38 × 23 mm', status:'historic',
      tags:['Sapphire crystal','Adjusted movement'],
      text:'The upgrade tier — and quietly a landmark. The De Luxe was fitted with a synthetic sapphire crystal, among the earliest known uses of sapphire in a commercial wristwatch, and a movement adjusted to two or more positions. Given that the whole watch existed because mineral glass shattered, solving the problem with sapphire rather than steel is a neat piece of irony.',
      src:'Basha, <em>JLC: A Guide for the Collector</em>' },

    { era:'e1', slot:'m-1933-410', year:'1933', name:'Reverso, LeCoultre-powered',
      cal:'LeCoultre cal. 11U / 410 (small seconds), 411 (centre seconds)', size:'38 × 23 mm', status:'historic',
      tags:['In-house movement','Two variants'],
      text:'Two years in, LeCoultre finally had its own rectangular movement — and immediately made two: the 410 with small seconds at six, and the 411 with a sweeping centre seconds. This is also the moment the dials start carrying names: Reverso-LeCoultre, Jaeger, and after 1937 Jaeger-LeCoultre. Retailer signatures appear too — Gübelin, Türler, Cartier — sometimes instead of the manufacture\u2019s own.' },

    { era:'e1', slot:'m-colour-dials', year:'1931\u20131935', name:'The lacquered colour dials',
      cal:'Tavannes 064 / Lisica', size:'various', status:'historic',
      tags:['Burgundy','Blue','Red','Black lacquer','Stern dials'],
      text:'The detail that most surprises people about vintage Reversos: they were not all silver. Artcurial\u2019s 2011 Jaeger-LeCoultre sale catalogued a run of lacquered colour dials from the very first years \u2014 a burgundy ladies\u2019 model in gold and steel from 1931, a black-lacquer piece for E. G\u00fcbelin, an extremely rare <em>blue</em> dial with painted Arabic numerals, and a red lacquered dial signed G\u00fcbelin on a Lisica calibre 864. Several of the black-lacquer dials were made by <em>Stern</em> \u2014 the Geneva dial house that would later own Patek Philippe. The modern Tribute Rouge and Bleu are not inventions; they are revivals.',
      src:'Artcurial, <em>Jaeger-LeCoultre Unique Auction</em>, Paris, 29 November 2011' },

    { era:'e1', slot:'m-retailer-signed', year:'1931\u20131948', name:'Retailer-signed and rebadged Reversos',
      cal:'Lisica 064, Lisica EF51, EWC', size:'various', status:'historic',
      tags:['G\u00fcbelin','Golay Fils & Stahl','European Watch & Clock Co.'],
      text:'A whole shadow catalogue of Reversos wearing other names. The Artcurial sale included pieces signed for <em>E. G\u00fcbelin</em>, for <em>Golay Fils & Stahl</em> on a Lisica calibre EF51, and \u2014 most intriguingly \u2014 a c.1948 example signed <em>European Watch & Clock Co. Inc.</em> of New York, running an EWC-numbered movement on an extensible steel and black-lacquer bracelet. EWC was Cartier\u2019s American arm, which puts a Cartier-affiliated Reverso in New York at the very end of the model\u2019s first life. Note also that \u201cLisica\u201d appears repeatedly as a calibre signature \u2014 the name under which the bought-in movements were marked.',
      src:'Artcurial, Paris, 29 November 2011' },

    { era:'e1', slot:'m-standard-lux', year:'1930s', name:'Reverso Standard & Reverso Lux',
      cal:'Various', size:'38 × 23 mm', status:'historic',
      tags:['Two tiers','Full reference table'],
      text:'The period sales literature defines the two grades precisely: the <em>luxury</em> version had a specially-made movement, sapphire glass, a finer dial and a top-quality leather strap; the <em>standard</em> had a robust but plainer movement and ordinary glass. Dials came silver-plated with Gothic numerals, with hour symbols, with hour symbols and a Gothic 12, and in luminous variants of each. A period catalogue page sets out the core references plainly: <em>ref. 2201</em> with the 11-line USC movement (centre seconds), <em>ref. 201</em> with the 11-line UL, and <em>ref. 651</em> with the 9-line UO \u2014 each available all-steel, all-gold, or with a steel cradle and gold case. The fuller grid runs men\u2019s De Luxe centre seconds 1101\u20131108, men\u2019s De Luxe subsidiary 101\u2013108, ladies\u2019 cord-strap De Luxe 901\u2013908, with Standard equivalents 2201\u20132208, 201\u2013208 and R701\u2013R708.',
      src:'Basha, from the 1940 French catalogue' },

    { era:'e3', slot:'m-joaillerie-101', year:'c.1990', name:'Reverso Joaillerie, Calibre 101',
      cal:'Cal. 101 \u00b7 crown on the reverse', size:'11 \u00d7 27 mm', status:'historic',
      tags:['Fully diamond-set','~4.2 ct','Smallest movement in the world'],
      text:'Predating the better-known Grande Reverso 101 by well over a decade: a white-gold ladies\u2019 Reverso with the case entirely set in diamonds \u2014 roughly 4.2 carats \u2014 running the 1929 calibre 101, still the smallest mechanical movement ever series-produced. The winding crown sits on the back of the case rather than the side. Example number 1 appeared at Artcurial in 2011.',
      src:'Artcurial, Paris, 29 Nov 2011, lot 471' },

    { era:'e1', slot:'m-hamilton-otis', year:'1930s', name:'Licensed abroad: the Hamilton “Otis”',
      cal:'—', size:'—', status:'historic',
      tags:['Licensed design','US market'],
      text:'Proof of how quickly the idea travelled. The patent was licensed out through the 1930s and Jaeger-LeCoultre supplied other firms directly. <em>Patek Philippe</em> carried a reversible watch in its range \u2014 Geneva bought movements from Le Sentier at the time, as did <em>Cartier</em>. Preferential retailers such as <em>G\u00fcbelin</em> sold Reversos signed with their own name on the dial, and the New York importer <em>European Watch \u0026 Clock Co.</em> did the same, its watches carrying EWC-marked movements. Some of the finest early dials came from <em>Stern Fr\u00e8res</em> of Geneva. In the United States <em>Hamilton</em> sold the Reverso under its own name for years. There was a reason for the American arrangement: a US instrumentation company already owned the protected name \u201cJaeger\u201d and consignments were turned back by customs, so Reversos bound for America carried only the <em>LC</em> signet on movement and dial until an agreement was reached in the early 1980s.' },

    /* ---------------- ERA II ---------------- */
    { era:'e2', slot:'m-corvo', year:'1972', name:'The Corvo Reverso',
      cal:'Cal. 840 (the oval “ovetto”)', size:'Original 1930s cases', status:'historic',
      tags:['200 pieces','The rescue'],
      text:'Not a catalogue model \u2014 a rescue, and the sequence is worth having exactly. It began with a phone call from L\u00e9on Constantin, just back from Milan, asking how many Reversos were left in stock; the general manager was out, so a secretary took the message. The answer: 200 steel cases, no movements. Days later Giorgio Corvo \u2014 JLC\u2019s sole representative for Italy, then the most trend-setting watch market in the world \u2014 called and said simply, \u201cI\u2019ll take them all.\u201d Le Sentier rang his Milan office <em>three times</em> to confirm he was serious, then tried to talk him out of it: the 9- and 11-line movements were long out of production and restarting was unthinkable in 1972. So Corvo solved it himself, fitting a movement into a case in Milan and carrying the result back to Switzerland as proof. A new dial was drawn for the run, white or grey, signed LeCoultre: one hundred of each. They sold out in a month.',
      src:'Corvo family interview, Hodinkee archive film' },

    { era:'e2', slot:'m-reverso-ii', year:'1982–83', name:'Reverso II',
      cal:'Mostly quartz; some mechanical', size:'32 × 23 mm', status:'historic',
      tags:['150th anniversary','No gadroons'],
      text:'The official relaunch, for the manufacture\u2019s 150th anniversary. Wider and squarer than the classic proportions, and — almost uniquely in the whole history of the line — without the three-line gadroon motif above and below the dial. Buyers wanted the rectangle back, so it was retired quickly. Its shape resurfaced 25 years later as the Squadra.' },

    { era:'e2', slot:'m-1985-waterproof', year:'1985', name:'The water-resistant Reverso',
      cal:'Quartz and mechanical', size:'Classic proportions', status:'historic',
      tags:['50+ part case','First water-resistant'],
      text:'The watch that made every modern Reverso possible, and it took Daniel Wild five years. The pin-in-groove guidance of 1931 gave way to a skid system — an eagle-tail-shaped skate that returns inside the cradle and cannot be disengaged — while a \u201cguard ring\u201d, effectively a second case, carried the movement on four sealed beryllium screws. The silhouette stayed identical to the millimetre while the part count went from roughly 30 to over 50 — water-resistant for the first time, and able to pivot at any point along the cradle rather than only at the far end. One of the most complicated cases in watchmaking, hidden inside something that looks unchanged since 1931.' },

    { era:'e2', slot:'m-classique', year:'late 1980s', name:'Reverso Classique',
      cal:'Cal. 846/1, or cal. 657 quartz', size:'38.5 × 23.1 mm', status:'historic',
      tags:['New “Classic” dial','Dame / Lady size'],
      text:'The first modern civilian Reverso: original proportions, but a completely new dial — black numerals on white, rail-track minute ring — which broke deliberately with the coloured, index-marked dials of the 1930s. A smaller “Dame” version arrived alongside it, same rectangle, on strap or bracelet.' },

    /* ---------------- ERA III ---------------- */
    { era:'e3', slot:'m-grande-taille', year:'1991', name:'Reverso Grande Taille',
      cal:'Cal. 822 · refs 270.2.62 / 270.1.62 / 270.5.62 / 270.8.62', size:'42 × 26 mm', status:'historic',
      tags:['New larger case','Platform for everything'],
      text:'The bigger case that gave the complications somewhere to live \u2014 and it stayed in production until 2016. It exists because the 60th-anniversary watch needed a complication calibre the existing case simply could not take: design head Janek Deleskiewicz wanted a display back, the movement grew, and G\u00fcnter Bl\u00fcmlein approved the then-radical decision to enlarge the Reverso itself. Its calibre 822 was drawn deliberately in the spirit of the 1930s cal. 410 — a modern movement wearing a period face.' },

    { era:'e3', slot:'m-60eme', year:'1991', name:'Reverso 60ème (Soixantième)',
      cal:'Cal. 824 \u00b7 ref. 270.2.64', size:'42 \u00d7 26 mm Grande Taille', status:'limited', limited:'500 pieces',
      tags:['Power reserve','Date','First display back'],
      text:'The hinge point of the entire modern collection. First Reverso with a complication and the first with a sapphire display back instead of blank steel, and the first of six 500-piece anniversary editions running through the decade. A documented example \u2014 no. 480/500, sold at Artcurial in 2011 \u2014 records the detail: 26 \u00d7 42 mm pink gold case, silver guilloch\u00e9 dial, small seconds at six, a pink gold date hand and power reserve at ten, blued steel hands, and calibre 824 with its plate and bridges in <em>14K pink gold</em>, visible through the sapphire back.' },

    { era:'e3', slot:'m-art-deco', year:'1992', name:'Reverso Art Deco',
      cal:'Cal. 822 skeletonised \u00b7 refs 270.2.62 / 270.3.62', size:'42 \u00d7 26 mm Grande Taille', status:'limited',
      tags:['Engraved movement','Display back'],
      text:'One of the rarest of the period: a hand-engraved movement shown off through the display back, made in tiny numbers and easy to miss in the shadow of the anniversary pieces.' },

    { era:'e3', slot:'m-tourbillon-1993', year:'1993', name:'Reverso Tourbillon',
      cal:'Cal. 828 \u00b7 ref. 270.2.68', size:'42 \u00d7 26 mm Grande Taille', status:'limited', limited:'500 pieces',
      tags:['Tourbillon','Power reserve on the back'],
      text:'JLC\u2019s first tourbillon in modern times — and it went into the rectangle, not a round case. The tourbillon and power-reserve indication sit on the reverse, so the complication is the thing you turn the watch over to see.' },

    { era:'e3', slot:'m-repetition-1994', year:'1994', name:'Reverso Répétition Minutes',
      cal:'Cal. 943 \u00b7 ref. 270.2.73', size:'42 \u00d7 26 mm Grande Taille', status:'limited', limited:'500 pieces',
      tags:['Minute repeater','World first: rectangular repeater'],
      text:'The world\u2019s first rectangular minute-repeater movement. Gongs want to be round; making them sing inside a rectangle is a problem most houses simply declined to take on.' },

    { era:'e3', slot:'m-duoface-1994', year:'1994', name:'Reverso Duoface',
      cal:'Cal. 854 \u00b7 refs 270.2.54 / 270.1.54 / 270.3.54 / 270.8.54', size:'42 \u00d7 26 mm Grande Taille', status:'ongoing',
      tags:['Second dial','Dual time','Single movement'],
      text:'The most consequential Reverso since 1931, and it began on a restaurant tablecloth. Jaeger-LeCoultre\u2019s own account has the concept sketched over lunch in a small restaurant in the Vall\u00e9e de Joux: what if the famous watch offered <em>two</em> watch faces? The answer was calibre 854 \u2014 the time here on the front, the time elsewhere on the back, from one movement. Three years later the women\u2019s Reverso gained two faces of its own, one for day and one for night, as the Duetto. Everything called Duoface or Duetto since descends from that lunch.' },

    { era:'e3', slot:'m-chrono-retro', year:'1996', name:'Reverso Chronographe Rétrograde',
      cal:'Cal. 829 \u00b7 ref. 270.2.69', size:'42 \u00d7 26 mm Grande Taille', status:'limited', limited:'500 pieces',
      tags:['Retrograde chronograph','Indications on both faces'],
      text:'A chronograph split across two dials, with a retrograde hand that sweeps back to zero instead of running in circles — the sensible answer when your dial is a rectangle. Cal. 829 is the direct ancestor of the 2023 Tribute Chronograph\u2019s cal. 860.' },

    { era:'e3', slot:'m-duetto-1997', year:'1997', name:'Reverso Duetto',
      cal:'Cal. 865 (1997); cal. 844 (1994 Lady)', size:'38.5 × 23.1 mm', status:'historic',
      tags:['Women\u2019s dual dial','Day dial / night dial'],
      text:'The Duoface idea rewritten for women: a discreet dial for daytime on the front, a more decorative one for the evening on the back, one movement driving both. The name is still in use today.' },

    { era:'e3', slot:'m-geographique', year:'1998', name:'Reverso Géographique',
      cal:'Cal. 858 \u00b7 ref. 270.2.58', size:'42 \u00d7 26 mm Grande Taille', status:'limited', limited:'500 pieces',
      tags:['World time','City selector','Day/night both sides'],
      text:'The Reverso\u2019s first true travel watch: dual time with a city-name selector on the back and day/night indication on both faces. JLC would not seriously revisit world time in a Reverso for another 27 years.' },

    { era:'e3', slot:'m-gransport', year:'1998', name:'Reverso Gran\u2019Sport',
      cal:'Cal. 960 (auto), 851 Duoface, 859 chrono, 864 Duetto', size:'Curved sports case', status:'historic',
      tags:['First automatics in the line','Sportier case'],
      text:'A deliberate attempt to reach a different buyer: rounded, curved, more athletic, and the first Reverso family to use automatic movements. It ran until the Squadra replaced it in 2006.' },

    { era:'e3', slot:'m-sunmoon', year:'2000', name:'Reverso Grande Sun Moon',
      cal:'Cal. 823 \u00b7 refs 270.2.63 / 270.3.63 / 270.6.63', size:'42 \u00d7 26 mm Grande Taille', status:'historic',
      tags:['Moon phase','Day/night','Power reserve'],
      text:'Power reserve, moon phase and a night-and-day display, in the larger Grande case.' },

    { era:'e3', slot:'m-perpetual-2000', year:'2000', name:'Reverso Quantième Calendrier Perpétuel',
      cal:'Cal. 855 \u00b7 ref. 270.2.55', size:'42 \u00d7 26 mm Grande Taille', status:'limited', limited:'500 pieces',
      tags:['Perpetual calendar','Moon phase'],
      text:'The sixth and final watch of the 500-piece anniversary series, released for the millennium: leap-year indication on the front, month, day, date and moon phase on the back.' },

    /* ---------------- ERA IV ---------------- */
    { era:'e4', slot:'m-platinum-one', year:'2002', name:'Reverso Platinum Number One',
      cal:'Tourbillon · ref. 270.6.49', size:'42 × 26 mm Grande Taille', status:'limited', limited:'500 pieces',
      tags:['Tourbillon','Platinum'],
      text:'The first of a small pair of platinum tourbillon statements, made in very small numbers and rarely seen outside collections and auction rooms.' },

    { era:'e4', slot:'m-septantieme', year:'2001–02', name:'Reverso Septantième (70ème)',
      cal:'Cal. 879', size:'First “XGT” Grande case', status:'limited', limited:'500 pieces',
      tags:['8-day power reserve','Double barrel','Large date'],
      text:'Seventy years, eight days. A double-barrel movement paired with a high-frequency balance gave over a week of running power, and its patented large date opened the whole Grande Reverso chapter that followed. Cal. 879 is the direct ancestor of the 2025 Tribute Geographic\u2019s cal. 834.' },

    { era:'e4', slot:'m-platinum-two', year:'2004', name:'Reverso Platinum Number Two',
      cal:'Tourbillon · ref. 270.6.48', size:'42 × 26 mm Grande Taille', status:'limited', limited:'500 pieces',
      tags:['Tourbillon','Platinum'],
      text:'The companion to Number One, and equally scarce.' },

    { era:'e4', slot:'m-grande-family', year:'2003', name:'Reverso Grande family',
      cal:'Cal. 970 auto, 875 Grande Date, 874 8 Days', size:'46.5 × 29 mm', status:'historic',
      tags:['Grande Date','GMT','8 Days','Automatique'],
      text:'A whole family in one year: Grande Automatique, Grande Date, Grande GMT and Grande 8 Days. This is the point where the Reverso stopped being one watch with variants and became a range with tiers.' },

    { era:'e4', slot:'m-grande-101', year:'2004', name:'Grande Reverso 101',
      cal:'Cal. 101', size:'—', status:'limited',
      tags:['Smallest mechanical movement in the world'],
      text:'The 1929 calibre 101 — still the smallest mechanical movement ever put into series production — fitted into a Reverso. A jeweller\u2019s watch with a watchmaker\u2019s heart.' },

    { era:'e4', slot:'m-triptyque', year:'2006', name:'Reverso Grande Complication à Triptyque',
      cal:'Cal. 175', size:'Grande', status:'limited', limited:'75 pieces',
      tags:['Three dials','Tourbillon','Perpetual calendar','Sidereal time','6 patents'],
      text:'The world\u2019s first watch with three dials driven by a single movement — front, back, and a third display hidden inside the cradle itself. Three dimensions of time at once: civil, sidereal and perpetual, with a tourbillon and an equation of time. Six new patents.' },

    { era:'e4', slot:'m-eclipses', year:'2006', name:'Reverso à Éclipses',
      cal:'Cal. 849', size:'—', status:'limited',
      tags:['Shutter mechanism','Rare crafts'],
      text:'A miniature shutter over the case-back that opens to reveal the decoration beneath — the case-back treated as something to be unveiled rather than simply seen.' },

    { era:'e4', slot:'m-squadra', year:'2006–2012', name:'Reverso Squadra family',
      cal:'Cal. 977 Hometime, 754 Chrono GMT, 753 World Chrono, 966/968J Lady', size:'up to 52.9 × 36.5 mm', status:'historic',
      tags:['Square case','Sports line','Lady Duetto'],
      text:'The square Reverso, and the one with the best origin story: its proportions came from Chauvot\u2019s <em>original 1931 drawings</em>, which showed the Reverso as a square rather than a rectangle. Those seventy-five-year-old sketches were pulled from the archive and overscaled into something their author could never have foreseen \u2014 the flagship Squadra Chronograph GMT ran 35 mm across and a stupendous 50.5 mm lug to lug, with the godrons repeated on the chronograph pushers and the octagonal crown for grip. It replaced Gran\u2019Sport as the sports line. Hometime, Chronograph GMT, World Chronograph, and from 2009 a Lady and Lady Duetto. Retired in the 2016 reset with no direct successor.' },

    { era:'e4', slot:'m-gyro2', year:'2008', name:'Reverso Gyrotourbillon 2',
      cal:'Cal. 174', size:'Largest case of its day', status:'limited', limited:'75 pieces',
      tags:['Spherical tourbillon','Cylindrical hairspring','Perpetual calendar','Equation of time'],
      text:'A spherical multi-axis tourbillon — inner carriage one rotation every 18.75 seconds, outer carriage one per minute — squeezed into a rectangle. The first wristwatch to run a cylindrical hairspring. It took first <em>and</em> second place at the 2009 International Chronometry Competition.' },

    { era:'e4', slot:'m-grande-duo-986', year:'2009–2012', name:'Grande Reverso Duo / Night & Day / Calendar',
      cal:'Cal. 986, 976, 843', size:'48.5 × 29.5 mm', status:'historic',
      tags:['Duo Date','Night & Day','Calendar'],
      text:'The Grande Reverso family at full stretch: the Duo Date on calibre 986 (2009), the time-only 976, the Duo \u201cNight \u0026 Day\u201d, and a Grande Reverso Calendar in 2012. The Duo Date runs a guilloch\u00e9 silver front with date at twelve and small seconds at six, and a black reverse with luminous hands and a day/night indicator; 31 \u00d7 52 mm. <em>Edition size needs care:</em> a pink-gold example at Artcurial in 2011 was numbered <em>286/500</em>, which conflicts with the 1,500-piece figure quoted elsewhere \u2014 most likely 500 per metal rather than 1,500 overall, but treat it as unresolved.' },

    { era:'e4', slot:'m-ultrathin-1931', year:'2011', name:'Grande Reverso Ultra Thin Tribute to 1931',
      cal:'Cal. 822', size:'46.8 × 27.4 × 7.3 mm', status:'historic',
      tags:['80th anniversary','Closest to the original'],
      text:'Made for the 80th birthday and still the modern watch that looks most like 1931: no seconds, no clutter, a black dial with applied batons, and only 7.3 mm thick. Followed by Rouge, Bleu and 1948 variants, and a skeletonised SQ on cal. 849.' },

    { era:'e4', slot:'m-rideau', year:'2011', name:'Reverso Répétition Minutes à Rideau',
      cal:'Cal. 944', size:'Grande', status:'limited',
      tags:['Minute repeater','Sliding curtain','Trebuchet hammers'],
      text:'A minute repeater hidden behind a sliding metal curtain that opens as you activate it — mechanism imitating the case\u2019s own gesture. Trebuchet hammers strike gongs fixed to the sapphire crystal.' },

    /* ---------------- ERA V ---------------- */
    { era:'e5', slot:'m-classic-2016', year:'2016–17', name:'Reverso Classic (Small / Medium / Large)',
      cal:'Cal. 846/1, 822/2, 965, 969, 854A/2, 844, 968A', size:'34.2 × 21.0 → 45.6 × 27.4 mm', status:'ongoing',
      tags:['Three sizes','Monoface / Duoface / Duetto'],
      text:'The 2016 reset in one family. Three sizes, each available Monoface, Duoface or Duetto, quartz at first and then hand-wound. This is the modern entry point to the collection.' },

    { era:'e5', slot:'m-tribute-2016', year:'2016–18', name:'Reverso Tribute family',
      cal:'Cal. 822/2, 853, 854A/2, 854C/2, 847', size:'42.9 × 25.5 → 49.7 × 29.9 mm', status:'ongoing',
      tags:['Calendar','Moon','Duoface','Small Seconds','Tourbillon'],
      text:'The heritage-facing tier: closest in detail to the 1930s watches, with better finishing and in-house calibres. Launched with Tribute Calendar and Tribute Duoface; Tribute Moon (2017), Small Seconds and Tribute Tourbillon on the new cal. 847 (2018) followed.' },

    { era:'e5', slot:'m-tribute-gyro', year:'2016', name:'Reverso Tribute Gyrotourbillon',
      cal:'Cal. 179', size:'51.1 × 31.0 × 12.4 mm', status:'limited',
      tags:['85th anniversary','Bi-axial flying tourbillon','Gyrolab balance'],
      text:'The 85th-anniversary piece, and around 30% smaller in width and thickness than the 2008 Gyrotourbillon 2. A bi-axial flying tourbillon with a hemispherical balance spring and the non-circular Gyrolab balance wheel, engineered to cut air friction.' },

    { era:'e5', slot:'m-one-2016', year:'2016–19', name:'Reverso One family',
      cal:'Cal. 657 quartz, 842, 844', size:'32.5 × 16.3 → 40.1 × 20.0 mm', status:'ongoing',
      tags:['2:1 proportions','Réédition','Cordonnet','Duetto Moon'],
      text:'An all-new women\u2019s line replacing the old “Lady” naming, and a deliberate break from the golden ratio: the One is a slim 2:1 rectangle, echoing the narrow ladies\u2019 Reversos of the 1930s. Launched as Réédition, Cordonnet and Duetto Moon.' },

    { era:'e5', slot:'m-tribute-duoface-fagliano', year:'2016', name:'Reverso Tribute Duoface Fagliano',
      cal:'Cal. 854A/2', size:'Tribute', status:'limited', limited:'190 pieces',
      tags:['Casa Fagliano strap','Polo reference'],
      text:'Straps hand-made by the Argentine polo bootmaker Casa Fagliano — a direct, literal thread back to the field the watch was invented on.' },

    { era:'e5', slot:'m-tribute-tourbillon-duoface', year:'2018', name:'Reverso Tribute Tourbillon Duoface',
      cal:'Flying tourbillon', size:'Tribute', status:'limited', limited:'50 pieces',
      tags:['185th anniversary of the manufacture'],
      text:'Built for Jaeger-LeCoultre\u2019s own 185th anniversary: the Duoface\u2019s second dial and a flying tourbillon fused into one 50-piece run.' },

    { era:'e5', slot:'m-quadriptyque', year:'2021', name:'Reverso Hybris Mechanica Cal. 185 Quadriptyque',
      cal:'Cal. 185', size:'Grande', status:'limited', limited:'10 pieces',
      tags:['4 display faces','11 complications','12 patents','Perpetual calendar','Minute repeater','Flying tourbillon'],
      text:'The most complicated Reverso ever built and the world\u2019s first wristwatch with four functioning display faces. Eleven complications: perpetual calendar and flying tourbillon on the main dial, minute repeater with a digital jumping hour on the second face, and a triple-cycle astronomical display — synodic, draconic and anomalistic — set into the cradle itself. Twelve patents.' },

    { era:'e5', slot:'m-nonantieme', year:'2021', name:'Reverso Tribute Nonantième',
      cal:'Cal. 826', size:'Grande', status:'limited', limited:'190 pieces',
      tags:['Moon phase','Digital jumping hour','Day/night','Star-field back'],
      text:'Ninetieth, in Swiss-French — continuing the Soixantième/Septantième naming. Moon phase and date on the front; on the back, a complication never before put on a Reverso: a semi-jumping digital hour beside a rotating minute disc and a day/night indicator, over a hand-engraved star field in deep blue lacquer.' },

    { era:'e5', slot:'m-tribute-chrono', year:'2023', name:'Reverso Tribute Chronograph',
      cal:'Cal. 860', size:'Tribute', status:'ongoing',
      tags:['Chronograph','Double-sided display'],
      text:'Twenty-seven years after the Chronographe Rétrograde, the chronograph returns — cal. 860 integrating a chronograph with a double-sided time display in a case under 12 mm thick, despite over 300 components. Steel or pink gold.' },

    /* ---------------- ERA VI ---------------- */
    { era:'e6', slot:'m-hybris-artistica-179', year:'2023 / 2025', name:'Reverso Hybris Artistica Cal. 179',
      cal:'Cal. 179', size:'—', status:'limited',
      tags:['Rare crafts','White gold, 2025'],
      text:'A Hybris Artistica piece built around the case-back as a canvas for the Métiers Rares atelier, reissued in white gold in the 2025 line-up.' },

    { era:'e6', slot:'m-tribute-geographic', year:'2025', name:'Reverso Tribute Geographic',
      cal:'Cal. 834', size:'Tribute', status:'ongoing', limited:'Gold version: 150 pieces',
      tags:['World time','Grande Date','New movement'],
      text:'World time returns to the Reverso for the first time since the 1998 Géographique, solved for a rectangle with a new in-house calibre and a patented Grande Date. Steel joined the standing catalogue; pink gold was capped at 150.' },

    { era:'e6', slot:'m-tribute-repeater-953', year:'2025', name:'Reverso Tribute Minute Repeater',
      cal:'Cal. 953', size:'Tribute', status:'limited',
      tags:['Minute repeater','Open-worked','7 new patents'],
      text:'An entirely new integrated repeater movement, shown open-worked through the back, earning seven new patents on the way to market. Evidence that the hardest Reverso complications are still being developed, not just reissued.' },

    { era:'e6', slot:'m-monoface-ss-2025', year:'2025', name:'Reverso Tribute Monoface Small Seconds',
      cal:'Hand-wound', size:'7.56 mm thick', status:'ongoing',
      tags:['Time + small seconds','Milanese bracelet'],
      text:'A slim single-faced Tribute — no second dial, no case-back complication — offered in gold on a Milanese mesh bracelet.' },

    { era:'e6', slot:'m-duoface-ss-2025', year:'2025', name:'Reverso Tribute Duoface Small Seconds',
      cal:'Cal. 854', size:'Tribute', status:'ongoing',
      tags:['Dual time','24-hour day/night'],
      text:'The 1994 Duoface reinterpreted in pure black or vivid blue, gaining a small-seconds register up front and a 24-hour day/night display on the reverse.' },

    { era:'e6', slot:'m-classic-small-2026', year:'2026', name:'Reverso Classic Small Monoface',
      cal:'Updated hand-wound', size:'35.78 × 21 × 7.4 mm', status:'ongoing',
      tags:['Vintage proportions','Monoface'],
      text:'A deliberate return to vintage scale — closer to the sizes worn in the 1930s, when even men\u2019s watches were slim. Part of a 2026 core-collection refresh alongside an updated Tribute Small Seconds.' },

    { era:'e6', slot:'m-vallee-merveilles', year:'2026', name:'Reverso One — La Vallée des Merveilles',
      cal:'Cal. 846', size:'Reverso One', status:'limited', limited:'20 pieces each',
      tags:['Enamel','Paillonnage','Gem-setting','Lacquer'],
      text:'The first capsule of a new series celebrating natural scenery: three Reverso One pieces inspired by Hawaii and Japan — “Hibiscus Syriacus” and “Hibiscus Rosa” with hummingbirds, in pink or white gold, with mother-of-pearl dials.' },

    { era:'e6', slot:'m-hokusai-2026', year:'2026', name:'Reverso Tribute Enamel Hokusai “Waterfalls”, final four',
      cal:'Cal. 822', size:'45.6 × 27.4 mm, white gold', status:'limited', limited:'10 pieces each',
      tags:['Grand feu enamel','14 enamel layers','Flinqué dials'],
      text:'The completion of an eight-artwork cycle begun in 2021: the last four of Hokusai\u2019s <em>A Tour of the Waterfalls of the Provinces</em>, each miniature built from fourteen layers of enamel, roughly 100 hours per watch, on hand-guilloché flinqué dials.' }
  ];

  /* ---------------------------------------------------------
     2. CALIBRES — grouped by chapter, told as a story
     --------------------------------------------------------- */
  const CAL_CHAPTERS = [
    { id:'c1', num:'I',   name:'Borrowed Time',        years:'1931 – 1933',
      lede:'For its first two years the most famous rectangular watch in the world ran on somebody else\u2019s movement.' },
    { id:'c2', num:'II',  name:'The House Rectangles', years:'1933 – 1948',
      lede:'Eleven different movements powered the pre-war Reverso. These are the ones that mattered.' },
    { id:'c3', num:'III', name:'The Movements That Came Back', years:'1972 – 1991',
      lede:'A calibre borrowed from an oval watch restarted the whole line — and its descendant still runs the smallest Reversos made today.' },
    { id:'c4', num:'IV',  name:'One Movement, Two Faces', years:'1994 – today',
      lede:'The engineering problem that defines the modern Reverso: driving a dial on each side of a case that turns over.' },
    { id:'c5', num:'V',   name:'The Complication Calibres', years:'1991 – 2011',
      lede:'A rectangle is the wrong shape for almost every complication in watchmaking. That turned out to be the point.' },
    { id:'c6', num:'VI',  name:'The Impossible Ones',  years:'2006 – today',
      lede:'Three dials. Four faces. A tourbillon spinning on two axes. Movements built because nobody had built them.' }
  ];

  const CALIBRES = [
    { ch:'c1', slot:'cal-064', name:'Tavannes cal. 064', years:'1931–1933',
      spec:'Manual · rectangular · bought-in',
      models:'Reverso first series; Reverso De Luxe',
      text:'The Reverso began life powered by a competitor, and the contract shows it was planned that way: Article 14 of the 1931 agreement expressly allowed movements from Tavannes, Movado or Jaeger/LeCoultre, while stating that a special movement \u201ccompletely suited\u201d to Chauvot\u2019s case would follow. It had to. LeCoultre\u2019s round calibres were too small for the rectangle and the Duoplan \u2014 its own finest shaped movement, and the obvious candidate \u2014 was too thick. So Tavannes <em>calibre 064</em> ran in the gentlemen\u2019s watches and <em>calibre 050</em> in the smaller ladies\u2019 model, both without seconds, until about the end of 1932. Fritz calls it the one moment in the manufacture\u2019s history when the maker of fine movements <em>par excellence</em> lacked the right calibre for its own watch.' },

    { ch:'c2', slot:'cal-410', name:'LeCoultre cal. 11U / 410', years:'from 1933',
      spec:'Manual · 15 jewels · 18,000 vph · ~50 h',
      models:'Reverso with subsidiary seconds at 6',
      text:'The movement the 1931 contract had promised: one \u201ccompletely suited\u201d to Chauvot\u2019s case. Two years from problem to production movement is fast, which tells you how quickly the watch had succeeded \u2014 and it marked LeCoultre\u2019s breakthrough, after almost a century as a barely-known maker of fine movements, into selling complete watches under its own name. Collectors can date a vintage Reverso quite precisely from the many small changes made to the calibre 11 family over the years. The modern cal. 822 was drawn, six decades later, to look deliberately like this one.' },

    { ch:'c1', slot:'cal-duoplan', name:'The Duoplan (why nothing fitted)', years:'1925',
      spec:'Two-storey architecture · large balance in a small movement',
      models:'Not a Reverso calibre — the reason the Reverso needed Tavannes',
      text:'The movement that explains the Reverso’s awkward first two years. Devised by Henri Rodanet, Jaeger’s technical director in Paris, and industrialised by LeCoultre at Le Sentier, the Duoplan stacked the movement across two levels — barrel and wheel train below, balance on the tier above — freeing space for a balance wheel far larger than a small movement could otherwise carry, and with it a precision nobody had managed at that size. It was radical, celebrated, and far too thick for Chauvot’s sliding case. So the watch that prefigured the Reverso’s spirit of rethinking received wisdom was the very movement that could not go inside it.' },

    { ch:'c2', slot:'cal-413', name:'Cal. 413', years:'1937',
      spec:'Manual · small seconds',
      models:'Reverso 1937 small seconds',
      text:'The manufacture’s fourth in-house Reverso movement, and a useful dating tool: watches carrying it have black dials signed <em>Jaeger-LeCoultre</em> — the first year the merged name appeared — which pins them precisely to 1937.' },

    { ch:'c2', slot:'cal-411', name:'LeCoultre cal. 411', years:'from 1933',
      spec:'Manual · centre seconds',
      models:'Reverso with sweeping centre seconds',
      text:'The 410\u2019s twin, released simultaneously with a sweeping centre seconds hand instead of a subsidiary dial. Many variants followed; eleven distinct movements powered the Reverso before production stopped in the late 1940s.' },

    { ch:'c3', slot:'cal-840', name:'Cal. 840 — “the Ovetto movement”', years:'1972',
      spec:'Manual · oval',
      models:'The 200-piece Corvo Reverso',
      text:'The most consequential borrowed movement in the line\u2019s history. When the manufacture told Giorgio Corvo it couldn\u2019t build watches from 200 orphaned cases because there were no movements, he took the oval cal. 840 from the Ovetto, had a Milanese watchmaker build a spacer to seat it inside a Reverso case, and carried it back to Switzerland as proof. The Reverso exists today because an oval movement fitted a rectangular hole well enough to win an argument.' },

    { ch:'c3', slot:'cal-846', name:'Cal. 846 / 846/1', years:'late 1980s – today',
      spec:'Manual · 21,600 vph · 18 jewels · 93 parts · ~40 h',
      models:'Reverso Classique, Lady, Classic Small, Reverso One 2026',
      text:'An evolution of the calibre used in the Corvo revival, and one of the great survivors: tiny, thin, beautifully made, and still running the smallest Reversos in the current catalogue nearly forty years later.' },

    { ch:'c3', slot:'cal-822', name:'Cal. 822', years:'1991 – today',
      spec:'Manual · rectangular',
      models:'Grande Taille, Ultra Thin Tribute to 1931, Classic Medium, Tribute Small Seconds, Hokusai enamels',
      text:'Built for the larger Grande Taille case in 1991 and drawn to echo the 1930s cal. 410 — a modern movement wearing a period face. It is now the workhorse behind some of the most beautiful watches in the line, including the enamel Tributes, where a thin, reliable, well-proportioned movement matters more than a complication.' },

    { ch:'c4', slot:'cal-854', name:'Cal. 854 (854/1, 854A/2, 854C/2)', years:'1994 – today',
      spec:'Manual · two dials · ~42 h',
      models:'Duoface, Tribute Duoface, Classic Duoface, Fagliano',
      text:'The defining modern Reverso movement. One gear train, two dials on opposite sides of a case that pivots — local time on the front, a second time zone on the back, no second movement, no compromise in thickness. Thirty years on it is still being reinterpreted rather than replaced.' },

    { ch:'c4', slot:'cal-844', name:'Cal. 844 / 864 / 842 / 968', years:'1994 – today',
      spec:'Manual · dual dial, women\u2019s sizes',
      models:'Duetto, One Duetto, Classic Duetto, Squadra Lady Duetto',
      text:'The Duoface idea shrunk. The engineering challenge is the same but the tolerances are meaner: two dials driven by one movement inside a case narrow enough for a 2:1 rectangle. The 842 adds a moon phase; the 864A powers the Ultra Thin Duetto Duo.' },

    { ch:'c5', slot:'cal-824', name:'Cal. 824', years:'1991',
      spec:'Manual · power reserve · date',
      models:'Reverso 60ème',
      text:'The first complicated Reverso movement, and the first one JLC ever intended you to look at — the 60ème gave the watch a sapphire display back after sixty years of blank steel.' },

    { ch:'c5', slot:'cal-828', name:'Cal. 828', years:'1993',
      spec:'Manual · tourbillon · power reserve',
      models:'Reverso Tourbillon',
      text:'JLC\u2019s first modern tourbillon, and it went straight into the hardest available case. A tourbillon wants a round plate; fitting the cage, the bridges and the going train into a rectangle without thickening the watch is most of the work.' },

    { ch:'c5', slot:'cal-943', name:'Cal. 943 / 944', years:'1994 / 2011',
      spec:'Manual · minute repeater',
      models:'Répétition Minutes; Répétition Minutes à Rideau',
      text:'The world\u2019s first rectangular minute-repeater movement. Gongs are wound circles by nature; making them fit — and sing — in a rectangle is why almost nobody else tried. The 944 returned in 2011 with trebuchet hammers striking gongs fixed to the crystal itself.' },

    { ch:'c5', slot:'cal-829', name:'Cal. 829', years:'1996',
      spec:'Manual · retrograde chronograph · 36 jewels',
      models:'Chronographe Rétrograde; Gran\u2019Sport Chronograph (859)',
      text:'A chronograph organised across two faces, using a retrograde hand that flies back to zero rather than sweeping a full circle — the rational answer to a rectangular dial. Its logic reappears in the 2023 cal. 860.' },

    { ch:'c5', slot:'cal-879', name:'Cal. 879 / 873 / 874 / 875', years:'2000–2003',
      spec:'Manual · double barrel · 8-day reserve · 28,800 vph',
      models:'Septantième, Grande 8 Days, Sun Moon, Grande Date',
      text:'Eight days of power from two barrels, married to a high-frequency balance — unusually long running time for a hand-wound watch this flat. The 879\u2019s large-date architecture set up the entire Grande Reverso family, and its descendant cal. 834 powers the 2025 Tribute Geographic.' },

    { ch:'c5', slot:'cal-855', name:'Cal. 855', years:'2000',
      spec:'Manual · perpetual calendar',
      models:'Reverso Quantième Calendrier Perpétuel',
      text:'Leap-year indication on the front, month, day, date and moon on the back — a perpetual calendar split across a case that turns over, closing the six-watch anniversary series.' },

    { ch:'c2', slot:'cal-437', name:'Cal. 437/1 and P437/1', years:'c.1947',
      spec:'Manual \u00b7 centre seconds',
      models:'Reverso \u201cInterchangeable / Reversible\u201d',
      text:'The pair fitted to the late-1940s two-part-case Reverso \u2014 a little-documented variant in pink gold and steel with a centre seconds hand. Two consecutive examples surfaced together at auction in 2011, which is how the pairing of the 437/1 and P437/1 is known at all.' },

    { ch:'c3', slot:'cal-657', name:'Cal. 657 \u2014 the quartz years', years:'1980s\u20132010s',
      spec:'Quartz',
      models:'Reverso Classique, Reverso One (early), Reverso II',
      text:'Easy to skip past, but part of the story: the Reverso came back from the dead in 1982 as a mostly quartz watch, and quartz kept it in the catalogue while the mechanical revival was rebuilt around it. The 657 ran the smaller Classique and the earliest Reverso One references before hand-wound movements displaced it.' },

    { ch:'c3', slot:'cal-101', name:'Cal. 101 \u2014 the smallest of all', years:'1929 \u2013 today',
      spec:'Manual \u00b7 98 parts \u00b7 c.0.2 g \u00b7 21,600 vph',
      models:'Reverso Joaillerie (c.1990); Grande Reverso 101 (2004)',
      text:'Not designed for the Reverso, and older than it \u2014 but no list of its movements is complete without the 101. Introduced in 1929 and still made today, it remains the smallest mechanical movement ever put into series production: 98 components weighing about a fifth of a gram. In the jewellery Reversos the winding crown moves to the back of the case, because there is no room for it anywhere else.' },

    { ch:'c4', slot:'cal-865', name:'Cal. 865 and 864', years:'1997 \u2013 2000s',
      spec:'Manual \u00b7 dual dial, women\u2019s',
      models:'Reverso Duetto (1997); Ultra Thin Duetto Duo (864A)',
      text:'The movements that made the Duetto work: the Duoface principle in a case narrow enough for a woman\u2019s wrist, with a discreet dial for daytime and a decorative one for evening running off a single train.' },

    { ch:'c5', slot:'cal-823', name:'Cal. 823 and 823A', years:'1999 \u2013 2004',
      spec:'Manual \u00b7 power reserve \u00b7 moon phase \u00b7 day/night',
      models:'Grande Taille Sun Moon; Power Reserve (823A)',
      text:'Three indications on one dial without crowding it: power reserve, moon phase, and a night-and-day display. The platinum Sun Moon it powered was capped at 125 pieces, the pink and white gold versions were standard production.' },

    { ch:'c5', slot:'cal-858', name:'Cal. 858', years:'1998',
      spec:'Manual \u00b7 dual time \u00b7 city selector \u00b7 day/night both faces',
      models:'Reverso G\u00e9ographique (ref. 270.2.58)',
      text:'The Reverso\u2019s first true travel movement: a second time zone with a city-name selector on the reverse and day/night indication on both faces. World time then left the collection for twenty-seven years, until the calibre 834 brought it back in 2025.' },

    { ch:'c5', slot:'cal-873', name:'Cal. 873, 874 and 875', years:'2000 \u2013 2003',
      spec:'Manual \u00b7 8-day double barrel \u00b7 large date',
      models:'Grande 8 Days, Grande Date, Sun Moon variants',
      text:'The family that grew out of the Septantième\u2019s 879: eight days of running from twin barrels, and the patented large-date display that gave the whole Grande Reverso line its identity.' },

    { ch:'c5', slot:'cal-849', name:'Cal. 849 \u2014 the ultra-thin', years:'1990s \u2013 today',
      spec:'Manual \u00b7 1.85 mm high \u00b7 free-sprung balance',
      models:'Reverso \u00e0 \u00c9clipses; Ultra Thin SQ skeleton',
      text:'One of the flattest hand-wound movements in series production anywhere, and the reason certain Reversos can carry a shutter mechanism or a skeletonised dial without becoming thick. Where there is almost no room left, this is the movement that goes in.' },

    { ch:'c5', slot:'cal-944', name:'Cal. 944', years:'2011 \u00b7 revised 2021',
      spec:'Manual \u00b7 minute repeater \u00b7 trebuchet hammers \u00b7 crystal gongs',
      models:'R\u00e9p\u00e9tition Minutes \u00e0 Rideau; Tribute Minute Repeater (2021)',
      text:'The 943\u2019s successor, and the movement behind two of the most theatrical Reversos ever made. Its trebuchet hammers strike gongs fixed directly to the sapphire crystal rather than the case, which is what gives it its carrying voice. Revised again in 2021 with a silent regulator and a new generation of gongs.' },

    { ch:'c4', slot:'cal-853', name:'Cal. 853 and 976', years:'2016 \u2013 today',
      spec:'Manual \u00b7 time only',
      models:'Reverso Tribute Small Seconds; Grande Reverso 976',
      text:'The plain hand-wound movements behind the simplest modern Tributes \u2014 no complication, nothing to display on the back, which is exactly the point when the case-back is meant to be left blank for the owner.' },

    { ch:'c3', slot:'cal-960', name:'Cal. 960, 970 and 977 \u2014 the automatics', years:'1998 \u2013 2012',
      spec:'Automatic',
      models:'Gran\u2019Sport; Grande Automatique; Squadra Hometime',
      text:'The Reverso is overwhelmingly a hand-wound watch, for the obvious reason that a rotor adds height to a case that has to slide and turn. The exceptions came with the sportier families: the Gran\u2019Sport of 1998 brought the first automatics to the line, and the Squadra and Grande Automatique carried them into the 2000s.' },

    { ch:'c4', slot:'cal-965', name:'Cal. 965, 966, 968 and 969', years:'2009 \u2013 today',
      spec:'Automatic and manual \u00b7 women\u2019s and mid-size',
      models:'Squadra Lady Duetto; Reverso Classic Medium and Large',
      text:'The workaday movements of the modern collection \u2014 the ones in most Reversos actually being sold, rather than the ones that get written about. The 968A drove the Squadra Lady Duetto; the 965 and 969 run Classic Medium and Large references today.' },

    { ch:'c5', slot:'cal-986', name:'Cal. 986', years:'2009',
      spec:'Manual \u00b7 dual dial \u00b7 date \u00b7 day/night',
      models:'Grande Reverso Duo Date',
      text:'A guilloch\u00e9 silver front with date at twelve and small seconds at six; a black reverse with luminous hands and a day/night indicator. Edition size is unsettled \u2014 an example at auction was numbered 286/500 against the 1,500 quoted elsewhere.' },

    { ch:'c6', slot:'cal-175', name:'Cal. 175', years:'2006',
      spec:'Manual · 3 displays · 18 functions · 6 patents',
      models:'Grande Complication à Triptyque',
      text:'The first movement ever to drive three dials — front, back, and a third set into the cradle the case pivots within. Civil time, sidereal time and perpetual calendar simultaneously, plus a tourbillon and an equation of time, from a single going train.' },

    { ch:'c6', slot:'cal-174', name:'Cal. 174 — Gyrotourbillon 2', years:'2008',
      spec:'Manual · spherical multi-axis tourbillon · cylindrical hairspring',
      models:'Reverso Gyrotourbillon 2',
      text:'Two carriages rotating on different axes — the inner one turning once every 18.75 seconds, the outer once a minute — inside a rectangle. It was the first wristwatch to use a cylindrical hairspring, and it won first and second place at the 2009 International Chronometry Competition.' },

    { ch:'c6', slot:'cal-179', name:'Cal. 179 — Tribute Gyrotourbillon', years:'2016',
      spec:'Manual · bi-axial flying tourbillon · Gyrolab balance',
      models:'Reverso Tribute Gyrotourbillon; Hybris Artistica',
      text:'The Gyrotourbillon shrunk by roughly a third in width and thickness versus 2008, now flying — nothing bridging it from above — with a hemispherical balance spring and the deliberately non-circular Gyrolab balance wheel, shaped to cut air resistance.' },

    { ch:'c6', slot:'cal-185', name:'Cal. 185 — Quadriptyque', years:'2021',
      spec:'Manual · 4 faces · 11 complications · 12 patents',
      models:'Hybris Mechanica Cal. 185 Quadriptyque',
      text:'The most complicated movement ever fitted to a Reverso, and the only one in history to drive four working display faces. Perpetual calendar and flying tourbillon; minute repeater with a digital jumping hour; and three lunar cycles — synodic, draconic and anomalistic — displayed in the cradle.' },

    { ch:'c6', slot:'cal-826', name:'Cal. 826', years:'2021',
      spec:'Manual · digital jumping hour · moon phase · day/night',
      models:'Reverso Tribute Nonantième',
      text:'Built new for the 90th anniversary to do something the case-back had never done: a semi-jumping digital hour beside a rotating minute disc and a day/night indicator — a genuine second complication on the reverse rather than a repeat of the front.' },

    { ch:'c6', slot:'cal-953', name:'Cal. 953', years:'2025',
      spec:'Manual · integrated minute repeater · 7 patents',
      models:'Reverso Tribute Minute Repeater',
      text:'A wholly new integrated repeater movement, open-worked so the striking train is the view, with seven new patents. Thirty-one years after the world\u2019s first rectangular repeater, the problem is evidently still interesting.' },

    { ch:'c6', slot:'cal-860', name:'Cal. 860', years:'2023',
      spec:'Manual · chronograph · 300+ parts · double-sided',
      models:'Reverso Tribute Chronograph',
      text:'Takes its cue from the 1996 cal. 829 and integrates a chronograph with a double-sided time display — over 300 components in a case under 12 mm thick.' },

    { ch:'c6', slot:'cal-834', name:'Cal. 834', years:'2025',
      spec:'Manual · world time · Grande Date (patented)',
      models:'Reverso Tribute Geographic',
      text:'A descendant of the 8-day 879, re-engineered to put world time into a rectangle for the first time since 1998 — with a patented large-date display that had defeated earlier attempts at this size.' }
  ];

  /* ---------------------------------------------------------
     3. ARCHIVE — the manufacture's own personalised pieces
        cat: 'unique'  = documented individual watches
             'artistic' = limited artistic editions
     --------------------------------------------------------- */
  const ARCHIVE = [
    { cat:'unique', slot:'a-balbo', year:'1933', name:'The Balbo Reverso',
      craft:'Hand engraving', owner:'Commemorating Italo Balbo',
      text:'Among the earliest documented personalised Reversos, engraved with a map and route commemorating Italo Balbo\u2019s mass transatlantic formation flight to the 1933 Chicago World\u2019s Fair. Barely two years after the patent, the blank steel back was already being used to record history rather than merely survive it.',
      src:'Time and Watches; JLC Heritage' },

    { cat:'unique', slot:'a-feutz', year:'1932', name:'The Roger Feutz “Gardien Acrobate” Reverso',
      craft:'Blue dial · hand-engraved case-back', owner:'Roger Feutz, goalkeeper, FC Lausanne-Sports',
      text:'A blue-dialled Reverso Standard, one of a set given in 1932 to the players of Lausanne-Sports after the club won the 1931\u201332 Swiss championship \u2014 each case engraved with the club\u2019s initials and the individual player\u2019s name, distributed through Sp\u00e9cialit\u00e9s Horlog\u00e8res S.A. This particular watch belonged to Roger Feutz, the team\u2019s goalkeeper, known to Swiss football fans as \u201cle gardien acrobate\u201d (the acrobat goalkeeper); he died in 2003 at 94. The Reverso itself was barely a year old at the time \u2014 among the earliest recorded examples of what would now be called a sports sponsorship in watchmaking. The piece surfaced publicly only in 2025, rediscovered and exhibited by Maison Riondet at FAB Paris, and appears in neither the standard reference works nor Manfred Fritz\u2019s otherwise exhaustive <em>Reverso \u2014 La l\u00e9gende vivante</em>.',
      src:'Montres de Luxe, July 2025; Maison Riondet, FAB Paris 2025' },

    { cat:'unique', slot:'a-san-rocco', year:'2016', name:'The Scuola Grande di San Rocco Reverso',
      craft:'Grand feu miniature enamel', owner:'Displayed at the Jaeger-LeCoultre boutique, Venice',
      text:'A yellow gold Reverso Grande Taille whose case-back reproduces the main marble staircase of Venice\u2019s Scuola Grande di San Rocco \u2014 the confraternity house famous for its Tintoretto cycle, whose restoration Jaeger-LeCoultre has sponsored since 2013. Unveiled at the 73rd Mostra (Venice Film Festival), the piece works almost entirely in a narrow band of stone-grey tones, since the marble subject left little room for colour contrast; the straight architectural lines fought the curved case surface throughout, and the firing process flattened the marble\u2019s texture more than expected. Three weeks of work, 32 dryings at 230\u00b0C, and 15 firings at 800\u00b0C. Announced alongside a Facebook campaign \u2014 each \u201clike\u201d during one week in September 2016 triggered a donation toward the restoration \u2014 which drew over 2,500 likes and led to a final \u20ac15,000 gift to the Scuola.',
      src:'MasterHorologer, Sept 2016; MyWatch EN, Sept 2016; Luxsure, Sept 2016' },

    { cat:'unique', slot:'a-carmen-chaplin-heart', year:'2016', name:'The Carmen Chaplin Heart Reverso',
      craft:'Hand-engraved case-back', owner:'Carmen Chaplin, actress and JLC ambassador',
      text:'A Reverso Classic Medium engraved with a heart, freehand-drawn by actress Carmen Chaplin \u2014 granddaughter of Charlie Chaplin and a Jaeger-LeCoultre ambassador \u2014 as the opening gesture of the same San Rocco restoration campaign above. At the manufacture\u2019s lounge during the 2016 Venice Film Festival, guests were invited to sketch a heart in a digital guestbook to pledge support for the restoration; Chaplin\u2019s sketch was the first, and the one chosen to be engraved onto this watch. Actress Zhao Wei and other guests contributed sketches of their own to the same project.',
      src:'Luxsure, Sept 2016' },

    { cat:'unique', slot:'a-charlie-chaplin', year:'2026', name:'The Charlie Chaplin Reverso',
      craft:'Hand engraving, available to order', owner:'Lionel Meylan boutique exclusive, Vevey',
      text:'Not a single watch but a bespoke engraving offered exclusively through Lionel Meylan\u2019s boutique in Vevey, on any Reverso the client chooses: the instantly recognisable silhouette of Charlie Chaplin\u2019s Tramp, seen from behind \u2014 bowler hat, cane, oversized trousers, turned-out feet. The idea came from Julien Meylan and was approved by the Chaplin family and by Bubbles Inc., which controls the Chaplin estate; Vevey and neighbouring Corsier-sur-Vevey were Chaplin\u2019s home for his final decades, and the Manoir de Ban there, now a museum, counts Jaeger-LeCoultre as a partner. Chaplin\u2019s daughter Annie Chaplin has called the result \u201can imprint of the eternal Vagabond created with class, luxury, and finesse.\u201d',
      src:'Lionel Meylan, 2026' },

    { cat:'unique', slot:'a-emergency-heart', year:'2011', name:'“Reverso for Emergency”',
      craft:'Red lacquer case-back', owner:'Charity campaign, Venice Film Festival',
      text:'A red heart lacquered across the entire case-back, made for a 2011 campaign timed to the Reverso\u2019s 80th anniversary and the 68th Venice Film Festival, in support of Emergency\u2019s Salam Centre for cardiac surgery in Khartoum, Sudan. Photographer Valeria Golino shot friends, colleagues, and her then-partner Riccardo Scamarcio wearing the watch with a hand over the heart for a Vanity Fair Italia portfolio titled \u201cIl cuore \u00e8 altrove\u201d (\u201cThe Heart Is Elsewhere\u201d) \u2014 Valeria Bruni Tedeschi, Patricia Arquette, Ferzan \u00d6zpetek and Isabella Ferrari among them \u2014 before the watches appeared on the Venice red carpet. Jaeger-LeCoultre committed to funding ten cardiac operations at the Salam Centre, one for each night of the ten-night festival; the watches themselves were never for sale. Emergency\u2019s own 2011 financial report records that Jaeger-LeCoultre later donated three examples \u2014 catalogued at Christie\u2019s as lots 312\u2013314, sold without reserve or premium for the charity\u2019s benefit, one identified as a steel Grande Reverso Ultra Thin, ref. Q2788520, its back in red lacquer with the Salam Centre logo. The idea plays on the Reverso\u2019s own origin story: a case built to protect a mechanical heart, turned instead into a message about protecting human ones.',
      src:'Vanity Fair Italia, 24 Aug 2011; Emergency Annual Report 2011; Christie\u2019s, May 2012' },

    { cat:'unique', slot:'a-emergency-rose', year:'2012', name:'“A Rose for Emergency”',
      craft:'Red lacquer case-back', owner:'Charity campaign, Venice Film Festival',
      text:'The following year\u2019s chapter of the same partnership: a red rose in lacquer, its stem forming the word \u201cfor\u201d as it runs toward Emergency\u2019s circled-E emblem \u2014 \u201cA Rose for Emergency,\u201d spelled out entirely in one image, with no maison or festival branding anywhere on the case-back. Made for the 69th Venice Film Festival in support of Emergency\u2019s maternity centre in Anabah, Afghanistan, surrounded by the rose garden that gave the campaign its symbol; actress Cristiana Capotondi, the project\u2019s patron, visited the centre that July. Jaeger-LeCoultre funded the centre for the length of the festival, timed to the roughly ten births a day the centre was seeing \u2014 over 100 expected across the festival\u2019s run. Men\u2019s and women\u2019s Grande Reverso Ultra Thin versions were made; Emergency\u2019s 2012 annual report confirms two were donated by Jaeger-LeCoultre and later sold at auction, with proceeds going entirely to the Anabah centre.',
      src:'Emergency Annual Report 2012; Jaeger-LeCoultre press materials, Aug 2012' },

    { cat:'unique', slot:'a-cloisonne-wimbledon', year:'1940s', name:'The “Wimbledon” Cloisonn\u00e9 Enamel Reverso',
      craft:'Cloisonn\u00e9 enamel dial, Stern Fr\u00e8res', owner:'Unknown',
      text:'A stainless steel Reverso (case No. 24624) whose cloisonn\u00e9 enamel dial depicts a tennis player against a green grass ground \u2014 read by specialists as a Wimbledon reference, since a closely related dial with a red clay ground (read as Roland Garros) is separately documented. The dial is stamped 104*009 on its edge, in the numbering system used by Stern Fr\u00e8res, the Geneva firm that supplied cloisonn\u00e9 dials to Patek Philippe, Rolex, Omega and Jaeger-LeCoultre alike \u2014 104 is Jaeger-LeCoultre\u2019s own house code in that system, and the digits after the star identify the specific design. A comparable clay-ground \u201ctennis\u201d dial sold at Christie\u2019s in 2018 for more than CHF 50,000; the green-grass version here was, as far as the consignor could establish, the first of its kind to appear at auction at all.',
      src:'Auction house cataloguing, cloisonn\u00e9 tennis dial group' },

    { cat:'unique', slot:'a-roland-garros-1952', year:'1952', name:'The Roland Garros 1952 Reverso',
      craft:'Cloisonn\u00e9 enamel dial, Stern Fr\u00e8res \u00b7 engraved case-back', owner:'Possibly presented to Jaroslav Drobn\u00fd',
      text:'A steel Staybrite Reverso (case No. 467193) whose cloisonn\u00e9 enamel dial \u2014 stamped 104*014, the \u201ctennis player\u201d design in the Stern Fr\u00e8res numbering system \u2014 shares its maker with the Wimbledon-ground dial elsewhere in this archive. The case-back is engraved \u201cRoland Garros 1952,\u201d alongside a facsimile signature of Ren\u00e9 Lacoste and Lacoste\u2019s crocodile emblem; Lacoste, a former French Open champion himself, had founded his clothing house in 1933 and was closely tied to the tournament. Auction house research considers it highly probable, though unconfirmed, that Lacoste presented this specific watch to that year\u2019s men\u2019s singles champion, the Czech player Jaroslav Drobn\u00fd \u2014 who also won Roland Garros the year before, in 1951, and Wimbledon in 1954. Named for the aviator and WWI hero, the Roland Garros stadium was built in 1928 for France\u2019s first Davis Cup entry.',
      src:'Christie\u2019s lot notes, Reverso Roland Garros 1952' },

    { cat:'unique', slot:'a-cloisonne-polo', year:'1937', name:'The Cloisonn\u00e9 Polo Player Reverso',
      craft:'Cloisonn\u00e9 enamel dial \u00b7 sweep centre seconds \u00b7 engraved initials', owner:'Initials “AJ”',
      text:'A steel Reverso, ref. 1101 (case No. 25027, movement No. 74350), fitted at some later point with a cloisonn\u00e9 enamel dial depicting a polo player in action \u2014 an appropriate choice for a case shape born on the polo field, even though the dial itself was added after the watch\u2019s 1937 manufacture rather than at the factory. Runs the octagonal-shaped, nickel-finished calibre 411 with 15 jewels and a rotating sweep centre-seconds disc built into the rectangular back-plate, a genuinely unusual complication for the period. The case-back carries engraved initials \u201cAJ,\u201d whose owner is not otherwise documented.',
      src:'Auction house cataloguing, ref. 1101' },

    { cat:'unique', slot:'a-wrist-topaz', year:'c. 1999\u20132000', name:'The Wrist Reverso “Topaz” (Alfons Mucha)',
      craft:'Grand feu enamel miniature painting, Miklos Merczel', owner:'Jaeger-LeCoultre\u2019s own archive/museum',
      text:'A Grande Taille wristwatch carrying the same Topaz miniature that Jaeger-LeCoultre also produced as one of four jewelled Reverso pocket watches in its \u201cPierres Pr\u00e9cieuses\u201d set (catalogued elsewhere in this archive) \u2014 reproducing Alfons Mucha\u2019s 1900 lithograph <em>The Precious Stones: Topaz</em>, one of four panels personifying gemstones as women, alongside Ruby, Amethyst and Emerald. Whether this wrist version was ever offered for sale, or exists only as an archive/prototype example held by the manufacture itself, isn\u2019t established by any source found so far; it\u2019s catalogued here as a unique piece for that reason, distinct from the four confirmed pocket watches. Almost certainly built on the same Grande Taille platform as the contemporary Mucha Four Seasons watches \u2014 18k yellow gold, manual movement, white enamel dial, small seconds \u2014 though this specific reference has not been confirmed.',
      src:'Jaeger-LeCoultre archive photography' },

    { cat:'unique', slot:'a-lempicka-quartet', year:'2003', name:'The Tamara de Lempicka Quartet',
      craft:'Grand feu enamel miniature painting', owner:'Jaeger-LeCoultre\u2019s own archive \u2014 never offered for sale',
      text:'Four Grande Taille Reversos shown at the Geneva watch fair (SIHH) in 2003, each case-back enamelled with a miniature reproduction of a different painting by Tamara de Lempicka, the Art Deco portraitist \u2014 and, unlike almost everything else in this archive, never produced for sale at all. One collector who saw them has written that he has \u201cforever dreamed\u201d of the set since. Pieces like this exist in Jaeger-LeCoultre\u2019s own accumulated stock of enamel work for reasons that have nothing to do with commerce: some are works in progress, others demonstration pieces the manufacture keeps specifically to show at exhibitions, since reproducing a painting in enamel miniature demands that the enameller match not just the original artist\u2019s draughtsmanship at a fraction of the scale, but the exact colour of the source work as well. Individual titles for the four Lempicka paintings reproduced are not documented in the source describing them.',
      src:'Collector account, SIHH 2003' },

    { cat:'unique', slot:'a-eton', year:'1933', name:'The “Floreat Etona” Reverso',
      craft:'Enamelled crest', owner:'Unknown — an enduring mystery',
      text:'It bears the arms and motto of Eton College — <em>Floreat Etona</em>, “may Eton flourish”. And it is a ladies\u2019 model. Eton admitted only male pupils, so the likeliest explanation is a gift from a pupil to a girlfriend, or a master to his wife. The archive has never established who owned it, which leaves open the far more romantic possibility the Yearbook itself entertains: that it belonged to the first female pupil at Eton, in the early 1930s.',
      src:'JLC Yearbook FIVE, 2012 — “Reverso Confidential”' },

    { cat:'unique', slot:'a-aage', year:'1934', name:'The Prince Aage of Denmark Reverso',
      craft:'Engraving', owner:'Prince Aage of Denmark (1887–1940)',
      text:'The company archive holds a letter sent from Algiers in 1934 congratulating the maison on a Reverso that had withstood the conditions of southern Morocco. It was signed by a Danish prince who had traded a colonel\u2019s commission in the Danish army for the French Foreign Legion, and who commanded legion corps in Morocco as <em>capitaine à titre étranger</em>. Proof, in the maison\u2019s own files, that the Reverso was worn not only by sportsmen but by soldiers.',
      src:'JLC Yearbook FIVE, 2012' },

    { cat:'unique', slot:'a-earhart', year:'1935', name:'The Amelia Earhart Reverso',
      craft:'Engraved map', owner:'Commemorating Amelia Earhart',
      text:'Engraved with a map of the Americas and the words MEXICO – NEW YORK, MAY 8 1935. Earhart had flown 1,126 km across the Gulf of Mexico along the edge of the Bermuda Triangle, completing the first Mexico–New York flight in 13 hours and 5 minutes. Two years later she disappeared over the Pacific at the height of her fame.',
      src:'JLC Yearbook FIVE, 2012' },

    { cat:'unique', slot:'a-maharani', year:'1936', name:'The “Maharani” Reverso',
      craft:'Miniature enamel portrait', owner:'Probably Kanchan Prabha Devi',
      text:'The earliest documented enamelled Reverso: a yellow-gold case carrying a miniature enamel portrait of an Indian woman. It was bought in Mumbai by a Lufthansa captain during the 1990s and entered the manufacture\u2019s own collection in 2004. Research across Indian and Swiss archives points to <em>Kanchan Prabha Devi</em> — born 1914, eldest daughter of the Maharaja of Panna, who on her seventeenth birthday became the second wife of the Maharaja of Tripura, a princely state near what is now the Bangladesh border. The identification has never been proved beyond doubt, and the watch remains the most enigmatic of the early Reversos.',
      src:'Foulkes, <em>Reverso</em>; JLC Yearbook FIVE' },

    { cat:'unique', slot:'a-jaipur', year:'1930s', name:'The Maharaja of Jaipur Reverso',
      craft:'Engraved coat of arms', owner:'Sawai Man Singh II of Jaipur',
      text:'Engraved with the arms of the Maharaja Sawai Man Singh II of Jaipur — moderniser of Rajasthan and a polo champion of international standing. Of all the personalised Reversos, this is the one that closes the circle most exactly: the watch invented on an Indian polo field, engraved for the man who was arguably the era\u2019s greatest Indian polo player. LeCoultre calibre 410, steel.',
      src:'JLC Yearbook FIVE, 2012' },

    { cat:'unique', slot:'a-brdc', year:'1937', name:'The British Racing Drivers\u2019 Club Reverso',
      craft:'Enamelled club emblem', owner:'A BRDC member',
      text:'The BRDC was founded in 1928 over a series of legendary dinners hosted by Dr J.D. Benjafield, after he and Sammy Davis won the 1927 Le Mans 24 Hours in a wrecked Bentley — repaired by torchlight, headlights replaced with a hand torch. The club\u2019s emblem shows the <em>Razor Blade</em>, at 47 cm the narrowest racing car of its day. The link runs deeper than decoration: Jaeger supplied dashboard instruments to Bugatti, Bentley, Maserati, Panhard and Aston Martin\u2019s predecessor Bamford & Martin.',
      src:'JLC Yearbook FIVE, 2012' },

    { cat:'unique', slot:'a-edward-viii', year:'1937', name:'The Edward VIII Reverso',
      craft:'Engraved royal arms', owner:'King Edward VIII',
      text:'Engraved with a crown, EDWARD VIII and the date 1937 — the year of a coronation that never happened. The ceremony had been set for 12 May 1937, which explains both the date and the crown. Edward abdicated to marry Wallis Simpson; the watch was engraved anyway and still carries the trace of a dream of grandeur that gave way to a love story.',
      src:'JLC Yearbook FIVE, 2012' },


    { cat:'unique', slot:'a-rama', year:'1949', name:'The Rama Reverso',
      craft:'Miniature enamel', owner:'Unknown',
      text:'An enamelled miniature of the Hindu deity Rama — hero of the <em>Ramayana</em>, in whom some Indian scholars see the ancestor of the Western fairy-tale prince. Shown by the Victoria and Albert Museum from 2009 in <em>Maharaja: the Splendour of India\u2019s Royal Courts</em>, and a reminder that the Reverso\u2019s relationship with the subcontinent never really ended.',
      src:'JLC Yearbook FIVE, 2012' },




    { cat:'unique', slot:'a-zep-eclipse', year:'2011', name:'The Reverso \u00e0 \u00c9clipses by Zep',
      craft:'Miniature enamel behind a shutter mechanism', owner:'Pi\u00e8ce unique, sold for charity',
      text:'Made for the Reverso\u2019s 80th anniversary and decorated by Philippe Chappuis \u2014 \u201cZep\u201d, creator of the comic <em>Titeuf</em>. Turning a small wheel above the crown opens two shutters to reveal the drawing beneath: Titeuf climbing inside the watch\u2019s gear train, the artist\u2019s nod to Chaplin in <em>Modern Times</em>. The image was reproduced in miniature enamel by one of the manufacture\u2019s own enamellers, more than eighty hours of work. It was sold at Artcurial in Paris on 29 November 2011, with the proceeds going to the Association Mon\u00e9gasque contre les Myopathies.',
      src:'Artcurial, <em>Jaeger-LeCoultre Unique Auction</em>, Paris, 29 Nov 2011, lot 519' },



    { cat:'unique', slot:'a-swiss-1938', year:'1938', name:'The Swiss national football team Reversos',
      craft:'Engraved dedication', owner:'The 1938 Swiss World Cup squad',
      text:'Bought from the retailer G\u00fcbelin by the Swiss Football Association and presented to the national side after the 1938 World Cup in France. Switzerland\u2019s win over the Germany side carried unmistakable political weight in the Europe of 1938, and the watches went out inscribed with thanks for the victories. Decades later at least one member of that team was still wearing his. A reminder that the engraved Reverso was never only an aristocratic object \u2014 it was also how a country said thank you.',
      src:'Fritz, <em>Reverso: The Living Legend</em>' },



    { cat:'unique', slot:'a-hidden-message', year:'2010s', name:'A Hidden Message',
      craft:'Hand-engraved Chinese poem', owner:'Peter Lee, for his wife Yin Sze \u00b7 Hong Kong SAR, China',
      text:'Peter Lee spent days perfecting a poem for his wife Yin Sze to mark their tenth anniversary, then walked into the Jaeger-LeCoultre boutique in Hong Kong and asked for the whole thing engraved on the case. Chinese poems are written vertically, in columns running top to bottom and ordered right to left. It reads: <em>\u201cIt is my honour to have you as my wife, I love your kindness, our lonely single days are at an end, and we shall live happily together ever after.\u201d</em> But it works in two directions. Read horizontally, left to right, the top row says <em>\u201clove you forever\u201d</em> and the bottom row says <em>\u201cYin Sze, the wonderful wife\u201d</em> \u2014 two more messages hidden inside the first, on a watch whose whole idea is that something is concealed until you turn it over.',
      src:'Foulkes, <em>Reverso</em>' },

    { cat:'unique', slot:'a-dragon-tattoo', year:'2010s', name:'The Detail Is in the Dragon',
      craft:'Hand engraving', owner:'Juliano Cazarr\u00e9 \u00b7 Brazil',
      text:'The Brazilian actor Juliano Cazarr\u00e9 had his favourite tattoo engraved on his Reverso: a tiger and a dragon, locked together. They are not decoration. They are his two eldest children \u2014 the tiger and the dragon are their signs in the Chinese horoscope. In his own words: <em>\u201cThese powerful animals are considered complementary opposites, and together form an unbeatable unit, and in that way they are just like my sons, so different from each other but inseparable in my love for them.\u201d</em>',
      src:'Foulkes, <em>Reverso</em>' },

    { cat:'unique', slot:'a-fathers-treasure', year:'2018', name:'A Father\u2019s Treasure',
      craft:'Engraved from a child\u2019s drawing', owner:'Cho Hyunchul \u00b7 Seoul, South Korea',
      text:'For his birthday in 2018, Cho Hyunchul\u2019s five-year-old son Yoonjae painted his portrait \u2014 a round face, one eye larger than the other, a few strokes of hair. It meant enough that his father wanted it with him every day, so he had it engraved on the back of a Reverso Classic bought in Seoul that May, complete with the date and the words <em>\u201cfrom YJ\u201d</em> in the boy\u2019s own hand. It is his most prized possession, and he is already planning to give it away: <em>\u201cWhen my son is a grown man, and perhaps himself the father of his own family, I will give him the watch to remind him of the touching moment when he gave his father this wonderful birthday gift.\u201d</em>',
      src:'Foulkes, <em>Reverso</em>' },

    { cat:'unique', slot:'a-macarthur', year:'1937', name:'The General Douglas MacArthur Reverso',
      craft:'Engraved monogram in black lacquer', owner:'Gen. Douglas MacArthur',
      text:'Five engraved letters \u2014 <em>D MAC A</em> \u2014 turn an otherwise typical 1930s steel Reverso into one of the most historically loaded watches the maison owns. In 2015 it became the most expensive Reverso ever sold at auction, bought by Jaeger-LeCoultre for its own museum after fierce bidding took it to almost nine times its low estimate. The craftsmanship is not exceptional and the black lacquer around the monogram is slightly chipped; it is the wrist it sat on that made the price.',
      src:'Foulkes, <em>Reverso</em> (Jaeger-LeCoultre)' },

    { cat:'unique', slot:'a-milford-haven', year:'2010s', name:'The Marchioness of Milford Haven Reverso',
      craft:'Diamond-set night dial, engraved cradle', owner:'Clare Mountbatten, Marchioness of Milford Haven',
      text:'A polo player and long-standing ambassador for the model, given a genuinely blank canvas to mark a decade of collaboration. A plain white dial on the front; flip it and the reverse is midnight blue with diamonds for stars. The personal engraving went somewhere unexpected \u2014 the inner face of the cradle that carries the case \u2014 and holds her children\u2019s initials, a pair of crossed polo sticks, and a marquess\u2019s coronet for her husband. Worn on a blue Casa Fagliano strap.',
      src:'Foulkes, <em>Reverso</em>' },

    { cat:'unique', slot:'a-soldini', year:'1999', name:'The Giovanni Soldini Reverso',
      craft:'Unique commissioned piece', owner:'Giovanni Soldini, solo yachtsman',
      text:'A watch that commemorates a rescue at sea. In February 1999, during the third leg of the Around Alone solo round-the-world race, Soldini picked up a Mayday from Isabelle Autissier \u2014 the first woman to complete a solo competitive circumnavigation \u2014 whose boat had capsized. He turned back, found her, and took her aboard. He still won the race, in 116 days, and received the Legion of Honour from the French government for the rescue.',
      src:'Foulkes, <em>Reverso</em>' },

    { cat:'unique', slot:'a-liverbird', year:'2010s', name:'The “Liverbird” Grande Reverso 1931 Rouge',
      craft:'Engraving filled in red', owner:'Xiaomo Xiong, collector',
      text:'A Chinese collector bought a Grande Reverso 1931 Rouge specifically in order to engrave it. The back carries the Liverbird, the phoenix-like symbol of the city of Liverpool and of Liverpool Football Club, engraved in the same red as the dial. He drew it himself on a computer and reshaped it to fit the case \u2014 a case-back designed by its own owner rather than by the atelier.',
      src:'Foulkes, <em>Reverso</em>' },

    { cat:'unique', slot:'a-newport', year:'2000s', name:'The “Newport” Reverso',
      craft:'Engraved horse\u2019s head', owner:'Mrs. Mazeaud, France',
      text:'A gift in yellow gold whose surprise lay on the reverse: the engraved head of Newport, an Anglo-Arab horse foaled in 1982 and the last bred by his owner before his death. Injured in transport and left lame, Newport was spared on the instructions of the owner\u2019s son, who put him out to pasture in his father\u2019s memory. The horse recovered fully, became French three-day-eventing champion in 1992, competed at the Barcelona Olympics, and took second in the team event at the 1997 European championships.',
      src:'Foulkes, <em>Reverso</em>' },

    { cat:'unique', slot:'a-decoster', year:'2000s', name:'The Nathalie Decoster Reverso',
      craft:'Engraved message and artist\u2019s emblem', owner:'A gift for her seven-year-old son',
      text:'The French sculptor Nathalie Decoster had a Reverso engraved for her son at seven: <em>\u201cMy darling Louis, I love you madly\u201d</em>, alongside her own emblem \u2014 a motif she calls \u201cthe passing of time\u201d, which she describes as the symbol of all her work. He is grown now, and wears it every day. In her words, she never expected it would become so important to him: \u201cNow I really see this Reverso as a gift for a lifetime.\u201d',
      src:'Foulkes, <em>Reverso</em>' },

    { cat:'unique', slot:'a-corleone', year:'2010s', name:'The “Barbearia Corleone” Reverso',
      craft:'Engraved emblem', owner:'Bruno Van Enck, S\u00e3o Paulo',
      text:'The emblem of a chain of S\u00e3o Paulo barber shops modelled on 1940s New York \u2014 a moustached and bearded skull. The owner had it tattooed on himself to mark his first year in business, then had the same death\u2019s head engraved on the back of his Reverso. Proof that the case-back tradition never belonged exclusively to princes and generals.',
      src:'Foulkes, <em>Reverso</em>' },


    { cat:'unique', slot:'a-pavonia', year:'2009', name:'The “Pavonia” Reverso',
      craft:'Miniature enamel painting', owner:'A British art collector',
      text:'A British collector asked the maison to reproduce, on his own Reverso, the painting he loved most in his collection: Frederic Leighton\u2019s <em>Pavonia</em> (1858–59). Miklós Merczel of the Métiers Rares atelier had to reproduce it in under 6 cm² while keeping the lifelike vibrancy of the original. The name comes from the Latin <em>pavo</em>, peacock — for the feathers fanning behind the sitter\u2019s hair.',
      src:'JLC Yearbook FIVE, 2012' },

    /* ----- artistic limited editions ----- */

    { cat:'artistic', slot:'a-hidden-treasures', year:'2021', name:'Reverso Tribute Enamel “Hidden Treasures”',
      craft:'Grand feu enamel, miniature painting, guillochage', owner:'10 pieces each',
      text:'Three paintings that were all lost and found again: Courbet\u2019s <em>View of Lake Leman</em>, Van Gogh\u2019s <em>Sunset at Montmajour</em>, and Klimt\u2019s <em>Portrait of a Lady</em> — the only known double portrait by the artist, painted over an earlier one, stolen in the late 1990s and discovered days later stuffed into a crevice in a stone wall under some ivy, in perfect condition. The three artists were chosen because all were active in the era that produced the Reverso.',
      src:'JLC; Robb Report; Revolution' },

    { cat:'artistic', slot:'a-hokusai', year:'2021–2026', name:'Reverso Tribute Enamel Hokusai “Waterfalls”',
      craft:'Grand feu enamel, 14 layers; flinqué guilloché dials', owner:'10 pieces each',
      text:'An eight-watch cycle reproducing Hokusai\u2019s <em>A Tour of the Waterfalls of the Provinces</em>, begun in 2021 and completed at Watches and Wonders 2026 with the final four. Roughly 100 hours of work per watch; even the Japanese inscriptions are rendered at near-microscopic scale.',
      src:'JLC; Oracle of Time' },

    { cat:'artistic', slot:'a-monet-venice', year:'2024', name:'Reverso Tribute Enamel “Venice Series” (Monet)',
      craft:'Miniature painting, enamelling, guillochage', owner:'10 pieces each',
      text:'Three Monet views of Venice — <em>San Giorgio Maggiore at Dusk</em>, <em>The Grand Canal</em>, <em>The Doge\u2019s Palace</em> — made for the Homo Faber biennial. Canvases over 65 × 92 cm reduced to 25 × 20 mm; the San Giorgio miniature alone took 70 hours, and the enameller had to fake the impasto of the original brushwork. The dials beneath are hand-guilloché — eight hours each — under translucent enamel.',
      src:'JLC; Fratello; Monochrome' },

    { cat:'artistic', slot:'a-shahnameh', year:'2025', name:'Reverso Tribute Enamel “Shahnameh”',
      craft:'Grand feu enamel over guilloché gold', owner:'10 pieces each',
      text:'Scenes from the <em>Shahnameh</em>, the 10th-century Persian Book of Kings, painted in miniature enamel — the same decorative language as the 1930s enamelled Reversos, telling an entirely different story.' },

    { cat:'artistic', slot:'a-precious-flowers', year:'2021', name:'Reverso One Precious Flowers',
      craft:'Enamel, engraving, gem-setting', owner:'10 pieces each',
      text:'Four floral compositions in white and pink gold, each combining three crafts of the Métiers Rares atelier at once — a wearable botanical study on a case-back barely larger than a postage stamp.' },

    { cat:'artistic', slot:'a-cordonnet-jewellery', year:'2021', name:'Reverso One Cordonnet Jewellery',
      craft:'Full pavé diamond setting', owner:'Limited',
      text:'The 1930s cord strap reimagined in gold and pavé diamonds, with a Duetto case — mother-of-pearl on one dial, onyx on the other, both driven by the hand-wound cal. 844.' },

    { cat:'artistic', slot:'a-vallee-merveilles', year:'2026', name:'Reverso One “La Vallée des Merveilles”',
      craft:'Enamel, paillonnage, gem-setting, lacquer', owner:'20 pieces each',
      text:'The first capsule of a new nature series: hummingbirds over blue and red hibiscus, inspired by Hawaii, in pink and white gold on mother-of-pearl, powered by cal. 846.',
      src:'JLC Watches & Wonders 2026' },

    { cat:'artistic', slot:'a-atelier-reverso', year:'ongoing', name:'Atelier Reverso — the made-to-order programme',
      craft:'Engraving, enamel, gem-setting, natural stone dials', owner:'One of one, by commission',
      text:'The living continuation of everything on this page. Through Atelier Reverso a client can commission the case-back directly from the Métiers Rares atelier — hand engraving, miniature enamel, gem-setting, lacquer — so that new pièces uniques are still being made, one at a time, exactly as they were in 1933.' }
  ];

  return { ERAS, MODELS, CAL_CHAPTERS, CALIBRES, ARCHIVE };
})();
