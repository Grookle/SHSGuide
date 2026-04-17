import { techProDirectiveParagraph } from './techProDirective'

/** SHSGuide alignment: why the reform matters for students */
export const shsReformPurpose = {
  headline: 'What SHS is for—and what SHSGuide helps fix',
  goals: [
    'Higher education',
    'Employment',
    'Entrepreneurship',
    'Technical skills development',
  ],
  painPoints: [
    'Too many subjects (overload)',
    'Confusing tracks and pathways',
    'Weak career alignment',
    'Students unsure which path to take',
  ],
  shsGuideRole:
    'SHSGuide simplifies how the new SHS works, explains core vs electives, and supports track and elective choices with career context—like a smart advisor you can use before talking to your school.',
}

export const structuralChanges = [
  {
    title: 'Four tracks → two pathways',
    body: 'SHS is organized around the Academic Track and the Technical-Professional (TechPro) Track, aligned with global practice and clearer decisions.',
  },
  {
    title: 'Strands → elective clusters',
    body: 'Fixed strands (e.g. STEM, ABM, HUMSS as a single lock-in) give way to flexible elective clusters. You still choose Academic or TechPro, then build your pathway through electives that match interests and careers.',
  },
  {
    title: 'Doorway option',
    body: 'Students may take 1–2 electives from the other track where policy allows—so combinations like business + programming are possible. Confirm rules with your school.',
  },
]

export const fiveCoreSubjects = [
  'Communication',
  'Mathematics',
  'Science',
  'Life & Career Skills',
  'Philippine Studies',
]

export const curriculumSimplification =
  'The curriculum is streamlined: fewer subjects overall than older heavy loads (often discussed in ranges such as roughly 7–23 subjects depending on your path and school). Exact counts follow DepEd and your school’s timetable.'

export const workImmersionNote =
  'Work immersion is stronger and longer—expanded toward roughly 320–640 hours (from earlier lower ranges). It ties learning to industry, builds job readiness, and matters for both TechPro and Academic paths that include workplace experience.'

export const careerAlignmentNote =
  'Electives and immersion are aligned with industry needs and the job market so graduates are more work-ready and can see how choices connect to real roles.'

export const skills21stCentury = [
  'Critical thinking',
  'Communication',
  'Digital literacy',
  'Problem-solving',
  'Adaptability',
]

export const personalizedPathwaysNote =
  'You get flexible choices, custom career-oriented paths, and room for interdisciplinary learning—SHSGuide helps you rehearse “if I choose this → I can head toward ___” before you finalize with your adviser.'

export const curriculumCategories = [
  {
    id: 'academic',
    title: 'Academic Track',
    badge: 'Higher education & flexible electives',
    description:
      'For learners prioritizing college readiness. Everyone shares the five core subjects; you then shape your SHS experience through Academic elective clusters (not one fixed strand for all subjects). Use the doorway to add 1–2 TechPro-style electives if your school allows.',
    electiveClusters: [
      {
        id: 'stem',
        name: 'STEM-oriented cluster',
        examples: [
          'Advanced math and lab sciences',
          'Research and inquiry projects',
          'Engineering or ICT-science crossover electives (school-specific)',
        ],
        careers: 'Engineering, health sciences, data, and other STEM college programs.',
      },
      {
        id: 'business',
        name: 'Business & entrepreneurship cluster',
        examples: [
          'Economics, business math, and management electives',
          'Entrepreneurship and financial literacy projects',
        ],
        careers: 'Business, accountancy, marketing, hospitality management, and entrepreneurship.',
      },
      {
        id: 'humanities',
        name: 'Humanities & society cluster',
        examples: [
          'Literature, social sciences, and civics-rich electives',
          'Communication, research, and debate-heavy work',
        ],
        careers: 'Law, education, public service, psychology, media, and social-impact fields.',
      },
      {
        id: 'arts',
        name: 'Arts & design-oriented cluster',
        examples: [
          'Creative, media, and design electives as offered',
          'Portfolio and performance-based work',
        ],
        careers: 'Creative industries, design, communication arts, and related college degrees.',
      },
    ],
  },
  {
    id: 'techpro',
    title: 'Technical-Professional Track (TechPro)',
    badge: 'Industry-ready · professional pathway',
    description: techProDirectiveParagraph,
    electiveClusters: [
      {
        id: 'programming',
        name: 'Programming & ICT cluster',
        examples: [
          'Programming fundamentals and software projects',
          'Networking or digital media (school-dependent)',
        ],
        careers: 'IT support, junior developer paths, further CS/IT study, digital careers.',
      },
      {
        id: 'automotive',
        name: 'Automotive & industrial skills cluster',
        examples: [
          'Diagnostics, safety, and workshop competencies',
          'Industry standards and hands-on assessment',
        ],
        careers: 'Technician roles, technical sales, engineering technology programs.',
      },
      {
        id: 'hospitality',
        name: 'Hospitality & wellness cluster',
        examples: [
          'Food service, tourism, or wellness competencies',
          'Customer service and operations projects',
        ],
        careers: 'Hospitality, food business, wellness, and entrepreneurship.',
      },
    ],
  },
]
