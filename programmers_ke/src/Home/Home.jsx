import HomeDiv from './Components/HomeDiv'
import SideTab from './Components/SideTab'
import Carousel from './Components/Carousel'
import LanguageMenu from './Components/LanguageMenu'

function Home() {
    return (
        <div className="fixed top-0 left-0 bg-gradient-to-b from-black via-primary to-secondary
                        h-screen w-screen overflow-x-hidden">
            <HomeDiv />
            <SideTab/>
            <Carousel />
            <LanguageMenu />
        </div>
    )
}

export default Home