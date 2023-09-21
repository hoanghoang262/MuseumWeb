import apis from "../../API/apis";

const SignInAction = async ({ request }: { request: Request }) => {
  const data: any = await request.formData();
  const type = data.get('type');
  switch(type) {
    case 'signIn':
      return SignIn(data);
    case 'signUp':
      return SignUp(data);
  }
  
};

const SignIn = async (data:any) => {
  const result = await apis.post("http://localhost:3000/login", {
    email: data.get("email"),
    password: data.get("password"),
  });
  return result;
}

const SignUp = async (data:any) => {
  const result = await apis.post("http://localhost:3000/register", {
    email: data.get("email"),
    account_name: data.get("firstName")+data.get("lastName"),
    password: data.get("password"),
  });
  return result;
}

export default SignInAction
