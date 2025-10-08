let Input = () => {
  return (
    <div className="w-full max-w-sm">
      <input
        type="text"
        placeholder="Enter text..."
        className="w-full px-4 py-2 border border-gray-300 rounded-xl 
                   shadow-sm focus:outline-none focus:ring-2 
                   focus:ring-pink-500 focus:border-pink-500
                   transition duration-300"
      />
    </div>
  );
};

export default Input;
