import { MouseEvent } from "react";
import { Link } from "react-router-dom";

import MuseumIcon from "@mui/icons-material/Museum";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import HomeImages from "../../Data/HomeImages";
import presenImg from "../../Images/presentImage.jpg";

import { presenData } from "../../Data/presenData";
import PostData from "../../Data/PostData";
import ProductData from "../../Data/ProductData";

function Home() {
  const unhiddenContent = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const div = event.target as HTMLElement;
    const content = div.querySelector(".content");
    if (content?.classList.contains("hidden")) {
      content.classList.remove("hidden");
    }
  };

  const hiddenContent = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    const div = event.target as HTMLElement;
    const content = div.querySelector(".content");
    if (content && !content.classList.contains("hidden")) {
      content.classList.add("hidden");
    }
  };

  return (
    <div>
      {/*ANCHOR - image slider */}
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
      {/*ANCHOR - Big Icon */}
      <div className="text-center mt-32 mx-20">
        <MuseumIcon style={{ fontSize: "900%" }} className="text-green-900" />
        <div className="text-3xl font-serif">Tham Quan</div>
      </div>
      {/*ANCHOR - Introduce info */}
      <div className="flex mx-20">
        <img className="w-7/12" src={presenImg} />
        <div className="w-5/12 flex flex-col">
          {presenData.map((data) => (
            <>
              <div className="h-1/3 p-10 flex items-center">
                <data.icon style={{ fontSize: "600%", marginRight: "10px" }} />
                <div>
                  <div className="font-light text-3xl mb-5">{data.label}</div>
                  <div className="text-neutral-400 font-medium">
                    {data.content}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/*ANCHOR - New and post */}
      <div className="mx-20 mt-32">
        <div className="flex items-center justify-between">
          <div className="flex items-end">
            <MuseumIcon
              style={{ fontSize: "300%" }}
              className="text-green-900 mr-[7px]"
            />
            <div className="font-serif text-xl">Tin Tức và Sự Kiện</div>
          </div>

          <Link
            to="/"
            className="text-green-600 justify-self-end hover:translate-x-3 transition ease-in-out delay-150 text-lg font-medium"
          >
            Xem thêm <KeyboardDoubleArrowRightIcon />
          </Link>
        </div>
        <div className="flex mt-10">
          {PostData.map((data) => (
            <>
              <div
                onMouseLeave={(event) => hiddenContent(event)}
                className="w-1/3 mr-5"
              >
                <img src={data.image} className="w-full" />
                <div
                  onMouseOver={(event) => unhiddenContent(event)}
                  className="bg-white text-center mt-5 px-10 text-xl font-semibold hover:z-10 hover:-translate-y-52 transition-all"
                >
                  {data.title}
                  <div className="hidden content text-lg font-light text-clip overflow-hidden">
                    {data.sumary}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* ANCHOR - Product review */}
      <div className="text-center mt-32 mx-20">
        <MuseumIcon style={{ fontSize: "900%" }} className="text-green-900" />
        <div className="text-3xl font-serif">Sản Phẩm</div>
      </div>
      <div className="mx-20 grid grid-cols-3 mt-10">
        {ProductData.map((data) => (
          <>
            <div className="col-span-1 mr-10 hover:translate-y-5 transition-all grid">
              <div className="font-semibold text-3xl mb-3 hover:text-green-600">
                {data.productName}
              </div>
              <div className="font-light">{data.description}</div>
              <img src={data.Image} className="mt-5" />
              <Link
                to="/"
                className="justify-self-end mt-10 pr-10 hover:text-green-600 flex items-center text-xl font-medium"
              >
                Đọc thêm <KeyboardArrowRightIcon />
              </Link>
            </div>
          </>
        ))}
      </div>
      {/*ANCHOR - Continue search */}
      <div className="text-center mt-32 mx-20 text-green-900 hover:text-green-700 hover:translate-x-10 transition-all">
        <Link to="/">
          <MuseumIcon style={{ fontSize: "900%" }} />
          <div className="text-3xl font-sans">Tiếp tục khám phá</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
