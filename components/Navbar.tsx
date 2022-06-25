import React, { useState } from "react";

import Logo from "../components/Navbar/Logo";
import Menu from "../components/Navbar/Menu";
import MenuIcon from "../components/Navbar/MenuIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Logo />
      <Menu />
      <MenuIcon toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
