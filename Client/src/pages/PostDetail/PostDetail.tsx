import { useEffect, useState } from "react";
import { useActionData, useParams } from "react-router-dom";
import apis from "../../API/apis";
import getJsonBaseOnLanguage from "../../utils/getJsonBaseOnLanguage";
import CommentComponent from "../../components/Comment";
const PostDetail = () => {
  const response: any = useActionData();
  const [post, setPost]: any = useState();
  const [comments, setComments]: any = useState();
  const { id } = useParams();

  const setUp = (data:any) => {
    const {post, comments} = data
    setPost(post);
    setComments(comments);
  }
  const callBack = async () => {
    const post = await apis.get(`http://localhost:3000/posts/${id}`);
    const comments = await apis.get(`http://localhost:3000/comments/${id}`);
    setUp({post, comments});
  };


  useEffect(() => {
    callBack();
  }, [response]);

  const json = getJsonBaseOnLanguage(post?.post_json);


  return (
    <>
      <img className="w-full absolute -z-30" src={`${post?.image}`}></img>
      <div className="bg-white">
        <div className="text-white pt-40 pb-10 pl-20 opacity-80 bg-black pr-36 text-5xl font-sans">
          <div className="mb-5">{json?.title}</div>
          <div className="font-thin text-2xl">
            {post?.Category?.category_name}
          </div>
        </div>
        <div
          className="px-20 pt-20 text-xl "
          dangerouslySetInnerHTML={{ __html: json?.content }}
        ></div>
        <img className="py-20 m-auto" src={`${post?.image}`}></img>

        <CommentComponent comments={comments} post_id={post?.post_id} />
      </div>
    </>
  );
};

export default PostDetail;
