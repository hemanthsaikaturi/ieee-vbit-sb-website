// Define the structure for a single achievement, now with an image
export type Achievement = {
  year: string;
  title: string;
  description: string;
  imageUrl: string; // <-- ADDED
};

// Populate the data with all achievements and their image paths
export const achievementsData: Achievement[] = [
  { year: '2024', title: 'IEEE Young Professionals STEP Funding', description: 'Young Professionals – Affinity Group.', imageUrl: '/placeholders/achievements/yp-step-funding-2024.jpg' },
  { year: '2024', title: 'IEEE Pre-University STEM Portal Grant Program 2024', description: 'Awarded for showing great creativity and innovation in STEM outreach through our event “WiEducate 2.0”, organized under WIE Affinity Group of IEEE – VBIT SB.', imageUrl: '/placeholders/achievements/stem-portal-grant-2024.jpg' },
  { year: '2019', title: 'IEEE Member and Geographic Activities Young Professional Achievement Award', description: 'Mr. Vamsi Krishna Jadala received IEEE Member and Geographic Activities Young Professional Achievement Award” in the year 2019.', imageUrl: '/placeholders/achievements/yp-achievement-award-2019.jpg' },
  { year: '2019', title: 'Upsilon - Pi - Epsilon', description: 'Ms. Rashmita Varma of CSE department has won ‘Upsilon Pi Epsilon’ award in the year 2019.', imageUrl: '/placeholders/achievements/upe-award-2019.jpg' },
  { year: '2017', title: 'IEEE R10 Website Contest', description: '2nd Position in “IEEE R10 Website Contest” for the year 2017.', imageUrl: '/placeholders/achievements/r10-website-contest-2017.jpg' },
  { year: '2016', title: 'Upsilon - Pi - Epsilon', description: 'Mr. Yashwanth Siripragada of CSE department has won ‘Upsilon Pi Epsilon’ award in the year 2016.', imageUrl: '/placeholders/achievements/upe-award-2016.jpg' },
  { year: '2015', title: 'Richard E. Merwin Student Scholarship Award', description: 'Ms. Akshita Gulati of IT Department received “Richard E Merwin Student Scholarship Award” in the year 2015.', imageUrl: '/placeholders/achievements/merwin-scholarship-2015.jpg' },
  { year: '2014 – 15', title: 'IEEE Exemplary Student Branch Award', description: 'Received “IEEE Regional Exemplary Student Branch Award” for the year 2014 – 15.', imageUrl: '/placeholders/achievements/exemplary-sb-award-2014.jpg' },
  { year: '2015', title: 'WIE Student Branch Affinity Group of the Year Award', description: 'WIE – AG, IEEE – VBIT SB won “The 2015 WIE Student Branch Affinity Group of the year award.', imageUrl: '/placeholders/achievements/wie-ag-award-2015.jpg' },
  { year: '2013', title: 'Richard E. Merwin Student Scholarship Award', description: 'Mr. karthik siddawaram received “Richard E Merwin Student Scholarship Award” in the year 2013.', imageUrl: '/placeholders/achievements/merwin-scholarship-2013.jpg' },
  { year: '2011', title: 'Darrel Chong Gold Student Activity Award', description: 'Received Darrel Chong Gold Student Activity Award” for the year 2011.', imageUrl: '/placeholders/achievements/darrel-chong-award-2011.jpg' },
  { year: '2010', title: 'Richard E. Merwin Student Scholarship Award', description: 'Mr. Chaitanya Kumar Setty received “Richard E Merwin Student Scholarship Award” in the year 2010.', imageUrl: '/placeholders/achievements/merwin-scholarship-2010.jpg' },
  { year: '2013', title: 'Larry K. Wilson Student Activities Award', description: 'Mr. Karthik Siddawaram received Larry K. Wilson Student Activities Award” in the year 2013.', imageUrl: '/placeholders/achievements/larry-wilson-award-2013.jpg' },
  { year: '2009 – 10', title: 'IEEE Vibrant Student Branch Award', description: 'Received “IEEE Vibrant Student Branch Award” for the year 2009 – 10.', imageUrl: '/placeholders/achievements/vibrant-sb-award-2009.jpg' },
];