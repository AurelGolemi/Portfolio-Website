"use client";
import { useState } from "react";
import Image from "next/image";
import ContactForm from "./contactForm";
import React from "react";

type ProjectType = "personal" | "professional";

type ProjectTag = {
  label: string;
  className: string;
};

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  type: ProjectType;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  links: ProjectLink[];
};

function ProjectsSlideshow() {
  const projects: Project[] = [
    {
      type: "personal",
      imageSrc: "/projects/street-style.jpg",
      imageAlt: "Style Accord Landing Page Screenshot",
      title: "Street Style (Full-Stack E-Commerce Demo)",
      description:
        "A full-stack e-commerce demo built with Next.js, TypeScript, Tailwind CSS, and Supabase, featuring product browsing, dynamic content pages, and form validation with React Hook Form and Zod. The most substantial engineering challenge was diagnosing and resolving a stale-UI bug caused by three parallel authentication systems that weren't communicating state correctly — tracing the issue across components, consolidating auth logic into a single source of truth, and eliminating the inconsistent session state that resulted. Deployed on Vercel with a production/preview promotion workflow.",
      tags: [
        {
          label: "NextJS",
          className: "px-3 py-1 bg-gray-800 text-gray-100 text-sm rounded-full",
        },
        {
          label: "React",
          className: "px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full",
        },
        {
          label: "Tailwind CSS",
          className: "px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",
        },
        {
          label: "TypeScript",
          className: "px-3 py-1 bg-blue-800 text-blue-100 text-sm rounded-full",
        },
        {
          label: "Vercel",
          className: "px-3 py-1 bg-gray-900 text-gray-100 text-sm rounded-full",
        },
        {
          label: "Supabase",
          className:
            "px-3 py-1 bg-green-900 text-green-100 text-sm rounded-full",
        },
        {
          label: "Node.js",
          className:
            "px-3 py-1 bg-green-100 text-green-900 text-sm rounded-full",
        },
      ],
      links: [
        { label: "View Live →", href: "https://street-style-iota.vercel.app/" },
        {
          label: "View Code →",
          href: "https://github.com/AurelGolemi/street-style",
        },
      ],
    },
    {
      type: "personal",
      imageSrc: "/projects/employ-track.png",
      imageAlt: "Employ Track - Job Application Tracker",
      title: "Employ Track (Full-Stack Job Application Tracker Demo)",
      description:
        "A full-stack job application tracker built with Next.js, React, TypeScript, Tailwind CSS, Neon PostgreSQL, Drizzle ORM, and Neon Auth, allowing users to securely manage job applications, monitor interview stages, and organize their job search through an intuitive dashboard. The most significant engineering challenge was designing a scalable authentication and data management workflow that kept user sessions, protected routes, and database operations synchronized while maintaining a responsive user experience. Deployed on Render as a production-ready application with a modular architecture and cloud-hosted database.",
      tags: [
        {
          label: "NextJS",
          className: "px-3 py-1 bg-gray-800 text-gray-100 text-sm rounded-full",
        },
        {
          label: "React",
          className: "px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full",
        },
        {
          label: "Tailwind CSS",
          className: "px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",
        },
        {
          label: "TypeScript",
          className: "px-3 py-1 bg-blue-800 text-blue-100 text-sm rounded-full",
        },
        {
          label: "Render",
          className: "px-3 py-1 bg-gray-100 text-gray-900 text-sm rounded-full",
        },
        {
          label: "Neon",
          className:
            "px-3 py-1 bg-cyan-900 text-cyan-100 text-sm rounded-full",
        },
        {
          label: "Node.js",
          className:
            "px-3 py-1 bg-green-100 text-green-900 text-sm rounded-full",
        },
      ],
      links: [
        { label: "View Live →", href: "https://employ-track-job-application-tracker.onrender.com" },
        {
          label: "View Code →",
          href: "https://github.com/AurelGolemi/employ-track-job-application-tracker",
        },
      ],
    },
    {
      type: "personal",
      imageSrc: "/projects/daily-tracker.PNG",
      imageAlt: "Daily Tracker Image",
      title: "Daily Tracker",
      description:
        "A task and habit-tracking web app built with React and Tailwind CSS, featuring task creation, progress tracking, and local state management across a fully responsive interface. Focused on clean component architecture and a usable, distraction-free UI for daily habit tracking.",
      tags: [
        {
          label: "HTML",
          className:
            "px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full",
        },
        {
          label: "CSS",
          className: "px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",
        },
        {
          label: "JavaScript",
          className:
            "px-3 py-1 bg-yellow-100 text-yellow-500 text-sm rounded-full",
        },
        {
          label: "React",
          className: "px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full",
        },
        {
          label: "Tailwind CSS",
          className:
            "px-3 py-1 bg-violet-100 text-violet-800 text-sm rounded-full",
        },
      ],
      links: [
        { label: "View Live →", href: "https://my-daily-tracker.netlify.app" },
        {
          label: "View Code →",
          href: "https://github.com/AurelGolemi/daily-tracker",
        },
      ],
    },
    {
      type: "professional",
      imageSrc: "/projects/athens-house-of-myths-image.jpeg",
      imageAlt: "Athens House of Myths Screenshot",
      title:
        "Athens House Of Myths - Production Website Enhancement (Internship)",
      description:
        "Enhanced navigation, page architecture, and cross-page UX consistency on a live production site during an internship at Leon Architect Group. Implemented custom CSS extending Elementor's default styling, improved responsiveness, and optimized URL structure across multiple room pages.",
      tags: [
        {
          label: "WordPress",
          className: "px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",
        },
        {
          label: "Elementor",
          className: "px-3 py-1 bg-pink-100 text-pink-500 text-sm rounded-full",
        },
      ],
      links: [
        { label: "View Live →", href: "https://athenshouseofmyths.com/" },
      ],
    },
    {
      type: "professional",
      imageSrc: "/projects/leon-architect-group.webp",
      imageAlt: "Leon Architect Group Screenshot",
      title: "Leon Architect Group – Homepage & Layout Revamp (Internship)",
      description:
        'Redesigned homepage layout and site structure using Elementor and custom code, corrected URL structure for SEO clarity, and reworked a custom in-house plugin ("Vortex") including a shortcode-based access flow redesign. Built and integrated an additional project page while maintaining visual consistency with the existing site.',
      tags: [
        {
          label: "WordPress",
          className: "px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full",
        },
        {
          label: "Elementor",
          className: "px-3 py-1 bg-pink-100 text-pink-500 text-sm rounded-full",
        },
        {
          label: "Hostinger",
          className:
            "px-3 py-1 bg-purple-100 text-purple-500 text-sm rounded-full",
        },
        {
          label: "PHP",
          className:
            "px-3 py-1 bg-purple-100 text-purple-500 text-sm rounded-full",
        },
      ],
      links: [
        { label: "View Live →", href: "https://leonarchitectgroup.com/" },
      ],
    },
    {
      type: "professional",
      imageSrc: "/projects/mitriki-agkalia.jpg",
      imageAlt: "Mitriki Agkalia Screenshot",
      title: "Mitriki Agkalia (Internship)",
      description:
        "A React and TypeScript informational website built for a maternal support initiative. Bootstrapped with Lovable, then fully migrated into a local development environment for continued build-out — including component restructuring, responsive layout work, and long-term maintainability improvements beyond the AI-generated starting point.",
      tags: [
        {
          label: "React",
          className: "px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full",
        },
        {
          label: "TypeScript",
          className: "px-3 py-1 bg-blue-800 text-blue-100 text-sm rounded-full",
        },
        {
          label: "Tailwind CSS",
          className:
            "px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full",
        },
        {
          label: "Hostinger",
          className:
            "px-3 py-1 bg-purple-100 text-purple-500 text-sm rounded-full",
        },
      ],
      links: [{ label: "View Live →", href: "https://mitrikiagkalia.gr/" }],
    },
    {
      type: "professional",
      imageSrc: "/projects/bio-resonance.jpeg",
      imageAlt: "BioResonance Screenshot",
      title: "BioResonance (In Progress - Internship)",
      description:
        "A React and TypeScript landing site for a bioresonance therapy practice, bootstrapped with Lovable and extended locally with standard frontend tooling. Work has focused on layout structure, responsive design, and preparing the codebase for future feature additions and SEO improvements.",
      tags: [
        {
          label: "React",
          className: "px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full",
        },
        {
          label: "TypeScript",
          className: "px-3 py-1 bg-blue-800 text-blue-100 text-sm rounded-full",
        },
        {
          label: "Tailwind CSS",
          className:
            "px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full",
        },
        {
          label: "Netlify",
          className: "px-3 py-1 bg-cyan-800 text-cyan-100 text-sm rounded-full",
        },
      ],
      links: [
        { label: "View Live →", href: "https://bioresonance.netlify.app/" },
      ],
    },
  ];

  const [filter, setFilter] = useState<"all" | ProjectType>("all");
  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);
  const [index, setIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState<
    "left" | "right"
  >("right");
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>(
    {},
  );

  // Keep index valid when filter changes.
  React.useEffect(() => {
    setIndex(0);
    setTransitionDirection("right");
  }, [filter]);

  const active = filtered[index] ?? filtered[0];
  const imageHasError = active
    ? (imageErrorMap[active.imageSrc] ?? false)
    : false;

  const prev = () => {
    if (filtered.length === 0) return;
    setTransitionDirection("right");
    setIndex((i) => (i - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (filtered.length === 0) return;
    setTransitionDirection("left");
    setIndex((i) => (i + 1) % filtered.length);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {(
          [
            { key: "all" as const, label: "All" },
            { key: "personal" as const, label: "Personal" },
            { key: "professional" as const, label: "Professional" },
          ] as const
        ).map((t) => {
          const selected = filter === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setFilter(t.key)}
              className={
                selected
                  ? "px-4 py-2 rounded-full bg-blue-600 text-white shadow-md cursor-pointer transition-all duration-200"
                  : "px-4 py-2 rounded-full bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 cursor-pointer transition-all duration-200"
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white/80 border border-white">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 pointer-events-none" />

        <div className="relative p-4 sm:p-6">
          {/* Slide card */}
          {active ? (
            <div
              key={`${active.title}-${transitionDirection}`}
              className={`grid md:grid-cols-5 gap-6 items-start ${transitionDirection === "left" ? "slide-in-left" : "slide-in-right"}`}
            >
              <div className="md:col-span-2">
                <div className="h-56 sm:h-72 md:h-full rounded-xl overflow-hidden shadow-md relative bg-slate-100">
                  {!imageHasError ? (
                    <Image
                      key={active.imageSrc}
                      src={active.imageSrc}
                      alt={active.imageAlt}
                      width={768}
                      height={700}
                      priority={index === 1}
                      className="object-cover transition-transform duration-500"
                      onError={() =>
                        setImageErrorMap((current) => ({
                          ...current,
                          [active.imageSrc]: true,
                        }))
                      }
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 text-sm font-medium text-slate-600">
                      Image unavailable
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                  <div className="absolute left-3 top-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900">
                      {active.type === "personal"
                        ? "Personal Project"
                        : "Professional Project"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-900 leading-tight mb-3">
                      {active.title}
                    </h4>
                    <p className="text-gray-700 mb-5 leading-relaxed">
                      {active.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {active.tags.map((tag) => (
                    <span key={tag.label} className={tag.className}>
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {active.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-medium cursor-pointer transition-colors duration-200"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-10 text-center text-gray-600">
              No projects found.
            </div>
          )}

          {/* Controls */}
          {filtered.length > 1 && (
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous project"
                  className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-sm flex items-center justify-center cursor-pointer transition-all duration-200"
                >
                  <span className="text-xl leading-none">‹</span>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next project"
                  className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 shadow-sm flex items-center justify-center cursor-pointer transition-all duration-200"
                >
                  <span className="text-xl leading-none">›</span>
                </button>
              </div>

              <div className="flex items-center justify-center sm:justify-end gap-2">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to project ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={
                      i === index
                        ? "w-3.5 h-3.5 rounded-full bg-blue-600 shadow cursor-pointer"
                        : "w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer"
                    }
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Keyboard support */}
      <div className="sr-only" aria-live="polite">
        {active?.title}
      </div>
    </div>
  );
}

export default function Home() {
  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  console.log("Modal state:", isContactModalOpen);

  // Debug function
  const handleGetInTouchClick = () => {
    console.log("Get In Touch clicked!");
    setIsContactModalOpen(true);
    console.log("Modal should be open now");
  };

  // Email function
  const to = "golemiaurel68@gmail.com";
  const subject = "Hello";
  const body = "Hi — write your message here";

  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailWeb = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailApp = `googlegmail://co?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const androidIntent = `intent://compose?to=${encodeURIComponent(to)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}#Intent;scheme=mailto;package=com.google.android.gm;end`;

  function openEmail() {
    const ua = navigator.userAgent || "";
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    if (isAndroid) {
      // Try Android intent (prefer Gmail app). Fallback to Gmail web after short delay.
      window.location.href = androidIntent;
      setTimeout(() => window.open(gmailWeb, "_blank", "noopener"), 700);
      return;
    }

    if (isIOS) {
      // Try Gmail app scheme; fallback to mailto if app not installed
      window.location.href = gmailApp;
      setTimeout(() => (window.location.href = mailto), 700);
      return;
    }

    // Desktop: open Gmail web in a new tab
    window.open(gmailWeb, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <nav className="max-w-6xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <div className="text-xl font-bold text-gray-900">Aurel Golemi</div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("profile")}
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Profile
              </button>
              <button
                onClick={() => scrollToSection("contact-me")}
                className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Contact Me
              </button>
            </div>
            {/* Action Buttons */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/AurelGolemi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
              >
                Hire Me
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 min-h-screen flex items-center overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto text-center z-10">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Available for Jobs
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {"Hi, I'm"} <span className="bg-clip-text">Aurel Golemi</span>
            </h1>
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-xl md:text-2xl text-gray-900 leading-relaxed mb-6">
                {`I'm a full-stack developer with a foundation in `}{" "}
                <span className="font-semibold">HTML, CSS, and JavaScript</span>
                , and a focus on{" "}
                <span className="font-semibold">Next.js, TypeScript</span>, and{" "}
                <span className="font-semibold">PostgreSQL</span> for building
                modern full-stack applications.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-100 shadow-lg hover:shadow-xl hover:scale-95 cursor-pointer"
              >
                View My Work
              </button>
              <a
                href="/Aurel-Golemi-CV.pdf"
                download="Aurel-Golemi-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-700 hover:text-gray-700 transition-all duration-100 text-center hover:shadow-lg cursor-pointer"
              >
                Download Resume
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-blue-50"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              About Me
            </h2>
            <div className="text-base md:text-lg text-gray-600 leading-relaxed space-y-4 text-left">
              <p>
                {`I'm developing growing depth in backend engineering — database
                    design, ORMs, and authentication systems — alongside frontend work
                    in React and Tailwind CSS.`}
              </p>
              <p>
                {`My path into software started with frontend and WordPress work,
                    including a technical internship where I handled everything from
                    custom Elementor development to IT support and hardware
                    troubleshooting. Since then I've built and shipped full-stack
                    projects independently: an e-commerce platform with Supabase-backed
                    auth, and a job application tracker built specifically to deepen my
                    backend skills using Neon and Drizzle ORM rather than a managed BaaS.`}
              </p>
              <p>
                {`I use AI tools deliberately as part of my workflow — for speed, not
                    as a substitute for understanding. I can explain and defend every
                    architectural decision in my projects, and I'm continuing to build
                    depth in data structures and algorithms to strengthen the
                    fundamentals underneath the frameworks.`}
              </p>
              <p className="font-medium text-gray-800">
                Currently seeking junior software development or full-stack
                roles where I can keep building that depth on real problems.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo side */}
              <div className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  {/* Replace with your actual image */}
                  <Image
                    src="/Aurel_Golemi_New.jpg"
                    alt="Aurel Golemi"
                    width={700}
                    height={700}
                  />
                  {/* If you don't have a photo yet, use this placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-8xl font-bold">AG</span>
                  </div>
                </div>

                {/* Decorative border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-300 to-purple-300 rounded-2xl -z-10 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>

              {/* Content side */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                    Full-Stack Developer - Front-End Leaning
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Building the web, one component at a time
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I build full-stack web applications with Next.js,
                    TypeScript, and PostgreSQL — from responsive interfaces to
                    the databases and auth systems behind them.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">7+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">
                      10+
                    </div>
                    <div className="text-sm text-gray-600">Technologies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-600">3</div>
                    <div className="text-sm text-gray-600">
                      Deployment Platforms
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://github.com/AurelGolemi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aurel-golemi-8518272b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/aurelgolemi2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6 text-pink-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Section */}
        <section
          id="profile"
          className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              My Profile
            </h2>

            {/* Skills Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                Technical Skills
              </h3>

              {/* Core Web Technologies */}
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Core Web Technologies
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="flex gap-2 justify-center mb-3">
                    {/* HTML Logo */}
                    <svg viewBox="0 0 452 520" className="w-10 h-10">
                      <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
                      <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
                      <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" />
                      <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
                    </svg>
                    {/* CSS Logo */}
                    <svg viewBox="0 0 452 520" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#264DE4" d="M71.357 460.819L30.272 0h451.456l-41.129 460.746L255.724 512z" />
                      <path fill="#2965F1" d="M405.388 431.408l35.148-393.73H256v435.146z" />
                      <path fill="#EBEBEB" d="M124.46 208.59l5.065 56.517H256V208.59zM119.419 150.715H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z" />
                      <path fill="#FFF" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z" />
                    </svg>
                    {/* JavaScript Logo */}
                    <svg viewBox="0 0 256 256" className="w-10 h-10">
                      <rect width="256" height="256" fill="#F7DF1E" />
                      <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">HTML, CSS & JavaScript</h4>
                  <p className="text-sm text-gray-700">HTML5, CSS3, JavaScript (ES6+), Responsive Design</p>
                </div>
              </div>

              {/* Frontend */}
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Frontend</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full">
                      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                      <g stroke="#61dafb" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">React</h4>
                  <p className="text-sm text-gray-700">Components & State Management</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg viewBox="0 0 180 180" className="w-full h-full">
                      <mask id="mask" height="180" width="180" y="0" x="0" maskUnits="userSpaceOnUse">
                        <circle fill="white" r="90" cy="90" cx="90" />
                      </mask>
                      <g mask="url(#mask)">
                        <circle fill="black" r="90" cy="90" cx="90" />
                        <path fill="url(#paint0_linear)" d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z" />
                        <path fill="url(#paint1_linear)" d="M115 54h12v72h-12z" />
                      </g>
                      <defs>
                        <linearGradient y2="143" x2="120.799" y1="54" x1="109" gradientUnits="userSpaceOnUse" id="paint0_linear">
                          <stop stopColor="white" />
                          <stop stopColor="white" stopOpacity="0" offset="1" />
                        </linearGradient>
                        <linearGradient y2="126" x2="121" y1="54" x1="121" gradientUnits="userSpaceOnUse" id="paint1_linear">
                          <stop stopColor="white" />
                          <stop stopColor="white" stopOpacity="0" offset="1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Next.js</h4>
                  <p className="text-sm text-gray-700">Server-Side Rendering & API Routes</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg viewBox="0 0 256 154" className="w-full h-full">
                      <defs>
                        <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient">
                          <stop stopColor="#2298BD" offset="0%" />
                          <stop stopColor="#0ED7B5" offset="100%" />
                        </linearGradient>
                      </defs>
                      <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#gradient)" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tailwind CSS</h4>
                  <p className="text-sm text-gray-700">Utility-First Styling</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                      <rect width="256" height="256" fill="#007ACC" />
                      <text x="75" y="225" fontFamily="Segoe UI, Arial, sans-serif" fontSize="150" fontWeight="bold" fill="#fff">TS</text>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">TypeScript</h4>
                  <p className="text-sm text-gray-700">Static Typing & Scalable Code</p>
                </div>
              </div>

              {/* Backend & Databases */}
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Backend & Databases</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg height="48" viewBox="3.58301931 1.90851839 24.83198069 28.09192829" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="#00d486"><path d="m16 30a2.151 2.151 0 0 1 -1.076-.288l-3.424-2.027c-.511-.286-.262-.387-.093-.446a6.828 6.828 0 0 0 1.549-.7.263.263 0 0 1 .255.019l2.631 1.563a.34.34 0 0 0 .318 0l10.26-5.922a.323.323 0 0 0 .157-.278v-11.846a.331.331 0 0 0 -.159-.283l-10.26-5.917a.323.323 0 0 0 -.317 0l-10.254 5.919a.33.33 0 0 0 -.162.281v11.841a.315.315 0 0 0 .161.274l2.814 1.624c1.525.762 2.459-.136 2.459-1.038v-11.691a.3.3 0 0 1 .3-.3h1.3a.3.3 0 0 1 .3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.389 4.389 0 0 1 -2.363-.642l-2.697-1.547a2.166 2.166 0 0 1 -1.076-1.872v-11.841a2.162 2.162 0 0 1 1.076-1.875l10.261-5.924a2.246 2.246 0 0 1 2.156 0l10.26 5.924a2.165 2.165 0 0 1 1.077 1.87v11.846a2.171 2.171 0 0 1 -1.077 1.872l-10.26 5.924a2.152 2.152 0 0 1 -1.078.288z"/><path d="m14.054 17.953a.3.3 0 0 1 .3-.3h1.327a.3.3 0 0 1 .295.251c.2 1.351.8 2.032 3.513 2.032 2.161 0 3.082-.489 3.082-1.636 0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144 0-2.07 1.745-3.305 4.67-3.305 3.287 0 4.914 1.141 5.12 3.589a.3.3 0 0 1 -.295.323h-1.336a.3.3 0 0 1 -.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36 0-2.634.822-2.634 1.438 0 .746.324.964 3.51 1.385 3.153.417 4.651 1.007 4.651 3.223 0 2.236-1.864 3.516-5.115 3.516-4.495.006-5.436-2.055-5.436-3.784z"/></g>
                      <text x="64" y="82" fontFamily="Segoe UI, Arial, sans-serif" fontSize="46" fontWeight="bold" fill="#fff" textAnchor="middle">Node</text>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Node.js</h4>
                  <p className="text-sm text-gray-700">Server-Side JavaScript Runtime</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg xmlSpace="preserve" viewBox="0 0 432.071 445.383">
                      <g
                        style={{
                          fillRule: "nonzero",
                          clipRule: "nonzero",
                          fill: "none",
                          stroke: "#fff",
                          strokeWidth: 12.4651,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 4,
                        }}
                      >
                        <path
                          d="M323.205 324.227c2.833-23.601 1.984-27.062 19.563-23.239l4.463.392c13.517.615 31.199-2.174 41.587-7 22.362-10.376 35.622-27.7 13.572-23.148-50.297 10.376-53.755-6.655-53.755-6.655 53.111-78.803 75.313-178.836 56.149-203.322-52.27-66.789-142.748-35.206-144.262-34.386l-.482.089c-9.938-2.062-21.06-3.294-33.554-3.496-22.761-.374-40.032 5.967-53.133 15.904 0 0-161.408-66.498-153.899 83.628 1.597 31.936 45.777 241.655 98.47 178.31 19.259-23.163 37.871-42.748 37.871-42.748 9.242 6.14 20.307 9.272 31.912 8.147l.897-.765c-.281 2.876-.157 5.689.359 9.019-13.572 15.167-9.584 17.83-36.723 23.416-27.457 5.659-11.326 15.734-.797 18.367 12.768 3.193 42.305 7.716 62.268-20.224l-.795 3.188c5.325 4.26 4.965 30.619 5.72 49.452.756 18.834 2.017 36.409 5.856 46.771 3.839 10.36 8.369 37.05 44.036 29.406 29.809-6.388 52.6-15.582 54.677-101.107"
                          style={{
                            fill: "#000",
                            stroke: "#000",
                            strokeWidth: 37.3953,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                          }}
                        />
                        <path
                          d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.779 241.657 98.473 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z"
                          style={{ fill: "#336791", stroke: "none" }}
                        />
                        <path d="M215.866 286.484c-1.385 49.516.348 99.377 5.193 111.495 4.848 12.118 15.223 35.688 50.9 28.045 29.806-6.39 40.651-18.756 45.357-46.051 3.466-20.082 10.148-75.854 11.005-87.281M173.104 38.256S11.583-27.76 19.092 122.365c1.597 31.938 45.779 241.664 98.473 178.316 19.256-23.166 36.671-41.335 36.671-41.335M260.349 26.207c-5.591 1.753 89.848-34.889 144.087 34.417 19.159 24.484-3.043 124.519-56.153 203.329" />
                        <path
                          d="M348.282 263.953s3.461 17.036 53.764 6.653c22.04-4.552 8.776 12.774-13.577 23.155-18.345 8.514-59.474 10.696-60.146-1.069-1.729-30.355 21.647-21.133 19.96-28.739-1.525-6.85-11.979-13.573-18.894-30.338-6.037-14.633-82.796-126.849 21.287-110.183 3.813-.789-27.146-99.002-124.553-100.599-97.385-1.597-94.19 119.762-94.19 119.762"
                          style={{ strokeLinejoin: "bevel" }}
                        />
                        <path d="M188.604 274.334c-13.577 15.166-9.584 17.829-36.723 23.417-27.459 5.66-11.326 15.733-.797 18.365 12.768 3.195 42.307 7.718 62.266-20.229 6.078-8.509-.036-22.086-8.385-25.547-4.034-1.671-9.428-3.765-16.361 3.994z" />
                        <path d="M187.715 274.069c-1.368-8.917 2.93-19.528 7.536-31.942 6.922-18.626 22.893-37.255 10.117-96.339-9.523-44.029-73.396-9.163-73.436-3.193-.039 5.968 2.889 30.26-1.067 58.548-5.162 36.913 23.488 68.132 56.479 64.938" />
                        <path
                          d="M172.517 141.7c-.288 2.039 3.733 7.48 8.976 8.207 5.234.73 9.714-3.522 9.998-5.559.284-2.039-3.732-4.285-8.977-5.015-5.237-.731-9.719.333-9.996 2.367z"
                          style={{
                            fill: "#fff",
                            strokeWidth: 4.155,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                          }}
                        />
                        <path
                          d="M331.941 137.543c.284 2.039-3.732 7.48-8.976 8.207-5.238.73-9.718-3.522-10.005-5.559-.277-2.039 3.74-4.285 8.979-5.015 5.239-.73 9.718.333 10.002 2.368z"
                          style={{
                            fill: "#fff",
                            strokeWidth: 2.0775,
                            strokeLinecap: "butt",
                            strokeLinejoin: "miter",
                          }}
                        />
                        <path d="M350.676 123.432c.863 15.994-3.445 26.888-3.988 43.914-.804 24.748 11.799 53.074-7.191 81.435" />
                      </g>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">PostgreSQL</h4>
                  <p className="text-sm text-gray-700">Relational Database Design</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-full h-full">
                      <defs>
                        <linearGradient id="a" x1="53.974" x2="94.163" y1="54.974" y2="71.829" gradientTransform="translate(29.387 60.096) scale(1.1436)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#249361" />
                          <stop offset="1" stopColor="#3ecf8e" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#a)" d="M102.24 186.21c-3.267 4.117-9.904 1.862-9.977-3.397l-1.156-76.906h51.715c9.365 0 14.587 10.817 8.763 18.149z" transform="translate(-27.722 -60.338)" />
                      <path fill="#3ecf8e" d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Supabase</h4>
                  <p className="text-sm text-gray-700">Auth, Database & Realtime</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg
                      viewBox="0 0 256 256"
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      preserveAspectRatio="xMidYMid"
                    >
                      <defs>
                        <linearGradient id="a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                          <stop offset="0%" stopColor="#62F755" />
                          <stop offset="100%" stopColor="#8FF986" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                          <stop offset="0%" stopOpacity=".9" />
                          <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="#00E0D9"
                        d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"
                      />
                      <path
                        fill="url(#a)"
                        d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"
                      />
                      <path
                        fill="url(#b)"
                        fillOpacity=".4"
                        d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"
                      />
                      <path
                        fill="#63F655"
                        d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Neon</h4>
                  <p className="text-sm text-gray-700">Serverless Postgres</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        fill="none"
                        viewBox="0 0 200 200"
                      >
                        <rect
                          width="9.631"
                          height="40.852"
                          fill="#C5F74F"
                          rx="4.816"
                          transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)"
                        />
                        <rect
                          width="9.631"
                          height="40.852"
                          fill="#C5F74F"
                          rx="4.816"
                          transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)"
                        />
                        <rect
                          width="9.631"
                          height="40.852"
                          fill="#C5F74F"
                          rx="4.816"
                          transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)"
                        />
                        <rect
                          width="9.631"
                          height="40.852"
                          fill="#C5F74F"
                          rx="4.816"
                          transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)"
                        />
                      </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Drizzle ORM</h4>
                  <p className="text-sm text-gray-700">Type-Safe Schema & Queries</p>
                </div>
              </div>

              {/* Tools & Deployment */}
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Tools & Deployment</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg viewBox="0 0 256 250" className="w-full h-full">
                      <path fill="#161614" d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Git/GitHub</h4>
                  <p className="text-sm text-gray-700">Version Control & Collaboration</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg viewBox="0 0 128 128" className="w-full h-full">
                      <path fill="#000" d="M64 14L122 114H6z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Vercel</h4>
                  <p className="text-sm text-gray-700">Production Deployment & Hosting</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg width="48" height="48" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M153.094 165.679l-62.785-13.12a14.631 14.631 0 0 1-.876 1.475l57.157 83.378 3.448-3.444 9.724-60.47a11.458 11.458 0 0 1-6.668-7.82zM130.19 83.605c-2.352 3.608-6.412 5.996-11.036 5.996-.712 0-1.404-.072-2.084-.18l-28.633 44.801 76.498-32.92c-.024-.308-.092-.596-.092-.912 0-.644.088-1.268.192-1.884l-34.845-14.9zm2.08-8.164l37.065 15.848a11.447 11.447 0 0 1 3.976-2.008l6.092-37.88-23.209-23.209L130.07 69.07a13.013 13.013 0 0 1 2.2 6.372zm77.665 6.492l-23.26-23.264-5.056 31.408a11.628 11.628 0 0 1 3.396 2.584l24.92-10.728zm-55.729 75.473a11.355 11.355 0 0 1 9.089-5.844l6.68-41.548c-.524-.348-.992-.764-1.452-1.192l-76.938 33.112c.196.804.332 1.624.396 2.476l62.225 12.996zm62.065-69.133l-26.912 11.58 66.401 28.389.24-.24-39.729-39.729zm-48.092 85.35l-8.088 50.284 46.964-46.964-33.828-7.064a11.366 11.366 0 0 1-5.048 3.744zm-91.286-12.928c-1.7 0-3.328-.292-4.852-.809l-15.6 24.413-6.028-6.024 14.776-23.12a16.066 16.066 0 0 1-1.02-1.417l-26.768 11.525-6.345-6.345 29.3-12.612L7.385 135.25.14 128.002l2.292-2.292 61.085 12.752a14.981 14.981 0 0 1 2.668-3.616L36.537 91.601l5.988-5.988L73.5 130.798a15.283 15.283 0 0 1 3.392-.396c1.308 0 2.576.184 3.788.496l28.985-45.353a13.126 13.126 0 0 1-3.676-9.116c0-1.04.132-2.048.36-3.016l-36.16-15.46 6.343-6.344 34.26 14.652a13.12 13.12 0 0 1 12.653-2.268l26.724-41.825L128.002 0 0 128.002l128.002 128.002 12.596-12.596-57.585-84.01a15.117 15.117 0 0 1-6.12 1.297zm101.23-48.89l-6.796 42.237a11.359 11.359 0 0 1 4.196 7.813l38.572 8.052 35.32-35.32-63.752-27.257a11.508 11.508 0 0 1-7.54 4.476z" fill="#25C7B7"/>
                      
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Netlify</h4>
                  <p className="text-sm text-gray-700">Static Hosting & CI/CD</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg fill="#000000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        
                        <path d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082-.018.138-.045.272-.067.405-.696 3.703-3.936 6.507-7.827 6.507-1.388 0-2.691-.356-3.825-.979a.2024.2024 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244-.12-3.084-2.61-5.603-5.682-5.75"/>
                      </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Render</h4>
                  <p className="text-sm text-gray-700">Cloud Hosting & Deployment</p>
                </div>
              </div>

              {/* AI-Assisted Development */}
              <h4 className="text-lg font-semibold text-gray-800 mb-4">AI-Assisted Development</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                  <div className="w-12 h-12 mx-auto mb-3">
                    <svg width="128" height="128" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5" className="h-12 w-12" viewBox="-0.17090198558635983 0.482230148717937 41.14235318283891 40.0339509076386"><text x="-9999" y="-9999">ChatGPT</text><path d="M37.532 16.87a9.963 9.963 0 0 0-.856-8.184 10.078 10.078 0 0 0-10.855-4.835A9.964 9.964 0 0 0 18.306.5a10.079 10.079 0 0 0-9.614 6.977 9.967 9.967 0 0 0-6.664 4.834 10.08 10.08 0 0 0 1.24 11.817 9.965 9.965 0 0 0 .856 8.185 10.079 10.079 0 0 0 10.855 4.835 9.965 9.965 0 0 0 7.516 3.35 10.078 10.078 0 0 0 9.617-6.981 9.967 9.967 0 0 0 6.663-4.834 10.079 10.079 0 0 0-1.243-11.813zM22.498 37.886a7.474 7.474 0 0 1-4.799-1.735c.061-.033.168-.091.237-.134l7.964-4.6a1.294 1.294 0 0 0 .655-1.134V19.054l3.366 1.944a.12.12 0 0 1 .066.092v9.299a7.505 7.505 0 0 1-7.49 7.496zM6.392 31.006a7.471 7.471 0 0 1-.894-5.023c.06.036.162.099.237.141l7.964 4.6a1.297 1.297 0 0 0 1.308 0l9.724-5.614v3.888a.12.12 0 0 1-.048.103l-8.051 4.649a7.504 7.504 0 0 1-10.24-2.744zM4.297 13.62A7.469 7.469 0 0 1 8.2 10.333c0 .068-.004.19-.004.274v9.201a1.294 1.294 0 0 0 .654 1.132l9.723 5.614-3.366 1.944a.12.12 0 0 1-.114.01L7.04 23.856a7.504 7.504 0 0 1-2.743-10.237zm27.658 6.437l-9.724-5.615 3.367-1.943a.121.121 0 0 1 .113-.01l8.052 4.648a7.498 7.498 0 0 1-1.158 13.528v-9.476a1.293 1.293 0 0 0-.65-1.132zm3.35-5.043c-.059-.037-.162-.099-.236-.141l-7.965-4.6a1.298 1.298 0 0 0-1.308 0l-9.723 5.614v-3.888a.12.12 0 0 1 .048-.103l8.05-4.645a7.497 7.497 0 0 1 11.135 7.763zm-21.063 6.929l-3.367-1.944a.12.12 0 0 1-.065-.092v-9.299a7.497 7.497 0 0 1 12.293-5.756 6.94 6.94 0 0 0-.236.134l-7.965 4.6a1.294 1.294 0 0 0-.654 1.132l-.006 11.225zm1.829-3.943l4.33-2.501 4.332 2.5v5l-4.331 2.5-4.331-2.5V18z" fill="currentColor"/></svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI & Automation</h4>
                  <p className="text-sm text-gray-700">
                    Prompt Engineering, AI-Integrated Workflows — used to accelerate development, not replace understanding of the underlying code
                  </p>
                </div>
              </div>

              {/* Currently Strengthening */}
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Currently Strengthening</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-dashed border-gray-300 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="m416 425.6 78.4 44.8c9.6 6.4 16 16 16 27.2v91.2c0 11.2-6.4 22.4-16 27.2L416 662.4c-9.6 6.4-22.4 6.4-32 0l-78.4-44.8c-9.6-6.4-16-16-16-27.2v-91.2c0-11.2 6.4-22.4 16-27.2l78.4-44.8c9.6-8 22.4-8 32-1.6" fill="#2F4BFF"/><path d="M643.2 267.2c-3.2-1.6-4.8-1.6-8 0L568 305.6c-3.2 1.6-3.2 4.8-3.2 6.4v76.8c0 3.2 1.6 4.8 3.2 6.4l67.2 38.4c3.2 1.6 4.8 1.6 8 0l67.2-38.4c3.2-1.6 3.2-4.8 3.2-6.4V312c0-3.2-1.6-4.8-3.2-6.4zm9.6-12.8 67.2 38.4c8 4.8 12.8 12.8 12.8 20.8v76.8c0 8-4.8 16-12.8 20.8l-67.2 38.4q-12 7.2-24 0l-67.2-38.4c-8-4.8-12.8-12.8-12.8-20.8v-76.8c0-8 4.8-16 12.8-20.8l67.2-38.4c6.4-4.8 16-4.8 24 0M688 691.2l-67.2 38.4v76.8l67.2 38.4 67.2-38.4v-76.8zm83.2 9.6c9.6 6.4 16 16 16 27.2v76.8c0 11.2-6.4 22.4-16 27.2L704 873.6c-9.6 6.4-22.4 6.4-32 0l-67.2-38.4c-9.6-6.4-16-16-16-27.2v-76.8c0-11.2 6.4-22.4 16-27.2l67.2-38.4c9.6-6.4 22.4-6.4 32 0zM176 169.6v44.8l40 22.4 40-22.4v-44.8l-40-22.4zm99.2-25.6c8 4.8 12.8 12.8 12.8 20.8v54.4c0 8-4.8 16-12.8 20.8l-48 27.2q-12 7.2-24 0l-48-27.2c-6.4-4.8-11.2-12.8-11.2-20.8v-54.4c0-8 4.8-16 12.8-20.8l48-27.2q12-7.2 24 0zM192 777.6l-48 27.2v54.4l48 27.2 48-27.2v-54.4zm8-14.4 48 27.2c4.8 3.2 8 8 8 14.4v54.4c0 6.4-3.2 11.2-8 14.4l-48 27.2c-4.8 3.2-11.2 3.2-16 0l-48-27.2c-4.8-3.2-8-8-8-14.4v-54.4c0-6.4 3.2-11.2 8-14.4l48-27.2c4.8-3.2 11.2-3.2 16 0" fill="#050D42"/><path d="m403.2 776-62.4 62.4c-1.6 1.6-3.2 1.6-6.4 1.6h-88c-4.8 0-8-3.2-8-8s3.2-8 8-8h84.8l59.2-59.2V696c0-4.8 3.2-8 8-8s8 3.2 8 8v64H576c4.8 0 8 3.2 8 8s-3.2 8-8 8zM392 339.2l-108.8-94.4c-3.2-3.2-3.2-8-1.6-11.2 3.2-3.2 8-3.2 11.2-1.6l110.4 94.4H528c4.8 0 8 3.2 8 8s-3.2 8-8 8H408V400c0 4.8-3.2 8-8 8s-8-3.2-8-8zM800 728c-4.8 0-8-3.2-8-8s3.2-8 8-8h88c4.8 0 8 3.2 8 8s-3.2 8-8 8zm-49.6-435.2c-3.2 3.2-8 3.2-11.2 1.6-3.2-3.2-3.2-8-1.6-11.2l96-112c3.2-3.2 8-3.2 11.2-1.6 3.2 3.2 3.2 8 1.6 11.2zM160 504c-4.8 0-8-3.2-8-8s3.2-8 8-8h112c4.8 0 8 3.2 8 8s-3.2 8-8 8zm536 144c0 4.8-3.2 8-8 8s-8-3.2-8-8V544c0-4.8 3.2-8 8-8s8 3.2 8 8z" fill="#050D42"/></svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Structures & Algorithms</h4>
                  <p className="text-sm text-gray-700">Actively building deeper fundamentals through theory and applied practice</p>
                </div>
              </div>
            </div>

            {/* Projects Slideshow */}
            <div id="projects" className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                Projects
              </h3>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Use the arrows (or keyboard) to browse both personal and
                professional work.
              </p>

              {/** Category Filter */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                {(
                  [
                    { key: "all", label: "All" },
                    { key: "personal", label: "Personal" },
                    { key: "professional", label: "Professional" },
                  ] as const
                ).map((t) => (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => {
                      // handled by state below (no-op placeholder for diff matching)
                    }}
                    className="hidden"
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Slideshow implemented below (stateful content) */}
              <ProjectsSlideshow />
            </div>
          </div>
        </section>

        {/* Hire Me Section */}
        <section
          id="contact-me"
          className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              {"Open to opportunities"}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {
                "I'm actively looking for junior software development and full-stack roles where I can keep building on real problems. If you're hiring, I'd love to talk."
              }
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Full-Stack Range
                </h3>
                <p className="text-gray-600">
                  Comfortable across the stack — from React and TypeScript on the frontend to PostgreSQL and backend logic — so I can contribute wherever a team needs me.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Fast Learner
                </h3>
                <p className="text-gray-600">
                  {`I pick up new tools and codebases quickly, and I'm currently deepening my data structures and algorithms fundamentals to strengthen my problem-solving from the ground up.`}
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Team-Ready
                </h3>
                <p className="text-gray-600">
                  Internship experience working within an existing codebase and team, alongside independent projects where I made and owned every technical decision myself.
                </p>
              </div>
            </div>

            <button
              onClick={handleGetInTouchClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors cursor-pointer z-9999"
            >
              Get In Touch
            </button>
            {/* debug modal state removed */}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Aurel Golemi</h3>
              <p className="text-gray-300">
                Full-Stack Developer building modern web applications — from responsive interfaces to the databases and systems behind them.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#profile"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-me"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/AurelGolemi"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aurel-golemi-8518272b7/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    onClick={openEmail}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Gmail
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/aurelgolemi2/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-300">
              © 2026 Aurel Golemi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Simple Test Modal */}

      <ContactForm
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}