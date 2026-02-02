import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import ButtonTicket from '@/components/atoms/Button';
import { cn } from '@/lib/utils';
import { websiteConfig } from '@/website.config';
import { Button } from '@components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@components/ui/sheet';
import { NavProps } from '@organisms/Header/index.types';

const MobileNav: FC<NavProps> = ({ routes }: NavProps) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-background md:hidden"
        >
          <Menu className="h-8 w-8 text-primary-yellow" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[65%] border-border/40 bg-black">
        <SheetHeader className="border-b border-border/40 pb-4">
          <SheetTitle>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={websiteConfig.logo_img}
                alt="Logo"
                width={60}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
          </SheetTitle>
        </SheetHeader>

        <SheetDescription className={'sr-only'}>
          Navigazione mobile e opzioni di contatto.
        </SheetDescription>

        <div className="my-6 px-1">
          <nav className="flex flex-col space-y-5">
            {routes.map((route) => (
              <Link
                key={route.text}
                href={route.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-md px-3 py-2 text-base font-bold transition-colors hover:text-secondary-pink',
                  route.active
                    ? 'text-secondary-pink'
                    : 'font-medium text-white'
                )}
              >
                {route.text}
              </Link>
            ))}
            <ButtonTicket
              href="/"
              fill="var(--primary-yellow)"
              shadow="var(--secondary-pink)"
              textColor="var(--tertiary-blue)"
            />
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
