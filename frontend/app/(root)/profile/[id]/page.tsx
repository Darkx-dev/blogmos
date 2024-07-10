import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <h1 className="text-center">Profile: {id}</h1>
      <div className="text-4xl text-center font-sans mt-10">
        PROFILE PAGE <br /> STILL <br /> UNDER DEVELOPMENT
      </div>
    </>
  );
};

export default page;
