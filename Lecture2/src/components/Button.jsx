let Button = (props) => {
  return (
    <button
      className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 
                 text-white font-semibold rounded-2xl shadow-md
                 hover:from-pink-500 hover:to-red-500 
                 transition-all duration-300 ease-in-out 
                 transform hover:scale-105 active:scale-95"
    >
      {props.name}
    </button>
  );
};

export default Button;
