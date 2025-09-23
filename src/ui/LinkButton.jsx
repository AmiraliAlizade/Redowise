import { Link } from "react-router";

function LinkButton({ to, children }) {
  return (
    <Link
      to={to}
      className="bg-white text-[#3F4947] border border-solid border-[#BFC9C7] font-medium text-[16px] h-[58px] px-[24px] py-[12px] flex justify-center items-center gap-[8px] rounded-[14px] w-[100%]"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
