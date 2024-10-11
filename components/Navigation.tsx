"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-navy dark:bg-blue text-cream p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          BPIB Gratia
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-tan">Home</Link>
          <Link href="/profil" className="hover:text-tan">Profile</Link>
          <Link href="/informasi" className="hover:text-tan">Information</Link>
          <Link href="/download" className="hover:text-tan">Download</Link>
          <Link href="/kontak" className="hover:text-tan">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-cream hover:text-tan"
          >
            {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <button className="md:hidden text-cream hover:text-tan" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" className="block py-2 px-4 hover:bg-blue dark:hover:bg-navy">Home</Link>
          <Link href="/profil" className="block py-2 px-4 hover:bg-blue dark:hover:bg-navy">Profile</Link>
          <Link href="/informasi" className="block py-2 px-4 hover:bg-blue dark:hover:bg-navy">Information</Link>
          <Link href="/download" className="block py-2 px-4 hover:bg-blue dark:hover:bg-navy">Download</Link>
          <Link href="/kontak" className="block py-2 px-4 hover:bg-blue dark:hover:bg-navy">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;