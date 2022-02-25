import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { motion } from "framer-motion";

export default function SayNoToKetchup({ mutate }) {
  const { data, loading, fetchData, error } = useFetch(
    "/api/dislikes/increment"
  );

  const setDislikeKey = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("voted", "dislike");

      return;
    }
    return;
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        fetchData().then(() => mutate(), setDislikeKey());
      }}
      className="p-4 hover:ring-2 hover:ring-rose-400 bg-red-400 ring-offset-2 m-4 rounded-xl text-white font-normal"
    >
      {loading ? "Shaking the ketchup bottle..." : "Ewwww, ketchup sucks!"}
    </motion.button>
  );
}
