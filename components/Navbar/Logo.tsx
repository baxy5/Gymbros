import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <p className="font-bold text-xl md:text-3xl lg:text-4xl">
            Gym<span className="text-color-seven">Bros</span>
          </p>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
