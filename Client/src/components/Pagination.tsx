import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import getJsonBaseOnLanguage from "../utils/getJsonBaseOnLanguage";
import "../CSS/pagination.css";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { accountAtom } from "../recoil/atoms/recoils";
import apis from "../API/apis";

function Products({ products }: any) {
  return (
    <>
      <div className="flex flex-wrap mb-20 mx-20">
        {products?.map((product: any) => (
          <>
            <Link
              to={`/product/${product.product_id}`}
              className="w-1/4 border rounded-xl mx-12 shadow-lg my-10 p-10"
            >
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
}

function FavorProducts({ products, callBack }: any) {
  const account = useRecoilValue(accountAtom);
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-wrap my-20 mx-20">
        {products?.map((product: any) => (
          <>
            <div
              className="w-1/4 border rounded-xl mx-12 shadow-lg my-10 p-10"
            >
              <Link to={`/product/${product.product_id}`}>
                <img src={product?.image} />
                <div className="mt-5 text-lg font-medium">
                  {getJsonBaseOnLanguage(product?.product_json)?.title}
                </div>
                <div className="mt-5">
                  {getJsonBaseOnLanguage(product?.product_json)?.description}
                </div>
              </Link>
              <div className="mbt-3 text-right">
                <button
                  onClick={async () => {
                    await apis.post(
                      `http://localhost:3000/favor/${account.account_id}/${product.product_id}`,
                      {}
                    );
                    await callBack();
                  }}
                  className="text-white p-2 bg-blue-500 rounded-lg"
                >
                  {t("Hủy yêu thích")}
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

function Posts({ posts }: any) {
  return (
    <>
      <div className="flex flex-wrap my-20 mx-20">
        {posts?.map((post: any) => (
          <>
            <Link
              to={`/post/${post.post_id}`}
              className="w-1/4 border rounded-xl mx-12 shadow-lg my-10 p-10"
            >
              <img src={post?.image} />
              <div className="mt-5 text-lg font-medium">
                {getJsonBaseOnLanguage(post?.post_json)?.title}
              </div>
              <div className="mt-5">
                {getJsonBaseOnLanguage(post?.post_json)?.description}
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}

function PaginatedProducts({
  itemsPerPage,
  items,
}: {
  itemsPerPage: number;
  items: any[];
}) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  console.log("currentItems", currentItems);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Products products={currentItems} />
      <ReactPaginate
        className="pagination flex justify-center"
        breakLabel="..."
        nextLabel="next"
        onPageChange={(event) => handlePageClick(event)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

function PaginatedPosts({
  itemsPerPage,
  items,
}: {
  itemsPerPage: number;
  items: any[];
}) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  console.log("currentItems", currentItems);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Posts posts={currentItems} />
      <ReactPaginate
        className="flex justify-center"
        breakLabel="..."
        nextLabel="next"
        onPageChange={(event) => handlePageClick(event)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

function FavoritePaginatedProducts({ itemsPerPage, items, callBack }: any) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  console.log("currentItems", currentItems);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <FavorProducts products={currentItems} callBack={callBack} />
      <ReactPaginate
        className="pagination flex justify-center"
        breakLabel="..."
        nextLabel="next"
        onPageChange={(event) => handlePageClick(event)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export { PaginatedProducts, PaginatedPosts, FavoritePaginatedProducts };
