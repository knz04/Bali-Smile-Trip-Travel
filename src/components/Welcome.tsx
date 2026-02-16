import Button from "./Button";
import welcome from "../assets/welcome.webp";

export default function Welcome() {
  return (
    <div className="flex h-[80vh] w-full flex-row items-center justify-center gap-x-8">
      <div className="flex">
        <img src={welcome} alt="Welcome" className="h-96 w-full" />
      </div>
      <div className="flex w-[40%] flex-col gap-y-4">
        <p className="text-4xl">Welcome to Bali Smile Trip & Travel</p>
        <p className="max-w-[75%] pt-2 font-light">
          Founded by Dewa Wahya, a dedicated Balinese local with many years of
          experience in the tourism and hospitality industry, our mission is
          simple: to create personal, meaningful, and unforgettable travel
          experiences in Bali.
        </p>
        <p className="max-w-[75%] pb-2 font-light">
          We go beyond standard transportation — we share stories, insights, and
          the authentic essence of Bali during every trip.
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
