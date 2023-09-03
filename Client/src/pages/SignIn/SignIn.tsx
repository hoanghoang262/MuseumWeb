import { useLoaderData } from "react-router-dom";

function SignIn() {
  const data = useLoaderData();
  console.log(data);
  return <div>SignIn</div>;
}

export default SignIn;
