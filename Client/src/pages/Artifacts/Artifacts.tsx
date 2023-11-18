import { useLoaderData } from "react-router-dom";
import { PaginatedProducts } from "../../components/Pagination";

const Artifacts = () => {
  const { products }:any = useLoaderData();

  return (
    <>
      <PaginatedProducts itemsPerPage={3} items={products}/>
    </>
  );
};

export default Artifacts;
