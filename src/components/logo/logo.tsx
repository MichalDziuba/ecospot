import { GiLindenLeaf } from 'react-icons/gi';
import { HeaderLink } from '../headerLink/headerLink';
import Link from 'next/link';

export const Logo = () => {
    return (
      <h1 className="font-semibold text-primary flex items-center gap-1">
        <GiLindenLeaf />
        {/* <HeaderLink href="/" text="ecospot" /> */}
        <Link href="/">ecospot</Link>
      </h1>
    );
}