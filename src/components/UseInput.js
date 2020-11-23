import { useState } from "react";

export default function useInput({ defaultValue, extras }) {
  const [input, setInput] = useState(defaultValue);

  function onChange(evt) {
    setInput(evt.target.value);
  }
  // Input <input onChange={onChange}
  return {    
    value: input,
    onChange,
    ...extras
  };
}