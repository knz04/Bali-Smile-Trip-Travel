import Button from "../../Button";

export default function GalleryOverview({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col items-end gap-y-4">
      <div className="grid w-full grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Vehicle Image"
            className="h-32 w-full shrink-0 object-cover lg:h-48"
          />
        ))}
      </div>
      <Button variant="secondary">View More</Button>
    </div>
  );
}
