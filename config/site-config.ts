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
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@MLSAKIIT",
    buttonTitle: "Follow",
    // buttonSecondaryText: "",
    buttonLink: "https://github.com/mlsakiit",
    color: "#000",
    description: "",
  },

  
  {
    layout: "1x2",
    type: "social",
    title: "Linkedin",
    icon:"Linkedin",
    username: "@msckiit",
    description: "",
    color: "#0288d1",
    buttonTitle: "Follow",
    buttonLink: "https://www.linkedin.com/company/msckiit/mycompany/",
    // buttonSecondaryText: "",
  },

  {
    layout: "1x2",
    type: "social",
    title: "Instagram",
    icon: "Instagram",
    username: "@mlsakiit",
    buttonTitle: "Follow",
    // buttonSecondaryText: "",
    color: "#f24d58",
    buttonLink: "https://www.instagram.com/mlsakiit",
    // description: ".",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@mlsakiit",
    buttonTitle: "Follow",
    buttonLink: "https://x.com/mlsakiit",
    // buttonSecondaryText: "",
    color: "#1DA1F2",
    // description:
    // ".",
  },

  {
    layout: "2x2",
    type: "social",
    title: "Whatsapp",
    icon: "whatsapp",
    // username: "@",
    buttonTitle: "Join channel",
    buttonLink: "https://www.whatsapp.com/channel/0029VaDdytG0gcfRDXmxTG1w",
    // buttonSecondaryText: "",
    color: "#40c351",
    description:
      "Join the mlsakiit whatsapp channel for regular updates and information related to events and recruitment.",
  },

  {
    layout: "1x2",
    type: "social",
    title: "Telegram",
    icon: "telegram",
    // icon: "",
    // username: "@",
    buttonTitle: "Join Channel",
    buttonLink: "https://t.me/+MSB0yIX9ueNhZjBl",
    // buttonSecondaryText: "",
    color: "#29b6f6",
    // description: "",
  },

  // {
  //   layout: "1x2",
  //   type: "social",
  //   title: "Website",
  //   // icon: "",
  //   username: "mlsakiit.com",
  //   buttonTitle: "Visit Website",
  //   buttonLink: "https://mlsakiit.com",
  //   // buttonSecondaryText: "",
  //   color: "#1DA1F2",
  //   description: "",
  // },

  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    // username: "",
    buttonTitle: "Join",
    buttonLink: "https://discord.com/invite/BW28wXGfsZ",
    // buttonSecondaryText: "",
    color: "#1DA1F2",
    description: "",
    // username: "",
  },

  {
    layout: "2x1",
    type: "social",
    title: "Blogs",
    // icon: "",
    username: "@msackiit",
    // buttonTitle: "",
    buttonLink: "https://medium.com/msackiit",
    // buttonSecondaryText: "",
    color: "#1DA1F2",
    description: "",
    // username: "",
  },

  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@kiitkaksha",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/c/KIITKAKSHA",
    // buttonSecondaryText: "",
    color: "red",
    // description:
    // "",
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
