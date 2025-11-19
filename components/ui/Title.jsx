import { angkor } from "@/app/layout";
import React from "react";

const Title = ({ text }) => {
  return (
    <div
      className={`${angkor.className} text-mb-head md:text-head text-center my-12 uppercase`}
    >
      {text}
    </div>
  );
};

export default Title;
