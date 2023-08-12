import Career from "./components/career";
import Features from "./components/features";
import HeroSection from "./components/hero";
import Impressions from "./components/impressions";
import NavBar from "./components/navbar";
import Pricing from "./components/pricing";
import Programme from "./components/programme";
import Progress from "./components/progress";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeroSection />
      <Impressions />
      <Features />
      <Career />
      <Progress />
      <Pricing />
      <Testimonial />
      <Programme />
    </main>
  );
}
