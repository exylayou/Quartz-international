import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-background pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Phone size={14} />
              Get In Touch
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-text-primary uppercase">Contact Our Team</h1>
            <p className="text-xl text-text-muted leading-relaxed mb-12">
              Ready to start your kitchen transformation? Whether you have a question about pricing or want to schedule a visit, we are here to help.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-1">Call Us Directly</p>
                  <p className="text-xl font-bold text-text-primary">(905) 660-1100</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-full shadow-sm">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-1">Email Our Specialists</p>
                  <p className="text-xl font-bold text-text-primary">hello@auracabinetry.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-10 md:p-16 bg-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-10">Book a Consultation</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                  <input type="text" className="input-field" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Phone Number</label>
                  <input type="tel" className="input-field" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Email Address</label>
                <input type="email" className="input-field" placeholder="john@example.com" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">How can we help?</label>
                <textarea className="input-field min-h-[150px] pt-4" placeholder="Briefly describe your project..."></textarea>
              </div>
              <button className="btn-primary w-full h-16 text-lg group">
                Send My Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
