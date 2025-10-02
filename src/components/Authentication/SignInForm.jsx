import { useForm } from "react-hook-form";
import EmailLogo from "../../ui/EmailLogo";
import lock from "../../images/lock.svg";
import eye from "../../images/eye.svg";
import eyeSlash from "../../images/eye-slash.svg";

import Button from "../../ui/Button";
import GoogleLogin from "../../ui/GoogleLogin";
import userOctagon from "../../images/user-octagon.svg";
import { useState } from "react";

import LinkButton from "../../ui/LinkButton";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { signInUser } from "../../services/apiAuthentication";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setToken, signIn } from "../../redux/authSlice";

function SignInForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.auth.loginUser);
  console.log(userState);

  function handleSuccess(data) {
    const user_access_token = data.data.token.access_token;
    const user_email = data.data.email;
    dispatch(setToken(user_access_token));

    dispatch(signIn(user_email));
    navigate("app");
  }

  const { mutate: SignInUserMutation } = useMutation({
    mutationFn: signInUser,
    onSuccess: (data) => {
      handleSuccess(data);
      toast.success("User successfully logged in");
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  function onSubmit(data) {
    const user = {
      email: data.email,
      password: data.password,
    };
    console.log(user);
    SignInUserMutation(user);
  }
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <form
      className="flex flex-col gap-[20px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col border border-solid  border-[#D3DEDC] px-[16px] rounded-[8px]  justify-center ">
        <div className="flex py-[8px] gap-[12px] items-center ">
          <EmailLogo />
          <input
            {...register("email", {
              required: "Please enter email for sign in",
            })}
            type="email"
            className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-[100%]"
            placeholder="Email address"
          />
        </div>
      </div>
      <div className="flex flex-col border border-solid  border-[#D3DEDC] px-[16px] rounded-[8px]  justify-center ">
        <div className="flex justify-center items-center gap-[12px] w-full">
          <img src={lock} alt="lock" className="w-[24px] h-[24px]" />
          <div className="flex py-[8px] gap-[12px] items-center w-full ">
            <input
              {...register("password", {
                required: "Please enter password for sign in",
              })}
              type={`${isShowPassword ? "text" : "password"}`}
              className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
              placeholder="password"
            />
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
      </div>
      <div className="mt-3">
        <Button>Log in</Button>
      </div>
      <Link to="/forgetPassword" className="w-full flex justify-center">
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
    </form>
  );
}

export default SignInForm;
