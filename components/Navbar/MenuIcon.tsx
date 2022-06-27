import React from "react";

import { HiXCircle, HiMenuAlt1 } from "react-icons/hi";


{/* <HiXCircle className="text-3xl lg:text-3xl cursor-pointer" /> */ }

const MenuIcon = ({ toggle, isOpen }: { toggle: Function, isOpen: boolean }) => {
  return (
    <div>
      <HiMenuAlt1 className="text-3xl lg:text-3xl cursor-pointer" onClick={() => toggle} />
    </div>
  );
};

export default MenuIcon;
