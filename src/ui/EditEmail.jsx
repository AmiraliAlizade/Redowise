import { useEffect, useRef, useState } from "react";
import EditLogo from "./EditLogo";
import EmailInput from "./EmailInput";

function EditEmail() {
  const [isEditEmail, setIsEditEmail] = useState(false);
  const inputRef = useRef();

  useEffect(function () {
    function handleClickOutside(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsEditEmail(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="">
      {!isEditEmail ? (
        <div className="flex py-[12px] px-[20px] bg-[#F5FAF9] justify-between items-center ">
          <p>Alireza@gmail.com</p>
          <div onClick={() => setIsEditEmail(true)}>
            <EditLogo />
          </div>
        </div>
      ) : (
        <div ref={inputRef}>
          <EmailInput placeholder="Alireza@gmail.com" />
        </div>
      )}
    </div>
  );
}

export default EditEmail;
