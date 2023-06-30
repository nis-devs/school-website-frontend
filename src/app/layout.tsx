import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Fira_Code, Inter, Noto_Sans_TC } from "next/font/google";
import "@/app/globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { fetchAPI } from "@/lib/strapi";
import { site } from "@/config/site";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.titleTemplate}`,
  },
  description: site.description,
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
    site: "@dastanozgeldi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/static/favicon/site.webmanifest",
  keywords: site.keywords,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#000000",
    },
  ],
  creator: "dastanozgeldi",
  openGraph: {
    url: `${site.url}`,
    type: "website",
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: "en_US",
    images: [
      {
        url: `${site.url}/static/images/og/og.png`,
        width: 1704,
        height: 1092,
        alt: site.description,
        type: "image/png",
      },
    ],
  },
  icons: {
    icon: "/static/favicon/favicon.ico",
    shortcut: "/static/favicon/favicon.ico",
    apple: [
      {
        url: "/static/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [...site.favicons],
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const RootLayout = async ({ children }: RootLayoutProps) => {
  const categories = await fetchAPI("/categories", {
    populate: "pages",
  });

  return (
    <html
      lang="en-US"
      className={cn(
        inter.variable,
        notoSansTC.variable,
        firaCode.variable,
        "scroll-smooth"
      )}
    >
      <body>
        <main className="relative mx-auto max-w-4xl p-6">
          <Header categories={categories} />
          <div className="flex flex-col items-center">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
