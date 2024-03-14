"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const RegisterPage = () => {
  const email = "mor_2314";
  const password = "83r5^_";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="bg-gray-100 p-8 rounded-md shadow-md max-w-md text-center">
        <p className="text-lg mb-4">
          Sorry, registration for this page is not available as it only uses the
          Fake Store Api.
        </p>
        <p className="text-lg mb-4">
          However, if you would like to log in, you can use the following
          credentials:
        </p>
        <div className="bg-white p-4 rounded-md mb-4 flex justify-between items-center">
          <span className="font-bold mr-4">Email:</span>
          <span className="flex-1 mr-4">{email}</span>
          <Button onClick={handleCopyEmail}>Copy</Button>
        </div>
        <div className="bg-white p-4 rounded-md mb-4 flex justify-between items-center">
          <span className="font-bold mr-4">Password:</span>
          <span className="flex-1 mr-4">{password}</span>
          <Button onClick={handleCopyPassword}>Copy</Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
