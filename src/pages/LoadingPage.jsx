import { useNavigate } from "react-router";

import Spinner from "../ui/Spinner";
import { useEffect } from "react";

import AppLogo1 from "../ui/AppLogoOne";

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(
    function () {
      const timer = setTimeout(() => {
        navigate("/start");
      }, 4000);

      return () => clearTimeout(timer);
    },
    [navigate]
  );
  return (
    <div className="fixed inset-0 w-[99.5%]  left-1/2 -translate-x-1/2  bg-white z-50 rounded-2xl overflow-hidden">
      <div className="w-full h-full  bg-[linear-gradient(330deg,#F79F00,#effffd,#51C3B7)] reletive opacity-70">
        <div className=" absolute  top-2/7 bottom-1/2 left-1/2 right-1/2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  justify-center items-center inline-flex flex-col  p-[100px] ">
            <AppLogo1 />
            <h1 className=" font-black text-2xl whitespace-nowrap mt-8 font-inter text-[#121F1D]">
              REDO-WISE
            </h1>
            <h1 className="font-normal text-sm whitespace-nowrap leading-normal font-inter text-[#525B59]  ">
              SMARTER WORK. BETTER RESULTS
            </h1>
          </div>
        </div>
        <div className="absolute top-4/5 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Spinner />
          <p className="text-xs text-light text-[#121F1D] mt-4">Loading</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
// bg-gradient-to-b via-blue-100  from-[#51C3B7] to-[#F79F00]
