import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
// import { getUser } from "./services/apiAuthentication";

function App() {
  const access_token = useSelector(
    (state) => state.auth.loginUser.access_token
  );

  // const { data: User, isLoading } = useQuery({
  //   queryFn: () => getUser(access_token),
  //   queryKey: ["User"],
  //   enabled: !!access_token,
  // });

  // console.log(User);
  return <div className="text-red-200">App</div>;
}

export default App;
