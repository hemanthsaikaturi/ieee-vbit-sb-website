'use client'; 

import { useState } from 'react';
import { useEffect } from 'react';
import { ContactPersonCard } from '@/components/ContactPersonCard';
import { contactData } from '@/data/contactData';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { AnimateOnScroll } from '@/components/AnimateOnScroll';
import { FadeIn } from '@/components/FadeIn';
import { LazyMap } from '@/components/LazyMap';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  
  useEffect(() => {
    document.title = 'Contact Us | IEEE - VBIT SB';
  }, []);


  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7743792694455!2d78.7196795756745!3d17.470509692224454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb76ea23dfa8d5%3A0x72d3ea7f454e19ea!2sVignana%20Bharathi%20Institute%20of%20Technology%20(VBIT)%20%7C%20Top%20Engineering%20Colleges%20In%20Telangana!5e0!3m2!1sen!2sin!4v1760363263481!5m2!1sen!2sin";

  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus('submitting');
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        form.reset();
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus('error');
    }
  };

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
              
              <AnimatePresence mode="wait">
                {submissionStatus === 'success' ? (
                  <motion.div
                    key="thank-you"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="text-center py-10"
                  >
                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" strokeWidth={1.5} />
                    <h2 className="text-4xl font-bold text-gray-800">Thank You!</h2>
                    <p className="text-gray-600 mt-4 text-lg">
                      Your message has been sent successfully. We will get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold text-gray-800">Have a Query?</h2>
                      <p className="text-gray-600 mt-2">Fill out the form below and we will get back to you as soon as possible.</p>
                    </div>
                    
                    <form 
                      action="https://queryviewer.ieeevbitsb.in/api/contact.php" 
                      method="POST" 
                      className="space-y-6" 
                      onSubmit={handleSubmit}
                    >
                      <input type="text" name="honeypot" style={{ display: 'none' }} />

                      <div><label htmlFor="name" className="sr-only">Full Name</label><input type="text" name="name" id="name" required className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full Name" /></div>
                      <div><label htmlFor="email" className="sr-only">Email Address</label><input type="email" name="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email Address" /></div>
                      <div><label htmlFor="phone" className="sr-only">Phone Number</label><input type="tel" name="phone" id="phone" className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Phone Number (Optional)" /></div>
                      <div><label htmlFor="message" className="sr-only">Message</label><textarea name="message" id="message" rows={5} required className="w-full px-4 py-3 rounded-lg bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea></div>
                      
                      {submissionStatus === 'error' && (
                          <p className="text-red-600 text-center">Sorry, there was an error. Please try again.</p>
                      )}

                      <div className="text-center pt-4">
                        <button 
                          type="submit" 
                          className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-500 transition-colors disabled:bg-gray-400"
                          disabled={submissionStatus === 'submitting'}
                        >
                          <span className="w-6 h-6 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                              {submissionStatus === 'submitting' ? (
                                <motion.div key="loader" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
                                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                </motion.div>
                              ) : (
                                <motion.div key="icon" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                                  <Send size={18} /> 
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </span>
                          <span>{submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </section>
      </AnimateOnScroll>

      <AnimateOnScroll>
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-8 sm:px-12 lg:px-16 text-center">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-white">Our Location</h2>
              <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                Find us at Vignana Bharathi Institute of Technology, Aushapur, Ghatkesar, for your inquiries and collaborations.
              </p>
            </div>
            <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-gray-700">
              <div className="w-full h-[450px]">
                <LazyMap src={mapSrc} />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
}