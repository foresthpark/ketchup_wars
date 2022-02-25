import { useState, useEffect } from "react";
import useSWR from "swr";
import SayNoToKetchup from "../components/ActionButtonContainer/ActionButton/SayNoToKetchup";
import SayYesToKetchup from "../components/ActionButtonContainer/ActionButton/SayYesToKetchup";
import ActionButtonContainer from "../components/ActionButtonContainer/ActionButtonContainer";
import KetchupButton from "../components/KetchupButton/KetchupButton";
import KetchupChart from "../components/KetchupChart/KetchupChart";
import KetchupStack from "../components/KetchupStack/KetchupStack";
import TitleText from "../components/Typography/TitleText";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const {
    data: likeData,
    error: likeError,
    mutate: likeMutate,
  } = useSWR("/api/likes");
  const {
    data: dislikeData,
    error: dislikeError,
    mutate: dislikeMutate,
  } = useSWR("/api/dislikes");
  const [voted, setVoted] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedValue = window.localStorage.getItem("voted");

      if (savedValue) return setVoted(savedValue);

      return setVoted(null);
    }
  }, [likeData, dislikeData]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-100">
      {voted ? (
        likeData &&
        dislikeData && (
          <KetchupChart likes={likeData.data} dislikes={dislikeData.data} />
        )
      ) : (
        <KetchupButton />
      )}
      {/* <KetchupStack /> */}
      <TitleText
        text={
          voted
            ? voted === "dislike"
              ? "I guess you hate ketchup"
              : "I guess you love ketchup"
            : "Do you like ketchup?"
        }
      />
      {voted ? null : (
        <ActionButtonContainer
          likeMutate={likeMutate}
          dislikeMutate={dislikeMutate}
        />
      )}
    </div>
  );
}
