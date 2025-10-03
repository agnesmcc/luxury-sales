export default function Filters({ onFilter }) {
  return (
    <div className="bg-white shadow p-4 rounded-2xl mb-6 flex flex-col sm:flex-row gap-4 flex-wrap">
      {/* Brand Filter */}
      <select
        onChange={(e) =>
          onFilter((prev) => ({ ...prev, brand: e.target.value }))
        }
        className="px-3 py-2 rounded-xl border"
      >
        <option value="">All Brands</option>
        <option value="Gucci">Gucci</option>
        <option value="Prada">Prada</option>
        <option value="Saint Laurent">Saint Laurent</option>
      </select>

      {/* Price Filters */}
      <input
        type="number"
        placeholder="Min Price"
        onChange={(e) =>
          onFilter((prev) => ({ ...prev, minPrice: e.target.value }))
        }
        className="px-3 py-2 rounded-xl border w-28"
      />
      <input
        type="number"
        placeholder="Max Price"
        onChange={(e) =>
          onFilter((prev) => ({ ...prev, maxPrice: e.target.value }))
        }
        className="px-3 py-2 rounded-xl border w-28"
      />

      {/* Discount Filter */}
      <select
        onChange={(e) =>
          onFilter((prev) => ({ ...prev, discount: e.target.value }))
        }
        className="px-3 py-2 rounded-xl border"
      >
        <option value="">Any Discount</option>
        <option value="10">10% or more</option>
        <option value="20">20% or more</option>
        <option value="30">30% or more</option>
        <option value="40">40% or more</option>
        <option value="50">50% or more</option>
      </select>
    </div>
  );
}
