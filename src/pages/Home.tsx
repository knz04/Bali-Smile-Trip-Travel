import Cta from "../components/Cta";
import Hero from "../components/home/Hero";
import Key from "../components/home/Key";
import PackageOverview from "../components/home/PackageOverview";
import Smile from "../components/home/Smile";
import Testimonials from "../components/home/Testimonials";
import Welcome from "../components/home/Welcome";
import PageTitle from "../components/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle title="Home" />
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
