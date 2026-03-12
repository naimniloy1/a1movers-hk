/*
 * A1 Movers H.K — Home Page
 * Design: Industrial Precision
 * Sections: Nav, Hero, Stats, About, Services, Why Us, Quote Form, Footer
 * Colors: Deep Navy base, Signal Orange accent
 * Fonts: Barlow Condensed (headings) + Barlow (body)
 */

import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Package,
  Home as HomeIcon,
  Building2,
  ShieldCheck,
  Users,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  Truck,
  Boxes,
  Wrench,
} from "lucide-react";

// ─── WhatsApp number ───────────────────────────────────────────────────────
const WHATSAPP = "+85263539560";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP.replace(/\D/g, "")}`;

// ─── Image CDN URLs ─────────────────────────────────────────────────────────
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663430184068/mzJiD9hwnB9dUk6SFj7Lgd/hero-movers-MAuLjKGSYKm9Ar29ZVR4o5.webp";
const PACKING_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663430184068/mzJiD9hwnB9dUk6SFj7Lgd/packing-service-mw82wHpngF2FoQzVasHbXP.webp";
const OFFICE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663430184068/mzJiD9hwnB9dUk6SFj7Lgd/office-move-XHP6ZCXXnFQ5Sswsrn9GHX.webp";
const HOME_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663430184068/mzJiD9hwnB9dUk6SFj7Lgd/home-move-RuQLuRA4YSboku4tNY89zw.webp";

// ─── Scroll animation hook ──────────────────────────────────────────────────
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── Counter animation hook ─────────────────────────────────────────────────
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

// ─── Stat Item ──────────────────────────────────────────────────────────────
function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {count}
        {suffix}
      </div>
      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "oklch(0.65 0.01 240)",
          marginTop: "0.25rem",
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "oklch(0.10 0.025 240 / 0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(0.28 0.02 240)" : "none",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.5rem" }}>
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "2.25rem",
              height: "2.25rem",
              background: "oklch(0.65 0.22 40)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Truck size={18} color="oklch(0.10 0.01 240)" strokeWidth={2.5} />
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "1.25rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "white",
                lineHeight: 1,
              }}
            >
              A1 Movers
            </div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "oklch(0.65 0.22 40)",
                lineHeight: 1,
              }}
            >
              H.K
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "oklch(0.80 0.005 240)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.65 0.22 40)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.80 0.005 240)")}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
            style={{ padding: "0.6rem 1.25rem", fontSize: "0.75rem", textDecoration: "none" }}
          >
            <MessageCircle size={14} />
            Book Now
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "white", background: "none", border: "none", padding: "0.5rem" }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: "oklch(0.10 0.025 240)",
            borderTop: "1px solid oklch(0.28 0.02 240)",
            padding: "1.5rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "oklch(0.80 0.005 240)",
                textDecoration: "none",
                padding: "0.75rem 0",
                borderBottom: "1px solid oklch(0.22 0.02 240)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
            style={{ marginTop: "1rem", display: "inline-flex", textDecoration: "none" }}
          >
            <MessageCircle size={14} />
            Book Now on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, oklch(0.08 0.025 240 / 0.92) 0%, oklch(0.08 0.025 240 / 0.75) 55%, oklch(0.08 0.025 240 / 0.4) 100%)",
        }}
      />
      {/* Orange accent bar on left */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "20%",
          bottom: "20%",
          width: "4px",
          background: "oklch(0.65 0.22 40)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "680px" }}>
          <div className="section-label" style={{ marginBottom: "1.5rem" }}>
            Hong Kong's Trusted Movers
          </div>

          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              lineHeight: 0.95,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: "white",
              marginBottom: "1.5rem",
            }}
          >
            A1 Movers
            <br />
            <span style={{ color: "oklch(0.65 0.22 40)" }}>H.K</span>
            <br />
            Is Here For You
          </h1>

          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 400,
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "oklch(0.85 0.005 240)",
              marginBottom: "2.5rem",
              maxWidth: "520px",
            }}
          >
            Experienced, reliable, and multilingual movers serving all of Hong Kong.
            Residential and commercial relocations — handled with care, every time.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange"
              style={{ fontSize: "0.9rem", padding: "1rem 2rem", textDecoration: "none" }}
            >
              <MessageCircle size={18} />
              Book on WhatsApp
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "white",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                borderBottom: "1px solid oklch(0.65 0.22 40)",
                paddingBottom: "2px",
              }}
            >
              Get a Free Quote <ChevronRight size={14} />
            </a>
          </div>

          {/* Quick info badges */}
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "3rem", flexWrap: "wrap" }}>
            {[
              { icon: <Clock size={14} />, text: "7 Days a Week, 7am–11:45pm" },
              { icon: <MapPin size={14} />, text: "All Hong Kong by Road" },
              { icon: <Phone size={14} />, text: "+852 6353 9560" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.8rem",
                  color: "oklch(0.75 0.005 240)",
                }}
              >
                <span style={{ color: "oklch(0.65 0.22 40)" }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom diagonal cut */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "oklch(0.12 0.025 240)",
          clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
        }}
      />
    </section>
  );
}

// ─── Stats Section ────────────────────────────────────────────────────────────
function StatsSection() {
  const ref = useFadeUp();
  return (
    <section style={{ background: "oklch(0.12 0.025 240)", padding: "4rem 0" }}>
      <div className="container">
        <div ref={ref} className="fade-up" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "2rem" }}>
          <StatItem value={500} suffix="+" label="Successful Moves" />
          <StatItem value={7} suffix="" label="Days a Week" />
          <StatItem value={5} suffix="" label="Languages Spoken" />
          <StatItem value={100} suffix="%" label="Satisfaction Guarantee" />
        </div>
      </div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
function AboutSection() {
  const ref1 = useFadeUp();
  const ref2 = useFadeUp();
  return (
    <section id="about" style={{ background: "oklch(0.14 0.025 240)", padding: "6rem 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Text */}
          <div ref={ref1} className="fade-up">
            <div className="section-label" style={{ marginBottom: "1.25rem" }}>
              About Us
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1,
                textTransform: "uppercase",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Experienced &<br />
              <span style={{ color: "oklch(0.65 0.22 40)" }}>Reliable</span>
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "oklch(0.75 0.005 240)",
                marginBottom: "1.25rem",
              }}
            >
              Our employees are experienced handymen with hundreds of successful moves behind them.
              They are reliable, trustworthy, and multilingual — speaking Chinese, English, Hindi,
              Urdu, and Bengali — so we can serve the full diversity of Hong Kong.
            </p>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "oklch(0.75 0.005 240)",
                marginBottom: "2rem",
              }}
            >
              We provide personalized relocation services for individuals and businesses. A move is
              often a stressful step — whether it's home or office. That's why we offer specialized
              services to make your move as easy and successful as possible: packing, wrapping, and
              extra protection for fragile or valuable items.
            </p>

            {/* Languages */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["Chinese", "English", "Hindi", "Urdu", "Bengali"].map((lang) => (
                <span
                  key={lang}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "oklch(0.65 0.22 40)",
                    border: "1px solid oklch(0.65 0.22 40 / 0.4)",
                    padding: "0.3rem 0.75rem",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={ref2} className="fade-up" style={{ position: "relative" }}>
            <img
              src={HOME_IMG}
              alt="A1 Movers team helping a family move into their new Hong Kong home"
              style={{
                width: "100%",
                height: "420px",
                objectFit: "cover",
              }}
            />
            {/* Orange corner accent */}
            <div
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "-12px",
                width: "80px",
                height: "80px",
                border: "3px solid oklch(0.65 0.22 40)",
                zIndex: -1,
              }}
            />
            {/* Guarantee badge */}
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "-1.5rem",
                background: "oklch(0.65 0.22 40)",
                padding: "1rem 1.25rem",
                maxWidth: "180px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  color: "oklch(0.10 0.01 240)",
                  lineHeight: 1.2,
                }}
              >
                Our Guarantee
              </div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.75rem",
                  color: "oklch(0.15 0.01 240)",
                  marginTop: "0.25rem",
                  lineHeight: 1.4,
                }}
              >
                Smooth move, no trouble
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection() {
  const titleRef = useFadeUp();

  const services = [
    {
      icon: <HomeIcon size={28} />,
      title: "Residential Moving",
      description:
        "Full home relocation services — from studio apartments to large family homes. We handle every item with care.",
      image: HOME_IMG,
    },
    {
      icon: <Building2 size={28} />,
      title: "Office & Commercial",
      description:
        "Efficient office relocations with minimal downtime. We move desks, equipment, and everything in between.",
      image: OFFICE_IMG,
    },
    {
      icon: <Package size={28} />,
      title: "Packing & Wrapping",
      description:
        "Professional packing with bubble wrap, stretch film, and custom protection for fragile and valuable items.",
      image: PACKING_IMG,
    },
    {
      icon: <Truck size={28} />,
      title: "Furniture Transport",
      description:
        "Safe transport of large furniture, appliances, and heavy items anywhere across Hong Kong.",
    },
    {
      icon: <Boxes size={28} />,
      title: "Fragile Item Care",
      description:
        "Specialized handling for artwork, antiques, electronics, and other delicate possessions.",
    },
    {
      icon: <Wrench size={28} />,
      title: "Assembly & Disassembly",
      description:
        "We disassemble furniture before the move and reassemble it at your new location — no extra hassle.",
    },
  ];

  return (
    <section id="services" style={{ background: "oklch(0.12 0.025 240)", padding: "6rem 0" }}>
      <div className="container">
        <div ref={titleRef} className="fade-up" style={{ marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            What We Do
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1,
              textTransform: "uppercase",
              color: "white",
            }}
          >
            Our <span style={{ color: "oklch(0.65 0.22 40)" }}>Services</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: { icon: React.ReactNode; title: string; description: string; image?: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="fade-up service-card" style={{ padding: "2rem" }}>
      {service.image && (
        <div style={{ marginBottom: "1.25rem", overflow: "hidden", height: "160px" }}>
          <img
            src={service.image}
            alt={service.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      )}
      <div style={{ color: "oklch(0.65 0.22 40)", marginBottom: "1rem" }}>{service.icon}</div>
      <h3
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "1.25rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "white",
          marginBottom: "0.75rem",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          color: "oklch(0.70 0.005 240)",
        }}
      >
        {service.description}
      </p>
    </div>
  );
}

// ─── Why Us Section ───────────────────────────────────────────────────────────
function WhyUsSection() {
  const titleRef = useFadeUp();

  const reasons = [
    {
      icon: <ShieldCheck size={24} />,
      title: "Guaranteed Smooth Move",
      desc: "By choosing us you can be sure your move will go smoothly without any trouble.",
    },
    {
      icon: <Users size={24} />,
      title: "Multilingual Team",
      desc: "Our crew speaks Chinese, English, Hindi, Urdu, and Bengali — we communicate clearly with every client.",
    },
    {
      icon: <Star size={24} />,
      title: "Hundreds of Moves",
      desc: "Experienced handymen with a proven track record of successful relocations across Hong Kong.",
    },
    {
      icon: <Clock size={24} />,
      title: "7 Days a Week",
      desc: "Available Monday to Sunday, 7:00 am to 11:45 pm — we work around your schedule.",
    },
    {
      icon: <MapPin size={24} />,
      title: "All of Hong Kong",
      desc: "We serve the entire Hong Kong territory by road — no area is too far.",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Free Quick Quote",
      desc: "Contact us on WhatsApp for a fast, no-obligation quote tailored to your move.",
    },
  ];

  return (
    <section
      id="why-us"
      style={{
        background: "oklch(0.10 0.025 240)",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative large number */}
      <div
        style={{
          position: "absolute",
          right: "-2rem",
          top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "20rem",
          color: "oklch(0.65 0.22 40 / 0.04)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        A1
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div ref={titleRef} className="fade-up" style={{ marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ marginBottom: "1rem" }}>
            Why Choose Us
          </div>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1,
              textTransform: "uppercase",
              color: "white",
            }}
          >
            The A1 <span style={{ color: "oklch(0.65 0.22 40)" }}>Difference</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {reasons.map((reason, i) => (
            <ReasonCard key={i} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  index,
}: {
  reason: { icon: React.ReactNode; title: string; desc: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="fade-up"
      style={{
        background: "oklch(0.14 0.025 240)",
        border: "1px solid oklch(0.22 0.02 240)",
        padding: "1.75rem",
        transition: "border-color 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.65 0.22 40 / 0.5)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "oklch(0.22 0.02 240)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: "3rem",
          height: "3rem",
          background: "oklch(0.65 0.22 40 / 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.25rem",
          color: "oklch(0.65 0.22 40)",
        }}
      >
        {reason.icon}
      </div>
      <h3
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: "white",
          marginBottom: "0.6rem",
        }}
      >
        {reason.title}
      </h3>
      <p
        style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "0.875rem",
          lineHeight: 1.7,
          color: "oklch(0.65 0.005 240)",
        }}
      >
        {reason.desc}
      </p>
    </div>
  );
}

// ─── Quote Form Section ───────────────────────────────────────────────────────
function QuoteSection() {
  const titleRef = useFadeUp();
  const formRef = useFadeUp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    currentAddress: "",
    newAddress: "",
    rooms: "",
    moveDate: "",
    liftService: "",
    parking: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `*New Quote Request — A1 Movers H.K*\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `WhatsApp: ${formData.whatsapp}\n` +
        `Current Address: ${formData.currentAddress}\n` +
        `New Address: ${formData.newAddress}\n` +
        `Rooms: ${formData.rooms}\n` +
        `Move Date: ${formData.moveDate}\n` +
        `Lift Service: ${formData.liftService}\n` +
        `Parking: ${formData.parking}\n` +
        `Details: ${formData.details}`
    );
    window.open(`https://wa.me/85263539560?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        background: "oklch(0.14 0.025 240)",
        padding: "6rem 0",
        position: "relative",
      }}
    >
      {/* Top diagonal */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          background: "oklch(0.10 0.025 240)",
          clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left info */}
          <div ref={titleRef} className="fade-up">
            <div className="section-label" style={{ marginBottom: "1rem" }}>
              Get a Free Quote
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1,
                textTransform: "uppercase",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Schedule Your <span style={{ color: "oklch(0.65 0.22 40)" }}>Move</span>
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "oklch(0.70 0.005 240)",
                marginBottom: "2rem",
              }}
            >
              We strive to be in constant communication with our customers until the job is done.
              Fill in the form and we'll send you a quote directly on WhatsApp.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  icon: <MessageCircle size={18} />,
                  label: "WhatsApp",
                  value: "+852 6353 9560",
                  href: WHATSAPP_LINK,
                },
                {
                  icon: <MapPin size={18} />,
                  label: "Service Area",
                  value: "Whole Hong Kong (by road)",
                },
                {
                  icon: <Clock size={18} />,
                  label: "Hours",
                  value: "Mon–Sun, 7:00 am – 11:45 pm",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "oklch(0.65 0.22 40 / 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "oklch(0.65 0.22 40)",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.7rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "oklch(0.55 0.01 240)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: "0.95rem",
                          color: "oklch(0.65 0.22 40)",
                          textDecoration: "none",
                          fontWeight: 500,
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: "0.95rem",
                          color: "white",
                          fontWeight: 400,
                        }}
                      >
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{ marginTop: "2rem" }}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "oklch(0.65 0.22 40)",
                  textDecoration: "none",
                  border: "1px solid oklch(0.65 0.22 40 / 0.4)",
                  padding: "0.5rem 1rem",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "oklch(0.65 0.22 40 / 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                Follow Us on Facebook
              </a>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="fade-up">
            {submitted ? (
              <div
                style={{
                  background: "oklch(0.16 0.025 240)",
                  border: "1px solid oklch(0.65 0.22 40 / 0.4)",
                  padding: "3rem",
                  textAlign: "center",
                }}
              >
                <CheckCircle size={48} color="oklch(0.65 0.22 40)" style={{ margin: "0 auto 1.5rem" }} />
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.75rem",
                    textTransform: "uppercase",
                    color: "white",
                    marginBottom: "0.75rem",
                  }}
                >
                  Quote Sent!
                </h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", color: "oklch(0.70 0.005 240)", marginBottom: "1.5rem" }}>
                  Your quote request has been opened in WhatsApp. We'll get back to you shortly!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-orange"
                  style={{ border: "none" }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "oklch(0.16 0.025 240)",
                  border: "1px solid oklch(0.28 0.02 240)",
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "oklch(0.65 0.22 40)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Get a Quote for Your Move
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Phone *</label>
                    <input
                      className="form-input"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+852 XXXX XXXX"
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>WhatsApp</label>
                    <input
                      className="form-input"
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+852 XXXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Current Address *</label>
                  <input
                    className="form-input"
                    type="text"
                    name="currentAddress"
                    value={formData.currentAddress}
                    onChange={handleChange}
                    placeholder="Street, District, Hong Kong"
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>New Address *</label>
                  <input
                    className="form-input"
                    type="text"
                    name="newAddress"
                    value={formData.newAddress}
                    onChange={handleChange}
                    placeholder="Street, District, Hong Kong"
                    required
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Number of Rooms</label>
                    <input
                      className="form-input"
                      type="text"
                      name="rooms"
                      value={formData.rooms}
                      onChange={handleChange}
                      placeholder="e.g. 2 bedrooms"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Date of Move *</label>
                    <input
                      className="form-input"
                      type="date"
                      name="moveDate"
                      value={formData.moveDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Lift Service (mention stairs if any)</label>
                  <input
                    className="form-input"
                    type="text"
                    name="liftService"
                    value={formData.liftService}
                    onChange={handleChange}
                    placeholder="e.g. Lift available, 3 flights of stairs"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Parking Details</label>
                  <input
                    className="form-input"
                    type="text"
                    name="parking"
                    value={formData.parking}
                    onChange={handleChange}
                    placeholder="e.g. Street parking available"
                  />
                </div>

                <div>
                  <label style={labelStyle}>Details or Concerns</label>
                  <textarea
                    className="form-input"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Describe items to be moved, special requirements, or send photos/videos via WhatsApp"
                    rows={4}
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button type="submit" className="btn-orange" style={{ border: "none", justifyContent: "center", fontSize: "0.9rem" }}>
                  <MessageCircle size={16} />
                  Get Quote via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 600,
  fontSize: "0.65rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "oklch(0.60 0.01 240)",
  marginBottom: "0.4rem",
};

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        background: "oklch(0.08 0.02 240)",
        borderTop: "1px solid oklch(0.22 0.02 240)",
        padding: "3rem 0 2rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  background: "oklch(0.65 0.22 40)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Truck size={14} color="oklch(0.10 0.01 240)" strokeWidth={2.5} />
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "white",
                }}
              >
                A1 Movers H.K
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "oklch(0.55 0.01 240)",
              }}
            >
              Professional moving services across all of Hong Kong. Reliable, trustworthy, and multilingual.
            </p>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "oklch(0.65 0.22 40)",
                marginBottom: "1rem",
              }}
            >
              Services
            </div>
            {["Residential Moving", "Office Relocation", "Packing & Wrapping", "Furniture Transport", "Fragile Item Care"].map(
              (s) => (
                <div
                  key={s}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.85rem",
                    color: "oklch(0.55 0.01 240)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {s}
                </div>
              )
            )}
          </div>

          {/* Hours */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "oklch(0.65 0.22 40)",
                marginBottom: "1rem",
              }}
            >
              Hours
            </div>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div
                key={day}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.8rem",
                  color: "oklch(0.55 0.01 240)",
                  marginBottom: "0.3rem",
                  gap: "1rem",
                }}
              >
                <span>{day}</span>
                <span>7:00 am – 11:45 pm</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "oklch(0.65 0.22 40)",
                marginBottom: "1rem",
              }}
            >
              Contact
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange"
              style={{ textDecoration: "none", fontSize: "0.8rem", padding: "0.75rem 1.25rem", marginBottom: "1rem", display: "inline-flex" }}
            >
              <MessageCircle size={14} />
              +852 6353 9560
            </a>
            <div
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.8rem",
                color: "oklch(0.50 0.01 240)",
                marginTop: "0.75rem",
              }}
            >
              <MapPin size={12} style={{ display: "inline", marginRight: "0.3rem", color: "oklch(0.65 0.22 40)" }} />
              Whole Hong Kong (by road)
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid oklch(0.18 0.02 240)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.75rem",
              color: "oklch(0.40 0.01 240)",
            }}
          >
            © {new Date().getFullYear()} A1 Movers H.K — All Rights Reserved.
          </div>
          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "oklch(0.35 0.01 240)",
            }}
          >
            Professional Moving Services · Hong Kong
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp Float Button ────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      title="Chat on WhatsApp"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "oklch(0.12 0.025 240)" }}>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <QuoteSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
