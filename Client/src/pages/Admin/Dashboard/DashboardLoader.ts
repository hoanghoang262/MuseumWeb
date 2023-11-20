import apis from "../../../API/apis";
import { randomColors } from "../../../utils/utils";

export const dashboardLoader = async () => {
  const postView = await apis.get(`http://localhost:3000/posts/view`);
  const productView = await apis.get(`http://localhost:3000/products/view`);

  postView.forEach((element: any, index: number, array: any[]) => {
    // Modify each element, for example, double each element
    array[index].fill = randomColors();
  });

  productView.forEach((element: any, index: number, array: any[]) => {
    // Modify each element, for example, double each element
    array[index].fill = randomColors();
  });

  return { postView, productView };
};
