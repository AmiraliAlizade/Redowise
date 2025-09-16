import { useEffect, useRef, useState } from "react";
import EditLogo from "./EditLogo";
import EmailInput from "./EmailInput";
import { useDispatch, useSelector } from "react-redux";
import EmailLogo from "./EmailLogo";
import { useForm } from "react-hook-form";
import { signUp } from "../redux/authSlice";

function EditEmail() {
  const [isEditEmail, setIsEditEmail] = useState(false);

  const authSlice = useSelector((state) => state.auth);
  const userEmail = authSlice.user.email;
  const [email, setEmail] = useState(userEmail);
  const inputRef = useRef();
  const dispatch = useDispatch();

  console.log(userEmail);

  useEffect(
    function () {
      function handleClickOutside(e) {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
          dispatch(signUp(email));
          setIsEditEmail(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    },
    [email, dispatch]
  );

  return (
    <div className="">
      {!isEditEmail ? (
        <div className="flex py-[12px] px-[20px] bg-[#F5FAF9] justify-between items-center ">
          <p>{email}</p>
          <div onClick={() => setIsEditEmail(true)}>
            <EditLogo />
          </div>
        </div>
      ) : (
        <div ref={inputRef}>
          <div className="flex flex-col border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-center ">
            <div className="flex py-[8px] gap-[12px] items-center ">
              <EmailLogo />
              <input
                type="email"
                value={email}
                className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-[100%]"
                placeholder={userEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditEmail;
