import React from "react";
import { useLottie } from "lottie-react";
import ketchup from "../../lotties/ketchup.json";

const options = {
  animationData: ketchup,
  loop: true,
  autoplay: true,
};

export default function KetchupButton() {
  const { View } = useLottie(options);

  return <div className="bg-emerald-200 rounded-full h-72 w-72">{View}</div>;
}
