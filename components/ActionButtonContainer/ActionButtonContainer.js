import React from "react";
import SayNoToKetchup from "./ActionButton/SayNoToKetchup";
import SayYesToKetchup from "./ActionButton/SayYesToKetchup";

export default function ActionButtonContainer({ likeMutate, dislikeMutate }) {
  return (
    <div className="flex flex-row items-center justify-center">
      <SayNoToKetchup mutate={dislikeMutate} />
      <SayYesToKetchup mutate={likeMutate} />
    </div>
  );
}
