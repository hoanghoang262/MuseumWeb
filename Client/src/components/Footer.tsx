import FooterData from "../Data/FooterData";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className=" px-20 pt-10 bg-white">
        <div className="flex">
          {FooterData.map((data) => (
            <>
              <div className="w-3/12">
                <div className="text-2xl font-semibold">{t(`${data.label}`)}</div>
                <hr className="border-2 border-black mb-5 mt-3 w-1/3" />
                {data.content.map((cont) => (
                  <>
                    <div className="mb-5">
                      <Link to="/" className="hover:text-green-700">
                        {cont.icon !== undefined ? <cont.icon /> : ""}{" "}
                        {cont.text}
                        <img src={cont.image} className="w-full"/>
                      </Link>
                    </div>
                  </>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
