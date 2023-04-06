import { FC, useState } from 'react';
import Hamburger from 'hamburger-react';
import NavDrawer from '../NavDrawer';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
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
