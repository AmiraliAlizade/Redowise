import AppLogoTwo from "../ui/AppLogoTwo";
import lock from "../images/lock.svg";
import eye from "../images/eye.svg";
import eyeSlash from "../images/eye-slash.svg";

import Button from "../ui/Button";
import GoogleLogin from "../ui/GoogleLogin";
import userOctagon from "../images/user-octagon.svg";
import { useState } from "react";
import EmailInput from "../ui/EmailInput";
import LinkButton from "../ui/LinkButton";
import { Link } from "react-router";

function SignInPage() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className="fixed inset-0 w-[99.5%]  left-1/2 -translate-x-1/2  bg-white z-50 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(360deg,#F79F00,#effffd,#51C3B7)] blur-[197px]"></div>
      <div className="w-screen h-screen  reletive  flex flex-col items-center justify-end pb-1 opacity-70 ">
        <div className=" absolute  top-[10%] bottom-[80%] left-1/2 right-1/2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  justify-center items-center inline-flex flex-col  p-[100px] ">
            <AppLogoTwo />
            <h1 className="font-black text-2xl whitespace-nowrap mt-8 font-inter text-[#121F1D]">
              REDO-WISE
            </h1>
            <h1 className="font-normal text-sm whitespace-nowrap leading-normal font-inter text-[#525B59]  ">
              SMARTER WORK. BETTER RESULTS
            </h1>
          </div>
        </div>
        <footer className="    bg-white w-[95%] h-114 p-[20px] rounded-[20px] ">
          <div className="absolute flex flex-col gap-[20px] w-[90%] left-1/2 -translate-x-1/2">
            <div className="flex flex-col gap-[20px]">
              <h1 className="font-inter text-black text-[20px] font-bold">
                Smarter Work. Better Results
              </h1>
              <h1 className="font-inter text-black text-[14px]/[23px] font-normal">
                Enter your email to sign in on Redo-wise
              </h1>
              <EmailInput />
              <div className="flex items-center  border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-between ">
                <div className="flex justify-center items-center gap-[12px] w-full">
                  <img src={lock} alt="lock" className="w-[24px] h-[24px]" />
                  <div className="flex py-[8px] gap-[12px] items-center w-full ">
                    <input
                      type={`${isShowPassword ? "text" : "password"}`}
                      className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
                      placeholder="password"
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
              <div className="mt-3">
                <Button>Log in</Button>
              </div>
              <Link className="w-full flex justify-center">
                <span className="flex items-center gap-[11px]">
                  <img src={lock} alt="" />
                  <p className="font-bold font-[14px] text-[#3F4948]">
                    Forget password
                  </p>
                </span>
              </Link>

              <GoogleLogin />
              <LinkButton>
                <img src={userOctagon} alt="" />
                Create an account
              </LinkButton>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SignInPage;
