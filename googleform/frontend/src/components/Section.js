import React from "react";

export default function Section({ children }) {
  const isError = children.props?.errors?.[children.props?.name];
  console.log(isError, "isError");
  return (
    <div className={`section ${isError ? "section-error" : ""}`.trim()}>
      {children}
    </div>
  );
}
