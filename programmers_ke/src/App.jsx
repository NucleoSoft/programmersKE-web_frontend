// import * as LottiePlayer from "@lottiefiles/lottie-player";

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
import Ukraine from "./About_Ukraine/Ukraine"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/start" element={<Start/>}/>
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/community" element={<Community />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/news" element={<News />} />
          <Route path="/online_compiler" element={<OnlineCompiler />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ukraine" element={<Ukraine />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      {/* <WebLoader /> */}
    </div>
  )
}

{/* function WebLoader() {
  return (
    <div>
      <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets7.lottiefiles.com/packages/lf20_wg5tbh5j.json"
          style="width: 320px">
      </lottie-player>
    </div>
  )
} */}

export default App