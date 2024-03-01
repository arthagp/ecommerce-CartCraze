import React from "react";
import { Button } from "../ui/button";

const FormLogin = () => {
  // https://fakestoreapi.com/auth/login

  return (
    <form className="flex flex-col gap-3 w-[350px]">
      <label htmlFor="">Username</label>
      <input className="border rounded-md h-10 pl-2" type="text" />
      <label htmlFor="">Password</label>
      <input className="border rounded-md h-10 pl-2" type="password" />
      <Button className="mt-5">Login</Button>
    </form>
  );
};

export default FormLogin;
