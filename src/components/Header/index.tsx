import { FC } from 'react';
import Hamburger, { CommonBurgerProps } from 'hamburger-react';

interface HeaderProps {
  isBurgerActive?: CommonBurgerProps['toggled'];
  onToggle?: CommonBurgerProps['onToggle'];
}

const Header: FC<HeaderProps> = ({ isBurgerActive, onToggle }) => {
  return (
    <header className="flex justify-end">
      <Hamburger toggled={isBurgerActive} onToggle={onToggle} />
    </header>
  );
};

export default Header;
