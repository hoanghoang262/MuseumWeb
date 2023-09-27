import apis from "../../../API/apis";


const ArtifactsManagementLoader = async () => {
  
  const Artifacts = await apis.get("http://localhost:3000/products")

  return Artifacts;
};

export default ArtifactsManagementLoader;