import React from "react";
import Link from "next/link";

const Menu = ({ isOpen, index, charts }: { isOpen: boolean, index: string, charts: string }) => {
  return (
    <div className="bg-color-seven h-screen transition-all ease-in-out delay-150">
      <ul className="flex flex-col text-center">
        <li className="font-bold uppercase py-3 hover:bg-color-two cursor-pointer">
          <Link href={index}>
            <a>Add Workout</a>
          </Link>
        </li>
        <li className="font-bold uppercase py-3 hover:bg-color-two cursor-pointer">
          <Link href={charts}>
            <a>Progress</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
