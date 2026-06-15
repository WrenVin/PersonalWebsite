export type Project = {
  slug: string;
  title: string;
  tool: string;
  date: string;
  /** Short, neutral one-liner used on cards. */
  summary: string;
  /** Longer description shown on the project page. */
  description: string;
  /** Bullet points describing the work. */
  highlights: string[];
  /** A headline figure to feature, if the project has one. */
  stat?: { value: string; label: string };
  /** ArcGIS / external map share URL. Leave empty to render a placeholder. */
  mapEmbed?: string;
  /** External link (devpost, github, live site). */
  link?: { href: string; label: string };
  /** Tags for filtering / display. */
  tags: string[];
  /** Whether this is a primary spatial project (vs. older secondary work). */
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'midtown-complete-streets',
    title: 'Midtown Houston Complete Streets Visualization',
    tool: 'ArcGIS CityEngine',
    date: 'Fall 2025',
    summary:
      'A 3D procedural model exploring how the Louisiana & Smith corridor could be retrofitted for multimodal travel.',
    description:
      'Using ArcGIS CityEngine, I procedurally modeled a 3D retrofit of the Louisiana & Smith ' +
      'corridor to visualize future-state street concepts. The project redesigns the digital ' +
      'right-of-way to transform five-lane arterials into multimodal, transit-rich corridors, ' +
      'demonstrating the spatial feasibility of road-diet interventions using existing street widths.',
    highlights: [
      'Procedurally modeled a 3D retrofit of the Louisiana & Smith corridor.',
      'Redesigned the digital right-of-way to convert five-lane arterials into multimodal corridors.',
      'Showed the spatial feasibility of road-diet interventions within existing street widths.',
    ],
    mapEmbed: '',
    tags: ['CityEngine', '3D', 'Complete Streets', 'Houston'],
    featured: true,
  },
  {
    slug: 'transit-equity-frequency',
    title: 'Houston Transit Equity & Frequency Study',
    tool: 'ArcGIS Pro',
    date: 'Fall 2025',
    summary:
      'Mapping METRO’s high-frequency network against population to find gaps in access to frequent transit.',
    description:
      'This study maps the METRO high-frequency transit network using GTFS data to identify ' +
      'critical service corridors. By overlaying quarter-mile walk buffers onto block-group ' +
      'population data, it computes accessibility metrics and visualizes where service coverage ' +
      'gaps line up with socioeconomic disparities in access to frequent transit.',
    highlights: [
      'Mapped the METRO high-frequency network from GTFS data to identify service corridors.',
      'Computed accessibility by overlaying 0.25-mile walk buffers on block-group population.',
      'Visualized coverage gaps to surface disparities in access to frequent transit.',
    ],
    mapEmbed:
      'https://www.arcgis.com/apps/Embed/index.html?webmap=a930b4f766c74b2389c9002a1fa103c5&theme=dark&legend=true&zoom=true&scale=true',
    tags: ['ArcGIS Pro', 'GTFS', 'Transit', 'Equity'],
    featured: true,
  },
  {
    slug: 'downtown-land-use',
    title: 'Downtown Houston Land Use Analysis',
    tool: 'ArcGIS Pro',
    date: 'Fall 2025',
    summary:
      'Quantifying how much of downtown’s land is given to vehicles versus people.',
    description:
      'This analysis quantifies the downtown built environment to compare vehicle and pedestrian ' +
      'land allocation in the urban core. Synthesizing municipal and OpenStreetMap data, it ' +
      'categorizes road, parking, sidewalk, and park surface areas, finding that 71.9% of ' +
      'downtown land serves vehicles versus 9.2% for pedestrians.',
    highlights: [
      'Quantified the CBD built environment to compare vehicle and pedestrian land use.',
      'Synthesized municipal and OSM data into road, parking, sidewalk, and park areas.',
      'Found 71.9% of downtown land serves vehicles vs. 9.2% for pedestrians.',
    ],
    stat: { value: '71.9%', label: 'of downtown land allocated to vehicles' },
    mapEmbed:
      'https://www.arcgis.com/apps/Embed/index.html?webmap=5929c6f281d04567b0585d9c5c820ce1&theme=dark&legend=true&zoom=true&scale=true',
    tags: ['ArcGIS Pro', 'Land Use', 'OSM', 'Houston'],
    featured: true,
  },
  {
    slug: 'campus-bike-parking',
    title: 'Campus Bike Parking Utilization Field Survey',
    tool: 'ArcGIS Online · Field Maps',
    date: 'Fall 2025',
    summary:
      'A field survey of 74 campus bike racks revealing where capacity is failing.',
    description:
      'Using ArcGIS Field Maps, I surveyed 74 bike-rack locations across campus to collect ' +
      'attribute data on capacity and usage. The resulting dataset identified critical capacity ' +
      'failures: library racks exceeding 100% usage while dormitory racks sat empty.',
    highlights: [
      'Surveyed 74 bike-rack locations via ArcGIS Field Maps for capacity and usage data.',
      'Identified capacity failures where library racks exceeded 100% while dorms sat empty.',
    ],
    stat: { value: '74', label: 'bike-rack locations surveyed' },
    mapEmbed: '',
    tags: ['ArcGIS Online', 'Field Maps', 'Survey', 'Campus'],
    featured: true,
  },
  {
    slug: 'amenity-equity',
    title: 'Houston Amenity Equity Analysis',
    tool: 'QGIS',
    date: 'Summer 2025',
    summary:
      'Correlating amenity density with demographics to surface inequities in access.',
    description:
      'This QGIS analysis performs spatial joins to correlate amenity density with Census racial ' +
      'demographic data across Houston. It revealed that majority-Black neighborhoods house 7.9% ' +
      'of the population but contain only 1.3% of the city’s grocery stores.',
    highlights: [
      'Performed spatial joins in QGIS to correlate amenity density with Census demographics.',
      'Found majority-Black neighborhoods house 7.9% of people but only 1.3% of grocery stores.',
    ],
    stat: { value: '1.3%', label: 'of grocery stores in majority-Black neighborhoods (7.9% of pop.)' },
    mapEmbed: '',
    tags: ['QGIS', 'Equity', 'Census', 'Houston'],
    featured: true,
  },
  {
    slug: 'no-higher-no-wider-i10',
    title: 'No Higher No Wider I-10',
    tool: 'Website Manager',
    date: 'Feb 2024 – Present',
    summary:
      'Maintaining an advocacy website for a community effort around the I-10 freeway.',
    description:
      'I build and maintain the advocacy website for No Higher No Wider I-10, a community effort ' +
      'focused on the future of the I-10 freeway corridor and its impact on surrounding neighborhoods.',
    highlights: [
      'Maintain the advocacy website opposing I-10 freeway expansion.',
    ],
    link: { href: 'https://nohighernowideri10.com', label: 'Visit nohighernowideri10.com' },
    tags: ['Web', 'Advocacy', 'Houston'],
    featured: false,
  },
  {
    slug: 'miles-to-victory',
    title: 'Miles to Victory',
    tool: 'Rice Datathon',
    date: '2024',
    summary:
      'A data-science project on how travel affects MLB team performance.',
    description:
      'Built at the Rice Datathon, Miles to Victory examines the relationship between travel ' +
      'distance and Major League Baseball team performance.',
    highlights: ['Analyzed travel’s impact on MLB performance for the Rice Datathon.'],
    link: {
      href: 'https://devpost.com/software/miles-to-victory-travel-s-impact-on-mlb-performance',
      label: 'View on Devpost',
    },
    tags: ['Data Science', 'Hackathon'],
    featured: false,
  },
  {
    slug: 'food-oasis',
    title: 'Food Oasis',
    tool: 'Katy Youth Hacks',
    date: '2023',
    summary:
      'A web app to help people living in food deserts find access to food.',
    description:
      'Food Oasis was built at the Katy Youth Hacks hackathon to help people who live in food ' +
      'deserts find access to food. It was my first foray into web development.',
    highlights: ['Built a web app to improve food access for people in food deserts.'],
    link: { href: 'https://devpost.com/software/food-oasis-irp89a', label: 'View on Devpost' },
    tags: ['Web', 'Hackathon'],
    featured: false,
  },
  {
    slug: 'hour-tracking',
    title: 'Hour Tracking Web App',
    tool: 'Google Sheets API',
    date: '2024',
    summary: 'A real-time tool that automates employee hour tracking.',
    description:
      'A real-time data-management web app built to improve scheduling efficiency, automating ' +
      'employee hour tracking with the Google Sheets API.',
    highlights: ['Automated employee hour tracking using the Google Sheets API.'],
    link: { href: 'https://github.com/WrenVin/Hour-Tracking-Web-App', label: 'View on GitHub' },
    tags: ['Web', 'Automation'],
    featured: false,
  },
  {
    slug: 'yearly-daylight-latitude',
    title: 'Yearly Daylight Latitude',
    tool: 'Python',
    date: '2023',
    summary: 'A script visualizing how daylight hours change with latitude over a year.',
    description:
      'A Python project that computes and visualizes how daylight hours vary by latitude across ' +
      'the course of a year.',
    highlights: ['Computed and visualized daylight hours by latitude over a year.'],
    link: { href: 'https://github.com/WrenVin/Yearly_Daylight_Latitude', label: 'View on GitHub' },
    tags: ['Python', 'Visualization'],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
