import SignUpForm from "../components/Authentication/SignUpForm";
import BackLogo from "../ui/BackLogo";

function SignUpPage() {
  return (
    <div className="fixed inset-0 w-[99.5%]  left-1/2 -translate-x-1/2  bg-white z-50 rounded-2xl overflow-hidden">
      <div className="w-screen h-screen  bg-[linear-gradient(330deg,#F79F00,#51C3B7)] reletive  flex flex-col items-center justify-end pb-1 opacity-70 ">
        <div className="absolute top-[4%] left-[5%] cursor-pointer">
          <BackLogo />
        </div>

        <footer className="    bg-white w-[95%] h-90 p-[20px] rounded-[20px] ">
          <div className="absolute flex flex-col gap-[24px] w-[90%] left-1/2 -translate-x-1/2">
            <SignUpForm />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SignUpPage;
