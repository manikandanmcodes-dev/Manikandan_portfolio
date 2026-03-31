export const defaultAppData = {
  "global": {
    "siteName": "Manikandan M",
    "siteTagline": "Building cinematic digital experiences,\none pixel at a time.",
    "copyrightYear": "2026",
    "credit": "Crafted with React & ❤",
    "contactEmail": "manikandan.m.codes@gmail.com"
  },
  "navigation": [
    {
      "id": "nav-1",
      "label": "About",
      "href": "#about"
    },
    {
      "id": "nav-2",
      "label": "Process",
      "href": "#process"
    },
    {
      "id": "nav-3",
      "label": "Portfolio",
      "href": "#portfolio"
    },
    {
      "id": "nav-5",
      "label": "Blog",
      "href": "#blog"
    },
    {
      "id": "nav-6",
      "label": "Contact",
      "href": "#contact"
    }
  ],
  "hero": {
    "badgeIcon": "✦",
    "badgeText": "Available for work",
    "label": "Welcome",
    "titleLine1": "Every Developer",
    "titleLine2": "Starts Somewhere",
    "subtitle": "I design and build AI-powered SaaS applications using LLMs, automation, and backend systems — focused on real-world impact.",
    "primaryCtaText": "View My Work ↓",
    "primaryCtaLink": "#portfolio",
    "secondaryCtaText": "Get In Touch →",
    "secondaryCtaLink": "#contact"
  },
  "about": {
    "label": "About Me",
    "titleStart": "Building AI Systems That",
    "titleHighlight": "Solve Real Problems",
    "text1": "I’m an AI-focused developer specializing in LLM-powered applications and SaaS systems. I build real-world solutions like prediction models, automation workflows, and intelligent tools that solve practical problems.",
    "text2": "My focus is on combining machine learning, backend engineering, and automation to create scalable and impactful products.",
    "cvText": "Download CV ↓",
    "cvLink": "/cv.pdf",
    "talkText": "Let's Talk",
    "talkLink": "#contact",
    "skills": [
      {
        "id": "s-1",
        "label": "LLM Development",
        "pct": "91"
      },
      {
        "id": "s-2",
        "label": "Machine Learning",
        "pct": "86"
      },
      {
        "id": "s-3",
        "label": "Python",
        "pct": "95"
      },
      {
        "id": "s-4",
        "label": "Automation Workflows",
        "pct": "79"
      }
    ],
    "servicesLabel": "Services",
    "servicesTitle": "What I Build",
    "servicesDesc": "I build AI-powered systems, SaaS products, and automation tools that solve real-world problems.",
    "services": [
      {
        "id": "srv-1",
        "icon": "⬡",
        "title": "LLM Applications",
        "desc": "Building AI-powered tools using large language models for automation, chat systems, and intelligent workflows."
      },
      {
        "id": "srv-2",
        "icon": "◈",
        "title": "SaaS Development",
        "desc": "Designing and developing scalable SaaS products with backend systems, APIs, and real-world use cases."
      },
      {
        "id": "srv-3",
        "icon": "⬡",
        "title": "Machine Learning Systems",
        "desc": "Creating predictive models and data-driven solutions for healthcare, optimization, and analytics."
      },
      {
        "id": "srv-4",
        "icon": "◆",
        "title": "Automation Workflows",
        "desc": "Developing automated pipelines using tools like N8N to streamline processes and improve efficiency."
      }
    ]
  },
  "process": {
    "label": "How I Work",
    "title": "The Process",
    "desc": "My approach to building AI-powered applications and scalable SaaS systems.",
    "steps": [
      {
        "id": "p-1",
        "num": "01",
        "title": "Problem & Strategy",
        "desc": "Understanding the problem, defining use cases, and deciding the right approach using AI, automation, or backend systems."
      },
      {
        "id": "p-2",
        "num": "02",
        "title": "System Design",
        "desc": "Designing scalable architecture, selecting models (ML/LLM), APIs, and planning efficient system workflows."
      },
      {
        "id": "p-3",
        "num": "03",
        "title": "Build & Integrate",
        "desc": "Developing applications by combining backend systems, AI models, and GenAI features like chatbots or RAG when needed."
      },
      {
        "id": "p-4",
        "num": "04",
        "title": "Deploy & Improve",
        "desc": "Deploying systems, optimizing performance, and continuously improving based on real-world usage."
      }
    ]
  },
  "portfolio": {
    "label": "Selected Work",
    "title": "Portfolio",
    "desc": "A curated collection of projects that showcase creativity, engineering, and craft.",
    "projects": [
      {
        "id": "proj-1",
        "displayId": "1",
        "title": "AI Career Path Recommender",
        "desc": "AI-powered system that analyzes user resumes using NLP, extracts skills and interests, and recommends relevant job roles. It further identifies skill gaps for selected roles and generates a personalized learning roadmap.",
        "tags": [
          "ML",
          "Python",
          "AI"
        ],
        "color": "#00ffcc",
        "fullContent": "This project is designed to bridge the gap between a user’s current skills and industry job requirements.\nThe system analyzes resumes using Natural Language Processing (NLP) to extract structured information such as skills, interests, and experience. Based on this, it recommends suitable job roles aligned with the user’s profile.\nFor a selected job role, the system compares user skills with real-world job requirements (collected via web scraping) and identifies missing skills. It then generates a personalized learning roadmap to help users systematically acquire those skills.\nThe roadmap can be downloaded, enabling users to follow a clear, actionable path toward their target career.",
        "image": "https://cdni.iconscout.com/illustration/premium/thumb/cv-resume-analysis-8637236-6873553.png"
      },
      {
        "id": "proj-3",
        "displayId": "2",
        "title": "AI Support Agent (LLM + RAG)",
        "desc": "Built an AI-powered support agent using LLM + RAG to deliver context-aware, accurate responses by retrieving information from a custom knowledge base, reducing hallucinations and improving reliability.",
        "tags": [
          "LLM",
          "RAG",
          "Python"
        ],
        "color": "#00d4ff",
        "fullContent": "This project focuses on building an intelligent AI support agent capable of understanding user queries and providing accurate, context-aware responses.\nInstead of relying solely on a Large Language Model (LLM), the system uses a Retrieval-Augmented Generation (RAG) pipeline to fetch relevant information from a custom knowledge base before generating responses.\nThis approach significantly reduces hallucinations and ensures that answers are grounded in real data such as documents, FAQs, or web content.\nThe system is designed to simulate a real-world support assistant capable of handling customer queries, internal documentation search, and automated assistance at scale.",
        "image": "https://www.sonarsem.com/wp-content/uploads/2024/11/AI-RAG-1.jpg"
      },
      {
        "id": "proj-4",
        "displayId": "3",
        "title": "Web-Aware AI Agent (LLM + Tools)",
        "desc": "Built an intelligent AI agent that can search the web, read content, and generate context-aware responses using tool-based reasoning, enabling real-time, accurate information retrieval beyond static LLM knowledge.",
        "tags": [
          "AI Agent",
          "Web Scraping",
          "LLM"
        ],
        "color": "#ff3cac",
        "fullContent": "This project focuses on building a Web-Aware AI Agent that overcomes the limitations of traditional LLM-based chatbots.\nWhile standard models rely only on pre-trained knowledge, this system is designed to interact with real-time data sources by dynamically accessing the web.\nThe agent can search for information, navigate web pages, extract relevant content, and use reasoning to generate accurate and up-to-date responses.\nBy combining LLM capabilities with external tools and multi-step reasoning, the system behaves more like a digital assistant than a simple chatbot.",
        "image": "https://thumbs.dreamstime.com/b/ai-agent-network-digital-intelligence-smart-system-processing-unit-black-icon-depicts-microchip-connections-symbolizing-383726732.jpg"
      },
      {
        "id": "proj-2",
        "displayId": "4",
        "title": "AI Lead Research & Outreach System",
        "desc": "Built an automated system that scrapes leads, enriches data, analyzes prospects using AI, and generates personalized outreach messages — streamlining the entire lead generation and cold outreach workflow.",
        "tags": [
          "Automation",
          "Selenium",
          "n8n "
        ],
        "color": "#b44fff",
        "fullContent": "This project focuses on automating the complete lead generation and outreach process using AI and workflow automation.\nThe system collects raw leads from online sources using web scraping, cleans and structures the data, and then uses AI to analyze each lead for relevance.\nBased on this analysis, the system generates personalized outreach messages tailored to each prospect.\nThe workflow is orchestrated using automation tools, enabling scalable and efficient lead research, qualification, and outreach without manual effort.",
        "image": "https://av-eks-lekhak.s3.amazonaws.com/media/__sized__/article_images/image_21QqUFF-thumbnail_webp-600x300.webp"
      },
      {
        "id": "proj-5",
        "displayId": "5",
        "title": "ReturnGuard – AI Return Abuse Detector",
        "desc": "Built a WooCommerce plugin that tracks customer return behavior, detects abuse patterns, and flags high-risk users using rule-based and AI-driven scoring.",
        "tags": [
          "WordPress",
          "PHP"
        ],
        "color": "#00ffcc",
        "fullContent": "ReturnGuard is a WordPress/WooCommerce plugin designed to detect and prevent return abuse in e-commerce platforms.\nThe system analyzes customer return behavior, tracks patterns over time, and assigns a risk score based on predefined rules and behavioral analysis.\nIt helps store owners identify suspicious users, reduce losses from fraudulent returns, and enforce smarter return policies.",
        "image": "https://kinsta.com/wp-content/uploads/2021/09/abstract-wordpress-plugin-1024x512.jpg"
      }
    ]
  },
  "blog": {
    "label": "Writing",
    "title": "Blog",
    "desc": "Sharing insights on AI, LLMs, SaaS development, and real-world projects.",
    "posts": [
      {
        "id": "post-1",
        "num": "01",
        "tag": "AI Systems",
        "title": "Building Intelligent AI Applications",
        "excerpt": "How I design and build AI-powered applications using LLMs to solve real-world problems.",
        "date": "Mar 2026",
        "color": "#00ffcc"
      },
      {
        "id": "post-2",
        "num": "02",
        "tag": "SaaS Development",
        "title": "Designing Scalable SaaS Products",
        "excerpt": "How I build SaaS applications by turning ideas into scalable, user-focused products.",
        "date": "Feb 2026",
        "color": "#b44fff"
      },
      {
        "id": "post-3",
        "num": "03",
        "tag": "ML Models",
        "title": "From ML Model to Real-World Solution",
        "excerpt": "How I develop and apply machine learning models to solve practical problems.",
        "date": "Jan 2026",
        "color": "#00d4ff"
      }
    ],
    "ctaTitleStart": "Let’s Build AI-Powered",
    "ctaTitleHighlight": "Solutions",
    "ctaDesc": "Have an idea for an AI, SaaS, or ML project? Let’s turn it into a real-world solution.\n",
    "ctaBtnText": "Start a Conversation",
    "ctaBtnLink": "#contact"
  },
  "contact": {
    "label": "Get In Touch",
    "title": "Contact",
    "desc": "Have a project in mind? Let's make it exceptional together.",
    "infoTitle": "Let’s Build AI-Powered Solutions",
    "infoDesc": "I’m open to opportunities in AI, SaaS, and machine learning projects. Feel free to reach out and let’s build something impactful.",
    "socials": [
      {
        "id": "soc-1",
        "label": "GitHub",
        "href": "https://github.com/manikandanmcodes-dev",
        "icon": "github"
      },
      {
        "id": "soc-2",
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/in/mani-kandan-m-",
        "icon": "linkedin"
      },
      {
        "id": "soc-3",
        "label": "Twitter",
        "href": "https://x.com/CodesManikandan",
        "icon": "twitter"
      }
    ]
  }
};
