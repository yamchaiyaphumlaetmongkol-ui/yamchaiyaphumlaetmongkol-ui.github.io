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
    softSkills: { title: string; commands: string[] };
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
          "Developed frontend components and dashboards for the HRMS system using Angular and TypeScript, integrating them with ASP.NET Core backend services.",
          "Wrote and optimized SQL queries for accurate data retrieval and report generation.",
          "Assisted in maintaining legacy modules, fixing bugs during UAT, and creating user manuals to support end-users.",
        ],
      },
    ],

    projects: [
      {
        title: "ECT-ERP+HRMS Integration",
        description: "Contributed to developing the frontend with Angular and backend APIs using ASP.NET Core for the ECT HRMS system. Also designed and implemented enterprise-level reporting using Jasper Report.",
        image: "images/project-hrms.png",
        tech: ["Angular", "ASP.NET Core", "PostgreSQL", "JasperReports"],
      },
      {
        title: "My Task Report",
        description: "Developed a Full-Stack tool using Next.js integrated with ClickUp API to track monthly man-days, monitor tasks, and manage team availability, streamlining overall resource management.",
        image: "images/project-dashboard.png",
        tech: ["Next.js", "PostgreSQL"],
      }, 
      {
        title: "NEWTJE MAKRO",
        description: "Contributed to developing the report printing feature, connecting the React frontend with the Spring Boot backend and Oracle Database.",
        image: "images/project-makro.png",
        tech: ["React", "Spring Boot", "Oracle"],
      },
    ],

    skills: {
      frontend: {
        title: "Frontend",
        // เอาตัวที่เคยทำโปรเจกต์ขึ้นก่อน
        skills: ["Angular", "Next.js", "TypeScript", "React", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap"],
      },
      backend: {
        title: "Backend",
        // เอา ASP.NET และ C# ขึ้นก่อนเพื่อเน้นความมั่นใจ ส่วน Java/Node.js เอาไว้ท้ายสุด
        skills: ["C#", "ASP.NET Core", "Java (Spring Boot)", "Node.js"],
      },
      database: {
        title: "Database",
        skills: ["PostgreSQL", "MySQL", "Oracle Database"], // เพิ่ม Oracle จากโปรเจกต์แรกที่คุณเคยทำ
      },
      devops: {
        title: "Tools & Libraries",
        skills: ["Git", "GitHub", "JasperReports"],
      },
      softSkills: { // แนะนำเปลี่ยน key เป็น softSkills เพื่อความไม่งงครับ
        title: "Soft Skills",
        commands: ["Problem-solving", "Team Collaboration", "Effective Communication", "Fast Learner"],
      },
      aiPrompting: {
        title: "AI-Assisted Development",
        // ปรับคำอธิบายให้เหมาะกับเด็กจบใหม่ที่ใช้ AI ช่วยเพิ่มประสิทธิภาพในการทำงานจริง
        summary: "Leveraging AI tools to accelerate development, clarify technical specifications, and ensure systematic feature implementation.",
        details: [
          "Prompt Engineering for Code Generation",
          "Context-Aware Feature Planning",
          "Incremental Implementation & Debugging",
          "Structured Task & Milestone Mapping",
          "UAT & Test Case Generation Assistance"
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
          "พัฒนาหน้าจอและแดชบอร์ด ของระบบ HRMS ด้วย Angular และ TypeScript โดยเชื่อมต่อการทำงานร่วมกับระบบหลังบ้าน ASP.NET Core",
          "เขียนและปรับปรุง SQL Query เพื่อดึงข้อมูลมาแสดงผลในระบบรายงานได้อย่างถูกต้องและมีประสิทธิภาพ",
          "ร่วมดูแลระบบเดิม (Legacy) แก้ไขบั๊กในช่วงทดสอบระบบ (UAT) และจัดทำคู่มือการใช้งานสำหรับผู้ใช้",
        ],
      },
    ],

    projects: [
      {
        title: "ECT-ERP+HRMS Integration",
        description: "มีส่วนร่วมในการพัฒนาหน้าจอด้วย Angular และสร้าง API หลังบ้านด้วย ASP.NET Core สำหรับระบบบริหารทรัพยากรบุคคล กกต. พร้อมทั้งออกแบบและจัดทำระบบรายงานด้วย Jasper Report",
        image: "images/project-hrms.png",
        tech: ["Angular", "ASP.NET Core", "PostgreSQL", "JasperReports"],
      },
      {
        title: "My Task Report",
        description: "พัฒนาเครื่องมือ Full-Stack ด้วย Next.js ร่วมกับ ClickUp API สำหรับติดตามและคำนวณ Man-day ของทีมเป็นรายเดือน พร้อมระบบตารางแสดงสถานะงานและวันว่างเพื่อเพิ่มประสิทธิภาพในการบริหารบุคคล",
        image: "images/project-dashboard.png",
        tech: ["Next.js", "PostgreSQL"],
      },
      {
        title: "NEWTJE MAKRO",
        description: "มีส่วนร่วมในการพัฒนาฟังก์ชันพิมพ์รายงาน (Report) ของระบบ โดยเชื่อมต่อหน้าจอแสดงผลด้วย React ร่วมกับระบบหลังบ้าน Spring Boot และฐานข้อมูล Oracle Database",
        image: "images/project-makro.png",
        tech: ["React", "Spring Boot", "Oracle"],
      },
    ],

    skills: {
      frontend: {
        title: "Frontend",
        // เรียงเอาตัวที่เคยทำโปรเจกต์และมั่นใจขึ้นก่อนครับ
        skills: ["Angular", "Next.js", "TypeScript", "React", "JavaScript", "HTML", "CSS", "Tailwind", "Bootstrap"],
      },
      backend: {
        title: "Backend",
        // เอา ASP.NET และ C# ขึ้นหน้าสุดเพื่อเน้นความมั่นใจในจุดแข็งของเรา
        skills: ["C#", "ASP.NET Core", "Java (Spring Boot)", "Node.js"],
      },
      database: {
        title: "Database",
        skills: ["PostgreSQL", "MySQL", "Oracle Database"], // เพิ่ม Oracle Database จากโปรเจกต์แรกเข้าไปด้วยครับ
      },
      devops: {
        title: "Tools & Libraries",
        skills: ["Git", "GitHub", "JasperReports"],
      },
      softSkills: { // ปรับ key จาก gitCommands เป็น softSkills ให้ตรงความหมาย
        title: "Soft Skills",
        commands: ["การแก้ปัญหา", "การทำงานร่วมกับทีม", "การสื่อสารที่มีประสิทธิภาพ", "การเรียนรู้เทคโนโลยีใหม่ได้เร็ว"],
      },
      aiPrompting: {
        title: "การพัฒนาซอฟต์แวร์ร่วมกับ AI (AI-Assisted Development)",
        // ปรับให้สั้น กระชับ และแสดงถึงการนำ AI มาช่วยเพิ่ม Productivity ในการทำงานจริง
        summary: "ประยุกต์ใช้เครื่องมือ AI ในการช่วยเขียนโค้ด ตรวจสอบความถูกต้องของสเปก และช่วยไล่ตรวจสอบบั๊กเพื่อเพิ่มความรวดเร็วในการส่งมอบงาน",
        details: [
          "การเขียน Prompt เพื่อช่วยเจนโค้ดและแก้ไขคำสั่ง",
          "การวางโครงสร้างฟีเจอร์ใหม่ร่วมกับ AI",
          "การใช้ AI ช่วย Debug และวิเคราะห์ข้อผิดพลาดของโค้ด",
          "การแบ่งลำดับความสำคัญของงานและ Milestone",
          "การประยุกต์ใช้ AI ในการช่วยคิดชุดทดสอบ (UAT & Test Cases)"
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
