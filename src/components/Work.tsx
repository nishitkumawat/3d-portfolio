import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import logosData from "../data/logosData";

const projects = [
  {
    title: "EZRun",
    category: "IoT Control App",
    tools: "Flutter, Django, Authentication, IoT Device Control",
    image: "/images/ezrun.png",
    link: "https://ezrun.in",
  },
  {
    title: "MachMate.in",
    category: "Machine Marketplace Platform",
    tools: "Django, React, Tailwind CSS, Marketplace Workflows",
    image: "/images/machmate.png",
    link: "https://machmate.in",
  },
  {
    title: "BrandFlow",
    category: "Business Management Platform",
    tools: "React, Django REST, Tailwind CSS, PostgreSQL",
    image: "/images/brandflow.png",
  },
  {
    title: "WorkFlow",
    category: "Employee Chat Management",
    tools: "Java, Swing, Chat-like Interface, Employee Management",
    image: "/images/workflow.png",
  },
  {
    title: "Speed Air Booking",
    category: "Flight Booking Application",
    tools: "Java, Swing, Search & Booking, Reservation Management",
    image: "/images/speedair.png",
  },
  {
    title: "FINTRACK",
    category: "Business Finance Management",
    tools: "Django, Bootstrap, PostgreSQL, Inventory & Billing",
    image: "/images/fintrack.png",
  },
];

/* Show 3 logos as preview on the home page */
const featuredLogos = logosData.slice(0, 3);

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">

        {/* ── Projects Carousel ─────────────────────────────── */}
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="disable"
                            className="carousel-visit-link"
                          >
                            Visit <MdArrowOutward />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>

        {/* ── Logos Sub-section ─────────────────────────────── */}
        <div className="logos-subsection" id="logos">
          <div className="logos-sub-header">
            <div>
              <h2 className="logos-sub-title">
                My <span>Logos</span>
              </h2>
              <p className="logos-sub-subtitle">
                Brand identities crafted for businesses & personal concepts.
              </p>
            </div>
            <div className="logos-type-legend">
              <span className="legend-dot legend-dot--business" />
              <span className="legend-label">Business</span>
              <span className="legend-dot legend-dot--normal" />
              <span className="legend-label">Personal</span>
            </div>
          </div>

          {/* 3 preview cards — image only, no labels */}
          <div className="logos-preview-grid">
            {featuredLogos.map((logo) => (
              <div
                key={logo.id}
                className={`logo-preview-card logo-preview-card--${logo.type}`}
              >
                <div className="logo-preview-img-wrap">
                  <img src={logo.image} alt="" />
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="logos-cta">
            <button
              className="logos-view-all-btn"
              data-cursor="disable"
              onClick={() => navigate("/logos")}
            >
              <span>View My Work</span>
              <MdArrowOutward />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
