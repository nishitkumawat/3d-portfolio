// ─── Logo Portfolio Data ───────────────────────────────────────────────────
// type: "business" → files starting with "Businees"
// type: "normal"   → all other files (personal / creative concept logos)

export interface LogoItem {
  id: number;
  name: string;
  type: "business" | "normal";
  /** Path relative to /public */
  image: string;
}

const logosData: LogoItem[] = [
  // ── Business Logos (files starting with "Businees") ────────────────
  {
    id: 1,
    name: "Business Logo 1",
    type: "business",
    image: "/images/logos/Businees 7.png",
  },
  {
    id: 2,
    name: "Business Logo 2",
    type: "business",
    image: "/images/logos/Businees 3.png",
  },
  {
    id: 3,
    name: "Business Logo 3",
    type: "business",
    image: "/images/logos/Businees 4.jpg",
  },
  {
    id: 4,
    name: "Business Logo 4",
    type: "business",
    image: "/images/logos/Businees 6.png",
  },
  {
    id: 5,
    name: "Business Logo 5",
    type: "business",
    image: "/images/logos/Businees 5.jpeg",
  },
  {
    id: 6,
    name: "Business Logo 6",
    type: "business",
    image: "/images/logos/Businees 2.png",
  },
  {
    id: 7,
    name: "Business Logo 7",
    type: "business",
    image: "/images/logos/Businees 1.jpg",
  },
  {
    id: 8,
    name: "Business Logo 8",
    type: "business",
    image: "/images/logos/Businees 8.jpg",
  },
  {
    id: 9,
    name: "Business Logo 9",
    type: "business",
    image: "/images/logos/Businees 9.png",
  },

  // ── Normal / Personal / Creative Logos ─────────────────────────────
  {
    id: 10,
    name: "Logo Design",
    type: "normal",
    image: "/images/logos/1617289629788.jpg",
  },
  {
    id: 11,
    name: "Logo Design",
    type: "normal",
    image: "/images/logos/1617704245664.jpg",
  },
  {
    id: 12,
    name: "Logo Design",
    type: "normal",
    image: "/images/logos/1618591775507.png",
  },
  {
    id: 13,
    name: "Logo Design",
    type: "normal",
    image: "/images/logos/1619452651308.jpg",
  },
  {
    id: 14,
    name: "Logo Design",
    type: "normal",
    image: "/images/logos/1627229191284.jpg",
  },
  {
    id: 15,
    name: "Logo Design",
    type: "normal",
    image: "/images/logos/1629726870555.jpg",
  },
  {
    id: 16,
    name: "Logo Design",
    type: "normal",
    image: "/images/logos/1632662678228.png",
  },
  {
    id: 17,
    name: "Logo Design",
    type: "normal",
    image: "/images/logos/1676792778432.jpg",
  },
  {
    id: 18,
    name: "Logo Design",
    type: "normal",
    image: "/images/logos/20210927_204827.jpg",
  },
  {
    id: 19,
    name: "Ashish Logo",
    type: "normal",
    image: "/images/logos/ashishLOGO.jpg",
  },
];

export default logosData;
