import apis from "../../../API/apis";
import fileToBase64 from "../../../utils/fileToBase64";

const UpdateNewsAction = async ({ request }: { request: Request }) => {
  const data: any = await request.formData();
  const id : String = await data.get("id");
  const post_json = [
    {
      language: "vn",
      title: data.get("VietName"),
      description: data.get("Description"),
      content: data.get("content"),
    },
    {
      language: "en",
      title: data.get("EnglishName"),
      description: data.get("EnglishDescription"),
      content: data.get("enContent"),
    },
  ];
  console.log(id)
  console.log(post_json)
  const image = await fileToBase64(data.get("files"));
  console.log(data.get("Category"))
  const category_id = await data.get("Category");
  const response = await apis.put(`http://localhost:3000/posts/${id}`, { post_json:JSON.stringify(post_json), image, category_id:Number.parseInt(category_id) });
  return response;
};

export default UpdateNewsAction;
