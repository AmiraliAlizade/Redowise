import { useRef, useState } from "react";

function CodeInput() {
  const inputRef = useRef([]);
  const [values, setValues] = useState(["", "", "", "", ""]);

  function handleChange(e, index) {
    let digit = e.target.value.replace(/\D/g, "");

    if (digit) {
      const num = parseInt(digit, 10);
      if (num < 0) digit = "0";
      if (num > 9) digit = "";
    }

    const newValues = [...values];

    newValues[index] = digit;

    setValues(newValues);

    if (digit && index < inputRef.current.length - 1) {
      inputRef.current[index + 1].focus();
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRef.current[index - 1].focus();
    }

    if (e.key === "ArrowRight" && index < inputRef.current.length - 1) {
      e.preventDefault();
      inputRef.current[index + 1].focus();
    }
  }

  function handlePaste(e) {
    e.preventDefault();
    const paste = e.clipboardData.getData("Text").replace(/\D/g, "");
    const newValues = [...values];
    for (let i = 0; i < Math.min(paste.length, 5); i++) {
      newValues[i] = paste[i];
      if (inputRef.current[i]) inputRef.current[i].value = paste[i];
      setValues(newValues);
      if (paste.length >= 5 && inputRef.current[4]) inputRef.current[4].focus();
    }
  }
  return (
    <div className="flex gap-[8px] p-[18px]">
      {values.map((val, i) => (
        <input
          maxLength={1}
          value={val}
          key={i}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          ref={(el) => (inputRef.current[i] = el)}
          type="number"
          onPaste={handlePaste}
          className="border h-full w-full border-solid border-[#C2CFCC] focus:outline-[#51C3B7] rounded-[14px] text-center py-[16px] px-0 w-[20%]"
          onWheel={(e) => e.currentTarget.blur()}
        />
      ))}
    </div>
  );
}

export default CodeInput;
