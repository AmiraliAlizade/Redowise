function ActionButton({ children }) {
  return (
    <button className="flex bg-white py-[6px] gap-[5px] px-[10px] rounded-[6px]">
      {children}
    </button>
  );
}

export default ActionButton;
