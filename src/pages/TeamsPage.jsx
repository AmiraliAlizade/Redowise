import glass from "../images/glass.svg";
import Button from "../ui/Button";

function TeamsPage() {
  return (
    <div className="flex flex-col  items-center gap-4 w-[90%] my-[50%] mx-auto">
      <img src={glass} alt="" />
      <h1 className="text-[22px]/[26px] font-bold text-black ">
        Your team is empty
      </h1>
      <p className="text-[12px]/[16px] font-normal text-[#687372] tracking-[0.4px] text-center">
        Create a team and invite members to collaborate and manage your projects
        better.
      </p>
      <Button>Add new team</Button>
    </div>
  );
}

export default TeamsPage;
