import { Form } from "react-router-dom";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { Button } from "@mui/material";
import ReactQuill from "react-quill";
import DeleteIcon from "@mui/icons-material/Delete";

const CreateArtifact = () => {
  const [files, setFiles]: any = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
    },
  });

  const removeFile = (fileToRemove: any) => {
    const updatedFiles = files.filter((file: any) => file !== fileToRemove);
    setFiles(updatedFiles);
  };

  const customnToolBar = [
    [{ header: "1" }, { header: "2" }, "bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "blockquote"],
    ["clean"],
  ];

  return (
    <>
      <div className="bg-neutral-100 py-20">
        <Form
          method="post"
          className="w-10/12 rounded-2xl bg-white px-20 py-10 mx-20 mt-40 mb-20"
        >
          <div className="mb-8">
            <div className="text-xl font-extralight mb-2">Artifact Name</div>
            <input
              placeholder="Artifact Name"
              className="rounded-lg w-5/12 px-5 py-2 border border-neutral-200 bg-neutral-100"
            />
          </div>

          <div className="mb-8">
            <div className="text-xl font-extralight mb-2">Description</div>
            <div className="flex items-start">
              <textarea
                placeholder="Artifact Name"
                className="rounded-lg w-8/12 h-32 px-5 py-2 border border-neutral-200 bg-neutral-100 mr-10"
              ></textarea>
              <div>
                <div
                  className="rounded-lg px-5 py-2 border-2 text-neutral-400 border-dashed border-neutral-300 bg-neutral-100"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : files?.length === 0 ? (
                    <p>
                      Drag / drop some files here, or click to select files for
                      Artifact Image
                    </p>
                  ) : (
                    <>
                      <h3>Selected Files:</h3>
                      <ul>
                        {files?.map((file: any, index: number) => (
                          <li key={index}>
                            <span className="m-1">{file.name}</span>
                            <Button
                              variant="outlined"
                              color="error"
                              startIcon={<DeleteIcon />}
                              onClick={() => removeFile(file)}
                            >
                              Remove
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-xl font-extralight mb-2">Content</div>
            <ReactQuill
              theme="snow"
              modules={{ toolbar: customnToolBar }}
              className="rounded-lg w-full px-5 py-2 border border-neutral-200 bg-neutral-100"
            />
          </div>

          <div className="text-right">
            <Button sx={{mr:1}} variant="outlined" color="error">Cancel</Button>
            <Button variant="contained">Add</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CreateArtifact;
