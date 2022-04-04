import Head from "next/head";
import { NextPage } from "next";
import { About, Contact, Work } from "../components";
import React from "react";

interface Props {
  darkMode: boolean
}

const Home: NextPage<Props> = (props) => {
  return (
    <div>
      <Head>
        <title>Luv Makin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <About darkMode={props.darkMode} />
      <Work darkMode={props.darkMode} />
      <Contact />
    </div>
  )
}

export default Home;