import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import create from "zustand";

const useMoneyManagerStore = create<{}>((set) => ({}));

const Home: NextPage = () => {
  const {} = useMoneyManagerStore();

  return (
    <div>
      <h1>Money</h1>
    </div>
  );
};

export default Home;
