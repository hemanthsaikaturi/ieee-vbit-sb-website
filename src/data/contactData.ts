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
    imageUrl: '/placeholders/Contact/dr_n_arjun.jpg',
  },
  {
    name: 'Shiva Sai Nath Munavathu',
    role: 'Chairperson',
    email: 'mr.shivanayak13@gmail.com',
    imageUrl: '/placeholders/team/25-26/shiva_sai_nath.png',
  },
  {
    name: 'Sai Deekshith Badam',
    role: 'GINI | MDO',
    email: 'badamdeekshith@gmail.com',
    imageUrl: '/placeholders/Contact/sai_deekshith.png',
  },
];