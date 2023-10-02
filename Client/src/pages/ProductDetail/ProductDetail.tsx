import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apis from "../../API/apis";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";

const ProductDetail = () => {
  const [product, setProduct]: any[] = useState();
  const { id } = useParams();
  const callBack = async () => {
    const result = await apis.get(`http://localhost:3000/products/${id}`);
    console.log("post",result);
    setProduct(result);
  };
  useEffect(() => {
    callBack();
  }, []);

  const json = getJsonBaseOnLanguage(product?.product_json)

  return (
    <>
      <img className="w-full absolute -z-30" src={`${product?.image}`}></img>
      <div className="bg-white">
        <div className="text-white pt-40 pb-20 pl-20 opacity-80 bg-black pr-36 text-5xl font-sans">{json?.title}</div>
        <div className="px-20 pt-20 text-xl" dangerouslySetInnerHTML={{ __html: json?.content }} ></div>
        <img className="py-20 m-auto" src={`${product?.image}`}></img>
      </div>
    </>
  );
};

export default ProductDetail;