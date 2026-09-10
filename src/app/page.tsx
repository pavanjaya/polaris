import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import {
  IntroStatement,
  ClientStrip,
  Expertise,
  ByTheNumbers,
  BrandPromise,
  ProjectsRail,
  LatestNews,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStatement />
      <ClientStrip />
      <Expertise />
      <ByTheNumbers />
      <BrandPromise />
      <ProjectsRail />
      <LatestNews />
      <CTA />
    </>
  );
}
