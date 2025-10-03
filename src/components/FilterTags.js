export default function FilterTags({ filters, clearFilter, clearAll }) {
  const tags = [];

  if (filters.brand) {
    tags.push({ label: filters.brand, key: "brand" });
  }
  if (filters.minPrice) {
    tags.push({ label: `Min $${filters.minPrice}`, key: "minPrice" });
  }
  if (filters.maxPrice) {
    tags.push({ label: `Max $${filters.maxPrice}`, key: "maxPrice" });
  }
  if (filters.discount) {
    tags.push({ label: `${filters.discount}%+ off`, key: "discount" });
  }

  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6 items-center">
      {tags.map((tag) => (
        <span
          key={tag.key}
          className="bg-black text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
        >
          {tag.label}
          <button
            onClick={() => clearFilter(tag.key)}
            className="ml-1 text-gray-300 hover:text-white"
          >
            ✕
          </button>
        </span>
      ))}

      {/* Clear All button */}
      <button
        onClick={clearAll}
        className="ml-2 text-sm text-red-500 hover:underline"
      >
        Clear All
      </button>
    </div>
  );
}
