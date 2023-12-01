import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";
import apis from "../../API/apis";
import { useTranslation } from "react-i18next";

const NewsWithCategory = () => {
  const [posts, setPosts]: any[] = useState();
  const { id } = useParams();
  const {t} = useTranslation()
  const callBack = async () => {
    const result = await apis.get(
      `http://localhost:3000/categories/${id}/getPostByCategory`
    );
    console.log("post", result);
    setPosts(result);
  };
  useEffect(() => {
    callBack();
  }, [id]);

  return (
    <>
    <div className="mt-40 mx-20 text-2xl font-bold text-neutral-600">{`${posts?.length} ${t("News")}`}</div>
      <div className="flex flex-wrap my-20 mx-20">
        {posts?.map((post: any) => (
          <>
            <Link to={`/post/${post.post_id}`} className="w-1/4 border rounded-xl shadow-lg my-10 mx-12 p-10">
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
};

export default NewsWithCategory
