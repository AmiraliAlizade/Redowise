import AppLogoTwo from "../ui/AppLogoTwo";
import BackLogo from "../ui/BackLogo";
import CodeInput from "../ui/CodeInput";
import EditEmail from "../ui/EditEmail";

import LinkButton from "../ui/LinkButton";
import ResendTime from "../ui/ResendTime";

function VerifySignUpPage() {
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
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-inter text-black text-[20px] font-bold">
                Smarter Work. Better Results
              </h1>
              <h1 className="font-inter text-black text-[14px]/[23px] font-normal">
                Enter your email to sign in or sign up on Redo-wise
              </h1>
              <EditEmail />
              <CodeInput />
              <ResendTime />

              <div className="mt-10">
                <LinkButton>Verify</LinkButton>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default VerifySignUpPage;
