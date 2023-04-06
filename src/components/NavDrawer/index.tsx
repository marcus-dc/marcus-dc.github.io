import { FC } from 'react';
import clsx from 'clsx';

interface NavDrawerProps {
  isActive?: boolean;
}

const NavDrawer: FC<NavDrawerProps> = ({ isActive }) => {
  return (
    <>
      <div
        className={clsx(
          // TW
          'fixed top-0 left-0 w-full h-full bg-black bg-opacity-75',
          // Animate
          'animate__animated',
          isActive ? 'animate__fadeIn' : 'animate__fadeOut'
        )}
      ></div>
      <div
        className={clsx(
          // TW
          'fixed right-0 w-4/5 h-full bg-dark-100',
          // Animate
          'animate__animated',
          isActive ? 'animate__slideInRight' : 'animate__slideOutRight'
        )}
      >
        nav Drawer {String(isActive)}
      </div>
    </>
  );
};

export default NavDrawer;
