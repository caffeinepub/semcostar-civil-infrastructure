import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  IconBuilding,
  IconCheck,
  IconFoundation,
  IconOffice,
  IconStructure,
  IconTurnkey,
} from "./components/Icons";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#advantages" },
    { label: "Contact", href: "#cta" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="flex flex-col leading-none"
          data-ocid="nav.link"
        >
          <span className="text-xl font-extrabold tracking-widest text-[#1F4F73] uppercase">
            SEMCOSTAR
          </span>
          <span className="text-[10px] font-semibold tracking-[0.18em] text-[#4A6B82] uppercase mt-0.5">
            Civil Infrastructure Division
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="text-sm font-semibold text-gray-600 hover:text-[#2F6FA3] tracking-wide uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            data-ocid="nav.primary_button"
            className="ml-2 px-5 py-2.5 bg-[#2F6FA3] text-white text-sm font-bold tracking-wide uppercase rounded hover:bg-[#1F4F73] transition-colors"
          >
            Request a Quote
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                d="M4 4l14 14M18 4L4 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-gray-700 uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              window.location.hash = "cta";
            }}
            className="w-full text-center px-5 py-2.5 bg-[#2F6FA3] text-white text-sm font-bold uppercase rounded cursor-pointer"
          >
            Request a Quote
          </button>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-16"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-industrial.dim_1600x900.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(27,31,36,0.90) 0%, rgba(27,31,36,0.72) 45%, rgba(27,31,36,0.30) 80%, rgba(27,31,36,0.08) 100%)",
        }}
      />
      <div className="relative max-w-[1200px] mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
          data-ocid="hero.section"
        >
          <p className="font-bold tracking-[0.3em] uppercase text-xs mb-5 flex items-center gap-2 text-[#2F6FA3]">
            <span className="inline-block w-8 h-px bg-[#2F6FA3]" />
            Engineering Excellence
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight mb-6">
            SEMCOSTAR &ndash; Pioneering Infrastructure and Industrial Civil
            Engineering.
          </h1>
          <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-xl">
            Laying the foundation for global progress, from complex chemical
            plants to national infrastructure hubs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#cta"
              data-ocid="hero.primary_button"
              className="px-8 py-3.5 bg-[#2F6FA3] text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-[#1F4F73] transition-colors shadow-lg"
            >
              Enquire Now
            </a>
            <a
              href="#services"
              data-ocid="hero.secondary_button"
              className="px-8 py-3.5 border-2 border-white text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-white hover:text-[#1F4F73] transition-colors"
            >
              Get Your Quote
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function IntroSection() {
  return (
    <section id="intro" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-bold tracking-[0.3em] uppercase text-xs mb-4 flex items-center gap-2 text-[#2F6FA3]">
            <span className="inline-block w-8 h-px bg-[#2F6FA3]" />
            About SEMCOSTAR
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1F4F73] mb-6 leading-tight">
            Comprehensive Civil Solutions for a Connected World.
          </h2>
          <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
            As SEMCO&rsquo;s specialized civil infrastructure division,
            SEMCOSTAR translates over 18 years of engineering expertise into
            robust physical foundations. We understand that your process
            equipment, PEB structures, and complex operations require an equally
            world-class infrastructure.
          </p>
          <p className="text-gray-500 leading-relaxed text-[15px] mb-8">
            SEMCOSTAR delivers turnkey civil engineering solutions tailored for
            chemical manufacturing plants, massive logistics warehouses, and
            national infrastructure projects including airports, train stations,
            and modern office complexes. We unify civil and mechanical execution
            to optimize time, safety, and productivity.
          </p>
          <a
            href="#services"
            data-ocid="intro.link"
            className="inline-flex items-center gap-2 text-[#2F6FA3] font-bold uppercase tracking-widest text-sm hover:text-[#1F4F73] transition-colors"
          >
            Learn More
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <img
            src="/assets/generated/intro-engineers.dim_800x600.jpg"
            alt="Engineers reviewing blueprints on industrial site"
            className="w-full rounded-xl shadow-2xl object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: <IconBuilding />,
    title: "Chemical & Industrial Plant Construction",
    desc: "End-to-end civil execution for chemical process plants, refineries, and ZLD facilities, ensuring structural stability for heavy, vibrating machinery in aggressive industrial environments.",
  },
  {
    icon: <IconFoundation />,
    title: "Warehousing & Logistics Facilities",
    desc: "Design and construction of large-scale, clear-span warehouses and distribution centers with integrated loading bays and heavy-duty flooring systems.",
  },
  {
    icon: <IconStructure />,
    title: "Infrastructure & Transport Hubs",
    desc: "Key player in national infrastructure projects, delivering specialized civil work for airports, metro systems, and major train stations.",
  },
  {
    icon: <IconOffice />,
    title: "Commercial & Office Buildings",
    desc: "Construction of modern office complexes, laboratory spaces, control rooms, and administrative buildings integrated seamlessly with industrial and utility areas.",
  },
  {
    icon: <IconTurnkey />,
    title: "Turnkey Civil Execution",
    desc: "Unified project delivery covering site surveying, soil testing, excavation, RCC structures, integrated utilities, and finishing.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#F3F5F7]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-bold tracking-[0.3em] uppercase text-xs mb-3 flex items-center justify-center gap-2 text-[#2F6FA3]">
            <span className="inline-block w-8 h-px bg-[#2F6FA3]" />
            What We Do
            <span className="inline-block w-8 h-px bg-[#2F6FA3]" />
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1F4F73] mb-4">
            Our Core Civil Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
            Comprehensive civil engineering solutions for the modern industrial
            age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              data-ocid={`services.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-xl p-7 shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:shadow-[0_8px_24px_0_rgba(0,0,0,0.14)] transition-all duration-300 border border-gray-100"
            >
              <div className="mb-5">{svc.icon}</div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#1F4F73] mb-3">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ADVANTAGES = [
  {
    title: "Seamless Turnkey Integration",
    desc: "Since we also engineer the process equipment and PEB structures, our civil team eliminates contractor communication gaps, ensuring flawless execution.",
  },
  {
    title: "Infrastructure Expertise",
    desc: "A proven track record delivering complex civil work for high-traffic, regulated infrastructure like airports and transport hubs.",
  },
  {
    title: "ISO Certified Quality",
    desc: "ISO 9001:2015 certified processes applied to every construction stage, from foundation testing to final finishing.",
  },
  {
    title: "Safety & Compliance",
    desc: "Strict adherence to international and national safety protocols ensures a zero-harm environment on all construction sites.",
  },
  {
    title: "Optimized Timeline",
    desc: "Sequential delivery with mechanical and PEB teams reduces overall project duration.",
  },
];

function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-bold tracking-[0.3em] uppercase text-xs mb-3 flex items-center justify-center gap-2 text-[#2F6FA3]">
            <span className="inline-block w-8 h-px bg-[#2F6FA3]" />
            Why Choose Us
            <span className="inline-block w-8 h-px bg-[#2F6FA3]" />
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#1F4F73] mb-4">
            The SEMCOSTAR Advantage
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
            Experience that goes beyond construction — we deliver complete
            industrial solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, i) => (
            <motion.div
              key={adv.title}
              data-ocid={`advantages.item.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#F3F5F7] rounded-xl p-6 border border-gray-100"
            >
              <div className="mb-4">
                <IconCheck />
              </div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#1F4F73] mb-3">
                {adv.title}
              </h3>
              <p className="text-gray-500 text-[13px] leading-relaxed">
                {adv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <section
      className="relative min-h-[300px] flex items-center justify-center py-20"
      style={{
        backgroundImage:
          "url('/assets/generated/quote-banner.dim_1600x700.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(27,31,36,0.75)" }}
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <svg
            className="w-10 h-8 mx-auto mb-6 opacity-50"
            viewBox="0 0 40 30"
            fill="#2F6FA3"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M0 30V18C0 12.5 1.83 8.17 5.5 5 9.17 1.83 13.33.33 18 .5L19.5 4c-3 .33-5.5 1.25-7.5 2.75C10 8.25 9 10.17 9 12.5h7V30H0zm24 0V18c0-5.5 1.83-9.83 5.5-13C33.17 1.83 37.33.33 42 .5L43.5 4c-3 .33-5.5 1.25-7.5 2.75-2 1.5-3 3.42-3 5.75h7V30H24z" />
          </svg>
          <blockquote className="text-xl md:text-2xl font-light italic text-white leading-relaxed mb-6">
            &ldquo;Staying together is process and Working together is
            success.&rdquo;
          </blockquote>
          <p className="text-[#2F6FA3] font-semibold uppercase tracking-widest text-sm mb-6">
            &mdash; Henry Ford
          </p>
          <div className="w-12 h-px bg-[#2F6FA3] mx-auto mb-6" />
          <p className="text-gray-300 text-[15px] max-w-lg mx-auto">
            Trust SEMCOSTAR to build the infrastructure that powers your
            ambition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="cta" className="py-20" style={{ backgroundColor: "#1F4F73" }}>
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-bold tracking-[0.3em] uppercase text-xs mb-4 text-blue-300">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-6">
            Ready to Build Your Next Major Project?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-[15px] leading-relaxed mb-10">
            Whether you are building a new chemical plant, a national transit
            hub, or expanding your warehouse capabilities, trust SEMCOSTAR for
            engineering excellence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:info@semcostar.com"
              data-ocid="cta.primary_button"
              className="px-8 py-3.5 bg-white text-[#1F4F73] font-bold uppercase tracking-widest text-sm rounded hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
            </a>
            <button
              type="button"
              data-ocid="cta.secondary_button"
              className="px-8 py-3.5 border-2 border-white text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-white/10 transition-colors cursor-pointer"
            >
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "semcostar.com";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const quickLinks = [
    "Home",
    "About SEMCO",
    "Our Services",
    "Why Choose Us",
    "Projects",
    "Contact Us",
  ];
  const industries = [
    "Chemical Processing",
    "Pharmaceutical",
    "Oil & Gas",
    "Heavy Manufacturing",
    "Sugar Technology",
    "PEB Structures",
  ];

  return (
    <footer style={{ backgroundColor: "#2B2F34" }} className="text-gray-300">
      <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="mb-4">
            <div className="text-xl font-extrabold tracking-widest text-white uppercase">
              SEMCOSTAR
            </div>
            <div className="text-[10px] font-semibold tracking-[0.18em] text-[#4A6B82] uppercase mt-0.5">
              Civil Infrastructure Division
            </div>
          </div>
          <p className="text-gray-400 text-[13px] leading-relaxed mb-4">
            Your trusted partner for world-class civil engineering solutions —
            foundations built to last a lifetime.
          </p>
          <p className="text-gray-500 text-[12px]">
            Plot No. 42, Industrial Area Phase II,
            <br />
            Gujarat, India &ndash; 382 445
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((item) => (
              <li key={item}>
                <a
                  href="#home"
                  className="text-gray-400 text-[13px] hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span
                    className="inline-block w-3 h-px"
                    style={{ backgroundColor: "#2F6FA3" }}
                  />
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-5">
            Industries Served
          </h4>
          <ul className="space-y-2.5">
            {industries.map((item) => (
              <li key={item}>
                <span className="text-gray-400 text-[13px] flex items-center gap-1.5">
                  <span
                    className="inline-block w-3 h-px"
                    style={{ backgroundColor: "#2F6FA3" }}
                  />
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[12px] text-gray-500">
          <span>
            &copy; {year} SEMCOSTAR Civil Infrastructure Division. All rights
            reserved.
          </span>
          <span>
            Built with &#10084; using{" "}
            <a
              href={caffeineUrl}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <AdvantagesSection />
        <QuoteBanner />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
