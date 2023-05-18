import { ReactSVG } from "react-svg";

import Image from "next/image";
import Link from "next/link";

type FeatureTileProps = {
  imageSrc: string;
  title: string;

  link: string;
};

export const FeatureTile = ({ imageSrc, link, title }: FeatureTileProps) => {
  return (
    <Link href="/about">
      <div className="group text-white bg-secondary rounded-md flex flex-col items-center justify-evenly hover:scale-105 transition-all w-48 h-52 ">
        <Image
          loading="lazy"
          src={imageSrc}
          alt=""
          width={80}
          height={80}
          className="w-20 h-20 group-hover:animate-pulse"
        />
        <p className="text-secondary text-xl text-center w-full  font-medium group-hover:underline underline-offset-8">
          {title}
        </p>
      </div>
    </Link>
  );
};
