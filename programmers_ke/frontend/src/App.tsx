import lottie from 'lottie-web'
import animationData from './_animations/WebLoader.json'
import React, { useEffect, useRef } from "react"
import Home from "./Home/Home"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from './Error/404Page'
import Start from "./Start/Start"
import Tutorials from "./Tutorials/Tutorials"
import Community from "./Community/Community"
import Blogs from "./Blogs/Blogs"
import News from "./News/News"
import Tech from "./Tech/Tech"
import OnlineCompiler from './OnlineCompiler/OnlineCompiler'
import Login from './Login/Login'
import Profile from "./Profile/Profile"
import Signup from "./Signup/Signup"
import Settings from "./Settings/Settings"

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<Start />} />
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
  )
}


export function WebLoader() {
  const animBox = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animBox.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    });
  }, []);

  return (
    <div
      ref={animBox}
      style={{ width: '100%', height: '100%' }}
      className='fixed z-50 left-0 top-0 bg-slate-900 
      bg-opacity-50 backdrop-blur-2xl'
    />
  );
}

export default App