import apis from "../../../API/apis";

const NewsManagementAction = async ({ request }: { request: Request }) => {
  const data = await request.formData();
  const id = await data.get("id");
  console.log(id);
  const respone = await apis.del(`http://localhost:3000/posts/${id}`);

  return respone;
};

export default NewsManagementAction;
