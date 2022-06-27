import React from "react";
import Link from "next/link";

const Menu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className={`bg-color-seven h-screen transition-all ease-in-out delay-150 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <ul className="flex flex-col text-center">
        <li className="font-bold uppercase py-3 hover:bg-color-two cursor-pointer">
          <Link href="/">
            <a>oldal</a>
          </Link>
        </li>
        <li className="font-bold uppercase py-3 hover:bg-color-two cursor-pointer">
          <Link href="/">
            <a>oldal</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
