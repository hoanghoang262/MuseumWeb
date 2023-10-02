import apis from "../../../API/apis";

const CreateArtifactLoader = async () => {
    const Tags = await apis.get("http://localhost:3000/tags")
  
    return Tags;
  };
  
  export default CreateArtifactLoader;