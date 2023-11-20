import axios from "axios";

const get = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

const post = async (url: string, formData: any) => {
  const response:any = await axios.post(url, formData)
                                  .catch(err => {console.log(err.message)});
  console.log("response: ", response);
  console.log("response data: ", response?.data);
  return response?.data;
};

const put = async (url: string, formData: any) => {
  console.log(formData)
  const response:any = await axios.put(url, formData)
                                  .catch(err => {console.log(err.message)});
  console.log("response: ", response);
  console.log("response data: ", response.data);
  return response.data;
};

const del = async (url: string) => {
  const response:any = await axios.delete(url)
                                  .catch(err => {console.log(err.message)});
  console.log("response: ", response);
  console.log("response data: ", response.data);
  return response.data;
};

const apis = {
  get,
  post,
  put,
  del
};

export default apis;
