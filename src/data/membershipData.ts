export type MembershipBanner = {
  imageUrl: string;
  altText: string;
  buttonText: string; 
  buttonLink: string;
};

export const membershipBanners: MembershipBanner[] = [
  {
    imageUrl: '/placeholders/student_membership_banner.jpg', 
    altText: 'IEEE Student Membership Benefits',
    buttonText: 'BECOME A STUDENT MEMBER',
    buttonLink: 'https://forms.gle/o7JS3cKJzsZEuQfN8', 
  },
  {
    imageUrl: '/placeholders/professional_membership_banner.jpg', 
    altText: 'IEEE Professional Membership Benefits',
    buttonText: 'BECOME A PROFESSIONAL MEMBER',
    buttonLink: 'https://forms.gle/4E3Q2YwtyRHknHCEA',
  },
];