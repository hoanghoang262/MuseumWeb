import apis from "../../API/apis";

const PostDetailAction = async ({ request }: { request: Request }) => {
    const data : any = await request.formData();
    
    const post_id : string = await data.get('post_id');
    const account_id : string = await data.get('account_id');
    const content : string = await data.get('content');
    const respone = apis.post(`http://localhost:3000/comments/${post_id}`, {post_id, account_id, content})
    return respone;
}

export default PostDetailAction