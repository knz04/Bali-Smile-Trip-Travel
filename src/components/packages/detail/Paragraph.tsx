interface ParagraphProps {
  title: string;
  paragraphs: string[];
}

export default function Paragraph({ title, paragraphs }: ParagraphProps) {
  return (
    <div className="flex w-[90%] flex-col gap-y-12">
      <div className="flex flex-col">
        <p className="text-xl sm:text-2xl xl:text-3xl">{title}</p>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-sm font-light lg:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
