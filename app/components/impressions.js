const Impressions = () => {
  return (
    <div className="flex justify-around items-center py-20 ">
      <div className="flex flex-col gap-3 items-center">
        <p className="font-bold text-5xl font=['Space Grotesk'] ">100</p>
        <p className="font['Space Grotesk'] text-2xl font-medium">User</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <p className="font-bold text-5xl font=['Space Grotesk'] ">33k</p>
        <p className="font['Space Grotesk'] text-2xl font-medium">Download</p>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <p className="font-bold text-5xl font=['Space Grotesk'] ">10k</p>
        <p className="font['Space Grotesk'] text-2xl font-medium">Customer</p>
      </div>
    </div>
  );
};

export default Impressions;
