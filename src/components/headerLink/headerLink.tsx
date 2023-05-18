import Link from "next/link";
import { ReactNode } from "react";
interface HeaderLinkProps {
  href: string;
  text: string;
  
}
export const HeaderLink = ({ href, text, }: HeaderLinkProps) => {
  return (
    <Link
      href={href}
      className="flex justify-center items-center text-white"

    >
      {text}
    </Link>
  );
};
