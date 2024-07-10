import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
       <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">username Profile</h1>
        <p className="text-gray-700 mb-4">user bio</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Posts</h2>
        <ul>
          {/* {posts.map((post) => (
            <li key={post.id} className="mb-2">
              <div className="border-b pb-2">
                <h3 className="text-xl font-medium">{post.title}</h3>
              </div>
            </li>
          ))} */}
          <li className="mb-2">
              <div className="border-b pb-2">
                <h3 className="text-xl font-medium">post title</h3>
              </div>
            </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default page;
