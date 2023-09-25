import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";
import apis from "../../API/apis";

const NewsWithCategory = () => {
  const [posts, setPosts]: any[] = useState();
  const { id } = useParams();
  const callBack = async () => {
    const result = await apis.get(
      `http://localhost:3000/categories/${id}/getPostByCategory`
    );
    console.log("post", result);
    setPosts(result);
  };
  useEffect(() => {
    callBack();
  }, []);

  return (
    <>
      <div className="flex flex-wrap my-20 mx-20">
        {posts?.map((posts: any) => (
          <>
            <div className="w-1/4 border rounded-xl shadow-lg my-10 mx-12 p-10">
              <img src={posts?.image} />
              <div className="mt-5 text-lg font-medium">
                {getJsonBaseOnLanguage(posts?.post_json)?.title}
              </div>
              <div className="mt-5">
                {getJsonBaseOnLanguage(posts?.post_json)?.description}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default NewsWithCategory
