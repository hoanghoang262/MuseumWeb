import apis from "../../../API/apis";

const NewManagementLoader = async () => {
    const News = await apis.get("http://localhost:3000/posts")
  
    return News;
  };
  
  export default NewManagementLoader;