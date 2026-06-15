export const site = {
  name: 'Vincent Wren',
  tagline: 'GIS & Spatial Analysis · Urban Planning · Computer Science',
  // Short status line shown above the name in the hero.
  status: 'Honors CS @ University of Houston · Houston, TX',
  // Kept intentionally general, describing the work without overselling it.
  intro:
    'I’m a computer science student at the University of Houston working at the ' +
    'intersection of software, geographic information systems, and urban planning. ' +
    'I use spatial data to study how cities work, and how they might work better.',
  location: 'Houston, TX',
  email: 'wrenvin@gmail.com',
  resume: '/resume.pdf',
  links: {
    github: 'https://github.com/WrenVin',
    linkedin: 'https://www.linkedin.com/in/vincent-wren',
  },
};

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: 'GIS & spatial analysis',
    items: [
      'ArcGIS Pro',
      'ArcGIS CityEngine',
      'QGIS',
      'ArcGIS Online',
      'Field Maps',
      'GeoAI',
      'Kepler.gl',
    ],
  },
  {
    label: 'Data & visualization',
    items: ['Network analysis', 'Georeferencing', 'OSM', 'GTFS', '3D visualization'],
  },
  {
    label: 'Programming',
    items: ['Python', 'JavaScript', 'Java', 'C++', 'Git / GitHub'],
  },
];

export type Experience = {
  org: string;
  role: string;
  dates: string;
  location?: string;
  notes: string[];
};

export const experience: Experience[] = [
  {
    org: 'University of Houston',
    role: 'Pharis Fellow',
    dates: 'May 2026 – Present',
    location: 'Houston, TX',
    notes: [
      // TODO: replace with a 1–2 line description of the Pharis Fellowship.
      'Selected for the Pharis Fellowship at the University of Houston.',
    ],
  },
  {
    org: 'Lazarus Energy',
    role: 'Project Invent Manager',
    dates: 'Jul 2025 – May 2026',
    location: 'Houston, TX',
    notes: [
      'Led 36 students through a year-long human-centered design invention program.',
      'Mentored teams through the full engineering design process, from research to pitch.',
    ],
  },
  {
    org: 'Lazarus Energy',
    role: 'IT Intern',
    dates: 'Oct 2023 – Jan 2025',
    location: 'Houston, TX',
    notes: [
      'Developed a real-time data management web app to improve scheduling efficiency.',
      'Automated employee hour tracking using the Google Sheets API.',
    ],
  },
  {
    org: 'City of Houston',
    role: 'TechConnect Intern',
    dates: 'Jun 2024 – Aug 2024',
    location: 'Houston, TX',
    notes: [
      'Facilitated STEM activities for youth to promote digital equity in under-resourced areas.',
      'Collaborated with professionals at TechConnect Fairs; earned Apple Teacher certification.',
    ],
  },
  {
    org: 'University of Houston',
    role: 'Desk Assistant',
    dates: 'Oct 2023 – Mar 2024',
    location: 'Houston, TX',
    notes: [
      'Ran front-desk operations for a residence hall, including resident check-ins and check-outs.',
      'Supported residents, staff, and visitors with day-to-day needs.',
    ],
  },
];

export type Leadership = {
  org: string;
  role: string;
  dates: string;
  note: string;
};

export const leadership: Leadership[] = [
  {
    org: 'No Higher No Wider I-10',
    role: 'Website Manager',
    dates: 'Feb 2024 – Present',
    note: 'Build and maintain the advocacy website for a community effort opposing the I-10 freeway expansion in Houston.',
  },
  {
    org: 'CodeCoogs',
    role: 'Events Coordinator Intern',
    dates: 'Sep 2024 – Dec 2024',
    note: 'Managed room bookings and scheduling for the university’s competitive programming organization.',
  },
  {
    org: 'BikeHouston',
    role: 'Data Team Dashboard Developer',
    dates: 'Jan 2024 – Aug 2024',
    note: 'Helped build a data-visualization dashboard mapping cycling infrastructure and crashes across Houston.',
  },
  {
    org: 'CougarCS',
    role: 'Tutor',
    dates: 'Aug 2023 – Aug 2024',
    note: 'Tutored students in introductory Python and C++ courses at the University of Houston.',
  },
  {
    org: 'FIRST Robotics Competition · Team 5892 Energy HEROs',
    role: 'Captain & Programming Lead',
    dates: 'Oct 2021 – May 2023',
    note: 'Led the team to the State competition and won the FRC Autonomous Award; wrote the Java code controlling the robot.',
  },
  {
    org: 'NASA High School Aerospace Scholars',
    role: 'Omega Team Lead',
    dates: 'Oct 2021 – Feb 2022',
    note: 'Led an eight-person team designing a lunar south-pole habitat as part of an Artemis-focused program.',
  },
];

export const education = [
  {
    org: 'University of Houston',
    detail: 'Honors B.S. Computer Science, minors in Architecture and Data & Society',
    dates: 'Expected May 2027',
    note: 'GPA 3.7',
  },
  {
    org: 'Vrije Universiteit Amsterdam',
    detail: 'Computer Science Exchange Student',
    dates: 'Jan 2025 – Jun 2025',
    note: '',
  },
];
