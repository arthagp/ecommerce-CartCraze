"use client";

import React from "react";
import { Button } from "../ui/button";
import useInput from "@/hooks/useInput";
import api from "@/api/api";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type UserLogin = {
  username: string;
  password: string;
};

const FormLogin = () => {
  const [username, onChangeUsername, resetUsername] = useInput("");
  const [password, onChangePassword, resetPassword] = useInput("");
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await api.login({ username, password } as UserLogin);
      if (response) {
        api.putAccessToken(response);
        resetUsername();
        resetPassword();
        router.push("/");
        toast({
          title: "Login Success",
        });
      } else {
        toast({
          title: "Login Failed",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Login Failed",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[350px]">
      <Label htmlFor="username">Username</Label>
      <Input
        id="username"
        className="border rounded-md h-10 pl-2"
        type="text"
        value={username}
        onChange={onChangeUsername}
      />
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        className="border rounded-md h-10 pl-2"
        type="password"
        value={password}
        onChange={onChangePassword}
      />
      <Button type="submit" className="mt-5">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
