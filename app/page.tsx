"use client";

import { useState } from "react";
import { tours } from "../data/tours";
import type { Product, TourKey } from "../data/tours";

export default function HomePage() {
  const [activeTourKey, setActiveTourKey] = useState<TourKey>("coiCorn");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const activeTour = tours.find((tour) => tour.key === activeTourKey) ?? tours[0];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-md flex-col pb-24">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/95 px-5 py-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-400">
            Pioneer Seeds
          </p>
          <h1 className="mt-1 text-2xl font-bold">
            Century of Innovation
          </h1>
        </header>

        <section className="px-5 py-5">
          <div className="rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-600 p-5 text-slate-950 shadow-lg">
            <p className="text-xs font-bold uppercase tracking-[0.2em]">
              Virtual Crop Tour
            </p>
            <h2 className="mt-2 text-2xl font-black">
              {activeTour.title}
            </h2>
            <p className="mt-2 text-sm leading-6">
              {activeTour.description}
            </p>
          </div>
        </section>

        <section className="flex-1 space-y-4 px-5">
          {activeTour.products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="w-full overflow-hidden rounded-3xl bg-white text-left text-slate-950 shadow-md transition active:scale-[0.98]"
            >
              <div className="flex gap-4 p-3">
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="h-28 w-28 rounded-2xl object-cover"
                />

                <div className="flex flex-1 flex-col justify-center">
                  {product.year && (
                    <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                      {product.year}
                    </p>
                  )}

                  <h3 className="text-lg font-black">
                    {product.name}
                  </h3>

                  {product.subtitle && (
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {product.subtitle}
                    </p>
                  )}

                  <p className="mt-2 line-clamp-3 text-sm leading-5 text-slate-700">
                    {product.shortDescription}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </section>

        <BottomTabs
          activeTourKey={activeTourKey}
          onChange={setActiveTourKey}
        />

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </section>
    </main>
  );
}

function BottomTabs({
  activeTourKey,
  onChange
}: {
  activeTourKey: TourKey;
  onChange: (key: TourKey) => void;
}) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto grid max-w-md grid-cols-4">
        {tours.map((tour) => {
          const isActive = tour.key === activeTourKey;

          return (
            <button
              key={tour.key}
              onClick={() => onChange(tour.key)}
              className={`px-2 py-4 text-xs font-bold transition ${
                isActive
                  ? "bg-yellow-400 text-slate-950"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tour.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function ProductModal({
  product,
  onClose
}: {
  product: Product;
  onClose: () => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = product.images[activeImageIndex] ?? product.thumbnail;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 p-4 backdrop-blur">
      <div className="mx-auto flex h-full max-w-md flex-col overflow-hidden rounded-3xl bg-white text-slate-950 shadow-2xl">
        <div className="relative">
          <img
            src={activeImage}
            alt={product.name}
            className="h-72 w-full object-cover"
          />

          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-black/70 px-4 py-2 text-sm font-bold text-white"
          >
            Close
          </button>
        </div>

        {product.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto border-b border-slate-200 p-3">
            {product.images.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveImageIndex(index)}
                className={`h-16 w-16 flex-none overflow-hidden rounded-xl border-2 ${
                  index === activeImageIndex
                    ? "border-yellow-500"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-5">
          {product.year && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              {product.year}
            </p>
          )}

          <h2 className="mt-1 text-2xl font-black">
            {product.name}
          </h2>

          {product.subtitle && (
            <p className="mt-1 text-sm font-semibold text-slate-500">
              {product.subtitle}
            </p>
          )}

          <p className="mt-4 text-sm leading-6 text-slate-700">
            {product.fullDescription}
          </p>

          {product.highlights && product.highlights.length > 0 && (
            <div className="mt-5 rounded-2xl bg-slate-100 p-4">
              <h3 className="font-black">Highlights</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="font-black text-yellow-600">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
