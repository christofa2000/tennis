// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Locations } from "@/components/sections/locations";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Locations />
      <CTA />
    </>
  );
}
