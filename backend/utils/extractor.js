const extractFirstImageSrc = (htmlString) => {
  const imgRegex = /<img\s+[^>]*src\s*=\s*(["'])(.*?)\1/i;
  const match = htmlString.match(imgRegex);

  return match ? match[2] : null;
};

module.exports = { extractFirstImageSrc };
