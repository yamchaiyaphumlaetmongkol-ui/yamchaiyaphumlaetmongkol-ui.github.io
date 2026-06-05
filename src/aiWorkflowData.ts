export interface WorkflowCard {
  icon: string;
  title: string;
  summary: string;
  whenToUse: string;
  portfolioExample: string;
  rule: string;
  prompt: string;
  benefit: string;
}

export interface WorkflowPageContent {
  title: string;
  subtitle: string;
  intro: string;
  portfolioSummary: string;
  portfolioHighlights: string[];
  howToUse: [string, string, string];
  backBtn: string;
  saTabTitle: string;
  saTabSub: string;
  devTabTitle: string;
  devTabSub: string;
  whenToUseLabel: string;
  portfolioExampleLabel: string;
  saCards: WorkflowCard[];
  devCards: WorkflowCard[];
}

export const workflowDetails: Record<'en' | 'th', WorkflowPageContent> = {
  en: {
    title: "AI-Assisted System Analysis & Software Engineering",
    subtitle: "Production-grade prompt templates used in enterprise and full-stack projects — designed to clarify specs, prevent regression, and ship incrementally.",
    intro: "These are the actual prompt patterns I use in large projects (HRMS dashboards, ERP integrations, legacy module maintenance). Each template is copy-ready: fill the bracket placeholders, paste into Cursor IDE or any LLM, and approve the plan before code changes.",
    portfolioSummary: "Production-grade templates for HRMS/ERP projects — clarify specs, prevent regression, and ship in testable phases.",
    portfolioHighlights: [
      "Check specs before coding",
      "Protect existing code from breaking",
      "Deliver step by step",
      "Plan manual & UAT tests",
      "Design data models & APIs",
    ],
    howToUse: [
      "Copy the template and replace [bracket] placeholders with your ticket, module, or stack.",
      "Run Pre-Flight or Meta-Prompt first — never jump straight to implementation on legacy systems.",
      "Approve the AI output (scope, files, risks) before allowing code changes."
    ],
    backBtn: "Back to Portfolio",
    saTabTitle: "System Analyst & Architect Workflows",
    saTabSub: "Data model, integration design, ADR decisions",
    devTabTitle: "AI-Assisted Development Workflows",
    devTabSub: "Spec check, safe changes, incremental delivery, UAT",
    whenToUseLabel: "When to use",
    portfolioExampleLabel: "Used in projects like",
    saCards: [
      {
        icon: "fa-solid fa-user-gear",
        title: "Solution Architect Persona",
        summary: "Forces decisive architecture recommendations with explicit trade-offs — no vague \"it depends\" answers.",
        whenToUse: "Early design phase, technology shortlisting, or architecture review meetings.",
        portfolioExample: "Evaluating integration approach between Angular HRMS modules and .NET Core services.",
        rule: "Architect Role",
        prompt: `[ROLE] You are a Solution Architect for enterprise web systems (Angular + .NET/Java APIs + RDBMS). Prioritize practical, maintainable solutions over theoretical perfection.

[CONTEXT]
- Domain: [e.g., HRMS leave management / ERP reporting]
- Team constraints: [skillset, timeline, budget]
- Non-negotiables: [compliance, uptime, existing stack]

[RULES]
1. Give ONE clear recommendation — never end with only "it depends".
2. State trade-offs and risks for every option you mention.
3. If context is insufficient: ask max 2 clarifying questions, then offer:
   "I can proceed with stated assumptions (you approve) OR you answer questions first."

[OUTPUT]
1. Recommended approach (1 paragraph)
2. Trade-off table (Gain vs Cost vs Risk)
3. What NOT to do (anti-patterns)
4. Next concrete step for the dev team`,
        benefit: "Turns vague design discussions into actionable decisions the team can implement."
      },
      {
        icon: "fa-solid fa-database",
        title: "Schema & Database Design",
        summary: "Structured data modeling with entities, indexes, and normalization trade-offs for production databases.",
        whenToUse: "New module design, report query optimization, or schema review before migration.",
        portfolioExample: "HRMS reporting tables and complex SQL for dashboards at Soft Square.",
        rule: "Data Model Spec",
        prompt: `Design a production Data Model for [Domain: e.g., HR leave & approval workflow]

[INPUTS]
- Known entities: [e.g., Employee, LeaveRequest, Approver, Department]
- Database: [PostgreSQL / MySQL / Oracle]
- Expected scale: [rows/year, peak concurrent users]
- Read patterns: [dashboards, exports, real-time UI]
- Write patterns: [CRUD, batch import, audit logs]

[OUTPUT — use these sections only]
1. Entity list with attributes (name + SQL type + nullable + notes)
2. Relationships & cardinality (text or Mermaid ER)
3. Indexes (with WHY each index exists — query pattern it serves)
4. Normalization vs performance trade-off (explicit decision)
5. Migration / rollout risks for existing data`,
        benefit: "Produces reviewable schemas with index rationale — not just table lists."
      },
      {
        icon: "fa-solid fa-network-wired",
        title: "Integration Architecture",
        summary: "Defines API/event contracts, failure handling, and security for service-to-service communication.",
        whenToUse: "Connecting frontend to backend, third-party APIs, or multi-system ERP integrations.",
        portfolioExample: "ECT-ERP+HRMS integration — Angular UI with .NET Core APIs and PostgreSQL.",
        rule: "Integration Blueprint",
        prompt: `Design integration between [System A] and [System B]

[CONSTRAINTS]
- Protocol: [REST / gRPC / message queue / batch file]
- Sync model: [sync request-response / async event]
- Auth: [JWT / API key / OAuth / internal network]
- SLA: [timeout, retry budget, idempotency required? Y/N]

[OUTPUT]
1. Contract: request/response JSON Schema or TypeScript interfaces
2. Sequence flow (numbered steps or Mermaid sequenceDiagram)
3. Failure matrix: error type → retry? → user message → log level
4. Idempotency & duplicate handling strategy
5. Security checklist (transport, authZ scopes, rate limits, PII handling)`,
        benefit: "Prevents integration bugs before a single endpoint is coded."
      },
      {
        icon: "fa-solid fa-scale-balanced",
        title: "Technical Decision Record (ADR)",
        summary: "Structured technology comparison with a definitive recommendation and migration risks.",
        whenToUse: "Choosing between libraries, databases, or architecture patterns under real constraints.",
        portfolioExample: "Comparing report generation approaches (JasperReports vs in-app PDF) under enterprise load.",
        rule: "ADR Template",
        prompt: `Create an Architectural Decision Record (ADR)

[DECISION]
Compare [Option A] vs [Option B] for [goal: e.g., PDF report generation at scale]

[CONSTRAINTS]
- Team: [current skills]
- Timeline: [release date]
- Scale: [requests/day, data volume]
- Must integrate with: [existing stack]

[OUTPUT — ADR format]
## Status: Proposed
## Context (2-3 sentences)
## Comparison Matrix (Performance | Complexity | Cost | Ops burden)
## Decision: [pick one — decisive]
## Consequences (positive + negative)
## Migration plan if switching from current approach
## Rollback strategy`,
        benefit: "Documents why a decision was made — critical for team alignment and audits."
      }
    ],
    devCards: [
      {
        icon: "fa-solid fa-clipboard-check",
        title: "Pre-Flight Spec Validation",
        summary: "Stops implementation until requirements, scope, and regression risks are explicit.",
        whenToUse: "Every new ticket — especially on legacy HRMS/ERP modules with stable production flows.",
        portfolioExample: "UAT bug fixes and new dashboard features without breaking existing HRMS workflows.",
        rule: "Spec Gate",
        prompt: `[ROLE] Senior developer reviewing a task BEFORE any code is written.

[PROJECT CONTEXT]
- Stack: [e.g., Angular 17 + TypeScript + .NET Core 8 + PostgreSQL]
- Module: [e.g., Leave Request screen / Payroll export]
- Must NOT break: [list existing flows users rely on daily]

[REQUEST]
[paste ticket, user story, or feature description]

[OUTPUT — do not write code]
1. Ambiguities (max 5, ranked by impact)
2. Clarifying questions (max 3, only blocking ones)
3. Assumptions (numbered — require my approval)
4. IN scope / OUT of scope
5. Regression risk areas (files, APIs, shared components)
6. Suggested implementation order (max 3 steps)

End with: "Reply APPROVED to proceed, or answer the questions above."`,
        benefit: "Eliminates \"AI guessed wrong\" rework on production systems."
      },
      {
        icon: "fa-solid fa-brain",
        title: "IDE Meta-Prompt (Context-Aware Plan)",
        summary: "AI reads the actual workspace first, then generates a project-specific execution plan for approval.",
        whenToUse: "Medium-to-large features where file selection and pattern matching matter.",
        portfolioExample: "Adding responsive mobile layout to portfolio without breaking desktop — analyze files first.",
        rule: "Plan Before Code",
        prompt: `Before implementing ANY code for: [Feature / bugfix description]

[MANDATORY FIRST STEP]
1. Read relevant files in this workspace (list which you inspected).
2. Identify patterns already used (naming, folder structure, CSS approach, state management).

[THEN OUTPUT]
## Execution Plan
- Files to CREATE (with purpose each)
- Files to MODIFY (with what changes, line-level intent)
- Files explicitly NOT to touch (regression guard)
- Desktop vs mobile scope (if UI work — which breakpoints)
- Test checklist after implementation

[CONSTRAINTS]
- Minimal diff — do not refactor unrelated code
- Match existing author style in this repo
- No new dependencies unless justified

Present this plan only. Wait for my "APPROVED" before writing code.`,
        benefit: "Converts a one-line request into a safe, repo-aware implementation plan."
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Regression-Safe Implementation",
        summary: "Principal-engineer guardrails for changing production code without breaking stable modules.",
        whenToUse: "Any code change on mature codebases — the default prompt for implementation work.",
        portfolioExample: "Maintaining legacy HRMS modules and Angular dashboards during cooperative education.",
        rule: "Safe Change",
        prompt: `[ROLE] Principal Software Engineer — stability first.

[CONTEXT]
- Stack: [e.g., Angular + TypeScript / React + Vite / C# .NET]
- Task: [specific change — one feature or bugfix only]
- Reference patterns: [paste similar existing file or describe convention]

[HARD RULES]
1. Do NOT modify files outside the stated scope.
2. Do NOT change desktop layout when task is mobile-only (use @media only).
3. Do NOT refactor, rename, or "clean up" unrelated code.
4. Ask questions if spec is ambiguous — do not assume.
5. Full implementations only — no "// TODO" or truncated snippets.

[EDGE CASES TO HANDLE]
[list or write "propose 3 edge cases and wait for approval"]

[DELIVERABLES]
1. Code changes (minimal diff)
2. Brief summary: what changed and why
3. Manual test steps (3-5 bullets)
4. What was intentionally NOT changed`,
        benefit: "The core prompt for enterprise maintenance — prevents scope creep and regressions."
      },
      {
        icon: "fa-solid fa-list-check",
        title: "Structured TODO Milestones",
        summary: "Breaks large deliverables into small, testable phases — ship and verify incrementally.",
        whenToUse: "Multi-day features, refactors, or responsive redesigns split across review cycles.",
        portfolioExample: "Portfolio mobile responsive: P0 nav → P1 layout → P2 polish, each testable alone.",
        rule: "Incremental Delivery",
        prompt: `Break this task into incremental, testable milestones:

[TASK] [e.g., Make portfolio mobile-responsive without affecting desktop ≥969px]

[PROJECT] [stack and key files]

[OUTPUT — numbered milestones only, no code yet]
For each milestone:
- ID (P0, P1, P2...)
- Goal (one sentence)
- Files touched
- Acceptance criteria (how I verify in browser/DevTools)
- Rollback note (what to revert if it fails)

[RULES]
- Each milestone must be independently testable
- P0 = highest risk / blocker first
- Desktop (≥969px) must remain unchanged unless milestone explicitly says otherwise
- Max 5 milestones

Wait for me to say "Start P0" before implementing milestone 1.`,
        benefit: "Makes large AI-assisted work reviewable in small PR-sized chunks."
      },
      {
        icon: "fa-solid fa-code",
        title: "Fullstack Code Explainer",
        summary: "Onboarding-friendly explanation of data flow across frontend, API, and database layers.",
        whenToUse: "Understanding legacy modules, handover documentation, or pre-refactor analysis.",
        portfolioExample: "Explaining HRMS dashboard data flow from Angular component → API → SQL report query.",
        rule: "Code Walkthrough",
        prompt: `Explain this code for a developer joining the project mid-sprint.

[STACK] [e.g., Angular component → .NET Core controller → PostgreSQL]
[CODE / FILES] [paste snippet or list file paths]

[OUTPUT]
1. **Purpose** — what business problem this solves (plain English)
2. **Trigger** — what user action or event starts this flow
3. **Step-by-step data flow** (numbered, include API endpoints & DB tables if any)
4. **Dependencies** — other modules/services this touches
5. **Gotchas** — non-obvious logic, side effects, or legacy workarounds
6. **If I need to change X** — which file to start with`,
        benefit: "Reduces onboarding time on complex enterprise codepaths."
      },
      {
        icon: "fa-solid fa-vial-circle-check",
        title: "Manual Test & UAT Checklist",
        summary: "Structured test cases for manual QA — happy path, edge cases, and regression checks.",
        whenToUse: "Before UAT submission or production release on user-facing features.",
        portfolioExample: "UAT verification for HRMS features and bug fixes before deployment.",
        rule: "QA Checklist",
        prompt: `Create a Manual Test Suite for: [Feature name]

[USER FLOW] [e.g., User submits leave request → manager approves → status updates on dashboard]
[ENVIRONMENTS] [dev / staging URLs, test accounts if needed]
[REGRESSION AREAS] [existing flows that must still work]

[OUTPUT — table format]
| ID | Title | Pre-conditions | Steps | Expected result | Priority |
Include:
- At least 1 happy path
- At least 3 edge/negative cases (invalid input, permissions, network)
- At least 2 regression checks (unrelated features still work)
- Mobile + desktop rows if UI feature

Add a final "Sign-off checklist" (5 yes/no items for release readiness).`,
        benefit: "Matches real UAT workflow — structured, reproducible, audit-friendly."
      }
    ]
  },
  th: {
    title: "กระบวนการวิเคราะห์ระบบและพัฒนาซอฟต์แวร์ร่วมกับ AI",
    subtitle: "เทมเพลต Prompt ระดับใช้งานจริงในโปรเจกต์องค์กร — ออกแบบมาเพื่อเคลียร์สเปก ป้องกัน Regression และส่งมอบงานทีละเฟส",
    intro: "นี่คือรูปแบบ Prompt ที่ผมใช้จริงในโปรเจกต์ขนาดใหญ่ (HRMS Dashboard, ERP Integration, ดูแล Legacy Module) แต่ละเทมเพลต copy ไปใช้ได้ทันที: แทนค่าใน [วงเล็บ] แล้ววางใน Cursor IDE หรือ LLM อื่น — อนุมัติแผนก่อนลงมือแก้โค้ดเสมอ",
    portfolioSummary: "เทมเพลตที่ใช้จริงในโปรเจกต์ HRMS/ERP — เคลียร์สเปก ป้องกัน Regression ส่งมอบทีละเฟส",
    portfolioHighlights: [
      "ตรวจสเปกก่อนลงมือ",
      "แก้โค้ดโดยไม่พังระบบเดิม",
      "ส่งมอบทีละขั้น ทดสอบได้",
      "วางแผนทดสอบ UAT",
      "ออกแบบข้อมูลและเชื่อม API",
    ],
    howToUse: [
      "Copy เทมเพลต แล้วแทนค่า [วงเล็บ] ด้วย Ticket, Module หรือ Tech Stack ของคุณ",
      "รัน Pre-Flight หรือ Meta-Prompt ก่อน — ห้ามข้ามไปเขียนโค้ดทันทีบนระบบเดิม",
      "อนุมัติผลลัพธ์จาก AI (ขอบเขต, ไฟล์, ความเสี่ยง) ก่อนอนุญาตให้แก้โค้ด"
    ],
    backBtn: "กลับหน้าพอร์ตโฟลิโอ",
    saTabTitle: "งานวิเคราะห์และออกแบบระบบ (SA & Architect)",
    saTabSub: "Data Model, Integration, ADR",
    devTabTitle: "งานพัฒนาและเขียนโปรแกรม (AI-Assisted Dev)",
    devTabSub: "เช็กสเปก, แก้โค้ดปลอดภัย, ส่งมอบทีละเฟส, UAT",
    whenToUseLabel: "ใช้เมื่อไหร่",
    portfolioExampleLabel: "ใช้ในโปรเจกต์เช่น",
    saCards: [
      {
        icon: "fa-solid fa-user-gear",
        title: "บทบาท Solution Architect",
        summary: "บังคับให้ AI ให้คำแนะนำที่ชัดเจน พร้อม Trade-off — ไม่ตอบกว้างๆ ว่า \"ขึ้นอยู่กับ\"",
        whenToUse: "ช่วงออกแบบระบบ, เลือกเทคโนโลยี, หรือ Review สถาปัตยกรรม",
        portfolioExample: "ประเมินวิธีเชื่อมต่อ Angular HRMS กับ .NET Core API",
        rule: "Architect Role",
        prompt: `[บทบาท] คุณคือ Solution Architect สำหรับระบบเว็บองค์กร (Angular + .NET/Java API + RDBMS) เน้นโซลูชันที่ใช้งานได้จริงมากกว่าความสมบูรณ์แบบใน theory

[บริบท]
- โดเมน: [เช่น HRMS ระบบลา / รายงาน ERP]
- ข้อจำกัดทีม: [ทักษะ, ไทม์ไลน์, งบ]
- สิ่งที่ห้ามเปลี่ยน: [Compliance, Uptime, Stack เดิม]

[กฎ]
1. ให้คำแนะนำเดียวที่ชัดเจน — ห้ามจบแค่ "ขึ้นอยู่กับ"
2. ระบุ Trade-off และความเสี่ยงทุกทางเลือก
3. ถ้าข้อมูลไม่พอ: ถามได้ไม่เกิน 2 คำถาม แล้วเสนอ:
   "ดำเนินการด้วยสมมติฐานที่ระบุ (คุณอนุมัติ) หรือตอบคำถามก่อน"

[ผลลัพธ์]
1. แนวทางที่แนะนำ (1 ย่อหน้า)
2. ตาราง Trade-off (ได้อะไร vs เสียอะไร vs ความเสี่ยง)
3. สิ่งที่ไม่ควรทำ (anti-patterns)
4. ขั้นตอนถัดไปที่ทีม Dev ทำได้ทันที`,
        benefit: "เปลี่ยนการออกแบบที่คลุมเครือให้เป็นข้อตัดสินใจที่ทีมลงมือได้"
      },
      {
        icon: "fa-solid fa-database",
        title: "การออกแบบ Schema & Database",
        summary: "ออกแบบ Data Model พร้อม Index, ความสัมพันธ์ และ Trade-off ของ Normalization สำหรับ Production",
        whenToUse: "ออกแบบ Module ใหม่, ปรับ Query รายงาน, หรือ Review Schema ก่อน Migrate",
        portfolioExample: "ตารางรายงาน HRMS และ SQL ซับซ้อนสำหรับ Dashboard ที่ Soft Square",
        rule: "Data Model Spec",
        prompt: `ออกแบบ Data Model สำหรับ Production: [โดเมน เช่น ระบบลาและอนุมัติ HR]

[ข้อมูลเข้า]
- Entity ที่รู้แล้ว: [เช่น Employee, LeaveRequest, Approver, Department]
- Database: [PostgreSQL / MySQL / Oracle]
- Scale คาดการณ์: [แถว/ปี, concurrent users]
- รูปแบบอ่าน: [Dashboard, Export, Real-time UI]
- รูปแบบเขียน: [CRUD, Batch import, Audit log]

[ผลลัพธ์ — ใช้หัวข้อนี้เท่านั้น]
1. รายการ Entity + Attribute (ชื่อ + SQL type + nullable + หมายเหตุ)
2. ความสัมพันธ์ & Cardinality (ข้อความหรือ Mermaid ER)
3. Index (พร้อมเหตุผล — query ไหนใช้ index นี้)
4. Trade-off Normalization vs Performance (ตัดสินใจชัดเจน)
5. ความเสี่ยง Migration สำหรับข้อมูลเดิม`,
        benefit: "ได้ Schema ที่ Review ได้ พร้อมเหตุผลของ Index — ไม่ใช่แค่รายชื่อตาราง"
      },
      {
        icon: "fa-solid fa-network-wired",
        title: "สถาปัตยกรรมการเชื่อมต่อระบบ",
        summary: "กำหนด Contract ของ API/Event, การจัดการ Error และ Security ระหว่าง Service",
        whenToUse: "เชื่อม Frontend-Backend, Third-party API หรือ Integration หลายระบบ",
        portfolioExample: "ECT-ERP+HRMS — Angular UI กับ .NET Core API และ PostgreSQL",
        rule: "Integration Blueprint",
        prompt: `ออกแบบ Integration ระหว่าง [ระบบ A] กับ [ระบบ B]

[ข้อจำกัด]
- Protocol: [REST / gRPC / message queue / batch file]
- รูปแบบ: [sync / async event]
- Auth: [JWT / API key / OAuth / internal network]
- SLA: [timeout, retry budget, ต้อง Idempotent? ใช่/ไม่]

[ผลลัพธ์]
1. Contract: JSON Schema หรือ TypeScript interface
2. Sequence flow (ลำดับขั้นตอนหรือ Mermaid sequenceDiagram)
3. Failure matrix: ประเภท error → retry? → ข้อความผู้ใช้ → log level
4. กลยุทธ์ Idempotency และจัดการข้อมูลซ้ำ
5. Security checklist (transport, authZ, rate limit, PII)`,
        benefit: "ลดบั๊ก Integration ก่อนเขียน Endpoint แรก"
      },
      {
        icon: "fa-solid fa-scale-balanced",
        title: "บันทึกการตัดสินใจเทคนิค (ADR)",
        summary: "เปรียบเทียบเทคโนโลยีแบบมีโครงสร้าง พร้อมคำแนะนำที่ชัดเจนและแผน Migration",
        whenToUse: "เลือก Library, Database หรือ Pattern ภายใต้ข้อจำกัดจริง",
        portfolioExample: "เปรียบเทียบ JasperReports vs in-app PDF ภายใต้โหลดองค์กร",
        rule: "ADR Template",
        prompt: `สร้าง Architectural Decision Record (ADR)

[การตัดสินใจ]
เปรียบเทียบ [ทางเลือก A] กับ [ทางเลือก B] เพื่อ [เป้าหมาย เช่น สร้าง PDF report ที่ scale ได้]

[ข้อจำกัด]
- ทีม: [ทักษะปัจจุบัน]
- ไทม์ไลน์: [วันปล่อย]
- Scale: [request/วัน, ปริมาณข้อมูล]
- ต้องเชื่อมกับ: [stack เดิม]

[ผลลัพธ์ — รูปแบบ ADR]
## Status: Proposed
## Context (2-3 ประโยค)
## ตารางเปรียบเทียบ (Performance | Complexity | Cost | Ops)
## Decision: [เลือกหนึ่งทาง — ชัดเจน]
## Consequences (บวก + ลบ)
## แผน Migration ถ้าเปลี่ยนจากวิธีเดิม
## Rollback strategy`,
        benefit: "บันทึกเหตุผลการตัดสินใจ — สำคัญสำหรับทีมและการ Audit"
      }
    ],
    devCards: [
      {
        icon: "fa-solid fa-clipboard-check",
        title: "Pre-Flight — ตรวจสเปกก่อนลงมือ",
        summary: "หยุดการ Implement จนกว่า Requirement, Scope และความเสี่ยง Regression จะชัดเจน",
        whenToUse: "ทุก Ticket ใหม่ — โดยเฉพาะ Legacy HRMS/ERP ที่ Production ใช้งานจริง",
        portfolioExample: "แก้บั๊ก UAT และฟีเจอร์ Dashboard ใหม่โดยไม่พัง Flow เดิมของ HRMS",
        rule: "Spec Gate",
        prompt: `[บทบาท] Senior Developer ตรวจงานก่อนเขียนโค้ดทุกบรรทัด

[บริบทโปรเจกต์]
- Stack: [เช่น Angular 17 + TypeScript + .NET Core 8 + PostgreSQL]
- Module: [เช่น หน้าลา / Export Payroll]
- ห้ามพัง: [Flow ที่ผู้ใช้ใช้ทุกวัน]

[คำขอ]
[วาง Ticket, User Story หรือรายละเอียดฟีเจอร์]

[ผลลัพธ์ — ห้ามเขียนโค้ด]
1. จุดคลุมเครือ (ไม่เกิน 5 เรียงตามผลกระทบ)
2. คำถามที่ต้องตอบ (ไม่เกิน 3 — เฉพาะที่ blocking)
3. สมมติฐาน (ลำดับเลข — ต้องให้ฉันอนุมัติ)
4. IN scope / OUT of scope
5. พื้นที่เสี่ยง Regression (ไฟล์, API, component ร่วม)
6. ลำดับ Implement ที่แนะนำ (ไม่เกิน 3 ขั้น)

จบด้วย: "ตอบ APPROVED เพื่อดำเนินการ หรือตอบคำถามด้านบน"`,
        benefit: "ลดงานแก้ซ้ำจาก AI เดาสเปกผิดบนระบบ Production"
      },
      {
        icon: "fa-solid fa-brain",
        title: "IDE Meta-Prompt (แผนจากโค้ดจริง)",
        summary: "ให้ AI อ่าน Workspace ก่อน แล้วสร้างแผนลงมือที่ตรงกับโปรเจกต์นี้",
        whenToUse: "ฟีเจอร์ขนาดกลาง-ใหญ่ ที่การเลือกไฟล์และ Pattern สำคัญ",
        portfolioExample: "ทำ Portfolio responsive บนมือถือโดยไม่กระทบ Desktop — วิเคราะห์ไฟล์ก่อน",
        rule: "Plan Before Code",
        prompt: `ก่อนเขียนโค้ดใดๆ สำหรับ: [รายละเอียดฟีเจอร์ / แก้บั๊ก]

[ขั้นตอนบังคับก่อน]
1. อ่านไฟล์ที่เกี่ยวข้องใน Workspace นี้ (ระบุว่าอ่านไฟล์ไหนบ้าง)
2. ระบุ Pattern ที่โปรเจกต์ใช้อยู่ (ชื่อ, โฟลเดอร์, CSS, state)

[จากนั้นสรุป]
## Execution Plan
- ไฟล์ที่จะ CREATE (พร้อมเหตุผล)
- ไฟล์ที่จะ MODIFY (เปลี่ยนอะไร ระดับ intent)
- ไฟล์ที่ห้ามแตะ (ป้องกัน Regression)
- ขอบเขต Desktop vs Mobile (ถ้าเป็น UI — breakpoint ไหน)
- Checklist ทดสอบหลังทำเสร็จ

[ข้อจำกัด]
- Diff เล็กที่สุด — ห้าม refactor ที่ไม่เกี่ยว
- ให้สไตล์ตรงกับโค้ดเดิมใน repo
- ห้ามเพิ่ม dependency ใหม่ถ้าไม่จำเป็น

ส่งแผนเท่านั้น รอ "APPROVED" ก่อนเขียนโค้ด`,
        benefit: "เปลี่ยนคำสั่งสั้นๆ เป็นแผนที่ปลอดภัยและตรงกับ Repo"
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "แก้โค้ดอย่างปลอดภัย (Regression-Safe)",
        summary: "กฎระดับ Principal Engineer สำหรับแก้ Production โดยไม่พัง Module ที่เสถียร",
        whenToUse: "ทุกครั้งที่แก้ Codebase ที่ mature — Prompt หลักสำหรับงาน Implement",
        portfolioExample: "ดูแล Legacy HRMS และ Angular Dashboard ช่วงสหกิจศึกษา",
        rule: "Safe Change",
        prompt: `[บทบาท] Principal Software Engineer — เสถียรภาพมาก่อน

[บริบท]
- Stack: [เช่น Angular + TypeScript / React + Vite / C# .NET]
- งาน: [การเปลี่ยนแปลงเฉพาะจุด — หนึ่งฟีเจอร์หรือบั๊ก]
- Pattern อ้างอิง: [วางไฟล์ตัวอย่างหรืออธิบาย convention]

[กฎเหล็ก]
1. ห้ามแก้ไฟล์นอก Scope ที่ระบุ
2. ห้ามเปลี่ยน Desktop เมื่องานเป็น Mobile เท่านั้น (ใช้ @media)
3. ห้าม refactor/rename/"เก็บกวน" โค้ดที่ไม่เกี่ยว
4. ถามถ้าสเปกคลุมเครือ — ห้ามเดา
5. โค้ดเต็มเท่านั้น — ห้าม "// TODO" หรือตัดทอน

[Edge Cases]
[ระบุ หรือเขียน "เสนอ 3 edge cases แล้วรออนุมัติ"]

[ส่งมอบ]
1. โค้ดที่เปลี่ยน (diff เล็กสุด)
2. สรุปสั้นๆ: เปลี่ยนอะไร ทำไม
3. ขั้นตอนทดสอบมือ (3-5 ข้อ)
4. สิ่งที่ตั้งใจไม่เปลี่ยน`,
        benefit: "Prompt หลักสำหรับงาน Enterprise — กันขอบเขตบานและ Regression"
      },
      {
        icon: "fa-solid fa-list-check",
        title: "แผนงาน TODO ทีละเฟส",
        summary: "แบ่งงานใหญ่เป็น Milestone เล็กที่ทดสอบได้ — ส่งมอบและตรวจทีละส่วน",
        whenToUse: "ฟีเจอร์หลายวัน, Refactor หรือ Responsive redesign แบ่งรอบ Review",
        portfolioExample: "Portfolio mobile: P0 เมนู → P1 layout → P2 polish ทดสอบแยกกันได้",
        rule: "Incremental Delivery",
        prompt: `แบ่งงานนี้เป็น Milestone ที่ทดสอบได้ทีละส่วน:

[งาน] [เช่น ทำ Portfolio responsive บนมือถือโดยไม่กระทบ Desktop ≥969px]

[โปรเจกต์] [stack และไฟล์หลัก]

[ผลลัพธ์ — เฉพาะ milestone ยังไม่เขียนโค้ด]
แต่ละ milestone ระบุ:
- ID (P0, P1, P2...)
- เป้าหมาย (หนึ่งประโยค)
- ไฟล์ที่เกี่ยวข้อง
- เกณฑ์ยอมรับ (ตรวจใน browser/DevTools อย่างไร)
- Rollback (ถ้าพังจะ revert อะไร)

[กฎ]
- แต่ละ milestone ทดสอบแยกได้
- P0 = ความเสี่ยงสูงสุด / blocker ก่อน
- Desktop (≥969px) ต้องไม่เปลี่ยนถ้า milestone ไม่ได้ระบุ
- ไม่เกิน 5 milestones

รอคำสั่ง "Start P0" ก่อนเริ่ม milestone แรก`,
        benefit: "ทำให้งาน AI-assisted ใหญ่ๆ Review ได้ทีละก้อนเท่า PR เล็ก"
      },
      {
        icon: "fa-solid fa-code",
        title: "อธิบายโค้ด Fullstack",
        summary: "อธิบาย Data Flow ข้าม Frontend, API และ Database สำหรับ Onboarding",
        whenToUse: "ทำความเข้าใจ Legacy, ส่งมอบงาน หรือวิเคราะห์ก่อน Refactor",
        portfolioExample: "อธิบาย Flow Dashboard HRMS จาก Angular → API → SQL Report",
        rule: "Code Walkthrough",
        prompt: `อธิบายโค้ดนี้สำหรับ Dev ที่เข้ามากลางโปรเจกต์

[Stack] [เช่น Angular component → .NET Core controller → PostgreSQL]
[โค้ด / ไฟล์] [วาง snippet หรือระบุ path]

[ผลลัพธ์]
1. **วัตถุประสงค์** — แก้ปัญหาธุรกิจอะไร (ภาษาคนทั่วไป)
2. **จุดเริ่ม** — action หรือ event อะไร trigger flow นี้
3. **Data flow ทีละขั้น** (ลำดับเลข รวม endpoint & ตาราง DB ถ้ามี)
4. **Dependencies** — module/service อื่นที่เกี่ยวข้อง
5. **จุดระวัง** — logic แปลก, side effect, workaround legacy
6. **ถ้าต้องแก้ X** — เริ่มที่ไฟล์ไหน`,
        benefit: "ลดเวลา Onboarding บน Codepath องค์กรที่ซับซ้อน"
      },
      {
        icon: "fa-solid fa-vial-circle-check",
        title: "ชุดทดสอบมือ & UAT",
        summary: "Test Case สำหรับ QA มือ — Happy path, Edge case และ Regression",
        whenToUse: "ก่อนส่ง UAT หรือปล่อย Production ฟีเจอร์ที่ผู้ใช้เห็น",
        portfolioExample: "ตรวจ UAT ฟีเจอร์ HRMS และแก้บั๊กก่อน Deploy",
        rule: "QA Checklist",
        prompt: `สร้างชุดทดสอบมือสำหรับ: [ชื่อฟีเจอร์]

[User Flow] [เช่น ส่งคำขอลา → หัวหน้าอนุมัติ → สถานะอัปเดตบน Dashboard]
[Environment] [dev/staging URL, test account]
[Regression] [Flow เดิมที่ต้องยังใช้ได้]

[ผลลัพธ์ — รูปแบบตาราง]
| ID | Title | Pre-conditions | Steps | Expected | Priority |
รวม:
- Happy path อย่างน้อย 1 เคส
- Edge/Negative อย่างน้อย 3 เคส
- Regression อย่างน้อย 2 เคส
- แถว Mobile + Desktop ถ้าเป็นฟีเจอร์ UI

เพิ่ม "Sign-off checklist" ท้ายสุด (5 ข้อ ใช่/ไม่ใช่ ก่อนปล่อย)`,
        benefit: "ตรงกับ Workflow UAT จริง — มีโครงสร้าง ทำซ้ำได้ พร้อม Audit"
      }
    ]
  }
};
