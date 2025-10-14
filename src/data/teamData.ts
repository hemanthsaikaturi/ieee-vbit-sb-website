// Define the structure for a single team member
export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  isLogo?: boolean;
};

// Define the structure for a team section
export type Team = {
  title: string;
  members: TeamMember[];
};

// --- DATA FOR THE 2025-2026 TEAM ---
export const teamData2025_26: Team[] = [
  // Main Executive Committee
  {
    title: "Main Executive Committee",
    members: [
      {
        name: "Shiva Sai Nath",
        role: "Chairperson",
        imageUrl: "/placeholders/team/25-26/shiva_sai_nath.jpg",
      },
      {
        name: "Yasmeen Mohammed",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/yasmeen_mohammed.jpg",
      },
      {
        name: "Akshay",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/akshay.jpg",
      },
      {
        name: "G. Akhil",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/g_akhil.jpg",
      },
      {
        name: "Sai Deekshith Badam",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/25-26/sai_deekshith_badam.png",
      },
      {
        name: "B. Chitti Sujana",
        role: "Design Lead",
        imageUrl: "/placeholders/team/25-26/b_chitti_sujana.jpg",
      },
      {
        name: "K. Isaac",
        role: "Resource & Skill Management Lead",
        imageUrl: "/placeholders/team/25-26/k_isaac.jpg",
      },
      {
        name: "Hemanth Sai Katuri",
        role: "Web Master",
        imageUrl: "/placeholders/team/25-26/hemanth_sai_katuri.png",
      },
      {
        name: "Khushi",
        role: "Research & Development Lead",
        imageUrl: "/placeholders/team/25-26/khushi.jpg",
      },
    ],
  },
  // Resource & Skill Management Team
  {
    title: "Resource & Skill Management Team",
    members: [
      {
        name: "K. Isaac",
        role: "Lead",
        imageUrl: "/placeholders/team/25-26/k_isaac.jpg",
      },
      {
        name: "D. Karthikeya",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/d_karthikeya.png",
      },
      {
        name: "Nara Pranay",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/nara_pranay.jpg",
      },
      {
        name: "Kotha Mounika",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/Mounika.png",
      },
      {
        name: "Shravani Jakka",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/shravani_jakka.png",
      },
    ],
  },
  // Design Team
  {
    title: "Design Team",
    members: [
      {
        name: "B. Chitti Sujana",
        role: "Lead",
        imageUrl: "/placeholders/team/25-26/b_chitti_sujana.jpg",
      },
      {
        name: "Chiluka Deepa",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/25-26/Deepa.jpg",
      },
      {
        name: "Akhil",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/25-26/akhil.jpg",
      },
      {
        name: "N. Sai Bharati",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/25-26/Bharati.jpg",
      },
    ],
  },
  // Web Designing Team
  {
    title: "Web Designing Team",
    members: [
      {
        name: "Hemanth Sai Katuri",
        role: "Web Master",
        imageUrl: "/placeholders/team/25-26/hemanth_sai_katuri.png",
      },
      {
        name: "Sriram",
        role: "Web Designer",
        imageUrl: "/placeholders/team/25-26/Sriram.jpg",
      },
      {
        name: "Gayathri Gurram",
        role: "Web Designer",
        imageUrl: "/placeholders/team/25-26/gayathri_gurram.jpg",
      },
    ],
  },
  // Membership Development Team
  {
    title: "Membership Development Team",
    members: [
      {
        name: "Sai Deekshith Badam",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/25-26/sai_deekshith_badam.png",
      },
      {
        name: "Anirudh Pradhan",
        role: "MDO",
        imageUrl: "/placeholders/team/25-26/anirudh.jpg",
      },
      {
        name: "Shweta Kumari Pandey",
        role: "MDO",
        imageUrl: "/placeholders/team/25-26/shwetha.jpg",
      },
    ],
  },
  // Research and Development Team
  {
    title: "Research and Development Team",
    members: [
      {
        name: "Khushi",
        role: "Lead",
        imageUrl: "/placeholders/team/25-26/khushi.jpg",
      },
      {
        name: "Thanmayee",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/thanmayee.jpg",
      },
      {
        name: "N. Bhanu Prakash Reddy",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/bhanu-prakash.jpg",
      },
      {
        name: "J. Gayathri",
        role: "Coordinator",
        imageUrl: "/placeholders/team/25-26/Gayatri-jeguru.jpg",
      },
    ],
  },
  // Computer Society
  {
    title: "Computer Society",
    members: [
      {
        name: "D. Karthikeya",
        role: "Chairperson",
        imageUrl: "/placeholders/team/25-26/d_karthikeya.png",
      },
      {
        name: "Akshit Chauhan Paitlya",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/akshit.jpg",
      },
      {
        isLogo: true,
        name: "CS Logo",
        role: "CS",
        imageUrl: "/placeholders/cs_logo.png",
      },
      {
        name: "K. Geetha Bhagyasree",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/geetha.jpg",
      },
      {
        name: "K. Abhilash",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/abhilash.jpg",
      },
      {
        name: "B. Harshith",
        role: "Representative",
        imageUrl: "/placeholders/team/25-26/Harshith-Baddam.jpg",
      },
    ],
  },
  // Communications Society
  {
    title: "Communications Society",
    members: [
      {
        name: "Nara Pranay",
        role: "Chairperson",
        imageUrl: "/placeholders/team/25-26/nara_pranay.jpg",
      },
      {
        name: "Sunidhi Bolleddu",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/sunidhi.jpg",
      },
      {
        isLogo: true,
        name: "ComSoc Logo",
        role: "ComSoc",
        imageUrl: "/placeholders/comsoc_logo.png",
      },
      {
        name: "G. Ruth",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/ruth-Grace.jpg",
      },
      {
        name: "K. S. Anirudh",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/ks-anirudh.jpg",
      },
      {
        name: "Kavya Yarajala",
        role: "Representative",
        imageUrl: "/placeholders/team/25-26/kavya.jpg",
      },
    ],
  },
  // Power and Energy Society
  {
    title: "Power and Energy Society",
    members: [
      {
        name: "Kotha Mounika",
        role: "Chairperson",
        imageUrl: "/placeholders/team/25-26/Mounika.png",
      },
      {
        name: "Gujjari Swarnamai",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/swarnamai.jpg",
      },
      {
        isLogo: true,
        name: "PES Logo",
        role: "PES",
        imageUrl: "/placeholders/pes_logo.png",
      },
      {
        name: "Roshan Jaisimha",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/roshan.jpg",
      },
      {
        name: "Venkatanjay Pulkam",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/venkata-Ajay.jpg",
      },
      {
        name: "K. Suraj Rao",
        role: "Representative",
        imageUrl: "/placeholders/team/25-26/Suraj-Rao.jpg",
      },
    ],
  },
  // Women in Engineering Affinity Group
  {
    title: "Women in Engineering Affinity Group",
    members: [
      {
        name: "Shravani Jakka",
        role: "Chairperson",
        imageUrl: "/placeholders/team/25-26/shravani_jakka.png",
      },
      {
        name: "Shreshta",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/shreshta.jpg",
      },
      {
        isLogo: true,
        name: "WIE Logo",
        role: "WIE",
        imageUrl: "/placeholders/wie_logo.png",
      },
      {
        name: "Harshada",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/Harshadha.jpg",
      },
      {
        name: "A. V. K. Abhirama Praneeth",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/Abhiram.jpg",
      },
      {
        name: "B. Ashritha Reddy",
        role: "Representative",
        imageUrl: "/placeholders/team/25-26/ashritha.jpg",
      },
    ],
  },
];

// --- DATA FOR THE 2024-2025 TEAM ---
export const teamData2024_25: Team[] = [
  // Main Executive Committee
  {
    title: "Main Executive Committee",
    members: [
      {
        name: "Jemima Madasi",
        role: "Chairperson",
        imageUrl: "/placeholders/team/24-25/Jemima-Madasi.jpg",
      },
      {
        name: "J. Sri Charan Reddy",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/24-25/Sri-Charan.jpg",
      },
      {
        name: "P. Chanikya",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/chanikya.jpg",
      },
      {
        name: "K. Karthik Reddy",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/Karkala-karthik-Reddy.jpg",
      },
      {
        name: "Tappa Rohith",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/24-25/Tappa-Rohith.jpg",
      },
      {
        name: "J. Srinidhi",
        role: "Public Relations Officer",
        imageUrl: "/placeholders/team/24-25/j.srinidhi.jpg",
      },
      {
        name: "P. Siva Teja",
        role: "Design Lead",
        imageUrl: "/placeholders/team/24-25/Siva-Teja.jpg",
      },
      {
        name: "Venkat Ramana",
        role: "Resource & Skill Management Lead",
        imageUrl: "/placeholders/team/24-25/VenkatRamana.jpg",
      },
      {
        name: "K. Sai Ganesh",
        role: "Web Master",
        imageUrl: "/placeholders/team/24-25/saiganesh.png",
      },
    ],
  },
  // Resource and Skill Management Team
  {
    title: "Resource and Skill Management Team",
    members: [
      {
        name: "Venkat Ramana",
        role: "Lead",
        imageUrl: "/placeholders/team/24-25/VenkatRamana.jpg",
      },
      {
        name: "Mugala Shravya",
        role: "Coordinator",
        imageUrl: "/placeholders/team/24-25/MUGALA-SHRAVYA.jpg",
      },
      {
        name: "K. Sai Kumar",
        role: "Coordinator",
        imageUrl: "/placeholders/team/24-25/Sai-Kumar.jpg",
      },
      {
        name: "Reddy Vari Nithish Kumar Reddy",
        role: "Coordinator",
        imageUrl: "/placeholders/team/24-25/Nitish.jpg",
      },
      {
        name: "Sai Manikanta Jakka",
        role: "Coordinator",
        imageUrl: "/placeholders/team/24-25/Saimanikanta.jpg",
      },
    ],
  },
  // Design Team
  {
    title: "Design Team",
    members: [
      {
        name: "P. Siva Teja",
        role: "Lead",
        imageUrl: "/placeholders/team/24-25/Siva-Teja.jpg",
      },
      {
        name: "K. Issac",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/25-26/k_isaac.jpg",
      },
      {
        name: "Chitti Sujana",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/25-26/b_chitti_sujana.jpg",
      },
      {
        name: "A. Sai Meghamsh",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/24-25/meghamsh.jpg",
      },
    ],
  },
  // Web Designing Team
  {
    title: "Web Designing Team",
    members: [
      {
        name: "K. Sai Ganesh",
        role: "Web Master",
        imageUrl: "/placeholders/team/24-25/saiganesh.png",
      },
      {
        name: "Hemanth Sai",
        role: "Web Designer",
        imageUrl: "/placeholders/team/25-26/hemanth_sai_katuri.png",
      },
      {
        name: "M. Pavan Mahesh",
        role: "Web Designer",
        imageUrl: "/placeholders/team/24-25/Pavan.jpg",
      },
    ],
  },
  // Membership Development Team
  {
    title: "Membership Development Team",
    members: [
      {
        name: "Tappa Rohith",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/24-25/Tappa-Rohith.jpg",
      },
      {
        name: "Sai Deekshith Badam",
        role: "MDO",
        imageUrl: "/placeholders/team/25-26/sai_deekshith_badam.png",
      },
      {
        name: "Aditi",
        role: "MDO",
        imageUrl: "/placeholders/team/24-25/Aditi.jpeg",
      },
    ],
  },
  // Research and Development Team
  {
    title: "Research and Development Team",
    members: [
      {
        name: "K. Sai Kumar",
        role: "Lead",
        imageUrl: "/placeholders/team/24-25/Sai-Kumar.jpg",
      },
      {
        name: "Sanjana Gupta Maheepathy",
        role: "Co-lead",
        imageUrl: "/placeholders/team/24-25/Sanjana-M.jpeg",
      },
      {
        name: "Sachin Gupta",
        role: "Co-ordinator",
        imageUrl: "/placeholders/team/24-25/Sachin-Gupta.png",
      },
      {
        name: "Samreen Begum",
        role: "Co-ordinator",
        imageUrl: "/placeholders/team/24-25/samreen.jpg",
      },
      {
        name: "Misha Emmadi",
        role: "Co-ordinator",
        imageUrl: "/placeholders/team/24-25/misha.jpg",
      },
    ],
  },
  // Computer Society
  {
    title: "Computer Society",
    members: [
      {
        name: "Mugala Shravya",
        role: "Chairperson",
        imageUrl: "/placeholders/team/24-25/MUGALA-SHRAVYA.jpg",
      },
      {
        name: "Shiva Sai Nath",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/shiva_sai_nath.jpg",
      },
      {
        isLogo: true,
        name: "CS Logo",
        role: "CS",
        imageUrl: "/placeholders/cs_logo.png",
      },
      {
        name: "Khushi",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/khushi.jpg",
      },
      {
        name: "D. Karthikeya",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/d_karthikeya.png",
      },
      {
        name: "Shravani Jakka",
        role: "Representative",
        imageUrl: "/placeholders/team/25-26/shravani_jakka.png",
      },
    ],
  },
  // Communications Society
  {
    title: "Communications Society",
    members: [
      {
        name: "Sripathi Nihanth Reddy",
        role: "Chairperson",
        imageUrl: "/placeholders/team/24-25/Nihanth.jpg",
      },
      {
        name: "Yasmeen Mohammed",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/yasmeen_mohammed.jpg",
      },
      {
        isLogo: true,
        name: "ComSoc Logo",
        role: "ComSoc",
        imageUrl: "/placeholders/comsoc_logo.png",
      },
      {
        name: "P. Dedeepya",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/Dedeepya.jpeg",
      },
      {
        name: "Nara Pranay",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/nara_pranay.jpg",
      },
      {
        name: "Shiva Shankar",
        role: "Representative",
        imageUrl: "/placeholders/team/24-25/Shiva-Shankar.jpg",
      },
    ],
  },
  // Power and Energy Society
  {
    title: "Power and Energy Society",
    members: [
      {
        name: "G. Sai Nath",
        role: "Chairperson",
        imageUrl: "/placeholders/team/24-25/sainath.jpg",
      },
      {
        name: "Kotha Mounika",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/25-26/Mounika.png",
      },
      {
        isLogo: true,
        name: "PES Logo",
        role: "PES",
        imageUrl: "/placeholders/pes_logo.png",
      },
      {
        name: "Akshay",
        role: "Secretary",
        imageUrl: "/placeholders/team/25-26/akshay.jpg",
      },
      {
        name: "G. Akhil",
        role: "Treasurer",
        imageUrl: "/placeholders/team/25-26/g_akhil.jpg",
      },
      {
        name: "T. Sharanya",
        role: "Representative",
        imageUrl: "/placeholders/team/24-25/Sharanya.jpg",
      },
    ],
  },
  // Women in Engineering Affinity Group
  {
    title: "Women in Engineering Affinity Group",
    members: [
      {
        name: "Seetha Sumanjali",
        role: "Chairperson",
        imageUrl: "/placeholders/team/24-25/Sumanjali-Seetha-suma-02.jpg",
      },
      {
        name: "Reddimasu Meghana",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/24-25/Meghana.jpeg",
      },
      {
        isLogo: true,
        name: "WIE Logo",
        role: "WIE",
        imageUrl: "/placeholders/wie_logo.png",
      },
      {
        name: "J. Niharika",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/Niharika.jpg",
      },
      {
        name: "Manoj",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/manoj.jpg",
      },
      {
        name: "Urvi Chandra Shekar Gogi",
        role: "Representative",
        imageUrl: "/placeholders/team/24-25/Urvi-Gogi.jpg",
      },
    ],
  },
];

// --- DATA FOR THE 2023-2024 TEAM ---
export const teamData2023_24: Team[] = [
  // Main Executive Committee
  {
    title: "Main Executive Committee",
    members: [
      {
        name: "Mohammad Abdul Basith",
        role: "Chairperson",
        imageUrl: "/placeholders/team/23-24/basith.jpg",
      },
      {
        name: "Ch. Sathvika",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/23-24/sathvika.jpg",
      },
      {
        name: "D. Manoghna",
        role: "Secretary",
        imageUrl: "/placeholders/team/23-24/Manoghna-1-e1696436743969.jpg",
      },
      {
        name: "G. SaiKumar",
        role: "Treasurer",
        imageUrl: "/placeholders/team/23-24/Sai-Kumar.jpg",
      },
      {
        name: "Raghu karredla",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/23-24/raghu.jpg",
      },
      {
        name: "Pritesh Agarwal",
        role: "Public Relations Officer",
        imageUrl: "/placeholders/team/23-24/pritesh.jpg",
      },
      {
        name: "T P Varsha Rani",
        role: "Design Lead",
        imageUrl: "/placeholders/team/23-24/varsha-e1696430416465.jpeg",
      },
      {
        name: "Pawan Sai",
        role: "Resource & Skill Management Lead",
        imageUrl: "/placeholders/team/23-24/pawan.jpg",
      },
      {
        name: "Sravanth Simhadri",
        role: "Web Master",
        imageUrl: "/placeholders/team/23-24/sravanth.jpg",
      },
    ],
  },
  // Resource & Skill Management Team
  {
    title: "Resource & Skill Management Team",
    members: [
      {
        name: "Pawan Sai",
        role: "Lead",
        imageUrl: "/placeholders/team/23-24/pawan.jpg",
      },
      {
        name: "K. Akash",
        role: "Coordinator",
        imageUrl: "/placeholders/team/23-24/akash.jpg",
      },
      {
        name: "Sanjana Goud",
        role: "Coordinator",
        imageUrl: "/placeholders/team/23-24/sanjana.jpg",
      },
      {
        name: "Bollapally Charan Goud",
        role: "Coordinator",
        imageUrl: "/placeholders/team/23-24/charan.jpg",
      },
      {
        name: "Vungarala Chaitanya Kumar",
        role: "Coordinator",
        imageUrl: "/placeholders/team/23-24/chaitnaya.jpg",
      },
      {
        name: "Siddarth Rajput",
        role: "Coordinator",
        imageUrl: "/placeholders/team/23-24/siddharth.jpg",
      },
    ],
  },
  // Design Team
  {
    title: "Design Team",
    members: [
      {
        name: "T P Varsha Rani",
        role: "Lead",
        imageUrl: "/placeholders/team/23-24/varsha-e1696430416465.jpeg",
      },
      {
        name: "K. Akash",
        role: "Digital Media Manager",
        imageUrl: "/placeholders/team/23-24/akash.jpg",
      },
      {
        name: "Tharun Reddy",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/23-24/tharun.jpg",
      },
      {
        name: "Siva Teja",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/23-24/sivateja.jpg",
      },
      {
        name: "K. Prajwal",
        role: "Graphic Designer",
        imageUrl: "/placeholders/team/23-24/prajwal.jpg",
      },
    ],
  },
  // Web Designing Team
  {
    title: "Web Designing Team",
    members: [
      {
        name: "Sravanth Simhadri",
        role: "Web Master",
        imageUrl: "/placeholders/team/23-24/sravanth.jpg",
      },
      {
        name: "K. Ganesh",
        role: "Web Designer",
        imageUrl: "/placeholders/team/23-24/ganesh.jpg",
      },
      {
        name: "M. Shravya",
        role: "Web Designer",
        imageUrl: "/placeholders/team/24-25/MUGALA-SHRAVYA.jpg",
      },
    ],
  },
  // Membership Development Team
  {
    title: "Membership Development Team",
    members: [
      {
        name: "Raghu karredla",
        role: "GINI & MDO",
        imageUrl: "/placeholders/team/23-24/raghu.jpg",
      },
      {
        name: "Varshith",
        role: "MDO",
        imageUrl: "/placeholders/team/23-24/varshith.jpg",
      },
      {
        name: "Tappa Rohith",
        role: "MDO",
        imageUrl: "/placeholders/team/24-25/Tappa-Rohith.jpg",
      },
    ],
  },
  // Research and Development Team
  {
    title: "Research and Development Team",
    members: [
      {
        name: "Kannuru Aditya",
        role: "Lead (Projects & Innovations)",
        imageUrl: "/placeholders/team/23-24/aditya.jpg",
      },
      {
        name: "Pratham Kamidiri",
        role: "Co-Lead",
        imageUrl: "/placeholders/team/23-24/pratham.jpg",
      },
      {
        name: "J. Srinidhi",
        role: "Co-ordinator",
        imageUrl: "/placeholders/team/24-25/j.srinidhi.jpg",
      },
      {
        name: "Sanjana Gupta Maheepathy",
        role: "Co-ordinator",
        imageUrl: "/placeholders/team/24-25/Sanjana-M.jpeg",
      },
    ],
  },
  // Computer Society
  {
    title: "Computer Society",
    members: [
      {
        name: "Sindhuja Lakkapally",
        role: "Chairperson",
        imageUrl: "/placeholders/team/23-24/sindhuja.jpg",
      },
      {
        name: "Surya Teja Thodupunuri",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/23-24/surya.jpg",
      },
      {
        isLogo: true,
        name: "CS Logo",
        role: "CS",
        imageUrl: "/placeholders/cs_logo.png",
      },
      {
        name: "Venkata Ramana Panigrahi",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/VenkatRamana.jpg",
      },
      {
        name: "J. Sri Charan Reddy",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/Sri-Charan.jpg",
      },
      {
        name: "Ruchira Erra",
        role: "Representative",
        imageUrl: "/placeholders/team/23-24/ruchira.jpg",
      },
    ],
  },
  // Communications Society
  {
    title: "Communications Society",
    members: [
      {
        name: "Bollapally Charan Goud",
        role: "Chairperson",
        imageUrl: "/placeholders/team/23-24/charan.jpg",
      },
      {
        name: "Sripathi Nihanth Reddy",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/24-25/Nihanth.jpg",
      },
      {
        isLogo: true,
        name: "ComSoc Logo",
        role: "ComSoc",
        imageUrl: "/placeholders/comsoc_logo.png",
      },
      {
        name: "Jemima Madasi",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/Jemima-Madasi.jpg",
      },
      {
        name: "Nithish Kumar",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/Nitish.jpg",
      },
      {
        name: "Sai Manikanta Jakka",
        role: "Representative",
        imageUrl: "/placeholders/team/24-25/Saimanikanta.jpg",
      },
    ],
  },
  // Power and Energy Society
  {
    title: "Power and Energy Society",
    members: [
      {
        name: "Preetham",
        role: "Chairperson",
        imageUrl: "/placeholders/team/23-24/preetham.jpg",
      },
      {
        name: "Sai Nath",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/24-25/sainath.jpg",
      },
      {
        isLogo: true,
        name: "PES Logo",
        role: "PES",
        imageUrl: "/placeholders/pes_logo.png",
      },
      {
        name: "Chanikya",
        role: "Secretary",
        imageUrl: "/placeholders/team/24-25/chanikya.jpg",
      },
      {
        name: "Karthik",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/Karkala-karthik-Reddy.jpg",
      },
      {
        name: "Ice",
        role: "Representative",
        imageUrl: "/placeholders/team/23-24/ice.png",
      },
    ],
  },
  // Women in Engineering Affinity Group
  {
    title: "Women in Engineering Affinity Group",
    members: [
      {
        name: "Sanjana Goud",
        role: "Chairperson",
        imageUrl: "/placeholders/team/23-24/sanjana.jpg",
      },
      {
        name: "G. Nandini",
        role: "Vice Chairperson",
        imageUrl: "/placeholders/team/23-24/nandini.png",
      },
      {
        isLogo: true,
        name: "WIE Logo",
        role: "WIE",
        imageUrl: "/placeholders/wie_logo.png",
      },
      {
        name: "M. Varshika",
        role: "Secretary",
        imageUrl: "/placeholders/team/23-24/varshika.jpg",
      },
      {
        name: "K. Sai Kumar",
        role: "Treasurer",
        imageUrl: "/placeholders/team/24-25/Sai-Kumar.jpg",
      },
      {
        name: "Seetha Sumanjali",
        role: "Representative",
        imageUrl: "/placeholders/team/24-25/Sumanjali-Seetha-suma-02.jpg",
      },
    ],
  },
];
