import React from "react";
import { mutate } from "swr";
import useFetch from "../../../hooks/useFetch";
import { motion } from "framer-motion";

export default function SayYesToKetchup({ mutate }) {
  const { data, loading, fetchData, error } = useFetch("/api/likes/increment");

  const setLikeKey = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("voted", "like");

      return;
    }
    return;
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        fetchData().then(() => mutate(), setLikeKey());
      }}
      className="p-4 hover:ring-2 hover:ring-rose-800 bg-red-800 ring-offset-2 m-4 rounded-xl text-white font-normal"
    >
      {loading
        ? "Shaking the ketchup bottle..."
        : "Wahoo, ketchup is the best thing ever!"}
    </motion.button>
  );
}
