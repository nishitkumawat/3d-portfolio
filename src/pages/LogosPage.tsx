import { useState } from "react";
import logosData from "../data/logosData";
import { MdArrowBack, MdArrowOutward } from "react-icons/md";
import "./LogosPage.css";

type LogoFilter = "all" | "business" | "normal";

const websites = [
  {
    title: "EZRun",
    category: "IoT Control App",
    description:
      "A Flutter-based IoT control application with Django backend, real-time device control, and secure authentication.",
    tools: ["Flutter", "Django", "IoT", "Authentication"],
    image: "/images/ezrun.png",
    link: "https://ezrun.in",
  },
  {
    title: "MachMate.in",
    category: "Machine Marketplace Platform",
    description:
      "A full-stack machine marketplace built with Django and React, enabling seamless industrial buying and selling workflows.",
    tools: ["Django", "React", "Tailwind CSS", "Marketplace"],
    image: "/images/machmate.png",
    link: "https://machmate.in",
  },
  {
    title: "Shree Gayatri Industries",
    category: "Industrial Products Website",
    description:
      "A professional website for an industrial manufacturing company, showcasing their products, services, and brand presence online.",
    tools: ["Web Design", "Industrial", "Product Showcase"],
    image: "/images/shreegayatri.png",
    link: "https://www.shreegayatri-industries.com/",
  },
];

const LogosPage = () => {
  const [logoFilter, setLogoFilter] = useState<LogoFilter>("all");

  const filteredLogos =
    logoFilter === "all"
      ? logosData
      : logosData.filter((l) => l.type === logoFilter);

  const businessCount = logosData.filter((l) => l.type === "business").length;
  const normalCount = logosData.filter((l) => l.type === "normal").length;

  return (
    <div className="wp-page">

      {/* ── Sticky Header ── */}
      <header className="wp-header">
        <button
          className="wp-back-btn"
          onClick={() => { window.location.href = "/"; }}
          data-cursor="disable"
          aria-label="Back to home"
        >
          <MdArrowBack />
          <span>Back</span>
        </button>
        <span className="wp-brand">NK</span>
        <span className="wp-label">Full Portfolio</span>
      </header>

      {/* ══════════════════════════════════════
          SECTION 1 — Websites
      ══════════════════════════════════════ */}
      <section className="wp-section">
        <div className="wp-section-inner">
          <div className="wp-section-heading">
            <p className="wp-eyebrow">Live Projects</p>
            <h2>My <span>Websites</span></h2>
          </div>

          <div className="wp-sites-grid">
            {websites.map((site) => (
              <a
                key={site.title}
                href={site.link}
                target="_blank"
                rel="noreferrer"
                className="wp-site-card"
                data-cursor="disable"
              >
                {/* Glow accent */}
                <div className="wp-site-card__glow" />

                {/* Screenshot */}
                <div className="wp-site-card__img-wrap">
                  <img src={site.image} alt={site.title} />
                  <div className="wp-site-card__overlay">
                    <span className="wp-site-card__visit-icon">
                      <MdArrowOutward />
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="wp-site-card__body">
                  <div className="wp-site-card__title-row">
                    <h3>{site.title}</h3>
                    <MdArrowOutward className="wp-site-card__arrow" />
                  </div>
                  <p className="wp-site-card__category">{site.category}</p>
                  <p className="wp-site-card__desc">{site.description}</p>
                  <div className="wp-site-card__tools">
                    {site.tools.map((t) => (
                      <span key={t} className="wp-tool-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — Logos
      ══════════════════════════════════════ */}
      <section className="wp-section wp-section--logos">
        <div className="wp-section-inner">
          <div className="wp-section-heading">
            <p className="wp-eyebrow">Brand Identity</p>
            <h2>My <span>Logos</span></h2>
            <p className="wp-section-sub">
              {logosData.length} logos crafted — {businessCount} business &amp; {normalCount} personal.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="wp-logo-filters">
            {(["all", "business", "normal"] as LogoFilter[]).map((f) => (
              <button
                key={f}
                className={`wp-filter-btn wp-filter-btn--${f} ${logoFilter === f ? "wp-filter-btn--active" : ""}`}
                onClick={() => setLogoFilter(f)}
                data-cursor="disable"
              >
                {f === "all"
                  ? `All (${logosData.length})`
                  : f === "business"
                    ? `Business (${businessCount})`
                    : `Personal (${normalCount})`}
              </button>
            ))}
          </div>

          {/* Logo grid — image only, no labels */}
          <div className="wp-logo-grid">
            {filteredLogos.map((logo) => (
              <div
                key={logo.id}
                className={`wp-logo-tile wp-logo-tile--${logo.type}`}
              >
                <img src={logo.image} alt="" loading="lazy" />
              </div>
            ))}
          </div>

          {filteredLogos.length === 0 && (
            <p className="wp-empty">Nothing here yet.</p>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="wp-footer">
        <p>
          Got a project in mind?{" "}
          <a href="/#contact" data-cursor="disable">
            Let's build it <MdArrowOutward />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default LogosPage;
