import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import FilterTags from "./components/FilterTags";
import SortDropdown from "./components/SortDropdown";

export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    minPrice: "",
    maxPrice: "",
    discount: ""
  });
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const clearFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: "" }));
  };

  const clearAll = () => {
    setFilters({ brand: "", minPrice: "", maxPrice: "", discount: "" });
  };

  const filtered = products.filter((p) => {
    const matchesSearch = `${p.brand} ${p.item}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesBrand = filters.brand ? p.brand === filters.brand : true;

    const matchesMin = filters.minPrice
      ? p.salePrice >= parseInt(filters.minPrice)
      : true;

    const matchesMax = filters.maxPrice
      ? p.salePrice <= parseInt(filters.maxPrice)
      : true;

    const discountPercent = Math.round(
      ((p.originalPrice - p.salePrice) / p.originalPrice) * 100
    );

    const matchesDiscount = filters.discount
      ? discountPercent >= parseInt(filters.discount)
      : true;

    return (
      matchesSearch &&
      matchesBrand &&
      matchesMin &&
      matchesMax &&
      matchesDiscount
    );
  });

  // Sorting logic
  const sorted = [...filtered].sort((a, b) => {
    if (sortOption === "priceLowHigh") {
      return a.salePrice - b.salePrice;
    }
    if (sortOption === "priceHighLow") {
      return b.salePrice - a.salePrice;
    }
    if (sortOption === "discountHighLow") {
      const discountA = (a.originalPrice - a.salePrice) / a.originalPrice;
      const discountB = (b.originalPrice - b.salePrice) / b.originalPrice;
      return discountB - discountA;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onSearch={setSearch} />
      <div className="p-6">
        <Filters onFilter={setFilters} />
        <FilterTags filters={filters} clearFilter={clearFilter} clearAll={clearAll} />
        <SortDropdown onSort={setSortOption} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sorted.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
