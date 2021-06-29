import React from "react";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../redux/actions/authAction";
import GLogin from "../components/GoogleLogin";
import Image from "next/image";
import pic from "../public/signup.svg";
import Link from "next/link";
import { Alert, AlertTitle } from "@material-ui/lab";

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const fetchedSignUpMsg = useSelector((state) => state.auth.signUpMsg);
  const fetchedSignUpError = useSelector((state) => state.auth.signUpError);
  const fetchedToken = useSelector((state) => state.auth.token);
  // const [msg, setMsg] = React.useState("");

  const [data, setData] = React.useState({
    email: "",
    username: "",
    password: "",
    name: "",
  });

  const sign = () => {
    console.log(data);
    dispatch({ type: ACTION_TYPES.SIGN_UP, payload: data });
    // setMsg(fetchedSignUpMsg);
    setData({
      email: "",
      username: "",
      password: "",
      name: "",
    });
    console.log(fetchedSignUpMsg);
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
                <div className="px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-10 xl:px-24 xl:max-w-2xl">
                  <h2
                    className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-centre xl:text-6xl
                  xl:text-bold"
                    style={{
                      color: "#ff3d00",
                      fontWeight: "bold",
                    }}
                  >
                    Sign Up
                  </h2>
                  {fetchedSignUpError ? (
                    <Alert severity="error" className="max-w-lg mx-auto my-5">
                      <AlertTitle>Error</AlertTitle>
                      <strong>{fetchedSignUpError}</strong>
                    </Alert>
                  ) : (
                    <></>
                  )}

                  {fetchedSignUpMsg ? (
                    <Alert severity="success" className="max-w-lg mx-auto my-5">
                      <AlertTitle>Successful</AlertTitle>
                      <strong>{fetchedSignUpMsg}</strong>
                    </Alert>
                  ) : (
                    <></>
                  )}

                  <div className="mt-12">
                    <form>
                      <div className="mt-4 text-sm font-bold text-gray-700 tracking-wide">
                        Name
                      </div>
                      <input
                        required
                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        type=""
                        placeholder="Enter your name"
                        value={data.name}
                        onChange={(e) => {
                          setData({ ...data, name: e.target.value });
                          console.log(data);
                        }}
                      ></input>
                      <div>
                        <div className="mt-4 text-sm font-bold text-gray-700 tracking-wide">
                          Email Address
                        </div>
                        <input
                          required
                          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                          type=""
                          placeholder="Enter your email address"
                          value={data.email}
                          onChange={(e) => {
                            setData({ ...data, email: e.target.value });
                            console.log(data);
                          }}
                        ></input>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-bold text-gray-700 tracking-wide">
                            Username
                          </div>
                        </div>
                        <input
                          required
                          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                          type=""
                          placeholder="Enter your username"
                          value={data.username}
                          onChange={(e) => {
                            setData({ ...data, username: e.target.value });
                            console.log(data);
                          }}
                        ></input>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-bold text-gray-700 tracking-wide">
                            Password
                          </div>
                        </div>
                        <input
                          required
                          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                          type="password"
                          placeholder="Enter your password"
                          value={data.password}
                          onChange={(e) => {
                            setData({ ...data, password: e.target.value });
                            console.log(data);
                          }}
                        ></input>
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
                              fontWeight: "bold",
                              width: "320px",
                              height: "56.3px",
                            }}
                          >
                            Sign Up
                          </Button>
                        </div>
                      </div>
                    </form>
                    <div className="my-4 text-base text-center" style={{}}>
                      Or
                    </div>
                    {/* Google signup  */}
                    <GLogin text="Login with google" />
                    <div className="flex justify-center mt-4 text-sm font-display font-semibold text-gray-700 text-center">
                      Have an account ? &nbsp;
                      <Link
                        href="./login"
                      >
                       <h1 className="cursor-pointer text-primary w-15">Log In</h1> 
                      </Link>
                    </div>
                    <div className="h-16 w-full md:h-1"></div>
                  </div>
                </div>
              </div>
              <div
                className="hidden lg:flex items-center justify-center flex-1 h-screen"
                style={{ height: "auto" }}
              >
                <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
                  <Image src={pic} alt="." />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
}
