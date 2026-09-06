import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Gauge,
  Layers,
  MessageSquareText,
  MonitorSmartphone,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { siteMeta } from "../../data/siteContent";

const services = [
  {
    title: "Full Stack Product Development",
    desc: "Web apps, SaaS dashboards, ERP modules, admin panels, and custom business tools built from idea to deployment.",
    icon: Code2,
    emoji: "💻",
    accent: "from-blue-500 to-cyan-500",
    tags: ["React", "Next.js", "Node.js", "Django", "MongoDB"],
    bestFor: "ERP systems, SaaS MVPs, admin dashboards, and business portals.",
    deliverables: [
      "Frontend + backend implementation",
      "Database schema and authentication",
      "Deployment-ready production build",
    ],
  },
  {
    title: "API & Backend Engineering",
    desc: "Secure REST APIs, auth flows, role-based systems, databases, integrations, and backend logic designed for speed.",
    icon: Server,
    emoji: "⚙️",
    accent: "from-emerald-500 to-teal-500",
    tags: ["REST APIs", "JWT", "PostgreSQL", "Redis", "WebSocket"],
    bestFor: "Products that need reliable data flow, secure access, and scalable business logic.",
    deliverables: [
      "Clean API architecture",
      "Role-based access and validation",
      "Tested endpoints and documentation",
    ],
  },
  {
    title: "Modern Responsive UI",
    desc: "Clean interfaces for portfolios, landing pages, e-commerce, dashboards, and mobile-first product experiences.",
    icon: MonitorSmartphone,
    emoji: "🎨",
    accent: "from-violet-500 to-fuchsia-500",
    tags: ["Tailwind", "Framer Motion", "Figma", "UX", "SEO"],
    bestFor: "Brands, founders, and teams that need a sharp UI across desktop and mobile.",
    deliverables: [
      "Responsive page layouts",
      "Smooth motion and interactions",
      "Accessible, SEO-ready interface",
    ],
  },
  {
    title: "Data, BI & AI Workflows",
    desc: "Power BI dashboards, SQL reporting, Python automation, analytics flows, and AI-powered product features.",
    icon: BarChart3,
    emoji: "📊",
    accent: "from-amber-500 to-orange-500",
    tags: ["Power BI", "SQL", "Python", "DAX", "ML"],
    bestFor: "Teams that want cleaner reporting, automation, and intelligent product features.",
    deliverables: [
      "Dashboards and KPI reports",
      "Data cleaning and automation",
      "AI/ML feature integration",
    ],
  },
];

const serviceHighlights = [
  { value: "4K+", label: "ERP users supported" },
  { value: "5+", label: "client builds shipped" },
  { value: "3+", label: "years building products" },
];

const serviceMotionItems = [
  { emoji: "⚡", label: "Fast APIs", accent: "from-blue-500 to-cyan-500" },
  { emoji: "🧩", label: "Clean Code", accent: "from-emerald-500 to-teal-500" },
  { emoji: "🚀", label: "Launch Ready", accent: "from-violet-500 to-fuchsia-500" },
  { emoji: "📈", label: "Smart Data", accent: "from-amber-500 to-orange-500" },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "₹15K - ₹40K",
    desc: "Landing pages, portfolio sites, and small business websites with a clean responsive build.",
    accent: "from-blue-500 to-cyan-500",
    icon: MonitorSmartphone,
    features: [
      "1-3 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 revision round",
    ],
  },
  {
    name: "Business",
    price: "₹50K - ₹1.5L",
    desc: "Full-stack web apps, dashboards, e-commerce systems, and API-connected product builds.",
    accent: "from-violet-500 to-fuchsia-500",
    icon: Rocket,
    popular: true,
    features: [
      "Full stack app",
      "Auth and database",
      "API integration",
      "Admin dashboard",
      "Deployment support",
      "2 revision rounds",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    desc: "SaaS platforms, ERP systems, complex microservices, automation, and long-term product support.",
    accent: "from-amber-500 to-orange-500",
    icon: ShieldCheck,
    features: [
      "Scalable architecture",
      "Multi-tenant systems",
      "CI/CD pipeline",
      "Performance optimization",
      "Ongoing support",
      "Priority delivery",
    ],
  },
];

const protocolReasons = [
  {
    title: "Maintainable Code",
    desc: "Code that's easy to maintain and well documented.",
    icon: Layers,
  },
  {
    title: "Fast APIs",
    desc: "APIs that are fast and tested.",
    icon: Gauge,
  },
  {
    title: "Modern UI",
    desc: "Clean, modern UI that works on all devices.",
    icon: MonitorSmartphone,
  },
  {
    title: "Clear Updates",
    desc: "Straight talk - no fluff, clear updates.",
    icon: MessageSquareText,
  },
];

const processSteps = [
  {
    label: "01",
    title: "Scope",
    desc: "Clarify the workflow, users, data, risks, and success metrics before writing code.",
  },
  {
    label: "02",
    title: "Architect",
    desc: "Plan the UI, API contracts, database shape, auth, and deployment path.",
  },
  {
    label: "03",
    title: "Build",
    desc: "Ship in milestones with clean components, tested endpoints, and regular previews.",
  },
  {
    label: "04",
    title: "Launch",
    desc: "Deploy, optimize, document, and support the product after release.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Services() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.href = "/#contact";
  };

  return (
    <section
      id="services"
      className="pt-28 md:pt-32 pb-24 md:pb-32 relative overflow-hidden bg-white dark:bg-[#050509] transition-colors duration-300"
    >
      <div className="absolute inset-0 hidden dark:block" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black 48%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 48%, transparent 100%)" }} />
      <div className="absolute inset-0 block dark:hidden" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse at center, black 48%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 48%, transparent 100%)" }} />
      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-end">
            <motion.div {...fadeUp()} className="space-y-7">
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.25em] text-[10px] backdrop-blur-md shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Services
              </motion.div>
              <motion.h2
                className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[1.05]"
              >
                Build Systems That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500">
                  Actually Work.
                </span>
              </motion.h2>
            </motion.div>

            <motion.div {...fadeUp(0.12)} className="space-y-6 lg:pb-2">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium max-w-3xl">
                I help founders, teams, and businesses turn messy requirements into reliable software:
                polished frontends, scalable backends, clean APIs, and dashboards that make data easier to act on.
              </p>

              <div className="flex flex-wrap gap-3">
                {["ERP Systems", "SaaS Apps", "AI Tools", "Dashboards", "E-commerce"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {serviceHighlights.map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10"
                  >
                    <div className="text-2xl font-black text-gray-900 dark:text-white">
                      {item.value}
                    </div>
                    <div className="mt-1 text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 leading-relaxed">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          {...fadeUp(0.18)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-16"
        >
          {serviceMotionItems.map((item, index) => (
            <motion.div
              key={item.label}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.18,
              }}
              className="relative min-h-[160px] rounded-[28px] border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-[#070b12]/90 shadow-[0_18px_55px_rgba(15,23,42,0.08)] dark:shadow-[0_18px_55px_rgba(0,0,0,0.28)] overflow-hidden"
            >
              <div className={`absolute inset-x-8 top-0 h-1.5 bg-gradient-to-r ${item.accent} rounded-b-full`} />
              <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                <div className={`flex h-20 w-20 items-center justify-center rounded-[26px] bg-gradient-to-br ${item.accent} shadow-lg`}>
                  <span className="text-4xl leading-none" role="img" aria-label={item.label}>
                    {item.emoji}
                  </span>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-gray-700 dark:text-gray-300">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                {...fadeUp(index * 0.06)}
                whileHover={{ y: -8 }}
                className="group relative min-h-[380px] bg-white/[0.88] dark:bg-[#070b12]/90 border border-gray-200/80 dark:border-white/10 shadow-[0_22px_70px_rgba(15,23,42,0.08)] dark:shadow-[0_22px_70px_rgba(0,0,0,0.28)] overflow-hidden flex flex-col"
                style={{
                  borderRadius:
                    index % 2 === 0 ? "30px 30px 54px 30px" : "30px 54px 30px 30px",
                }}
              >
                <div className={`absolute inset-x-8 top-0 h-1.5 bg-gradient-to-r ${service.accent} rounded-b-full`} />
                <div className="relative z-10 flex h-full flex-col p-7 md:p-8">
                  <div className="flex items-start justify-between gap-5 mb-7">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-[24px] bg-gradient-to-br ${service.accent} text-white flex items-center justify-center shadow-lg shadow-gray-900/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500">
                          Service 0{index + 1}
                        </p>
                        <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mt-1">
                          Built for production use
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: [-4, 4, -4], scale: [1, 1.06, 1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.15,
                      }}
                      className="hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 shadow-sm"
                    >
                      <span className="text-3xl leading-none" role="img" aria-label={service.title}>
                        {service.emoji}
                      </span>
                    </motion.div>
                  </div>

                  <h3 className="text-3xl md:text-[2.1rem] font-black tracking-tight text-gray-900 dark:text-white leading-[1.05] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-6 max-w-2xl">
                    {service.desc}
                  </p>

                  <div className="grid sm:grid-cols-[1fr_0.95fr] gap-5 mb-7">
                    <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.04] border border-gray-100 dark:border-white/10">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400 dark:text-gray-500 mb-2">
                        Best For
                      </p>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">
                        {service.bestFor}
                      </p>
                    </div>
                    <div className="space-y-3">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-auto border-t border-gray-100 dark:border-white/10">
                    <div className="flex flex-wrap gap-2.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full bg-gray-50 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <motion.div {...fadeUp()} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-5 py-2 mb-5 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-emerald-600 dark:text-emerald-300 font-black uppercase tracking-[0.25em] text-[10px] backdrop-blur-md shadow-sm">
                <Gauge className="w-3.5 h-3.5" />
                Pricing Tiers
              </div>
              <h3 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-[1.08]">
                Transparent ranges for different build sizes.
              </h3>
            </motion.div>
            <motion.p
              {...fadeUp(0.1)}
              className="max-w-md text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium"
            >
              Final pricing depends on scope, features, timeline, integrations, and support needs.
              These ranges help you pick the right starting point before we define the build.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon;

              return (
                <motion.article
                  key={tier.name}
                  {...fadeUp(index * 0.07)}
                  whileHover={{ y: -8 }}
                  className={`relative min-h-[520px] p-7 md:p-8 rounded-[32px] bg-white dark:bg-gray-950 border ${
                    tier.popular
                      ? "border-violet-400 dark:border-violet-400 shadow-[0_28px_80px_rgba(124,58,237,0.18)]"
                      : "border-gray-200 dark:border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] dark:shadow-none"
                  } overflow-hidden flex flex-col`}
                >
                  <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${tier.accent}`} />
                  {tier.popular && (
                    <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tier.accent} text-white flex items-center justify-center shadow-lg mb-8`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="mb-8">
                    <p className="text-sm font-black uppercase tracking-[0.24em] text-gray-400 dark:text-gray-500 mb-3">
                      {tier.name}
                    </p>
                    <h4 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white leading-none mb-5 break-words">
                      {tier.price}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 shrink-0" />
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full px-5 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 ${
                      tier.popular
                        ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20"
                        : "bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10"
                    }`}
                  >
                    Discuss {tier.name}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-6 lg:gap-8 items-stretch mb-20">
          <motion.div
            {...fadeUp()}
            className="relative p-8 md:p-10 rounded-[36px] bg-gray-950 text-white overflow-hidden shadow-[0_30px_90px_rgba(15,23,42,0.35)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.28),transparent_32%),linear-gradient(315deg,rgba(245,158,11,0.18),transparent_36%)]" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-200">
                    Client Promise
                  </p>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                    Why Initialize Protocol With Me?
                  </h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {protocolReasons.map((reason, index) => {
                  const Icon = reason.icon;

                  return (
                    <motion.div
                      key={reason.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.45 }}
                      className="p-5 rounded-2xl bg-white/[0.08] border border-white/10 backdrop-blur-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan-200 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-black text-white mb-1">{reason.title}</h4>
                          <p className="text-sm text-gray-300 leading-relaxed">{reason.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.12)}
            className="p-8 md:p-10 rounded-[36px] bg-white dark:bg-gray-950 border border-gray-200 dark:border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] dark:shadow-none"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-300 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                  Delivery Flow
                </p>
                <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                  From brief to launch.
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.label} className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-xs font-black text-gray-500 dark:text-gray-400 shrink-0">
                    {step.label}
                  </div>
                  <div className="pb-6 border-b border-gray-100 dark:border-white/10 last:border-b-0 last:pb-0">
                    <h4 className="text-lg font-black text-gray-900 dark:text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp()}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 p-7 md:p-8 rounded-[32px] bg-gray-50 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight mb-2">
                Have a project that needs a clean build?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium max-w-2xl">
                Share the idea, the deadline, and the rough scope. I will help you shape the right technical path.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Start a Build
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.a
              href={siteMeta.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-4 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-black text-xs uppercase tracking-widest flex items-center justify-center"
            >
              View GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
