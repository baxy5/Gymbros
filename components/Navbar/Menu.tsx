import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>oldal</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>oldal</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
