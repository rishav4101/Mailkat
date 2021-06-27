import React from "react";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../redux/actions/authAction";
import GLogin from "../components/GoogleLogin";
import Link from "next/link";
import Image from "next/image";
import pic from "../public/Login.svg";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const fetchedLogIn = useSelector((state) => state.auth.logInMsg);
  const fetchedToken = useSelector((state) => state.auth.token);
  const [msg, setMsg] = React.useState("");
   const [data, setData] = React.useState({
    username: "",
    password: "",
  });

  const sign = () => {
    dispatch({ type: ACTION_TYPES.LOG_IN, payload: data });
    setMsg(fetchedLogIn);
    if (fetchedToken !== "" && fetchedToken) router.push("/");
  };

  React.useEffect(() => {
    if (fetchedToken !== "" && fetchedToken) router.push("/");
  });

  return (
    <div>
      <main>
        <Layout>
          <div
            style={{
              minHeight: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="lg:flex">
              <div className="lg:w-1/2 xl:max-w-screen-sm">
                <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                  <h2
                    className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-centre xl:text-6xl
                  xl:text-bold"
                    style={{
                      color: "#ff3d00",
                      fontWeight: "bold",
                    }}
                  >
                    Log In
                  </h2>
                  {msg === undefined ? <h5 className="text-primary mx-auto mt-3 text-center w-full">Error Occured</h5> : <></>}
                  <div className="mt-12">
                    <form>
                      <div>
                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                          Email Address or Username
                        </div>
                        <input
                          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                          type=""
                          placeholder="Enter email or username"
                          value={data.username}
                          onChange={(e) => {
                            setData({ ...data, username: e.target.value });
                            console.log(data);
                          }}
                        ></input>
                        &nbsp;
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-bold text-gray-700 tracking-wide">
                            Password
                          </div>
                        </div>
                        <input
                          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                          type="password"
                          placeholder="Enter your password"
                          value={data.password}
                          onChange={(e) => {
                            setData({ ...data, password: e.target.value });
                            console.log(data);
                          }}
                        ></input>
                        &nbsp;
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-center items-center lg:items-end lg:text-right mx-auto lg:mx-0">
                          <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            className="m-10"
                            onClick={sign}
                            style={{
                              width: "320px",
                              height: "56.3px",
                              fontWeight: "bold",
                            }}
                          >
                            Log In
                          </Button>
                        </div>
                      </div>
                    </form>
                    <div className="my-4 text-base text-center" style={{}}>
                      Or
                    </div>
                    {/* Google signup  */}
                    <GLogin text="Login with Google" />
                    <div className="mt-4 text-sm font-display font-semibold text-gray-700 text-center">
                      Dont have an account ? &nbsp;
                      <Link
                        className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                        style={{ color: "red", fontWeight: "bold" }}
                        href="./signup"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen"
                style={{ height: "auto" }}
              >
                <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
                  <Image src={pic} alt="." width={416} height={341.25} />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
}
