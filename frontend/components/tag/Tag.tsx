import React from "react";

interface TagProps {
  tag: string;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <button
      className="tag w-fit rounded-md bg-cover bg-center capitalize  shadow-sm shadow-[#ffffff94]"
      style={{
        backgroundImage:
          "url(https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg",
      }}
      id={tag}
    >
      <h2 className="bg-[#00000070] px-10 py-2 backdrop-blur-[1px] dark:hover:bg-black hover:bg-white transition rounded-[inherit]">#{tag}</h2>
    </button>
  );
};

export default Tag;