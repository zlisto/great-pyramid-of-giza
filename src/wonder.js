// The Great Pyramid of Giza: everything about this world in one place. World.jsx, layout.js,
// the guide and the chat all read from here; Scene.jsx draws the pyramid itself.
const HUB = 'https://zlisto.github.io/hub_world/'

export default {
  id: 'great_pyramid',
  name: 'Great Pyramid of Giza',
  place: 'Giza, Egypt · c. 2560 BCE',
  blurb: "Stand on the Giza plateau as the Great Pyramid looked when new: cased in gleaming white limestone. Neferbubu the scribe will tell you how Khufu's tomb was built.",

  guideName: 'Neferbubu',
  guideRole: 'scribe of Giza',
  guideIcon: '📜',
  greeting: (v) =>
    `Welcome${v ? `, ${v}` : ''}! I am Neferbubu, a scribe here at Giza. Before you rises the tomb of Pharaoh Khufu, the Great Pyramid, the oldest of the Seven Wonders of the Ancient World and the only one you can still visit today. Ask me anything.`,
  facts: [
    {
      q: 'Who built it, and when?',
      a: `It was built for **Pharaoh Khufu** (the Greeks called him Cheops) of Egypt's Fourth Dynasty, and finished around **2560 BCE**, after roughly twenty years of work.

Ancient tradition credits his vizier **Hemiunu** as the architect. It was already about 2,000 years old when the Greeks put it on their list of wonders.`,
    },
    {
      q: 'How big is it?',
      a: `- About **146.6 m (481 ft)** tall when finished; about 138.5 m today, because its top and outer casing are gone.
- Each side of the base is about **230 m** long, and the sides are within a few centimeters of each other.
- Roughly **2.3 million** stone blocks, around 6 million tonnes in all.
For about **3,800 years** it was the tallest human-made structure on Earth.`,
    },
    {
      q: 'Who did the work? Slaves?',
      a: `Probably not slaves. Archaeologists found the **workers' town** just south of the plateau, with bakeries, breweries and plenty of meat, and the workers' own **tombs** nearby, an honor slaves wouldn't get.

Crews were organized into gangs with team names, some scrawled on the stones, like **"Friends of Khufu."** A core of skilled builders was helped by farmers serving in rotation.`,
    },
    {
      q: 'How did they move the stones?',
      a: `Most blocks are limestone quarried right here on the plateau. The fine white **casing** came from **Tura**, across the Nile, and the granite for the King's Chamber from **Aswan**, about 800 km upriver, all by boat.

In 2013, archaeologists found the **Diary of Merer**, the oldest inscribed papyri known: an official's logbook of ferrying Tura limestone to Giza for Khufu. On land, blocks were dragged on sledges up ramps, with water poured on the sand to make it slide.`,
    },
    {
      q: "What's inside?",
      a: `- The **King's Chamber**, lined with red Aswan granite, holding an empty granite sarcophagus.
- The so-called **Queen's Chamber** (it never held a queen).
- The **Grand Gallery**, a soaring corridor about 8.6 m high and 47 m long.
- Narrow shafts that run toward the stars.
In 2017, the ScanPyramids project used cosmic-ray particles to detect a large **hidden void** above the Grand Gallery. What it is remains unknown.`,
    },
    {
      q: 'Why does it look so white?',
      a: `When new, the pyramid was covered in polished white **Tura limestone** casing stones that gleamed in the sun, which is how you see it here.

After a great earthquake in 1303 CE loosened them, most were carted off to build medieval Cairo. A few still sit at the base. The very top probably held a capstone, or pyramidion, that may have been gilded.`,
    },
    {
      q: 'Is it really still standing?',
      a: `Yes: it's the **only one of the Seven Wonders** still standing.

It's also remarkably precise. Its sides face the four directions within a tiny fraction of a degree of true north. Nearby stand the pyramids of Khufu's son Khafre and grandson Menkaure, and the Great Sphinx.`,
    },
  ],

  outfit: {
    fur: '#c9a27a',
    expression: 'happy',
    skirt: '#f4efe2', // a white linen shendyt kilt
    skirtLength: 0.24,
    trim: '#d4a73a',
    parts: [['nemes', { a: '#d4a73a', b: '#1f4f9a' }], ['collar'], ['scroll']],
  },

  env: { sky: '#a9cbe6', fog: '#e3d2ae', fogNear: 120, fogFar: 520, ground: '#d6bc86', hemiSky: '#fff1d6', hemiGround: '#b09060', sun: [60, 90, 40], sunIntensity: 1.9 },
  speed: { walk: 6, run: 12 },
  bound: 150,
  spawn: { x: 0, z: 48, yaw: 0 },
  portal: { x: -8, z: 55, rot: Math.PI, href: HUB, spawn: 'by_great_pyramid' },
  guide: { x: 4, z: 43, rot: Math.atan2(-4, 5) },
  boxes: [
    { x0: -31, x1: 31, z0: -61, z1: 1 }, // the Great Pyramid
    { x0: 40, x1: 50, z0: -45, z1: -35 }, // queens' pyramids
    { x0: 40, x1: 50, z0: -25, z1: -15 },
    { x0: 40, x1: 50, z0: -5, z1: 5 },
    { x0: 52, x1: 72, z0: 20, z1: 28 }, // the Sphinx
  ],
  areas: [
    { x: 0, z: -30, r: 45, label: 'at the foot of the Great Pyramid' },
    { x: 60, z: 24, r: 18, label: 'by the Great Sphinx' },
    { x: 45, z: -20, r: 20, label: "by the queens' pyramids" },
  ],
  elsewhere: 'on the Giza plateau',
}
