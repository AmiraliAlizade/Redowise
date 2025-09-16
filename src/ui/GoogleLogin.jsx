import GoogleLogo from "./GoogleLogo";

function GoogleLogin() {
  return (
    <div className="flex flex-col gap-[16px] cursor-pointer">
      <div className="flex gap-[16px] items-center m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="1"
          viewBox="0 0 100 1"
          fill="none"
        >
          <path
            opacity="0.2"
            d="M100 0.5H0"
            stroke="url(#paint0_linear_88_425)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_88_425"
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopColor="#666666" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <p className="whitespace-nowrap text-[#788280] text-[14px] font-medium">
          or log in with
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="1"
          viewBox="0 0 100 1"
          fill="none"
        >
          <path
            opacity="0.2"
            d="M100 0.5H0"
            stroke="url(#paint0_linear_88_425)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_88_425"
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopColor="#666666" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex border border-solid border-[#D3DEDC] px-[16px] rounded-[14px] bg-[#F5FAF9] justify-center p-[10px] gap-[10px]">
        <GoogleLogo />
        <p className="text-[16px] font-medium text-black">Google</p>
      </div>
    </div>
  );
}

export default GoogleLogin;
