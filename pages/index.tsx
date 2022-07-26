import type { NextPage } from "next";

import Navbar from "../components/Navbar";
import WorkoutInput from "../components/WorkoutInput";

const Home: NextPage = () => {
  return (
    <div className="flex bg-color-six ">
      <Navbar />
      <WorkoutInput />
    </div>
  );
};

export default Home;
