import eye from "../../images/eye.svg";
import eyeSlash from "../../images/eye-slash.svg";
import lock from "../../images/lock.svg";
import lockCircle from "../../images/lock-circle.svg";
import closeCircle from "../../images/close-circle.svg";
import user from "../../images/user.svg";
import call from "../../images/call.svg";
import image from "../../images/5915634301788080553-r.png";
import gallery from "../../images/gallery.svg";
import userOctagon from "../../images/user-octagon.svg";
import { useEffect, useRef, useState } from "react";
import EditLogo from "../../ui/EditLogo";
import EmailInput from "../../ui/EmailInput";
import InputFrame from "../../ui/InputFrame";
import ProfileLogo from "../../ui/ProfileLogo";
import ProfilePicture from "../../ui/ProfilePicture";
import { useForm } from "react-hook-form";
import EmailLogo from "../../ui/EmailLogo";

function CreateProfileForm() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const inputRef = useRef();
  const fileInputRef = useRef();

  const { register } = useForm();

  useEffect(function () {
    function handleClickOutside(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setIsEditEmail(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleOpenFile(e) {
    fileInputRef.current.click();
  }
  return (
    <form className="flex flex-col gap-[11px]">
      <h1 className="font-inter text-black text-[20px] font-bold">
        Smarter Work. Better Results
      </h1>
      <h1 className="font-inter text-black text-[14px]/[23px] font-normal">
        Enter your email to sign in or sign up on Redo-wise
      </h1>
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
            <div className="flex flex-col border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-center ">
              <div className="flex py-[8px] gap-[12px] items-center ">
                <EmailLogo />
                <input
                  {...register("email")}
                  type="email"
                  className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-[100%]"
                  placeholder="Email address"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between p-[8px] bg-[#F5FAF9] rounded-[14px]">
        <div className="flex w-[50%] items-center gap-[12px]">
          {!hasImage ? (
            <>
              <ProfileLogo />
              <p className="font-inter text-[#0F2EF3] font-medium text-[14px]/[22px]">
                Choose Image
              </p>
            </>
          ) : (
            <>
              <ProfilePicture src={image} />
              <span className="flex gap-[8px] items-center cursor-pointer">
                user.jpg <img src={closeCircle} alt="close" />
              </span>
            </>
          )}
        </div>
        <div
          className="cursor-pointer flex flex-col justify-center h-full mt-auto mb-auto mr-[12px]"
          onClick={handleOpenFile}
        >
          <img src={gallery} alt="gallery" />
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
        />
      </div>
      <InputFrame>
        <img src={user} alt="lock" className="w-[24px] h-[24px]" />
        <div className="flex py-[8px] gap-[12px] items-center w-full ">
          <input
            type="text"
            className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
            placeholder="Full name"
          />
        </div>
      </InputFrame>
      <InputFrame>
        <img src={call} alt="lock" className="w-[24px] h-[24px]" />
        <div className="flex py-[8px] gap-[12px] items-center w-full ">
          <input
            type="number"
            className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
            placeholder="Phone number"
          />
        </div>
      </InputFrame>
      <InputFrame>
        <img src={userOctagon} alt="lock" className="w-[24px] h-[24px]" />
        <div className="flex py-[8px] gap-[12px] items-center w-full ">
          <input
            type="text"
            className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
            placeholder="User name"
          />
        </div>
      </InputFrame>
      <div className="m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="2"
          viewBox="0 0 317 2"
          fill="none"
        >
          <path d="M316 1H1" stroke="#D3DEDC" stroke-linecap="round" />
        </svg>
      </div>
      <div className="flex items-center  border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-between ">
        <div className="flex justify-center items-center gap-[12px] w-full">
          <img src={lock} alt="lock" className="w-[24px] h-[24px]" />
          <div className="flex py-[8px] gap-[12px] items-center w-full ">
            <input
              type={`${isShowPassword ? "text" : "password"}`}
              className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
              placeholder="Choose password"
            />
          </div>
        </div>
        {!isShowPassword ? (
          <img
            src={eye}
            alt="eye"
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => setIsShowPassword(!isShowPassword)}
          />
        ) : (
          <img
            src={eyeSlash}
            alt="eye-slash"
            className="cursor-pointer"
            onClick={() => setIsShowPassword(!isShowPassword)}
          />
        )}
      </div>
      <div className="flex items-center  border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-between ">
        <div className="flex justify-center items-center gap-[12px] w-full">
          <img src={lockCircle} alt="lock" className="w-[24px] h-[24px]" />
          <div className="flex py-[8px] gap-[12px] items-center w-full ">
            <input
              type={`${isShowPassword ? "text" : "password"}`}
              className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
              placeholder="Confirm password"
            />
          </div>
        </div>
        {!isShowPassword ? (
          <img
            src={eye}
            alt="eye"
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => setIsShowPassword(!isShowPassword)}
          />
        ) : (
          <img
            src={eyeSlash}
            alt="eye-slash"
            className="cursor-pointer"
            onClick={() => setIsShowPassword(!isShowPassword)}
          />
        )}
      </div>

      <button className="bg-[#006A62] text-white font-medium text-[16px] h-[58px] px-[24px] py-[12px] flex justify-center items-center gap-[8px] rounded-[14px] cursor-pointer mt-7">
        Create new account
      </button>
    </form>
  );
}

export default CreateProfileForm;
