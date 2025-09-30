import tag from "../../images/hashtag.svg";

function Tag() {
  return (
    <div className="flex flex-col justify-between w-full">
      <div className="flex items-center gap-1">
        <img src={tag} alt="" />
        <p className="text-[#687372] font-normal text-[10px]/[150%]">Tag</p>
      </div>
      <p  className="text-[#7B61FF] text-[11px]/[16px] tracking-[0.5px] font-bold">
        #UIUX
      </p>
    </div>
  );
}

export default Tag;
