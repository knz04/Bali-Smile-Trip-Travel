import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SectionHeader from "../components/SectionHeader";
import { tags, galleryItems } from "../data/gallery";
import usePageTitle from "../components/PageTitle";
import { useTranslation } from "react-i18next";

const ITEMS_PER_PAGE = 12;

type GalleryItem = {
  id: number;
  title: string;
  tags: string[];
  image: string;
};

export default function Gallery() {
  const { t } = useTranslation();
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [page, setPage] = useState(1);

  // Tags and item titles are stored in data/gallery.ts under their original
  // English keys/ids; only the displayed label is translated, so filtering
  // logic below keeps working regardless of the active language.
  const tagLabel = (tag: string) => t(`gallery.tags.${tag}`, tag);
  const itemTitle = (item: GalleryItem) =>
    item.title ? t(`gallery.items.${item.id}.title`, item.title) : "";

  const filtered = galleryItems.filter((item) => {
    const matchesTag = activeTag === "All" || item.tags.includes(activeTag);
    const translatedTitle = itemTitle(item).toLowerCase();
    const translatedTags = item.tags.map((tg) => tagLabel(tg).toLowerCase());
    const searchLower = search.toLowerCase();
    const matchesSearch =
      search === "" ||
      translatedTitle.includes(searchLower) ||
      translatedTags.some((tg) => tg.includes(searchLower));
    return matchesTag && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const handleTagChange = (tag: string) => {
    setActiveTag(tag);
    setPage(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  usePageTitle(t("gallery.pageTitle"));

  return (
    <div>
      <SectionHeader
        heading={t("gallery.header.heading")}
        subheading={t("gallery.header.subheading")}
      />

      <div className="flex flex-col justify-center gap-6 p-8 md:flex-row md:p-12">
        {/* Sidebar */}
        <div className="flex w-full flex-col gap-2 md:w-48 md:shrink-0">
          <SearchBar value={search} onChange={handleSearch} />
          <div className="flex flex-col gap-1">
            {tags.map((tag) => (
              <p
                key={tag}
                onClick={() => handleTagChange(tag)}
                className={`cursor-pointer text-sm font-light transition-all lg:text-base ${
                  activeTag === tag
                    ? "text-primary font-semibold underline"
                    : "text-primary hover:underline"
                }`}
              >
                {tagLabel(tag)}
              </p>
            ))}
          </div>
        </div>

        {/* Grid + Pagination */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {paginated.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelected(item)}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-sm"
              >
                <img
                  src={item.image}
                  alt={itemTitle(item) || t("gallery.imageAlt")}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {item.title && (
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/50 to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium text-white lg:text-base">
                      {itemTitle(item)}
                    </p>
                  </div>
                )}
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-3 flex flex-col items-center justify-center py-16 text-center">
                <p className="text-primary text-lg font-medium">
                  {t("gallery.noResults.title")}
                </p>
                <p className="text-primary mt-1 text-sm font-light opacity-60">
                  {t("gallery.noResults.subtitle")}
                </p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1">
              {/* Prev */}
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="bg-secondary text-primary rounded-sm px-3 py-1.5 text-sm font-medium transition hover:opacity-80 disabled:opacity-30"
              >
                ←
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`rounded-sm px-3 py-1.5 text-sm font-medium transition lg:text-base ${
                    p === page
                      ? "bg-primary text-white"
                      : "bg-secondary text-primary hover:bg-yellow"
                  }`}
                >
                  {p}
                </button>
              ))}

              {/* Next */}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="bg-secondary text-primary rounded-sm px-3 py-1.5 text-sm font-medium transition hover:opacity-80 disabled:opacity-30 lg:text-base"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dialog */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-md bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={itemTitle(selected) || t("gallery.imageAlt")}
              className="max-h-[70vh] w-full object-contain"
            />
            <div className="p-4">
              {selected.title && (
                <p className="text-base font-semibold">{itemTitle(selected)}</p>
              )}
              <div className="mt-2 flex flex-wrap gap-1">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-sm lg:text-base"
                  >
                    {tagLabel(tag)}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 rounded-full bg-black/50 px-2 py-1 text-xs text-white hover:bg-black/70"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
