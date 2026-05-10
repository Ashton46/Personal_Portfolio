"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = ["Home", "About", "Experience", "Projects", "Contact"];
const resumeHref = "/Resume.pdf";
const emailHref = "mailto:ashtonbreer@yahoo.com";
const githubHref = "https://github.com/Ashton46";
const linkedInHref = "https://www.linkedin.com/in/ashtonbreer/";

const projects = [
  {
    title: "AI Sports Play Prediction Platform",
    type: "sports ml",
    mark: "XP",
    description:
      "A full-stack analytics platform for exploring sports data, prediction signals, and game-state context.",
    date: "August 2025 - Present",
    tags: ["React", "JavaScript", "FastAPI", "ML"],
    bullets: [
      "Continuing to develop a full-stack React, JavaScript, and FastAPI application that predicts NFL and NBA plays using ensemble machine learning models.",
      "Processed 356K+ NFL plays and 16M+ NBA events through a data pipeline, achieving prediction accuracy with Random Forest and XGBoost.",
      "Built interactive 3D visualizations with Three.js and a REST API handling real-time game situation analysis."
    ]
  },
  {
    title: "K-Nearest Neighbors Classifier",
    type: "classifier",
    mark: "KNN",
    description:
      "A Python machine learning project for geographic temperature classification using KNN.",
    date: "February - March 2025",
    tags: ["Python", "Pandas", "NumPy", "ML"],
    bullets: [
      "Implemented a KNN algorithm using Python and pandas for geographic temperature classification.",
      "Optimized Euclidean distance calculations with NumPy, reducing computation time by 40% and achieving 80% accuracy.",
      "Built a complete ML workflow with configurable k-values and a majority voting system."
    ]
  },
  {
    title: "Minesweeper AI Agent",
    type: "ai agent",
    mark: "AI",
    description:
      "A reasoning-focused AI project that evaluates board state, risk, and search strategy.",
    date: "Project",
    tags: ["Python", "AI", "Algorithms"],
    bullets: [
      "Built an AI agent that reasons through Minesweeper board states and identifies safe moves when possible.",
      "Modeled uncertainty and risk to choose moves when deterministic information is unavailable.",
      "Used the project to practice search, inference, and algorithmic problem-solving."
    ]
  }
];

const experience = [
  {
    company: "PACCAR",
    location: "Bellevue, Washington",
    role: "Incoming Intern",
    date: "Summer 2026",
    type: "Internship",
    bullets: [
      "Incoming internship focused on building software and automation tools for internal workflows.",
      "Expected to apply computer science, problem-solving, and communication skills in a professional engineering environment."
    ]
  },
  {
    company: "Target",
    location: "Bellevue, Washington",
    role: "Style Consultant",
    date: "Summer 2025",
    type: "Full-time",
    bullets: [
      "Assisted customers in identifying needs and provided personalized solutions, improving problem-solving and communication skills.",
      "Collaborated with team members in a fast-paced environment, ensuring efficiency and teamwork.",
      "Managed multiple responsibilities simultaneously, demonstrating adaptability and time management."
    ]
  },
  {
    company: "Tam O'Shanter Golf Course",
    location: "Bellevue, Washington",
    role: "Pro Shop Assistant",
    date: "June 2022 - September 2024",
    type: "Part-time",
    bullets: [
      "Delivered customer service by greeting guests, answering inquiries, and resolving issues professionally.",
      "Maintained daily operations, including managing the cash register, closing the shop, and collecting golf carts.",
      "Assisted with golf instruction courses by supervising participants and providing guidance during sessions."
    ]
  }
];

const skills = ["Python", "C++", "JavaScript", "React", "Next.js", "FastAPI", "Git", "APIs"];

const quickPrompts = [
  "What projects has Ashton built?",
  "What technologies does Ashton use?",
  "What is Ashton interested in?",
  "Summarize Ashton’s resume."
];

const botResponses = {
  "What projects has Ashton built?":
    "Ashton is showcasing an AI Sports Play Prediction Platform, a K-Nearest Neighbors Classifier, and a Minesweeper AI Agent.",
  "What technologies does Ashton use?":
    "Ashton works with Python, C++, JavaScript, React, Next.js, FastAPI, Git, APIs, and AI-focused tooling.",
  "What is Ashton interested in?":
    "Ashton is interested in software engineering, AI tools, automation, web technology, and practical project building.",
  "Summarize Ashton’s resume.":
    "Ashton is a UC Irvine Computer Science student building software with AI, automation, and web tech while preparing for internships."
};

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function TypewriterHeadline() {
  const phrase = "Ashton Breer";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    let deleting = false;
    let timeoutId;
    const typingDelays = [260, 70, 420, 110, 310, 85, 470, 65, 240, 390, 95, 330];

    function tick() {
      if (!deleting && index < phrase.length) {
        index += 1;
        setText(phrase.slice(0, index));
        timeoutId = window.setTimeout(tick, typingDelays[index % typingDelays.length]);
        return;
      }

      if (!deleting && index === phrase.length) {
        deleting = true;
        timeoutId = window.setTimeout(tick, 4000);
        return;
      }

      if (deleting && index > 0) {
        index -= 1;
        setText(phrase.slice(0, index));
        timeoutId = window.setTimeout(tick, 45);
        return;
      }

      deleting = false;
      timeoutId = window.setTimeout(tick, 450);
    }

    timeoutId = window.setTimeout(tick, 350);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <h1 className="min-h-[5.4rem] font-display text-6xl font-bold leading-none tracking-[-0.03em] text-white sm:min-h-[7rem] sm:text-8xl">
      <span className="text-white">{text}</span>
      <span className="cursor-blink ml-2 inline-block text-aqua">|</span>
    </h1>
  );
}

function Header({ onOpenBot }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/14 bg-navy/86 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1900px] items-center justify-between px-6 sm:px-10 lg:px-[72px]">
        <button
          type="button"
          onClick={() => scrollToId("home")}
          className="font-display text-2xl font-bold tracking-[-0.03em] text-white"
        >
          Ashton Breer
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => scrollToId(item === "Home" ? "home" : item.toLowerCase())}
              className="font-display text-lg font-bold text-white transition hover:text-aqua"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-white">
          <a className="nav-icon" href={emailHref} aria-label="Email">
            ✉
          </a>
          <a className="nav-icon" href={githubHref} target="_blank" rel="noreferrer" aria-label="GitHub">
            GH
          </a>
          <a className="nav-icon" href={linkedInHref} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            in
          </a>
          <a
            className="nav-icon"
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Open resume"
          >
            ✎
          </a>
        </div>
      </div>
    </header>
  );
}

function AnimatedPortrait() {
  const accents = [
    "left-[8%] top-[14%] h-2 w-2 bg-aqua/55",
    "left-[18%] top-[32%] h-1.5 w-1.5 bg-white/45",
    "left-[31%] top-[18%] h-1 w-1 bg-aqua/60",
    "left-[42%] top-[42%] h-2 w-2 bg-aqua/40",
    "left-[58%] top-[22%] h-1.5 w-1.5 bg-white/40",
    "left-[72%] top-[34%] h-1 w-1 bg-aqua/65",
    "left-[84%] top-[16%] h-2 w-2 bg-white/35",
    "left-[66%] bottom-[38%] h-1.5 w-1.5 bg-aqua/45",
    "left-[23%] bottom-[30%] h-1 w-1 bg-white/45",
    "right-[6%] bottom-[44%] h-1.5 w-1.5 bg-aqua/50",
    "right-[18%] top-[54%] h-1 w-1 bg-white/40",
    "left-[48%] bottom-[18%] h-2 w-2 bg-aqua/35"
  ];

  return (
    <div
      className="pointer-events-none relative mx-auto h-[360px] w-full max-w-[560px] overflow-visible sm:h-[460px]"
      aria-label="Animated stick figure walking across the hero"
    >
      <div className="absolute inset-x-[-18vw] bottom-14 h-px bg-aqua/24" />
      {accents.map((className) => (
        <motion.span
          key={className}
          className={`absolute rounded-full ${className}`}
          animate={{ opacity: [0.25, 0.9, 0.25], scale: [1, 1.55, 1] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: accents.indexOf(className) * 0.17
          }}
        />
      ))}

      <motion.svg
        viewBox="0 0 150 190"
        className="absolute bottom-14 left-0 h-44 w-36 overflow-visible text-aqua sm:h-52 sm:w-44"
        animate={{
          x: ["-62vw", "10vw", "13vw", "13vw", "-62vw"],
          opacity: [0, 1, 1, 1, 0]
        }}
        transition={{
          duration: 6.2,
          repeat: Infinity,
          ease: ["linear", "easeOut", "linear", "linear"],
          times: [0, 0.34, 0.45, 0.62, 1]
        }}
      >
        <motion.g
          animate={{ y: [0, -4, 0, -3, 0] }}
          transition={{ duration: 0.72, repeat: Infinity, ease: "easeInOut" }}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="7"
        >
          <circle cx="75" cy="28" r="18" />
          <path d="M75 49 L75 96" />
          <motion.path
            d="M75 63 L43 82"
            animate={{
              d: [
                "M75 63 L44 82",
                "M75 63 L48 72",
                "M75 63 L44 82",
                "M75 63 L48 72",
                "M75 63 L44 82"
              ]
            }}
            transition={{ duration: 0.72, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M75 63 L106 82"
            animate={{
              d: [
                "M75 63 L106 82",
                "M75 63 L112 42",
                "M75 63 L102 35",
                "M75 63 L112 42",
                "M75 63 L106 82"
              ]
            }}
            transition={{
              duration: 6.2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.36, 0.45, 0.54, 1]
            }}
          />
          <motion.path
            d="M75 96 L45 142"
            animate={{
              d: [
                "M75 96 L45 142",
                "M75 96 L95 142",
                "M75 96 L45 142",
                "M75 96 L95 142"
              ]
            }}
            transition={{ duration: 0.54, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M75 96 L105 142"
            animate={{
              d: [
                "M75 96 L105 142",
                "M75 96 L55 142",
                "M75 96 L105 142",
                "M75 96 L55 142"
              ]
            }}
            transition={{ duration: 0.54, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        <motion.g
          fill="currentColor"
          animate={{ opacity: [0, 0, 1, 1, 0] }}
          transition={{
            duration: 6.2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.38, 0.45, 0.6, 0.72]
          }}
        >
          <circle cx="118" cy="27" r="2.8" />
          <circle cx="130" cy="16" r="2.3" />
          <circle cx="137" cy="33" r="1.9" />
        </motion.g>
        <motion.g
          fill="currentColor"
          className="font-display"
          animate={{ opacity: [0, 0, 1, 1, 0], y: [0, 0, -4, -4, 0] }}
          transition={{
            duration: 6.2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.39, 0.45, 0.59, 0.72]
          }}
        >
          <text x="111" y="8" fontSize="16" fontWeight="800">
            hi
          </text>
        </motion.g>
      </motion.svg>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-[1480px] px-6 py-20 sm:px-10 lg:px-[72px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mb-10 flex items-center gap-8">
        <h2 className="whitespace-nowrap font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
          / {title}
        </h2>
        <div className="h-px flex-1 bg-white/18" />
      </div>
      {children}
    </motion.section>
  );
}

function Hero({ onOpenBot }) {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-screen w-full max-w-[1480px] items-center gap-12 px-6 pb-20 pt-32 sm:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-[72px]"
    >
      <AnimatedPortrait />
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      >
        <TypewriterHeadline />
        <p className="mt-10 max-w-3xl text-2xl leading-[1.75] text-lavender sm:text-[1.72rem]">
          Computer Science student at UC Irvine continuing to develop, learn,
          and build software.
        </p>
        <p className="mt-4 max-w-3xl text-xl leading-[1.75] text-lavender/85">
          I like building useful software, experimenting with AI, and turning
          ideas into projects.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a className="minimal-button" href={emailHref}>
            <span className="text-aqua">✉</span> Let’s chat!
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="about me">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <p className="max-w-3xl text-2xl leading-[1.7] text-lavender">
          I’m a CS student at UCI interested in software engineering, AI tools,
          automation, and building projects that solve real problems. I’m focused
          on improving my skills, building stronger projects, and preparing for
          internships.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              className="rounded-2xl border border-aqua/28 px-4 py-3 text-center font-display text-lg font-bold text-white"
              whileHover={{ y: -4, borderColor: "rgba(122, 247, 244, 0.8)" }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <>
      <Section id="experience" title="experience">
        <div className="grid gap-5 lg:grid-cols-3">
          {experience.map((item, index) => (
            <motion.button
              key={item.company}
              type="button"
              className="minimal-card min-h-[260px] cursor-pointer text-left"
              onClick={() => setSelectedExperience(item)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <p className="font-display text-sm font-bold text-aqua">
                      0{index + 1}
                    </p>
                    <p className="rounded-full border border-aqua/24 px-3 py-1 font-display text-xs font-bold text-aqua">
                      {item.type}
                    </p>
                  </div>
                  <h3 className="font-display text-3xl font-bold leading-tight text-white">
                    {item.company}
                  </h3>
                  <p className="mt-3 text-xl font-semibold text-lavender">
                    {item.role}
                  </p>
                </div>
                <div className="mt-8 border-t border-white/12 pt-5">
                  <p className="font-display text-sm font-bold text-white">
                    {item.date}
                  </p>
                  <p className="mt-2 text-sm text-lavender">{item.location}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-navy/82 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
          >
            <motion.article
              className="relative max-h-[86vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-aqua/28 bg-navy p-6 shadow-[0_0_70px_rgba(122,247,244,0.16)] sm:p-10"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/16 text-2xl text-white transition hover:border-aqua/50 hover:text-aqua"
                onClick={() => setSelectedExperience(null)}
                aria-label="Close experience details"
              >
                ×
              </button>
              <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-aqua">
                {selectedExperience.type}
              </p>
              <h3 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
                {selectedExperience.company}
              </h3>
              <div className="mt-6 grid gap-3 text-lg text-lavender sm:grid-cols-3">
                <p>{selectedExperience.role}</p>
                <p>{selectedExperience.date}</p>
                <p>{selectedExperience.location}</p>
              </div>
              <ul className="mt-10 space-y-5 text-xl leading-8 text-lavender">
                {selectedExperience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-4">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-aqua" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Section id="projects" title="projects">
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              className="minimal-card min-h-[320px] text-left"
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -7 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="mb-8 flex h-24 items-center justify-between rounded-2xl border border-aqua/22 bg-aqua/[0.035] px-5">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.24em] text-aqua">
                    {project.type}
                  </p>
                  <p className="mt-2 text-sm text-lavender">{project.date}</p>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-aqua/35 font-display text-lg font-bold text-aqua">
                  {project.mark}
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold leading-tight text-white">
                {project.title}
              </h3>
              <p className="mt-4 min-h-[6rem] text-lg leading-7 text-lavender">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 px-3 py-1 text-sm font-bold text-lavender"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-navy/82 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.article
              className="relative max-h-[86vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-aqua/28 bg-navy p-6 shadow-[0_0_70px_rgba(122,247,244,0.16)] sm:p-10"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/16 text-2xl text-white transition hover:border-aqua/50 hover:text-aqua"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                ×
              </button>
              <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-aqua">
                {selectedProject.date}
              </p>
              <h3 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-6xl">
                {selectedProject.title}
              </h3>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-lavender">
                {selectedProject.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/12 px-3 py-1 text-sm font-bold text-lavender"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ul className="mt-10 space-y-5 text-xl leading-8 text-lavender">
                {selectedProject.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-4">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-aqua" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex gap-4">
                <a
                  className="text-link"
                  href={githubHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Contact() {
  return (
    <Section id="contact" title="contact">
      <div className="flex flex-col justify-between gap-8 rounded-3xl border border-white/14 p-8 sm:flex-row sm:items-center">
        <div>
          <h3 className="font-display text-4xl font-bold text-white">let’s build something.</h3>
          <p className="mt-3 text-xl text-lavender">Open to connecting!</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a className="minimal-button" href={emailHref}>Email</a>
          <a className="minimal-button" href={githubHref} target="_blank" rel="noreferrer">GitHub</a>
          <a className="minimal-button" href={linkedInHref} target="_blank" rel="noreferrer">LinkedIn</a>
          <a
            className="minimal-button"
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </Section>
  );
}

function AshtonBot({ open, onOpen, onClose }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Ask me about Ashton’s projects, skills, experience, or resume." }
  ]);

  function ask(prompt) {
    setMessages((items) => [
      ...items,
      { role: "user", text: prompt },
      { role: "bot", text: botResponses[prompt] }
    ]);
  }

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="fixed bottom-6 right-6 z-50 rounded-2xl border border-aqua/70 bg-navy px-4 py-3 font-display font-bold text-aqua shadow-[0_0_28px_rgba(122,247,244,0.18)]"
      >
        AshtonBot
      </button>
      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-[390px] overflow-hidden rounded-3xl border border-white/16 bg-navy/95 shadow-2xl backdrop-blur-md"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/12 p-5">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">Ask AshtonBot</h3>
                <p className="mt-1 text-sm leading-5 text-lavender">
                  Ask me about Ashton’s projects, skills, experience, or resume.
                </p>
              </div>
              <button className="text-2xl text-white" onClick={onClose} aria-label="Close AshtonBot">
                ×
              </button>
            </div>
            <div className="max-h-[300px] space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "bot"
                      ? "mr-8 border border-aqua/20 text-lavender"
                      : "ml-8 bg-aqua text-navy"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="grid gap-2 border-t border-white/12 p-4">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  className="rounded-2xl border border-white/12 px-3 py-2 text-left text-sm text-lavender transition hover:border-aqua/55 hover:text-white"
                  onClick={() => ask(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

export default function HomePage() {
  const [botOpen, setBotOpen] = useState(false);

  return (
    <main className="min-h-screen bg-navy text-white">
      <Header onOpenBot={() => setBotOpen(true)} />
      <Hero onOpenBot={() => setBotOpen(true)} />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="border-t border-white/14 px-6 py-8 text-center text-lavender sm:px-10">
        <span>Ashton Breer · </span>
        <a className="text-link" href={githubHref} target="_blank" rel="noreferrer">GitHub</a>
        <span> · </span>
        <a className="text-link" href={linkedInHref} target="_blank" rel="noreferrer">LinkedIn</a>
        <span> · </span>
        <a className="text-link" href={emailHref}>Email</a>
        <span> · </span>
        <a className="text-link" href={resumeHref} target="_blank" rel="noreferrer">
          Resume
        </a>
      </footer>
      <AshtonBot
        open={botOpen}
        onOpen={() => setBotOpen(true)}
        onClose={() => setBotOpen(false)}
      />
    </main>
  );
}
