import { IconNavigation } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold text-center">This is home page still under development</h1>
        <a href="blogs" className="mt-10 text-blue-500 flex text-xl">Goto blogs <IconNavigation/></a>
    </div>
  );
};

export default Home;
