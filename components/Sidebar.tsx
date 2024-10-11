'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, ChevronLeft } from 'lucide-react';

type SidebarProps = {
  items: { href: string; label: string }[];
};

const Sidebar = ({ items }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className="fixed top-20 left-0 z-40 flex items-center justify-center w-8 h-8 text-gray-500 bg-white rounded-r-md dark:bg-gray-800 dark:text-gray-400 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeft /> : <ChevronRight />}
      </button>
      <div
        className={`fixed top-16 left-0 z-30 w-64 h-screen transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 bg-gray-100 dark:bg-gray-800 p-4 overflow-y-auto`}
      >
        <nav>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 px-4 rounded-md ${
                    pathname === item.href
                      ? 'bg-navy text-cream dark:bg-blue'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
