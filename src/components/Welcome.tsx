import Button from "./Button";
import welcome from "../assets/welcome.webp";

export default function Welcome() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-8 py-2 sm:h-[60vh] lg:h-screen lg:flex-row lg:gap-x-8 xl:h-[50vh]">
      <div className="flex">
        <img src={welcome} alt="Welcome" className="w-full sm:h-64 lg:h-96" />
      </div>
      <div className="flex w-[90%] flex-col gap-y-4 lg:w-[40%]">
        <p className="text-start sm:text-3xl xl:text-4xl">
          Welcome to Bali Smile Trip & Travel
        </p>
        <p className="pt-2 font-light sm:text-sm lg:max-w-[75%] lg:text-base">
          Founded by Dewa Wahya, a dedicated Balinese local with many years of
          experience in the tourism and hospitality industry, our mission is
          simple: to create personal, meaningful, and unforgettable travel
          experiences in Bali.
        </p>
        <p className="pt-2 font-light sm:text-sm lg:max-w-[75%] lg:text-base">
          We go beyond standard transportation — we share stories, insights, and
          the authentic essence of Bali during every trip.
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
