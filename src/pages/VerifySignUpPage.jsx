import { useEffect, useState } from "react";
import AppLogoTwo from "../ui/AppLogoTwo";
import BackLogo from "../ui/BackLogo";
import CodeInput from "../ui/CodeInput";
import EditEmail from "../ui/EditEmail";
import LinkButton from "../ui/LinkButton";
import ResendTime from "../ui/ResendTime";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "../services/apiAuthentication";
import { useNavigate } from "react-router";
import { setToken } from "../redux/authSlice";
import toast from "react-hot-toast";

function VerifySignUpPage() {
  const [otp, setOtp] = useState("");
  const userState = useSelector((state) => state.auth.user);

  console.log(userState.access_token);
  const dispatch = useDispatch();
  const userEmail = userState.email;
  const user = { email: userEmail, otp: otp };
  const navigate = useNavigate();

  function handleSuccess(data) {
    navigate("/createProfile");
    dispatch(setToken(data.token.access_token));
  }

  const { mutate: VerifyUserMutation, isPending } = useMutation({
    mutationFn: verifyOtp,
    onError: (error) => {
      toast.error(error.message, {
        position: "top-center",
      });
      console.log(error.message);
    },
    onSuccess: (data) => {
      handleSuccess(data);
      console.log(data);
    },
  });

  useEffect(() => {
    console.log("Updated authSlice:", userState);
  }, [userState]);

  return (
    <div className="fixed inset-0 w-[99.5%]  left-1/2 -translate-x-1/2  bg-white z-50 rounded-2xl overflow-hidden">
      <div className="w-screen h-screen  bg-[linear-gradient(330deg,#F79F00,#51C3B7)] reletive  flex flex-col items-center justify-end pb-1 opacity-70 ">
        <div className="absolute top-[7%] left-[7%]">
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
        <footer className="  bg-white w-[95%] h-105 p-[20px] rounded-[20px] ">
          <div className="absolute flex flex-col gap-[20px] w-[90%] left-1/2 -translate-x-1/2">
            <form
              className="flex flex-col gap-[12px]"
              onSubmit={(e) => {
                e.preventDefault(), VerifyUserMutation(user);
              }}
            >
              <h1 className="font-inter text-black text-[20px] font-bold">
                Smarter Work. Better Results
              </h1>
              <h1 className="font-inter text-black text-[14px]/[23px] font-normal">
                Enter your email to sign in or sign up on Redo-wise
              </h1>
              <EditEmail />
              <CodeInput onComplete={(code) => setOtp(code)} />
              <ResendTime />

              <div className="mt-10">
                <LinkButton>Verify</LinkButton>
              </div>
            </form>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default VerifySignUpPage;
