import Cta from "../components/Cta";
import Hero from "../components/Hero";
import Key from "../components/Key";
import PackageOverview from "../components/PackageOverview";
import Smile from "../components/Smile";
import Testimonials from "../components/Testimonials";
import Welcome from "../components/Welcome";

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
