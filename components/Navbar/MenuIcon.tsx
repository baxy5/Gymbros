import React from "react";

import { HiMenuAlt1 } from "react-icons/hi";




const MenuIcon = ({ isOpen, toggle }: { isOpen: boolean, toggle: Function }) => {
  return (
    <div >
      <HiMenuAlt1 className="text-3xl lg:text-3xl cursor-pointer" onClick={() => toggle()} />
    </div >
  );
};

export default MenuIcon;
