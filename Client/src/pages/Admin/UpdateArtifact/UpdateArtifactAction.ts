import apis from "../../../API/apis";
import fileToBase64 from "../../../utils/fileToBase64";

const UpdateArtifactAction = async ({ request }: { request: Request }) => {
  const data: any = await request.formData();
  const id : String = data.get("id");
  const product_json = [
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
  const tag_ids = await data.get("Tag");
  const response = await apis.put(`http://localhost:3000/products/${id}`, { product_json:JSON.stringify(product_json), image, tag_ids:JSON.parse(tag_ids) });
  return response;
};

export default UpdateArtifactAction;
