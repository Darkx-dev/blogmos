import React from "react";
import pica from "pica";

export const extractFirstImageSrc = (htmlString: string) => {
  const imgRegex = /<img\s+[^>]*src\s*=\s*(["'])(.*?)\1/i;
  const match = htmlString.match(imgRegex);

  return match ? match[2] : null;
};

export const resizeImages = async (
  htmlString: string,
  maxWidth?: number,
  quality?: number
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const imgRegex = /<img\s+[^>]*src\s*=\s*(["'])(.*?)\1/i;
      const match = htmlString.match(imgRegex);
      resolve(match);
    }, 1000);
  });
};


