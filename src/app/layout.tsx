import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Fira_Code, Inter, Noto_Sans_TC } from "next/font/google";
import "@/app/globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type RootLayoutProps = {
  children: React.ReactNode;
};

const title = "NIS PM Almaty";
const description = "Teaching the most talented students of Kazakhstan.";
const image = "https://dosek.xyz/logo.png";
const url = "https://dosek.xyz/";
const locale = "en-US";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  openGraph: {
    title,
    description,
    url,
    images: [
      {
        url: image,
        alt: title,
      },
    ],
    siteName: title,
    locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
    site: "@dastanozgeldi",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;

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
          <Header />
          <div className="flex flex-col items-center">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
