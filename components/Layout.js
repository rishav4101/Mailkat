import React from "react";
import Navbar from "./Navbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// export default function Layout(props) {
//   return <div>{props.children}</div>
//   return <Navbar>{props.children}</Navbar>;
//  }
export default function Layout(props) {
  const lays = useMediaQuery("(min-width: 620px)");

  return (
    <div>
      {lays ? (
        <Navbar>{props.children}</Navbar>
      ) : (
        <div>
          <Navbar />
          {props.children}
        </div>
      )}
    </div>
  );
}
