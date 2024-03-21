import AddCar from "@/components/AddCar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Leaderboard from "@/components/Leaderboard";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Keys For Trees</title>
        <meta
          name="description"
          content="Save the planet - one car at a time."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header counter={24000000} />
      <AddCar />
      <Leaderboard />
      <Footer />
    </>
  );
}
