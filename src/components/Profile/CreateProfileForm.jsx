import closeCircle from "../../images/close-circle.svg";
import user from "../../images/user.svg";
import briefcase from "../../images/briefcase.svg";
import call from "../../images/call.svg";
import image from "../../images/5915634301788080553-r.png";
import gallery from "../../images/gallery.svg";
import userOctagon from "../../images/user-octagon.svg";
import { useEffect, useRef, useState } from "react";
import InputFrame from "../../ui/InputFrame";
import ProfileLogo from "../../ui/ProfileLogo";
import ProfilePicture from "../../ui/ProfilePicture";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { createUpdateProfile } from "../../services/apiProfile";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function CreateProfileForm() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const userState = useSelector((state) => state.auth.loginUser);
  const access_token = userState.access_token;
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      avatarUrl: "",
    },
  });

  const { mutate: ProfileMutation, isPending } = useMutation({
    mutationFn: ({ profile, access_token }) =>
      createUpdateProfile(profile, access_token),

    onSuccess: () => {
      toast.success("The profile creation successfully completed ! ");
      navigate("/app");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  useEffect(function () {
    if (selectedImage) {
      setValue("avatarUrl", selectedImage.name);
    }
  }, []);

  const avatar_url = watch("avatarUrl");

  function onSubmit(data) {
    const profile = {
      name: data.fullName,
      phone_number: data.phoneNumber,
      general_job_title: data.jobTitle,
      password: data.password,
      avatar_url: avatar_url,
      confirm_password: data.confirmPassword,
    };

    ProfileMutation({ profile, access_token });
  }

  function handleOpenFile() {
    fileInputRef.current.click();
  }

  return (
    <form
      className="flex flex-col gap-[11px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="font-inter text-black text-[20px] font-bold">
        Smarter Work. Better Results
      </h1>
      <h1 className="font-inter text-black text-[14px]/[23px] font-normal">
        Enter your email to sign in or sign up on Redo-wise
      </h1>
      <div className="">
        <div className="flex py-[12px] px-[20px] bg-[#F5FAF9] justify-between items-center ">
          <p>{userState.email}</p>
        </div>
      </div>
      <div className="flex justify-between p-[8px] bg-[#F5FAF9] rounded-[14px]">
        <div className="flex w-[50%] items-center gap-[12px]">
          {!selectedImage ? (
            <>
              <ProfileLogo />
              <p className="font-inter text-[#0F2EF3] font-medium text-[14px]/[22px]">
                Choose Image
              </p>
            </>
          ) : (
            <>
              <ProfilePicture src={image} />
              <span className="flex gap-[8px] items-center cursor-pointer">
                {selectedImage.name} <img src={closeCircle} alt="close" />
              </span>
            </>
          )}
        </div>
        <div
          className="cursor-pointer flex flex-col justify-center h-full mt-auto mb-auto mr-[12px]"
          onClick={handleOpenFile}
        >
          <img src={gallery} alt="gallery" />
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
      </div>
      <InputFrame>
        <img src={user} alt="lock" className="w-[24px] h-[24px]" />
        <div className="flex py-[8px] gap-[12px] items-center w-full ">
          <input
            type="text"
            className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
            placeholder="Full name"
            {...register("fullName", {
              required: "The full name is required for creating profile",
            })}
          />
        </div>
      </InputFrame>

      <InputFrame>
        <img src={call} alt="lock" className="w-[24px] h-[24px]" />
        <div className="flex py-[8px] gap-[12px] items-center w-full ">
          <input
            type="text"
            className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
            placeholder="Phone number"
            {...register("phoneNumber", {
              required: "The full name is required for creating profile",
            })}
          />
        </div>
      </InputFrame>

      <InputFrame>
        <img src={userOctagon} alt="lock" className="w-[24px] h-[24px]" />
        <div className="flex py-[8px] gap-[12px] items-center w-full ">
          <input
            type="text"
            className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
            placeholder="User name"
            {...register("userName", {
              required: "The Username is required for creating profile",
            })}
          />
        </div>
      </InputFrame>
      <InputFrame>
        <img src={briefcase} alt="job" className="w-[24px] h-[24px]" />
        <div className="flex py-[8px] gap-[12px] items-center w-full ">
          <input
            type="text"
            className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-full"
            placeholder="Choose a job"
            {...register("jobTitle", {
              required: "The Job title is required for creating profile",
            })}
          />
        </div>
      </InputFrame>
      <div className="m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="2"
          viewBox="0 0 317 2"
          fill="none"
        >
          <path d="M316 1H1" stroke="#D3DEDC" strokeLinecap="round" />
        </svg>
      </div>

      <button className="bg-[#006A62] text-white font-medium text-[16px] h-[58px] px-[24px] py-[12px] flex justify-center items-center gap-[8px] rounded-[14px] cursor-pointer mt-4">
        Create new account
      </button>
    </form>
  );
}

export default CreateProfileForm;
