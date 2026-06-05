import { useState } from "react";

function Input({ text, type, Label, onchage }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <label>{Label}</label>
      <input
        type={type}
        placeholder={text}
        className="rounded-[8px] p-[10px] w-[100%]   bg-white
  focus:shadow-lg
  focus:shadow-green-500/50
  transition-all duration-300 outline-none"
        onChange={onchage}
      />
    </>
  );
}

export default Input;
