import React from "react";
import Navbar from "./Navbar";
import Floating from "../components/Floating";

export default function Layout(props) {
  return <Navbar>{props.children}</Navbar>;
}
