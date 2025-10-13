'use client'; 
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react'; 

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-6 mb-6">
          <a href="https://www.facebook.com/ieeevbitsb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/ieeevbitsb/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://www.linkedin.com/company/ieee-vbit-sb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          
          <a href="https://whatsapp.com/channel/0029Vb6F16ALdQekr3hPVz3D" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.11 4.93A9.85 9.85 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.52 3.48 1.46 4.91L2.06 22l5.33-1.52c1.37.81 2.92 1.28 4.56 1.28h.01c5.46 0 9.9-4.43 9.91-9.91a9.85 9.85 0 0 0-2.76-7.01zM12.04 20.12c-1.48 0-2.88-.38-4.11-1.05l-.29-.17-3.07.88.89-3-.19-.31a7.92 7.92 0 0 1-1.18-4.36c0-4.39 3.57-7.95 7.96-7.95a7.92 7.92 0 0 1 7.96 7.95c-.01 4.38-3.57 7.95-7.95 7.95zm3.78-6.11c-.24-.12-1.42-.7-1.65-.78s-.39-.12-.56.12c-.17.24-.62.78-.76.93s-.28.17-.52.06c-.24-.11-.99-.36-1.89-1.15s-1.47-1.32-1.61-1.55-.05-.36.06-.48c.11-.11.24-.28.36-.42s.16-.24.24-.4c.08-.16.04-.3-.02-.42s-.56-1.34-.76-1.84c-.2-.48-.4-.42-.56-.42s-.33 0-.5 0c-.17 0-.43.06-.65.31s-.86.85-.86 2.07c0 1.22.88 2.4 1 2.56s1.74 2.63 4.22 3.72c.59.26 1.05.41 1.41.52.59.17 1.13.15 1.56.09.48-.06 1.42-.58 1.62-1.15s.2-1.06.14-1.22c-.06-.15-.23-.24-.49-.36z"
              />
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-400 mb-4">Designed and Developed by Web Designer | IEEE - VBIT SB</p>
        
        <div className="max-w-4xl mx-auto text-xs text-gray-500 space-y-2">
            <p>© Copyright 2025 IEEE – All rights reserved.</p>
            <p>A non profit Organisation, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
        </div>
      </div>
    </footer>
  );
};