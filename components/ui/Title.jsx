import { Angkor } from "next/font/google";
import React from "react";

const angkor = Angkor({
  subset:['latin'],
  weight:['400']
})
const Title = ({ text,position ="center",size }) => {
  return (
    <div style={{textAlign:position, fontSize:size}}
      className={`${angkor.className} text-mb-head md:text-head my-12 uppercase`}
    >
      {text}
    </div>
  );
};

export default Title;
