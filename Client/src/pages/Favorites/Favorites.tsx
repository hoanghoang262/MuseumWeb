import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../../recoil/atoms/recoils";
import { useNavigate } from "react-router-dom";
import apis from "../../API/apis";
import { FavoritePaginatedProducts } from "../../components/Pagination";
import { useTranslation } from "react-i18next";

const Favorites = () => {
  const account: any = useRecoilValue(accountAtom);
  const [FavoriteProduct, setFavoriteProduct]: any = useState([]);
  const {t} = useTranslation()
  const navigate = useNavigate();

  const callBack = async () => {
    const result = await apis.get(
      `http://localhost:3000/favor/${account.account_id}`
    );
    const fp = result?.map((r: any) => {
      r.Product.product_json = JSON.parse(r.Product.product_json);
      return r.Product;
    });
    await setFavoriteProduct(fp);
  };
  useEffect(() => {
    if (!account) {
      navigate("/");
    }

    callBack();
  }, []);
  return (
    <>
      {console.log(FavoriteProduct)}
      {FavoriteProduct?.length > 0 ? (
        <FavoritePaginatedProducts itemsPerPage={3} items={FavoriteProduct} callBack={callBack}/>
      ) : (
        <div className="py-40 text-center text-3xl font-semibold text-neutral-600">{t("Không có hiện vật yêu thích")}</div>
      )}
    </>
  );
};

export default Favorites;
