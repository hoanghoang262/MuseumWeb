import { Link, useLoaderData } from "react-router-dom";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";

const Artifacts = () => {
  const { products }:any = useLoaderData();

  return (
    <>
      <div className="flex flex-wrap my-20 mx-20">
        {products?.map((product:any) => (
          <>
            <Link to={`/product/${product.product_id}`} className="w-1/4 border rounded-xl mx-12 shadow-lg my-10 p-10">
                <img src={product?.image} />
                <div className="mt-5 text-lg font-medium">{getJsonBaseOnLanguage(product?.product_json)?.title}</div>
                <div className="mt-5">{getJsonBaseOnLanguage(product?.product_json)?.description}</div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default Artifacts;
