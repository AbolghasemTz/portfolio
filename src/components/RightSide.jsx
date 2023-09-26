import React from "react";

function RightSide(props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:abolghasemtazikijelini@gmail.com">
        <p className="rotate-90 w-72 tracking-wide text-textGreen">abolghasemtazikijelini@gmail.com</p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
}

export default RightSide;
