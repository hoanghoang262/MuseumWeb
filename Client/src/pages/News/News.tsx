import { Link, useLoaderData } from "react-router-dom";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";
import { PaginatedPosts } from "../../components/Pagination";
import { useTranslation } from "react-i18next";

const News = () => {
  const { posts }:any = useLoaderData();
  const {t} = useTranslation()

  return (
    <>
      {/* <div className="flex flex-wrap my-20 mx-20">
        {posts?.map((post:any) => (
          <>
            <Link to={`/post/${post.post_id}`} className="w-1/4 border rounded-xl shadow-lg my-10 mx-12 p-10">
                <img src={post?.image} />
                <div className="mt-5 text-lg font-medium">{getJsonBaseOnLanguage(post?.post_json)?.title}</div>
                <div className="mt-5">{getJsonBaseOnLanguage(post?.post_json)?.description}</div>
            </Link>
          </>
        ))}
      </div> */}
      <div className="mt-40 mx-20 text-2xl font-bold text-neutral-600">{`${posts?.length} ${t("News")}`}</div>
      <PaginatedPosts itemsPerPage={3} items={posts} />
    </>
  );
};

export default News