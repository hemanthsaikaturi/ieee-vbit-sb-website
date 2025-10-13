'use client'; 
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// Define a clear type for our links
type NavLink = {
  title: string;
  href: string;
};

// Define the type for our navLinks object
type NavLinks = {
  [key: string]: NavLink[];
};

// Apply the type to our data
const navLinks: NavLinks = {
  about: [ { title: 'About IEEE', href: '/about/ieee' }, { title: 'About IEEE R10', href: '/about/r10' }, { title: 'About IEEE HYD SECTION', href: '/about/hyd-section' }, { title: 'About IEEE - VBIT SB', href: '/about/vbit-sb' }, { title: 'Memberships', href: '/memberships' }, ],
  societies: [ { title: 'Computer Society', href: '/societies/computer-society' }, { title: 'Communications Society', href: '/societies/communications-society' }, { title: 'Power & Energy Society', href: '/societies/pes' }, { title: 'IEEE WIE - AG', href: '/societies/wie' }, ],
  execom: [ { title: 'Team (2025-26)', href: '/execom/2025-26' }, { title: 'Team (2024-25)', href: '/execom/2024-25' }, { title: 'Team (2023-24)', href: '/execom/2023-24' }, ],
  events: [ { title: 'Gallery', href: '/events/gallery' }, { title: 'Reports', href: '/events/reports' }, ],
};

// Animation for the menu items to stagger in
const mobileLinkVariants = {
    initial: { x: -30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
};

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to close mobile menu on navigation
  useEffect(() => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full">
      <div className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center p-2 text-xs">
          <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
            <span>📞 +91 90592 23500</span>
            <span>📧 ieeevbitsbdac@gmail.com</span>
          </div>
          <div className="hidden md:flex items-center gap-2 lg:gap-4 text-xs">
            <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">IEEE.org</a>
            <a href="https://ieeexplore.ieee.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">IEEE Xplore</a>
            <a href="https://spectrum.ieee.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">IEEE Spectrum</a>
            <a href="https://standards.ieee.org/" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-block hover:text-blue-400">IEEE Standards</a>
            <a href="https://www.ieee.org/sitemap.html" target="_blank" rel="noopener noreferrer" className="hidden lg:inline-block hover:text-blue-400">More Sites</a>
            <a href="https://www.ieee.org/membership/join/index.html" target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-3 py-1 rounded-md font-bold hover:bg-blue-500">Join IEEE</a>
          </div>
        </div>
      </div>
      <nav className={`bg-white shadow-md transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2'}`}>
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/"><Image src="/ieee-vbit-sb.png" alt="IEEE VBIT SB Logo" width={isScrolled ? 50 : 60} height={isScrolled ? 50 : 60} className="transition-all duration-300" /></Link>
          
          <ul className="hidden lg:flex items-center space-x-8 text-sm font-bold">
            <li><Link href="/" className={pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}>HOME</Link></li>
            {Object.entries(navLinks).map(([key, links]) => {
              const isActive = pathname.startsWith(`/${key}`);
              return (
                <li key={key} onMouseEnter={() => setOpenMenu(key)} onMouseLeave={() => setOpenMenu(null)} className="relative py-4">
                  <span className={`cursor-pointer flex items-center gap-1 ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`}>
                    {key.toUpperCase()}<ChevronDown size={16} className={`transition-transform duration-200 ${openMenu === key ? 'rotate-180' : ''}`} />
                  </span>
                  {openMenu === key && (<ul className="absolute left-0 mt-4 w-56 bg-white shadow-lg rounded-md py-2 border-t-4 border-blue-600">{links.map(link => (<li key={link.href}><Link href={link.href} className={`block px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-600 ${pathname === link.href ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}>{link.title}</Link></li>))}</ul>)}
                </li>
              );
            })}
            <li><Link href="/achievements" className={pathname === '/achievements' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}>ACHIEVEMENTS</Link></li>
            <li><Link href="/contact" className={pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}>CONTACT</Link></li>
            <li><Link href="/sitemap" className={pathname === '/sitemap' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}>SITE MAP</Link></li>
          </ul>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
              <Menu size={28} className="text-gray-800" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 z-[101] p-4 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <Image src="/ieee-vbit-sb.png" alt="IEEE VBIT SB Logo" width={60} height={60} />
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X size={28} className="text-white" />
              </button>
            </div>
            <motion.ul 
              className="flex flex-col space-y-4 text-lg font-bold"
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.07 }}
            >
              <motion.li variants={mobileLinkVariants}><Link href="/" className="text-white hover:opacity-80">HOME</Link></motion.li>
              {Object.entries(navLinks).map(([key, links]) => (
                <motion.li variants={mobileLinkVariants} key={key}>
                  <span className="text-blue-200">{key.toUpperCase()}</span>
                  <ul className="pl-4 mt-2 space-y-2">
                    {links.map(link => (
                      <li key={link.href}><Link href={link.href} className={`block text-sm ${pathname === link.href ? 'text-white font-semibold' : 'text-blue-100'}`}>{link.title}</Link></li>
                    ))}
                  </ul>
                </motion.li>
              ))}
              <motion.li variants={mobileLinkVariants}><Link href="/achievements" className="text-white hover:opacity-80">ACHIEVEMENTS</Link></motion.li>
              <motion.li variants={mobileLinkVariants}><Link href="/contact" className="text-white hover:opacity-80">CONTACT</Link></motion.li>
              <motion.li variants={mobileLinkVariants}><Link href="/sitemap" className="text-white hover:opacity-80">SITE MAP</Link></motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};