"use client";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const Content = ({ content }: { content: string }) => {
  //   const sanitizedHtml = DOMPurify.sanitize(content);
  return (
    <div id="content-viewer" className="*:[&(:img)]:rounded-full  *:[&(:h1)]:text-4xl *:[&(:h1)]:font-semibold space-y-2">
      {parse(content)}
    </div>
  );
};

export default Content;
