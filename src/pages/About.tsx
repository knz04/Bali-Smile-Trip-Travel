import SectionHeader from "../components/SectionHeader";
import dewa from "../assets/dewa.webp";
import { Link } from "react-router-dom";
import Cta from "../components/Cta";
import usePageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";

const statAmounts = ["10+", "100+", "100+", "100+"];

export default function About() {
  const { t } = useTranslation();
  usePageTitle(t("about.pageTitle"));

  const statTexts = t("about.stats.items", { returnObjects: true }) as string[];
  const stats = statAmounts.map((amount, i) => ({
    amount,
    text: statTexts[i],
  }));

  const philosophyList = t("about.founder.philosophyList", {
    returnObjects: true,
  }) as string[];
  const item3List = t("about.why.item3.list", {
    returnObjects: true,
  }) as string[];
  const item4List = t("about.why.item4.list", {
    returnObjects: true,
  }) as string[];
  const item5List = t("about.why.item5.list", {
    returnObjects: true,
  }) as string[];
  const item8List = t("about.why.item8.list", {
    returnObjects: true,
  }) as string[];

  return (
    <div className="flex w-full flex-col">
      <SectionHeader
        heading={t("about.header.heading")}
        subheading={t("about.header.subheading")}
      />

      <div className="flex flex-col justify-around p-8 md:p-12 lg:flex-row">
        {/* Founder image mobile */}
        <div className="flex flex-col items-center gap-y-2 pb-6 lg:hidden">
          <img src={dewa} className="w-fit sm:h-48 md:h-60 lg:h-80" />
          <div className="flex flex-col">
            <p className="text-primary text-center text-sm font-normal lg:text-base">
              {t("about.founder.name")}
            </p>
            <p className="text-primary text-center text-sm font-light lg:text-base">
              {t("about.founder.role")}
            </p>
          </div>
        </div>

        {/* About founder */}
        <div className="flex flex-col gap-y-8 lg:w-2/3">
          {/* Meet our founder*/}
          <div className="flex flex-col">
            <p className="text-primary pb-6 text-3xl xl:text-4xl">
              {t("about.founder.meetTitle")}
            </p>
            <p className="text-primary pb-4 text-sm font-light lg:text-base">
              {t("about.founder.intro1")}
            </p>
            <p className="text-primary pb-4 text-sm font-light lg:text-base">
              {t("about.founder.intro2")}
            </p>
            <p className="text-primary text-sm font-normal lg:text-base">
              {t("about.founder.hospitalityHeading")}
            </p>
            <p className="text-primary pb-4 text-sm font-light lg:text-base">
              {t("about.founder.hospitalityP1")}
            </p>
            <p className="text-primary pb-4 text-sm font-light lg:text-base">
              {t("about.founder.hospitalityP2")}
            </p>
            <p className="text-primary text-sm font-normal lg:text-base">
              {t("about.founder.certifiedHeading")}
            </p>
            <p className="text-primary pb-4 text-sm font-light lg:text-base">
              {t("about.founder.certifiedP1")}
            </p>
            <p className="text-primary text-sm font-normal lg:text-base">
              {t("about.founder.philosophyHeading")}
            </p>
            <p className="text-primary text-sm font-light lg:text-base">
              {t("about.founder.philosophyIntro")}
            </p>
            <ul className="list-disc pb-4 pl-5">
              {philosophyList.map((item, i) => (
                <li
                  key={i}
                  className="text-primary text-sm font-light lg:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-primary pb-4 text-sm font-light lg:text-base">
              {t("about.founder.philosophyOutro")}
            </p>
            <p className="text-primary text-sm font-normal lg:text-base">
              {t("about.founder.friendHeading")}
            </p>
            <p className="text-primary pb-4 text-sm font-light lg:text-base">
              {t("about.founder.friendP1")}
            </p>
            <p className="text-primary pb-4 text-sm font-light lg:text-base">
              {t("about.founder.friendP2")}
            </p>
          </div>

          {/* Why choose us*/}
          <div>
            <p className="text-primary pb-6 text-3xl font-normal xl:text-4xl">
              {t("about.why.heading")}
            </p>
            <div className="flex flex-col gap-y-6">
              {/* Item 1 */}
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl md:h-12 md:w-12 md:text-2xl lg:text-3xl">
                    1
                  </p>
                  <p className="text-2xl lg:text-3xl">
                    {t("about.why.item1.title")}
                  </p>
                </div>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item1.description")}
                </p>
              </div>
              {/* Item 2 */}
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl md:h-12 md:w-12 md:text-2xl lg:text-3xl">
                    2
                  </p>
                  <p className="text-2xl lg:text-3xl">
                    {t("about.why.item2.title")}
                  </p>
                </div>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item2.description")}
                </p>
              </div>
              {/* Item 3 */}
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl md:h-12 md:w-12 md:text-2xl lg:text-3xl">
                    3
                  </p>
                  <p className="text-2xl lg:text-3xl">
                    {t("about.why.item3.title")}
                  </p>
                </div>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item3.listIntro")}
                </p>
                <ul className="list-disc pb-4 pl-5">
                  {item3List.map((item, i) => (
                    <li
                      key={i}
                      className="text-primary text-sm font-light lg:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item3.listOutro")}
                </p>
              </div>
              {/* Item 4 */}
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl md:h-12 md:w-12 md:text-2xl lg:text-3xl">
                    4
                  </p>
                  <p className="text-2xl lg:text-3xl">
                    {t("about.why.item4.title")}
                  </p>
                </div>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item4.listIntro")}
                </p>
                <ul className="list-disc pb-4 pl-5">
                  {item4List.map((item, i) => (
                    <li
                      key={i}
                      className="text-primary text-sm font-light lg:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item4.listOutro")}
                </p>
              </div>
              {/* Item 5 */}
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl md:h-12 md:w-12 md:text-2xl lg:text-3xl">
                    5
                  </p>
                  <p className="text-2xl lg:text-3xl">
                    {t("about.why.item5.title")}
                  </p>
                </div>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item5.listIntro")}
                </p>
                <ul className="list-disc pb-4 pl-5">
                  {item5List.map((item, i) => (
                    <li
                      key={i}
                      className="text-primary text-sm font-light lg:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item5.listOutro")}
                </p>
              </div>
              {/* Item 6 */}
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl md:h-12 md:w-12 md:text-2xl lg:text-3xl">
                    6
                  </p>
                  <p className="text-2xl lg:text-3xl">
                    {t("about.why.item6.title")}
                  </p>
                </div>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item6.description")}
                </p>
              </div>
              {/* Item 7 */}
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl md:h-12 md:w-12 md:text-2xl lg:text-3xl">
                    7
                  </p>
                  <p className="text-2xl lg:text-3xl">
                    {t("about.why.item7.title")}
                  </p>
                </div>
                <p className="text-primary pb-4 text-sm font-light lg:text-base">
                  {t("about.why.item7.description1")}
                </p>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item7.description2")}
                </p>
                <Link
                  to="https://maps.app.goo.gl/r8nSb1v5k6963Wp86?g_st=ipc"
                  target="_blank"
                  className="text-primary text-sm font-light underline hover:cursor-pointer lg:text-base"
                >
                  https://maps.app.goo.gl/r8nSb1v5k6963Wp86?g_st=ipc
                </Link>
              </div>
              {/* Item 8 */}
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-x-2 pb-2">
                  <p className="text-yellow bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl md:h-12 md:w-12 md:text-2xl lg:text-3xl">
                    8
                  </p>
                  <p className="text-2xl lg:text-3xl">
                    {t("about.why.item8.title")}
                  </p>
                </div>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item8.listIntro")}
                </p>
                <ul className="list-disc pb-4 pl-5">
                  {item8List.map((item, i) => (
                    <li
                      key={i}
                      className="text-primary text-sm font-light lg:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-primary text-sm font-light lg:text-base">
                  {t("about.why.item8.listOutro")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder image */}
        <div className="hidden flex-col items-center gap-y-2 lg:flex">
          <img src={dewa} className="w-fit lg:h-80" />
          <div className="flex flex-col">
            <p className="text-primary text-center font-normal lg:text-base">
              {t("about.founder.name")}
            </p>
            <p className="text-primary text-center font-light lg:text-base">
              {t("about.founder.role")}
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex w-full flex-col items-center justify-around gap-2 px-8 pb-12 md:flex-row md:px-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-yellow flex h-36 w-full flex-col items-center justify-center gap-y-2 rounded-xs md:w-54 xl:h-42 xl:w-70"
          >
            <p className="text-primary text-center font-semibold md:text-2xl lg:text-3xl xl:text-4xl">
              {stat.amount}
            </p>
            <p className="text-primary text-center text-sm font-light lg:text-base">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
      <Cta />
    </div>
  );
}
