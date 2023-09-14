import apis from "../../API/apis";

const HomeLoader = async () => {
  const usePost = await apis.get("http://localhost:3000/posts/top3")
  
  const useProduct = await apis.get("http://localhost:3000/products/top3")
  console.log("post", usePost);
  console.log("product", useProduct);
  return { posts: usePost, products: useProduct };
};

export default HomeLoader;
