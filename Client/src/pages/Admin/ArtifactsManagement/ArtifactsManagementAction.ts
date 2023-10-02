import apis from "../../../API/apis";

const ArtifactsManagementAction = async ({ request }: { request: Request }) => {
  const data = await request.formData();
  const id = await data.get("id");
  console.log(id);
  const respone = await apis.del(`http://localhost:3000/products/${id}`);

  return respone;
};

export default ArtifactsManagementAction;
