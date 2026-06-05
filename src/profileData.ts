export interface ProfileType {
  personal: {
    fullName: string;
    firstName: string;
    lastName: string;
    nickname: string;
    title: string;
    location: string;
    bio: string;
  };
  contacts: {
    phone: string;
    email: string;
    line: string;
    github: string;
    githubUser: string;
    linkedin: string;
    linkedinUser: string;
  };
  education: Array<{
    school: string;
    period: string;
    degree: string;
    gpa: string;
  }>;
  workExperience: Array<{
    company: string;
    role: string;
    period: string;
    tag: string;
    highlights: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    image: string;
    tech: string[];
  }>;
  skills: {
    frontend: { title: string; skills: string[] };
    backend: { title: string; skills: string[] };
    database: { title: string; skills: string[] };
    devops: { title: string; skills: string[] };
    gitCommands: { title: string; commands: string[] };
    aiPrompting: { title: string; summary: string; details: string[] };
  };
  languages: Array<{ name: string; level: string }>;
  certifications: string[];
  achievements: Array<{
    place: string;
    name: string;
    description: string;
  }>;
  honors: Array<{ title: string; description: string }>;
  favoriteGames: any[];
}

export const profileData: Record<'en' | 'th', ProfileType> = {
  en: {
    personal: {
      fullName: "Lertmongkon Yamchaiphum",
      firstName: "Lertmongkon",
      lastName: "Yamchaiphum",
      nickname: "Pac",
      title: "Software Developer",
      location: "Thailand",
      bio: "Software Developer with practical experience working on production web applications. Contributed to backend features, dashboards, and reporting systems used in business workflows. Interested in growing as a Software Engineer, with focus on writing maintainable code and learning scalable and reliable system design.",
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
        period: "2022 – 2026",
        degree: "Bachelor of Science in Information Technology (First-Class Honors)",
        gpa: "3.66",
      },
    ],

    workExperience: [
      {
        company: "Soft Square International Co., Ltd.",
        role: "Software Developer Cooperative Education",
        period: "Nov 2025 – Feb 2026",
        tag: "Cooperative Education",
        highlights: [
          "Designed and developed HRMS frontend features and dashboards using Angular and TypeScript, seamlessly integrating them with C#/.NET backend services.",
          "Wrote and optimized complex SQL queries for data extraction, transformation, and reporting, ensuring high performance, accuracy, and data-driven decision-making.",
          "Maintained legacy modules, resolved bugs during UAT, and created user documentation to improve system stability and support end-users.",
        ],
      },
    ],

    projects: [
      {
        title: "ECT-ERP+HRMS Integration",
        description: "Full-stack development (both Angular frontend and .NET Core backend APIs/database components) for the Election Commission of Thailand.",
        image: "images/project-hrms.png",
        tech: ["Angular", "C#", ".NET Core", "PostgreSQL", "JasperReports"],
      },
      {
        title: "SS-Task-Report",
        description: "A full-stack task synchronization utility integrating with the ClickUp API to streamline task logging, story point assignment, and progress reporting.",
        image: "images/project-dashboard.png",
        tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Netlify"],
      },
      {
        title: "NEWTJE MAKRO",
        description: "Full-stack development of React frontend screens and Spring Boot backend enterprise-level reports and database integrations.",
        image: "images/project-makro.png",
        tech: ["React", "Spring Boot", "Oracle", "JasperReports"],
      },
    ],

    skills: {
      frontend: {
        title: "Frontend",
        skills: ["Angular", "Bootstrap", "TypeScript", "HTML", "CSS", "Tailwind", "React", "Next.js", "JavaScript"],
      },
      backend: {
        title: "Backend",
        skills: ["C#", "ASP.NET", "Java", "Spring Boot", "Node.js"],
      },
      database: {
        title: "Database",
        skills: ["MySQL", "PostgreSQL"],
      },
      devops: {
        title: "Tools",
        skills: ["JasperReport", "Git", "GitHub", "Figma"],
      },
      gitCommands: {
        title: "Soft Skills",
        commands: ["Problem-solving", "Communication", "Team Collaboration"],
      },
      aiPrompting: {
        title: "AI-Assisted Development",
        summary: "Production-grade templates for HRMS/ERP projects — clarify specs, prevent regression, and ship in testable phases.",
        details: [
          "Pre-Flight Spec Validation",
          "IDE Meta-Prompt (Context-Aware Plan)",
          "Regression-Safe Implementation",
          "Structured TODO Milestones",
          "Manual Test & UAT Checklist",
          "Schema Design · Integration · ADR",
        ],
      },
    },

    languages: [
      { name: "Thai", level: "" },
      { name: "English", level: "" },
    ],

    certifications: [
      "CISCO CCNA",
      "CISCO Cybersecurity Essentials",
      "Forensic Techniques for Email (UP)",
      "Basic Cyber MOOC (NCSA)",
    ],

    achievements: [
      {
        place: "4th Place (Honorable Mention)",
        name: "PSRU Cyber Hackathon #2: Advanced CTF & Security Workshop",
        description: "Dec 2024",
      },
      {
        place: "Participant",
        name: "PSRU Cyber Hackathon #3: Cybersecurity Skill Competition",
        description: "Mar 2026",
      },
    ],

    honors: [
      { title: "Academic Excellence Consecutive Awards", description: "2022, 2023, 2024" },
    ],

    favoriteGames: [],
  },
  th: {
    personal: {
      fullName: "เลิศมงคล ยามชัยภูมิ",
      firstName: "เลิศมงคล",
      lastName: "ยามชัยภูมิ",
      nickname: "ภัค",
      title: "นักพัฒนาซอฟต์แวร์ (Software Developer)",
      location: "ประเทศไทย",
      bio: "นักพัฒนาซอฟต์แวร์ที่มีประสบการณ์จริงในการทำงานกับแอปพลิเคชันเว็บที่ใช้งานจริง มีส่วนร่วมในการพัฒนาฟีเจอร์แบ็กเอนด์ แดชบอร์ด และระบบรายงานที่ใช้ในกระบวนการทำงานทางธุรกิจ สนใจที่จะพัฒนาตนเองในฐานะวิศวกรซอฟต์แวร์ โดยเน้นการเขียนโค้ดที่ดูแลรักษาง่าย และเรียนรู้การออกแบบระบบที่ปรับขนาดได้และเชื่อถือได้",
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
        school: "มหาวิทยาลัยพะเยา",
        period: "2565 – 2569",
        degree: "วิทยาศาสตรบัณฑิต (วท.บ.) เทคโนโลยีสารสนเทศ (เกียรตินิยมอันดับ 1)",
        gpa: "3.66",
      },
    ],

    workExperience: [
      {
        company: "บริษัท ซอฟต์ สแควร์ อินเตอร์เนชั่นแนล จำกัด",
        role: "นักพัฒนาซอฟต์แวร์ สหกิจศึกษา (Software Developer Cooperative Education)",
        period: "พ.ย. 2568 – ก.พ. 2569",
        tag: "สหกิจศึกษา",
        highlights: [
          "ออกแบบและพัฒนาฟีเจอร์ HRMS ด้าน frontend และแดชบอร์ดด้วย Angular และ TypeScript โดยเชื่อมต่อกับบริการ backend C#/.NET อย่างราบรื่น",
          "เขียนและปรับปรุง SQL query ที่ซับซ้อนสำหรับการดึง แปลง และรายงานข้อมูล เพื่อประสิทธิภาพ ความแม่นยำ และการตัดสินใจบนข้อมูล",
          "ดูแลโมดูล legacy แก้ไขบั๊กช่วง UAT และจัดทำเอกสารคู่มือผู้ใช้ เพื่อเพิ่มความเสถียรของระบบและสนับสนุนผู้ใช้งาน",
        ],
      },
    ],

    projects: [
      {
        title: "ECT-ERP+HRMS Integration",
        description: "การพัฒนาฟีเจอร์แบบฟูลสแต็ก (Full-Stack) ทั้งส่วนหน้าเว็บแบบ Angular และระบบคิวรี่หลังบ้าน .NET Core สำหรับระบบบริหารทรัพยากรบุคคล กกต.",
        image: "images/project-hrms.png",
        tech: ["Angular", "C#", ".NET Core", "PostgreSQL", "JasperReports"],
      },
      {
        title: "SS-Task-Report",
        description: "เครื่องมือฟูลสแต็กสำหรับซิงค์และวิเคราะห์แต้มภารกิจทีมร่วมกับ ClickUp API",
        image: "images/project-dashboard.png",
        tech: ["Next.js", "TypeScript", "tRPC", "PostgreSQL", "Netlify"],
      },
      {
        title: "NEWTJE MAKRO",
        description: "การพัฒนาฟีเจอร์แบบฟูลสแต็ก (Full-Stack) ทั้งส่วนหน้าจอแสดงผลบน React และระบบรายงานระดับองค์กรหลังบ้านด้วย Spring Boot และ Oracle Database",
        image: "images/project-makro.png",
        tech: ["React", "Spring Boot", "Oracle", "JasperReports"],
      },
    ],

    skills: {
      frontend: {
        title: "หน้าบ้าน (Frontend)",
        skills: ["Angular", "Bootstrap", "TypeScript", "HTML", "CSS", "Tailwind", "React", "Next.js", "JavaScript"],
      },
      backend: {
        title: "หลังบ้าน (Backend)",
        skills: ["C#", "ASP.NET", "Java", "Spring Boot", "Node.js"],
      },
      database: {
        title: "ระบบฐานข้อมูล (Database)",
        skills: ["MySQL", "PostgreSQL"],
      },
      devops: {
        title: "เครื่องมือ (Tools)",
        skills: ["JasperReport", "Git", "GitHub", "Figma"],
      },
      gitCommands: {
        title: "ทักษะด้านอ่อน (Soft Skills)",
        commands: ["การแก้ปัญหา (Problem-solving)", "การสื่อสาร (Communication)", "การทำงานร่วมกับทีม (Team Collaboration)"],
      },
      aiPrompting: {
        title: "การพัฒนาซอฟต์แวร์ร่วมกับ AI (AI-Assisted Development)",
        summary: "เทมเพลตที่ใช้จริงในโปรเจกต์ HRMS/ERP — เคลียร์สเปก ป้องกัน Regression ส่งมอบทีละเฟส",
        details: [
          "Pre-Flight — ตรวจสเปกก่อนลงมือ",
          "IDE Meta-Prompt (แผนจากโค้ดจริง)",
          "แก้โค้ดอย่างปลอดภัย (Regression-Safe)",
          "แผนงาน TODO ทีละเฟส",
          "ชุดทดสอบมือ & UAT",
          "Schema · Integration · ADR",
        ],
      },
    },

    languages: [
      { name: "ภาษาไทย", level: "" },
      { name: "ภาษาอังกฤษ", level: "" },
    ],

    certifications: [
      "CISCO CCNA",
      "CISCO Cybersecurity Essentials",
      "เทคนิคการตรวจนิติวิทยาศาสตร์ทางอีเมล (ม.พะเยา)",
      "หลักสูตรความปลอดภัยไซเบอร์ขั้นพื้นฐาน (สกมช. MOOC)",
    ],

    achievements: [
      {
        place: "อันดับ 4 (รองชนะเลิศ)",
        name: "PSRU Cyber Hackathon #2: Advanced CTF & Security Workshop",
        description: "ธ.ค. 2567",
      },
      {
        place: "ผู้เข้าร่วม",
        name: "PSRU Cyber Hackathon #3: Cybersecurity Skill Competition",
        description: "มี.ค. 2569",
      },
    ],

    honors: [
      { title: "รางวัลผลการเรียนดีเยี่ยมต่อเนื่อง", description: "2565, 2566, 2567" },
    ],

    favoriteGames: [],
  },
};
