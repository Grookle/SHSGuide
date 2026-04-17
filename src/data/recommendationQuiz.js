export const quizSteps = [
  {
    id: 'goals',
    title: 'After SHS, what are you mainly preparing for?',
    subtitle: 'Pick all that apply.',
    multi: true,
    options: [
      {
        id: 'uni',
        label: 'University / college first',
        scores: { academic: 4, techpro: 0 },
        electiveTags: [
          'Lean toward Academic elective clusters that match your target degree (sciences, business, humanities, arts).',
        ],
      },
      {
        id: 'work',
        label: 'Going into work with strong technical or job-ready skills',
        scores: { academic: 0, techpro: 4 },
        electiveTags: [
          'Prioritize TechPro clusters tied to certifications; align work immersion with that industry.',
        ],
      },
      {
        id: 'ent',
        label: 'Entrepreneurship / running my own business',
        scores: { academic: 2, techpro: 2 },
        electiveTags: [
          'Combine business-oriented electives with technical or digital skills.',
          'Ask about the doorway option to mix Academic + TechPro electives (e.g. business + programming).',
        ],
      },
      {
        id: 'mid',
        label: 'Middle-level skills / national qualifications',
        scores: { academic: 0, techpro: 3 },
        electiveTags: [
          'TechPro pathways often align with middle-level qualifications; confirm offerings with your school or TESDA partners.',
        ],
      },
    ],
  },
  {
    id: 'electiveInterests',
    title: 'Which elective directions interest you?',
    subtitle: 'Pick all that apply.',
    multi: true,
    options: [
      {
        id: 'code',
        label: 'Programming, software, IT projects',
        scores: { academic: 1, techpro: 2 },
        electiveTags: [
          'ICT / programming-style electives—Academic or TechPro depending on your school; the doorway can help you mix interests.',
        ],
      },
      {
        id: 'biz',
        label: 'Business, economics, leading projects',
        scores: { academic: 2, techpro: 1 },
        electiveTags: ['Business & entrepreneurship cluster electives.'],
      },
      {
        id: 'sci',
        label: 'Science labs, engineering-style thinking',
        scores: { academic: 3, techpro: 0 },
        electiveTags: ['STEM-oriented Academic elective clusters.'],
      },
      {
        id: 'people',
        label: 'People, society, writing, advocacy',
        scores: { academic: 3, techpro: 0 },
        electiveTags: ['Humanities & society cluster electives.'],
      },
      {
        id: 'hands',
        label: 'Automotive, workshops, kitchens / trades',
        scores: { academic: 0, techpro: 3 },
        electiveTags: [
          'TechPro industrial, automotive, or hospitality-style clusters—as your school lists them.',
        ],
      },
      {
        id: 'arts',
        label: 'Arts, design, creative production',
        scores: { academic: 2, techpro: 0 },
        electiveTags: ['Arts & design-oriented Academic electives.'],
      },
    ],
  },
  {
    id: 'learning',
    title: 'How do you prefer to learn day to day?',
    subtitle: 'Choose one.',
    multi: false,
    options: [
      {
        id: 'read',
        label: 'Reading, discussion, and research-heavy classes',
        scores: { academic: 3, techpro: 0 },
        electiveTags: [],
      },
      {
        id: 'lab',
        label: 'Labs, equipment, workshops, and real workplace tasks',
        scores: { academic: 0, techpro: 3 },
        electiveTags: [
          'Plan for substantial work immersion (often in the 320–640 hour range) in sectors that match your electives.',
        ],
      },
      {
        id: 'mix',
        label: 'A balance of both',
        scores: { academic: 1, techpro: 1 },
        electiveTags: [
          'Blend elective clusters across styles; ask if the doorway option fits your mix.',
        ],
      },
    ],
  },
]

export const pathwayResults = {
  academic: {
    key: 'academic',
    name: 'Academic Track (elective clusters)',
    hint: 'Strong fit if higher education is central. You share the five core subjects, then shape SHS through Academic elective clusters—not one fixed old strand. Use the doorway to add 1–2 TechPro electives if allowed.',
  },
  techpro: {
    key: 'techpro',
    name: 'Technical-Professional (TechPro) Track',
    hint: 'Strong fit for employment, entrepreneurship with a technical edge, or middle-level qualifications. Pick TechPro elective clusters aligned to industry; longer work immersion builds job readiness and 21st century skills.',
  },
  balanced: {
    key: 'balanced',
    name: 'Balanced—compare tracks with your adviser',
    hint: 'Your answers fit both pathways. Review Academic vs TechPro trade-offs, then design elective clusters and consider the doorway option (e.g. business + programming) within school policy.',
  },
}
