export type MembershipBanner = {
  imageUrl: string;
  altText: string;
  buttonText: string; 
  buttonLink: string;
};

export const membershipBanners: MembershipBanner[] = [
  {
    imageUrl: '/placeholders/student_membership_banner.jpg', // Make sure you have an image with this name
    altText: 'IEEE Student Membership Benefits',
    buttonText: 'BECOME A STUDENT MEMBER',
    buttonLink: '#', // <-- Replace with your student membership link
  },
  {
    imageUrl: '/placeholders/professional_membership_banner.jpg', // Make sure you have an image with this name
    altText: 'IEEE Professional Membership Benefits',
    buttonText: 'BECOME A PROFESSIONAL MEMBER',
    buttonLink: '#', // <-- Replace with your professional membership link
  },
];