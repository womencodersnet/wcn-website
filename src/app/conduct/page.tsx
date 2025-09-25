import React from "react";
import Navbar from "../components/Navbar";
import Error from "../components/Error";

const CodeOfConduct = () => {
  return (
    <div className="landing-body">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold">Code of Conduct</h1>
        <Error />
        {/* More content goes here */}
      </main>
    </div>
  );
};

export default CodeOfConduct;
