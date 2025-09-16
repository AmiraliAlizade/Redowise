function Button({ children }) {
  return (
    <button className="bg-[#006A62] text-white font-medium text-[16px] h-[58px] px-[24px] py-[12px] flex justify-center items-center gap-[8px] rounded-[14px] w-[100%]">
      {children}
    </button>
  );
}

export default Button;
