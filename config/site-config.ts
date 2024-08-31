export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  promotion?: string;
  liveLink?: string;
  price?: string;
  oldPrice?: string;
  Project?: string;
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x1",
    type: "social",
    title: "Github",
    // icon: "github",
    username: "@MLSAKIIT",
    // buttonTitle: "Follow",
    // buttonSecondaryText: "19",
    buttonLink: "",
    color: "#1DA1F2",
    description:
""  },

  {
    layout: "2x1",
    type: "social",
    title: "Official Website",
    // icon: "twitter",
    username: "mlsakiit.com",
    // buttonTitle: "View Portfolio",
    buttonLink: "",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
""  },
  {
    layout: "2x1",
    type: "social",
    title: "Linkedin",
    // icon:"linkedin",

    username: "@mlsakiit",
    description:
      "",
    color: "#1DA1F2",
    // buttonTitle: "Connect",
    buttonLink: "",
    // buttonSecondaryText: "5K",
  },

  {
    layout: "1x2",
    type: "social",
    title: "Instagram",
    // icon: "discord",
    username: "@mlsakiit",
    // buttonTitle: "Follow",

    // buttonSecondaryText: "44",
    color: "#1DA1F2",
    // buttonLink: "",
    // description: ".",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Twitter",
    // icon: "twitter",
    username: "@mlsakiit",
    // buttonTitle: "Follow",
    // buttonLink: "https://twitter.com/mlsakiit",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    // description:
    // ".",
  },

  {
    layout: "2x1",
    type: "social",
    title: "Whatsapp Channel",
    // icon: "twitter",
    // username: "@",
    // buttonTitle: "View Profile",
    buttonLink: "",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    // description:
  },

  {
    layout: "2x1",
    type: "social",
    title: "Telegram Channel",
    // icon: "youtube",
    // icon: "discord",
    // username: "@",
    // buttonTitle: "Subscribe",
    buttonLink: "",
    // buttonSecondaryText: "44",
    color: "#1DA1F2",
    // description: "",
  },

  {
    layout: "2x1",
    type: "social",
    title: "Discord",
    // icon: "r",
    // username: "",
    // buttonTitle: "",
    buttonLink: "",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "",
    // username: "",
  },

  {
    layout: "2x1",
    type: "social",
    title: "Blogs",
    // icon: "twitter",
    username: "",
    // buttonTitle: "Follow",
    buttonLink: "",
    // buttonSecondaryText: "279",
    color: "#1DA1F2",
    description:
      "",
    // username: "Elon Musk", 
  },





];

export const siteConfig = {
  creator: "MLSAKIIT",
  title: "Microsoft Learn Student Ambassador, KIIT",

  bio: "A technical community dedicatedly working on elevating the coding culture of Kalinga Institute of Industrial Technology, Bhubaneswar by providing opportunities to students to work on projects and boost their analytical and logical skills along with the coding.",
  location: "Event Registration",
  email: "mlsakiit@outlook.com",
  items: GridItems,
} as const;
