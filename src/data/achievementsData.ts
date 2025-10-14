// Define the structure for a single achievement, now with an image
export type Achievement = {
  year: string;
  title: string;
  description: string;
  imageUrl: string; // <-- ADDED
};

// Populate the data with all achievements and their image paths
export const achievementsData: Achievement[] = [
  { year: '2024', title: 'IEEE Young Professionals STEP Funding', description: 'Young Professionals – Affinity Group.', imageUrl: '/placeholders/achievements/IEEE Young Professionals STEP Funding.png' },
  { year: '2024', title: 'IEEE Pre-University STEM Portal Grant Program 2024', description: 'Awarded for showing great creativity and innovation in STEM outreach through our event “WiEducate 2.0”, organized under WIE Affinity Group of IEEE – VBIT SB.', imageUrl: '/placeholders/achievements/IEEE Pre-University STEM Portal Grant Program 2024.png' },
  { year: '2019', title: 'IEEE Member and Geographic Activities Young Professional Achievement Award', description: 'Mr. Vamsi Krishna Jadala received IEEE Member and Geographic Activities Young Professional Achievement Award” in the year 2019.', imageUrl: '/placeholders/achievements/IEEE Member and Geographic Activities Young Professional Achievement Award.png' },
  { year: '2019', title: 'Upsilon - Pi - Epsilon', description: 'Ms. Rashmita Varma of CSE department has won ‘Upsilon Pi Epsilon’ award in the year 2019.', imageUrl: '/placeholders/achievements/Upsilon - Pi - Epsilon-rashmitha.png' },
  { year: '2017', title: 'IEEE R10 Website Contest', description: '2nd Position in “IEEE R10 Website Contest” for the year 2017.', imageUrl: '/placeholders/achievements/IEEE R10 Website Contest.png' },
  { year: '2016', title: 'Upsilon - Pi - Epsilon', description: 'Mr. Yashwanth Siripragada of CSE department has won ‘Upsilon Pi Epsilon’ award in the year 2016.', imageUrl: '/placeholders/achievements/Upsilon - Pi - Epsilon.png' },
  { year: '2015', title: 'Richard E. Merwin Student Scholarship Award', description: 'Ms. Akshita Gulati of IT Department received “Richard E Merwin Student Scholarship Award” in the year 2015.', imageUrl: '/placeholders/achievements/Richard E - Merwin Student Scholarship Award-akshita.png' },
  { year: '2014 – 15', title: 'IEEE Exemplary Student Branch Award', description: 'Received “IEEE Regional Exemplary Student Branch Award” for the year 2014 – 15.', imageUrl: '/placeholders/achievements/IEEE Exemplary Student Branch Award.png' },
  { year: '2015', title: 'WIE Student Branch Affinity Group of the Year Award', description: 'WIE – AG, IEEE – VBIT SB won “The 2015 WIE Student Branch Affinity Group of the year award.', imageUrl: '/placeholders/achievements/WIE Student Branch Affinity Group of the Year Award.png' },
  { year: '2013', title: 'Richard E. Merwin Student Scholarship Award', description: 'Mr. karthik siddawaram received “Richard E Merwin Student Scholarship Award” in the year 2013.', imageUrl: '/placeholders/achievements/Richard E - Merwin Student Scholarship Award-karthik.png' },
  { year: '2011', title: 'Darrel Chong Gold Student Activity Award', description: 'Received Darrel Chong Gold Student Activity Award” for the year 2011.', imageUrl: '/placeholders/achievements/Darrel Chong Gold Student Activity Award.png' },
  { year: '2010', title: 'Richard E. Merwin Student Scholarship Award', description: 'Mr. Chaitanya Kumar Setty received “Richard E Merwin Student Scholarship Award” in the year 2010.', imageUrl: '/placeholders/achievements/Richard E - Merwin Student Scholarship Award-Chaitanya.png' },
  { year: '2013', title: 'Larry K. Wilson Student Activities Award', description: 'Mr. Karthik Siddawaram received Larry K. Wilson Student Activities Award” in the year 2013.', imageUrl: '/placeholders/achievements/Larry K. Wilson Student Activities Award.png' },
  { year: '2009 – 10', title: 'IEEE Vibrant Student Branch Award', description: 'Received “IEEE Vibrant Student Branch Award” for the year 2009 – 10.', imageUrl: '/placeholders/achievements/IEEE Vibrant Student Branch Award.png' },
];