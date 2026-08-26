import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2, Terminal, Clock, Shield } from 'lucide-react';
import { TiltCard3D } from '../components/TiltCard3D';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    country: 'India (+91)',
    service: 'Website Development',
    budget: '₹15,000 – ₹35,000',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact InboxCrew',
    description: 'Get in touch with InboxCrew for website development, customer support, and branding consultations.',
    url: 'https://inboxcrew.in/contact',
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white font-mono select-none pt-28 pb-20 overflow-hidden">
      <SEOHead
        title="Contact Us & Book a Consultation — InboxCrew"
        description="Connect with the InboxCrew team via phone (+91 8534040174), WhatsApp, email (info@inboxcrew.in), or project intake form. Fast 2-hour response time."
        canonicalPath="/contact"
        schema={contactSchema}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-500/40 text-[11px] tracking-widest text-blue-400 uppercase mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span>DIRECT INTAKE PORTAL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase mb-6 font-sans">
            START YOUR PROJECT.
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Have a website, branding, or customer support requirement? Reach out directly via our intake form, WhatsApp desk, or call our executive line.
          </p>
        </div>

        {/* Dual Column: Left Form, Right Contact Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left 7 Cols: Project Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-blue-500/30 bg-zinc-950/90 shadow-[0_0_50px_rgba(0,102,255,0.2)]">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase font-sans mb-3">
                    TRANSMISSION RECEIVED
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mb-8 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our senior technical consultant will review your brief and contact you within 2 hours.
                  </p>
                  <a
                    href={`https://wa.me/918534040174?text=Hello%20InboxCrew!%20I%20just%20submitted%20a%20project%20inquiry%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Fast-Track via WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5 uppercase font-bold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-blue-500/30 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5 uppercase font-bold">Business Name</label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Acme Corp / Brand"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-blue-500/30 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5 uppercase font-bold">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-blue-500/30 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5 uppercase font-bold">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-blue-500/30 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5 uppercase font-bold">Service Required</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-blue-500/30 text-white text-xs focus:outline-none focus:border-blue-400 font-mono cursor-pointer"
                      >
                        <option value="Website Development">Website Development (₹6k – ₹25k / $69 – $299)</option>
                        <option value="E-Commerce Development">E-Commerce Store (₹25,000 / $299)</option>
                        <option value="Customer Support Outsourcing">Customer Support (Starting $249/mo)</option>
                        <option value="Instagram Growth & Reels">Instagram Management & Growth</option>
                        <option value="Digital Growth All-In-One">All-in-One Growth Bundle (₹35,000)</option>
                        <option value="Branding & Logo Design">Branding & Logo Design</option>
                        <option value="Content & Business Shoots">Content Creation & Business Shoots</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-zinc-400 mb-1.5 uppercase font-bold">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black border border-blue-500/30 text-white text-xs focus:outline-none focus:border-blue-400 font-mono cursor-pointer"
                      >
                        <option value="₹6,000 – ₹15,000">₹6,000 – ₹15,000 (Starter)</option>
                        <option value="₹15,000 – ₹35,000">₹15,000 – ₹35,000 (Professional / Bundle)</option>
                        <option value="₹35,000 – ₹1,00,000+">₹35,000 – ₹1,00,000+ (Scaleup)</option>
                        <option value="$249 – $899 / mo">$249 – $899 / mo (Customer Support)</option>
                        <option value="$1,000+ / mo">$1,000+ / mo (Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-400 mb-1.5 uppercase font-bold">Project Details / Goals</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand, timeline, or key objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-blue-500/30 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(0,102,255,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Project Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right 5 Cols: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Box */}
            <div className="p-6 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-400 uppercase">INSTANT CHAT</div>
                  <div className="text-lg font-bold text-white font-sans">WHATSAPP DESK</div>
                </div>
              </div>
              <p className="text-xs text-zinc-300 mb-4">
                Chat directly with our solutions lead for rapid estimates and immediate support.
              </p>
              <a
                href="https://wa.me/918534040174"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider text-center block transition-all shadow-md"
              >
                Open WhatsApp (+91 8534040174)
              </a>
            </div>

            {/* Direct Phone & Email */}
            <div className="p-6 rounded-2xl border border-blue-500/30 bg-zinc-950/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase">DIRECT PHONE</div>
                  <a href="tel:+918534040174" className="text-sm font-bold text-white hover:text-blue-400">
                    +91 8534040174
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-blue-500/20 pt-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase">OFFICIAL EMAIL</div>
                  <a href="mailto:info@inboxcrew.in" className="text-sm font-bold text-white hover:text-blue-400">
                    info@inboxcrew.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-blue-500/20 pt-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase">HEAD OFFICE</div>
                  <div className="text-xs text-white">Bulandshahr, Uttar Pradesh, India</div>
                </div>
              </div>
            </div>

            {/* Response Time SLA */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 flex items-center gap-3 text-xs text-zinc-300">
              <Clock className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Average response window: <strong>Under 2 Hours</strong></span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
