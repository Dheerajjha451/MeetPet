import HeroSection from "../assets/components/HeroSection";
import Upload from "../assets/components/upload";
import Footer from "../assets/components/Footer";
import Navbar from "../assets/components/Navbar";

function Home() {
    return (
        <div className="bg-customBg  min-h-screen">
          <Navbar/>
          <div className="">
            <HeroSection/>
            <Upload/>
          </div>
          <Footer/>
        </div>
    );
}

export default Home;