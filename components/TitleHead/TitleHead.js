import Head from "next/head";
import React from "react";

export default function TitleHead(props, { likes, dislikes }) {
  console.log("🚀 ~ file: TitleHead.js ~ line 5 ~ TitleHead ~ likes", props);
  return (
    <Head>
      <title>{"Welcome to the Pixels and Pints Ketchup Wars 2021"}</title>
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
  const likes = await fetch(
    "https://ketchup-wars-8sw153vxf-foresthpark.vercel.app/api/likes"
  )
    .then((response) => response.json())
    .then((json) => {
      return json.data;
    });
  console.log(
    "🚀 ~ file: index.js ~ line 68 ~ getServerSideProps ~ likes",
    likes
  );

  const dislikes = await fetch(
    "https://ketchup-wars-8sw153vxf-foresthpark.vercel.app/api/dislikes"
  )
    .then((response) => response.json())
    .then((json) => {
      return json.data;
    });

  console.log(
    "🚀 ~ file: index.js ~ line 76 ~ getServerSideProps ~ dislikes",
    dislikes
  );

  return {
    props: {
      likes,
      dislikes,
    },
  };
};
