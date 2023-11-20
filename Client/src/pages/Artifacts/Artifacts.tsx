import { useLoaderData } from "react-router-dom";
import { PaginatedProducts } from "../../components/Pagination";
import { useTranslation } from "react-i18next";

const Artifacts = () => {
  const { products }:any = useLoaderData();
  const {t} = useTranslation()

  return (
    <>
    <div className="mt-40 mx-20 text-2xl font-bold text-neutral-600">{`${products.length} ${t("Hiện Vật")}`}</div>
      <PaginatedProducts itemsPerPage={3} items={products}/>
    </>
  );
};

export default Artifacts;
