import FeaturedProjectCard from "../Components/FeaturedProjectCard";
import { usePortfolio } from "../context/PortfolioContext";

const WorkArchive = () => {
  const { products, loading, error } = usePortfolio();

  return (
    <section
      id="work-archive"
      className="flex min-h-screen flex-col items-center bg-[#F5F3EF] px-6 py-16 font-sans md:px-15 md:py-24"
    >
      <div className="mb-12 text-center">
        <h1 className="txtx mb-5 text-[2.6rem] leading-none tracking-tight md:text-[3.5rem]">
          Work Archive
        </h1>
        <p className="txtx mx-auto max-w-4xl text-[1.7rem] leading-[1.6]">
          A selection of products, concepts, and digital experiences
          <br className="hidden md:block" />
          we&apos;ve designed and built through collaboration, creativity, and
          execution.
        </p>
      </div>

      <div className="mt-20 flex w-full max-w-6xl flex-col gap-16">
        {loading &&
          Array.from({ length: 1 }).map((_, index) => (
            <div
              key={index}
              className="h-[650px] animate-pulse rounded-t-[40px] rounded-bl-[40px] bg-gray-300/50"
            />
          ))}

        {!loading && error && (
          <p className="txt text-center text-lg text-gray-600">
            Unable to load projects right now. Please try again later.
          </p>
        )}

        {!loading &&
          !error &&
          products.map((product) => (
            <FeaturedProjectCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default WorkArchive;
