import Cal from "@calcom/embed-react";
import SectionHeader from "../components/SectionHeader";
import usePageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";

export default function Book() {
  const { t } = useTranslation();
  usePageTitle(t("book.pageTitle"));

  return (
    <div className="flex w-full flex-col">
      <SectionHeader
        heading={t("book.header.heading")}
        subheading={t("book.header.subheading")}
      />
      <div className="p-12">
        <Cal calLink="balismiletripandtravel/book" />
      </div>
    </div>
  );
}
