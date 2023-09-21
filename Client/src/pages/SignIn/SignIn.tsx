import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import HomeImages from "../../Data/HomeImages";
import ShowModal from "../../components/Modals";
import { useActionData, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";
import { accountAtom } from "../../recoil/atoms/recoils";
import { useEffect } from "react";

function SignIn() {
  const [account, setAccount] = useRecoilState(accountAtom);
  const navigate = useNavigate();

  const result: any = useActionData();

  window.onload = function() {
    if(account!==undefined){
      navigate("/");
    }
  };

  useEffect(() => {
    if (result !== undefined && result.email !== undefined) {
      setAccount(result);
      navigate("/");
    } else if (result !== undefined && result.content !== undefined) {
      toast(result.content, { type: toast.TYPE.ERROR });
    }
  }, [result]);

  const handleClose = () => {
    navigate("/");
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
