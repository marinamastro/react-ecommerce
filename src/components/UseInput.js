import { useState } from "react";

export default function useInput({ defaultValue, extras }) {
  const [input, setInput] = useState(defaultValue);

  function onChange(evt) {
    setInput(evt.target.value);
  }

  return {    
    value: input,
    onChange,
    ...extras
  };
}