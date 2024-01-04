import React from "react";
import cl from "./Input.module.css";

function Input({ tag, ...props }) {
  if (tag === "textarea") {
    return <textarea {...props} className={`${cl.input} ${cl.textarea}`} />;
  }
  return <input {...props} className={cl.input} />;
}

export default Input;
