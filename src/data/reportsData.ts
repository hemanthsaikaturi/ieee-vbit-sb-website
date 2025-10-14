// Define the structure for a single report
export type Report = {
  title: string;
  driveLink: string;
};

// Define the structure for a group of reports under a specific year
export type ReportYearGroup = {
  year: string;
  reports: Report[];
};

// Populate the data with all reports, organized by year
export const reportsData: ReportYearGroup[] = [
  {
    year: '2024 – 25',
    reports: [
      { title: 'DesignX 2.0', driveLink: '#' }, { title: 'IEEE Insights', driveLink: '#' },
      { title: 'WiEducate 3.0', driveLink: '#' }, { title: 'Industrial Visit To Power Grid', driveLink: '#' },
      { title: 'ALGOVEDA', driveLink: '#' }, { title: 'Workshop On Antenna Design Using HFSS', driveLink: '#' },
    ],
  },
  {
    year: '2023 – 24',
    reports: [
      { title: 'Elevate', driveLink: '#' }, { title: 'CodeQuest', driveLink: '#' },
      { title: 'Webinar on Design thinking', driveLink: '#' }, { title: 'WiEducate 2.0', driveLink: '#' },
      { title: 'Avishkar 2K24', driveLink: '#' }, { title: 'Workshop on image processing using Matlab', driveLink: '#' },
      { title: 'Circuitry', driveLink: '#' },
    ],
  },
  {
    year: '2022 – 23',
    reports: [
      { title: 'Workshop on .NET', driveLink: '#' }, { title: 'Avishkar 2K23', driveLink: '#' },
      { title: 'WiEducate', driveLink: '#' }, { title: 'Workshop on Neuro Robotics', driveLink: '#' },
      { title: 'Industrial visit to C-MET', driveLink: '#' },
    ],
  },
  {
    year: '2021 – 22',
    reports: [
      { title: 'C for Error', driveLink: '#' }, { title: 'Wi-Fi Controlled Robot', driveLink: '#' },
      { title: 'Machine Learning Workshop+Hackathon', driveLink: '#' }, { title: '#IWD2022', driveLink: '#' },
      { title: 'Workshop on Industry perspective of VLSI Design', driveLink: '#' }, { title: 'Workshop on DesignX', driveLink: '#' },
      { title: 'Avishkar 2K22', driveLink: '#' }, { title: 'Epilogue 2.0', driveLink: '#' },
    ],
  },
  {
    year: '2020 – 21',
    reports: [
      { title: 'Unravel', driveLink: '#' }, { title: 'IEEEXtreme 14.0', driveLink: '#' },
      { title: 'Surveykshana', driveLink: '#' }, { title: 'Webinar on Artificial Neural Network', driveLink: '#' },
      { title: 'Code Hustle 2.0', driveLink: '#' }, { title: 'Avishkar2k21', driveLink: '#' },
      { title: 'Epilogue', driveLink: '#' },
    ],
  },
  {
    year: '2019 – 20',
    reports: [
        { title: 'GitHub 101', driveLink: '#' }, { title: 'Xplore Webinar', driveLink: '#' },
        { title: 'Unplug', driveLink: '#' }, { title: '#IWD2020', driveLink: '#' },
        { title: 'SDP on Search Engine Optimisation', driveLink: '#' }, { title: 'Seminar on Bacterial Concrete', driveLink: '#' },
        { title: 'FDP & SDP on IEEE Xplore', driveLink: '#' }, { title: 'Industrial Visit to ICOMM', driveLink: '#' },
        { title: 'Guest Lecture on Hybrid Electric Vehicles', driveLink: '#' }, { title: 'Guest Lecture on Digital Pass Band Transmission', driveLink: '#' },
        { title: 'Industrial Visit to IMD', driveLink: '#' }, { title: 'Wireless Sensor Networks and Applications', driveLink: '#' },
        { title: 'Avishkar 2K20', driveLink: '#' },
    ],
  },
  {
    year: '2018 – 19',
    reports: [
        { title: 'Star Kid', driveLink: '#' }, { title: 'NCEET 19', driveLink: '#' },
        { title: 'Womens Day Celebrations', driveLink: '#' }, { title: 'Avishkar 2K19', driveLink: '#' },
        { title: 'Industrial Visit To CPRI', driveLink: '#' }, { title: 'Literagon', driveLink: '#' },
        { title: 'Appathon', driveLink: '#' }, { title: 'Inceptra', driveLink: '#' },
        { title: 'Industrial Visit To IMD', driveLink: '#' }, { title: 'Machine Learning Bootcamp And Hackathon', driveLink: '#' },
    ],
  },
  {
    year: '2017 – 18',
    reports: [
        { title: 'Industrial Visit to CPRI', driveLink: '#' }, { title: 'Star Kid', driveLink: '#' },
        { title: 'Techniethon', driveLink: '#' }, { title: 'Avishkar 2K18', driveLink: '#' },
        { title: 'Industrial Visit to BSNL', driveLink: '#' }, { title: 'Avishkar 2K18 Inter Round', driveLink: '#' },
        { title: 'Art Boats', driveLink: '#' },
    ],
  },
  {
    year: '2016 – 17',
    reports: [
        { title: 'Pre IEEE Xtreme (Codex)', driveLink: '#' }, { title: '3D Game Design', driveLink: '#' },
        { title: 'Tech with Arduino', driveLink: '#' }, { title: 'Industrial Visit', driveLink: '#' },
        { title: 'Star Kid', driveLink: '#' }, { title: 'TECHNICAL GABFEST', driveLink: '#' },
        { title: 'STAR - EDUCATE A GIRL CHILD', driveLink: '#' }, { title: 'Image Processing Workshop', driveLink: '#' },
        { title: 'Comsoc Colloquium', driveLink: '#' },
    ],
  },
  {
    year: '2015 – 16',
    reports: [
        { title: 'John Bardeen Memorial Report', driveLink: '#' }, { title: 'Avishkar2k16 Intra Report', driveLink: '#' },
        { title: 'STEP', driveLink: '#' }, { title: 'STAR - Lift The Children', driveLink: '#' },
        { title: '3D Printing', driveLink: '#' }, { title: 'Power colloquium 2k16', driveLink: '#' },
        { title: 'Industrial Visit - Comsoc', driveLink: '#' }, { title: 'Image Processing Workshop', driveLink: '#' },
        { title: 'Art Beat', driveLink: '#' }, { title: 'Alumini Meet', driveLink: '#' },
        { title: 'PALM', driveLink: '#' },
    ],
  },
  {
    year: '2014 – 15',
    reports: [
        { title: 'IDEATE Report', driveLink: '#' }, { title: 'Talk On Entrepreneurship', driveLink: '#' },
        { title: 'STP Report', driveLink: '#' }, { title: 'STAR program', driveLink: '#' },
        { title: 'Avishkar 2k15 Inter Round', driveLink: '#' }, { title: 'PES Report', driveLink: '#' },
        { title: 'Report on Computer Colloquium 15\'', driveLink: '#' }, { title: 'F&D', driveLink: '#' },
        { title: 'JB Day', driveLink: '#' }, { title: 'Avishkar 2k15 INTRA', driveLink: '#' },
        { title: 'John Bardeen Memorial', driveLink: '#' }, { title: 'Report on STAR Program', driveLink: '#' },
        { title: 'The Second IEEE Communication Colloquium', driveLink: '#' },
    ],
  },
  {
    year: '2013 – 14',
    reports: [
        { title: 'Data Networking Workshop', driveLink: '#' }, { title: 'Report on SCAP', driveLink: '#' },
        { title: 'CODEX', driveLink: '#' }, { title: 'EKAYANA', driveLink: '#' },
        { title: 'Eloquence', driveLink: '#' }, { title: 'Circuit Designing Competition', driveLink: '#' },
        { title: 'IEEE VBIT-SB ETDC Industrial Visit', driveLink: '#' }, { title: 'F&D', driveLink: '#' },
        { title: 'IEEE VBIT-SB STAR Program', driveLink: '#' }, { title: 'IEEE VBIT-SB STEP', driveLink: '#' },
    ],
  },
];