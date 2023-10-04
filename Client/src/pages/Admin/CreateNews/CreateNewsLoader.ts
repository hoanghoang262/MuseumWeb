import apis from "../../../API/apis";

const CreateNewsLoader = async () => {
    const Tags = await apis.get("http://localhost:3000/categories")
  
    return Tags;
  };
  
  export default CreateNewsLoader;