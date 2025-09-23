import CreateProfileForm from "../components/Profile/CreateProfileForm";
import BackLogo from "../ui/BackLogo";

function CreateProfilePage() {
  return (
    <div className="fixed inset-0 w-[99.5%]  left-1/2 -translate-x-1/2  bg-white z-50 rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(360deg,#F79F00,#effffd,#51C3B7)] blur-[197px]"></div>
      <div className="w-screen h-screen  reletive  flex flex-col items-center justify-end pb-1 opacity-70 ">
        <footer className="bg-white w-[95%] h-135 p-[20px] rounded-[20px] ">
          <div className="absolute flex flex-col gap-[24px] w-[90%] left-1/2 -translate-x-1/2">
            <CreateProfileForm />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CreateProfilePage;
