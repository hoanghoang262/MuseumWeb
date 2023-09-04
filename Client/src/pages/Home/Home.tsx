import presenImg from "../../Images/presentImage.jpg";
import HomeImages from "../../Data/HomeImages";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MuseumIcon from "@mui/icons-material/Museum";
import { presenData } from "../../Data/presenData";
import Footer from "../../Components/Footer";

function Home() {
  return (
    <div>
      {/* images slider */}
      <Carousel
        autoPlay={true}
        dynamicHeight={true}
        infiniteLoop={true}
        emulateTouch={true}
      >
        {HomeImages.map((image) => (
          <div>
            <img src={image} className="w-full" />
          </div>
        ))}
      </Carousel>
      {/* images slider */}

      <div className="text-center mt-32 mx-20">
        <MuseumIcon style={{ fontSize: "900%" }} className="text-green-900" />
        <div className="text-6xl font-serif">Tham Quan</div>
      </div>

      {/* giớt thiệu */}
      <div className="flex mx-20">
        <img className="w-7/12" src={presenImg} />
        <div className="w-5/12 flex flex-col">
          {presenData.map((data) => (
            <>
              <div className="h-1/3 p-10 flex items-center">
                <data.icon style={{ fontSize: "600%", marginRight:"10px" } }/>
                <div>
                <div className="font-light text-3xl mb-5">{data.label}</div>
                <div className="text-neutral-400 font-medium">{data.content}</div>
                </div>
                
              </div>
            </>
          ))}
        </div>
      </div>
      {/* giớt thiệu */}

      {/* Footer */}
      <Footer />
      
    </div>
  );
}

export default Home;
