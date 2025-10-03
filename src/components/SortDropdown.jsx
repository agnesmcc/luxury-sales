export default function SortDropdown({ onSort }) {
  return (
    <div className="mb-6 flex justify-end">
      <select
        onChange={(e) => onSort(e.target.value)}
        className="px-3 py-2 rounded-xl border bg-white"
      >
        <option value="">Sort By</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="discountHighLow">Discount: Highest First</option>
      </select>
    </div>
  );
}
