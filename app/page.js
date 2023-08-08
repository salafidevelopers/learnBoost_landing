import Features from "./components/features";
import HeroSection from "./components/hero";
import Impressions from "./components/impressions";
import NavBar from "./components/navbar";
// ("use client");

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <HeroSection />
      <Impressions />
      <Features />
    </main>
  );
}
