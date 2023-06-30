import Hero from "@/components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | NIS PM Almaty",
  description:
    "Homepage of Nazarbayev Intellectual School of Physics and Math Almaty",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center py-24">
      <Hero />
    </main>
  );
}
