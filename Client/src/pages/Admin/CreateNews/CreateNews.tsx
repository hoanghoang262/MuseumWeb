import {
    Form,
    useActionData,
    useLoaderData,
    useNavigate,
    useSubmit,
  } from "react-router-dom";
  import { useCallback, useEffect } from "react";
  import { useDropzone } from "react-dropzone";
  import { useState } from "react";
  import { Button } from "@mui/material";
  import { toast } from "react-toastify";
  import ReactQuill from "react-quill";
  import DeleteIcon from "@mui/icons-material/Delete";
  import hasNullOrUndefinedValues from "../../../utils/hasNullOrUnderfineValue";
  
  const CreateNews = () => {
    const [files, setFiles]: any = useState([]);
    const [content, setContent] = useState("Content");
    const [enContent, setEnContent] = useState("EnglishContent");
  
    const navigate = useNavigate();
  
    const submit = useSubmit();
  
    const categories: any = useLoaderData();
  
    const response: any = useActionData();
  
    useEffect(() => {
      if(response?.type === "success"){
        navigate("/");
      }
    },[response]);
  
    const frmSubmit = () => {
      const frm = document.getElementById("newsFrm");
      if (frm instanceof HTMLFormElement) {
        const formData = new FormData(frm);
        formData.append("files", files[0]);
        formData.append("content", content);
        formData.append("enContent", enContent);
        if (hasNullOrUndefinedValues(formData)) {
          toast("one of the values is empty", { type: toast.TYPE.ERROR });
          return;
        }
        
        submit(formData, {
          method: "post",
          action: "/admin/CreateNews",
          encType: "multipart/form-data",
        });
      }
    };
  
    const onDrop = useCallback((acceptedFiles: File[]) => {
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
            id="newsFrm"
            method="post"
            className="w-10/12 rounded-2xl bg-white px-20 py-10 mx-20 mt-40 mb-20"
            encType="multipart/form-data"
          >
            <div className="mb-8">
              <div className="text-xl font-extralight mb-2">News Title</div>
  
              <input
                name="VietName"
                placeholder="Viet Name"
                className="rounded-lg w-5/12 px-5 py-2 mr-3 border border-neutral-200 bg-neutral-100"
              />
              <input
                name="EnglishName"
                placeholder="English Name"
                className="rounded-lg w-5/12 px-5 py-2 border border-neutral-200 bg-neutral-100"
              />
            </div>
  
            <div className="mb-8">
              <div className="text-xl font-extralight mb-2">Description</div>
  
              <textarea
                name="Description"
                placeholder="Description"
                className="rounded-lg w-8/12 mb-3 h-32 px-5 py-2 border border-neutral-200 bg-neutral-100 mr-10"
              ></textarea>
              <textarea
                name="EnglishDescription"
                placeholder="English Description"
                className="rounded-lg w-8/12 h-32 px-5 py-2 border border-neutral-200 bg-neutral-100 mr-10"
              ></textarea>
            </div>
  
            <div className="mb-8">
              <div className="text-xl font-extralight mb-2">Image</div>
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
                    News Image
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
  
            <div className="mb-8">
              <div className="text-xl font-extralight mb-2">Category</div>
              <select id="Category" name="Category" className="pl-2 pr-5 py-5">
                {categories?.map((category: any) => (
                  <>
                    <option value={category?.category_id}>{category?.category_name}</option>
                  </>
                ))}
              </select>
            </div>
  
            <div className="mb-8">
              <div className="text-xl font-extralight mb-2">Content</div>
              <ReactQuill
                theme="snow"
                modules={{ toolbar: customnToolBar }}
                value={content}
                onChange={(content) => setContent(content)}
                className="rounded-lg mb-3 w-full px-5 py-2 border border-neutral-200 bg-neutral-100"
              />
              <ReactQuill
                theme="snow"
                modules={{ toolbar: customnToolBar }}
                value={enContent}
                onChange={(content) => setEnContent(content)}
                className="rounded-lg w-full px-5 py-2 border border-neutral-200 bg-neutral-100"
              />
            </div>
  
            <div className="text-right">
              <Button sx={{ mr: 1 }} variant="outlined" color="error">
                Cancel
              </Button>
              <Button onClick={frmSubmit} variant="contained">
                Add
              </Button>
            </div>
          </Form>
        </div>
      </>
    );
  };
  
  export default CreateNews;
  