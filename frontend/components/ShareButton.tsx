"use client"
import { IconShare } from "@tabler/icons-react";
import React from "react";

const ShareButton = ({
  url,
  title,
  text,
}: {
  url: string;
  title?: string;
  text?: string;
}) => {
  const handleShare = async () => {
    try {
      if (global.navigator) {
        global.navigator.share({
          title,
          text, 
          url: `\n${window.location.origin}/${url}`, 
        });
        console.log("Shared successfully");
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
      alert("Failed to share the link. Please try again later.");
    }
  };

  return (
    <button onClick={handleShare} className=" p-1 rounded-md bg-black/30">
      <IconShare fontSize={25} color="#fff"/>
    </button>
  );
};

export default ShareButton;
