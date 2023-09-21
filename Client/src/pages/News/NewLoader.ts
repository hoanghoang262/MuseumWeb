import apis from "../../API/apis"

const NewsLoader = async () =>{
    const posts = await apis.get("http://localhost:3000/posts")
    return {posts}
}

export default NewsLoader