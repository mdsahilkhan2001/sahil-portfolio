 import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, Mail, Sparkles, CheckCircle2, Globe } from "lucide-react";
import { siteMeta, about } from "../../data/siteContent";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_USER
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-[#030305] transition-colors duration-500">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 text-xs font-black uppercase tracking-[0.3em] backdrop-blur-md shadow-sm dark:shadow-none"
          >
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            Contact Me
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.1 }} 
            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Talk.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Have an exciting project? <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-400">Let's build it together.</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md">
                I'm currently available for freelance projects, open to full-time roles, and always ready to discuss new tech opportunities.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="w-6 h-6" />, title: "Email", value: siteMeta.email, link: `mailto:${siteMeta.email}` },
                { icon: <Phone className="w-6 h-6" />, title: "Phone", value: siteMeta.phone, link: `tel:${siteMeta.phone}` },
                { icon: <Globe className="w-6 h-6" />, title: "Tech Agency", value: "sgscodeworks.in", link: "https://sgscodeworks.in" },
                { icon: <MapPin className="w-6 h-6" />, title: "Location", value: about.location, link: null }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group cursor-pointer" onClick={() => item.link && window.open(item.link)}>
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.title}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Enhanced Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 dark:bg-gray-900/60 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-[0_20px_40px_rgb(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgb(0,0,0,0.2)] relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-950/50 border border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-950/50 border border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest pl-1">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full p-4 rounded-2xl bg-gray-50 dark:bg-gray-950/50 border border-gray-200 dark:border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                {loading ? "Sending Message..." : "Send Message"}
                {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              {/* Animated status messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">Thanks for reaching out. I'll get back to you shortly.</p>
                    <button 
                      onClick={() => setStatus(null)}
                      className="px-6 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 text-center text-red-500 font-bold bg-red-50 dark:bg-red-500/10 py-3 rounded-xl"
                  >
                    ❌ Failed to send message. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
