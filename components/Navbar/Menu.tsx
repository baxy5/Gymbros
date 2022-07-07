import React from "react";
import Link from "next/link";

const Menu = ({ isOpen, index, charts }: { isOpen: boolean, index: string, charts: string }) => {
  return (
    <div className="bg-color-seven h-screen transition-all ease-in-out delay-150">
      <ul className="flex flex-col text-center">
        <Link href={index}>
          <li className="font-bold uppercase py-3 hover:bg-color-two cursor-pointer">
            <a>Add Workout</a>
          </li>
        </Link>
        <Link href={charts}>
          <li className="font-bold uppercase py-3 hover:bg-color-two cursor-pointer">
            <a>Progress</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
