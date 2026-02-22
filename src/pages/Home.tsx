import Cta from "../components/Cta";
import Hero from "../components/home/Hero";
import Key from "../components/home/Key";
import PackageOverview from "../components/home/PackageOverview";
import Smile from "../components/home/Smile";
import Testimonials from "../components/home/Testimonials";
import Welcome from "../components/home/Welcome";

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Smile />
      <Key />
      <PackageOverview />
      <Testimonials />
      <Cta />
    </>
  );
}
