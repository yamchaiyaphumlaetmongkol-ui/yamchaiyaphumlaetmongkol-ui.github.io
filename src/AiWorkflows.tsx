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
      devTabSub: "System Prompts, Regression Prevention, Ambiguity Checks, TODO Sequencing, Explanations, Testing",
      saCards: [
        {
          icon: "fa-solid fa-user-gear",
          title: "System Architect Persona",
          summary: "Defining a clear Solution Architect persona that focuses on pragmatic solutions, trade-off analysis, and avoiding over-engineering.",
          rule: "Architect Role Enforcement",
          prompt: "You are a Solution Architect who prioritizes practical over perfect solutions:\n1. Always provide clear, decisive recommendations instead of saying 'it depends'.\n2. Explicitly state trade-offs and risks for every decision.\n3. If the provided context is insufficient for a decision:\n   - Ask exactly 1-2 high-priority clarifying questions.\n   - Offer a choice: 'I can proceed with my best assumptions immediately (which you must approve first) OR you can choose to answer these questions first.'\n4. Never proceed with immediate implementation without my explicit approval of your assumptions or plan.",
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
        },
        {
          icon: "fa-solid fa-diagram-project",
          title: "Diagram Blueprint Generation",
          summary: "Instructing AI to generate clean, standard Mermaid.js architecture diagrams that developers can render directly.",
          rule: "Mermaid.js System Modeling",
          prompt: "Generate a Mermaid.js diagram representing the system architecture of [Domain]:\n- Level: [C1 Context Diagram / C2 Container Diagram]\n- Key Components: [Frontend, API Gateway, Microservices, DBs, Third-party APIs]\n\nEnsure the output satisfies:\n1. Valid Mermaid.js diagram code (flowchart TB or sequenceDiagram)\n2. Wrap all node labels containing parentheses, brackets, or special characters in double quotes (e.g. node[\"Label (Info)\"]) to avoid parser syntax errors. Do not use raw HTML tags inside node text.\n3. Clear layout subgraphs grouping internal vs external networks\n4. Descriptive labels on arrows detailing communication protocols (HTTPS, gRPC)",
          benefit: "Translates structural architecture descriptions into standard Mermaid.js visualization code."
        }
      ],
      devCards: [
        {
          icon: "fa-solid fa-terminal",
          title: "Developer System Prompt",
          summary: "Setting up a structured, reusable AI developer persona to establish coding standards, regression prevention, and proactive feedback.",
          rule: "Master Developer Prompt",
          prompt: "You are an expert Senior Developer specialized in [Tech Stack, e.g., TypeScript/React]:\n1. Code Standards: Write clean, modular, and self-documenting code. Enforce strict type declarations and robust error handling.\n2. Regression Prevention: Protect designated core modules [Protected Files/Folders, e.g., src/db.ts]. Never modify or delete stable helper methods; write new separate helper extensions if needed.\n3. Pre-Flight Ambiguity Check:\n   - Analyze instructions and requirements before writing any code.\n   - If there are ambiguities, ask exactly 1-2 high-priority clarifying questions.\n   - Provide a choice: 'I can proceed with my best assumptions immediately (which you must approve first) OR you can choose to answer these questions first.'\n4. Human Approval Rule: Never write code or execute final implementations without my explicit approval of your proposed assumptions, TODO sequence, or plan.",
          benefit: "Provides a single startup template that establishes clear boundaries, conventions, and safety rules for the AI."
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "Regression Prevention Guidelines",
          summary: "Directly instructing the AI never to overwrite stable existing methods or break working systems.",
          rule: "Boundary & Integrity Guard",
          prompt: "Do not modify existing working code in [Module Path, e.g., src/db.ts] to avoid breaking the system:\n1. Never delete or modify any existing functions or logic in this file.\n2. If you need to add new features, write new functions at the bottom or create a new file; do not overwrite old code.\n3. Ensure all previous features continue to work 100% exactly as they did before.",
          benefit: "Maintains system stability by protecting verified code from accidental or unnecessary refactoring."
        },
        {
          icon: "fa-solid fa-circle-question",
          title: "Specification Clarification Workflows",
          summary: "Mandating that the AI analyze instructions, highlight ambiguities, and request validation before writing code.",
          rule: "Pre-Flight Ambiguity Check",
          prompt: "Analyze the attached project specifications for [Feature Name] and identify ambiguities:\n1. List all incomplete requirements or missing data constraints.\n2. Identify potential API rate limit bottlenecks or security gaps.\n3. If there are minor ambiguities:\n   - Ask exactly 1-2 high-priority clarifying questions.\n   - Offer a choice: 'I can proceed with my best assumptions immediately (which you must approve first) OR you can choose to answer these questions first.'\n4. Never write any code or execute implementations until I clarify these concerns or explicitly approve your plan.",
          benefit: "Prevents waste and misaligned feature deliveries by eliminating assumptions early."
        },
        {
          icon: "fa-solid fa-list-check",
          title: "Structured TODO Prototyping",
          summary: "Breaking down complex features into modular, sequential TODO milestones using targeted system instructions.",
          rule: "Modular Execution Sequence",
          prompt: "Break down the complex feature [Feature/Integration Name] into clear, sequential milestones:\n1. Define the technical boundaries, core interfaces, and data structures (TODO 1).\n2. Create a mock implementation and verify the API schema logic (TODO 2).\n3. Implement the actual business logic/integration and run verification tests (TODO 3).\n4. Deliver only the code for the active TODO step first and wait for my verification before proceeding to the next.",
          benefit: "Supports incremental prototyping and continuous validation of complex APIs and systems."
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
      devTabSub: "การตั้ง System Prompt, คู่มือป้องกันโค้ดพัง, ระบบเคลียร์ความคลุมเครือ, เทคนิค TODO, อธิบายโค้ด, แผนทดสอบ",
      saCards: [
        {
          icon: "fa-solid fa-user-gear",
          title: "การกำหนดบทบาท Solution Architect",
          summary: "การกำหนดบทบาทให้ AI วิเคราะห์ระบบในฐานะ Solution Architect โดยเน้นแนวทางที่เหมาะสมกับการใช้งานจริง พร้อมประเมินข้อดีข้อเสีย",
          rule: "System Prompt",
          prompt: "คุณคือ Solution Architect ที่เน้น Practical over Perfect:\n1. ให้คำแนะนำ (Recommendation) ที่ชัดเจนเด็ดขาดเสมอ ห้ามตอบกว้างๆ หรือ 'ขึ้นอยู่กับ'\n2. ระบุข้อดีข้อเสีย (Trade-off) และความเสี่ยง (Risk) ทุกครั้งประกอบการตัดสินใจ\n3. หากข้อมูลในปัจจุบันยังไม่เพียงพอสำหรับตัดสินใจ:\n   - ให้ตั้งคำถามกลับมา 1-2 ข้อที่สำคัญที่สุด\n   - เสนอทางเลือกเสมอ: 'จะให้เริ่มวิเคราะห์ทันทีโดยใช้สมมติฐานที่ดีที่สุด (ซึ่งฉันต้องตรวจสอบและอนุมัติก่อน) หรือคุณจะตอบคำถามต่อไปนี้ก่อน'\n4. ห้ามเริ่มทำระบบหรือเขียนโค้ดจริงทันทีโดยไม่ได้รับสัญญาณอนุมัติแผนงานจากฉันก่อน",
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
        },
        {
          icon: "fa-solid fa-diagram-project",
          title: "การสร้างโค้ดไดอะแกรม (Architecture Diagram)",
          summary: "การกำหนดองค์ประกอบสถาปัตยกรรมเครือข่ายและระบบย่อย เพื่อแปลงเป็นโค้ดไดอะแกรม Mermaid.js ที่นำไปเรนเดอร์ใช้งานต่อได้ทันที",
          rule: "Mermaid.js Blueprint",
          prompt: "สร้างโค้ด Mermaid.js เพื่อแสดงไดอะแกรมสถาปัตยกรรมของระบบ [ระบบงาน]:\n- ระดับของไดอะแกรม: [C1 Context Diagram / C2 Container Diagram]\n- ส่วนประกอบสำคัญ: [หน้าจอ, API Gateway, ไมโครเซอร์วิส, ฐานข้อมูล, บริการภายนอก]\n\nกำหนดรูปแบบโค้ดดังนี้:\n1. โครงสร้างโค้ด Mermaid.js ที่ถูกต้องใช้งานได้จริง (flowchart หรือ sequence)\n2. ให้ครอบข้อความใน Node ที่มีวงเล็บหรืออักขระพิเศษด้วยเครื่องหมายอัญประกาศคู่ (เช่น node[\"ข้อความ (ข้อมูลเพิ่มเติม)\"]) เสมอเพื่อป้องกันข้อผิดพลาดทางไวยากรณ์ (Syntax Error) ห้ามใช้แท็ก HTML ในข้อความ\n3. แบ่งกลุ่มเครือข่ายอย่างชัดเจนด้วย subgraph (เช่น internal vs external)\n4. ระบุข้อความอธิบายทิศทางและโปรโตคอลสื่อสารบนเส้นเชื่อมโยง (เช่น HTTPS, gRPC)",
          benefit: "ช่วยแปลงคำอธิบายโครงสร้างระบบเป็นโค้ด Mermaid.js เพื่อแสดงแผนผังระบบย่อยและเครือข่ายได้อย่างรวดเร็ว"
        }
      ],
      devCards: [
        {
          icon: "fa-solid fa-terminal",
          title: "บทบาทผู้พัฒนาซอฟต์แวร์ (Developer System Prompt)",
          summary: "การกำหนดบทบาทให้ AI ทำหน้าที่เป็น Senior Developer โดยเน้นการควบคุมคุณภาพโค้ด การป้องกันการแก้ไขโค้ดเก่าโดยไม่ตั้งใจ และการทวนสอบข้อกำหนดก่อนทำงาน",
          rule: "Master Developer Prompt",
          prompt: "คุณคือนักพัฒนาซอฟต์แวร์ระดับอาวุโส (Senior Developer) ที่เชี่ยวชาญด้าน [Tech Stack เช่น TypeScript/React]:\n1. มาตรฐานโค้ด: เขียนโค้ดสะอาด แยกโมดูลชัดเจน (Modular Code) กำหนด Type อย่างรัดกุม และมีระบบจัดการ Error ที่ครอบคลุม\n2. การป้องกันโค้ดพัง (Regression): ห้ามลบหรือแก้ไขฟังก์ชันการทำงานหลักในพื้นที่คุ้มครอง [Protected Files/Folders เช่น src/db.ts] หากจำเป็นต้องแก้ไข ให้สร้างฟังก์ชันขยายแยกต่างหาก\n3. ระบบเคลียร์ความคลุมเครือ (Pre-Flight Ambiguity Check):\n   - วิเคราะห์ข้อกำหนดระบบอย่างละเอียด หาจุดคอขวดหรือจุดที่สเปกไม่ชัดเจน\n   - ตั้งคำถามกลับมาเฉพาะเรื่องที่จำเป็นที่สุด 1-2 ข้อ\n   - เสนอทางเลือกเสมอ: \"จะให้เริ่มเขียนโค้ดจำลองภายใต้สมมติฐานที่ดีที่สุด (ซึ่งคุณต้องอนุมัติก่อน) หรือคุณจะเลือกตอบคำถามต่อไปนี้ก่อนเพื่อความแม่นยำ\"\n4. การขออนุมัติงาน (Human Approval Required): ห้ามเขียนโค้ดจริงหรือสร้างระบบทันทีโดยไม่ได้รับสัญญาณอนุมัติแผนงานหรือสมมติฐานจากฉันก่อนเป็นอันขาด",
          benefit: "เป็นเทมเพลตเริ่มต้นเพื่อควบคุมสไตล์โค้ด ขอบเขตความปลอดภัย และแนวทางการเขียนโค้ดร่วมกับ AI ให้มีเสถียรภาพสูงสุด"
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "การควบคุมขอบเขตเพื่อป้องกันโค้ดพัง (Regression Prevention)",
          summary: "การระบุขอบเขตให้ AI หลีกเลี่ยงการแก้ไขโค้ดส่วนที่มีเสถียรภาพอยู่ก่อนแล้ว เพื่อลดความเสี่ยงจากการเกิดบัคซ้ำซ้อน",
          rule: "Boundary Prompt",
          prompt: "ห้ามแก้ไขโค้ดเก่าที่ทำงานได้ปกติอยู่แล้วในโมดูล [ระบุชื่อไฟล์ เช่น src/db.ts] เพื่อไม่ให้ระบบเสียหาย:\n1. ห้ามลบ ห้ามแก้ไข หรือห้ามลบโค้ดตรรกะเดิมที่มีอยู่แล้วในไฟล์นี้อย่างเด็ดขาด\n2. ถ้าต้องการเพิ่มฟีเจอร์หรือความสามารถใหม่ ให้เขียนฟังก์ชันใหม่เพิ่มที่ด้านล่างสุด หรือสร้างไฟล์แยกต่างหาก (ห้ามเขียนทับโค้ดเดิม)\n3. ทุกความสามารถเดิมของโค้ดไฟล์นี้ ต้องยังคงทำงานได้ปกติ 100% เหมือนเดิมทุกประการ",
          benefit: "ช่วยปกป้องไฟล์สำคัญไม่ให้โดนเขียนทับโดยไม่จำเป็น ทำให้ฟังก์ชันเดิมยังคงทำงานได้ถูกต้องครบถ้วน"
        },
        {
          icon: "fa-solid fa-circle-question",
          title: "ระบบเคลียร์ความคลุมเครือ (Ambiguity Check)",
          summary: "การกำหนดให้ AI วิเคราะห์รายละเอียดความต้องการของระบบ ค้นหาความคลุมเครือ และทวนสอบความถูกต้องก่อนการเขียนโค้ด",
          rule: "Clarification Prompt",
          prompt: "วิเคราะห์รายละเอียดความต้องการของฟีเจอร์ [ชื่อฟีเจอร์ เช่น API sync] เพื่อหาจุดคลุมเครือ:\n1. แสดงรายการความต้องการที่ยังไม่สมบูรณ์ หรือเงื่อนไขข้อจำกัดข้อมูลที่หายไป\n2. ระบุความเสี่ยงของจุดคอขวด เช่น API Rate Limit หรือช่องโหว่ความปลอดภัย\n3. หากประเมินแล้วพบจุดคลุมเครือที่ควรสอบถาม:\n   - ให้ตั้งคำถามกลับมาเฉพาะเรื่องที่จำเป็นที่สุด 1-2 ข้อ\n   - เสนอทางเลือกเสมอ: 'จะให้เริ่มเขียนโค้ดจำลองภายใต้สมมติฐานที่ดีที่สุด (ซึ่งฉันต้องอนุมัติก่อน) หรือคุณจะตอบคำถามต่อไปนี้ก่อน'\n4. ห้ามลงมือเขียนโค้ดจริงหรือสร้างระบบทันทีโดยไม่ได้รับสัญญาณอนุมัติแผนงานจากฉันก่อน",
          benefit: "ช่วยลดการทำงานซ้ำซ้อนจากความเข้าใจที่คลาดเคลื่อน และทำให้งานสอดคล้องกับข้อกำหนดจริงมากขึ้น"
        },
        {
          icon: "fa-solid fa-list-check",
          title: "เทคนิคการสั่งงานแบบ TODO ทีละขั้นตอน",
          summary: "การแยกย่อยฟีเจอร์ที่ซับซ้อนออกเป็นลำดับขั้นตอนย่อย ๆ เพื่อช่วยควบคุมความเสี่ยงและทยอยตรวจสอบการทำงานของโค้ดในแต่ละส่วน",
          rule: "Sequence Prompt",
          prompt: "แยกย่อยงานที่ซับซ้อนของฟีเจอร์ [ชื่อฟีเจอร์/ระบบ] ออกเป็นลำดับขั้นตอนที่ชัดเจน:\n1. กำหนดขอบเขตเชิงเทคนิค โครงสร้างข้อมูล และ Interface เริ่มต้น (TODO 1)\n2. สร้างส่วนทำงานจำลอง (Mock API/Logic) และทดสอบความถูกต้องของสเปกข้อมูล (TODO 2)\n3. เชื่อมต่อระบบจริงและเพิ่มตรรกะทางธุรกิจพร้อมทั้งตรวจสอบผลลัพธ์ (TODO 3)\n4. ส่งมอบเฉพาะโค้ดของ TODO ลำดับแรกก่อน เพื่อให้ฉันตรวจสอบและอนุมัติก่อนเริ่มทำขั้นตอนถัดไป",
          benefit: "ช่วยให้การเขียนโค้ดในฟีเจอร์ที่ยากมีความก้าวหน้าแบบเป็นขั้นเป็นตอน และสามารถตรวจสอบผลลัพธ์ย่อยได้ทันที"
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
