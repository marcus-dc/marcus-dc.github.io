import { FC, useState } from 'react';
import Hamburger, { CommonBurgerProps } from 'hamburger-react';
import NavDrawer from '../NavDrawer';

interface HeaderProps {
  onToggle?: CommonBurgerProps['onToggle'];
}

const Header: FC<HeaderProps> = ({ onToggle }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <NavDrawer isActive={isActive}></NavDrawer>
      <header className="fixed flex justify-end w-full">
        <Hamburger onToggle={setIsActive} />
      </header>
    </>
  );
};

export default Header;
