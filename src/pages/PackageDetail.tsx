import { useParams } from "react-router";

export default function PackageDetail() {
  const { slug } = useParams();

  return <div>test {slug}</div>;
}
