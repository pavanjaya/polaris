import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import {
  IntroStatement,
  ClientStrip,
  Footprint,
  Segments,
  Expertise,
  Process,
  BrandPromise,
  ProjectsRail,
  ImpactBand,
  TrustRow,
  Testimonials,
  LatestNews,
  CareersStrip,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <ClientStrip />
      <Footprint />
      <Segments />
      <Expertise />
      <Process />
      <BrandPromise />
      <ProjectsRail />
      <ImpactBand />
      <TrustRow />
      <Testimonials />
      <LatestNews />
      <CareersStrip />
      <CTA />
    </>
  );
}
