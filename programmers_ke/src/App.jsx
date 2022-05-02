import Home from "./Home/Home"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from './Error/404Page'
import Start from "./Start/Start"
import OnlineCompiler from './OnlineCompiler/OnlineCompiler'
import Login from './Login/Login'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/start" element={<Start/>}/>
          <Route path="/tutorials" element={<OnlineCompiler />} />
          <Route path="/community" element={<OnlineCompiler />} />
          <Route path="/tech" element={<OnlineCompiler />} />
          <Route path="/blogs" element={<OnlineCompiler />} />
          <Route path="/news" element={<OnlineCompiler />} />
          <Route path="/online_compiler" element={<OnlineCompiler />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App