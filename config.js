// ─────────────────────────────────────────────────────────────────────────────
// config.js — Edit this file to personalize your academic/project homepage.
// Put publication thumbnails in assets/ and set each publication.image path below.
// ─────────────────────────────────────────────────────────────────────────────

const USER_CONFIG = {
  name:       "Byungjun Kim",
  role:       "M.S. Student in AI",
  university: "BISPL, KAIST",
  email:      "bjkim@kaist.ac.kr",


  bio: "My research focuses on generative models and vision-language-action (VLA) models, with particular interests in inference-time guidance and diverse generation. I am interested in developing efficient methods to improve the diversity, controllability, and generalization of pretrained models without expensive retraining.",


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
      title:    "MotionCFG: Boosting Motion Dynamics via Semantic Motion Sharpening",
      authors:  "Byungjun Kim, Soobin Um, Jong Chul Ye",
      authorMarks: { "Soobin Um": "†", "Jong Chul Ye": "†" },
      authorNote: "† Co-corresponding authors.",
      venue:    "NeurIPS 2026",
      image:    "assets/motioncfg.png",
      links:    {
        pdf: "https://arxiv.org/abs/2603.14073",
      },
      abstract: "A training-free guidance method that perturbs motion-related concept embeddings to improve motion dynamics and reduce static bias in text-to-video generation.",
    },
    
    {
      year:     2026,
      title:    "Diverse Text-to-Image Generation via Contrastive Noise Optimization",
      authors:  "Byungjun Kim, Soobin Um, Jong Chul Ye",
      authorMarks: { "Byungjun Kim": "*", "Soobin Um": "*" },
      authorNote: "* Equal contribution (co-first authors).",
      venue:    "The Fourteenth International Conference on Learning Representations (ICLR) 2026",
      image:    "assets/cno.jpg",
      links:    {
        pdf: "https://arxiv.org/abs/2510.03813",
        openreview: "https://openreview.net/forum?id=EVRMnAREc3",
      },
      abstract: "A training-free inference framework that optimizes initial noise vectors to improve semantic diversity and mitigate mode collapse in text-to-image generation.",
    },

  ],

  researchInterests: [ { name: "Vision-Language-Action Models", desc: "Vision-language-action models for embodied intelligence, with a focus on multimodal perception, action generation, and generalizable decision-making from visual and language inputs.", tags: ["VLA", "Embodied AI", "Multimodal Learning"], }, { name: "Inference-Time Guidance", desc: "Training-free control methods that steer pretrained generative models at inference time through semantic perturbations, adaptive guidance, and test-time optimization.", tags: ["Guidance", "Training-Free", "Test-Time Optimization"], }, { name: "Diverse Generation", desc: "Methods for improving diversity, mode coverage, and controllability in generative models through noise-space and representation-space optimization.", tags: ["Diversity", "Mode Coverage", "Generative Models"], }, ],

  news: [
    {
      date: "2026",
      badge: "NeurIPS",
      text: "MotionCFG: Boosting Motion Dynamics via Semantic Motion Sharpening accepted to NeurIPS 2026.",
    },
      {
      date: "2026",
      badge: "Academic",
      text: "Starting an internship from Vector Institute, Toronto, Canada from September 2026.",
    },
    {
      date: "2026",
      badge: "ICLR",
      text: "Diverse Text-to-Image Generation via Contrastive Noise Optimization accepted to ICLR 2026.",
    },
  ],

  education: [
    {
      period: "2026 – Present",
      degree: "AI Research Internship",
      institution: "Vector Institute",
    },
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
