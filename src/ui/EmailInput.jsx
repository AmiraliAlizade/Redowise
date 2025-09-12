import EmailLogo from "./EmailLogo";

function EmailInput() {
  return (
    <div className="flex flex-col border border-solid border-[#D3DEDC] px-[16px] rounded-[8px] justify-center ">
      <div className="flex py-[8px] gap-[12px] items-center ">
        <EmailLogo />
        <input type="email" className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59]" placeholder="Email address" />
      </div>
    </div>
  );
}

export default EmailInput;
