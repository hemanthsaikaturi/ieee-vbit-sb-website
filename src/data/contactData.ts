// Define the structure for a single contact person
export type ContactPerson = {
  name: string;
  role: string;
  email: string;
  imageUrl: string;
};

// Populate the data with the key contacts
export const contactData: ContactPerson[] = [
  {
    name: 'Dr. N. Arjun',
    role: 'Branch Counselor',
    email: 'arjun.nelikanti@vbit.ac.in',
    imageUrl: '/placeholders/team/dr_n_arjun.jpg', // Add this image
  },
  {
    name: 'Shiva Sai Nath Munavathu',
    role: 'ChairPerson',
    email: 'mr.shivanayak13@gmail.com',
    imageUrl: '/placeholders/team/shiva_sai_nath_munavathu.jpg', // Add this image
  },
  {
    name: 'Sai Deekshith Badam',
    role: 'GINI | MDO',
    email: 'badamdeekshith@gmail.com',
    imageUrl: '/placeholders/team/sai_deekshith_badam_contact.jpg', // Add this image
  },
];