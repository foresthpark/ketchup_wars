import React from "react";
import KetchupButton from "../KetchupButton/KetchupButton";
import KetchupChart from "../KetchupChart/KetchupChart";

export default function KetchupStack() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-96 h-96 relative z-0">
        <KetchupChart />
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <KetchupButton />
        </div>
      </div>
    </div>
  );
}
