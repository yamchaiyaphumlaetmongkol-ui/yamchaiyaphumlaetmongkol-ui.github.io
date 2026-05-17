export const profileData = {
  personal: {
    fullName: "Lertmongkon Yamchaiphum",
    firstName: "Lertmongkon",
    lastName: "Yamchaiphum",
    nickname: "Pac",
    title: "Full-Stack Developer",
    location: "Thailand",
    bio: "A highly driven Software Engineer with hands-on experience in building scalable enterprise web applications. Specializing in modern stacks like T3 (Next.js, TypeScript, tRPC) and .NET architectures, backed by a strong foundation in computer networks and systems security to engineer secure, resilient, and performant digital solutions.",
  },
  
  contacts: {
    phone: "098-617-8731",
    email: "park070504ou@gmail.com",
    line: "0986178731",
    github: "https://github.com/yamchaiyaphumlaetmongkol-ui",
    githubUser: "Pac yamchaiyaphumlaetmongkol",
    linkedin: "https://www.linkedin.com/in/laetmongkol-yamchaiyaphum-06532140b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    linkedinUser: "Laetmongkol Yamchaiphum",
  },

  education: [
    {
      school: "University of Phayao",
      period: "2022 – 2026 (Expected)",
      degree: "B.Sc. Information Technology",
      gpa: "3.66",
    },
    {
      school: "Khonsan Wittayakom School",
      period: "2019 – 2022",
      degree: "Science-Mathematics Program",
      gpa: "3.19",
    },
  ],

  workExperience: [
    {
      company: "Soft Square International Co., Ltd.",
      role: "Software Developer Intern",
      period: "Nov 2025 – Feb 2026",
      tag: "Internship",
      highlights: [
        "Contributed to the core development of **ECT-ERP-HRMS** (Human Resource Management System) for the Office of the Election Commission of Thailand, streamlining administrative workflows for government personnel.",
        "Designed and optimized complex database queries and operational reports for **MAKRO** (NEWTJE MAKRO) using enterprise frameworks, reducing data generation latency.",
        "Architected a high-performance productivity dashboard using the **T3 Stack** (Next.js, TypeScript, tRPC) and ClickUp API, enabling real-time metrics tracking and boosting team resource planning efficiency.",
        "Developed a secure Gmail API notification system Proof-of-Concept (PoC) to automate real-time status alerts, laying the foundation for modern notification flows in legacy platforms.",
      ],
    },
  ],

  projects: [
    {
      title: "Performance Dashboard",
      description: "A full-stack synchronization tool that bridges ClickUp data to local systems for team productivity analysis.",
      image: "images/project-dashboard.png",
      tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL"],
    },
    {
      title: "ECT-ERP-HRMS",
      description: "Contribution to a large-scale Human Resource Management System for government use.",
      image: "images/project-hrms.png",
      tech: ["C#", ".NET", "SQL Server", "Angular"],
    },
  ],

  skills: {
    frontend: {
      title: "Frontend",
      skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
    },
    backend: {
      title: "Backend",
      skills: ["C# (.NET)", "Java (Spring Boot)", "tRPC", "RESTful APIs"],
    },
    database: {
      title: "Database",
      skills: ["SQL Server", "MySQL", "PostgreSQL", "Advanced Queries"],
    },
    devops: {
      title: "DevOps & Tools",
      skills: ["Netlify", "Vercel", "CI/CD", "Environment Variables", "Git", "Wireshark"],
    },
    gitCommands: {
      title: "Git & Version Control",
      commands: [
        "Git Flow & Branching",
        "Collaborative Pull Requests",
        "Conflict Resolution & Rebasing",
        "No-Fast-Forward Merging (--no-ff)",
        "Rebase Continuation (--continue)",
        "Branch Management (checkout -b / switch)",
        "Remote Sync (push / pull / fetch)",
      ],
    },
    aiPrompting: {
      title: "AI-Assisted Development",
      details: [
        "Developer Productivity Multiplier (Accelerated prototyping & development velocity)",
        "Role-Constrained Prompting (Enforcing secure, meticulous, and optimized coding styles)",
        "Iterative & TODO-Driven Guidelines (Designing structured prompts for clean code generation)",
        "Ambiguity Handling (Instructing LLMs to validate requirements and ask clarifying questions before coding)",
        "System Prompt Standardization (Maintaining standardized .claudeprompt / .copilot files for team alignment)",
      ],
    },
  },

  languages: [
    { name: "Thai", level: "Native", percent: "100%" },
    { name: "English", level: "Technical Proficiency (Reading documentation & API specifications)", percent: "60%" },
  ],

  certifications: [
    "CISCO CCNA",
    "CISCO Cybersecurity Essentials",
    "Forensic Techniques for Email (UP)",
    "Basic Cyber MOOC (NCSA)",
  ],

  achievements: [
    {
      place: "4th Place",
      name: "PSRU Cyber Hackathon #2",
      description: "Advanced CTF & Security Workshop",
    },
    {
      place: "Participant",
      name: "PSRU Cyber Hackathon #3",
      description: "CTF Competition & Workshop",
    },
  ],

  honors: [
    { title: "First-Class Honors", description: "B.Sc. in Information Technology" },
    { title: "Academic Excellence", description: "Consecutive Awards (2022-2024)" },
  ],

  favoriteGames: [
    { name: "REPO", logo: "images/logo-repo.png" },
    { name: "RUBBER BANDITS", logo: "images/logo-bandits.png" },
    { name: "NARUTO NINJA STORM 4", logo: "images/logo-naruto.png" },
    { name: "NO TIME TO RELAX", logo: "images/logo-relax.png" },
    { name: "BORDERLANDS", logo: "images/logo-borderlands.png" },
    { name: "RAFT", logo: "images/logo-raft.png" },
    { name: "Unspottable", logo: "images/logo-unspottable.png" },
  ],
};
