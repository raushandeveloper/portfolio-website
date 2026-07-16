import React, { useEffect, useRef, useState } from "react";
import {
  Sun,
  Moon,
  Mail,
  ExternalLink,
  Copy,
  Check,
  CheckCircle2,
  Circle,
  ArrowRight,
  FileDown,
  Send,
  MessageCircle,
  X,
  Loader2,
  AlertCircle,
  Bot,
  Menu,
  ArrowUp,
} from "lucide-react";

/* lucide-react removed brand/logo icons (Github, Linkedin, etc.) in newer
   versions, so we use small inline SVGs for those instead. */
function GithubIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.11.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.34-1.82-1.34-1.82-1.09-.77.08-.76.08-.76 1.21.09 1.84 1.28 1.84 1.28 1.07 1.87 2.81 1.33 3.5 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.38-5.47-6.13 0-1.35.47-2.46 1.24-3.32-.12-.31-.54-1.56.12-3.26 0 0 1.01-.33 3.3 1.27a11.2 11.2 0 0 1 6 0c2.29-1.6 3.3-1.27 3.3-1.27.66 1.7.24 2.95.12 3.26.77.86 1.24 1.97 1.24 3.32 0 4.76-2.81 5.81-5.49 6.12.43.38.81 1.13.81 2.28 0 1.64-.02 2.97-.02 3.37 0 .33.22.71.83.59A12.32 12.32 0 0 0 24 12.3C24 5.5 18.63 0 12 0z" />
    </svg>
  );
}
function LinkedinIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

/* GeeksforGeeks glyph — simple monogram, keeps things lightweight (no extra icon lib needed) */
function GfgIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <path d="M12 2a10 10 0 1 0 10 10h-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 10h6" strokeLinecap="round" />
    </svg>
  );
}

/* LeetCode glyph */
function LeetcodeIcon({ size = 16, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M13.48 23.4c-.85.85-1.98 1.32-3.18 1.32-1.2 0-2.33-.47-3.18-1.32l-3.5-3.5a4.49 4.49 0 0 1-1.32-3.18c0-1.2.47-2.33 1.32-3.18l7.02-7.02a.9.9 0 0 0 0-1.27L7.9 2.5a.9.9 0 1 0-1.27 1.27l1.83 1.83-6.4 6.39A6.27 6.27 0 0 0 0 16.72c0 1.67.65 3.25 1.83 4.43l3.5 3.5A6.27 6.27 0 0 0 9.76 26.5a6.27 6.27 0 0 0 4.44-1.85l2.88-2.88a.9.9 0 1 0-1.27-1.27l-2.33 2.9zM9.19 12.9a.9.9 0 0 0 0 1.8h11.4a.9.9 0 0 0 0-1.8H9.19zm12.5-6.32-4.2-4.2a.9.9 0 0 0-1.53.64V6.9H10.8a.9.9 0 0 0 0 1.8h5.16v3.88a.9.9 0 0 0 1.53.64l4.2-4.2a.9.9 0 0 0 0-1.27v-.17z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTENT — replace with your own details                           */
/* ------------------------------------------------------------------ */

const PROFILE = {
  name: "Raushan Kumar Singh",
  handle: "@raushandeveloper",
  role: "Frontend / Full-Stack Developer",
  tagline: "CS undergrad building scalable, user-friendly web apps with React & Node — with strong DSA fundamentals",
  location: "Siwan, Bihar, India",
  email: "raushankumarsingh7033@gmail.com",
  phone: "+91 7033331524",
  github: "https://github.com/raushandeveloper",
  githubUsername: "raushandeveloper",
  linkedin: "https://linkedin.com/in/your-profile", // TODO: paste your real LinkedIn URL
  gfg: "https://geeksforgeeks.org/user/your-profile", // TODO: paste your real GfG profile URL
  leetcode: "https://leetcode.com/your-profile", // TODO: paste your real LeetCode profile URL
  resumeUrl: "/resume2.pdf",
  initials: "RS",
  avatarUrl: "/photo.jpg",
};

const JOURNEY = [
  { year: "2024", title: "Started B.Tech CSE (IoT)", desc: "Government Engineering College, Siwan. Began with C and core programming fundamentals." },
  { year: "2024", title: "Learned HTML, CSS & JavaScript", desc: "Built first static layouts, then moved on to DOM manipulation and responsive design." },
  { year: "2025", title: "React.js, Tailwind CSS & Bootstrap", desc: "Picked up modern frontend tooling. Built the Amazon Clone — a responsive homepage layout." },
  { year: "2025", title: "Full-stack with Node.js & Express.js", desc: "Built the Airbnb Clone — a full-stack app with clean UI, reusable components, and a working backend." },
  { year: "2025", title: "Top 9 Finalist — TECHMITI'25", desc: "Frontend Free Birds team ranked top 9 of 35 government engineering college teams across Bihar, at MIT Muzaffarpur." },
  { year: "2026", title: "Now", desc: "Grinding DSA in Java (400+ problems on GeeksforGeeks) and looking for a Frontend / Full-Stack internship." },
];

const DSA_ROADMAP = [
  { topic: "Arrays & Strings", status: "done" },
  { topic: "Searching & Sorting", status: "done" },
  { topic: "Basic Problem Solving Patterns", status: "done" },
  { topic: "Recursion & Backtracking", status: "progress", note: "400+ problems solved on GeeksforGeeks" },
  { topic: "Trees & Graphs", status: "upcoming" },
  { topic: "Dynamic Programming", status: "upcoming" },
];

const CERTIFICATIONS = [
  {
    title: "Full Stack Workshop",
    issuer: "GEC Siwan",
    date: "2025",
    url: "/workshop.png",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "2026",
    url: "/cisco.png",
  },
];

const PROJECTS = [
  {
    title: "Airbnb Clone",
    desc: "A responsive Airbnb-style full-stack web application. Built the frontend with HTML, Tailwind CSS, and JavaScript, and backend services with Node.js and Express.js — with a focus on clean UI and reusable components.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "Node.js", "Express.js"],
    github: "https://github.com/raushandeveloper/airbnb",
    live: "https://airbnb-1-6vxk.onrender.com",
  },
  {
    title: "Amazon Clone",
    desc: "A frontend layout inspired by Amazon's homepage, built with responsive design principles so it holds up cleanly across screen sizes.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/raushandeveloper/Amazon-Clone",
    live: "https://amazon-clone-gecsiwan.onrender.com",
  },
];

const SKILLS = [
  { group: "Languages", items: ["Java", "C", "Python", "JavaScript"] },
  { group: "Frontend", items: ["HTML", "CSS", "React.js", "Tailwind CSS", "Bootstrap"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Tools & Concepts", items: ["Git", "GitHub", "Responsive Design", "MVC Architecture"] },
];

const EXPERIENCE = [
  { role: "Full-Stack Development Intern", company: "Decode Lab", period: "2026 — Present", desc: "Working on full-stack features using React, Node.js, and Express.js — contributing to UI components and backend endpoints." },
  { role: "Campus Mantri", company: "GeeksforGeeks", period: "2025 — Present", desc: "Representing GeeksforGeeks on campus — driving DSA awareness, organizing coding sessions, and growing a community of student problem-solvers." },
  { role: "Top 9 Finalist — Frontend Free Birds", company: "TECHMITI'25, MIT Muzaffarpur", period: "2025", desc: "Ranked among the top 9 teams out of 35 government engineering college teams across Bihar in a two-round frontend development competition, working in a 4-member team on UI/UX and collaborative problem-solving." },
];

const NAV = [
  { label: "Journey", href: "#journey" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Connect", href: "#connect" },
  { label: "Contact", href: "#contact" },
];

// Contact form sends to Formspree (free, no backend needed).
// Sign up at https://formspree.io, create a form, and paste your form ID below.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xkododdv";

// Simple rule-based chatbot knowledge base — no API key needed.
const CHAT_KB = [
  { keys: ["hi", "hello", "hey", "namaste"], reply: "Hey! I'm Raushan's portfolio assistant. Ask me about his projects, skills, DSA progress, or how to get in touch." },
  { keys: ["project", "projects", "work"], reply: "Raushan has built an Airbnb Clone (full-stack, Node.js + Express backend) and an Amazon Clone (responsive frontend). Check the Projects section for details!" },
  { keys: ["skill", "skills", "tech", "stack"], reply: "Core stack: Java, JavaScript, Python, C, React.js, Tailwind CSS, Node.js, and Express.js. Full list is in the Skills section." },
  { keys: ["dsa", "leetcode", "problem", "geeksforgeeks", "gfg"], reply: "400+ DSA problems solved on GeeksforGeeks, mostly in Java — strong on arrays, strings, searching, and sorting. Full roadmap is in the Roadmap section (DSA tab)." },
  { keys: ["ml", "ai", "machine learning"], reply: "AI/ML isn't on the roadmap right now — check the DSA tab in the Roadmap section for current focus." },
  { keys: ["certification", "certifications", "certificate", "course"], reply: "Check the Certifications tab in the Roadmap section for a full list." },
  { keys: ["experience", "job", "intern", "achievement"], reply: "Currently a Full-Stack Development Intern at Decode Lab, and Campus Mantri at GeeksforGeeks. Also a Top 9 Finalist at TECHMITI'25 (MIT Muzaffarpur). Details in the Skills & Experience section." },
  { keys: ["resume", "cv"], reply: "You can grab the resume PDF using the Resume button in the nav bar, or in the Contact section below." },
  { keys: ["contact", "email", "reach", "hire"], reply: "Best way is the contact form right here, or email directly — the address is in the Contact section." },
  { keys: ["linkedin", "connect"], reply: "You can connect on LinkedIn — the link is in the Connect section." },
  { keys: ["thanks", "thank you", "thankyou"], reply: "Anytime! Good luck with your search 🚀" },
];

function getBotReply(input) {
  const lower = input.toLowerCase();
  const match = CHAT_KB.find((entry) => entry.keys.some((k) => lower.includes(k)));
  return match ? match.reply : "I'm just a simple FAQ bot, so I don't have an answer for that — try asking about projects, skills, DSA progress, or how to reach Raushan.";
}



function StatusDot({ status }) {
  if (status === "done") {
    return (
      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Check size={13} color="var(--bg)" strokeWidth={3} />
      </div>
    );
  }
  if (status === "progress") {
    return (
      <div style={{ position: "relative", width: 22, height: 22, flexShrink: 0 }}>
        <div className="pulse-ring" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid var(--warn)" }} />
        <div style={{ position: "absolute", inset: 5, borderRadius: "50%", background: "var(--warn)" }} />
      </div>
    );
  }
  return (
    <div style={{ width: 22, height: 22, borderRadius: "50%", border: "2px solid var(--border)", flexShrink: 0 }} />
  );
}

function RoadmapTrack({ data, accentVar }) {
  return (
    <div style={{ position: "relative", paddingLeft: 4 }}>
      <div style={{ position: "absolute", left: 15, top: 22, bottom: 22, width: 2, background: "var(--border)" }} />
      {data.map((item, i) => (
        <div key={item.topic} style={{ display: "flex", gap: 16, marginBottom: i === data.length - 1 ? 0 : 26, position: "relative" }}>
          <StatusDot status={item.status} />
          <div style={{ paddingTop: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "1rem",
                color: item.status === "upcoming" ? "var(--text-soft)" : "var(--text)",
              }}
            >
              {item.topic}
            </div>
            {item.note && (
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.76rem", color: accentVar, marginTop: 3 }}>
                {item.note}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ index, label }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 28 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)" }}>{index}</span>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.6rem", margin: 0, color: "var(--text)" }}>
        {label}
      </h2>
      <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

function AvatarGraphic({ initials, imageUrl }) {
  const size = 300;
  const r = 142;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <div
        style={{
          position: "absolute",
          inset: -34,
          background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: 0.25,
          filter: "blur(24px)",
          borderRadius: "50%",
        }}
      />

      {/* dummy photo — replace imageUrl with your real photo */}
      <img
        src={imageUrl}
        alt={initials}
        style={{
          position: "absolute",
          top: size / 2 - r,
          left: size / 2 - r,
          width: r * 2,
          height: r * 2,
          borderRadius: "50%",
          objectFit: "cover",
          display: "block",
        }}
        onError={(e) => { e.target.style.display = "none"; }}
      />

      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{ display: "block", position: "relative" }}>
        <defs>
          <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="url(#avatarGrad)" strokeWidth="3" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx={size / 2} cy={size / 2} r={r + 14} fill="none" stroke="url(#avatarGrad)" strokeWidth="1" opacity="0.35" strokeDasharray="1 8" />
      </svg>
      <div
        title="Available for work"
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "var(--accent)",
          border: "4px solid var(--bg)",
          boxShadow: "0 0 12px var(--accent)",
        }}
      />
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "var(--bg-elev-2)",
    border: "1px solid var(--border)",
    borderRadius: 7,
    padding: "10px 12px",
    color: "var(--text)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s ease",
  };

  if (status === "sent") {
    return (
      <div className="card" style={{ padding: 28, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
        <CheckCircle2 size={26} style={{ color: "var(--accent)" }} />
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem" }}>Message sent</div>
        <p style={{ fontSize: "0.88rem", color: "var(--text-soft)", margin: 0 }}>
          Thanks for reaching out — I'll get back to you soon.
        </p>
        <button className="tab-btn" onClick={() => setStatus("idle")}>Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-soft)", display: "block", marginBottom: 6 }}>Name</label>
        <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle} className="form-input" />
      </div>
      <div>
        <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-soft)", display: "block", marginBottom: 6 }}>Email</label>
        <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" style={inputStyle} className="form-input" />
      </div>
      <div>
        <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-soft)", display: "block", marginBottom: 6 }}>Message</label>
        <textarea required name="message" value={form.message} onChange={handleChange} placeholder="What's up?" rows={4} style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-body)" }} className="form-input" />
      </div>

      {status === "error" && (
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "#E4685D" }}>
          <AlertCircle size={15} /> Something went wrong — try again, or email directly below.
        </div>
      )}

      <button type="submit" disabled={status === "sending"} className="cta-btn" style={{ justifyContent: "center", border: "none", cursor: status === "sending" ? "default" : "pointer", opacity: status === "sending" ? 0.7 : 1 }}>
        {status === "sending" ? <Loader2 size={15} className="spin" /> : <Send size={15} />}
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me about projects, skills, roadmap progress, or how to get in touch." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const reply = getBotReply(text);
    setMessages((m) => [...m, { from: "user", text }, { from: "bot", text: reply }]);
    setInput("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") send();
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle chat assistant"
        style={{
          position: "fixed",
          bottom: 22,
          right: 22,
          zIndex: 50,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "var(--accent)",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
        }}
      >
        {open ? <X size={22} color="var(--bg)" /> : <MessageCircle size={22} color="var(--bg)" />}
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 84,
            right: 22,
            zIndex: 50,
            width: 320,
            maxWidth: "calc(100vw - 44px)",
            height: 420,
            maxHeight: "calc(100vh - 140px)",
            background: "var(--bg-elev)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 16px", borderBottom: "1px solid var(--border)" }}>
            <Bot size={17} style={{ color: "var(--accent)" }} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9rem" }}>Portfolio Assistant</span>
          </div>

          <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === "bot" ? "flex-start" : "flex-end",
                  background: m.from === "bot" ? "var(--bg-elev-2)" : "var(--accent)",
                  color: m.from === "bot" ? "var(--text)" : "var(--bg)",
                  padding: "8px 12px",
                  borderRadius: 10,
                  fontSize: "0.82rem",
                  lineHeight: 1.5,
                  maxWidth: "85%",
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 8, padding: 12, borderTop: "1px solid var(--border)" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask something..."
              style={{
                flex: 1,
                background: "var(--bg-elev-2)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "8px 10px",
                color: "var(--text)",
                fontSize: "0.82rem",
                outline: "none",
              }}
            />
            <button onClick={send} aria-label="Send" style={{ background: "var(--accent)", border: "none", borderRadius: 8, width: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Send size={15} color="var(--bg)" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function CertificationsList({ data }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
      {data.map((cert) => (
        <a
          key={cert.title}
          href={cert.url}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            padding: 18,
            borderRadius: 10,
            border: "1px solid var(--border)",
            background: "var(--bg-elev-2)",
            textDecoration: "none",
            color: "var(--text)",
            transition: "border-color 0.2s ease, transform 0.2s ease",
          }}
          className="cert-card"
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", margin: 0 }}>{cert.title}</h4>
            <ExternalLink size={14} style={{ color: "var(--text-soft)", flexShrink: 0, marginTop: 3 }} />
          </div>
          <div style={{ fontSize: "0.84rem", color: "var(--text-soft)", marginTop: 6 }}>{cert.issuer}</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--accent)", marginTop: 10 }}>{cert.date}</div>
        </a>
      ))}
    </div>
  );
}

function SplashScreen() {
  return (
    <div className="splash-screen">
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.15rem", color: "var(--accent)", display: "flex", alignItems: "center", gap: 2 }}>
        <span>&gt; booting portfolio.exe</span>
        <span className="splash-cursor">_</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                      */
/* ------------------------------------------------------------------ */

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [track, setTrack] = useState("dsa");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scrollPct, setScrollPct] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollPct(pct);
      setShowTop(scrollTop > 500);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const els = rootRef.current.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div ref={rootRef} data-theme={theme} className="portfolio-root">
      {loading && <SplashScreen />}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 3,
          width: `${scrollPct}%`,
          background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          zIndex: 100,
          transition: "width 0.1s ease",
        }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .portfolio-root[data-theme="dark"] {
          --bg: #0A0D12;
          --bg-elev: #10141C;
          --bg-elev-2: #161B26;
          --text: #E7EAF0;
          --text-soft: #8891A3;
          --border: #222836;
          --accent: #4FD8C4;
          --accent-2: #A78BFA;
          --warn: #F5B14A;
        }
        .portfolio-root[data-theme="light"] {
          --bg: #F6F7FA;
          --bg-elev: #FFFFFF;
          --bg-elev-2: #EEF0F4;
          --text: #12161F;
          --text-soft: #5B6272;
          --border: #E1E4EA;
          --accent: #0EA894;
          --accent-2: #7C5CFC;
          --warn: #C97A1A;
        }

        .portfolio-root {
          --font-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
          --font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
          --font-mono: 'JetBrains Mono', ui-monospace, monospace;
          background: var(--bg);
          color: var(--text);
          font-family: var(--font-body);
          transition: background-color 0.3s ease, color 0.3s ease;
          min-height: 100vh;
          background-image: radial-gradient(var(--border) 1px, transparent 1px);
          background-size: 28px 28px;
          background-position: -14px -14px;
          position: relative;
        }

        .hero-glow {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(90px);
          z-index: 0;
        }

        .reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.in-view { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }

        .pulse-ring { animation: pulse 1.8s ease-out infinite; }
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 1; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) { .pulse-ring { animation: none; } }

        .spin { animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .form-input:focus { border-color: var(--accent) !important; box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 20%, transparent); }

        .nav-link { color: var(--text-soft); text-decoration: none; font-size: 0.86rem; font-weight: 500; transition: color 0.2s ease; }
        .nav-link:hover { color: var(--accent); }

        .card { background: var(--bg-elev); border: 1px solid var(--border); border-radius: 12px; transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease; }
        .card:hover { border-color: var(--accent); transform: translateY(-3px); box-shadow: 0 14px 36px -12px color-mix(in srgb, var(--accent) 45%, transparent); }

        .cert-card:hover { border-color: var(--accent) !important; transform: translateY(-2px); }

        .connect-card:hover { border-color: var(--accent) !important; transform: translateY(-3px); }

        .tag { font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent); background: var(--bg-elev-2); border: 1px solid var(--border); padding: 3px 9px; border-radius: 4px; white-space: nowrap; }

        .icon-link { color: var(--text-soft); transition: color 0.2s ease, transform 0.2s ease; }
        .icon-link:hover { color: var(--accent); transform: translateY(-1px); }

        .theme-toggle { display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-elev); color: var(--text); cursor: pointer; transition: border-color 0.2s ease, color 0.2s ease; }
        .theme-toggle:hover { border-color: var(--accent); color: var(--accent); }

        .tab-btn { font-family: var(--font-mono); font-size: 0.82rem; padding: 8px 16px; border-radius: 7px; border: 1px solid var(--border); background: transparent; color: var(--text-soft); cursor: pointer; transition: all 0.2s ease; }
        .tab-btn.active { background: var(--bg-elev-2); color: var(--text); border-color: var(--accent); }

        .terminal-line { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 6px; text-decoration: none; color: var(--text); transition: background-color 0.2s ease; }
        .terminal-line:hover { background: var(--bg-elev-2); }

        .cta-btn { display: inline-flex; align-items: center; gap: 7px; background: var(--accent); color: var(--bg); padding: 11px 20px; border-radius: 8px; font-size: 0.88rem; font-weight: 600; text-decoration: none; transition: opacity 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease; box-shadow: 0 8px 24px -8px color-mix(in srgb, var(--accent) 60%, transparent); }
        .cta-btn:hover { opacity: 0.92; transform: translateY(-2px); box-shadow: 0 12px 30px -8px color-mix(in srgb, var(--accent) 70%, transparent); }

        ::selection { background: var(--accent); color: var(--bg); }

        .splash-screen {
          position: fixed;
          inset: 0;
          background: var(--bg);
          z-index: 200;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: splashFade 1.4s ease forwards;
        }
        @keyframes splashFade {
          0% { opacity: 1; }
          75% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }
        .splash-cursor { animation: blink 0.8s steps(2) infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .splash-screen { animation: none; opacity: 0; visibility: hidden; }
        }

        .back-to-top {
          position: fixed;
          bottom: 22px;
          left: 22px;
          z-index: 50;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-elev);
          border: 1px solid var(--border);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: translateY(10px);
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease, border-color 0.2s ease;
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        .back-to-top.visible { opacity: 1; transform: translateY(0); pointer-events: auto; }
        .back-to-top:hover { border-color: var(--accent); color: var(--accent); }

        .mobile-menu-btn { display: none; }
        .mobile-nav-panel { display: none; }

        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .desktop-resume-btn { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-nav-panel.open { display: flex !important; }
        }
      `}</style>

      {/* ---------------- NAV ---------------- */}
      <header style={{ position: "sticky", top: 0, zIndex: 30, background: "var(--bg)", borderBottom: "1px solid var(--border)", opacity: 0.98 }}>
        <div style={{ maxWidth: "100%", padding: "18px clamp(20px, 4vw, 64px)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#top" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text)", textDecoration: "none" }}>
            <span style={{ color: "var(--accent)" }}>&lt;</span>{PROFILE.name.split(" ")[0]}<span style={{ color: "var(--accent)" }}>/&gt;</span>
          </a>
          <nav className="nav-links" style={{ display: "flex", gap: 26, alignItems: "center" }}>
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href={PROFILE.resumeUrl} download className="cta-btn desktop-resume-btn" style={{ padding: "8px 14px", fontSize: "0.8rem" }}>
              <FileDown size={14} /> Resume
            </a>
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="theme-toggle mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        <div className={`mobile-nav-panel ${mobileMenuOpen ? "open" : ""}`} style={{ flexDirection: "column", padding: "8px clamp(20px, 4vw, 64px) 20px", borderTop: "1px solid var(--border)", gap: 4 }}>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="terminal-line"
              style={{ fontSize: "0.95rem", fontWeight: 500 }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={PROFILE.resumeUrl}
            download
            onClick={() => setMobileMenuOpen(false)}
            className="terminal-line"
            style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--accent)" }}
          >
            <FileDown size={15} /> Resume
          </a>
        </div>
      </header>

      {/* ---------------- HERO ---------------- */}
      <section id="top" style={{ maxWidth: "100%", padding: "90px clamp(20px, 4vw, 64px) 70px", position: "relative", overflow: "hidden" }}>
        <div className="hero-glow" style={{ width: 420, height: 420, top: -160, left: -120, background: "var(--accent)", opacity: 0.16 }} />
        <div className="hero-glow" style={{ width: 360, height: 360, top: -100, right: -80, background: "var(--accent-2)", opacity: 0.14 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40, flexWrap: "wrap-reverse", position: "relative", zIndex: 1 }}>
          <div style={{ flex: "1 1 420px" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent)", marginBottom: 18 }}>
              {PROFILE.handle} — {PROFILE.location}
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2.8rem, 6vw, 5.2rem)", lineHeight: 1.05, margin: 0 }}>
              {PROFILE.name}
            </h1>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "clamp(1.25rem, 2.6vw, 1.7rem)", color: "var(--accent)", marginTop: 12, marginBottom: 18 }}>
              {PROFILE.role}
            </p>
            <p style={{ maxWidth: 560, fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text-soft)" }}>
              {PROFILE.tagline}. Currently deep in a full-stack build, grinding DSA, and picking up ML along the way — this page tracks all three.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
              <a href="#projects" className="cta-btn">See my work <ArrowRight size={15} /></a>
              <a href="#roadmap" className="nav-link" style={{ display: "inline-flex", alignItems: "center", padding: "11px 4px" }}>View my roadmap →</a>
            </div>
          </div>
          <div style={{ marginRight: 36 }}>
            <AvatarGraphic initials={PROFILE.initials} imageUrl={PROFILE.avatarUrl} />
          </div>
        </div>
      </section>

      {/* ---------------- JOURNEY ---------------- */}
      <section id="journey" className="reveal" style={{ maxWidth: "100%", padding: "48px clamp(20px, 4vw, 64px)" }}>
        <SectionLabel index="01" label="Full-Stack Journey" />
        <div style={{ position: "relative", paddingLeft: 4 }}>
          <div style={{ position: "absolute", left: 15, top: 8, bottom: 8, width: 2, background: "var(--border)" }} />
          {JOURNEY.map((item, i) => (
            <div key={item.year} style={{ display: "flex", gap: 20, marginBottom: i === JOURNEY.length - 1 ? 0 : 30 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--bg-elev-2)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--accent)" }}>
                {item.year.slice(2)}
              </div>
              <div style={{ paddingTop: 3 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.92rem", color: "var(--text-soft)", marginTop: 4, lineHeight: 1.6, maxWidth: 540 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- ROADMAP (DSA + Certifications) ---------------- */}
      <section id="roadmap" className="reveal" style={{ maxWidth: "100%", padding: "48px clamp(20px, 4vw, 64px)" }}>
        <SectionLabel index="02" label="Learning Roadmap" />
        <div style={{ display: "flex", gap: 10, marginBottom: 32 }}>
          <button className={`tab-btn ${track === "dsa" ? "active" : ""}`} onClick={() => setTrack("dsa")}>
            DSA
          </button>
          <button className={`tab-btn ${track === "certs" ? "active" : ""}`} onClick={() => setTrack("certs")}>
            Certifications
          </button>
        </div>
        <div className="card" style={{ padding: "32px 28px" }}>
          {track === "dsa" ? (
            <RoadmapTrack data={DSA_ROADMAP} accentVar="var(--warn)" />
          ) : (
            <CertificationsList data={CERTIFICATIONS} />
          )}
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="reveal" style={{ maxWidth: "100%", padding: "48px clamp(20px, 4vw, 64px)" }}>
        <SectionLabel index="03" label="Projects" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {PROJECTS.map((p) => (
            <div key={p.title} className="card" style={{ padding: 24, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", margin: 0 }}>{p.title}</h3>
                <div style={{ display: "flex", gap: 10 }}>
                  <a href={p.github} className="icon-link" aria-label="GitHub"><GithubIcon size={16} color="currentColor" /></a>
                  <a href={p.live} className="icon-link" aria-label="Live site"><ExternalLink size={16} /></a>
                </div>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-soft)", lineHeight: 1.6, margin: "10px 0 16px", flex: 1 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section id="skills" className="reveal" style={{ maxWidth: "100%", padding: "48px clamp(20px, 4vw, 64px)" }}>
        <SectionLabel index="04" label="Skills" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 26 }}>
          {SKILLS.map((group) => (
            <div key={group.group}>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 12px" }}>
                {group.group}
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 36 }}>
          <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 16px" }}>
            Experience
          </h4>
          {EXPERIENCE.map((e, i) => (
            <div key={e.role} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "16px 0", borderTop: i === 0 ? "1px solid var(--border)" : "none", borderBottom: "1px solid var(--border)", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.98rem" }}>{e.role} · <span style={{ color: "var(--text-soft)", fontWeight: 400 }}>{e.company}</span></div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-soft)", marginTop: 4, maxWidth: 480 }}>{e.desc}</div>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.76rem", color: "var(--text-soft)", whiteSpace: "nowrap" }}>{e.period}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CONNECT (LinkedIn + GfG) ---------------- */}
      <section id="connect" className="reveal" style={{ maxWidth: "100%", padding: "48px clamp(20px, 4vw, 64px)" }}>
        <SectionLabel index="05" label="Connect" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          <a
            href="https://www.linkedin.com/in/raushan-kumar-singh-24a04b33b/"
            target="_blank"
            rel="noreferrer"
            className="card connect-card"
            style={{ padding: 26, display: "flex", flexDirection: "column", gap: 14, textDecoration: "none", color: "var(--text)" }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--bg-elev-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <LinkedinIcon size={22} color="var(--accent)" />
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>LinkedIn</h3>
              <p style={{ fontSize: "0.86rem", color: "var(--text-soft)", margin: "6px 0 0", lineHeight: 1.6 }}>
                Let's connect professionally — updates on projects, internships, and everything in between.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", marginTop: "auto" }}>
              View profile <ExternalLink size={13} />
            </div>
          </a>

          <a
            href={"https://www.geeksforgeeks.org/profile/raushandeveloper"}
            target="_blank"
            rel="noreferrer"
            className="card connect-card"
            style={{ padding: 26, display: "flex", flexDirection: "column", gap: 14, textDecoration: "none", color: "var(--text)" }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--bg-elev-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <GfgIcon size={22} color="var(--accent)" />
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>GeeksforGeeks</h3>
              <p style={{ fontSize: "0.86rem", color: "var(--text-soft)", margin: "6px 0 0", lineHeight: 1.6 }}>
                250+ DSA problems solved, Campus Mantri — check out the full problem-solving profile.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", marginTop: "auto" }}>
              View profile <ExternalLink size={13} />
            </div>
          </a>

          <a
            href={"https://leetcode.com/u/raushandeveloper/"}
            target="_blank"
            rel="noreferrer"
            className="card connect-card"
            style={{ padding: 26, display: "flex", flexDirection: "column", gap: 14, textDecoration: "none", color: "var(--text)" }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--bg-elev-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <LeetcodeIcon size={22} color="var(--accent)" />
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>LeetCode</h3>
              <p style={{ fontSize: "0.86rem", color: "var(--text-soft)", margin: "6px 0 0", lineHeight: 1.6 }}>
                Sharpening problem-solving with consistent practice — check out submissions and rating.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", marginTop: "auto" }}>
              View profile <ExternalLink size={13} />
            </div>
          </a>

          <a
            href={"https://github.com/raushandeveloper"}
            target="_blank"
            rel="noreferrer"
            className="card connect-card"
            style={{ padding: 26, display: "flex", flexDirection: "column", gap: 14, textDecoration: "none", color: "var(--text)" }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--bg-elev-2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <GithubIcon size={22} color="var(--accent)" />
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>GitHub</h3>
              <p style={{ fontSize: "0.86rem", color: "var(--text-soft)", margin: "6px 0 0", lineHeight: 1.6 }}>
                Source code for every project, plus commit history and contribution activity.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent)", marginTop: "auto" }}>
              View profile <ExternalLink size={13} />
            </div>
          </a>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="reveal" style={{ maxWidth: "100%", padding: "48px clamp(20px, 4vw, 64px) 110px" }}>
        <SectionLabel index="06" label="Contact" />
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)", gap: 20, alignItems: "start" }}>
          <ContactForm />

          <div className="card" style={{ padding: "8px" }}>
            <div style={{ padding: "10px 14px", fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-soft)" }}>
              $ contact --options
            </div>
            <button onClick={copyEmail} className="terminal-line" style={{ width: "100%", border: "none", background: "transparent", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-mono)", fontSize: "0.88rem" }}>
              <Mail size={15} style={{ color: "var(--accent)" }} />
              {PROFILE.email}
              <span style={{ marginLeft: "auto", color: "var(--text-soft)" }}>
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </span>
            </button>
            <a href={"https://github.com/raushandeveloper"} className="terminal-line" style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem" }}>
              <GithubIcon size={15} color="var(--accent)" /> github.com/raushandeveloper
            </a>
            <a href={"https://www.linkedin.com/in/raushan-kumar-singh-24a04b33b/"} className="terminal-line" style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem" }}>
              <LinkedinIcon size={15} color="var(--accent)" /> linkedin.com/in/raushan-kumar-singh
            </a>
            <a href={"https://www.geeksforgeeks.org/profile/raushandeveloper"} className="terminal-line" style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem" }}>
              <GfgIcon size={15} color="var(--accent)" /> geeksforgeeks.org/user/raushandeveloper
            </a>
            <a
             href="/resume2.pdf"
             download
             className="terminal-line"
             style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem" }}
           >
            <FileDown size={15} style={{ color: "var(--accent)" }} />
            {" "}download resume.pdf
            </a>
          </div>
        </div>
      </section>

      <button
        className={`back-to-top ${showTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>

      <ChatBot />

      <footer style={{ borderTop: "1px solid var(--border)", padding: "24px", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: "0.76rem", color: "var(--text-soft)" }}>
       © 2026 Raushan Kumar Singh · Built with React{new Date().getFullYear()}
      </footer>
    </div>
  );
}