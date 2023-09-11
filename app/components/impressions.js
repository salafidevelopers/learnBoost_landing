const Impressions = () => {
  return (
    <div className="flex justify-around items-center py-20 ">
      <div className="flex flex-col gap-3 items-center">
        <p className="font-medium text-4xl md:font-semibold md:text-6xl lg:font-bold font-['Space Grotesk'] ">
          100
        </p>
        <p className="font['Space Grotesk'] font-light text-sm md:font-medium md:text-lg">
          User
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <p className="font-medium text-4xl md:font-semibold md:text-6xl lg:font-bold font-['Space Grotesk'] ">
          33k
        </p>
        <p className="font['Space Grotesk'] font-light text-sm md:font-medium md:text-lg">
          Download
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <p className="font-medium text-4xl md:font-semibold md:text-6xl lg:font-bold font-['Space Grotesk'] ">
          10k
        </p>
        <p className="font['Space Grotesk'] font-light text-sm md:font-medium md:text-lg">
          Customer
        </p>
      </div>
    </div>
  );
};

export default Impressions;
