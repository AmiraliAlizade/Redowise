import AppLogo from "../ui/AppLogo";
import BackgroundLine from "../ui/BackgroundLine";

function LoadingPage() {
  return (
    <div className="absolute left--1/2 right-2/5">
      <div className="w-90 h-full bg-gradient-to-b from-[#B2F0F0] via-white to-[#FFD19F] reletive">
        <BackgroundLine />
        <div
          className="absolute inline-flex flex-col top-1/2 bottom-1/2 left-1/2 right-1/2 justify-center items-center

        "
        >
          <AppLogo />
          <h1 className="font-black text-2xl">REDO-WISE</h1>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
