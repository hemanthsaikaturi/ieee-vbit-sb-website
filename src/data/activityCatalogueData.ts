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
      title: 'DesignX 2.0',
      date: '27th & 28th September, 2024',
      description: 'DesignX 2.0 is an engaging design workshop and competition that challenges participants to apply UI/UX principles and graphic design techniques for effective problem-solving and innovation. The event features multiple sessions and tasks, each targeting different aspects of user interface, user experience and visual communication. Throughout the workshop, participants will explore contemporary design trends and best practices, enhancing their ability to create intuitive and impactful user experiences. Whether you are new to design or an experienced creative, DesignX 2.0 offers the perfect platform to refine your skills, think innovatively and compete with fellow design enthusiasts.',
      imageUrl: '/placeholders/designx_poster.jpg',
    },
  },
  {
    title: 'WiEducate 3.0',
    imageUrl: '/placeholders/wieducate_poster.jpg',
    modalContent: {
      title: 'WiEducate 3.0',
      date: '2nd November, 2024', 
      description: 'WiEducate 3.0 is an inspiring session organized by the Women in Engineering Affinity Group under IEEE – VBIT SB, supported by the IEEE Pre-University STEM Portal Grant Program and powered by IEEE TryEngineering. This event aims to raise awareness among students about STEM education and various scholarship opportunities, motivating them to pursue their goals. WiEducate 3.0 offers a valuable platform for students to explore their interests in science, technology, engineering, and mathematics, equipping them with the knowledge and confidence needed to excel in their future careers. Whether you are just starting or looking to deepen your STEM understanding, this event empowers you to achieve your aspirations.', 
      imageUrl: '/placeholders/wieducate_poster.jpg', 
    },
  },
  {
    title: 'Industrial Visit To Power Grid',
    imageUrl: '/placeholders/powergrid_poster.jpg',
    modalContent: {
      title: 'Industrial Visit To Power Grid',
      date: '23rd January, 2025',
      description: 'Industrial Visit to Power Grid Corporation Limited offers participants an exclusive opportunity to explore the advanced infrastructure of one of India’s leading power distribution organizations at the Annojiguda, Hyderabad facility. This visit is designed to provide a comprehensive understanding of modern power distribution systems, integration of cutting-edge technologies and best practices in energy management and sustainability. Attendees will gain firsthand insights into how power grids play a crucial role in maintaining regional energy stability and supporting industrial growth. Whether you are an engineering student or a professional eager to learn about large-scale energy solutions, this visit presents a valuable platform to witness real-world applications of power systems and engage with industry experts.',
      imageUrl: '/placeholders/powergrid_poster.jpg',
    },
  },
  {
    title: 'Avishkar 2k25',
    imageUrl: '/placeholders/avishkar_poster.jpg',
    modalContent: {
      title: 'Avishkar 2k25',
      date: '3rd and 4th March, 2025', 
      description: 'Avishkar is a technical paper presentation competition conducted by IEEE – VBIT SB exclusively for the first-year students at VBIT. Avishkar has consistently served as a robust platform over the years, fostering an environment that encourages students to explore and enhance their abilities. It has reliably provided a starting point for students to initiate their journey and demonstrate their innovation. It assisted students to overcome stage fear, exhibit their competence, discover their innate potential and demonstrate their skills.',
      imageUrl: '/placeholders/avishkar_poster.jpg',
    },
  },
  {
    title: 'AlgoVeda',
    imageUrl: '/placeholders/algoveda_poster.jpg',
    modalContent: {
      title: 'AlgoVeda',
      date: '11th April, 2025',
      description: 'AlgoVeda is an intellectually stimulating coding competition designed for participants to showcase their problem-solving skills, coding expertise and logical reasoning. The competition is structured into multiple levels, each testing a unique aspect of technical knowledge. Participants will face a series of progressively challenging problems that assess their critical thinking, analytical reasoning and programming proficiency. This edition of AlgoVeda introduces Pattern Recognition and Math Puzzles to enhance problem-solving abilities, critical thinking, and ideation skills. Whether you’re a beginner or an advanced coder, this event offers a platform to push your limits and compete with the best minds.', 
      imageUrl: '/placeholders/algoveda_poster.jpg',
    },
  },
  {
    title: 'Workshop on Antenna Design',
    imageUrl: '/placeholders/antenna_poster.jpg',
    modalContent: {
      title: 'Workshop on Antenna Design using HFSS',
      date: '25th April, 2025',
      description: 'Antenna Design with HFSS Workshop is a practical session dedicated to building foundational and advanced skills in RF and microwave systems, focusing on antenna development and filter configuration using the industry-standard HFSS simulation software. Participants will gain comprehensive insights into various antenna types such as microstrip patch, horn and reconfigurable antennas and engage in hands-on design and analysis exercises. The workshop covers essential theoretical concepts alongside practical implementation, including in-depth discussions on fabrication challenges like tolerance analysis and SMA connector integration. Whether you are starting out or seeking to expand your expertise, this event is the ideal platform to enhance your technical skills and RF simulation proficiency.',
      imageUrl: '/placeholders/antenna_poster.jpg', 
    },
  },
];