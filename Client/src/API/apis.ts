import axios from "axios";

const get = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

const post = async (url: string, formData: any) => {
  console.log(formData)
  const response:any = await axios.post(url, formData)
                                  .catch(err => {console.log(err.message)});
  console.log("response: ", response);
  return response.data;
};

const apis = {
  get,
  post,
};

export default apis;
