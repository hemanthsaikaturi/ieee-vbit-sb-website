'use client';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-6 mb-6">
          {/* Facebook Icon */}
          <a href="https://www.facebook.com/ieeevbitsb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Facebook size={24} strokeWidth={1.5} />
          </a>
          {/* Instagram Icon */}
          <a href="https://www.instagram.com/ieeevbitsb/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Instagram size={24} strokeWidth={1.5} />
          </a>
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/company/ieee-vbit-sb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} strokeWidth={1.5} />
          </a>
          {/* WhatsApp Icon */}
          <a href="https://whatsapp.com/channel/0029Vb6F16ALdQekr3hPVz3D" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <SiWhatsapp size={24} />
          </a>
        </div>

        <p className="text-sm text-gray-400 mb-4">Designed and Developed by Web Designers | IEEE - VBIT SB</p>
        
        <div className="max-w-4xl mx-auto text-xs text-gray-500 space-y-2">
            <p>© Copyright 2025 IEEE – All rights reserved.</p>
            <p>A non profit Organisation, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.</p>
        </div>
      </div>
    </footer>
  );
};