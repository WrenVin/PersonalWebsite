export const site = {
  name: 'Vincent Wren',
  tagline: 'Urban Planning · GIS & Spatial Analysis · Computer Science',
  // Short status line shown above the name in the hero.
  status: 'Honors CS @ University of Houston · Houston, TX',
  // Kept intentionally general, describing the work without overselling it.
  intro:
    'I’m an honors student at the University of Houston working toward a career in ' +
    'urban planning, backed by a computer science degree. My current research is in ' +
    'transportation safety: modeling crash risk from street design, and building the ' +
    'public tools that show how cities decide which streets are dangerous.',
  location: 'Houston, TX',
  email: 'wrenvin@gmail.com',
  resume: '/resume.pdf',
  links: {
    github: 'https://github.com/WrenVin',
    linkedin: 'https://www.linkedin.com/in/vincent-wren',
    orcid: 'https://orcid.org/0009-0002-7667-1620',
  },
  // Privacy-friendly analytics. Sign up free at goatcounter.com, pick a code
  // (e.g. "vincentwren"), and put it here; the tracking script only renders
  // when this is non-empty.
  goatcounter: '',
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
      'Network Analyst',
      'GeoAI',
      'Kepler.gl',
      'Georeferencing',
      'Network screening (HSM)',
      'Crash cost analysis',
      'Location-allocation',
      'arcpy / ArcGIS Pro map series',
    ],
  },
  {
    label: 'Statistics & machine learning',
    items: [
      'Negative binomial regression',
      'Machine learning',
      'Computer vision (SegFormer, Faster R-CNN)',
      'Causal DAGs',
      'Survey design & distribution',
      'Data cleaning',
      'Correlation analysis',
    ],
  },
  {
    label: 'Data sources',
    items: ['TxDOT CRIS', 'GTFS', 'OpenStreetMap', 'Census / ACS data'],
  },
  {
    label: 'Programming',
    items: [
      'Python',
      'PyTorch',
      'JavaScript',
      'Java',
      'C++',
      'Git / GitHub',
    ],
  },
  {
    label: 'Visualization & cartography',
    items: [
      'Data portraits',
      'Cartographic design',
      'Isotype charts',
      '3D visualization',
    ],
  },
  {
    label: 'Collaboration & leadership',
    items: [
      'Team leadership',
      'Mentoring & tutoring',
      'Public storytelling',
      'Community advocacy',
      'Cross-disciplinary teamwork',
      'Human-centered design',
    ],
  },
  {
    label: 'Languages',
    items: ['English (native)', 'Dutch (intermediate)'],
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
    org: 'Farm&City (Vision Zero Texas)',
    role: 'Crash Data and Mapping Intern',
    dates: 'Sep 2026 – Present',
    location: 'Austin, TX (Remote)',
    notes: [
      'Ranked Texas’s most dangerous roads statewide, a safety counterpart to TxDOT’s Top 100 Congested Roadways list.',
      'Screened 2.76M crash records on 82,000 miles of road with HSM network screening, ranking 5,960 corridors by crash cost.',
      'Automated 181 print-ready map pages, one for each Texas House and Senate district, with ArcGIS Pro and arcpy.',
      'Found that 10% of major-road miles carry 61% of the state’s traffic fatalities and serious injuries.',
      'Presented the findings to staff from 15 legislative offices at a Texas Capitol traffic safety briefing (Nov. 5, 2026).',
    ],
  },
  {
    org: 'Pharis Fellowship · UH Honors College & HPE Data Science Institute',
    role: 'Research Fellow',
    dates: 'May 2026 – Aug 2026',
    location: 'Houston, TX',
    notes: [
      'Built and maintain Vision Zero Houston, a public citywide traffic-safety dashboard making 421,000+ state crash records across 66,900 street segments explorable by street, district, neighborhood, and travel mode, with Council Member Panzarella’s office.',
      'Quantified crash concentration: half of Houston’s traffic deaths and serious injuries occur on 2% of street-miles.',
      'Developed a proactive street-design risk model (negative binomial regression with computer-vision features from street imagery) that captured 51% of held-out severe crashes vs 46% for the City’s High Injury Network at matched mileage.',
      'Identified roughly 300 miles of high-risk streets missing from the City’s official network.',
      'Sole author of a paper accepted for presentation at the TRB 2027 Annual Meeting.',
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
      'Teams built inventions for real users.',
      'Earned the Project Invent Pioneer Award for program leadership; student teams won $1,500 in prizes.',
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
];

export type Leadership = {
  org: string;
  role: string;
  dates: string;
  note: string;
  link?: { href: string; label: string };
};

export const leadership: Leadership[] = [
  {
    org: 'CEA CAPA',
    role: 'Alumni Ambassador · Featured National Storyteller',
    dates: 'Feb 2026',
    note: 'Published a featured narrative on Dutch cycling infrastructure and study abroad for The Forum Annual Conference.',
    link: { href: '/writing/cea-transformation.jpg', label: 'Read “Transformation”' },
  },
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
    role: 'GearShifter Advocate & Volunteer',
    dates: 'Jan 2024 – Present',
    note: 'Advocate for safer cycling infrastructure across Houston; helped build a data-visualization dashboard mapping cycling infrastructure and crashes.',
  },
  {
    org: 'Gehl',
    role: 'Volunteer Field Data Collector',
    dates: 'Oct 2024',
    note: 'Collected observational data for the Downtown Houston Public Life Survey.',
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

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  status: string;
  links: { href: string; label: string }[];
};

export const publications: Publication[] = [
  {
    title: 'Quantifying What Houston’s High Injury Network Misses with a Validated Design-Risk Model',
    authors: 'Vincent Wren (sole author)',
    venue: 'Transportation Research Board 106th Annual Meeting, Washington, D.C., Jan. 2027',
    status: 'Accepted for presentation',
    links: [
      { href: '/research/vision-zero-trb-paper.pdf', label: 'Read the paper (PDF)' },
      { href: 'https://wrenvin.github.io/PharisFellowshipVisionZero/vision-zero.html', label: 'Live dashboard' },
      { href: 'https://orcid.org/0009-0002-7667-1620', label: 'ORCID' },
    ],
  },
];

export const education = [
  {
    org: 'University of Houston',
    detail: 'Honors B.S. in Computer Science, minors in Architecture and Data & Society',
    dates: 'Expected May 2027',
    note: 'GPA 3.69',
  },
  {
    org: 'Vrije Universiteit Amsterdam',
    detail: 'Computer Science Exchange Student',
    dates: 'Jan 2025 – Jun 2025',
    note: '',
  },
];

export const honors = [
  'Provost Undergraduate Research Scholarship',
  'Houston Livestock Show and Rodeo Scholarship',
  'Pharis Fellowship',
  'Project Invent Pioneer Award',
];
