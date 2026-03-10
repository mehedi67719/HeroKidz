'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href, children }) => {
  const pathname = usePathname();


  const isActive =
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <Link href={href} className={isActive ? 'text-primary' : ''}>
      {children}
    </Link>
  );
};

export default Navlink;