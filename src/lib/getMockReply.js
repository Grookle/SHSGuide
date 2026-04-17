const defaultReply =
  "I'm a preview assistant. When your backend is connected, I'll answer using DepEd-aligned information from SHSGuide. Try prompts about tracks, elective clusters, careers, doorway options, or work immersion—or open Curriculum and FAQ."

const snippets = [
  {
    test: (t) => /programm|software|developer|coder|be a programmer|want to code/i.test(t),
    reply:
      'To head toward **programming**, look for **ICT / programming-style electives** in either **Academic** or **TechPro** (depending on your school’s menu). You can often **mix** interests via the **doorway option** (e.g. business + programming)—confirm with guidance. Add **longer work immersion** if your school links ICT to industry partners.',
  },
  {
    test: (t) => /doorway|mix|other track|business and programm|combine|interdisciplinary/i.test(t),
    reply:
      'The **doorway option** lets many students take about **1–2 electives from the other track**, so mixes like **business + programming** are intentionally supported where policy allows. Final rules come from **DepEd** and **your school**.',
  },
  {
    test: (t) => /immersion|320|640|hours|workplace|industry placement/i.test(t),
    reply:
      '**Work immersion** is a major part of the updated SHS—often discussed around **320–640 hours** (expanded from earlier ranges). It connects classroom learning to **real workplaces**, builds **job readiness**, and should match your **elective cluster** and career direction.',
  },
  {
    test: (t) => /how many subject|overload|7|23|31|too many class/i.test(t),
    reply:
      'The curriculum is **streamlined**: overall fewer subjects than older heavy loads, often summarized as roughly **7–23** subjects depending on **track, electives, and school**. Everyone shares **five core subjects** (Communication, Math, Science, Life & Career Skills, Philippine Studies) plus **elective clusters**.',
  },
  {
    test: (t) => /elective cluster|no more strand|strand|stem|humss|abm|gas/i.test(t),
    reply:
      'Instead of one **fixed strand** for all choices, you choose **Academic** or **TechPro**, then build pathways through **elective clusters** (e.g. STEM-oriented, business, humanities, arts on Academic; programming, automotive, hospitality-style on TechPro—examples vary by school). Use **Pathway advisor** and **Curriculum** to rehearse combinations.',
  },
  {
    test: (t) => /21|twenty.first|critical thinking|digital literacy|adaptability|problem.solv/i.test(t),
    reply:
      'The updated SHS highlights **21st century skills**: critical thinking, **communication**, **digital literacy**, **problem-solving**, and **adaptability**—alongside subject mastery. **TechPro** adds job-ready technical competence; **Academic** adds depth for college pathways.',
  },
  {
    test: (t) => /what job|career|be a |work as|job market|industry/i.test(t),
    reply:
      'Electives and immersion are meant to align with **industry** and **jobs**. Ask “If I take this **elective cluster**, what roles could follow?”—then confirm with your **guidance** office and **Curriculum** career notes. **Pathway advisor** suggests track + elective directions from your goals.',
  },
  {
    test: (t) => /core subject|life and career|philippine studies|five core/i.test(t),
    reply:
      'The **five shared cores** are **Communication**, **Mathematics**, **Science**, **Life & Career Skills**, and **Philippine Studies**. **Elective clusters** on your **track** shape the rest of your pathway—different from loading many unrelated subjects without a plan.',
  },
  {
    test: (t) => /track|pathway/i.test(t),
    reply:
      'SHS centers on **two tracks**: **Academic** (college-oriented, built through **elective clusters**) and **Technical-Professional (TechPro)** (industry skills, certifications, strong **immersion**). Compare goals, then use **electives** and the **doorway** to personalize.',
  },
  {
    test: (t) => /choose|should i|what track|which track/i.test(t),
    reply:
      'Match **track** to **post-SHS goals** (university, work, entrepreneurship, middle-level skills). Then design **elective clusters** and check the **doorway** for cross-track electives. Use **Pathway advisor** on this site and validate with **guidance**.',
  },
  {
    test: (t) => /subject|elective/i.test(t),
    reply:
      'You take **five core subjects** plus **track electives** organized into **clusters**—not the old single-strand lock-in for everything. **TechPro** electives might include programming, automotive, hospitality examples; **Academic** clusters might include STEM-oriented, business, humanities, arts—**school menus differ**.',
  },
  {
    test: (t) => /techpro|tech.pro|tvl|technical.professional|technical|vocational/i.test(t),
    reply:
      '**TechPro** is the **Technical-Professional Track**: practical, **industry-relevant** training, employment and entrepreneurship pathways, and **middle-level qualifications**. It is positioned as **prestigious and future-ready** beside **Academic**—many students still pursue further study.',
  },
  {
    test: (t) => /academic|university|college/i.test(t),
    reply:
      'The **Academic** track keeps **college readiness** central. You share the **five cores**, then choose **Academic elective clusters** that fit your intended degree or field. The **doorway** can add **1–2 TechPro electives** if allowed.',
  },
  {
    test: (t) => /faq|help|hello|hi\b/i.test(t),
    reply:
      'Browse **FAQ** for curriculum changes, **doorway**, **immersion hours**, and **electives**. **Curriculum** shows cluster examples and reform context. Ask me career or pathway questions in plain language.',
  },
]

export function getMockReply(userText) {
  const t = userText.trim()
  if (!t) return defaultReply
  const hit = snippets.find((s) => s.test(t))
  return hit ? hit.reply : defaultReply
}
