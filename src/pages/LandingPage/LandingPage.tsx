import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Carousel from "./Components/Carousel";
import LanguageMenu from "./Components/LanguageMenu";

function LandingPage() {
  return (
    <div className="h-auto bg-white">
      <Header />
      <Carousel />
      <LanguageMenu />
      <Footer />
    </div>
  );
}

export default LandingPage;
