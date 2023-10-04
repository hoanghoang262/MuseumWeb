import apis from "../../../API/apis";
import fileToBase64 from "../../../utils/fileToBase64";

const CreateNewsAction = async ({ request }: { request: Request }) => {
  const data: any = await request.formData();
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

  const image = await fileToBase64(data.get("files"));
  const category_id = await data.get("Category");
  const response = await apis.post(`http://localhost:3000/posts`, { post_json:JSON.stringify(post_json), image, category_id:Number.parseInt(category_id) });
  return response;
};

export default CreateNewsAction;
