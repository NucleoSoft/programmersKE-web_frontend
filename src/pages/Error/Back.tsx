const Back = () => {
  return (
    <div className=" absolute w-full flex flex-row justify-center my-5">
      <button
        className=" glassDiv text-white 
                              rounded-xl p-3 font-novaflat
                             hover:text-secondary hover:bg-primary transition-all delay-300"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Back;
