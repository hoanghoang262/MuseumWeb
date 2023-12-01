import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";
import apis from "../../API/apis";
import { useTranslation } from "react-i18next";

const ArtifactsWithTag = () => {
  const {t} = useTranslation()
  const [products, setProducts]: any[] = useState([]);
  const { id } = useParams();
  const callBack = async () => {
    const result = await apis.get(`http://localhost:3000/tags/${id}/getProductByTag`);
    console.log("post", result);
    setProducts(result);
  };
  useEffect(() => {
    callBack();
  }, [id]);


  return (
    <>
    <div className="mt-40 mx-20 text-2xl font-bold text-neutral-600">{`${products?.length} ${t("Hiện Vật")}`}</div>
      <div className="flex flex-wrap my-20 mx-20">
        {products?.map((product: any) => (
          <>
            <Link to={`/product/${product.product_id}`} className="w-1/4 border rounded-xl mx-12 shadow-lg my-10 p-10">
              <img src={product?.image} />
              <div className="mt-5 text-lg font-medium">
                {getJsonBaseOnLanguage(product?.product_json)?.title}
              </div>
              <div className="mt-5">
                {getJsonBaseOnLanguage(product?.product_json)?.description}
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default ArtifactsWithTag
