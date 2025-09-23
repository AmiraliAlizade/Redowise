import infoCircle from "../images/info-circle.svg";

function PasswordRequirement({ children }) {
  return (
    <span className="flex items-center justify-end gap-[8px]">
      <img src={infoCircle} alt="" />
      <p className="font-normal text-[#6F7978] text-[12px]">{children}</p>
    </span>
  );
}

export default PasswordRequirement;
