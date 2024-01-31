const Tile = ({ title, subtitle }: { title: String; subtitle: String }) => {
  return (
    <div className="flex flex-col items-start justify-center bg-[#202630] text-white rounded-3xl p-5 md:p-10">
      <h1 className="text-2xl lg:text-7xl font-black mb-2 lg:mb-5">{title}</h1>
      <h1 className="text-sm uppercase">{subtitle}</h1>
    </div>
  );
};

export default Tile;
