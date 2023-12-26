import { Link } from "react-router-dom";

import Back from "./Back";
import Footer from "./Footer";

function errorPage() {
  return (
    <div
      className="h-screen bg-error-image 
                        w-full bg-no-repeat bg-cover"
    >
      <img
        alt="404image"
        src="./assets/images/404.png"
        width="1000px"
        className="mx-auto"
      />
      <div className="absolute top-32 w-full z-10">
        <h1
          className="text-[70px] text-center font-audiowide
                        text-white text-shadow-md shadow-white"
        >
          Bruh!
        </h1>
        <h3
          className="text-center m-2 text-black mt-4 font-novaflat
                            text-[30px]"
        >
          Yep! This is on you. You definitely fucked up
        </h3>
        <h1 className="text-center text-black my-3 text-lg font-adventpro">
          Either the page you tried visiting doesn't exist, or you made a typo.
          <br />
          But don't worry, at least the homepage exists!
        </h1>
        <Link to="/">
          <Back />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default errorPage;
