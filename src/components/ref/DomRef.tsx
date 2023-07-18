import React, { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div>
      <input ref={inputRef} type="text" name="" id="" />
    </div>
  );
};

export default DomRef;
