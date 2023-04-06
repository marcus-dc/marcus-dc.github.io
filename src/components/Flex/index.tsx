import { FC, PropsWithChildren } from 'react';

interface FlexProps extends PropsWithChildren {}

export const Flex: FC<FlexProps> = ({ children }) => {
  return <div className="flex flex-col gap-8">{children}</div>;
};
