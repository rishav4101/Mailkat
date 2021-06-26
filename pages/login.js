import React from "react";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";

export default function Login() {
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
                        ></input>{" "}
                      </div>
                      <div className="mt-10">
                        <div className="flex justify-center items-center lg:items-end lg:text-right mx-auto lg:mx-0">
                          <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            className="m-10"
                          >
                            Log In
                          </Button>
                        </div>
                      </div>
                    </form>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                      Don't have an account ?{" "}
                      <a
                        className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                        style={{ color: "red", fontWeight: "bold" }}
                      >
                        Sign up
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
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    src="./Login.svg"
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
