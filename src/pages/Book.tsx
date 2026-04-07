import Cal from "@calcom/embed-react";
import SectionHeader from "../components/SectionHeader";
import PageTitle from "../components/PageTitle";

export default function Book() {
  return (
    <div className="flex w-full flex-col">
      <PageTitle title="Book" />
      <SectionHeader
        heading="Book a Trip"
        subheading="Ready to explore Bali? Share your details and we'll help plan your unforgettable adventure."
      />
      <div className="p-12">
        <Cal calLink="balismiletripandtravel/book" />
      </div>
    </div>
  );
}
