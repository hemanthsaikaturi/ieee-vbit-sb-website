import { ContactPersonCard } from '@/components/ContactPersonCard';
import { contactData } from '@/data/contactData';
import { Mail, MapPin, Send } from 'lucide-react';
import type { Metadata } from 'next';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { FadeIn } from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div>
      <FadeIn>
        <section className="bg-gradient-to-r from-cyan-500 to-blue-600 py-10">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {contactData.map((person) => (
                <ContactPersonCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <AnimateOnScroll>
        <section className="py-20 pattern-background-light">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md text-center relative overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500"></div>
                <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">ieeevbitsbdoc@gmail.com</p>
                <a href="mailto:ieeevbitsbdoc@gmail.com" className="mt-6 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-500 transition-colors">MAIL US</a>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md text-center relative overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500"></div>
                <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">Aushapur, Ghatkesar, Medchal</p>
                <a href="https://goo.gl/maps/D12k5k821HoZ8xBe9" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-500 transition-colors">LOCATE US</a>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-30 -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200 rounded-full opacity-30 translate-x-20 translate-y-20"></div>
          <div className="container mx-auto px-8 sm:px-12 lg:px-16 max-w-3xl relative z-10">
            <div className="bg-white/70 backdrop-blur-xl rounded-xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Have a Query?</h2>
                <p className="text-gray-600 mt-2">Fill out the form below and we will get back to you as soon as possible.</p>
              </div>
              <form action="https://formspree.io/f/YOUR_UNIQUE_ID" method="POST" className="space-y-6">
                <input type="hidden" name="_next" value="https://ieee-vbit-sb.vercel.app/thank-you" />
                <div><label htmlFor="name" className="sr-only">Full Name</label><input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" /></div>
                <div><label htmlFor="email" className="sr-only">Email Address</label><input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" /></div>
                <div><label htmlFor="phone" className="sr-only">Phone Number</label><input type="tel" name="phone" id="phone" className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone Number (Optional)" /></div>
                <div><label htmlFor="message" className="sr-only">Message</label><textarea name="message" id="message" rows={5} required className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea></div>
                <div className="text-center pt-4"><button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-500 transition-colors"><Send size={18} /> Send Message</button></div>
              </form>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white">Our Location</h2>
            </div>
            <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-[450px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7743792694455!2d78.7196795756745!3d17.470509692224454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76ea23dfa8d5%3A0x72d3ea7f454e19ea!2sVignana%20Bharathi%20Institute%20of%20Technology%20(VBIT)%20%7C%20Top%20Engineering%20Colleges%20In%20Telangana!5e0!3m2!1sen!2sin!4v1760363263481!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}