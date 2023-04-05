import { FC } from 'react';
import Hamburger, { CommonBurgerProps } from 'hamburger-react';

interface HeaderProps {
  isBurgerActive?: CommonBurgerProps['toggled'];
  onToggle?: CommonBurgerProps['onToggle'];
}

const Header: FC<HeaderProps> = ({ isBurgerActive, onToggle }) => {
  return (
    <header className="fixed flex justify-end w-full bg-gradient-to-t">
      <Hamburger toggled={isBurgerActive} onToggle={onToggle} />
    </header>
  );
};

export default Header;
