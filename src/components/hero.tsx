"use client";
import Link from "next/link";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <Image src="/logo.png" alt="logo" width={150} height={150} priority />
      <div className="text-center py-12">
        <p className="text-2xl">
          <Balancer>Nazarbayev Intellectual School</Balancer>
        </p>
        <p className="text-2xl">
          <Balancer>of Physics and Math Almaty</Balancer>
        </p>
      </div>
      <div>
        <Button variant={"ghost"} asChild>
          <Link href="mailto:info@fmalm.nis.edu.kz">Email</Link>
        </Button>
        <Button variant={"ghost"} asChild>
          <Link
            href="tel:87273310104"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </Link>
        </Button>
        <Button variant={"ghost"}>
          <Link
            href="https://go.2gis.com/dvoxj"
            target="_blank"
            rel="noopener noreferrer"
          >
            Location
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Hero;
