import Link from 'next/link';
import { FC } from 'react';

import { cn } from '@/lib/utils';
import ButtonTicket from '@/components/atoms/Button';
import { NavProps, Route } from '@organisms/Header/index.types';

const DesktopNav: FC<NavProps> = ({ routes }: NavProps) => {
  return (
    <nav className="container mx-auto flex items-center justify-center space-x-16">
      <div className="flex items-center space-x-8">
        {routes.map((route: Route) => (
          <Link
            key={route.text}
            href={route.href}
            className={cn(
              'transition-colors hover:text-secondary',
              route.active ? 'text-accent' : 'text-white'
            )}
          >
            {route.text}
          </Link>
        ))}

        <ButtonTicket href="/"
          fill="#CCF80C"
          shadow="#F133A5"
          textColor="#2D10CA" />
      </div>
    </nav>
  );
};
export default DesktopNav;
