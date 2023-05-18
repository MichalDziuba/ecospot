import { useState } from "react";
import { HeaderLink } from "../headerLink/headerLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../logo/logo";

const MenuLinks = () => (
  <>
    <HeaderLink href="/" text="link1" />
    <HeaderLink href="/" text="link2" />
    <HeaderLink href="/" text="link3" />
  </>
);
type MobileMenuBackdropProps = {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
};
const MobileMenuBackdrop = ({ onClick }: MobileMenuBackdropProps) => (
  <div
    className="w-screen h-screen bg-backdrop absolute top-0 right-0 z-40"
    onClick={onClick}
  ></div>
);

type MobileMenuProps = {
  isOpen: boolean;
  onTransitionEnd: (event: React.TransitionEvent<HTMLDivElement>) => void;
};
const MobileMenu = ({ isOpen, onTransitionEnd }: MobileMenuProps) => (
  <div
    className={`fixed right-0 top-0 z-50 flex flex-col items-center pt-5 w-fit h-screen bg-secondary px-8 md:hidden transition-transform ${
      isOpen ? "translate-x-0 ease-in-out" : "translate-x-full"
    }`}
    onTransitionEnd={onTransitionEnd}
  >
    <div className="w-full border-b-2 border-primary mb-4">Menu</div>
    <MenuLinks />
  </div>
);

export const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName === "transform" && !isMenuOpen) {
      const targetElement = e.target as HTMLElement;
      targetElement.classList.add("opacity-0");
    }
  };

  return (
    <>
      <div className="hidden md:flex gap-4">
        <MenuLinks />
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        <RxHamburgerMenu />
      </button>
      {isMenuOpen && <MobileMenuBackdrop onClick={() => setMenuOpen(false)} />}
      <MobileMenu isOpen={isMenuOpen} onTransitionEnd={handleTransitionEnd} />
    </>
  );
};
