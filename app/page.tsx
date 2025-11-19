// generated with Cursor + agents.md — reviewed by Christian Oscar Papa

import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Locations } from "@/components/sections/locations";
import { Services } from "@/components/sections/services";
import { Tournaments } from "@/components/sections/tournaments";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Tournaments />
      <About />
      <Locations />
      <Contact />
    </>
  );
}
