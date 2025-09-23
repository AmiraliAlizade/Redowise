import AppLogoTwo from "../ui/AppLogoTwo";
import userTag from "../images/user-tag.svg";
import GoogleLogin from "../ui/GoogleLogin";

import EmailLogo from "../ui/EmailLogo";
import Button from "../ui/Button";

import LinkButton from "../ui/LinkButton";

function ForgetPasswordPage() {
  return (
    <div className="fixed inset-0 w-[99.5%]  left-1/2 -translate-x-1/2  bg-white z-50 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(360deg,#F79F00,#effffd,#51C3B7)] blur-[197px]"></div>
      <div className="w-screen h-screen  reletive  flex flex-col items-center justify-end pb-1 opacity-70 ">
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
          <div className="absolute flex flex-col gap-[20px] w-[90%] left-1/2 -translate-x-1/2">
            <div className="flex flex-col gap-[15px]">
              <h1 className="font-inter text-black text-[20px] font-bold">
                Forget Password
              </h1>
              <h1 className="font-inter text-black text-[14px]/[23px] font-normal">
                Enter your phone number to sign up on Redo-wise
              </h1>
              <form className="flex flex-col gap-[20px]">
                <div className="flex flex-col border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-center ">
                  <div className="flex py-[8px] gap-[12px] items-center ">
                    <EmailLogo />
                    <input
                      type="email"
                      className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-[100%]"
                      placeholder="Email address"
                    />
                  </div>
                </div>

                <Button>Sign up</Button>
              </form>

              <GoogleLogin />
              <LinkButton>
                <img src={userTag} alt="" /> Login with password
              </LinkButton>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
