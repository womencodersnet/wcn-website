import React from "react";
import Navbar from "../components/Navbar";

const Community = () => {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to our Communities Page!</h1>
        <p className="mt-4 text-lg">
          Explore the various communities and see whats happening!
        </p>
        <h2 className="text-4xl font-bold">Join our Discord</h2>
      </main>
    </div>
  );
};

export default Community;
