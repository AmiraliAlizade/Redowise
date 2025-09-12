import { Link } from "react-router";

function LinkButton({ children }) {
  return (
    <Link
      to="/signIn"
      className="bg-[#51C3B7] text-white font-medium text-[16px] h-[58px] px-[24px] py-[12px] flex justify-center items-center gap-[8px] rounded-[14px]"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
