import { useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/authSlice";
import EmailLogo from "../../ui/EmailLogo";
import Button from "../../ui/Button";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";

function SignUpForm() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.auth.loginUser);

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { mutate: CreateUserMutation, isPending } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      toast.success(data.data.message);
      console.log(data);
      console.log(userState);
      navigate("/verifySignUp");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error)
    },
  });

  function onSubmit(data) {
    CreateUserMutation(data.email);
    dispatch(signUp(data.email));
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[20px]"
    >
      <div className="flex flex-col border border-solid  border-[#D3DEDC] px-[16px] rounded-[8px]  justify-center ">
        <div className="flex py-[8px] gap-[12px] items-center ">
          <EmailLogo />
          <input
            {...register("email", {
              required: "Please enter email for sign up",
            })}
            type="email"
            className="outline-none border-none font-inter placeholder:font-normal placeholder:text-[#525B59] w-[100%]"
            placeholder="Email address"
          />
        </div>
      </div>

      <Button>Sign up</Button>
    </form>
  );
}

export default SignUpForm;
