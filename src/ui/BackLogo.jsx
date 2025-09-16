import { useNavigate } from "react-router";

function BackLogo() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center w-[16px] h-[16px] gap-[16px] items-center cursor-pointer" onClick={()=> navigate(-1)}>
      <span className="bg-none border border-solid border-white w-full h-full rounded-full p-[16px]">
        <g
          transform="translate(2,7)"
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="12"
            viewBox="0 0 17 12"
            fill="none"
          >
            <path
              d="M15.9996 5.99914L5.9996 5.99914M4.9996 10.9991C4.9996 10.9991 0.999603 6.22701 0.999603 5.99915C0.999603 5.77128 4.9996 0.999146 4.9996 0.999146"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </g>
      </span>
    </div>
  );
}

export default BackLogo;
