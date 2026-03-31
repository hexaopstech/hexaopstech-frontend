/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Cloud, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Terminal as TerminalIcon,
  Activity,
  Lock,
  Zap,
  Layers,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SERVICES', href: '#services' },
    { name: 'INFRASTRUCTURE', href: '#infrastructure' },
    { name: 'CASE STUDIES', href: '#portfolio' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent-red flex items-center justify-center">
            <span className="font-black text-white text-xl">H</span>
          </div>
          <span className="font-black text-xl tracking-tighter">HEXA<span className="text-accent-red">OPS</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-mono text-[11px] tracking-widest hover:text-accent-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-accent-red hover:bg-white hover:text-accent-red text-white px-6 py-2 text-[11px] font-bold tracking-widest transition-all duration-200 border border-accent-red">
            [GET_QUOTE]
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-base border-b border-border p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-sm tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-accent-red text-white py-4 font-bold tracking-widest">
                GET QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="mono-label text-accent-red mb-4 block tracking-[0.4em]">
              // NEXT-GEN INFRASTRUCTURE
            </span>
            <h1 className="text-6xl md:text-8xl mb-6 leading-[0.9]">
              BUILT <span className="text-accent-red">SECURE.</span><br />
              SCALED <span className="text-white/40">SMART.</span>
            </h1>
            <p className="text-white/60 max-w-lg mb-10 text-lg font-light leading-relaxed">
              High-performance cybersecurity, cloud architecture, and full-stack engineering for the modern enterprise. We don't just build; we fortify.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-accent-red hover:invert transition-all duration-200 px-8 py-4 font-black tracking-widest text-sm border border-accent-red">
                START_PROJECT
              </button>
              <button className="border border-border hover:bg-white hover:text-base transition-all duration-200 px-8 py-4 font-black tracking-widest text-sm">
                VIEW_STACK
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Abstract Hexagon Wireframe */}
              <svg viewBox="0 0 200 200" className="w-full h-full animate-pulse-slow">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#E8251A', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#7B5CF0', stopOpacity: 0.2 }} />
                  </linearGradient>
                </defs>
                <motion.polygon 
                  points="100,20 170,60 170,140 100,180 30,140 30,60" 
                  fill="none" 
                  stroke="url(#grad1)" 
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                <polygon points="100,40 150,70 150,130 100,160 50,130 50,70" fill="none" stroke="#1E1E22" strokeWidth="1" />
                <circle cx="100" cy="100" r="2" fill="#E8251A" />
                <line x1="100" y1="20" x2="100" y2="180" stroke="#1E1E22" strokeWidth="0.5" />
                <line x1="30" y1="60" x2="170" y2="140" stroke="#1E1E22" strokeWidth="0.5" />
                <line x1="170" y1="60" x2="30" y2="140" stroke="#1E1E22" strokeWidth="0.5" />
              </svg>
              
              {/* Floating Accents */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-accent-red/30" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-accent-blue/30" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[9px] tracking-[0.3em]">SCROLL_TO_EXPLORE</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-red to-transparent" />
      </div>
    </section>
  );
};

const StatusBar = () => {
  const metrics = [
    { label: 'UPTIME_SLA', value: '100%', color: 'text-accent-green' },
    { label: 'BREACHES', value: 'ZERO', color: 'text-accent-red' },
    { label: 'MONITORING', value: '24/7', color: 'text-accent-blue' },
    { label: 'DEPLOYMENTS', value: '500+', color: 'text-accent-purple' },
  ];

  return (
    <div className="border-y border-border bg-surface py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-3">
            <span className="mono-label">{m.label}:</span>
            <span className={`font-black text-sm tracking-wider ${m.color}`}>{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServiceGrid = () => {
  const services = [
    {
      title: 'CYBERSECURITY',
      desc: 'Zero-trust architecture, penetration testing, and real-time threat mitigation for mission-critical assets.',
      icon: <Shield className="text-accent-red" size={32} />,
      color: 'border-accent-red',
      glow: 'hover:shadow-[0_0_20px_rgba(232,37,26,0.15)]'
    },
    {
      title: 'CLOUD INFRA',
      desc: 'Scalable multi-cloud deployments with AWS, Azure, and GCP. Optimized for latency and high availability.',
      icon: <Cloud className="text-accent-blue" size={32} />,
      color: 'border-accent-blue',
      glow: 'hover:shadow-[0_0_20px_rgba(0,194,255,0.15)]'
    },
    {
      title: 'FULL-STACK DEV',
      desc: 'High-performance web and mobile applications engineered with React, Node.js, and distributed systems.',
      icon: <Code2 className="text-accent-green" size={32} />,
      color: 'border-accent-green',
      glow: 'hover:shadow-[0_0_20px_rgba(0,229,160,0.15)]'
    },
    {
      title: 'QA AUTOMATION',
      desc: 'End-to-end automated testing pipelines ensuring 100% code integrity and seamless CI/CD workflows.',
      icon: <CheckCircle2 className="text-accent-purple" size={32} />,
      color: 'border-accent-purple',
      glow: 'hover:shadow-[0_0_20px_rgba(123,92,240,0.15)]'
    }
  ];

  return (
    <section id="services" className="py-24 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="mono-label text-accent-red mb-2 block tracking-[0.4em]">
            // CORE_CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl">PRECISION <span className="text-white/30">ENGINEERING.</span></h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group p-10 bg-surface border-t-2 ${s.color} border-x border-b border-border transition-all duration-300 ${s.glow} cursor-default`}
            >
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-xl mb-4 tracking-wider">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                {s.desc}
              </p>
              <a href="#" className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-widest transition-all duration-200 group-hover:gap-4 ${s.color.replace('border-', 'text-')}`}>
                LEARN_MORE <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const logQueue = [
  "> INITIALIZING_DEPLOYMENT_SEQUENCE...",
  "> AUTHENTICATING_SECURE_VAULT...",
  "> PROVISIONING_AWS_CENTRAL_1...",
  "> RUNNING_SECURITY_AUDIT_V4.2...",
  "> ENCRYPTING_DATA_AT_REST...",
  "> DEPLOYING_KUBERNETES_CLUSTER...",
  "> HEALTH_CHECK_PASSED [100%]",
  "> SYSTEM_LIVE_IN_PRODUCTION."
];

const Terminal = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < logQueue.length) {
        setLogs(prev => [...prev, logQueue[i]]);
        i++;
      } else {
        setLogs([]);
        i = 0;
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050505] border border-border rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-surface px-4 py-2 border-b border-border flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-red/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-accent-green/50" />
        </div>
        <span className="font-mono text-[9px] opacity-40 ml-2 uppercase tracking-widest">hexaops_terminal — 80x24</span>
      </div>
      <div className="p-6 font-mono text-[11px] h-[280px] overflow-hidden">
        {logs.map((log, idx) => (
          <motion.div 
            key={idx + (log || '')}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`mb-2 ${log?.includes('PASSED') || log?.includes('LIVE') ? 'text-accent-green' : 'text-white/70'}`}
          >
            {log}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-accent-red inline-block align-middle ml-1"
        />
      </div>
    </div>
  );
};

const Methodology = () => {
  return (
    <section id="infrastructure" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full grid-bg opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Terminal />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="mono-label text-accent-red mb-4 block tracking-[0.4em]">
              // OUR_METHODOLOGY
            </span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">
              HIGH-PERFORMANCE <br />
              <span className="text-white/30">ENGINEERING.</span>
            </h2>
            
            <div className="space-y-8">
              {[
                { title: 'AUTOMATED_PIPELINES', desc: 'We eliminate human error through rigorous CI/CD automation and infrastructure-as-code.', icon: <Zap size={20} className="text-accent-blue" /> },
                { title: 'SECURITY_FIRST', desc: 'Every line of code is audited for vulnerabilities before it ever touches production.', icon: <Lock size={20} className="text-accent-red" /> },
                { title: 'SCALABLE_ARCHITECTURE', desc: 'Systems designed to handle 10x growth without architectural redesign.', icon: <Layers size={20} className="text-accent-green" /> }
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-black text-sm tracking-widest mb-2">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProofOfWork = () => {
  const projects = [
    { title: 'FINTECH_VAULT', category: 'Cybersecurity', img: 'https://picsum.photos/seed/fintech/800/600' },
    { title: 'HEALTH_SYNC', category: 'Cloud Infra', img: 'https://picsum.photos/seed/health/800/600' },
    { title: 'QUANTUM_SAAS', category: 'Full Stack', img: 'https://picsum.photos/seed/saas/800/600' },
  ];

  return (
    <section id="portfolio" className="py-24 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="mono-label text-accent-red mb-2 block tracking-[0.4em]">
              // PROOF_OF_WORK
            </span>
            <h2 className="text-4xl md:text-5xl">SELECTED <span className="text-white/30">CASES.</span></h2>
          </div>
          <button className="font-mono text-[10px] tracking-[0.3em] border-b border-accent-red pb-1 hover:text-accent-red transition-colors">
            VIEW_ALL_STUDIES
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface border border-border mb-4">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                  <span className="font-mono text-[9px] bg-accent-red px-2 py-1 tracking-widest">{p.category}</span>
                </div>
              </div>
              <h3 className="text-lg tracking-widest group-hover:text-accent-red transition-colors">{p.title}</h3>
              <p className="mono-label mt-1">CASE_STUDY_0{i+1}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="bg-accent-red py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl mb-10 leading-none">
            READY TO <br />
            <span className="text-black">REWIRE?</span>
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-12 font-medium">
            Let's build the infrastructure that defines your future. Our engineers are standing by to audit your current stack.
          </p>
          <button className="bg-white text-accent-red px-12 py-5 font-black tracking-[0.3em] text-sm hover:bg-black hover:text-white transition-all duration-300">
            INITIATE_CONTACT
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-base border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-accent-red flex items-center justify-center">
                <span className="font-black text-white text-sm">H</span>
              </div>
              <span className="font-black text-lg tracking-tighter">HEXA<span className="text-accent-red">OPS</span></span>
            </div>
            <p className="text-white/30 text-sm max-w-xs leading-relaxed">
              High-performance engineering for the digital frontier. Fortifying enterprises through code and cloud.
            </p>
          </div>
          
          <div>
            <h4 className="mono-label mb-6 text-white/80">NAVIGATION</h4>
            <ul className="space-y-4 font-mono text-[10px] tracking-widest text-white/40">
              <li><a href="#" className="hover:text-accent-red transition-colors">SERVICES</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">INFRASTRUCTURE</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">CASE_STUDIES</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">PRIVACY_POLICY</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mono-label mb-6 text-white/80">CONNECT</h4>
            <ul className="space-y-4 font-mono text-[10px] tracking-widest text-white/40">
              <li><a href="#" className="hover:text-accent-red transition-colors">LINKEDIN</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">GITHUB</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">TWITTER</a></li>
              <li><a href="#" className="hover:text-accent-red transition-colors">EMAIL_US</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-border pt-10">
          <p className="font-mono text-[9px] tracking-widest text-white/20">
            © 2026 HEXAOPS TECHNOLOGIES LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="font-mono text-[9px] tracking-widest text-accent-green">SYSTEMS_OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StatusBar />
        <ServiceGrid />
        <Methodology />
        <ProofOfWork />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
