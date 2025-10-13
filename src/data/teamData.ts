// Define the structure for a single team member
export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  isLogo?: boolean;
};

// Define the structure for a team section (e.g., "Main ExeCom")
export type Team = {
  title: string;
  members: TeamMember[];
};

// --- DATA FOR THE 2025-2026 TEAM ---
export const teamData2025_26: Team[] = [
  {
    title: 'Main Executive Committee',
    members: [
      { name: 'Shiva Sai Nath', role: 'Chairperson', imageUrl: '/placeholders/team/25-26/shiva_sai_nath.jpg' },
      { name: 'Yasmeen Mohammed', role: 'Vice Chairperson', imageUrl: '/placeholders/team/25-26/yasmeen_mohammed.jpg' },
      { name: 'Akshay', role: 'Secretary', imageUrl: '/placeholders/team/25-26/akshay.jpg' },
      { name: 'G. Akhil', role: 'Treasurer', imageUrl: '/placeholders/team/25-26/g_akhil.jpg' },
      { name: 'Sai Deekshith Badam', role: 'GINI & MDO', imageUrl: '/placeholders/team/25-26/sai_deekshith_badam.jpg' },
      { name: 'B. Chitti Sujana', role: 'Design Lead', imageUrl: '/placeholders/team/25-26/b_chitti_sujana.jpg' },
      { name: 'K. Isaac', role: 'Resource & Skill Management Lead', imageUrl: '/placeholders/team/25-26/k_isaac.jpg' },
      { name: 'Hemanth Sai Katuri', role: 'Web Master', imageUrl: '/placeholders/team/25-26/hemanth_sai_katuri.jpg' },
      { name: 'Khushi', role: 'Research & Development Lead', imageUrl: '/placeholders/team/25-26/khushi.jpg' },
    ],
  },
  { title: 'Membership Development Team', members: [ { name: 'Anirudh Pradhan', role: 'Member', imageUrl: '/placeholders/team/25-26/anirudh_pradhan.jpg' }, { name: 'Shweta Kumari Pandey', role: 'Member', imageUrl: '/placeholders/team/25-26/shweta_kumari_pandey.jpg' } ]},
  { title: 'Research & Development Team', members: [ { name: 'Thanmayee', role: 'Member', imageUrl: '/placeholders/team/25-26/thanmayee.jpg' }, { name: 'N. Bhanu Prakash Reddy', role: 'Member', imageUrl: '/placeholders/team/25-26/n_bhanu_prakash_reddy.jpg' }, { name: 'J. Gayathri', role: 'Member', imageUrl: '/placeholders/team/25-26/j_gayathri.jpg' } ]},
  { title: 'Design Team', members: [ { name: 'Chiluka Deepa', role: 'Graphic Designer', imageUrl: '/placeholders/team/25-26/chiluka_deepa.jpg' }, { name: 'Akhil', role: 'Graphic Designer', imageUrl: '/placeholders/team/25-26/akhil.jpg' }, { name: 'N. Sai Bharati', role: 'Graphic Designer', imageUrl: '/placeholders/team/25-26/n_sai_bharati.jpg' }, { name: 'Sriram', role: 'Web Designer', imageUrl: '/placeholders/team/25-26/sriram.jpg' }, { name: 'Gayathri Gurram', role: 'Web Designer', imageUrl: '/placeholders/team/25-26/gayathri_gurram.jpg' } ]},
  { title: 'Resource & Skill Management Team', members: [ { name: 'D. Karthikeya', role: 'Member', imageUrl: '/placeholders/team/25-26/d_karthikeya.jpg' }, { name: 'Nara Pranay', role: 'Member', imageUrl: '/placeholders/team/25-26/nara_pranay.jpg' }, { name: 'Kotha Mounika', role: 'Member', imageUrl: '/placeholders/team/25-26/kotha_mounika.jpg' }, { name: 'Shravani Jakka', role: 'Member', imageUrl: '/placeholders/team/25-26/shravani_jakka.jpg' } ]},
  { title: 'Computer Society', members: [ { name: 'D. Karthikeya', role: 'Chairperson', imageUrl: '/placeholders/team/25-26/d_karthikeya_cs.jpg' }, { name: 'Akshit Chauhan Paitlya', role: 'Vice Chairperson', imageUrl: '/placeholders/team/25-26/akshit_chauhan.jpg' }, { name: 'K. Geetha Bhagyasree', role: 'Secretary', imageUrl: '/placeholders/team/25-26/k_geetha_bhagyasree.jpg' } ]},
  { title: 'Communications Society', members: [ { name: 'Nara Pranay', role: 'Chairperson', imageUrl: '/placeholders/team/25-26/nara_pranay_comsoc.jpg' }, { name: 'Sunidhi Bolleddu', role: 'Vice Chairperson', imageUrl: '/placeholders/team/25-26/sunidhi_bolleddu.jpg' }, { name: 'G. Ruth', role: 'Secretary', imageUrl: '/placeholders/team/25-26/g_ruth.jpg' } ]},
  { title: 'Power and Energy Society', members: [ { name: 'Kotha Mounika', role: 'Chairperson', imageUrl: '/placeholders/team/25-26/kotha_mounika_pes.jpg' }, { name: 'Gujjari Swarnamai', role: 'Vice Chairperson', imageUrl: '/placeholders/team/25-26/gujjari_swarnamai.jpg' }, { name: 'Roshan Jaisimha', role: 'Secretary', imageUrl: '/placeholders/team/25-26/roshan_jaisimha.jpg' } ]},
  { title: 'Women in Engineering Affinity Group', members: [ { name: 'Shravani Jakka', role: 'Chairperson', imageUrl: '/placeholders/team/25-26/shravani_jakka_wie.jpg' }, { name: 'Shreshta', role: 'Vice Chairperson', imageUrl: '/placeholders/team/25-26/shreshta.jpg' }, { name: 'Harshada', role: 'Secretary', imageUrl: '/placeholders/team/25-26/harshada.jpg' } ]},
];

// --- DATA FOR THE 2024-2025 TEAM ---
export const teamData2024_25: Team[] = [
  {
    title: 'Main Executive Committee',
    members: [
      { name: 'Jemima Madasi', role: 'Chairperson', imageUrl: '/placeholders/team/24-25/jemima_madasi.jpg' },
      { name: 'J. Sri Charan Reddy', role: 'Vice Chairperson', imageUrl: '/placeholders/team/24-25/j_sri_charan_reddy.jpg' },
      { name: 'P. Chanikya', role: 'Secretary', imageUrl: '/placeholders/team/24-25/p_chanikya.jpg' },
      { name: 'K. Karthik Reddy', role: 'Treasurer', imageUrl: '/placeholders/team/24-25/k_karthik_reddy.jpg' },
      { name: 'Tappa Rohith', role: 'GINI & MDO', imageUrl: '/placeholders/team/24-25/tappa_rohith.jpg' },
      { name: 'J. Srinidhi', role: 'Public Relations Officer', imageUrl: '/placeholders/team/24-25/j_srinidhi.jpg' },
      { name: 'P. Siva Teja', role: 'Design Lead', imageUrl: '/placeholders/team/24-25/p_siva_teja.jpg' },
      { name: 'Venkat Ramana', role: 'Resource & Skill Management Lead', imageUrl: '/placeholders/team/24-25/venkat_ramana.jpg' },
      { name: 'K. Sai Ganesh', role: 'Web Master', imageUrl: '/placeholders/team/24-25/k_sai_ganesh.jpg' },
    ],
  },
  { title: 'Membership Development Team', members: [ { name: 'Sai Deekshith Badam', role: 'Member', imageUrl: '/placeholders/team/24-25/sai_deekshith_badam.jpg' }, { name: 'Aditi', role: 'Member', imageUrl: '/placeholders/team/24-25/aditi.jpg' } ]},
  { title: 'Research & Development Team', members: [ { name: 'K. Sai Kumar', role: 'Lead', imageUrl: '/placeholders/team/24-25/k_sai_kumar.jpg' }, { name: 'Sanjana Gupta Maheepathy', role: 'Co-lead', imageUrl: '/placeholders/team/24-25/sanjana_gupta.jpg' }, { name: 'Sachin Gupta', role: 'Co-ordinator', imageUrl: '/placeholders/team/24-25/sachin_gupta.jpg' } ]},
  { title: 'Computer Society', members: [ { name: 'Mugala Shravya', role: 'Chairperson', imageUrl: '/placeholders/team/24-25/mugala_shravya.jpg' }, { name: 'Shiva Sai Nath', role: 'Vice Chairperson', imageUrl: '/placeholders/team/24-25/shiva_sai_nath.jpg' }, { name: 'Khushi', role: 'Secretary', imageUrl: '/placeholders/team/24-25/khushi.jpg' } ]},
];

// --- DATA FOR THE 2023-2024 TEAM ---
export const teamData2023_24: Team[] = [
    {
        title: 'Main Executive Committee',
        members: [
          { name: 'Mohammad Abdul Basith', role: 'Chairperson', imageUrl: '/placeholders/team/23-24/mohammad_abdul_basith.jpg' },
          { name: 'Ch. Sathvika', role: 'Vice Chairperson', imageUrl: '/placeholders/team/23-24/ch_sathvika.jpg' },
          { name: 'D. Manoghna', role: 'Secretary', imageUrl: '/placeholders/team/23-24/d_manoghna.jpg' },
          { name: 'G. SaiKumar', role: 'Treasurer', imageUrl: '/placeholders/team/23-24/g_saikumar.jpg' },
          { name: 'Raghu karredla', role: 'GINI & MDO', imageUrl: '/placeholders/team/23-24/raghu_karredla.jpg' },
          { name: 'Pritesh Agarwal', role: 'Public Relations Officer', imageUrl: '/placeholders/team/23-24/pritesh_agarwal.jpg' },
          { name: 'T P Varsha Rani', role: 'Design Lead', imageUrl: '/placeholders/team/23-24/tp_varsha_rani.jpg' },
          { name: 'Pawan Sai', role: 'Resource & Skill Management Lead', imageUrl: '/placeholders/team/23-24/pawan_sai.jpg' },
          { name: 'Sravanth Simhadri', role: 'Web Master', imageUrl: '/placeholders/team/23-24/sravanth_simhadri.jpg' },
        ],
    },
    { title: 'Membership Development Team', members: [ { name: 'Varshith', role: 'Member', imageUrl: '/placeholders/team/23-24/varshith.jpg' }, { name: 'Tappa Rohith', role: 'Member', imageUrl: '/placeholders/team/23-24/tappa_rohith.jpg' } ]},
    { title: 'Projects & Innovations Team', members: [ { name: 'Kannuru Aditya', role: 'Lead', imageUrl: '/placeholders/team/23-24/kannuru_aditya.jpg' }, { name: 'Pratham Kamidiri', role: 'Co-Lead', imageUrl: '/placeholders/team/23-24/pratham_kamidiri.jpg' }, { name: 'J. Srinidhi', role: 'Co-ordinator', imageUrl: '/placeholders/team/23-24/j_srinidhi.jpg' }, { name: 'Sanjana Gupta Maheepathy', role: 'Co-ordinator', imageUrl: '/placeholders/team/23-24/sanjana_gupta.jpg' } ]},
    { title: 'Design Team', members: [ { name: 'K. Akash', role: 'Digital Media Manager', imageUrl: '/placeholders/team/23-24/k_akash_design.jpg' }, { name: 'Tharun Reddy', role: 'Graphic Designer', imageUrl: '/placeholders/team/23-24/tharun_reddy.jpg' }, { name: 'Siva Teja', role: 'Graphic Designer', imageUrl: '/placeholders/team/23-24/siva_teja.jpg' }, { name: 'K. Prajwal', role: 'Graphic Designer', imageUrl: '/placeholders/team/23-24/k_prajwal.jpg' }, { name: 'K. Ganesh', role: 'Web Designer', imageUrl: '/placeholders/team/23-24/k_ganesh.jpg' }, { name: 'M. Shravya', role: 'Web Designer', imageUrl: '/placeholders/team/23-24/m_shravya.jpg' } ]},
    { title: 'Resource & Skill Management Team', members: [ { name: 'K. Akash', role: 'Member', imageUrl: '/placeholders/team/23-24/k_akash_rsm.jpg' }, { name: 'Sanjana Goud', role: 'Member', imageUrl: '/placeholders/team/23-24/sanjana_goud.jpg' }, { name: 'Bollapally Charan Goud', role: 'Member', imageUrl: '/placeholders/team/23-24/bollapally_charan_goud.jpg' }, { name: 'Vungarala Chaitanya Kumar', role: 'Member', imageUrl: '/placeholders/team/23-24/vungarala_chaitanya.jpg' }, { name: 'Siddarth Rajput', role: 'Member', imageUrl: '/placeholders/team/23-24/siddarth_rajput.jpg' } ]},
    { title: 'Computer Society', members: [ { name: 'Sindhuja Lakkapally', role: 'Chairperson', imageUrl: '/placeholders/team/23-24/sindhuja_lakkapally_cs.jpg' }, { name: 'Surya Teja Thodupunuri', role: 'Vice Chairperson', imageUrl: '/placeholders/team/23-24/surya_teja_cs.jpg' }, { name: 'Venkata Ramana Panigrahi', role: 'Secretary', imageUrl: '/placeholders/team/23-24/venkata_ramana.jpg' }, { name: 'J. Sri Charan Reddy', role: 'Treasurer', imageUrl: '/placeholders/team/23-24/j_sri_charan_reddy_cs.jpg' }, { name: 'Ruchira Erra', role: 'Representative', imageUrl: '/placeholders/team/23-24/ruchira_erra.jpg' } ]},
    { title: 'Communications Society', members: [ { name: 'Bollapally Charan Goud', role: 'Chairperson', imageUrl: '/placeholders/team/23-24/bollapally_charan_goud_comsoc.jpg' }, { name: 'Sripathi Nihanth Reddy', role: 'Vice Chairperson', imageUrl: '/placeholders/team/23-24/sripathi_nihanth_reddy.jpg' }, { name: 'Jemima Madasi', role: 'Secretary', imageUrl: '/placeholders/team/23-24/jemima_madasi.jpg' }, { name: 'Nithish Kumar', role: 'Treasurer', imageUrl: '/placeholders/team/23-24/nithish_kumar.jpg' }, { name: 'Sai Manikanta Jakka', role: 'Representative', imageUrl: '/placeholders/team/23-24/sai_manikanta_jakka.jpg' } ]},
    { title: 'Power and Energy Society', members: [ { name: 'Preetham', role: 'Chairperson', imageUrl: '/placeholders/team/23-24/preetham.jpg' }, { name: 'Sai Nath', role: 'Vice Chairperson', imageUrl: '/placeholders/team/23-24/sai_nath.jpg' }, { name: 'Chanikya', role: 'Secretary', imageUrl: '/placeholders/team/23-24/chanikya.jpg' }, { name: 'Karthik', role: 'Treasurer', imageUrl: '/placeholders/team/23-24/karthik.jpg' }, { name: 'Ish', role: 'Representative', imageUrl: '/placeholders/team/23-24/ish.jpg' } ]},
    { title: 'Women in Engineering Affinity Group', members: [ { name: 'Sanjana Goud', role: 'Chairperson', imageUrl: '/placeholders/team/23-24/sanjana_goud_wie.jpg' }, { name: 'G. Nandini', role: 'Vice Chairperson', imageUrl: '/placeholders/team/23-24/g_nandini.jpg' }, { name: 'M. Varshika', role: 'Secretary', imageUrl: '/placeholders/team/23-24/m_varshika.jpg' }, { name: 'K. Sai Kumar', role: 'Treasurer', imageUrl: '/placeholders/team/23-24/k_sai_kumar_wie.jpg' }, { name: 'Seetha Sumanjali', role: 'Representative', imageUrl: '/placeholders/team/23-24/seetha_sumanjali.jpg' } ]},
];