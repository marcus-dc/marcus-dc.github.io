import { FC } from 'react';

interface NavDrawerProps {
  isActive?: boolean;
}

const NavDrawer: FC<NavDrawerProps> = ({ isActive }) => {
  return isActive ? (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75"></div>
      <div className="fixed right-0 w-4/5 h-full bg-dark-100">nav Drawer</div>
    </>
  ) : null;
};

export default NavDrawer;
