import { Form, Link, useLoaderData } from "react-router-dom";
import getJsonBaseOnLanguage from "../../../utils/getJsonBaseOnLanguage";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const ArtifactsManagement = () => {
  const Artifacts: any = useLoaderData();
  return (
    <>
      <div className="relative overflow-x-auto mx-20 my-40">
        <Link to={`/admin/CreateArtifact`}>
          <Button sx={{ m: 1 }} variant="text" endIcon={<AddCircleIcon />}>
            Create New
          </Button>
        </Link>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <td scope="col" className="px-6 py-3">
                Created Date
              </td>
              <td scope="col" className="px-6 py-3">
                Created By
              </td>
              <td scope="col" className="px-6 py-3"></td>
            </tr>
          </thead>
          <tbody>
            {Artifacts?.map((Artifact: any) => {
              const json = getJsonBaseOnLanguage(Artifact?.product_json);
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {Artifact?.product_id}
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/product/${Artifact?.product_id}`}>
                      {json?.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{json?.description}</td>
                  <td className="px-6 py-4">{Artifact?.created_date}</td>
                  <td className="px-6 py-4">{Artifact?.created_by}</td>
                  <td className="px-6 py-4">
                    <Form method="post">
                      <input hidden name="id" value={Artifact?.product_id} />
                      <Button
                        type="submit"
                        sx={{ m: 0.5 }}
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </Form>

                    <Link to={`/admin/UpdateArtifact/${Artifact?.product_id}`}>
                      <Button
                        sx={{ m: 0.5 }}
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                      >
                        Update
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ArtifactsManagement;
