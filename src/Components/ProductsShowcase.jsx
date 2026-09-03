import React from "react";

const products = [
  {
    id: "paidink",
    name: "PAIDINK",
    tagline: "Read. Write. Engage.",
    href: "#work-archive",
  },
  // We can be adding more products below here as they launch
];

const MarqueeTrack = ({ items, ariaHidden = false }) => (
  <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
    {items.map((product, index) => (
      <React.Fragment key={`${product.id}-${index}`}>
        <a
          href={product.href}
          className="group flex shrink-0 items-baseline gap-3 px-6 md:gap-4 md:px-10 lg:px-14"
        >
          <span className="zen text-3xl text-black transition-opacity group-hover:opacity-60 sm:text-4xl md:text-5xl lg:text-6xl">
            {product.name}
          </span>
          <span className="txt hidden text-base text-gray-600 sm:inline md:text-lg">
            {product.tagline}
          </span>
        </a>
        <span
          className="zen shrink-0 text-xl text-gray-400 md:text-3xl"
          aria-hidden="true"
        >
          /
        </span>
      </React.Fragment>
    ))}
  </div>
);

const ProductsShowcase = () => {
  const trackItems =
    products.length < 3
      ? Array.from({ length: 3 }, (_, i) => products[i % products.length])
      : products;

  return (
    <div className="mt-16 md:mt-24">
      <div className="border-t border-gray-400" />

      <div className="py-8 md:py-12">
        <h3 className="txtx mb-6 px-4 text-2xl text-black sm:px-0 md:mb-8 md:text-3xl">
          Products we&apos;ve built
        </h3>

        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[#f5f1e6] to-transparent sm:w-12 md:w-20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[#f5f1e6] to-transparent sm:w-12 md:w-20"
            aria-hidden="true"
          />

          <div className="products-marquee flex w-max hover:[animation-play-state:paused]">
            <MarqueeTrack items={trackItems} />
            <MarqueeTrack items={trackItems} aria-hidden="true" />
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 px-4 sm:hidden">
          {products.map((product) => (
            <li key={product.id}>
              <a
                href={product.href}
                className="txt text-sm text-gray-600 underline-offset-2 hover:underline"
              >
                {product.name} — {product.tagline}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-400" />
    </div>
  );
};

export default ProductsShowcase;
