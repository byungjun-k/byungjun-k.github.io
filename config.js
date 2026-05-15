// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic/project homepage.
// Put publication thumbnails in assets/ and set each publication.image path below.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Byungjun Kim",
  role:       "M.S. Student in AI",
  university: "BISPL, KAIST",
  email:      "bjkim@kaist.ac.kr",

  bio:        "I work on generative models, with a current focus on AR/video generation, inference-time guidance, and noise/embedding optimization. My recent projects study how pretrained diffusion and video generators can be steered at inference time without architectural modification or expensive retraining.",

  // Put your profile image at this path, or change the path below.
  photo:      "assets/profile.jpeg",

  links: {
    scholar: "https://scholar.google.com/citations?user=H2qpPTkAAAAJ&hl=ko&oi=sra",
    github:  "",
    twitter: "",
    cv:      "assets/cv.pdf",
  },

  publications: [
    {
      year:     2026,
      title:    "Diverse Text-to-Image Generation via Contrastive Noise Optimization",
      authors:  "Byungjun Kim, Soobin Um, Jong Chul Ye",
      venue:    "The Fourteenth International Conference on Learning Representations (ICLR) 2026",
      image:    "assets/cno.jpg",
      links:    {
        pdf: "https://arxiv.org/abs/2510.03813",
        openreview: "https://openreview.net/forum?id=EVRMnAREc3",
      },
      abstract: "A training-free inference framework that optimizes initial noise vectors to improve semantic diversity and mitigate mode collapse in text-to-image generation.",
    },
    {
      year:     2026,
      title:    "MotionCFG: Boosting Motion Dynamics via Stochastic Concept Perturbation",
      authors:  "Byungjun Kim, Soobin Um, Jong Chul Ye",
      venue:    "Under Review",
      image:    "assets/motioncfg.png",
      links:    {
        pdf: "https://arxiv.org/abs/2603.14073",
      },
      abstract: "A training-free guidance method that perturbs motion-related concept embeddings to improve motion dynamics and reduce static bias in text-to-video generation.",
    },
  ],

  researchInterests: [
    {
      name: "AR / Video Generation",
      desc: "Long-horizon autoregressive and diffusion-based video generation, with an emphasis on temporal consistency, motion dynamics, and stable generation trajectories.",
      tags: ["AR Video", "Temporal Modeling", "Long-Horizon Generation"],
    },
    {
      name: "Inference-Time Guidance",
      desc: "Training-free control methods that steer pretrained diffusion and video generators through semantic perturbations and adaptive guidance schedules.",
      tags: ["Guidance", "Training-Free", "Diffusion"],
    },
    {
      name: "Noise / Embedding Optimization",
      desc: "Noise-space and embedding-space optimization for improving diversity, mode coverage, and motion behavior without changing model weights.",
      tags: ["Noise Optimization", "Embedding Perturbation", "Diversity"],
    },
  ],

  news: [
    {
      date: "2026",
      badge: "ICLR",
      text: "Diverse Text-to-Image Generation via Contrastive Noise Optimization accepted to ICLR 2026.",
    },
    {
      date: "2026",
      badge: "Preprint",
      text: "MotionCFG released as a preprint and is currently under review.",
    },
  ],

  education: [
    {
      period: "2025 – Present",
      degree: "M.S., Graduate School of AI",
      institution: "KAIST · Bio-Imaging Signal Processing Lab (BISPL)",
    },
    {
      period: "2019 – 2025",
      degree: "B.S., School of Electrical Engineering",
      institution: "KAIST · Summa cum laude",
    },
  ],
};
