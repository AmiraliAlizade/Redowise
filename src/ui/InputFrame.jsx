function InputFrame({ children }) {
  return (
    <div className="flex items-center  border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-between ">
      <div className="flex justify-center items-center gap-[12px] w-full">
        {children}
      </div>
    </div>
  );
}

export default InputFrame;
