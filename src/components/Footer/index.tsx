import { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="h-10 px-4 mt-8 bg-heroGradient">
      <div className="flex items-center justify-end w-full h-full">
        Copyright © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
