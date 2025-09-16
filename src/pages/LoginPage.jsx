import AppLogoTwo from "../ui/AppLogoTwo";
import BackLogo from "../ui/BackLogo";
import EmailInput from "../ui/EmailInput";
import LinkButton from "../ui/LinkButton";
import GoogleLogin from "../ui/GoogleLogin";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/authSlice";
import EmailLogo from "../ui/EmailLogo";
import Button from "../ui/LinkButton";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../services/apiAuthentication";

function LoginPage() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.user);
  console.log(userState);
  const userEmail = userState.email;
  console.log(userEmail);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { mutate: CreateUserMutation, isPending } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      navigate("/verifySignUp");
    },
  });

  function onSubmit(data) {
    dispatch(signUp(data.email));
    CreateUserMutation(data.email);
  }

  return (
    <div className="fixed inset-0 w-[99.5%]  left-1/2 -translate-x-1/2  bg-white z-50 rounded-2xl overflow-hidden">
      <div className="w-screen h-screen  bg-[linear-gradient(330deg,#F79F00,#51C3B7)] reletive  flex flex-col items-center justify-end pb-1 opacity-70 ">
        <div className="absolute top-[7%] left-[7%] cursor-pointer">
          <BackLogo />
        </div>
        <div className=" absolute  top-[20%] bottom-[80%] left-1/2 right-1/2">
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
        <footer className="    bg-white w-[95%] h-102 p-[20px] rounded-[20px] ">
          <div className="absolute flex flex-col gap-[24px] w-[90%] left-1/2 -translate-x-1/2">
            <div className="flex flex-col gap-[15px]">
              <h1 className="font-inter text-black text-[20px] font-bold">
                Smarter Work. Better Results
              </h1>
              <h1 className="font-inter text-black text-[14px]/[23px] font-normal">
                Enter your email to sign up on Redo-wise
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-center ">
                  <div className="flex py-[8px] gap-[12px] items-center ">
                    <EmailLogo />
                    <input
                      {...register("email", {
                        required: "Please enter email for sign up",
                      })}
                      type="email"
                      className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-[100%]"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <Button>Sign up</Button>
              </form>
              <Link
                to="/passwordLogin"
                className="bg-[#fff] border border-solid border-[#D3DEDC] text-[#525B59] font-medium text-[16px] h-[58px] px-[24px] py-[12px] flex justify-center items-center gap-[8px] mb-4 rounded-[14px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                    stroke="#525B59"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                    stroke="#525B59"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                    stroke="#525B59"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Login with password
              </Link>
              <GoogleLogin />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LoginPage;
