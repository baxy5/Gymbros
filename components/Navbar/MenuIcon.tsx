import React from "react";

import { HiXCircle, HiMenuAlt1 } from "react-icons/hi";

type props = {
  toggle: Function;
  isOpen: boolean;
};

const MenuIcon = ({ toggle, isOpen }: props) => {
  return (
    <div>
      {isOpen ? (
        <HiXCircle className="text-3xl md:text-4xl lg:text-5xl" />
      ) : (
        <HiMenuAlt1 className="text-3xl md:text-4xl lg:text-5xl" />
      )}
    </div>
  );
};

export default MenuIcon;
