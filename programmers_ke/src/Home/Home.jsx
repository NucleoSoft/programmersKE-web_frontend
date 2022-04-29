import HomeDiv from './Components/HomeDiv'
import NavBar from "./Components/NavBar";
  
import SideTab from './Components/SideTab'
import Carousel from './Components/Carousel'
import LanguageMenu from './Components/LanguageMenu'

function Home() {
    return (
        <div className="aurora-outer">
            <div className="aurora-inner">
                <NavBar />
                {/* <HomeDiv /> */}
                <h1 className="fixed right-10 top-[30%] font-zrnic text-[60px] text-white">Introducing the next genertion<br/> of learning programming</h1>
                <SideTab/>
                <Carousel />
                <LanguageMenu />
            </div>
        </div>
    )
}

export default Home