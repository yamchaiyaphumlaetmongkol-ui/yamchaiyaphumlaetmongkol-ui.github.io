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
    title: "AI-Assisted Systems & Software Engineering",
    subtitle: "Prompt engineering patterns designed to clarify specifications, prevent regression, and deliver features incrementally.",
    intro: "Actual prompt workflows applied during my projects to systematically analyze code. These templates can be adapted for Cursor IDE or other LLMs to validate development plans before implementation.",
    portfolioSummary: "Leveraging AI to validate specifications, protect existing code from regression, and deliver features in testable phases.",
    portfolioHighlights: [
      "Validate requirements before implementation",
      "Analyze impacts to protect existing code from breaking",
      "Plan and deliver features in step-by-step phases",
      "Assist in generating manual and UAT test cases",
      "Aid in designing data models and API integrations",
    ],
    howToUse: [
      "Copy the template and replace [bracket] placeholders with your ticket, module, or stack.",
      "Run Pre-Flight or Meta-Prompt first — never jump straight to implementation on legacy systems.",
      "Approve the AI output (scope, files, risks) before allowing code changes."
    ],
    backBtn: "Back to Portfolio",
    saTabTitle: "System Analyst & Architect Workflows",
    saTabSub: "Data models, integration design, and ADR decisions",
    devTabTitle: "AI-Assisted Development Workflows",
    devTabSub: "Spec checks, safe changes, incremental delivery, and UAT",
    whenToUseLabel: "When to use",
    portfolioExampleLabel: "Used in projects like",
    saCards: [
      {
        icon: "fa-solid fa-user-gear",
        title: "Solution Architect Persona",
        summary: "Forces decisive architecture recommendations with explicit trade-offs — avoiding vague \"it depends\" answers.",
        whenToUse: "Early design phase, technology shortlisting, or architecture review meetings.",
        portfolioExample: "Evaluating integration approaches between web frontends and backend services.",
        rule: "Architect Role",
        prompt: `[ROLE] You are a Solution Architect for enterprise web systems. Prioritize practical, maintainable solutions over theoretical perfection.

[WORKSPACE CONTEXT]
- Read rules from: @agent.md / @skills.md (if available) to align with team constraints and technical stack guidelines.
- Target Domain: [e.g., Leave Management / ERP Reporting / Payment Integration]
- Tech Stack: [e.g., Angular + .NET Core / React + Node.js]
- System Constraints: [e.g., skillsets, timeline, budget, compliance]

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
        portfolioExample: "Designing reporting tables and complex SQL for enterprise dashboards.",
        rule: "Data Model Spec",
        prompt: `Design a production Data Model for [Domain: e.g., Order Processing / Inventory Management]

[INPUTS]
- Database Engine: [PostgreSQL / MySQL / SQL Server / Oracle]
- Expected Scale: [e.g., rows/year, peak concurrent users]
- Primary Read Patterns: [e.g., real-time UI dashboards, batch data exports]
- Primary Write Patterns: [e.g., high-frequency CRUD, batch import, audit logs]

[OUTPUT — use these sections only]
1. Entity list with attributes (name + SQL type + nullable + notes)
2. Relationships & cardinality (text or Mermaid ER diagram)
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
        portfolioExample: "Designing fullstack integration workflows between client UIs and core APIs.",
        rule: "Integration Blueprint",
        prompt: `Design integration between [System A] and [System B]

[CONSTRAINTS]
- Protocol/Transport: [REST / gRPC / GraphQL / Message Queue / File Batch]
- Sync Model: [Synchronous Request-Response / Asynchronous Event]
- Authentication: [JWT / API Key / OAuth2 / Mutual TLS]
- SLA/Reliability: [e.g., timeout limits, retry budget, idempotency required? Y/N]

[OUTPUT]
1. Contract: request/response JSON Schema or TypeScript interfaces
2. Sequence flow (numbered steps or Mermaid sequenceDiagram)
3. Failure matrix: error type → retry? → user message → log level
4. Idempotency & duplicate handling strategy
5. Security checklist (transport encryption, authZ scopes, rate limits, PII handling)`,
        benefit: "Prevents integration bugs before a single endpoint is coded."
      },
      {
        icon: "fa-solid fa-scale-balanced",
        title: "Architecture Decision Record (ADR)",
        summary: "Structured technology comparison with a definitive recommendation and migration risks.",
        whenToUse: "Choosing between libraries, databases, or architecture patterns under real constraints.",
        portfolioExample: "Comparing technical components or third-party libraries under enterprise workloads.",
        rule: "ADR Template",
        prompt: `Create an Architectural Decision Record (ADR)

[DECISION]
Compare [Option A] vs [Option B] for [Goal: e.g., Local storage caching vs State management]

[CONSTRAINTS]
- Team Competency: [current skills or tech stack guidelines in @skills.md]
- Timeline/Urgency: [release date / constraints]
- Scale/Performance: [expected traffic / throughput / data volume]
- Integration: Must seamlessly integrate with [existing stack]

[OUTPUT — ADR format]
## Status: Proposed
## Context (2-3 sentences explaining the problem)
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
        whenToUse: "Every new ticket — especially on legacy modules with stable production flows.",
        portfolioExample: "Analyzing business requirements and bug fixes without breaking existing workflows.",
        rule: "Spec Gate",
        prompt: `[ROLE] Senior developer reviewing a task BEFORE any code is written.

[WORKSPACE SETTINGS]
- Cross-reference with rules in @agent.md and guidelines in @skills.md to check for compliance.
- Target Module/Screen: [e.g., Checkout Page / Employee Profile]
- Regression Guard: [list critical existing flows that must NOT break]

[REQUEST]
[paste ticket description, user story, or feature request here]

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
        portfolioExample: "Planning layouts and cross-module adjustments by analyzing the workspace codebase first.",
        rule: "Plan Before Code",
        prompt: `Before implementing ANY code for: [Feature / bugfix description]

[MANDATORY FIRST STEP]
1. Read relevant files in this workspace (list which files you inspected).
2. Align with the coding style defined in @skills.md and development workflows in @agent.md.
3. Identify existing patterns (naming conventions, folder structures, styling approaches, state management).

[THEN OUTPUT]
## Execution Plan
- Files to CREATE (with the specific purpose of each)
- Files to MODIFY (with planned changes and line-level intent)
- Files explicitly NOT to touch (regression guardrails)
- Breakpoints / Layout scope (if UI work — specify mobile vs desktop boundaries)
- Post-implementation test checklist

[CONSTRAINTS]
- Minimal diff — do not refactor unrelated code.
- Match the exact coding style found in this repository.
- Do not introduce new dependencies unless explicitly justified.

Present this plan only. Wait for my "APPROVED" before writing any code.`,
        prompt: "Converts a one-line request into a safe, repo-aware implementation plan."
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "Regression-Safe Implementation",
        summary: "Guardrails for changing production code safely without breaking stable, existing modules.",
        whenToUse: "Any code change on mature codebases — the default prompt for implementation work.",
        portfolioExample: "Implementing clean features and bug fixes on established legacy systems.",
        rule: "Safe Change",
        prompt: `[ROLE] Principal Software Engineer — stability first.

[CONTEXT]
- Coding Standard: Strict compliance with @skills.md and execution behaviors in @agent.md.
- Specific Task: [Describe the precise change — one feature or bugfix only]
- Reference Pattern: [Paste a similar existing file or describe the expected repository convention]

[HARD RULES]
1. Do NOT modify files outside the stated scope.
2. Do NOT alter layout constraints outside the specified viewport (use isolated media queries if UI work).
3. Do NOT refactor, rename, or "clean up" unrelated code.
4. Ask questions if the specification is ambiguous — do not make assumptions.
5. Provide full implementations only — no placeholders, "// TODO", or truncated code blocks.

[EDGE CASES TO HANDLE]
[List specific edge cases OR state: "Propose 3 edge cases and wait for approval"]

[DELIVERABLES]
1. Code changes (minimal diff)
2. Brief summary: what changed and why
3. Manual test steps (3-5 bullets)
4. What was intentionally left unchanged`,
        benefit: "The core prompt for enterprise maintenance — prevents scope creep and regressions."
      },
      {
        icon: "fa-solid fa-list-check",
        title: "Structured TODO Milestones",
        summary: "Breaks large deliverables into small, testable phases — shipping and verifying incrementally.",
        whenToUse: "Multi-day features, refactors, or responsive redesigns split across review cycles.",
        portfolioExample: "Splitting massive feature rollouts into independent, testable frontend/backend phases.",
        rule: "Incremental Delivery",
        prompt: `Break this task into incremental, testable milestones:

[TASK DESCRIPTION] [e.g., Implement dark mode / Refactor authentication flow]
[TARGET CODEBASE] [Core files or modules involved]

[OUTPUT — numbered milestones only, no code blocks yet]
For each milestone, define:
- ID (P0, P1, P2...) following prioritized development pipelines in @agent.md
- Goal (one clear sentence)
- Files to be modified/created
- Acceptance criteria (how to manually verify in the environment/DevTools)
- Rollback strategy (how to safely revert this specific milestone if it fails)

[RULES]
- Each milestone must be independently testable and deployable.
- P0 = Highest risk, core logic, or architectural blockers first.
- Keep existing code completely stable outside the active milestone scope.
- Maximum of 5 milestones.

Wait for me to say "Start [Milestone ID]" before implementing any code.`,
        benefit: "Makes large AI-assisted work reviewable in small, PR-sized chunks."
      },
      {
        icon: "fa-solid fa-code",
        title: "Fullstack Code Explainer",
        summary: "Onboarding-friendly explanation of data flow across frontend, API, and database layers.",
        whenToUse: "Understanding legacy modules, handover documentation, or pre-refactor analysis.",
        portfolioExample: "Tracing end-to-end data pipelines from UI events to database storage layers.",
        rule: "Code Walkthrough",
        prompt: `Explain this code for a developer joining the project mid-sprint.

[TECH STACK] [e.g., Frontend Component → API Controller → Database Query]
[CODE / FILE PATHS] [Paste code snippet or list file locations]

[OUTPUT]
1. **Purpose** — what business problem this solves (plain English)
2. **Trigger** — what user action or system event starts this flow
3. **Step-by-step data flow** (numbered, include API endpoints & DB tables if any)
4. **Dependencies** — other modules/services/files this touches (cross-reference @skills.md tech stacks)
5. **Gotchas** — non-obvious logic, side effects, or legacy workarounds
6. **Modification Guide** — if I need to change this behavior, which file/function should I start with?`,
        benefit: "Reduces onboarding time on complex enterprise codepaths."
      },
      {
        icon: "fa-solid fa-vial-circle-check",
        title: "Manual Test & UAT Checklist",
        summary: "Structured test cases for manual QA — happy path, edge cases, and regression checks.",
        whenToUse: "Before UAT submission or production release on user-facing features.",
        portfolioExample: "Validating user flows and visual components against specifications before deployment.",
        rule: "QA Checklist",
        prompt: `Create a Manual Test Suite for: [Feature Name / Ticket ID]

[EXPECTED USER FLOW] [e.g., User adds item to cart → cart totals recalculate → checkout updates]
[TESTING ENVIRONMENT] [e.g., Dev URL / Staging environment details]
[REGRESSION FOCUS] [List existing features that must remain unaffected]

[OUTPUT — table format]
| ID | Title | Pre-conditions | Steps to Reproduce | Expected Result | Priority |

Ensure you include:
- At least 1 Happy Path case.
- At least 3 Edge/Negative cases (e.g., empty states, invalid inputs, network disruptions).
- At least 2 Regression checks (verifying related features still work perfectly).
- Multi-viewport verification (Mobile vs Desktop) if it is a UI feature.

Add a final "Sign-off Checklist" consisting of 5 decisive Yes/No items for production release readiness.`,
        benefit: "Matches real UAT workflows — structured, reproducible, and audit-friendly."
      }
    ]
  },
  th: {
    title: "กระบวนการพัฒนาซอฟต์แวร์ร่วมกับ AI (AI-Assisted Development)",
    subtitle: "แนวทางการเขียน Prompt เพื่อช่วยเคลียร์สเปกงาน ป้องกันบั๊กกระทบระบบเดิม และส่งมอบงานเป็นขั้นตอน",
    intro: "รูปแบบ Prompt ที่ผมประยุกต์ใช้ในโปรเจกต์ต่างๆ เพื่อช่วยไล่โค้ดและวางแผนงานอย่างเป็นระบบ โดยสามารถนำไปปรับใช้ใน Cursor IDE หรือ LLM อื่นๆ เพื่อตรวจสอบแผนงานก่อนเริ่มเขียนโค้ดจริง",
    portfolioSummary: "ประยุกต์ใช้เครื่องมือ AI ช่วยตรวจสอบสเปกงาน ป้องกันโค้ดกระทบส่วนอื่น และวางแผนส่งมอบงานทีละเฟส",
    portfolioHighlights: [
      "ตรวจสอบความถูกต้องของสเปกก่อนเริ่มงาน",
      "วิเคราะห์ผลกระทบเพื่อไม่ให้กระทบระบบเดิม (Regression Check)",
      "วางแผนและส่งมอบงานเป็นขั้นตอนที่จับต้องได้",
      "ช่วยคิดสถานการณ์สำหรับทดสอบระบบ (UAT)",
      "ช่วยออกแบบโครงสร้างข้อมูลและการเชื่อมต่อ API",
    ],
    howToUse: [
      "Copy เทมเพลต แล้วแทนค่า [วงเล็บ] ด้วย Ticket, Module หรือ Tech Stack ของคุณ",
      "รัน Pre-Flight หรือ Meta-Prompt ก่อน — ห้ามข้ามไปเขียนโค้ดทันทีบนระบบเดิม",
      "อนุมัติผลลัพธ์จาก AI (ขอบเขต, ไฟล์, ความเสี่ยง) ก่อนอนุญาตให้แก้โค้ด"
    ],
    backBtn: "กลับหน้าพอร์ตโฟลิโอ",
    saTabTitle: "งานวิเคราะห์และออกแบบระบบ (SA & Architect)",
    saTabSub: "การออกแบบโครงสร้างข้อมูล, API Integration และข้อตกลง ADR",
    devTabTitle: "งานพัฒนาและเขียนโปรแกรม (AI-Assisted Dev)",
    devTabSub: "การตรวจสอบสเปก, แก้โค้ดอย่างปลอดภัย, ส่งมอบทีละเฟส และเตรียมชุดทดสอบ UAT",
    whenToUseLabel: "ใช้เมื่อไหร่",
    portfolioExampleLabel: "ใช้ในโปรเจกต์เช่น",
    saCards: [
      {
        icon: "fa-solid fa-user-gear",
        title: "บทบาท Solution Architect",
        summary: "บังคับให้ AI ให้คำแนะนำที่ชัดเจน พร้อมวิเคราะห์ข้อดีข้อเสียอย่างตรงไปตรงมา — ไม่ตอบกว้างๆ แค่ \"ขึ้นอยู่กับ\"",
        whenToUse: "ช่วงออกแบบระบบ, เลือกเทคโนโลยี หรือทบทวนสถาปัตยกรรม (Architecture Review)",
        portfolioExample: "ประเมินแนวทางการเชื่อมต่อและเลือกสถาปัตยกรรมระหว่างระบบหน้าบ้านและบริการหลังบ้าน",
        rule: "Architect Role",
        prompt: `[บทบาท] คุณคือ Solution Architect สำหรับระบบเว็บองค์กร เน้นโซลูชันที่ใช้งานได้จริงมากกว่าความสมบูรณ์แบบใน theory

[บริบทของ WORKSPACE]
- อ่านกฎเกณฑ์จาก: @agent.md / @skills.md (ถ้ามีในโปรเจกต์) เพื่อให้สอดคล้องกับข้อจำกัดของทีมและแนวทางขององค์กร
- โดเมนระบบ: [เช่น ระบบจัดการคลังสินค้า / ระบบชำระเงิน / หน้า Dashboard รายงาน]
- เทคโนโลยี (Tech Stack): [เช่น React + Node.js / Angular + .NET Core]
- ข้อจำกัดของโครงการ: [เช่น ทักษะของทีม, ไทม์ไลน์, งบประมาณ, ระบบเดิมที่ห้ามเปลี่ยน]

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
        benefit: "เปลี่ยนการออกแบบที่คลุมเครือให้เป็นแนวทางตัดสินใจที่ทีมนำไปลงมือต่อได้ทันที"
      },
      {
        icon: "fa-solid fa-database",
        title: "การออกแบบ Schema & Database",
        summary: "ออกแบบ Data Model พร้อมกำหนดโครงสร้างตาราง, การทำดัชนี (Index) และวิเคราะห์ความคุ้มค่าของการทำ Normalization สำหรับระบบจริง",
        whenToUse: "เมื่อต้องการออกแบบตารางใหม่, ปรับแต่ง SQL Query สำหรับรายงาน หรือทบทวนโครงสร้างก่อนเขียนคำสั่ง Migration",
        portfolioExample: "ออกแบบตารางจัดเก็บข้อมูลและเขียนคำสั่ง SQL ซับซ้อนเพื่อเพิ่มประสิทธิภาพระบบ",
        rule: "Data Model Spec",
        prompt: `ออกแบบ Data Model สำหรับ Production: [โดเมน เช่น ระบบจัดการคำสั่งซื้อสินค้า / ระบบสมาชิก]

[ข้อมูลเข้า]
- Database Engine: [PostgreSQL / MySQL / SQL Server / Oracle]
- Scale คาดการณ์: [เช่น ปริมาณแถวข้อมูลต่อปี, จำนวนผู้ใช้งานพร้อมกันในช่วงพีค]
- รูปแบบการอ่านข้อมูล (Read Patterns): [เช่น แสดงผลบน Dashboard เรียลไทม์, ส่งออกไฟล์รายงานประจำเดือน]
- รูปแบบการเขียนข้อมูล (Write Patterns): [เช่น ดำเนินการ CRUD ทั่วไป, การนำเข้าข้อมูลแบบ Batch, บันทึก Audit Log]

[ผลลัพธ์ — ใช้หัวข้อนี้เท่านั้น]
1. รายการ Entity + Attribute (ชื่อ + SQL type + nullable + หมายเหตุ)
2. ความสัมพันธ์ & Cardinality (ข้อความหรือ Mermaid ER diagram)
3. Index (พร้อมเหตุผล — query ไหนใช้ index นี้)
4. Trade-off Normalization vs Performance (ตัดสินใจชัดเจน)
5. ความเสี่ยง Migration สำหรับข้อมูลเดิม`,
        benefit: "ได้โครงสร้างฐานข้อมูลที่มีเหตุผลรองรับในการทำ Index ชัดเจน ไม่ใช่แค่รายชื่อตาราง"
      },
      {
        icon: "fa-solid fa-network-wired",
        title: "สถาปัตยกรรมการเชื่อมต่อระบบ",
        summary: "กำหนด Contract ของ API/Event, วางแนวทางการจัดการข้อผิดพลาด (Error Handling) และระบบความปลอดภัยระหว่างบริการ",
        whenToUse: "เชื่อม Frontend-Backend, Third-party API หรือ Integration หลายระบบเข้าด้วยกัน",
        portfolioExample: "ออกแบบ Flow การรับส่งข้อมูลและการเชื่อมต่อ API ระหว่างระบบ Client และเซิร์ฟเวอร์หลัก",
        rule: "Integration Blueprint",
        prompt: `ออกแบบ Integration ระหว่าง [ระบบ A] กับ [ระบบ B]

[ข้อจำกัดทางเทคนิค]
- Protocol/Transport: [REST / gRPC / GraphQL / Message Queue / Batch File]
- รูปแบบการสื่อสาร: [Synchronous Request-Response / Asynchronous Event]
- การยืนยันตัวตน (Auth): [JWT / API Key / OAuth2 / Internal Network]
- SLA/Reliability: [เช่น การจำกัด Timeout, จำนวนรอบในการ Retry, ต้องจัดการแบบ Idempotent หรือไม่ ใช่/ไม่]

[ผลลัพธ์]
1. Contract: รูปแบบโครงสร้าง JSON Schema หรือ TypeScript interfaces
2. Sequence flow (ลำดับขั้นตอนหรือ Mermaid sequenceDiagram)
3. Failure matrix: ประเภท error → retry? → ข้อความผู้ใช้ → log level
4. กลยุทธ์ Idempotency และการจัดการข้อมูลซ้ำซ้อน
5. Security checklist (การเข้ารหัสข้อมูล, ขอบเขตสิทธิ์ AuthZ, Rate Limit, การจัดการข้อมูลอ่อนไหว PII)`,
        benefit: "ลดข้อผิดพลาดในการเชื่อมต่อระบบลงตั้งแต่ก่อนเริ่มเขียนโค้ดสำหรับ Endpoint แรก"
      },
      {
        icon: "fa-solid fa-scale-balanced",
        title: "บันทึกการตัดสินใจทางเทคนิค (ADR)",
        summary: "เปรียบเทียบเทคโนโลยีและสถาปัตยกรรมอย่างมีโครงสร้าง พร้อมคำแนะนำที่เป็นรูปธรรมและแผนประเมินความเสี่ยงในการย้ายระบบ",
        whenToUse: "ใช้ในการเลือกเฟรมเวิร์ก, ไลบรารี, ฐานข้อมูล หรือรูปแบบสถาปัตยกรรมภายใต้ข้อจำกัดจริงของโครงการ",
        portfolioExample: "เปรียบเทียบและบันทึกเหตุผลในการเลือกเครื่องมือและเทคนิคสำหรับตอบโจทย์ความต้องการของระบบ",
        rule: "ADR Template",
        prompt: `สร้าง Architectural Decision Record (ADR)

[การตัดสินใจ]
เปรียบเทียบ [ทางเลือก A] กับ [ทางเลือก B] เพื่อ [เป้าหมาย เช่น การจัดการ State ภายในแอปพลิเคชัน]

[ข้อจำกัด]
- ทักษะทีม: [อิงจากแนวทางเทคโนโลยีใน @skills.md หรือทักษะปัจจุบันของทีม]
- ไทม์ไลน์: [กำหนดปล่อยระบบ / ข้อจำกัดด้านเวลา]
- Scale/Performance: [จำนวน Request ต่อวัน, ปริมาณการรับส่งข้อมูล]
- การเชื่อมต่อ: ต้องทำงานร่วมกับ [Stack ระบบปัจจุบัน] ได้อย่างไม่มีปัญหา

[ผลลัพธ์ — รูปแบบ ADR]
## Status: Proposed
## Context (2-3 ประโยคอธิบายปัญหาและที่มา)
## ตารางเปรียบเทียบ (Performance | Complexity | Cost | Ops burden)
## Decision: [เลือกหนึ่งทาง — ชัดเจนและเด็ดขาด]
## Consequences (ผลกระทบด้านบวก + ด้านลบ)
## แผน Migration ถ้าเปลี่ยนจากวิธีเดิม
## Rollback strategy (แผนการย้อนกลับกรณีระบบทำงานผิดพลาด)`,
        benefit: "มีเอกสารบันทึกเหตุผลในทุกการตัดสินใจทางเทคนิค ซึ่งสำคัญมากสำหรับความเข้าใจของทีมและการตรวจสอบ (Audit)"
      }
    ],
    devCards: [
      {
        icon: "fa-solid fa-clipboard-check",
        title: "Pre-Flight — ตรวจสเปกก่อนลงมือ",
        summary: "กลั่นกรองและตรวจสอบความชัดเจนของความต้องการ ขอบเขตงาน และความเสี่ยงที่จะกระทบฟังก์ชันเดิมก่อนเริ่มเขียนโค้ด",
        whenToUse: "ใช้กับทุก Ticket งานใหม่ — โดยเฉพาะเมื่อต้องปรับปรุงโมดูลเดิมที่มีผู้ใช้งานจริงและระบบเสถียรอยู่แล้ว",
        portfolioExample: "วิเคราะห์ Requirement ของฟีเจอร์ใหม่และเคสบั๊ก UAT เพื่อวางแผนการแก้ไขไม่ให้กระทบฟังก์ชันเดิม",
        rule: "Spec Gate",
        prompt: `[บทบาท] Senior Developer ตรวจงานก่อนเขียนโค้ดทุกบรรทัด

[การตั้งค่าข้อจำกัด]
- ตรวจสอบกฎการพัฒนาและมาตรฐานโค้ดใน @agent.md และ @skills.md เพื่อไม่ให้หลุดสเปก
- โมดูล/หน้าจอเป้าหมาย: [เช่น ระบบตะกร้าสินค้า / หน้าข้อมูลผู้ใช้]
- จุดที่ห้ามพังเด็ดขาด (Regression Guard): [ระบุ Flow สำคัญที่ห้ามมีผลกระทบ]

[คำขอ]
[วางรายละเอียด Ticket, User Story หรือเงื่อนไขของฟีเจอร์ที่ได้รับมอบหมาย]

[ผลลัพธ์ — ห้ามเขียนโค้ดเด็ดขาด]
1. จุดคลุมเครือ (ไม่เกิน 5 จุด เรียงลำดับตามความรุนแรงของผลกระทบ)
2. คำถามที่ต้องตอบก่อนเริ่มงาน (ไม่เกิน 3 ข้อ — เฉพาะข้อที่เป็น Blocker)
3. สมมติฐานในการทำงาน (ระบุเป็นข้อๆ — ต้องให้ฉันตรวจสอบและอนุมัติก่อน)
4. สิ่งที่อยู่ในขอบเขต (IN scope) / สิ่งที่อยู่นอกขอบเขต (OUT of scope)
5. พื้นที่เสี่ยงที่จะเกิด Regression (ไฟล์, API, หรือ Shared Components ที่เกี่ยวข้อง)
6. ลำดับขั้นตอนการ Implement ที่แนะนำ (ไม่เกิน 3 ขั้นตอน)

จบด้วยข้อความ: "ตอบ APPROVED เพื่อดำเนินการ หรือตอบคำถามด้านบน"`,
        benefit: "ช่วยป้องกันปัญหาโค้ดพังและลดเวลาทำงานซ้ำซ้อนจากการที่ AI คาดเดาความต้องการผิดพลาดบนระบบ Production"
      },
      {
        icon: "fa-solid fa-brain",
        title: "IDE Meta-Prompt (แผนจากโค้ดจริง)",
        summary: "สั่งการให้ AI ทำความเข้าใจซอร์สโค้ดในโปรเจกต์ปัจจุบันก่อน เพื่อวางแผนขั้นตอนการทำงานให้สอดคล้องกับโครงสร้างเดิม",
        whenToUse: "ฟีเจอร์ระดับกลางถึงใหญ่ที่ต้องอ้างอิงสไตล์การตั้งชื่อ โครงสร้างโฟลเดอร์ หรือการจัดการสถานะร่วมกับโค้ดส่วนอื่น",
        portfolioExample: "สั่งวิเคราะห์ Source Code ทั่วทั้ง Workspace เพื่อวางโครงสร้างการเพิ่มฟีเจอร์ใหม่อย่างกลมกลืน",
        rule: "Plan Before Code",
        prompt: `ก่อนเขียนโค้ดใดๆ สำหรับงาน: [รายละเอียดฟีเจอร์ / รายละเอียดการแก้บั๊ก]

[ขั้นตอนบังคับก่อนเริ่มงาน]
1. อ่านไฟล์ที่เกี่ยวข้องใน Workspace นี้ (ระบุรายชื่อไฟล์ที่คุณเข้าไปตรวจสอบ)
2. อ้างอิงสไตล์ไกด์จาก @skills.md และขั้นตอนการจัดการ Agent จาก @agent.md เพื่อให้ทำงานได้ตรงตามมาตรฐานของทีม
3. ระบุ Pattern ปัจจุบันของระบบ (โครงสร้างโฟลเดอร์, รูปแบบการตั้งชื่อ, แนวทางการเขียน CSS, การจัดการ State)

[จากนั้นสรุปโครงสร้าง]
## Execution Plan
- ไฟล์ที่จะสร้างใหม่ (CREATE)พร้อมระบุวัตถุประสงค์ของแต่ละไฟล์
- ไฟล์ที่จะแก้ไข (MODIFY) เปลี่ยนแปลงส่วนไหนและต้องการผลลัพธ์อะไรในระดับบรรทัด
- ไฟล์ที่ห้ามแตะต้องเด็ดขาด (Regression Guardrails)
- ขอบเขตหน้าจอแสดงผล (กรณีงาน UI — ระบุ Breakpoint ของ Mobile และ Desktop ให้ชัดเจน)
- Checklist สำหรับทดสอบระบบหลังแก้ไขเสร็จสิ้น

[ข้อจำกัด]
- Diff โค้ดต้องเล็กที่สุด — ห้ามปรับแต่งหรือ Refactor โค้ดส่วนอื่นที่ไม่เกี่ยวข้อง
- เขียนสไตล์โค้ดให้ตรงกับรูปแบบดั้งเดิมของ Repository นี้
- ห้ามเพิ่ม Dependency ใหม่เข้ามาในโปรเจกต์ยกเว้นระบุเหตุผลความจำเป็นที่ชัดเจน

ส่งเฉพาะแผนงานนี้เท่านั้น รอข้อความ "APPROVED" จากฉันก่อนเริ่มเขียนโค้ดจริง`,
        benefit: "เปลี่ยนคำสั่งสั้นๆ ให้กลายเป็นแผนการแก้ไขโค้ดที่ปลอดภัย แม่นยำ และเข้ากับสไตล์เดิมของโปรเจกต์"
      },
      {
        icon: "fa-solid fa-shield-halved",
        title: "แก้โค้ดอย่างปลอดภัย (Regression-Safe)",
        summary: "กำหนดข้อจำกัดการปรับปรุงโค้ดอย่างรัดกุม เพื่อป้องกันปัญหาผลกระทบย้อนกลับ (Regression) ในโมดูลที่ทำงานเสถียรอยู่แล้ว",
        whenToUse: "ทุกครั้งที่แก้ไขโค้ดในโครงการขนาดใหญ่ที่มีผู้ใช้งานจริง — ใช้เป็น Prompt หลักในการสั่งเขียนโค้ด",
        portfolioExample: "แก้ไขฟังก์ชันและเขียนโค้ดเพิ่มตัวเลือกการทำงานภายในระบบโดยไม่กระทบความเสถียรภาพเดิม",
        rule: "Safe Change",
        prompt: `[บทบาท] Principal Software Engineer — เสถียรภาพมาก่อน

[บริบทการทำงาน]
- มาตรฐานทางเทคนิค: ทำตามข้อตกลงใน @skills.md และพฤติกรรมความปลอดภัยตาม @agent.md อย่างเคร่งครัด
- งานที่ต้องทำ: [ระบุรายละเอียดการเปลี่ยนแปลงเฉพาะจุด — พัฒนาหนึ่งฟีเจอร์ หรือแก้ไขหนึ่งบั๊กเท่านั้น]
- โค้ดอ้างอิง: [วางไฟล์ตัวอย่าง หรืออธิบายรูปแบบสถาปัตยกรรม/Convention ที่ระบบใช้อยู่]

[กฎเหล็ก]
1. ห้ามแก้ไขไฟล์ใดๆ ที่อยู่นอกเหนือจาก Scope ขอบเขตงานที่ตกลงไว้
2. ห้ามเปลี่ยน Layout หน้าจออื่นเมื่องานที่ได้รับมอบหมายระบุ Viewport เฉพาะ (เช่น งานโมบายล์ให้ใช้ isolated @media เท่านั้น)
3. ห้ามทำ Refactor, เปลี่ยนชื่อตัวแปร หรือ "แอบเคลียร์โค้ดเก่า" ในส่วนที่ไม่เกี่ยวข้องกับชิ้นงาน
4. หากพบความคลุมเครือในสเปกงาน ให้หยุดถามทันที — ห้ามใช้สมมติฐานหรือคาดเดาเอาเอง
5. ต้องส่งมอบโค้ดเวอร์ชันใช้งานได้เต็มรูปแบบ — ห้ามเขียนตัวเปิดช่องว่าง, ใส่คอมเมนต์ "// TODO" หรือตัดทอนโค้ดบางส่วนออก

[Edge Cases ที่ต้องดักจับ]
[ระบุเคสพิเศษที่ต้องการให้ดักจับ หรือระบุ: "เสนอ 3 edge cases ที่อาจเกิดขึ้น แล้วรอฉันอนุมัติ"]

[การส่งมอบงาน]
1. โค้ดที่ผ่านการเปลี่ยนแปลง (Minimal Diff ที่สุด)
2. สรุปสั้นๆ: จุดที่เปลี่ยนคืออะไรและทำไปเพื่ออะไร
3. ขั้นตอนการทดสอบด้วยตนเอง (Manual Test Steps) จำนวน 3-5 ข้อ
4. รายการสิ่งที่ตั้งใจไม่แก้ไข (เพื่อยืนยันว่าไม่ได้กระทบส่วนอื่น)`,
        benefit: "เป็นแนวทางหลักสำหรับงานบำรุงรักษาระบบ (Maintenance) ที่ช่วยจำกัดขอบเขตงานไม่ให้บานปลายและป้องกันระบบพัง"
      },
      {
        icon: "fa-solid fa-list-check",
        title: "แผนงาน TODO ทีละเฟส",
        summary: "ย่อยชิ้นงานขนาดใหญ่ให้กลายเป็นเป้าหมายย่อย (Milestones) ที่แยกตรวจสอบและทดสอบการทำงานได้อย่างเป็นอิสระ",
        whenToUse: "ฟีเจอร์ที่ต้องใช้เวลาทำหลายวัน, งานปรับรื้อโค้ด (Refactor) หรือการรื้อดีไซน์หน้าจอที่ต้องผ่านการรีวิวหลายรอบ",
        portfolioExample: "แตกฟีเจอร์ขนาดใหญ่ให้กลายเป็นชิ้นงานย่อยระดับ Pull Request เพื่อควบคุมความปลอดภัยของระบบ",
        rule: "Incremental Delivery",
        prompt: `แบ่งงานชิ้นนี้ให้กลายเป็นกลุ่มเป้าหมายย่อย (Milestones) ที่สามารถแยกทดสอบได้อย่างเป็นอิสระ:

[รายละเอียดงานทั้งหมด] [เช่น พัฒนาระบบรองรับภาษาข้ามแพลตฟอร์ม / ปรับโครงสร้าง Auth]
[ขอบเขตโมดูลหลัก] [ระบุชื่อโฟลเดอร์ คอร์ไฟล์ หรือชุด API ที่เกี่ยวข้อง]

[ผลลัพธ์ — แสดงเฉพาะแผนลำดับเลข Milestone และห้ามเพิ่งเขียนโค้ด]
ในแต่ละ Milestone ให้ระบุรายละเอียดดังนี้:
- ID ของงาน (P0, P1, P2...) โดยอ้างอิงลำดับความสำคัญตามไปป์ไลน์ใน @agent.md
- เป้าหมายของเฟสนี้ (เขียนสรุปใน 1 ประโยคชัดๆ)
- รายชื่อไฟล์ที่มีการแก้ไขหรือสร้างใหม่
- เกณฑ์การยอมรับงาน (Acceptance Criteria — วิธีตรวจสอบผลลัพธ์ผ่าน Browser หรือ DevTools)
- แผนการถอยกลับ (Rollback Strategy — วิธีสั่ง Revert โค้ดอย่างปลอดภัยในเฟสนี้หากเกิดข้อผิดพลาด)

[กฎควบคุม]
- ทุกๆ Milestone ที่ถูกซอยออกมา ต้องสามารถรันและแยกทดสอบระบบตัวมันเองได้โดยไม่พึ่งเฟสถัดไป
- กำหนดให้ P0 คือส่วนงานที่มีความเสี่ยงสูงสุด คอร์โลจิกหลัก หรือส่วนที่เป็นสถาปัตยกรรมที่เป็นตัวบล็อกงานอื่น
- รักษาความเสถียรของ Source Code เดิมทั้งหมดภายนอกเฟสที่กำลังเปิดทำ
- จำกัดจำนวนสูงสุดไม่เกิน 5 Milestones

รอฉันส่งข้อความบอกว่า "Start [ตามด้วยไอดี Milestone]" ก่อน จึงจะสามารถเริ่มต้นเขียนโค้ดในเฟสนั้นๆ ได้`,
        benefit: "ช่วยแบ่งงานขนาดใหญ่ให้ส่งมอบและรีวิวร่วมกับ AI ได้ง่ายขึ้นในลักษณะเดียวกับการส่ง Pull Request ขนาดเล็ก"
      },
      {
        icon: "fa-solid fa-code",
        title: "อธิบายโค้ด Fullstack",
        summary: "สรุปและแจกแจงเส้นทางการเดินทางของข้อมูล (Data Flow) ตั้งแต่หน้าบ้าน, API จนถึงระดับฐานข้อมูลเพื่อให้ง่ายต่อการทำความเข้าใจ",
        whenToUse: "ใช้เมื่อต้องการศึกษาโมดูลเก่าของระบบ (Legacy Module), เตรียมเอกสารส่งมอบงาน หรือวิเคราะห์โครงสร้างก่อนเริ่มเขียนโค้ดใหม่",
        portfolioExample: "วิเคราะห์หาเส้นทาง Data Flow ตั้งแต่การคลิกปุ่มบนหน้าจอวิ่งผ่าน Controller ไปจนถึงคำสั่งบันทึกลงฐานข้อมูล",
        rule: "Code Walkthrough",
        prompt: `ช่วยอธิบายการทำงานของซอร์สโค้ดชุดนี้ เพื่อให้ต้อนรับ Developer ที่เพิ่งย้ายเข้ามาใหม่ในทีมให้เข้าใจได้ทันที

[TECH STACK] [เช่น หน้าจอสั่งซื้อ UI → API Controller หลังบ้าน → คำสั่ง Query บน DB]
[SOURCE CODE / FILE PATHS] [วางส่วนของโค้ดที่ต้องการให้วิเคราะห์ หรือพิมพ์ที่อยู่พาธไฟล์]

[ผลลัพธ์การวิเคราะห์]
1. **วัตถุประสงค์เชิงธุรกิจ (Purpose)** — โค้ดชุดนี้สร้างขึ้นมาเพื่อแก้โจทย์ปัญหาธุรกิจข้อไหน (อธิบายด้วยภาษามนุษย์ทั่วไป)
2. **จุดเริ่มต้นระบบ (Trigger)** — การกระทำใดของผู้ใช้หรือ Event ระบบใดที่เป็นตัวเริ่มต้นเปิดใช้งาน Flow นี้
3. **เส้นทางข้อมูลทีละสเต็ป (Data Flow)** — อธิบายกระบวนการรับส่งข้อมูลเป็นข้อๆ (ลำดับเลขชัดเจน รวมชื่อ Endpoint และตาราง DB ที่เกี่ยว)
4. **ส่วนเชื่อมโยงภายนอก (Dependencies)** — มีโมดูล ไฟล์ หรือบริการอื่นใดที่โค้ดชุดนี้วิ่งไปเรียกใช้งาน (เช็กเงื่อนไขควบคู่กับ @skills.md)
5. **จุดควรระวัง (Gotchas)** — โลจิกที่ซ่อนอยู่, ผลกระทบข้างเคียง (Side Effects) หรือโค้ด Workaround ที่ต้องดักทางไว้
6. **คู่มือการแก้ไข (Modification Guide)** — หากในอนาคตฉันต้องการปรับเปลี่ยนพฤติกรรมการทำงานของฟังก์ชันนี้ ควรเริ่มลงมือที่ไฟล์หรือฟังก์ชันไหนก่อน`,
        benefit: "ช่วยลดเวลาในการทำความเข้าใจซอร์สโค้ด (Onboarding Time) บนระบบงานองค์กรที่มีความซับซ้อนสูง"
      },
      {
        icon: "fa-solid fa-vial-circle-check",
        title: "ชุดทดสอบมือ & UAT",
        summary: "จัดทำกรณีทดสอบ (Test Cases) สำหรับผู้ทดสอบ เพื่อครอบคลุมทั้งการทำงานปกติ (Happy Path), กรณีขอบเขตปัญหา (Edge Cases) และการทดสอบระบบเดิม",
        whenToUse: "ทำก่อนส่งมอบงานให้ผู้ใช้ตรวจรับระบบ (UAT) หรือก่อนเปิดใช้งานฟีเจอร์ส่วนหน้าจอระบบบน Production",
        portfolioExample: "ออกแบบตารางแผนการตรวจสอบงานและเตรียมชุดตรวจรับฟังก์ชันระบบเพื่อควบคุมมาตรฐานก่อนปล่อยงาน",
        rule: "QA Checklist",
        prompt: `ช่วยออกแบบชุดทดสอบระบบด้วยตนเอง (Manual Test Suite) สำหรับงาน: [ระบุชื่อฟีเจอร์ หรือไอดีของ Ticket งาน]

[USER FLOW คาดหวัง] [เช่น ลูกค้าเลือกสินค้า → ยอดรวมคำนวณใหม่ → กดชำระเงินสำเร็จหน้าแอปฯ]
[สภาพแวดล้อมที่ใช้ทดสอบ] [เช่น ลิงก์สำหรับเทสสเตจจิ้ง สิทธิ์ยูสเซอร์ หรือข้อมูลชุดทดสอบ]
[จุดเน้นย้ำความปลอดภัย] [ระบุฟังก์ชันรอบข้างที่ต้องการให้ทดสอบควบคู่เพื่อให้มั่นใจว่าไม่พัง]

[ผลลัพธ์ — แสดงออกมาในรูปแบบตารางสี่เหลี่ยม Markdown เท่านั้น]
| ID | Title | Pre-conditions | Steps to Reproduce | Expected Result | Priority |

กำหนดให้ตารางต้องครอบคลุมเงื่อนไขดังต่อไปนี้:
- มีกรณีทำงานปกติ (Happy Path) อย่างน้อย 1 เคส
- มีกรณีเงื่อนไขพิเศษหรือข้อผิดพลาด (Edge / Negative Cases) อย่างน้อย 3 เคส (เช่น กรอกค่าว่าง, สิทธิ์ไม่ถึง, สัญญาณเน็ตตัด)
- มีกรณีตรวจสอบผลกระทบย้อนกลับ (Regression Checks) อย่างน้อย 2 เคส เพื่อยันว่าระบบข้างเคียงยังทำงานได้ปกติ
- หากเป็นงาน UI ให้ซอยแถวแยกระหว่างพฤติกรรมบน Mobile และ Desktop เสมอ

ลงท้ายด้วยหัวข้อ "Sign-off Checklist" เป็นรายการเช็กบ็อกซ์ ใช่/ไม่ใช่ จำนวน 5 ข้อเพื่อประเมินความพร้อมสุดท้ายก่อนอัปโหลดขึ้น Production`,
        benefit: "เข้ากับกระบวนการตรวจรับงานจริงในอุตสาหกรรม มีโครงสร้างชัดเจน ทำซ้ำได้ และเอื้อต่อการตรวจสอบความถูกต้อง"
      }
    ]
  }
};