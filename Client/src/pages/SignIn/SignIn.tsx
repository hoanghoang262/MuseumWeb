import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import HomeImages from "../../data/HomeImages";
import ShowModal from "../../components/Modals";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate()
  const handleClose = () => {
    navigate("/")
  };
  return (
    <>
      <Carousel
        className="absolute -z-10"
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        {HomeImages.map((image) => (
          <div>
            <img src={image} className="h-screen" />
          </div>
        ))}
      </Carousel>
      <div className="bg-white bg-opacity-30 w-full h-screen flex items-center">
        <div className="w-1/3 m-auto">
          <ShowModal handleClose={handleClose} />
        </div>
      </div>
    </>
  );
}

export default SignIn;
