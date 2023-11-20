import { Link, useNavigate } from "react-router-dom";

import MuseumIcon from "@mui/icons-material/Museum";
import SearchIcon from "@mui/icons-material/Search";

import { AdminMenu, HomeMenu } from "../Data/Menu";
import { Language } from "../Data/Language";

import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { defaultLanguageState } from "../recoil/atoms/recoils";
import { accountAtom } from "../recoil/atoms/recoils";
import { useEffect, useState } from "react";
import apis from "../API/apis";
//import useForceUpdate from "../hooks/useForceUpdate";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [defaultLanguage, setLanguage] = useRecoilState(defaultLanguageState);
  const [account, setAccount]: any = useRecoilState(accountAtom);
  const [categories, setCategories]: any = useState();
  const [tags, setTags]: any = useState();
  const navigate = useNavigate()

  useEffect(() => {
    const setUp = async () => {
      const Categories = await apis.get("http://localhost:3000/categories");
      setCategories(Categories);
      const Tags = await apis.get("http://localhost:3000/tags");
      setTags(Tags);
      console.log("setUp");
    };

    setUp();
  }, []);

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(defaultLanguage);
  };

  const hideMenuContent = (event: any) => {
    const category = event.target;
    if (!category.classList.contains("hidden")) {
      category.classList.add("hidden");
    }
  };

  const unhideMenuContent = (event: any) => {
    const category = event.target.querySelector("div");
    category.classList.remove("hidden");
  };

  return (
    <nav className="flex bg-white bg-opacity-60 py-5 fixed top-0 z-10 w-full">
      {/*ANCHOR - icon holder */}
      <div className="w-1/5 cursor-pointer">
        <Link to="/">
          <div className="flex items-center justify-end">
            <MuseumIcon
              style={{ fontSize: "600%" }}
              className=" text-green-800 mr-3"
            />
            <div className="w-3/12 font-light text-sm">
              <p>{t("Đồ Án Triển Lãm Bảo Tàng")}</p>
            </div>
          </div>
        </Link>
      </div>

      {/*ANCHOR - menu */}
      <div className="w-4/5 flex flex-col">
        <div className="h-2/4 flex justify-end px-28 items-center">
          {/*NOTE - language support */}
          {Language.map((language) => (
            <img
              src={language.icon}
              alt="language image"
              style={{ height: "30px" }}
              onClick={() => changeLanguage(language.language)}
            />
          ))}

          <Link to={"/search"}>
            <SearchIcon style={{ fontSize: "200%" }} className="ml-20 mr-5" />
          </Link>

          <div className="flex flex-col">
            {account !== undefined ? (
              <>
                <Link to="/" className="hover:text-green-600">
                  {account?.account_name}
                </Link>
                <span
                  onClick={() => {
                    setAccount(undefined);
                    navigate("/")
                  }}
                  className="hover:text-green-600"
                >
                  {t("Đăng Xuất")}
                </span>
              </>
            ) : (
              <>
                <Link to="/signIn" className="hover:text-green-600">
                  {t("Đăng Nhập")}
                </Link>
                <Link to="/signIn" className="hover:text-green-600">
                  {t("Đăng Ký")}
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="flex px-10 items-end justify-between w-4/5">
          {HomeMenu.map((menu) => (
            <>
              <Link
                to={menu.link}
                className="font-semibold mr-5 text-lg hover:border-b-4 hover:border-green-900 transition-all duration-150"
              >
                {t(`${menu.section}`)}
              </Link>
            </>
          ))}
          <span
            onMouseEnter={(event) => unhideMenuContent(event)}
            className="font-semibold mr-5 text-lg hover:border-b-4 hover:border-green-900 transition-all duration-150"
          >
            {t(`Danh Mục`)}
            <div
              onMouseLeave={(event) => {
                hideMenuContent(event);
              }}
              className="absolute bg-opacity-50 bg-white py-3 px-5 pr-20 hidden"
            >
              {categories?.map((category: any) => (
                <>
                  <Link
                    to={`/post/categories/${category?.category_id}`}
                    //onClick={useForceUpdate}
                    className="mb-2 block hover:border-b-4 hover:border-green-900 transition-all duration-150"
                  >
                    {category?.category_name}
                  </Link>
                </>
              ))}
            </div>
          </span>

          <span
            onMouseEnter={(event) => unhideMenuContent(event)}
            className="font-semibold mr-5 text-lg hover:border-b-4 hover:border-green-900 transition-all duration-150"
          >
            {t(`Tags Tìm Kiếm`)}
            <div
              onMouseLeave={(event) => {
                hideMenuContent(event);
              }}
              className="absolute bg-opacity-50 bg-white py-3 px-5 pr-20 hidden"
            >
              {tags?.map((tag: any) => (
                <>
                  <Link
                    to={`/product/tags/${tag?.tag_id}`}
                    //onClick={useForceUpdate}
                    className="mb-2 block hover:border-b-4 hover:border-green-900 transition-all duration-150"
                  >
                    {tag?.tag_name}
                  </Link>
                </>
              ))}
            </div>
          </span>

          {/* admin menu */}
          {account?.role_id === 1 ? (
            <>
              <span
                onMouseEnter={(event) => unhideMenuContent(event)}
                className="font-semibold mr-5 text-lg hover:border-b-4 hover:border-green-900 transition-all duration-150"
              >
                {t(`Quản Trị Viên`)}
                <div
                  onMouseLeave={(event) => {
                    hideMenuContent(event);
                  }}
                  className="absolute bg-opacity-50 bg-white py-3 px-5 pr-20 hidden"
                >
                  {AdminMenu?.map((menu: any) => (
                    <>
                      <Link
                        to={menu?.link}
                        className="mb-2 block hover:border-b-4 hover:border-green-900 transition-all duration-150"
                      >
                        {t(`${menu?.section}`)}
                      </Link>
                    </>
                  ))}
                </div>
              </span>
            </>
          ) : account?.role_id === 3 ? (
            <>
              <Link to={"/Favorite"} className="font-semibold mr-5 text-lg hover:border-b-4 hover:border-green-900 transition-all duration-150">
                {t("Yêu thích")}
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
