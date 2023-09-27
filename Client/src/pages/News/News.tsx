import { Link, useLoaderData } from "react-router-dom";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";

const News = () => {
  const { posts }:any = useLoaderData();

  return (
    <>
      <div className="flex flex-wrap my-20 mx-20">
        {posts?.map((post:any) => (
          <>
            <Link to={`/post/${post.post_id}`} className="w-1/4 border rounded-xl shadow-lg my-10 mx-12 p-10">
                <img src={post?.image} />
                <div className="mt-5 text-lg font-medium">{getJsonBaseOnLanguage(post?.post_json)?.title}</div>
                <div className="mt-5">{getJsonBaseOnLanguage(post?.post_json)?.description}</div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default News