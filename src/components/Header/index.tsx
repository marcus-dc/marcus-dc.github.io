import { FC, useState } from 'react';
import Hamburger from 'hamburger-react';
import NavDrawer from '../NavDrawer';
import { AnimatePresence } from 'framer-motion';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <NavDrawer toggle={setIsActive} isActive={isActive}></NavDrawer>
        )}
      </AnimatePresence>
      <header className="fixed flex justify-end w-full">
        <Hamburger toggled={isActive} toggle={setIsActive} />
      </header>
    </>
  );
};

export default Header;
