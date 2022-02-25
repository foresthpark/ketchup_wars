import Head from "next/head";
import React from "react";

export default function TitleHead({ title, likes, dislikes }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:url" content="https://ketchup.forestpark.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Pixels and Pints Ketchup Wars 2021" />
      <meta
        property="og:description"
        content={`You can help settle a debate that divided a whole community...Current Likes: ${likes} Dislikes: ${dislikes}`}
      />
      <meta property="og:image" content={"https://i.imgur.com/eI77AcX.png"} />
    </Head>
  );
}

export const getServerSideProps = async () => {
  let photo = null;
  const likes = await fetch("/api/likes")
    .then((response) => response.json())
    .then((json) => {
      return json.data;
    });

  const dislikes = await fetch("/api/dislikes")
    .then((response) => response.json())
    .then((json) => {
      return json.data;
    });

  return {
    props: {
      likes,
      dislikes,
    },
  };
};
