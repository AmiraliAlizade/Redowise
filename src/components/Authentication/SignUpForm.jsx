import eye from "../../images/eye.svg";
import eyeSlash from "../../images/eye-slash.svg";
import lock from "../../images/lock.svg";
import lockCircle from "../../images/lock-circle.svg";
import { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import EmailLogo from "../../ui/EmailLogo";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/apiAuthentication";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/authSlice";

function SignUpForm() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowCPassword, setIsShowCPassword] = useState(false);
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const inputRef = useRef();
  const dispatch = useDispatch();

  const { mutate: CreateUserMutation } = useMutation({
    mutationFn: createUser,

    onSuccess: () => {
      navigate("/verifySignUp");
    },
  });

  console.log(user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const user = { email: data.email, password: data.password };

    CreateUserMutation(user);
    dispatch(signUp(user));
  }

  return (
    <form
      className="flex flex-col gap-[11px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="font-inter text-black text-[20px] font-bold">
        Smarter Work. Better Results
      </h1>
      <h1 className="font-inter text-black text-[14px]/[23px] font-normal">
        Enter your email and password to create your account
      </h1>
      <div className="">
        <div ref={inputRef}>
          <div className="flex flex-col border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-center ">
            <div className="flex py-[8px] gap-[12px] items-center ">
              <EmailLogo />
              <input
                {...register("email", {
                  required: "Please enter your email !",
                })}
                type="email"
                className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-[100%]"
                placeholder="Email address"
              />
            </div>
            {errors.email && (
              <p className="text-red-700">{errors.email.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center  border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-between ">
        <div className="flex justify-center items-center gap-[12px] w-full">
          <img src={lock} alt="lock" className="w-[24px] h-[24px]" />
          <div className="flex py-[8px] gap-[12px] items-center w-full ">
            <input
              type={`${isShowPassword ? "text" : "password"}`}
              className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
              placeholder="Choose password"
              {...register("password", {
                required: "Please enter your password !",
              })}
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
      {errors.password && (
        <p className="text-red-700">{errors.password.message}</p>
      )}

      <div className="flex items-center  border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-between ">
        <div className="flex justify-center items-center gap-[12px] w-full">
          <img src={lockCircle} alt="lock" className="w-[24px] h-[24px]" />
          <div className="flex py-[8px] gap-[12px] items-center w-full ">
            <input
              type={`${isShowCPassword ? "text" : "password"}`}
              className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "Password is not match",

                required: "Please confirm your password !",
              })}
            />
          </div>
        </div>
        {!isShowCPassword ? (
          <img
            src={eye}
            alt="eye"
            className="w-[24px] h-[24px] cursor-pointer"
            onClick={() => setIsShowCPassword(!isShowCPassword)}
          />
        ) : (
          <img
            src={eyeSlash}
            alt="eye-slash"
            className="cursor-pointer"
            onClick={() => setIsShowCPassword(!isShowCPassword)}
          />
        )}
      </div>
      {errors.confirmPassword && (
        <p className="text-red-700">{errors.confirmPassword.message}</p>
      )}

      <button className="bg-[#006A62] text-white font-medium text-[16px] h-[58px] px-[24px] py-[12px] flex justify-center items-center gap-[8px] rounded-[14px] cursor-pointer mt-7">
        Create new account
      </button>
    </form>
  );
}

export default SignUpForm;
