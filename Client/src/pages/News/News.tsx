import { useLoaderData } from "react-router-dom";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";

const News = () => {
  const { posts }:any = useLoaderData();

  return (
    <>
      <div className="flex flex-wrap my-20 mx-20">
        {posts?.map((posts:any) => (
          <>
            <div className="w-1/4 border rounded-xl shadow-lg my-10 mx-12 p-10">
                <img src={posts?.image} />
                <div className="mt-5 text-lg font-medium">{getJsonBaseOnLanguage(posts?.post_json)?.title}</div>
                <div className="mt-5">{getJsonBaseOnLanguage(posts?.post_json)?.description}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default News