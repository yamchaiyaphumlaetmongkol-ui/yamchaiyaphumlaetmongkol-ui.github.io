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
    aiPrompting: { title: string; details: string[] };
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
      title: "Full-Stack Developer",
      location: "Thailand",
      bio: "An adaptable Full-Stack Developer Intern with a solid academic foundation (First-Class Honors) and hands-on experience in building clean Angular, React, and C# (.NET) applications. Passionate about solving real-world development challenges, delivering robust features, and utilizing modern developer workflows effectively.",
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
        tag: "Cooperative Education",
        highlights: [
          "Developed full-stack features—both Angular frontend and .NET Core backend APIs/database components—for **ECT-ERP+HRMS** (Election Commission of Thailand) with **PostgreSQL**, delivering features on time and resolving bugs iteratively.",
          "Delivered full-stack solutions for **MAKRO** (NEWTJE MAKRO) by building React frontend views, Spring Boot backend services, and Oracle Database enterprise-level report integrations.",
          "Engineered **SS-Task-Report** as a standalone full-stack utility using **Next.js (T3 Stack)**, **Netlify**, and **Neon (PostgreSQL)**, integrating **ClickUp API** to streamline team task points and scheduling.",
        ],
      },
    ],

    projects: [
      {
        title: "ECT-ERP+HRMS Integration",
        description: "Full-stack development (both Angular frontend and .NET Core backend APIs/database components) for the Election Commission of Thailand.",
        image: "images/project-hrms.png",
        tech: ["Angular", "C#", ".NET Core", "PostgreSQL"],
      },
      {
        title: "SS-Task-Report",
        description: "A full-stack task synchronization utility integrating with ClickUp API to automate task creation and point tracking.",
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
        skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
      },
      backend: {
        title: "Backend",
        skills: ["C# (.NET)", "Java (Spring Boot)", "tRPC", "RESTful APIs"],
      },
      database: {
        title: "Database",
        skills: ["PostgreSQL", "Oracle Database", "SQL Server", "MySQL"],
      },
      devops: {
        title: "Tools & DevOps",
        skills: ["Git", "Netlify", "Vercel", "Neon Database", "JasperReports"],
      },
      gitCommands: {
        title: "Version Control",
        commands: [
          "Git Flow & Branching",
          "Collaborative Pull Requests",
          "Conflict Resolution & Routing Merge",
          "Standard Sync (add / commit / push / merge)",
        ],
      },
      aiPrompting: {
        title: "AI-Assisted Development",
        details: [
          "System Prompt Engineering (Enforcing development roles and specific coding standards)",
          "Regression Prevention Guidelines (Restricting AI changes to keep unrelated logic intact)",
          "Specification Clarification Workflows (Instructing AI to validate specs and ask questions before coding)",
          "Structured TODO Prototyping (Accelerating delivery of unfamiliar language systems using modular prompts)",
        ],
      },
    },

    languages: [
      { name: "Thai", level: "Native" },
      { name: "English", level: "A1 CEFR" },
    ],

    certifications: [
      "CISCO CCNA",
      "CISCO Cybersecurity Essentials",
      "Forensic Techniques for Email (UP)",
      "Basic Cyber MOOC (NCSA)",
    ],

    achievements: [
      {
        place: "4th Place & Competitor",
        name: "PSRU Cyber Hackathon (Season 2 & 3)",
        description: "CTF Competitions & Security Workshops focusing on vulnerability scanning, logical analysis, and system defense.",
      },
    ],

    honors: [
      { title: "First-Class Honors", description: "B.Sc. in Information Technology" },
      { title: "Academic Excellence", description: "Consecutive Awards (2022-2024)" },
    ],

    favoriteGames: [],
  },
  th: {
    personal: {
      fullName: "เลิศมงคล ยามชัยภูมิ",
      firstName: "เลิศมงคล",
      lastName: "ยามชัยภูมิ",
      nickname: "ภัค",
      title: "นักพัฒนาเว็บฟูลสแต็ก (Full-Stack Developer)",
      location: "ประเทศไทย",
      bio: "นักศึกษาฝึกงานตำแหน่ง Full-Stack Developer ผู้เรียนรู้ว่องไวและปรับตัวได้ดี มีผลการเรียนดีเยี่ยม เกียรตินิยมอันดับ 1 มีประสบการณ์ลงมือปฏิบัติจริงในการพัฒนาเว็บแอปพลิเคชันด้วย Angular, React และ C# (.NET) มีความกระหายในการแก้ไขปัญหาในโลกจริง มุ่งมั่นส่งมอบฟีเจอร์ที่มีประสิทธิภาพ และใช้ประโยชน์จากเครื่องมือ AI Workflows ยุคใหม่อย่างเป็นระเบียบ",
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
        degree: "วิทยาศาสตรบัณฑิต (วท.บ.) เทคโนโลยีสารสนเทศ",
        gpa: "3.66",
      },
      {
        school: "โรงเรียนคอนสารวิทยาคม",
        period: "2562 – 2565",
        degree: "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
        gpa: "3.19",
      },
    ],

    workExperience: [
      {
        company: "บริษัท ซอฟต์ สแควร์ อินเตอร์เนชั่นแนล จำกัด",
        role: "นักพัฒนาซอฟต์แวร์ฝึกงาน (Software Developer Intern)",
        period: "พ.ย. 2568 – ก.พ. 2569",
        tag: "สหกิจศึกษา",
        highlights: [
          "พัฒนาฟีเจอร์แบบฟูลสแต็ก (Full-Stack) ทั้งส่วนหน้าเว็บ (Angular) และระบบหลังบ้าน (.NET Core API & PostgreSQL) สำหรับโครงการ **ECT-ERP+HRMS** (ระบบบริหารทรัพยากรบุคคล กกต.) ส่งมอบงานตรงเวลาและแก้ไขบั๊กได้อย่างมีประสิทธิภาพ",
          "พัฒนาฟีเจอร์แบบฟูลสแต็ก (Full-Stack) สำหรับโครงการ **MAKRO** (NEWTJE MAKRO) โดยสร้างส่วนหน้าจอแสดงผลด้วย React และพัฒนาระบบหลังบ้านพร้อมรายงานระดับองค์กรด้วย Spring Boot และ Oracle Database",
          "ออกแบบและพัฒนาเว็บแอปพลิเคชันแบบฟูลสแต็ก (**SS-Task-Report**) ด้วย **Next.js (T3 Stack)**, **Netlify** และ **Neon (PostgreSQL)** เพื่อซิงค์ข้อมูลภารกิจและติดตามแต้มคะแนนผ่าน **ClickUp API** ช่วยเพิ่มประสิทธิภาพความรวดเร็วในการจัดการงาน",
        ],
      },
    ],

    projects: [
      {
        title: "ECT-ERP+HRMS Integration",
        description: "การพัฒนาฟีเจอร์แบบฟูลสแต็ก (Full-Stack) ทั้งส่วนหน้าเว็บแบบ Angular และระบบคิวรี่หลังบ้าน .NET Core สำหรับระบบบริหารทรัพยากรบุคคล กกต.",
        image: "images/project-hrms.png",
        tech: ["Angular", "C#", ".NET Core", "PostgreSQL"],
      },
      {
        title: "SS-Task-Report",
        description: "เครื่องมือฟูลสแต็กสำหรับซิงค์และวิเคราะห์แต้มภารกิจทีมร่วมกับ ClickUp API โดยไม่โหลด Task อัตโนมัติ",
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
        skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
      },
      backend: {
        title: "หลังบ้าน (Backend)",
        skills: ["C# (.NET)", "Java (Spring Boot)", "tRPC", "RESTful APIs"],
      },
      database: {
        title: "ระบบฐานข้อมูล (Database)",
        skills: ["PostgreSQL", "Oracle Database", "SQL Server", "MySQL"],
      },
      devops: {
        title: "เครื่องมือและการปรับใช้ (Tools & DevOps)",
        skills: ["Git", "Netlify", "Vercel", "Neon Database", "JasperReports"],
      },
      gitCommands: {
        title: "ระบบควบคุมเวอร์ชัน (Version Control)",
        commands: [
          "การทำงานแบบ Git Flow & Branching",
          "การสร้าง Collaborative Pull Requests",
          "การแก้ปัญหาโค้ดชนกันและการรวมสาขา (Conflict)",
          "การซิงค์ข้อมูลมาตรฐาน (add / commit / push / merge)",
        ],
      },
      aiPrompting: {
        title: "การพัฒนาซอฟต์แวร์ร่วมกับ AI (AI-Assisted Development)",
        details: [
          "การกำหนด System Prompt (บังคับบทบาทนักพัฒนาและระเบียบโค้ดที่รัดกุมก่อนเริ่มทำ)",
          "การคุมคำสั่งเพื่อป้องกัน Regression (คุมไม่ให้ AI เขียนทับหน้าจอหรือตรรกะเดิมที่ทำงานได้ดีอยู่แล้ว)",
          "การควบคุมให้ AI ถามกลับเมื่อสเปกคลุมเครือ (สั่งให้ AI ตรวจสอบและถามคำถามหากข้อกำหนดไม่เพียงพอ)",
          "การออกแบบลำดับงาน TODO (เขียน Prompt แยกเป็นข้อเพื่อทดลองโปรโตไทป์ภาษาใหม่ๆ อย่างมีประสิทธิภาพ)",
        ],
      },
    },

    languages: [
      { name: "ภาษาไทย", level: "ภาษาแม่ (Native)" },
      { name: "ภาษาอังกฤษ", level: "A1 CEFR" },
    ],

    certifications: [
      "CISCO CCNA",
      "CISCO Cybersecurity Essentials",
      "เทคนิคการตรวจนิติวิทยาศาสตร์ทางอีเมล (ม.พะเยา)",
      "หลักสูตรความปลอดภัยไซเบอร์ขั้นพื้นฐาน (สกมช. MOOC)",
    ],

    achievements: [
      {
        place: "อันดับ 4 และผู้เข้าแข่งขัน",
        name: "การแข่งขัน PSRU Cyber Hackathon (ซีซัน 2 และ 3)",
        description: "การแข่ง CTF และเวิร์กชอปด้านความมั่นคงปลอดภัยไซเบอร์ เน้นการสืบค้นช่องโหว่ วิเคราะห์ตรรกะระบบ และการตั้งรับ",
      },
    ],

    honors: [
      { title: "เกียรตินิยมอันดับ 1", description: "วิทยาศาสตรบัณฑิต (วท.บ.) สาขาเทคโนโลยีสารสนเทศ" },
      { title: "รางวัลผลการเรียนดีเยี่ยม", description: "ได้รับรางวัลเรียนดีต่อเนื่องปี 2565 - 2567" },
    ],

    favoriteGames: [],
  },
};
