import apis from "../../API/apis";

const HomeLoader = async () => {
  const posts = await apis.get("http://localhost:3000/posts/top3")
  
  const products = await apis.get("http://localhost:3000/products/top3")

  return { posts, products };
};

export default HomeLoader;
