import { FC, useState } from 'react';
import Hamburger from 'hamburger-react';
import NavDrawer from '../NavDrawer';
import { AnimatePresence } from 'framer-motion';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header className="fixed z-10 flex justify-end w-full h-12">
        <Hamburger toggled={isActive} toggle={setIsActive} />
      </header>
      <AnimatePresence>
        {isActive && (
          <NavDrawer toggle={setIsActive} isActive={isActive}></NavDrawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
