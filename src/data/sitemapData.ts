// Define the structure for a single link
export type SiteMapLink = {
  title: string;
  href: string;
};

// Define the structure for a group of links
export type SiteMapSectionData = {
  title: string;
  links: SiteMapLink[];
};

// Populate the data, organized by section
export const sitemapData: SiteMapSectionData[] = [
  {
    title: 'IEEE - VBIT SB',
    links: [
      { title: 'Home', href: '/' },
      { title: 'IEEE - VBIT SB', href: '/about/vbit-sb' },
      { title: 'Execom', href: '/execom/2025-26' }, 
      { title: 'Achievements', href: '/achievements' },
      { title: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'About IEEE',
    links: [
      { title: 'IEEE', href: '/about/ieee' },
      { title: 'IEEE Region 10', href: '/about/r10' },
      { title: 'IEEE Hyderabad Section', href: '/about/hyd-section' },
      { title: 'Memberships', href: '/memberships' },
    ],
  },
  {
    title: 'Society Chapters and Affinity Groups',
    links: [
      { title: 'Computer Society', href: '/societies/computer-society' },
      { title: 'Power & Energy Society', href: '/societies/pes' },
      { title: 'Communications Society', href: '/societies/communications-society' },
      { title: 'Women In Engineering Affinity Group', href: '/societies/wie' },
    ],
  },
  {
    title: 'Events',
    links: [
      { title: 'Gallery', href: '/events/gallery' },
      { title: 'Reports', href: '/events/reports' },
      { title: 'Avishkar', href: '#' },
    ],
  },
];