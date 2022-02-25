import Head from "next/head";
import { SWRConfig } from "swr";
import TitleHead from "../components/TitleHead/TitleHead";
import "../styles/globals.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function MyApp({ Component, pageProps, likes, dislikes }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Head>
        <title>{"Welcome to the Pixels and Pints Ketchup Wars 2021"}</title>
        <meta property="og:url" content="https://ketchup.forestpark.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Pixels and Pints Ketchup Wars 2021"
        />

        <meta
          property="og:description"
          content={
            likes && dislikes
              ? `You can help settle a debate that divided a whole community...Current Likes: ${likes} Dislikes: ${dislikes}`
              : "Do you like ketchup?"
          }
        />
        <meta property="og:image" content={"https://i.imgur.com/eI77AcX.png"} />
      </Head>
      <Component {...pageProps} />
    </SWRConfig>
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

export default MyApp;
