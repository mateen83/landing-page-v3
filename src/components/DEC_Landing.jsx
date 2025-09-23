import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Users2, CalendarDays } from "lucide-react";

const SIGN_UP_URL = "#"; // TODO: your Skool invite / checkout link
const LEARN_MORE_URL = "#"; // TODO: your long-form About/FAQ link
const LOGO_URL = ""; // e.g. https://cdn.yoursite.com/dec-logo-transparent.png

export default function DEC_Landing() {
  return (
    <main className="min-h-screen w-full bg-[radial-gradient(1200px_600px_at_20%_10%,#24124B,transparent_60%),radial-gradient(900px_600px_at_90%_10%,#0a4952_0%,transparent_60%),linear-gradient(120deg,#0A1526,#08161A)] text-white overflow-x-hidden">
      <Header />
      
      {/* HERO */}
      <section className="relative isolate px-6 pt-24 sm:pt-32 pb-20">
        <GlowOrbs />
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <Logo />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 font-semibold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl"
            >
              Divine Energy Collective
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 max-w-2xl text-balance text-base sm:text-lg md:text-xl/7 text-white/80"
            >
              Join our community for healing, learning, and growth.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                href={SIGN_UP_URL}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold bg-white text-gray-900 shadow-lg shadow-white/10 hover:shadow-white/20 transition"
              >
                Sign Up
              </motion.a>
              <motion.a
                href={LEARN_MORE_URL}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold border border-white/40 text-white hover:bg-white/10 backdrop-blur-sm transition"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:pl-6"
          >
            <FeatureCard />
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-2xl sm:text-3xl font-semibold"
          >
            What you get inside D.E.C.
          </motion.h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature 
              icon={<Sparkles className="h-6 w-6" />} 
              title="Guided Practices" 
              desc="Breathwork, meditations, mantras, and daily rituals."
              delay={0.1}
            />
            <Feature 
              icon={<Users2 className="h-6 w-6" />} 
              title="Verified Practitioners" 
              desc="Healers, guides, and teachers with real-world experience."
              delay={0.2}
            />
            <Feature 
              icon={<CalendarDays className="h-6 w-6" />} 
              title="Live Sessions" 
              desc="Classes, circles, and workshops (in‑app & online)."
              delay={0.3}
            />
            <Feature 
              icon={<HeartHandshake className="h-6 w-6" />} 
              title="Community Support" 
              desc="Accountability, Q&A, and private member discussions."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL / QUOTE */}
      <section className="px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center text-white/90"
        >
          <p className="text-lg italic">"Together we rise, rooted in healing and light."</p>
          <div className="mt-4 h-px w-24 mx-auto bg-white/20" />
        </motion.div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="px-6 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-sm"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-center">Get updates & early invites</h3>
          <p className="mt-3 text-center text-white/70 text-base sm:text-lg max-w-2xl mx-auto">Drop your email to receive upcoming classes, circles, and member offers.</p>
          <form className="mt-8 flex flex-col lg:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e)=>e.preventDefault()}>
            <input 
              type="email" 
              required 
              placeholder="you@example.com" 
              className="flex-1 rounded-xl bg-white/95 text-gray-900 px-5 py-4 text-base outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-300 transition-all duration-200 shadow-sm" 
            />
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="lg:flex-shrink-0 rounded-xl px-8 py-4 bg-white text-gray-900 font-semibold shadow-md hover:shadow-lg transition-all duration-200 text-base"
            >
              Notify Me
            </motion.button>
          </form>
          <p className="mt-4 text-xs text-white/60 text-center">We respect your privacy. Unsubscribe anytime.</p>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <SmallLogo />
          <span className="font-semibold tracking-wide">Divine Energy Collective</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <a href={LEARN_MORE_URL} className="text-sm text-white/80 hover:text-white transition-colors duration-200">Learn More</a>
          <motion.a
            href={SIGN_UP_URL}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-200"
          >
            Sign Up
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}

function Logo() {
  if (LOGO_URL) {
    return (
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        src={LOGO_URL}
        width={180}
        height={180}
        alt="D.E.C. lotus with sacred geometry – Divine Energy Collective"
        className="drop-shadow-[0_0_25px_rgba(255,215,0,0.45)] mx-auto md:mx-0"
      />
    );
  }
  return <InlineLogo className="mx-auto md:mx-0" />;
}

function SmallLogo() {
  if (LOGO_URL) {
    return <img src={LOGO_URL} width={36} height={36} alt="D.E.C." className="rounded-full drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />;
  }
  return <InlineLogo size={36} />;
}

function InlineLogo({ size = 180, className = "" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`relative ${className} animate-pulse-slow`} 
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_30px_rgba(255,215,0,0.45)]">
        <defs>
          <radialGradient id="gold" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF6BF" />
            <stop offset="40%" stopColor="#FFD76A" />
            <stop offset="100%" stopColor="#E2A300" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="100" cy="100" r="84" fill="none" stroke="url(#gold)" strokeWidth="5" filter="url(#glow)" />
        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={i}
            cx={100 + 34 * Math.cos((i * Math.PI) / 3)}
            cy={100 + 34 * Math.sin((i * Math.PI) / 3)}
            r="34"
            fill="none"
            stroke="url(#gold)"
            strokeOpacity="0.45"
            strokeWidth="2"
          />
        ))}
        <circle cx="100" cy="100" r="34" fill="none" stroke="url(#gold)" strokeOpacity="0.55" strokeWidth="2" />
        <path d="M100 130c14-14 21-28 21-40 0 0-11 1-21 9-10-8-21-9-21-9 0 12 7 26 21 40Z" fill="url(#gold)" filter="url(#glow)" opacity="0.9" />
        <path d="M100 130c-10-8-22-10-34-7 6 9 18 17 34 22 16-5 28-13 34-22-12-3-24-1-34 7Z" fill="url(#gold)" opacity="0.9"/>
        <path d="M100 120c6-8 9-16 9-24-6 1-11 4-15 8-4-4-9-7-15-8 0 8 3 16 9 24h12Z" fill="#FFD76A" opacity="0.9"/>
        <text x="100" y="162" textAnchor="middle" fontSize={size/11} fontWeight="700" fill="url(#gold)" filter="url(#glow)">D.E.C.</text>
      </svg>
    </motion.div>
  );
}

function FeatureCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-sm animate-float"
    >
      <h3 className="text-xl font-semibold">A space to grow</h3>
      <p className="mt-2 text-white/80">Learn from experienced practitioners, join live circles, and deepen your practice with guided tools.</p>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80 text-sm">
        <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>• Breathwork & meditation</motion.li>
        <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>• Energy healing & readings</motion.li>
        <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>• Member accountability</motion.li>
        <motion.li initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>• Replays & resources</motion.li>
      </ul>
    </motion.div>
  );
}

function Feature({ icon, title, desc, delay = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center gap-2 text-yellow-300">{icon}<span className="font-medium">{title}</span></div>
      <p className="mt-2 text-sm text-white/75">{desc}</p>
    </motion.div>
  );
}

function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-6 pb-10"
    >
      <div className="mx-auto max-w-6xl text-center text-xs text-white/60">
        © {new Date().getFullYear()} Divine Energy Collective. All rights reserved.
      </div>
    </motion.footer>
  );
}

function GlowOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" 
      />
      <motion.div 
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" 
      />
    </div>
  );
}