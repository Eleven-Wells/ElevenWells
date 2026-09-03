import { getProductImage } from "../utils/portfolioFallbacks";

const DEFAULT_GRADIENT = "linear-gradient(#6E0A0A, #001A1A)";

const FeaturedProjectCard = ({ product }) => {
  const image = getProductImage(product);
  const description = product.description?.trim() || product.tagline;
  const background = product.background?.trim() || DEFAULT_GRADIENT;

  return (
    <div
      className="overflow-hidden rounded-t-[40px] rounded-bl-[40px] sm:h-[650px] md:h-[115vh]"
      style={{ background }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr]">
        <div className="flex min-h-[320px] flex-col justify-end px-8 pb-12 text-white md:min-h-[650px] md:px-12 md:pb-20">
          <h2 className="zen mb-6 text-5xl font-bold md:-rotate-90 md:mb-10 md:text-[5.5rem]">
            {product.name}
          </h2>

          <p className="txt mt-4 max-w-[300px] text-[1.14rem] leading-6 text-gray-300 md:mt-20">
            {description}
          </p>
        </div>

        {image && (
          <div className="relative flex items-end">
            <img
              src={image}
              alt={product.name}
              className="-mb-6 h-[24rem] w-full object-cover md:h-[32rem]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
