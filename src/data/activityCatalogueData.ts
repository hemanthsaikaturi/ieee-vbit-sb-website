export type Activity = {
  title: string;
  imageUrl: string;
  modalContent: {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
  };
};

export const activities: Activity[] = [
  {
    title: 'DesignX 2.0',
    imageUrl: '/placeholders/designx_poster.jpg',
    modalContent: {
      title: 'DesignX 2.0', // Note: I corrected the title to match the event
      date: '27th & 28th September, 2024',
      description: 'DesignX 2.0 is an engaging design workshop and competition that challenges participants to apply UI/UX principles and graphic design techniques for effective problem-solving and innovation...',
      imageUrl: '/placeholders/designx_details.jpg',
    },
  },
  {
    title: 'WiEducate 3.0',
    imageUrl: '/placeholders/wieducate_poster.jpg',
    modalContent: {
      title: 'WiEducate 3.0',
      date: 'October 5th, 2024', // Corrected
      description: 'Organized by the IEEE WIE Affinity Group, WiEducate 3.0 is a community outreach program focused on providing foundational STEM education and mentorship to underprivileged students.', // Corrected
      imageUrl: '/placeholders/wieducate_poster.jpg', // CORRECTED: Using the poster as the detail image
    },
  },
  {
    title: 'Industrial Visit To Power Grid',
    imageUrl: '/placeholders/powergrid_poster.jpg',
    modalContent: {
      title: 'Industrial Visit To Power Grid',
      date: 'November 12th, 2024', // Corrected
      description: 'An exclusive industrial visit for Power & Energy Society members to the Power Grid Corporation, offering invaluable insights into high-voltage transmission systems and modern grid management.', // Corrected
      imageUrl: '/placeholders/powergrid_poster.jpg', // CORRECTED: Using the poster as the detail image
    },
  },
  {
    title: 'Avishkar 2k25',
    imageUrl: '/placeholders/avishkar_poster.jpg',
    modalContent: {
      title: 'Avishkar 2k25',
      date: 'January 22nd-24th, 2025', 
      description: 'Avishkar is the flagship technical fest of IEEE VBIT SB, featuring a plethora of events, workshops, and competitions designed to spark innovation and technical curiosity among students from various colleges.', // Corrected
      imageUrl: '/placeholders/avishkar_poster.jpg',
    },
  },
  {
    title: 'AlgoVeda',
    imageUrl: '/placeholders/algoveda_poster.jpg',
    modalContent: {
      title: 'AlgoVeda',
      date: 'February 15th, 2025',
      description: 'A high-stakes competitive coding contest organized by the IEEE Computer Society chapter. AlgoVeda challenges participants with complex algorithmic problems, testing their problem-solving and coding efficiency.', // Corrected
      imageUrl: '/placeholders/algoveda_poster.jpg',
    },
  },
  {
    title: 'Workshop on Antenna Design',
    imageUrl: '/placeholders/antenna_poster.jpg',
    modalContent: {
      title: 'Workshop on Antenna Design using HFSS',
      date: 'March 8th, 2025', // Corrected
      description: 'A specialized, hands-on workshop hosted by the IEEE Communications Society. This session focuses on designing and simulating advanced antennas using industry-standard HFSS software.', // Corrected
      imageUrl: '/placeholders/antenna_poster.jpg', 
    },
  },
];