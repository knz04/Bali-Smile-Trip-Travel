import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  return (
    <Helmet>
      <title>{title} | Bali Smile Trip & Travel</title>
    </Helmet>
  );
}
