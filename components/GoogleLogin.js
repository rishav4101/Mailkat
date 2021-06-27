import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../redux/actions/authAction";
import { useRouter } from "next/router";

export default function Glogin(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const fetchedToken = useSelector((state) => state.auth.token);

  const MyGoogleButton = ({ onClick }) => (
    <a className="flex justify-center items-center lg:items-end lg:text-right mx-auto lg:mx-0">
      <button
        onClick={onClick}
        className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
        style={{ backgroundColor: "antiquewhite" }}
      >
        <div className="bg-white p-2 rounded-full">
          <svg className="w-4" viewBox="0 0 533.5 544.3">
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
          {props.text}
        </span>
      </button>
    </a>
  );

  return (
    <>
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_LOGIN_CLIENT_ID}
        accessType="offline"
        responseType="code"
        // isSignedIn={true}
        approvalPrompt="force"
        prompt="consent"
        render={(renderProps) => (
          <MyGoogleButton onClick={renderProps.onClick} />
        )}
        onSuccess={(res) => {
          console.log(res);
          dispatch({
            type: ACTION_TYPES.G_LOG_IN,
            payload: res,
          });
          if (fetchedToken !== "" && fetchedToken) router.push("/");
        }}
        onFailure={(res) => {
          console.log(res);
        }}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
}
