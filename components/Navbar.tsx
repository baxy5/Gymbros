import React, { useState } from "react";

import Logo from "../components/Navbar/Logo";
import Menu from "../components/Navbar/Menu";
import MenuIcon from "../components/Navbar/MenuIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className="w-52">
      <div className="flex p-2 justify-between items-center bg-color-seven">
        <Logo />
        <MenuIcon isOpen={isOpen} toggle={toggle} />
      </div>
      <Menu isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
