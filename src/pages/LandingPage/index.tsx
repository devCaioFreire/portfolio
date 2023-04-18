import { HomeSession } from "./HomeSession";
import { QuoteSession } from "./QuoteSession";
import { ProjectSession } from "./ProjectSession";
import { SkillSession } from "./SkillSession";
import { AboutSession } from "./AboutSession";
import { ContactSession } from "./ContactSession";

export function LandingPage() {
  return (
    <>
      <HomeSession />
      <QuoteSession />
      <ProjectSession />
      <SkillSession />
      <AboutSession />
      <ContactSession />
    </>
  );
}
