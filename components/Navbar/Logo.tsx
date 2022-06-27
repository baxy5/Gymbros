import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            Gym<span className="text-color-two">Bros</span>
          </p>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
