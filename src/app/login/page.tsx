import FormLogin from "@/components/common/FormLogin";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-10">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="font-semibold text-4xl">Login</h2>
        <p className="text-md">Welcome Back</p>
      </div>
      <FormLogin />
      <h4>
        Don’t have an account?{" "}
        <span>
          <Link className="text-blue-500 hover:underline" href={"/register"}>
            Join
          </Link>
        </span>
      </h4>
    </div>
  );
};

export default LoginPage;
