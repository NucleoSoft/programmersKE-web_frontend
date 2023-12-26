import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import lottie from "lottie-web";

import animationData from "../src/animations/WebLoader.json";
import LandingPage from "../src/pages/LandingPage/LandingPage";
import ErrorPage from "../src/pages/Error/404Page";
import Home from "../src/pages/Home/Home";
import Tutorials from "../src/pages/Tutorials/Tutorials";
import Community from "../src/pages/Community/Community";
import Blogs from "../src/pages/Blogs/Blogs";
import News from "../src/pages/News/News";
import Tech from "../src/pages/Tech/Tech";
import OnlineCompiler from "../src/pages/OnlineCompiler/OnlineCompiler";
import Login from "../src/pages/Login/Login";
import Profile from "../src/pages/Profile/Profile";
import Signup from "../src/pages/Signup/Signup";
import Settings from "../src/pages/Settings/Settings";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/community" element={<Community />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/online_compiler" element={<OnlineCompiler />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export function WebLoader() {
  const animBox = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      container: animBox.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, []);

  return (
    <div
      ref={animBox}
      style={{ width: "100%", height: "100%" }}
      className="fixed z-50 left-0 top-0 bg-slate-900 
      bg-opacity-50 backdrop-blur-2xl"
    />
  );
}

export default App;
