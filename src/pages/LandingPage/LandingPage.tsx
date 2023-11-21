import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import LanguageMenu from "./components/LanguageMenu";

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
