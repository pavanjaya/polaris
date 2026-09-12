import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import {
  IntroStatement,
  ClientStrip,
  Footprint,
  GlobalScene,
  Expertise,
  Process,
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
      <Expertise />
      <Process />
      <ProjectsRail />
      <TrustRow />
      <ImpactBand />
      <Testimonials />
      <GlobalScene />
      <Footprint />
      <LatestNews />
      <CareersStrip />
      <CTA />
    </>
  );
}
