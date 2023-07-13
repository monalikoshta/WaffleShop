// import NavBar from "./NavBar";

export const MainSection = () => {
  return (
    <div>
      <div className="bg-[url(/assets/emma-houghton-yXs3kr1VdfY-unsplash.jpg)] bg-no-repeat bg-cover w-full bg-center h-[400px] md:h-[93vh] relative">
        {/* <NavBar /> */}
        <div
          className="text-white absolute bottom-40 w-full font-Diphylleia font-bold text-2xl md:text-5xl lg:text-7xl bg-[#b4b4ba5c] p-5 backdrop-blur-[2px] text-center"
          //  className=""
        >
          Choose Waffles Choose Us!
          <p className="text-xl mt-4 md:text-3xl">
            {" "}
            A perfect stop for all your cravings{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
