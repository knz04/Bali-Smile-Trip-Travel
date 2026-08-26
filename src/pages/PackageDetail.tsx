import { useParams, Link } from "react-router-dom";
import PackageHero from "../components/packages/PackageHero";
import { packages } from "../data/packages";
import Button from "../components/Button";
import Paragraph from "../components/packages/detail/Paragraph";
import List from "../components/packages/detail/List";
import Itinerary from "../components/packages/detail/Itinerary";
import Vehicle from "../components/packages/detail/Vehicle";
import InclusionExclusion from "../components/packages/detail/InclusionExclusion";
import Pricing from "../components/packages/detail/Pricing";
import usePageTitle from "../components/PageTitle";
import { useTranslation, Trans } from "react-i18next";

export default function PackageDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const pkg = id ? packages[Number(id)] : undefined;

  usePageTitle(
    pkg
      ? t(`packages.items.${pkg.id}.title`)
      : t("packages.detail.pageTitleNotFound"),
  );

  if (!pkg) {
    return (
      <div className="flex w-full flex-col items-center py-24">
        <p className="text-xl">{t("packages.detail.notFound")}</p>
        <Link to="/packages">
          <Button>{t("packages.detail.backToPackages")}</Button>
        </Link>
      </div>
    );
  }

  const base = `packages.items.${pkg.id}`;
  const title = t(`${base}.title`);
  const description = t(`${base}.description`);

  // Build translated versions of each optional block by merging the
  // (language-neutral) data — images, prices — with translated text.

  const translatedHighlights = pkg.highlights
    ? {
        title: t(`${base}.highlights.title`),
        items: t(`${base}.highlights.items`, {
          returnObjects: true,
        }) as string[],
      }
    : undefined;

  const translatedItinerary = pkg.itinerary
    ? {
        title: t(`${base}.itinerary.title`),
        subtitle: pkg.itinerary.subtitle
          ? t(`${base}.itinerary.subtitle`)
          : undefined,
        pickup: t(`${base}.itinerary.pickup`),
        dropoff: t(`${base}.itinerary.dropoff`),
        items: t(`${base}.itinerary.items`, {
          returnObjects: true,
        }) as string[],
      }
    : undefined;

  const translatedVehicles = pkg.vehicles
    ? {
        main: {
          ...pkg.vehicles.main,
          title: t(`${base}.vehicles.mainTitle`),
          description: t(`${base}.vehicles.mainDescription`),
        },
        upgrade: pkg.vehicles.upgrade.map((v, i) => ({
          ...v,
          title: t(`${base}.vehicles.upgrade.${i}.title`),
          description: v.description
            ? t(`${base}.vehicles.upgrade.${i}.description`)
            : undefined,
        })),
      }
    : undefined;

  const translatedPricing = pkg.pricing
    ? {
        title: t(`${base}.pricing.title`),
        options: pkg.pricing.options?.map((opt, i) => ({
          ...opt,
          title: t(`${base}.pricing.options.${i}.title`),
        })),
        categories: pkg.pricing.categories?.map((cat, i) => ({
          ...cat,
          name: t(`${base}.pricing.categories.${i}.name`),
          options: cat.options.map((opt, j) => ({
            ...opt,
            title: t(`${base}.pricing.categories.${i}.options.${j}.title`),
          })),
        })),
      }
    : undefined;

  const translatedInclusions = pkg.inclusions
    ? (t(`${base}.inclusions`, { returnObjects: true }) as string[])
    : undefined;

  const translatedExclusions = pkg.exclusions
    ? (t(`${base}.exclusions`, { returnObjects: true }) as string[])
    : undefined;

  return (
    <div className="flex w-full flex-col items-center pb-12">
      <PackageHero
        title={title}
        subtitle={t(`${base}.subtitle`)}
        duration={t(`${base}.duration`)}
        image={pkg.image}
      />
      <div className="flex w-[90%] flex-col gap-y-8 pt-12">
        <Paragraph title={title} paragraphs={[description]} />

        {translatedHighlights && (
          <List
            title={translatedHighlights.title}
            items={translatedHighlights.items}
          />
        )}

        {translatedItinerary && (
          <Itinerary
            title={translatedItinerary.title}
            subtitle={translatedItinerary.subtitle}
            pickup={translatedItinerary.pickup}
            dropoff={translatedItinerary.dropoff}
            items={translatedItinerary.items}
          />
        )}

        {translatedVehicles && (
          <Vehicle
            main={translatedVehicles.main}
            upgrade={translatedVehicles.upgrade}
          />
        )}

        {translatedPricing && (
          <Pricing
            title={translatedPricing.title}
            options={translatedPricing.options}
            categories={translatedPricing.categories}
          />
        )}

        {(translatedInclusions || translatedExclusions) && (
          <InclusionExclusion
            inclusions={translatedInclusions}
            exclusions={translatedExclusions}
          />
        )}

        <div className="flex flex-col items-center justify-center gap-y-4">
          <p className="text-xl sm:text-2xl xl:text-3xl">
            <Trans i18nKey="packages.detail.bookNow" values={{ title }}>
              Book your {{ title }} now!
            </Trans>
          </p>
          <Link to="/book">
            <Button>{t("common.bookNow")}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
