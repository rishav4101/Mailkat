import React from "react";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../redux/actions/authAction";

export default function signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const fetchedSignUp = useSelector((state) => state.auth.signUpMsg);
  const fetchedToken = useSelector((state) => state.auth.token);

  const [data, setData] = React.useState({
    email: "",
    username: "",
    password: "",
  });

  const sign = () => {
    dispatch({ type: ACTION_TYPES.SIGN_UP, payload: data });
    console.log(fetchedSignUp);
    if (fetchedToken !== "") router.push("/");
  };

  React.useEffect(() => {
    if (fetchedToken !== "") router.push("/");
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
                    Sign Up
                  </h2>
                  <div className="mt-12">
                    <form>
                      <div>
                        <div className="text-sm font-bold text-gray-700 tracking-wide">
                          Email Address
                        </div>
                        <input
                          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                          type=""
                          placeholder="Enter your email address"
                          value={data.email}
                          onChange={(e) => {
                            setData({ ...data, email: e.target.value });
                            console.log(data);
                          }}
                        ></input>{" "}
                      </div>
                      <div className="mt-8">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-bold text-gray-700 tracking-wide">
                            Username
                          </div>
                        </div>
                        <input
                          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                          type=""
                          placeholder="Enter your username"
                          value={data.username}
                          onChange={(e) => {
                            setData({ ...data, username: e.target.value });
                            console.log(data);
                          }}
                        ></input>{" "}
                      </div>
                      <div className="mt-8">
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-bold text-gray-700 tracking-wide">
                            Password
                          </div>
                        </div>
                        <input
                          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                          type=""
                          placeholder="Enter your password"
                          value={data.password}
                          onChange={(e) => {
                            setData({ ...data, password: e.target.value });
                            console.log(data);
                          }}
                        ></input>{" "}
                      </div>
                      <div className="mt-10">
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
                    <div className="my-12 text-base text-center" style={{}}>
                      Or
                    </div>
                    {/* Google signup  */}
                    <a className="flex justify-center items-center lg:items-end lg:text-right mx-auto lg:mx-0">
                      <button
                        class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                        style={{ backgroundColor: "antiquewhite" }}
                      >
                        <div class="bg-white p-2 rounded-full">
                          <svg class="w-4" viewBox="0 0 533.5 544.3">
                            <path
                              d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                              fill="#4285f4"
                            />
                            <path
                              d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                              fill="#34a853"
                            />
                            <path
                              d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                              fill="#fbbc04"
                            />
                            <path
                              d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                              fill="#ea4335"
                            />
                          </svg>
                        </div>
                        <span className="flex justify-center items-center lg:items-end lg:text-right mx-auto lg:mx-0">
                          Sign Up with Google
                        </span>
                      </button>
                    </a>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                      Already have an account ?{" "}
                      <a
                        className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                        style={{ color: "red", fontWeight: "bold" }}
                        href="./login"
                      >
                        Log In
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen"
                style={{ height: "auto" }}
              >
                <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
                  <img
                    style={{
                      objectFit: "contain",
                      maxWidth: "130%",
                      height: "auto",
                    }}
                    src="./signup.svg"
                    alt="."
                  />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
}
