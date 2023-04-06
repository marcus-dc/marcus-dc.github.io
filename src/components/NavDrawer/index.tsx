import { FC } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface NavDrawerProps {
  isActive?: boolean;
  toggle: (toggled: boolean) => any;
}

const NavDrawer: FC<NavDrawerProps> = ({ isActive, toggle }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={isActive ? () => toggle(!isActive) : undefined}
        className={clsx(
          'fixed top-0 left-0 w-full h-full bg-black bg-opacity-75',
          !isActive && 'pointer-events-none'
        )}
      ></motion.div>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        className="fixed right-0 w-4/5 h-full shadow bg-heroGradient"
      >
        nav Drawer
      </motion.div>
    </>
  );
};

export default NavDrawer;
