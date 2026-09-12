import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import {
  IntroStatement,
  ClientStrip,
  Footprint,
  Expertise,
  Process,
  BrandPromise,
  ProjectsRail,
  ImpactBand,
  TrustRow,
  Testimonials,
  LatestNews,
  CareersStrip,
  StatsFooterBand,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <ClientStrip />
      <Expertise />
      <Process />
      <BrandPromise />
      <ProjectsRail />
      <TrustRow />
      <ImpactBand />
      <Testimonials />
      <Footprint />
      <LatestNews />
      <CareersStrip />
      <CTA />
      <StatsFooterBand />
    </>
  );
}
