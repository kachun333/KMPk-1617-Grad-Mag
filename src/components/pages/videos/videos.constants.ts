interface Iframe {
  id: string;
  xs?: number;
  md?: number;
}

interface Section {
  title: string;
  iframes: Iframe[];
}

export const videosData: Section[] = [
  {
    title: "Trails Of Culture",
    iframes: [
      {
        id: "s2T9ilEFrWo",
      },
      {
        id: "8N1C7eIF6Hc",
      },
      {
        id: "SQ3eFSClVzg",
      },
    ],
  },
  {
    title: "春晓",
    iframes: [
      {
        id: "85sP940mbYQ",
      },
      {
        id: "tysr8x5aFGI",
      },
    ],
  },
  {
    title: "春晓 活动日",
    iframes: [
      {
        id: "Aa3MRyYy5b8",
      },
      {
        id: "y0KLTwdnNTY",
      },
    ],
  },
  {
    title: "JPP",
    iframes: [
      {
        id: "SamrBf6bS4Y",
      },
    ],
  },
  {
    title: "毕业刊",
    iframes: [
      {
        id: "hKVBjBExhrU",
      },
      {
        id: "6xp3VrT80Aw",
      },
    ],
  },
];
