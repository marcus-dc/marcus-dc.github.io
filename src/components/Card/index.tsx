import { FC, PropsWithChildren } from 'react';

interface CardProps extends PropsWithChildren {}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow bg-heroGradient">
      {children}
    </div>
  );
};

interface CardContentProps extends PropsWithChildren {}

export const CardContent: FC<CardContentProps> = ({ children }) => {
  return <div className="p-3">{children}</div>;
};
