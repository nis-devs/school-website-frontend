import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types";

type Site = {
  url: string;
  logo: string;
  title: string;
  name: string;
  keywords: string[];
  titleTemplate: string;
  description: string;
  favicons: IconDescriptor[];
};

export const site: Site = {
  url:
    process.env.NODE_ENV === "production"
      ? "https://school-website-frontend.vercel.app"
      : "http://localhost:3000",
  logo: "https://school-website-frontend.vercel.app/static/images/logo.png",
  title: "NIS PM Almaty",
  name: "NIS PM Almaty",
  keywords: ["fmalm", "nis", "dastanozgeldi", "Next.js", "Strapi"],
  titleTemplate: "NIS PM Almaty",
  description: "Teaching the most talented students of Kazakhstan.",
  favicons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/static/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/static/favicon/favicon-32x32.png",
    },
  ],
};
