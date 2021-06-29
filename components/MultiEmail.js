import React from "react";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import "react-multi-email/style.css";

export default function MultiEmail(props) {
  return (
    <ReactMultiEmail
      placeholder={props.placeholder}
      emails={props.email}
      onChange={props.handler}
      validateEmail={(email) => {
        return isEmail(email); // return boolean
      }}
      getLabel={(email, index, removeEmail) => {
        return (
          <div data-tag key={index}>
            {email}
            <span data-tag-handle onClick={() => removeEmail(index)}>
              ×
            </span>
          </div>
        );
      }}
    />
  );
}
