export interface SignIn {
  email: string;
  password: string;
}

export function isSignIn(obj: any): obj is SignIn {
  return obj && typeof obj.email == "string" && typeof obj.password == "string";
}
