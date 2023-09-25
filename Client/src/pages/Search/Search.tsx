import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import apis from "../../API/apis";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData]: any = useState();
  const { t } = useTranslation();

  const callBack = async () => {
    const data: any = await apis.get("");
    setSearchData(data);
  };
  useEffect(() => {
    callBack();
  }, [search]);

  return (
    <>
      <div className="text-center mt-56">
        <input
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          className="w-2/3 px-5 py-2 border-neutral-300 border rounded-2xl"
          placeholder={t("Nội dung tìm kiếm")}
        />
      </div>
      <h1>{t("Tin Tức")}</h1>
      <div className="flex flex-wrap my-20 mx-20">
        {searchData?.posts?.map((post: any) => (
          <>
            <div className="w-1/4 border rounded-xl shadow-lg my-10 mx-12 p-10">
              <img src={post?.image} />
              <div className="mt-5 text-lg font-medium">
                {getJsonBaseOnLanguage(post?.post_json)?.title}
              </div>
              <div className="mt-5">
                {getJsonBaseOnLanguage(post?.post_json)?.description}
              </div>
            </div>
          </>
        ))}
      </div>

      <h1>{t("Hiện Vật")}</h1>
      <div className="flex flex-wrap my-20 mx-20">
        {searchData?.products?.map((product: any) => (
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

export default Search;
