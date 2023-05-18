'use client'
import { GiLindenLeaf } from 'react-icons/gi';
import Link from "next/link"
import { HeaderLink } from '../headerLink/headerLink';
import { Menu } from '../menu/menu';
import { Logo } from '../logo/logo';
import ElectricCarIcon from '/public/icons/electricCar.svg';

export const Header = () => {
    return (
        <header className="w-full text-2xl flex justify-between items-center py-6 
       
       ">
        <Logo />
        <Menu />
      </header>
    );
}