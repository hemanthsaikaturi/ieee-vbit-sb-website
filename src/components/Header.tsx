'use client'; 
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// --- TYPE DEFINITIONS ---
type NavLink = { title: string; href: string; };
type NavLinks = { [key: string]: NavLink[]; };
const navLinks: NavLinks = {
  about: [ { title: 'About IEEE', href: '/about/ieee' }, { title: 'About IEEE R10', href: '/about/r10' }, { title: 'About IEEE HYD SECTION', href: '/about/hyd-section' }, { title: 'About IEEE - VBIT SB', href: '/about/vbit-sb' }, { title: 'Memberships', href: '/memberships' }, ],
  societies: [ { title: 'Computer Society', href: '/societies/computer-society' }, { title: 'Communications Society', href: '/societies/communications-society' }, { title: 'Power & Energy Society', href: '/societies/pes' }, { title: 'IEEE WIE - AG', href: '/societies/wie' }, ],
  execom: [ { title: 'Team (2025-26)', href: '/execom/2025-26' }, { title: 'Team (2024-25)', href: '/execom/2024-25' }, { title: 'Team (2023-24)', href: '/execom/2023-24' }, ],
  events: [ { title: 'Gallery', href: '/events/gallery' }, { title: 'Reports', href: '/events/reports' }, ],
};

// --- ANIMATION VARIANTS ---
const mobileLinkVariants: Variants = {
  initial: { x: -30, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
};
const submenuVariants: Variants = {
  open: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
  collapsed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeIn' } },
};

// --- SUB-COMPONENT for a single accordion item ---
type MobileAccordionItemProps = { title: string; links: NavLink[]; isOpen: boolean; onToggle: () => void; pathname: string; }
const MobileAccordionItem = ({ title, links, isOpen, onToggle, pathname }: MobileAccordionItemProps) => (
  <motion.li variants={mobileLinkVariants}>
    <button onClick={onToggle} className="w-full flex justify-between items-center text-slate-700">
      <span>{title.toUpperCase()}</span>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown size={24} /></motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.ul variants={submenuVariants} initial="collapsed" animate="open" exit="collapsed" className="pl-4 mt-2 space-y-2 overflow-hidden">
          {links.map(link => (
            <li key={link.href}><Link href={link.href} className={`block text-sm ${pathname === link.href ? 'text-blue-600 font-semibold' : 'text-slate-600'}`}>{link.title}</Link></li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </motion.li>
);

// --- MAIN HEADER COMPONENT ---
export const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) { setIsMobileMenuOpen(false); setOpenAccordion(null); }
  }, [pathname]);

  const handleAccordionToggle = (key: string) => { setOpenAccordion(openAccordion === key ? null : key); };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full">
      <div className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center p-2 text-xs">
          <div className="flex flex-wrap gap-x-4 gap-y-1 items-center">
            <span>📞 +91 90592 23500</span>
            <span>📧 ieeevbitsbdoc@gmail.com</span>
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
          <Link href="/">
  <Image 
    src="/ieee-vbit-sb.png" 
    alt="IEEE VBIT SB Logo" 
    width={60} 
    height={60}
    className={`transition-all duration-300 ${isScrolled ? 'w-12 h-12' : 'w-16 h-16'}`} 
  /></Link>
          
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
          
          <div className="lg:hidden"><button onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu"><Menu size={28} className="text-gray-800" /></button></div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-white z-[101] p-4 flex flex-col overflow-hidden"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full opacity-30 blur-3xl" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-400 rounded-full opacity-30 blur-3xl" />
            <div className="flex justify-between items-center mb-8 relative z-10">
              <Image src="/ieee-vbit-sb.png" alt="IEEE VBIT SB Logo" width={60} height={60} />
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu"><X size={28} className="text-slate-700" /></button>
            </div>
            <motion.ul 
              className="flex flex-col space-y-4 text-lg font-bold relative z-10"
              initial="initial" animate="animate" transition={{ staggerChildren: 0.07 }}
            >
              <motion.li variants={mobileLinkVariants}><Link href="/" className="text-slate-800 hover:text-blue-600">HOME</Link></motion.li>
              {Object.entries(navLinks).map(([key, links]) => (
                <MobileAccordionItem key={key} title={key} links={links} isOpen={openAccordion === key} onToggle={() => handleAccordionToggle(key)} pathname={pathname} />
              ))}
              <motion.li variants={mobileLinkVariants}><Link href="/achievements" className="text-slate-800 hover:text-blue-600">ACHIEVEMENTS</Link></motion.li>
              <motion.li variants={mobileLinkVariants}><Link href="/contact" className="text-slate-800 hover:text-blue-600">CONTACT</Link></motion.li>
              <motion.li variants={mobileLinkVariants}><Link href="/sitemap" className="text-slate-800 hover:text-blue-600">SITE MAP</Link></motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};