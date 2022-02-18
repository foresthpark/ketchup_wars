import Head from "next/head";
import Image from "next/image";
import DislikeButton from "../components/DislikeButton/DislikeButton";
import LikeButton from "../components/LikeButton/LikeButton";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
