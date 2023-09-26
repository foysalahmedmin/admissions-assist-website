const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-0rem)]">
      <p className="text-5xl font-thin">L</p>
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-secondary"></div>
      <p className="text-5xl font-thin">ading...</p>
    </div>
  );
};

export default Loading;
