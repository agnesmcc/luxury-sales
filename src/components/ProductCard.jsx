
export default function ProductCard({ product }) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );

  return (
    <div className="bg-white shadow rounded-2xl p-4 hover:scale-105 transition relative">
      {/* Discount badge */}
      {discountPercent > 0 && (
        <span className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded-lg">
          -{discountPercent}%
        </span>
      )}
      <img
        src={product.image}
        alt={product.item}
        className="rounded-xl mb-3"
      />
      <h2 className="text-xl font-semibold">{product.brand}</h2>
      <p className="text-gray-600">{product.item}</p>
      <p className="line-through text-gray-400">${product.originalPrice}</p>
      <p className="text-red-500 font-bold">${product.salePrice}</p>
      <a
        href={product.link}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-2 px-3 py-1 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Shop Now
      </a>
    </div>
  );
}

