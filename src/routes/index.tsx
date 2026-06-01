import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { NeuralCanvas } from "@/components/NeuralCanvas";
import { Reveal } from "@/components/Reveal";
import profileImg from "@/assets/profile.jpg";
import {
  Github, Linkedin, Mail, GraduationCap, FileText, ArrowRight, Download,
  Brain, Network, Eye, Database, Rocket, Code2, Sparkles, ShieldCheck,
  Cpu, Layers, Award, MapPin, Calendar, ExternalLink, ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashish Joshi — AI/ML Engineer · GenAI & Multimodal AI" },
      { name: "description", content: "Ashish Joshi — AI/ML Engineer specializing in Generative AI, Large Multimodal Models, LLMs, Computer Vision, and reliable AI deployment." },
      { property: "og:title", content: "Ashish Joshi — AI/ML Engineer · GenAI & Multimodal AI" },
      { property: "og:description", content: "Generative AI · LMMs · LLMs · Computer Vision · Real-World AI Systems" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  ["Home","home"],["About","about"],["Expertise","expertise"],["Projects","projects"],
  ["Publications","publications"],["Experience","experience"],["Skills","skills"],
  ["Education","education"],["Contact","contact"],
];

const FLOATING = ["Generative AI","LMMs","LLMs","Computer Vision","RAG","Reliable AI","Deployment","Multimodal Systems"];

const ABOUT_CARDS = [
  {
    icon: Brain,
    t: "Multimodal AI",
    d: "Connecting language, vision, video, retrieval, and reasoning to build intelligent AI systems."
  },
  {
    icon: Eye,
    t: "Video AI & Vision",
    d: "Working on video understanding, computer vision, visual representation learning, and perception systems."
  },
  {
    icon: Sparkles,
    t: "LLMs & GenAI",
    d: "Building LLM-powered applications, generative AI workflows, retrieval systems, and reasoning pipelines."
  },
  {
    icon: Network,
    t: "Agentic AI",
    d: "Exploring AI agents that can plan, use tools, adapt through feedback, and improve over time."
  },
  {
    icon: Database,
    t: "Retrieval Systems",
    d: "Designing retrieval-augmented pipelines for multimodal search, grounded generation, and reliable QA."
  },
  {
    icon: ShieldCheck,
    t: "Interpretability",
    d: "Studying model behavior, failure modes, robustness, transparency, and reliable AI decision-making."
  }
];

const EXPERTISE = [
  {
    icon: Brain,
    t: "Deep Learning & Transformers",
    d: "Strong foundation in neural networks, CNNs, ViTs, Transformers, attention mechanisms, representation learning, fine-tuning, and model behavior analysis."
  },
  {
    icon: Code2,
    t: "PyTorch Research Pipelines",
    d: "Building reproducible training and evaluation pipelines with PyTorch, Hugging Face, datasets, dataloaders, checkpoints, ablations, metrics, and experiment logs."
  },
  {
    icon: Cpu,
    t: "LLM / VLM Inference Stack",
    d: "Working with open-weight models, tokenizers, prompt pipelines, quantized inference, model loading, batching, context windows, and response evaluation."
  },
  {
    icon: Database,
    t: "Retrieval & Vector Systems",
    d: "Designing RAG pipelines using embeddings, vector search, chunking strategies, reranking, context selection, grounded generation, and retrieval-quality analysis."
  },
  {
    icon: Layers,
    t: "Evaluation, Metrics & Diagnostics",
    d: "Using accuracy, macro-F1, ROC-AUC, calibration, hallucination checks, robustness tests, failure analysis, Grad-CAM, attention analysis, and CKA-style diagnostics."
  },
  {
    icon: Rocket,
    t: "GPU, Linux & Experiment Engineering",
    d: "Comfortable with Linux workflows, Git, CUDA-aware experimentation, HPC/Colab environments, memory constraints, quantization trade-offs, and deployment-aware AI engineering."
  }
];

const PROJECTS = [
  {
    t: "SpatialBench-VLM",
    s: "Benchmarking Spatial Reasoning in Vision-Language Models",
    one: "Unified evaluation framework for testing how VLMs reason about spatial relations, viewpoint, counting, containment, and action-conditioned scenes.",
    d: "Built a unified VLM evaluation pipeline across CV-Bench-2D, VSR, Spatial-MM, SpatialMQA, SAT, and MME-RealWorld-Lite. Evaluated BLIP-2, InstructBLIP, Phi-3.5-Vision, Cambrian-8B, and Qwen2.5-VL using accuracy, dataset difficulty, relation-family behavior, agreement/disagreement patterns, Spearman correlation, Kendall rank stability, Grad-CAM, attention/entropy analysis, and CKA.",
    tags: ["VLMs", "LMMs", "Spatial Reasoning", "Multimodal Evaluation", "Interpretability"],
    github: "https://github.com/Delimiter-Ashish"
  },
  {
    t: "SARF",
    s: "Structure-Aware Representation Fusion for CLIP Transfer",
    one: "Fusion framework combining RGB semantic features with edge-derived structural cues.",
    d: "Proposed a structure-aware fusion pipeline for low-resource circuit diagram classification. Compared RGB-only, edge-only, SARF-Sum, SARF-Concat, SARF-Learned Fusion, and ensemble variants using frozen CLIP ViT-B/32 embeddings.",
    tags: ["Computer Vision", "CLIP", "Representation Learning", "Multimodal Fusion"],
    github: "https://github.com/Delimiter-Ashish"
  },
  {
    t: "RARC",
    s: "Adaptive Retrieval Controller for Reliable LLM Question Answering",
    one: "Reasoning-aware RAG controller for grounded and efficient LLM responses.",
    d: "Built an adaptive retrieval system that changes retrieval depth, context width, and answer mode based on query complexity. Evaluated against Fixed RAG and No-Retrieval baselines using Llama 3.3 70B and Qwen2.5 32B across quantization settings and corpus sizes.",
    tags: ["LLMs", "RAG", "Reliable AI", "Groundedness", "Deployment"],
    github: "https://github.com/Delimiter-Ashish"
  },
  {
    t: "SlideMIL-ViT",
    s: "Weakly Supervised Visual Prediction for Gigapixel Medical Images",
    one: "Transformer-enhanced MIL pipeline for whole-slide image prediction.",
    d: "Built a weakly supervised medical vision system using Multiple Instance Learning over UNI2-h vision embeddings. Developed attention aggregation, top-k discriminative patch selection, patient-level cross-validation, and robustness evaluation, contributing to a top-3 finish at the BU MedAI Hackathon.",
    tags: ["Medical AI", "Vision Transformers", "MIL", "Weak Supervision", "Computer Vision"],
    github: "https://github.com/Delimiter-Ashish"
  },
  {
    t: "Decision Twin",
    s: "Accountable AI for High-Stakes Decisions",
    one: "Policy-grounded LLM decision system with simulation, critique, and audit-ready traces.",
    d: "Built a decision-support system combining business simulation, retrieval, risk modeling, self-critique, and policy-grounded reasoning for accountable AI recommendations.",
    tags: ["LLMs", "AI Governance", "RAG", "Decision Support"],
    github: "https://github.com/Delimiter-Ashish"
  },
  {
    t: "Mean-Shift Image Segmentation",
    s: "Color, Grayscale, and Gradient Feature Pipelines",
    one: "Classical computer vision pipeline analyzing how feature design affects segmentation behavior.",
    d: "Implemented mean-shift segmentation for grayscale and color images, extended it with gradient-based features, and studied how edge information affects object boundaries, texture preservation, and region consistency.",
    tags: ["Computer Vision", "Segmentation", "Feature Design"],
    github: "https://github.com/Delimiter-Ashish"
  }
];

const PUBS = [
  { t: "Unleashing the Power of Deep Learning: A Novel Approach for Defect Detection in Solid Rocket Motor",
    a: "Ashish Joshi, Kaushik Joshi, Rupali Kute, Sunil Jaiswal, Prerna Mishra",
    v: "FirePhysChem, 2025", doi: "10.1016/j.fpc.2025.06.005",
    href: "https://doi.org/10.1016/j.fpc.2025.06.005" },
  { t: "Selecting RAG vs. File-First Deployment Strategies Across Open-Weight Reasoning Models for Efficient AI Systems",
    a: "Siddhanth Kalyanaraman, Ravi Gupta, Kaushik Sandeep Joshi, Ashish Sandeep Joshi, Vidney Jadhav, Jayesh Suryawanshi",
    v: "IEEE Systems and Information Engineering Design Symposium, SIEDS 2026", href: "#" },
];

const EXPERIENCE = [
  { r: "Apprentice AI Engineer", o: "High Energy Materials Research Laboratory, DRDO", l: "Pune, India", dt: "Aug. 2023 – May 2025",
    bullets: [
      "Worked on applied AI research projects in deep learning and computer vision for scientific and industrial datasets.",
      "Built experimental pipelines covering data preparation, model training, validation, benchmarking, and failure analysis.",
      "Studied model generalization across different data conditions and supported iterative improvements through controlled evaluation.",
    ] },
  { r: "Research Intern", o: "High Energy Materials Research Laboratory, DRDO", l: "Pune, India", dt: "Feb. 2023 – Jul. 2023",
    bullets: [
      "Developed reproducible PyTorch pipelines for CNN and transformer-based vision experiments.",
      "Explored architecture behavior, representation learning, hyperparameter settings, and evaluation metrics.",
      "Supported research documentation and comparative model analysis.",
    ] },
  { r: "AI-ML Engineer Intern", o: "StackLab.in", l: "Pune, India", dt: "Jul. 2022 – Dec. 2022",
    bullets: [
      "Worked on applied machine learning workflows involving data modeling, feature design, representation learning, and model evaluation.",
      "Contributed to research-style documentation and experiment tracking for ML projects.",
    ] },
];

const EDU = [
  { s: "Boston University", d: "Master of Science in Artificial Intelligence", y: "2025 – 2027",
    focus: "Multimodal Machine Learning, Computer Vision, Machine Learning, Model Evaluation, Generative AI" },
  { s: "MIT World Peace University", d: "Post Graduate Diploma in Artificial Intelligence and Machine Learning", y: "2022 – 2023",
    focus: "AI/ML foundations, deep learning, applied machine learning, model evaluation" },
  { s: "MIT World Peace University", d: "Bachelor of Science in Computer Science", y: "2019 – 2022",
    focus: "Most Creative Award · Coding competition recognition · Technical club leadership and workshops" },
];

const AWARDS = [
  "Top-3 Finish, BU MedAI Hackathon, 2026",
  "3rd Place, National-Level 24-Hour Hackathon CODEMENT_24, 2024",
  "Presented on AI as both a cybersecurity threat and defense under the Cyber Surakshit Bharat initiative at DRDO, 2024",
  "Most Creative Award, undergraduate studies, MIT-WPU",
  "CyberNot Secretary, MIT-WPU — led coding workshops and computer assembly sessions for 50+ students",
  "Student Ambassador, Bharatiya Chhatra Sansad — coordinated a national student leadership platform and led 30+ volunteers",
];

const CERTS = [
  "AWS Academy Graduate: Machine Learning Foundations",
  "Google Cloud: 30 Days of Google Cloud",
  "Coursera: Linear Regression for Business Statistics",
];

const STACK = [
  {
    icon: Brain,
    g: "Deep Learning Core",
    d: "Neural networks, transformers, representation learning, training loops, and research-style experimentation.",
    i: [
      "PyTorch",
      "Transformers",
      "CNNs",
      "ViTs",
      "Attention",
      "Fine-Tuning",
      "Representation Learning",
      "Ablations"
    ]
  },
  {
    icon: Sparkles,
    g: "LLMs & Generative AI",
    d: "LLM applications, prompt pipelines, reasoning workflows, retrieval-augmented generation, and model evaluation.",
    i: [
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "Tool Use",
      "Self-Critique",
      "Hallucination Analysis",
      "Groundedness",
      "Context Engineering"
    ]
  },
  {
    icon: Network,
    g: "Multimodal & Vision-Language AI",
    d: "Systems that connect visual inputs with language models, embeddings, retrieval, and multimodal reasoning.",
    i: [
      "VLMs",
      "LMMs",
      "CLIP",
      "Multimodal Fusion",
      "Vision-Language Models",
      "Image-Text Retrieval",
      "Model Evaluation"
    ]
  },
  {
    icon: Eye,
    g: "Computer Vision & Video AI",
    d: "Visual representation learning, segmentation, weak supervision, medical imaging, and video understanding pipelines.",
    i: [
      "Computer Vision",
      "Video AI",
      "Segmentation",
      "Visual Grounding",
      "Weak Supervision",
      "Medical Imaging",
      "Grad-CAM",
      "Patch-Level Analysis"
    ]
  },
  {
    icon: Database,
    g: "Retrieval & Data Systems",
    d: "Embedding pipelines, document processing, vector retrieval, reranking, and reliable knowledge-grounded generation.",
    i: [
      "Embeddings",
      "Vector Search",
      "Chunking",
      "Reranking",
      "Retrieval Evaluation",
      "Document QA",
      "Semantic Search",
      "Data Pipelines"
    ]
  },
  {
    icon: Cpu,
    g: "Engineering & Deployment Stack",
    d: "Practical AI engineering across Linux, Git, CUDA-aware workflows, inference optimization, and deployment trade-offs.",
    i: [
      "Python",
      "C++",
      "Linux",
      "Git",
      "CUDA",
      "Hugging Face",
      "FastAPI",
      "Quantized Inference",
      "GPU/HPC Workflows"
    ]
  }
];

const SOCIALS = [
  { icon: Github, l: "GitHub", h: "https://github.com/Delimiter-Ashish" },
  { icon: Linkedin, l: "LinkedIn", h: "https://linkedin.com/in/ashish-joshi24" },
  { icon: GraduationCap, l: "Google Scholar", h: "#" },
  { icon: Mail, l: "Email", h: "mailto:ashish19@bu.edu" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    h(); window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/75 border-b border-border shadow-[0_4px_24px_-12px_rgba(20,40,90,0.12)]" : ""}`}>
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-xl grid place-items-center text-white"
               style={{ background: "linear-gradient(135deg, var(--cyan), var(--violet))" }}>
            <Cpu className="h-4 w-4" />
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/40" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Ashish Joshi</div>
            <div className="text-[10px] font-mono tracking-widest text-cyan">AI / MULTIMODAL / GENAI</div>
          </div>
        </a>
        <ul className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {NAV.map(([l, id]) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-foreground transition-colors">{l}</a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-2">
          {SOCIALS.map(({ icon: Icon, l, h }) => (
            <a key={l} href={h} title={l} aria-label={l} className="icon-btn" target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
          <div className="space-y-1.5">
            <div className="w-6 h-px bg-foreground"></div>
            <div className="w-6 h-px bg-foreground"></div>
            <div className="w-6 h-px bg-foreground"></div>
          </div>
        </button>
      </nav>
      {open && (
        <div className="lg:hidden glass mx-4 mb-2 rounded-xl p-4">
          <ul className="space-y-3 text-sm">
            {NAV.map(([l, id]) => (
              <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-1">{l}</a></li>
            ))}
          </ul>
          <div className="flex gap-2 mt-3">
            {SOCIALS.map(({ icon: Icon, l, h }) => (
              <a key={l} href={h} aria-label={l} className="icon-btn"><Icon className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono text-xs text-cyan">{index}</span>
      <div className="h-px flex-1 max-w-[80px] bg-cyan/40" />
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-navy">{label}</h2>
      <div className="h-px flex-1 divider-signal" />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen text-foreground">
      {/* Global subtle neural background across the whole site */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 80% -10%, color-mix(in oklab, var(--cyan) 18%, transparent), transparent 55%), radial-gradient(ellipse at -10% 80%, color-mix(in oklab, var(--violet) 14%, transparent), transparent 55%), linear-gradient(180deg, oklch(0.99 0.005 240), oklch(0.97 0.008 240))"
        }} />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 opacity-60"><NeuralCanvas density={45} /></div>
      </div>

      <Nav />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0"><NeuralCanvas density={95} /></div>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 40%, color-mix(in oklab, var(--cyan) 22%, transparent), transparent 60%), radial-gradient(ellipse at 20% 80%, color-mix(in oklab, var(--violet) 18%, transparent), transparent 60%)" }} />

        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
          <div className="reveal">
            <div className="chip mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse-glow" />
              Open to AI/ML internships, research collaboration & GenAI roles
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] text-gradient">
              Ashish Joshi
            </h1>
            <p className="mt-4 text-base md:text-lg text-navy/80">
              AI/ML Researcher <span className="text-cyan">·</span> Multimodal AI <span className="text-cyan">·</span> VLMs &amp; LMMs
            </p>
            <p className="mt-5 text-sm md:text-base font-mono text-navy/70">
              Multimodal Learning &amp; Reasoning <span className="text-cyan">·</span> Video AI <span className="text-cyan">·</span> Computer Vision <span className="text-cyan">·</span> LLMs &amp; GenAI <span className="text-cyan">·</span> Agentic AI <span className="text-cyan">·</span> Interpretability
            </p>
            <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
              I design and build intelligent AI systems that combine language, vision, video, retrieval, and reasoning. My work focuses on multimodal learning, video AI, computer vision, LLMs, Generative AI, agentic systems, interpretability, and reliable deployment of real-world AI applications.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
              href="/Ashish_Joshi_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium ring-glow hover:scale-[1.02] transition-transform"
            >
              <FileText className="h-4 w-4" /> View CV
              <ArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </a>
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full glass glass-hover px-5 py-2.5 text-sm font-medium text-navy">
                View Projects
                <ArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <div className="h-8 w-px bg-border mx-1" />
              {SOCIALS.map(({ icon: Icon, l, h }) => (
                <a key={l} href={h} title={l} aria-label={l} className="icon-btn"
                   target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>





{/* tp */}
          {/* RIGHT — profile */}
          <div className="relative h-[460px] md:h-[560px]">
            <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 400 400" aria-hidden>
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="oklch(0.62 0.16 230)" stopOpacity="0.0" />
                  <stop offset=".5" stopColor="oklch(0.62 0.16 230)" stopOpacity="0.85" />
                  <stop offset="1" stopColor="oklch(0.55 0.20 290)" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="none" stroke="url(#g1)" strokeWidth="1.2" className="dash-anim" />
              <circle cx="200" cy="200" r="150" fill="none" stroke="oklch(0.62 0.16 230 / 0.3)" strokeWidth="1" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="oklch(0.55 0.20 290 / 0.3)" strokeWidth="1" strokeDasharray="2 6" />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full p-[2px]"
                   style={{ background: "conic-gradient(from 0deg, oklch(0.62 0.16 230), oklch(0.55 0.20 290), oklch(0.65 0.13 200), oklch(0.62 0.16 230))" }}>
                <div className="h-full w-full rounded-full overflow-hidden bg-white ring-glow">
                  <img src={profileImg} alt="Ashish Joshi" className="h-full w-full object-cover" width={512} height={512} />
                </div>
              </div>
            </div>

            {FLOATING.map((f, i) => {
  const angle = (i / FLOATING.length) * Math.PI * 2;
  const radius = 44;
  const x = 50 + Math.cos(angle) * radius;
  const y = 50 + Math.sin(angle) * radius;

  return (
    <div
      key={f}
      className="hidden md:block absolute animate-float"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        animationDelay: `${i * 0.4}s`,
      }}
    >
      <span className="chip">
        {f}
      </span>
    </div>
  );
})}

            <div className="absolute top-2 right-2 font-mono text-[10px] text-muted-foreground/80">
              <div>NODE — ASHISH.JOSHI</div>
              <div>STATE — ACTIVE</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" idx="// 002">
        <SectionLabel index="002" label="About" />

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <Reveal className="glass rounded-2xl p-7 md:p-8">
            <p className="text-foreground/90 leading-relaxed">
              I am currently pursuing my <strong className="text-navy font-semibold">M.S. in Artificial Intelligence at Boston University</strong>, where I focus on building practical, reliable, and research-driven AI systems across <strong className="text-navy font-semibold">language, vision, video, and multimodal learning</strong>. My interests center on <strong className="text-navy font-semibold">Multimodal Learning &amp; Reasoning</strong>, <strong className="text-navy font-semibold">Video AI</strong>, <strong className="text-navy font-semibold">Computer Vision</strong>, <strong className="text-navy font-semibold">LLMs</strong>, <strong className="text-navy font-semibold">Generative AI</strong>, <strong className="text-navy font-semibold">Agentic AI</strong>, <strong className="text-navy font-semibold">Interpretability</strong>, and real-world AI systems.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              I enjoy working on problems that go beyond simple demos: understanding <strong className="text-foreground font-medium">model behavior</strong>, evaluating <strong className="text-foreground font-medium">failure modes</strong>, improving <strong className="text-foreground font-medium">robustness</strong>, and designing AI pipelines that can generalize beyond controlled settings. My goal is to build intelligent systems that are not only powerful, but also interpretable, reliable, and useful in real-world environments.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Outside of AI, I like playing <strong className="text-foreground font-medium">football</strong> and <strong className="text-foreground font-medium">cooking</strong>. I enjoy the balance between competitive teamwork, creativity, and discipline, which also shapes how I approach research, engineering, and building meaningful AI systems.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p className="font-mono text-xs text-cyan mb-4">// RESEARCH FOCUS</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {ABOUT_CARDS.map(({ icon: Icon, t, d }, i) => (
                <div
                  key={t}
                  className="glass glass-hover rounded-xl p-5"
                  style={{ animation: `reveal-up .7s ${i * 80}ms ease both` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="h-9 w-9 rounded-lg grid place-items-center text-white"
                      style={{
                        background: "linear-gradient(135deg, var(--cyan), var(--violet))",
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <h3 className="text-sm font-semibold">{t}</h3>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CORE EXPERTISE */}
      <Section id="expertise" idx="// 003">
        <SectionLabel index="003" label="Technical Arsenal" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="glass glass-hover rounded-2xl p-7 h-full relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full opacity-50 group-hover:opacity-80 transition-opacity"
                     style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--cyan) 25%, transparent), transparent 70%)" }} />
                <div className="relative flex items-center gap-3 mb-4">
                  <span className="h-11 w-11 rounded-xl grid place-items-center text-white"
                        style={{ background: "linear-gradient(135deg, var(--cyan), var(--violet))" }}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="font-mono text-[11px] text-cyan tracking-widest">E.{String(i + 1).padStart(2, "0")}</div>
                </div>
                <h3 className="relative text-lg font-semibold mb-2">{t}</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" idx="// 004">
        <SectionLabel index="004" label="Selected Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.t} delay={i * 70}>
              <article className="glass glass-hover rounded-2xl p-7 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px divider-signal" />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-[11px] text-cyan tracking-widest mb-2">PROJ.{String(i + 1).padStart(2, "0")}</div>
                    <h3 className="text-xl font-semibold leading-tight">{p.t}</h3>
                    <p className="text-sm text-navy/70 mt-1">{p.s}</p>
                  </div>
                  <span className="h-10 w-10 rounded-xl grid place-items-center text-white shrink-0"
                        style={{ background: "linear-gradient(135deg, var(--cyan), var(--violet))" }}>
                    <Sparkles className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-4 text-sm text-foreground/85 leading-relaxed">{p.one}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.d}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan hover:underline">
                    Details <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan hover:underline"
                  >
                    Code <Github className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PUBLICATIONS */}
      <Section id="publications" idx="// 005">
        <SectionLabel index="005" label="Publications" />
        <div className="space-y-5">
          {PUBS.map((p, i) => (
            <Reveal key={p.t} delay={i * 100}>
              <article className="glass glass-hover rounded-2xl p-7">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="font-mono text-xs text-cyan md:w-24 shrink-0">PUB.{String(i + 1).padStart(2, "0")}</div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold leading-snug">{p.t}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{p.a}</p>
                    <p className="text-sm font-mono text-cyan mt-2">{p.v}{p.doi ? ` · DOI ${p.doi}` : ""}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a href={p.href} className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan hover:underline">
                        Paper <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" idx="// 006">
        <SectionLabel index="006" label="Experience" />
        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-cyan/70 via-violet/40 to-transparent" />
          {EXPERIENCE.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="relative mb-8">
                <span className="absolute -left-[26px] md:-left-[31px] top-5 h-3 w-3 rounded-full bg-cyan ring-glow" />
                <div className="glass glass-hover rounded-2xl p-6 md:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{e.r}</h3>
                      <p className="text-sm text-navy/80 mt-1">{e.o}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-right">
                    <div className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan">
                      <Calendar className="h-3.5 w-3.5" /> {e.dt}
                    </div>

                    <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {e.l}
                    </div>
                  </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {e.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" idx="// 007">
        <SectionLabel index="007" label="AI Systems Toolbox" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STACK.map(({ icon: Icon, g, i: items }, idx) => (
            <Reveal key={g} delay={idx * 70}>
              <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col relative overflow-hidden group">
                <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-0 group-hover:opacity-70 transition-opacity"
                     style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--cyan) 28%, transparent), transparent 70%)" }} />
                <div className="relative flex items-center gap-3 mb-4">
                  <span className="h-10 w-10 rounded-xl grid place-items-center text-white"
                        style={{ background: "linear-gradient(135deg, var(--cyan), var(--violet))" }}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-base font-semibold">{g}</h3>
                </div>
                <div className="relative flex flex-wrap gap-2">
                  {items.map(x => <span key={x} className="chip">{x}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" idx="// 008">
        <SectionLabel index="008" label="Education" />
        <div className="grid md:grid-cols-3 gap-5">
          {EDU.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-11 w-11 rounded-xl grid place-items-center text-white"
                        style={{ background: "linear-gradient(135deg, var(--cyan), var(--violet))" }}>
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div className="font-mono text-xs text-cyan">{e.y}</div>
                </div>
                <h3 className="text-base font-semibold leading-snug">{e.s}</h3>
                <p className="text-sm text-navy/75 mt-1">{e.d}</p>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{e.focus}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Leadership & Awards */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 mt-10">
          <Reveal>
            <div className="glass rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-10 w-10 rounded-xl grid place-items-center text-white"
                      style={{ background: "linear-gradient(135deg, var(--cyan), var(--violet))" }}>
                  <Award className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold">Leadership &amp; Awards</h3>
              </div>
              <ul className="space-y-3">
                {AWARDS.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass rounded-2xl p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-10 w-10 rounded-xl grid place-items-center text-white"
                      style={{ background: "linear-gradient(135deg, var(--cyan), var(--violet))" }}>
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <h3 className="text-lg font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {CERTS.map((c, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CV */}
      <Section id="cv" idx="// 009">
        <SectionLabel index="009" label="Curriculum Vitae" />
        <Reveal>
          <div className="glass rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <p className="relative text-muted-foreground">A detailed CV with publications, projects, and experience is available for download.</p>
            <div className="relative mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/Ashish_Joshi_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium ring-glow hover:scale-[1.02] transition-transform"
            >
              <FileText className="h-4 w-4" /> View CV
            </a>

            <a
              href="/Ashish_Joshi_CV.pdf"
              download="Ashish_Joshi_CV.pdf"
              className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3 text-sm font-medium text-navy"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
          </div>
        </Reveal>
      </Section>

      {/* CONTACT */}
      <Section id="contact" idx="// 010">
        <SectionLabel index="010" label="Contact" />

        <Reveal>
          <div className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div
              className="absolute -top-28 -right-28 h-72 w-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--cyan) 25%, transparent), transparent 70%)",
              }}
            />

            <div
              className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--violet) 18%, transparent), transparent 70%)",
              }}
            />

            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
              <div>
                <p className="font-mono text-xs text-cyan tracking-widest mb-3">
                  // LET'S CONNECT
                </p>

                <h3 className="text-3xl md:text-4xl font-semibold text-gradient leading-tight">
                  Open to meaningful work, research, and collaboration.
                </h3>

                <p className="text-muted-foreground max-w-2xl mt-4 leading-relaxed">
                  I’m always interested in conversations around ambitious technical problems,
                  applied research, intelligent systems, and opportunities where careful
                  engineering meets real-world impact.
                </p>

                <p className="text-muted-foreground max-w-2xl mt-3 leading-relaxed">
                  Whether it is an internship, research direction, collaboration, or a role
                  where I can contribute deeply, feel free to reach out.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Research",
                    "Engineering",
                    "Internships",
                    "Collaboration",
                    "Applied AI",
                  ].map((x) => (
                    <span key={x} className="chip">
                      {x}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ashish19@bu.edu&su=Opportunity%20to%20connect"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium ring-glow hover:scale-[1.02] transition-transform"
                  >
                    <Mail className="h-4 w-4" />
                    Start a Conversation
                    <ArrowRight className="h-4 w-4 opacity-70" />
                  </a>

                  <a
                    href="/Ashish_Joshi_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3 text-sm font-medium text-navy"
                  >
                    <FileText className="h-4 w-4" />
                    View CV
                  </a>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  {
                    icon: Mail,
                    l: "Email",
                    v: "ashish19@bu.edu",
                    h: "mailto:ashish19@bu.edu",
                  },
                  {
                    icon: Github,
                    l: "GitHub",
                    v: "github.com/Delimiter-Ashish",
                    h: "https://github.com/Delimiter-Ashish",
                  },
                  {
                    icon: Linkedin,
                    l: "LinkedIn",
                    v: "linkedin.com/in/ashish-joshi24",
                    h: "https://linkedin.com/in/ashish-joshi24",
                  },
                  {
                    icon: GraduationCap,
                    l: "Google Scholar",
                    v: "Research Profile",
                    h: "#",
                  },
                ].map(({ icon: Icon, l, v, h }) => (
                  <a
                    key={l}
                    href={h}
                    target={h.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="glass glass-hover rounded-xl px-5 py-4 flex items-center gap-4 group"
                  >
                    <span
                      className="h-11 w-11 rounded-xl grid place-items-center text-white shrink-0 shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--cyan), var(--violet))",
                      }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[11px] text-cyan tracking-widest">
                        {l}
                      </div>
                      <div className="text-sm mt-0.5 text-foreground truncate">
                        {v}
                      </div>
                    </div>

                    <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <footer className="relative border-t border-border mt-10 overflow-hidden">
  <div
    className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-40 pointer-events-none"
    style={{
      background:
        "radial-gradient(circle, color-mix(in oklab, var(--cyan) 16%, transparent), transparent 70%)",
    }}
  />

  <div className="mx-auto max-w-7xl px-6 py-10 relative">
    <div className="divider-signal mb-8" />

    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <p className="font-mono text-xs text-cyan tracking-widest mb-2">
          // PORTFOLIO NODE
        </p>

        <p className="text-lg font-semibold text-navy">
          Ashish Joshi
        </p>

        <p className="text-sm text-muted-foreground mt-1">
          M.S. Artificial Intelligence @ Boston University
        </p>

        <p className="text-xs font-mono text-cyan mt-2">
          RESEARCH · ENGINEERING · INTELLIGENT SYSTEMS
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          {SOCIALS.map(({ icon: Icon, l, h }) => (
            <a
              key={l}
              href={h}
              aria-label={l}
              className="icon-btn"
              target={h.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <a
          href="#home"
          aria-label="Back to top"
          className="inline-flex items-center gap-2 rounded-full glass glass-hover px-4 py-2 text-xs font-mono text-cyan border border-cyan/30 hover:border-cyan/60 transition-all"
        >
          Back to top
          <span className="text-sm leading-none">↑</span>
        </a>
      </div>
    </div>

    <div className="mt-7 flex flex-col md:flex-row md:items-center justify-between gap-3 border-t border-border/70 pt-5">
      <p className="text-xs font-mono text-muted-foreground">
        © {new Date().getFullYear()} · ASHISH JOSHI · ALL RIGHTS RESERVED
      </p>

      <p className="text-xs font-mono text-muted-foreground">
        Designed as a living portfolio for research, engineering, and applied AI work.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}

function Section({ id, idx, children }: { id: string; idx: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="absolute top-0 left-0 right-0 h-px divider-signal" />
      <div className="relative mx-auto max-w-7xl px-6">
        <span className="sr-only">{idx}</span>
        {children}
      </div>
    </section>
  );
}
