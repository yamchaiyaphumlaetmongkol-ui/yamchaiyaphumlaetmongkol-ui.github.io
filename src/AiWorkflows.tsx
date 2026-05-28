import React, { useState } from 'react';

interface AiWorkflowsProps {
  lang: 'en' | 'th';
  setLang: (lang: 'en' | 'th') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function AiWorkflows({ lang, setLang, theme, setTheme }: AiWorkflowsProps) {
  const [activeTab, setActiveTab] = useState<'sa' | 'dev'>('dev');
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(index);
      setTimeout(() => setCopiedIdx(null), 2000);
    });
  };

  const handleBackClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    window.location.hash = path;
  };

  const workflowDetails = {
    en: {
      title: "AI-Assisted System Analysis & Software Engineering",
      subtitle: "A collection of structured technical frameworks designed to optimize database schema design, system integration, technical decisions, and code quality through precise AI prompt engineering.",
      backBtn: "Back to Portfolio",
      saTabTitle: "System Analyst & Architect Workflows",
      saTabSub: "Architecture, Data Model, Integration, Tech Decision, Diagrams",
      devTabTitle: "AI-Assisted Development Workflows",
      devTabSub: "Enterprise Prompt, Code Explainer, Test Cases, Meta-Prompting",
      saCards: [
        {
          icon: "fa-solid fa-user-gear",
          title: "System Architect Persona",
          summary: "Defining a clear Solution Architect persona that focuses on pragmatic solutions, trade-off analysis, and avoiding over-engineering.",
          rule: "Architect Role Enforcement",
          prompt: "You are a Solution Architect who prioritizes practical over perfect solutions:\n1. Always provide clear, decisive recommendations instead of saying 'it depends'.\n2. Explicitly state trade-offs and risks for every decision.\n3. If the provided context is insufficient for a decision:\n   - Ask exactly 1-2 high-priority clarifying questions.\n   - Offer a choice: 'I can proceed with my best assumptions immediately (which you must approve first) OR you can choose to answer these questions first.'",
          benefit: "Ensures recommendations are highly actionable and pragmatic rather than generic."
        },

        {
          icon: "fa-solid fa-database",
          title: "Schema & Database Design",
          summary: "Systematically designing database schemas, identifying entities, relationships, indexes, and normalization trade-offs.",
          rule: "Data Model Specification",
          prompt: "Design a Data Model for [Domain, e.g., e-commerce / HR system]\nPrimary Entities: [Specify known entities]\nDatabase: [Relational / Document / Graph / Undecided]\nScale: [Projected annual data growth rate/volume]\n\nRespond in this format:\n1. Key Entities and their core attributes (with data types)\n2. Relationships and cardinality (using standard notation or Mermaid if applicable)\n3. Recommended indexes for performance\n4. Common pitfalls associated with this model & prevention strategies\nIf there is a significant trade-off between normalization and performance, highlight it.",
          benefit: "Generates structured database schemas with index recommendations and preemptive risk analysis."
        },
        {
          icon: "fa-solid fa-network-wired",
          title: "Integration Architecture",
          summary: "Defining communication protocols (REST, gRPC, Event-driven), payload structures, and sync/async boundaries between services.",
          rule: "Integration Blueprint",
          prompt: "Design an integration architecture between [Service A] and [Service B]:\n- Protocol: [REST / gRPC / Event-Driven / Message Queue]\n- Sync Type: [Synchronous / Asynchronous]\n- Reliability: [Retry Policy / Dead Letter Queue / Idempotency]\n\nProvide response in these sections:\n1. API payload schema or Event structure (in JSON Schema or TypeScript definitions)\n2. Integration sequence flow (step-by-step or Mermaid sequence diagram)\n3. Failure handling mechanisms (retry strategies, backoff, circuit breaker)\n4. Security considerations (AuthN/AuthZ, rate limiting, transport encryption)",
          benefit: "Provides resilient integration designs that detail failure recovery and communication interfaces."
        },
        {
          icon: "fa-solid fa-scale-balanced",
          title: "Technical Decision Matrix (ADR)",
          summary: "Structuring Architectural Decision Records (ADRs) to evaluate technologies based on operational scale, cost, and complexity.",
          rule: "Decisive Tech Evaluation",
          prompt: "Compare [Technology A] and [Technology B] for [Technical/Business Goal]:\n- Constraint: [Budget / Team Skillset / Time-to-Market]\n- Scale Target: [Expected requests per second / storage volume]\n\nEvaluate and output:\n1. Comparative analysis matrix (Performance, Complexity, Cost)\n2. Direct trade-offs (What we gain vs what we lose)\n3. Definitive recommendation (practical over perfect choice)\n4. Migration risks and mitigation strategy",
          benefit: "Provides a structured comparison to support decisive technology choices based on business and technical constraints."
        }
      ],
      devCards: [
        {
          icon: "fa-solid fa-brain",
          title: "IDE Meta-Prompt (Context-Aware)",
          summary: "Instructing the IDE AI to analyze the project structure first and generate a more detailed execution prompt for itself based on actual context.",
          rule: "Self-Refining Prompt Generation",
          prompt: "Before implementing [Feature/Task], you must analyze the current workspace structure, dependencies, and relevant files.\nBased on your understanding of this specific project, generate a highly detailed execution plan and a refined prompt for yourself.\n\n[Task Information]\nThe goal is to develop a feature / modify the system according to the following list:\n1. [What to do]\n\nThis generated plan must include:\n1. The exact files that will be created or modified.\n2. The architectural patterns currently used in the project that you must follow.\n3. Potential impacts or breaking changes to existing components.\nPresent this refined prompt/plan to me for approval. Do not write any code until I approve it.",
          benefit: "Leverages the AI's ability to read the workspace, turning a generic user request into a highly specific, project-tailored execution plan."
        },
        {
          icon: "fa-solid fa-terminal",
          title: "Enterprise Developer Prompt",
          summary: "A comprehensive developer persona framework ensuring consistency, preventing regressions, avoiding hallucination, and enforcing strict coding standards.",
          rule: "Ultimate Developer Template",
          prompt: "[Role] You are a highly meticulous Principal Software Engineer focused on system safety and stability.\n\n[Context] I am working on a large-scale project using: [Tech Stack, e.g., React 18, TypeScript, Tailwind] with strict coding standards.\n\n[Task] Implement: [Specify task, e.g., Shopping Cart System]\n\n[Constraints & Rules]:\n1. Do not start coding immediately. Ask clarifying questions if anything is ambiguous.\n2. Code must align with existing architecture [Attach examples if any].\n3. Must handle the following Edge Cases: [Specify or ask AI to think of them].\n4. No laziness: Provide full implementations without truncation or placeholders. Ensure robust error handling.\n5. Include Unit Tests for the provided functionality.",
          benefit: "Provides a robust starting template that establishes clear boundaries, prevents technical debt, and ensures code is enterprise-ready."
        },
        {
          icon: "fa-solid fa-code",
          title: "Fullstack Code Explainer",
          summary: "Translating complex frontend and backend codebase architectures into clear, step-by-step logical explanations.",
          rule: "System Behavior Explanation",
          prompt: "Explain the workflow and logic of this code from [Frontend/Backend/Fullstack] in [Language/Framework, e.g., React/Node.js]:\n- Code File/Snippet: [Paste code here]\n\nProvide the explanation in these clean sections:\n1. Core Purpose: What does this code do in plain, simple terms?\n2. Data Flow & Logic: Step-by-step what happens when this code runs (input to output)\n3. Key Connections: How does this file interact with other parts of the system (e.g., API calls, DB, State)\n4. Junior-Friendly Notes: Any critical functions or logic patterns explained simply",
          benefit: "Bridges the gap between raw codebase complexity and clear mental models for quick onboarding."
        },
        {
          icon: "fa-solid fa-vial-circle-check",
          title: "Manual Testing & Test Case Generator",
          summary: "Generating comprehensive step-by-step test cases and checklists to verify features manually with absolute confidence.",
          rule: "Quality Assurance Blueprint",
          prompt: "Create a Manual Test Case Suite and checklist for [Feature Name]:\n- User Journey/Flow: [Specify the user flow, e.g., User logs in and uploads a file]\n- Expected Result: [Specify the successful outcome]\n\nGenerate the test suite in this structured table format:\n1. Test Case ID & Title (e.g., TC01 - Successful Upload)\n2. Pre-conditions (What is needed before starting)\n3. Action Steps (numbered 1, 2, 3... exactly what the tester clicks/types)\n4. Expected Behavior (what the screen/system should display)\n5. Edge Cases & Negative Tests (e.g., uploading invalid file type, offline state)",
          benefit: "Helps ensure manual verification is structured, reproducible, and covers critical edge cases."
        }

      ]
    },
    th: {
      title: "กระบวนการวิเคราะห์ระบบและพัฒนาซอฟต์แวร์ร่วมกับ AI",
      subtitle: "รวบรวมเทมเพลตและแนวทางการทำงานร่วมกับ AI เพื่อช่วยออกแบบฐานข้อมูล การเชื่อมต่อระบบ การประเมินเทคโนโลยี และการพัฒนาซอฟต์แวร์อย่างเป็นระบบ",
      backBtn: "กลับหน้าพอร์ตโฟลิโอ",
      saTabTitle: "งานวิเคราะห์และออกแบบระบบ (SA & Architect)",
      saTabSub: "ออกแบบสถาปัตยกรรม, Data Model, API Integration, ADR, Diagrams",
      devTabTitle: "งานพัฒนาและเขียนโปรแกรม (AI-Assisted Dev)",
      devTabSub: "Enterprise System Prompt, อธิบายโค้ด, แผนทดสอบ, IDE Meta-Prompt",
      saCards: [
        {
          icon: "fa-solid fa-user-gear",
          title: "การกำหนดบทบาท Solution Architect",
          summary: "การกำหนดบทบาทให้ AI วิเคราะห์ระบบในฐานะ Solution Architect โดยเน้นแนวทางที่เหมาะสมกับการใช้งานจริง พร้อมประเมินข้อดีข้อเสีย",
          rule: "System Prompt",
          prompt: "คุณคือ Solution Architect ที่เน้น Practical over Perfect:\n1. ให้คำแนะนำ (Recommendation) ที่ชัดเจนเด็ดขาดเสมอ ห้ามตอบกว้างๆ หรือ 'ขึ้นอยู่กับ'\n2. ระบุข้อดีข้อเสีย (Trade-off) และความเสี่ยง (Risk) ทุกครั้งประกอบการตัดสินใจ\n3. หากข้อมูลในปัจจุบันยังไม่เพียงพอสำหรับตัดสินใจ:\n   - ให้ตั้งคำถามกลับมา 1-2 ข้อที่สำคัญที่สุด\n   - เสนอทางเลือกเสมอ: 'จะให้เริ่มวิเคราะห์ทันทีโดยใช้สมมติฐานที่ดีที่สุด (ซึ่งฉันต้องตรวจสอบและอนุมัติก่อน) หรือคุณจะตอบคำถามต่อไปนี้ก่อน'",
          benefit: "ช่วยให้ได้ข้อเสนอแนะและแผนงานที่เป็นรูปธรรม นำไปประยุกต์ใช้ในการออกแบบระบบได้ทันที"
        },
        {
          icon: "fa-solid fa-database",
          title: "การออกแบบโครงสร้างฐานข้อมูล (Data Model)",
          summary: "การกำหนดโครงสร้างฐานข้อมูล ความสัมพันธ์ของข้อมูล การแนะนำดัชนี (Indexes) และการวิเคราะห์ข้อดีข้อเสียของการทำ Normalization",
          rule: "Data Model",
          prompt: "ออกแบบ Data Model สำหรับ [Domain เช่น e-commerce / HR system]\nEntity หลัก: [ระบุ entity ที่รู้แล้ว]\nDatabase: [Relational / Document / Graph / ยังไม่แน่ใจ]\nScale: [ปริมาณการเติบโตของข้อมูลต่อปี]\n\nตอบในรูปแบบหัวข้อดังนี้:\n1. Entity และ Attribute หลัก (พร้อมระบุประเภทข้อมูล Data Type)\n2. ความสัมพันธ์และ Cardinality (สามารถใช้สัญลักษณ์มาตรฐานหรือ Mermaid Diagram)\n3. ดัชนี (Indexes) ที่แนะนำสำหรับปรับปรุงประสิทธิภาพ\n4. ปัญหาที่พบบ่อยใน Model ลักษณะนี้และแนวทางป้องกัน\nหากมีความสมดุล (Trade-off) ระหว่าง Normalization และ Performance ให้ระบุจุดดังกล่าวอย่างชัดเจน",
          benefit: "ช่วยให้ได้โครงสร้างฐานข้อมูลที่ชัดเจน มีการวางดัชนีที่เหมาะสม และมองเห็นความเสี่ยงในระยะยาว"
        },
        {
          icon: "fa-solid fa-network-wired",
          title: "การออกแบบการเชื่อมต่อระบบ (Integration)",
          summary: "การกำหนดรูปแบบการสื่อสารระหว่างระบบ โครงสร้างข้อมูล (Payload) และการออกแบบความมั่นคงปลอดภัยของอินเทอร์เฟซ",
          rule: "Integration Specification",
          prompt: "ออกแบบสถาปัตยกรรมเชื่อมต่อ (Integration) ระหว่าง [บริการ A] และ [บริการ B]:\n- โปรโตคอล: [REST / gRPC / Event-Driven / Message Queue]\n- รูปแบบการสื่อสาร: [Synchronous / Asynchronous]\n- ความน่าเชื่อถือของข้อมูล: [Retry Policy / DLQ / Idempotency]\n\nตอบในรูปแบบหัวข้อดังนี้:\n1. โครงสร้างข้อมูล API payload หรือ Event Schema (ในรูปแบบ JSON Schema หรือ TypeScript Interface)\n2. ขั้นตอนการส่งผ่านข้อมูล (ขั้นตอนแบบละเอียด หรือ Mermaid Sequence Diagram)\n3. กลไกการจัดการข้อผิดพลาด (เช่น Retry limits, Exponential Backoff, Circuit Breaker)\n4. มาตรฐานความปลอดภัย (การยืนยันตัวตน, Rate Limiting, หรือการเข้ารหัสข้อมูล)",
          benefit: "ช่วยให้ออกแบบช่องทางการเชื่อมต่อระบบที่ทนทานต่อความเสียหาย (Resilient) และรองรับการจัดการข้อผิดพลาดอย่างเป็นระบบ"
        },
        {
          icon: "fa-solid fa-scale-balanced",
          title: "การเปรียบเทียบตัดสินใจเทคโนโลยี (Tech Decision)",
          summary: "การจัดทำ Architectural Decision Records (ADRs) เพื่อเปรียบเทียบเทคโนโลยี โดยพิจารณาจากประสิทธิภาพ ข้อจำกัด และต้นทุนอย่างรอบด้าน",
          rule: "Technology Evaluation Matrix",
          prompt: "เปรียบเทียบระหว่าง [เทคโนโลยี A] และ [เทคโนโลยี B] เพื่อ [เป้าหมายทางธุรกิจ/เทคนิค]:\n- ข้อจำกัดในปัจจุบัน: [งบประมาณ / ทักษะทีม / เวลาออกสู่ตลาด]\n- สเกลที่ต้องรองรับ: [ปริมาณ request ต่อวินาที / ขนาดข้อมูล]\n\nประเมินและสรุปผลเป็นข้อๆ:\n1. ตารางเปรียบเทียบด้าน Performance, Complexity และ Cost\n2. การวิเคราะห์ Trade-off (ได้อะไรมา และต้องยอมเสียอะไรไป)\n3. คำแนะนำในการเลือกขั้นสุดท้ายที่เด็ดขาด (เน้นใช้งานจริง)\n4. ความเสี่ยงในการย้ายระบบ (Migration Risk) และแผนรับมือ",
          benefit: "ช่วยให้ได้ตารางวิเคราะห์และเปรียบเทียบเทคโนโลยีที่เป็นกลางและอ้างอิงเหตุผลทางวิศวกรรมอย่างชัดเจน"
        }
      ],
      devCards: [
        {
          icon: "fa-solid fa-brain",
          title: "ระบบสร้าง Prompt อัตโนมัติจากโค้ดจริง (IDE Meta-Prompt)",
          summary: "การสั่งให้ IDE AI สแกนโครงสร้างโปรเจกต์ก่อน แล้วให้ AI เขียน Prompt หรือแผนงานที่ละเอียดขึ้นให้ตัวเอง เพื่อให้สอดคล้องกับโปรเจกต์มากที่สุด",
          rule: "Context-Aware Self-Refinement",
          prompt: "ก่อนที่จะเริ่มเขียนโค้ดสำหรับ [ชื่อฟีเจอร์/งาน] ให้คุณวิเคราะห์โครงสร้างโปรเจกต์ ไฟล์ที่เกี่ยวข้อง และ Dependencies ใน Workspace นี้ก่อน\nจากความเข้าใจในสถาปัตยกรรมของโปรเจกต์นี้ จงสร้าง 'แผนการทำงานที่ละเอียดที่สุด (Execution Plan)' หรือ 'Prompt ฉบับสมบูรณ์' ให้กับตัวคุณเอง\n\n[ข้อมูลงานที่ต้องทำ]\nเป้าหมายคือการพัฒนาฟีเจอร์/แก้ไขระบบ ตามรายการต่อไปนี้:\n1. [สิ่งที่จะทำ]\n\nโดยต้องระบุ:\n1. รายชื่อไฟล์ที่ต้องสร้างหรือแก้ไขอย่างเจาะจง\n2. รูปแบบการเขียนโค้ด (Pattern) ของโปรเจกต์นี้ที่คุณจะยึดตาม\n3. ผลกระทบที่อาจเกิดขึ้นกับระบบเดิม\nให้ส่งแผนงานหรือ Prompt ที่คุณสร้างขึ้นมาให้ฉันพิจารณาก่อน ห้ามลงมือเขียนโค้ดจนกว่าฉันจะอนุมัติ",
          benefit: "ใช้ประโยชน์จากการที่ AI เห็นไฟล์ในโปรเจกต์ เพื่อเปลี่ยนคำสั่งสั้นๆ ของเราให้กลายเป็นแผนงานที่ละเอียดและปลอดภัยที่สุด"
        },
        {
          icon: "fa-solid fa-terminal",
          title: "โครงสร้าง Prompt ระดับองค์กร (Enterprise Developer)",
          summary: "เทมเพลตสำหรับกำหนดบทบาทให้ AI เป็น Principal Software Engineer ระดับองค์กร เน้นความรอบคอบ รักษามาตรฐานเดิม ป้องกันระบบพัง และห้ามย่อโค้ด",
          rule: "The Ultimate Developer Prompt",
          prompt: "[บทบาท] คุณคือ Principal Software Engineer ที่มีความรอบคอบสูงมาก มุ่งเน้นความปลอดภัยและความเสถียรของระบบ\n\n[บริบทโปรเจกต์] ฉันกำลังทำงานในโปรเจกต์ใหญ่ที่ใช้ Stack: [ระบุ เช่น React 18, TypeScript, Tailwind] มีมาตรฐานการเขียนโค้ดที่เข้มงวด\n\n[งานที่ต้องทำ] จงเขียนระบบ [ระบุสิ่งที่ต้องการ เช่น ระบบจัดการตะกร้าสินค้า]\n\n[เงื่อนไขและข้อบังคับ]:\n1. ห้ามเริ่มเขียนโค้ดทันที ให้ถามคำถามกลับมาหากมีจุดที่คลุมเครือ\n2. โค้ดต้องสอดคล้องกับโครงสร้างเดิม [ถ้ามีตัวอย่างให้แนบ]\n3. ต้องรองรับ Edge Cases ต่อไปนี้: [ระบุ หรือสั่งให้มันคิดให้]\n4. ห้ามย่อโค้ด ให้แสดงโค้ดตัวเต็มที่จัดการ Error Handling เรียบร้อยแล้ว\n5. แนบ Unit Test สำหรับฟังก์ชันนี้มาด้วย",
          benefit: "ควบคุมให้ AI ทำงานเหมือนโปรแกรมเมอร์ผู้ช่วยฝีมือดี แทนที่จะคาดเดาเองจนเกิด Technical Debt หรือทำให้ระบบพัง"
        },
        {
          icon: "fa-solid fa-code",
          title: "ระบบอธิบายโครงสร้างโค้ด (Fullstack Code Explainer)",
          summary: "การให้ AI ช่วยสรุปตรรกะการทำงานและเส้นทางการไหลของข้อมูลของโค้ดส่วนหน้าบ้านและหลังบ้านอย่างเป็นระเบียบ",
          rule: "System Behavior Explanation",
          prompt: "อธิบายการทำงานและตรรกะของโค้ดส่วน [หน้าบ้าน (Frontend) / หลังบ้าน (Backend)] ในระบบ [เช่น React / Node.js]:\n- โค้ดที่ต้องการให้อธิบาย: [วางโค้ดตรงนี้]\n\nโดยให้เขียนอธิบายแยกเป็นหัวข้อที่เข้าใจง่ายดังนี้:\n1. หน้าที่หลัก: โค้ดนี้ทำหน้าที่อะไรในระบบ อธิบายแบบภาษาคนทั่วไปเข้าใจง่าย\n2. ลำดับการทำงาน (Step-by-Step): เมื่อโค้ดนี้รัน มีลำดับขั้นตอนการทำงานอย่างไรตั้งแต่เริ่มจนจบ\n3. การเชื่อมโยง: โค้ดนี้คุยกับส่วนอื่นอย่างไร (เช่น หน้าบ้านเรียก API ไหน หรือหลังบ้านไปดึงฐานข้อมูลตารางใด)\n4. จุดที่ต้องระวัง: มีฟังก์ชันหรือรูปแบบการเขียนตรงไหนที่เป็นพิเศษที่ควรทำความเข้าใจเพิ่มเติม",
          benefit: "ช่วยร่นเวลาทำความเข้าใจลำดับตรรกะในระบบเดิม เหมาะสำหรับการ Onboarding ทีมงานหรืออ่านสเปกโค้ดเก่า"
        },
        {
          icon: "fa-solid fa-vial-circle-check",
          title: "ตัวช่วยสร้างกรณีการทดสอบ (Manual Test Case Generator)",
          summary: "การให้ AI ออกแบบกรณีการทดสอบ (Test Cases) ทั้งส่วนขั้นตอนปกติ (Happy Path) และเงื่อนไขข้อผิดพลาด (Edge/Negative Cases) พร้อมวิธีการตรวจสอบ",
          rule: "Quality Assurance Blueprint",
          prompt: "สร้างแผนการทดสอบระบบด้วยตัวเอง (Manual Test Case) และรายการเช็กความพร้อมสำหรับ [ชื่อฟีเจอร์ เช่น ระบบจ่ายเงิน]:\n- ลำดับการใช้งานหลัก: [ระบุขั้นตอนการกดของลูกค้า เช่น ลูกค้ากดเลือกของแล้วกดจ่ายด้วยบัตรเครดิต]\n- ผลลัพธ์ที่ถูกต้อง: [ผลลัพธ์ที่ระบบควรจะเป็น เช่น ตัดเงินสำเร็จและขึ้นหน้าจอเสร็จสิ้น]\n\nให้แสดงผลในรูปแบบตารางและหัวข้อที่ชัดเจนดังนี้:\n1. รหัสและชื่อเคสการทดสอบ (เช่น TC01 - จ่ายเงินสำเร็จด้วยบัตรเครดิต)\n2. สิ่งที่ต้องมีก่อนเริ่มกด (Pre-conditions เช่น ต้องล็อกอินและมีของในตะกร้า)\n3. ขั้นตอนการกดทีละขั้น (1, 2, 3... tester ต้องกดปุ่มไหน กรอกอะไรบ้าง)\n4. ผลลัพธ์ที่หน้าจอและหลังบ้านควรจะเป็น (สิ่งที่ต้องเช็กว่าแสดงผลถูกต้อง)\n5. เคสทดสอบเชิงลบและจุดดักบัค (Negative Test & Edge Cases เช่น กรอกเลขบัตรผิด หรืออินเทอร์เน็ตหลุดระหว่างตัดเงิน)",
          benefit: "ช่วยให้ได้รายการเช็คความถูกต้องที่มีคุณภาพ ครอบคลุมพฤติกรรมผู้ใช้ที่หลากหลาย ป้องกันปัญหาที่อาจเล็ดลอดไปถึงผู้ใช้งานจริง"
        }
      ]
    }
  };

  const currentDetails = workflowDetails[lang];
  const activeCards = activeTab === 'sa' ? currentDetails.saCards : currentDetails.devCards;

  return (
    <div className="resume-page-wrapper" style={{ minHeight: '100vh', padding: '40px 20px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Navigation Header */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          paddingBottom: '20px',
          borderBottom: '1px solid var(--border-color)',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href="#/"
              onClick={(e) => handleBackClick(e, '#/')}
              className="portfolio-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px' }}
            >
              <i className="fa-solid fa-arrow-left"></i> {currentDetails.backBtn}
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              style={{
                background: 'none',
                border: 'none',
                color: theme === 'dark' ? '#fbbf24' : '#64748b',
                fontSize: '1.2rem',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '50%',
                transition: 'all 0.2s'
              }}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </button>

            {/* Language Selector */}
            <div style={{ display: 'flex', gap: '6px', backgroundColor: 'rgba(255,255,255,0.05)', padding: '4px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <button
                onClick={() => setLang('en')}
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: lang === 'en' ? 'var(--accent)' : 'transparent',
                  color: lang === 'en' ? '#fff' : 'var(--main-text)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'all 0.2s'
                }}
              >
                EN
              </button>
              <button
                onClick={() => setLang('th')}
                className={`lang-btn ${lang === 'th' ? 'active' : ''}`}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: lang === 'th' ? 'var(--accent)' : 'transparent',
                  color: lang === 'th' ? '#fff' : 'var(--main-text)',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'all 0.2s'
                }}
              >
                TH
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            color: 'var(--accent)',
            fontSize: '2rem',
            marginBottom: '20px',
            border: '2px solid rgba(59, 130, 246, 0.3)'
          }}>
            <i className="fa-solid fa-microchip"></i>
          </div>
          <h1 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '2.5rem',
            marginBottom: '15px',
            color: 'var(--main-text)'
          }}>{currentDetails.title}</h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#64748b',
            maxWidth: '850px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>{currentDetails.subtitle}</p>
        </div>

        {/* Tab Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '40px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => { setActiveTab('dev'); setCopiedIdx(null); }}
            style={{
              padding: '16px 24px',
              borderRadius: '12px',
              border: activeTab === 'dev' ? '2px solid var(--accent)' : '1px solid var(--border-color)',
              backgroundColor: activeTab === 'dev' ? 'rgba(59, 130, 246, 0.08)' : 'rgba(255,255,255,0.02)',
              color: activeTab === 'dev' ? 'var(--main-text)' : '#64748b',
              cursor: 'pointer',
              textAlign: 'left',
              width: '100%',
              maxWidth: '420px',
              transition: 'all 0.3s ease',
              boxShadow: activeTab === 'dev' ? '0 4px 20px rgba(59, 130, 246, 0.15)' : 'none'
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <i className="fa-solid fa-code" style={{ fontSize: '1.4rem', color: activeTab === 'dev' ? 'var(--accent)' : '#64748b' }}></i>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: activeTab === 'dev' ? 'var(--main-text)' : 'var(--main-text)', opacity: activeTab === 'dev' ? 1 : 0.7 }}>
                  {currentDetails.devTabTitle}
                </div>
                <div style={{ fontSize: '0.75rem', marginTop: '4px', opacity: 0.6 }}>
                  {currentDetails.devTabSub}
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => { setActiveTab('sa'); setCopiedIdx(null); }}
            style={{
              padding: '16px 24px',
              borderRadius: '12px',
              border: activeTab === 'sa' ? '2px solid var(--accent)' : '1px solid var(--border-color)',
              backgroundColor: activeTab === 'sa' ? 'rgba(59, 130, 246, 0.08)' : 'rgba(255,255,255,0.02)',
              color: activeTab === 'sa' ? 'var(--main-text)' : '#64748b',
              cursor: 'pointer',
              textAlign: 'left',
              width: '100%',
              maxWidth: '420px',
              transition: 'all 0.3s ease',
              boxShadow: activeTab === 'sa' ? '0 4px 20px rgba(59, 130, 246, 0.15)' : 'none'
            }}
          >
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <i className="fa-solid fa-layer-group" style={{ fontSize: '1.4rem', color: activeTab === 'sa' ? 'var(--accent)' : '#64748b' }}></i>
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: activeTab === 'sa' ? 'var(--main-text)' : 'var(--main-text)', opacity: activeTab === 'sa' ? 1 : 0.7 }}>
                  {currentDetails.saTabTitle}
                </div>
                <div style={{ fontSize: '0.75rem', marginTop: '4px', opacity: 0.6 }}>
                  {currentDetails.saTabSub}
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Workflows Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {activeCards.map((card, idx) => (
            <div key={idx} style={{
              background: theme === 'dark' ? '#0f172a' : '#ffffff',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '30px',
              boxShadow: 'var(--shadow)',
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-start',
              flexDirection: window.innerWidth < 768 ? 'column' : 'row'
            }} className="workflow-card">

              {/* Card Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                color: 'var(--accent)',
                fontSize: '1.5rem',
                flexShrink: 0
              }}>
                <i className={card.icon}></i>
              </div>

              {/* Card Content */}
              <div style={{ flex: 1 }}>
                <h2 style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '1.4rem',
                  marginBottom: '10px',
                  color: 'var(--main-text)'
                }}>{card.title}</h2>

                <p style={{
                  fontSize: '1rem',
                  color: 'var(--main-text)',
                  opacity: 0.9,
                  marginBottom: '15px',
                  lineHeight: '1.5'
                }}>{card.summary}</p>

                <div style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <strong style={{ color: 'var(--accent)' }}>{lang === 'en' ? 'Core Benefit:' : 'ประโยชน์หลัก:'}</strong> {card.benefit}
                </div>

                {/* Prompt Example Block */}
                <div style={{
                  backgroundColor: theme === 'dark' ? '#030712' : '#f8fafc',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '20px',
                  fontFamily: 'Fira Code, Consolas, Monaco, monospace',
                  fontSize: '0.88rem',
                  position: 'relative',
                  overflowX: 'auto'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    right: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <span style={{
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: '#64748b',
                      fontWeight: 700
                    }}>
                      {card.rule}
                    </span>
                    <button
                      onClick={() => handleCopy(card.prompt, idx)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: copiedIdx === idx ? '#10b981' : '#64748b',
                        cursor: 'pointer',
                        padding: '4px',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      title="Copy Prompt"
                    >
                      {copiedIdx === idx ? (
                        <i className="fa-solid fa-check"></i>
                      ) : (
                        <i className="fa-regular fa-copy"></i>
                      )}
                    </button>
                  </div>
                  <div style={{ color: theme === 'dark' ? '#a5b4fc' : '#4f46e5', fontWeight: 600, marginBottom: '8px' }}>
                    &gt; Prompt Context Template:
                  </div>
                  <div style={{
                    color: theme === 'dark' ? '#e2e8f0' : '#1e293b',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-wrap'
                  }}>
                    "{card.prompt}"
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
