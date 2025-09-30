import eImage from "../../images/5915634301788080553-r.png";
function TaskInfoImages({ size = 20 }) {
  return (
    <div className="flex -space-x-[8px] items-center">
      <span
        className={`w-[${size}px] h-[${size}px] border border-solid border-white bg-center rounded-[4px] bg-no-repeat `}
        style={{
          backgroundImage: `url(${eImage})`,
          backgroundSize: "cover",
        }}
      ></span>
      <span
        className={`w-[${size}px] h-[${size}px] border border-solid border-white bg-center rounded-[4px] bg-no-repeat `}
        style={{
          backgroundImage: `url(${eImage})`,
          backgroundSize: "cover",
        }}
      ></span>
      <span
        className={`w-[${size}px] h-[${size}px] border border-solid border-white bg-center rounded-[4px] bg-no-repeat `}
        style={{
          backgroundImage: `url(${eImage})`,
          backgroundSize: "cover",
        }}
      ></span>
    </div>
  );
}

export default TaskInfoImages;
