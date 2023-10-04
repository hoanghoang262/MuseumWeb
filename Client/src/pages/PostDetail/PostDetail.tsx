import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apis from "../../API/apis";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";

const PostDetail = () => {
  const [post, setPost]: any[] = useState();
  const { id } = useParams();
  const callBack = async () => {
    const result = await apis.get(`http://localhost:3000/posts/${id}`);
    console.log("post", result);
    setPost(result);
  };
  useEffect(() => {
    callBack();
  }, []);

  const json = getJsonBaseOnLanguage(post?.post_json);
  return (
    <>
      <img className="w-full absolute -z-30" src={`${post?.image}`}></img>
      <div className="bg-white">
        <div className="text-white pt-40 pb-10 pl-20 opacity-80 bg-black pr-36 text-5xl font-sans">
          <div className="mb-5">{json?.title}</div>
          <div className="font-thin text-2xl">{post?.Category?.category_name}</div>
        </div>
        <div className="px-20 pt-20 text-xl " dangerouslySetInnerHTML={{ __html: json?.content }}></div>
        <img className="py-20 m-auto" src={`${post?.image}`}></img>
      </div>
    </>
  );
};

export default PostDetail;
