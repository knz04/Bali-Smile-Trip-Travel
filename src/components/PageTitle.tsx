import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  console.log("Helmet rendering:", title);

  return (
    <Helmet defer={false}>
      <title key="title">{title} | Bali Smile Trip & Travel</title>
    </Helmet>
  );
}
