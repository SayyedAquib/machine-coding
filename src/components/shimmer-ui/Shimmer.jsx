const Shimmer = () => {
  return Array(15)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="p-5 m-4 w-64 rounded-lg">
        <div className="animate-pulse flex flex-col space-x-4">
          <div className="rounded-lg bg-gray-300  h-64 w-64"></div>
          <div className="flex-1 space-y-4 py-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 rounded"></div>
              <div className="h-3 bg-gray-300 rounded w-5/6"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-300 rounded"></div>
              <div className="h-3 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    ));
};

export default Shimmer;
