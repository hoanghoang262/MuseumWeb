import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";
import apis from "../../API/apis";

const ArtifactsWithTag = () => {
  const [products, setProducts]: any[] = useState();
  const { id } = useParams();
  const callBack = async () => {
    const result = await apis.get(`http://localhost:3000/tags/${id}/getProductByTag`);
    console.log("post", result);
    setProducts(result);
  };
  useEffect(() => {
    callBack();
  }, []);


  return (
    <>
      <div className="flex flex-wrap my-20 mx-20">
        {products?.map((product: any) => (
          <>
            <div className="w-1/4 border rounded-xl mx-12 shadow-lg my-10 p-10">
              <img src={product?.image} />
              <div className="mt-5 text-lg font-medium">
                {getJsonBaseOnLanguage(product?.product_json)?.title}
              </div>
              <div className="mt-5">
                {getJsonBaseOnLanguage(product?.product_json)?.description}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ArtifactsWithTag
