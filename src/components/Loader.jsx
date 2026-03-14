function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      
      <div className="flex gap-2">
        <span className="w-4 h-4 bg-primary rounded-full animate-bounce"></span>
        <span className="w-4 h-4 bg-secondary rounded-full animate-bounce [animation-delay:0.05s]"></span>
        <span className="w-4 h-4 bg-primary rounded-full animate-bounce [animation-delay:0.1s]"></span>
      </div>

      <p className="text-secondary text-sm">Loading photos...</p>

    </div>
  );
}

export default Loader;