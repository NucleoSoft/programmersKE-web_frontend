import HomeDiv from './Components/HomeDiv'
import Carousel from './Components/Carousel'
import LanguageMenu from './Components/LanguageMenu'


//import OnlineCompiler from './OnlineCompiler/OnlineCompiler'
//import Login from './Login/Login'
//import ErrorPage from './Error/404Page'

//import { BrowserRouter, Route } from 'react-router-dom'
//import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <HomeDiv />
      <Carousel />
      <LanguageMenu />
    </div>
  )
}

export default Home