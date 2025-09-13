import AppLogoOne from "../ui/AppLogoOne";

import ButtonArrow from "../ui/ButtonArrow";
import bgImage from "../images/5915634301788080553-r.png";
import Button from "../ui/LinkButton";
import LinkButton from "../ui/LinkButton";

function StartPage() {
  return (
    <div className="fixed inset-0 w-[99.5%] left-1/2  -translate-x-1/2 bg-white z-50 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(330deg,#F79F00,#effffd,#51C3B7)]"></div>

      <div
        className="absolute top-20 bg-size-[380px] bottom-0 left-0 right-0 h-[780px] bg-no-repeat bg-right  opacity-90 bg-none  "
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="relative w-full h-full  flex flex-col justify-end items-center pb-1">
        <header className="absolute left-1/2 -translate-x-1/2 top-5">
          <h1 className="font-black text-2xl whitespace-nowrap mt-8 font-inter text-[#121F1D] flex gap-4">
            <AppLogoOne size={30} />
            REDO-WISE
          </h1>
        </header>

        <footer className=" bg-white w-[95%] h-50 p-[20px] rounded-[20px] ">
          <div className="absolute flex flex-col gap-[24px] w-[90%] left-1/2 -translate-x-1/2">
            <div className="flex flex-col gap-[15px]">
              <h1 className="font-inter text-black text-[20px] font-bold">
                Smarter Work. Better Results
              </h1>
              <h1 className="font-inter text-black text-[14px]/[23px] font-normal">
                Focus On Growth, While We Keep Things Organized.
              </h1>
              <div className=" mt-8">
                <LinkButton to='/signIn'>
                  Get Start
                  <ButtonArrow />
                </LinkButton>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default StartPage;
