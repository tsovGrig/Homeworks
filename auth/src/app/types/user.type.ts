export  interface User{
  username:string;
  password:string;
}

export interface UserInput{
  username:string | null;
  password:string | null;
  confirm_password:string | null;
}
