import type { NextPage } from "next";

import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Navbar />
    </div>
  );
};

export default Home;
