export default function Navbar({ onSearch }) {
  return (
    <header className="bg-black text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-2xl font-bold mb-2 sm:mb-0">Luxury Sales</h1>
      <input
        type="text"
        placeholder="Search brands or items..."
        className="px-3 py-2 rounded-xl text-black w-full sm:w-80"
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
}
