import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apis from "../../API/apis";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../../recoil/atoms/recoils";
import { useTranslation } from "react-i18next";

const ProductDetail = () => {
  const { t } = useTranslation();
  const account: any = useRecoilValue(accountAtom);
  const [product, setProduct]: any[] = useState();
  const [favorProduct, setFavor]: any = useState();
  const { id } = useParams();
  const callBack = async () => {
    const result = await apis.get(`http://localhost:3000/products/${id}`);
    if (account) {
      const favor = await apis.get(
        `http://localhost:3000/favor/${account.account_id}`
      );
      setFavor(favor);
    }
    console.log("post", result);
   
    setProduct(result);
  };

  const addView = async () =>  await apis.post(`http://localhost:3000/products/view/${id}`, {});

  const callBack2 = async () =>{
    await addView()
    await callBack()
  }
  
  useEffect(() => {
    callBack2();
  }, []);

  const json = getJsonBaseOnLanguage(product?.product_json);

  return (
    <>
      <img className="w-full absolute -z-30" src={`${product?.image}`}></img>
      <div className="bg-white">
        <div className="text-white pt-40 pb-20 pl-20 opacity-80 bg-black pr-36 text-5xl font-sans">
          <div>{json?.title}</div>
          {account? (
            favorProduct?.some(
              (f: any) => f.product_id == product.product_id
            ) ? (
              <div
                onClick={async () => {
                  await apis.post(
                    `http://localhost:3000/favor/${account.account_id}/${product.product_id}`,
                    {}
                  );
                  await callBack();
                }}
                className="text-sm mt-5"
              >
                <FavoriteIcon sx={{ color: "pink", fontSize: 30 }} />{" "}
                {t(`Đã yêu thích`)}
              </div>
            ) : (
              <div
                onClick={async () => {
                  await apis.post(
                    `http://localhost:3000/favor/${account.account_id}/${product.product_id}`,
                    {}
                  );
                  await callBack();
                }}
                className="text-sm mt-5"
              >
                <FavoriteIcon sx={{ color: "gray", fontSize: 30 }} />{" "}
                {t(`Yêu thích`)}
              </div>
            )
          ) : (
            <></>
          )}
          <div className="text-sm mt-5">{`${t("Lượt xem")}: ${product?.View??0}`}</div>
        </div>

        <div
          className="px-20 pt-20 text-xl"
          dangerouslySetInnerHTML={{ __html: json?.content }}
        ></div>
        <img className="py-20 m-auto" src={`${product?.image}`}></img>
      </div>
    </>
  );
};

export default ProductDetail;
