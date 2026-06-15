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
  /** Public ArcGIS web map item id, rendered with the ArcGIS Maps SDK 4.x. Preferred. */
  webmapId?: string;
  /** Full iframe URL for StoryMaps / Experience Builder / web scenes. */
  mapEmbed?: string;
  /**
   * Link-out fallback for maps too data-heavy to embed live (e.g. layers with
   * very high-vertex geometry). Renders a panel with an "open on ArcGIS" button
   * instead of an inline map. Use until the map is optimized (simplified
   * geometry or published as tiles), then switch back to `webmapId`.
   */
  mapLink?: string;
  /** External link (devpost, github, live site). */
  link?: { href: string; label: string };
  /** Award / recognition, shown as a badge (e.g. a hackathon win). */
  award?: string;
  /** Visually spotlight this project at the top of the work grid. */
  spotlight?: boolean;
  /** Project images, shown as a gallery on the project page. */
  images?: { src: string; alt: string }[];
  /** For a single tall (portrait) image: render it beside the text, not above it. */
  imageAside?: boolean;
  /** Tags for filtering / display. */
  tags: string[];
  /** Whether this is a primary spatial project (vs. older secondary work). */
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'bikeshare-equity-siting',
    title: 'Equitable Bike Share Station Siting',
    tool: 'ArcGIS Pro',
    date: 'Spring 2026',
    summary:
      'Modeling where a future Houston bike share should place stations to balance ridership and equity.',
    description:
      'For the University of Houston Provost Undergraduate Research Scholarship (PURS), advised by ' +
      'Donna Kacmar in the Hines College of Architecture, I developed a spatial methodology for ' +
      'siting a future Houston bike share system. After Houston BCycle shut down in 2024, the work ' +
      'asks how a new network could balance ridership density, efficiency, and the inclusion of ' +
      'low-income and minority communities. Using ArcGIS Network Analyst location-allocation ' +
      'against 2020 Census population, a theoretical network with the same number of stations as ' +
      'the 2021 system reached 197,385 residents within a five-minute walk, a 2.65x increase. I ' +
      'then built a custom equity score from ACS poverty, race and Hispanic origin, and ' +
      'vehicle-availability data, and re-ran the allocation to weight high-need neighborhoods, ' +
      'redistributing stations toward the East End, Third Ward, and Southeast Houston.',
    highlights: [
      'Modeled optimal station placement with ArcGIS Network Analyst location-allocation against 2020 Census population.',
      'A same-size theoretical network reached 197,385 residents within a 5-minute walk, 2.65x the 2021 BCycle system.',
      'Built a custom, population-normalized equity score from poverty, demographics, and vehicle access.',
      'Re-ran the allocation on the equity score to redistribute stations into underserved neighborhoods.',
    ],
    stat: { value: '2.65×', label: 'more residents reached than the 2021 BCycle network' },
    link: { href: '/research/bikeshare-equity-poster.pdf', label: 'View the research poster (PDF)' },
    spotlight: true,
    tags: ['ArcGIS Pro', 'Network Analysis', 'Equity', 'Transportation', 'Research'],
    featured: true,
  },
  {
    slug: 'midtown-complete-streets',
    title: 'Midtown Houston Complete Streets Visualization',
    tool: 'ArcGIS CityEngine',
    date: 'Fall 2025',
    summary:
      'A 3D procedural model exploring how the Louisiana & Smith corridor could be retrofitted for multimodal travel.',
    description:
      'Using ArcGIS CityEngine, I procedurally modeled a 3D retrofit of the Louisiana & Smith ' +
      'corridor to visualize future-state street concepts. The redesign reallocates the existing ' +
      'right-of-way, converting five 12-foot general-purpose lanes and 4.5-foot sidewalks into a ' +
      'multimodal section: 9-foot sidewalks, a 6-foot protected bike lane, a 10-foot bus lane, and ' +
      'two 10-foot general-purpose lanes. It demonstrates the spatial feasibility of road-diet ' +
      'interventions using only the street width that already exists.',
    highlights: [
      'Procedurally modeled a 3D before-and-after retrofit of the Louisiana & Smith corridor in CityEngine.',
      'Reallocated five 12ft car lanes into 9ft sidewalks, a 6ft protected bike lane, a 10ft bus lane, and two 10ft general lanes.',
      'Showed road-diet feasibility within the existing right-of-way, with no widening required.',
    ],
    stat: { value: '5 → 2', label: 'general-purpose car lanes, the rest reallocated to transit, bikes, and people' },
    images: [
      { src: '/images/projects/midtown-1-section.jpg', alt: 'Before-and-after street cross-section: five 12ft car lanes become 9ft sidewalks, a 6ft protected bike lane, a 10ft bus lane, and two 10ft general lanes.' },
      { src: '/images/projects/midtown-2-today.jpg', alt: 'Aerial of the Louisiana & Smith corridor today, showing wide multi-lane arterials.' },
      { src: '/images/projects/midtown-3-transformed.jpg', alt: 'Aerial of the transformed corridor with protected bike lanes, bus lanes, and street trees.' },
    ],
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
    images: [
      { src: '/images/projects/transit-walkable-access.jpg', alt: 'Map of Houston shaded by the percentage of each Census block group within a quarter-mile walk of a high-frequency METRO route.' },
    ],
    imageAside: true,
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
      'I analyzed Downtown Houston’s built environment by quantifying the land area dedicated to ' +
      'vehicle infrastructure versus pedestrian infrastructure. Combining official data from the ' +
      'City of Houston, H-GAC, and OpenStreetMap in ArcGIS Pro, I built a 3D scene to visualize ' +
      'the vertical scale of parking and ran a land-use analysis estimating the area of four ' +
      'components: roads, parking, sidewalks, and parks. An estimated 71.95% of downtown’s land ' +
      'serves car infrastructure versus 9.26% for pedestrians, meaning roughly eight times more ' +
      'land goes to moving and storing vehicles than to the pedestrian realm and public green space.',
    highlights: [
      'Combined City of Houston, H-GAC, and OpenStreetMap data in ArcGIS Pro.',
      'Built a 3D scene of parking plus a four-part land-use analysis (roads, parking, sidewalks, parks).',
      'Found 71.95% of downtown serves vehicles vs. 9.26% for pedestrians, roughly an 8x imbalance.',
    ],
    stat: { value: '8×', label: 'more downtown land for cars than for people' },
    webmapId: '5929c6f281d04567b0585d9c5c820ce1',
    tags: ['ArcGIS Pro', 'Land Use', 'OSM', 'Houston'],
    featured: true,
  },
  {
    slug: 'campus-bike-parking',
    title: 'Campus Bike Parking Utilization Field Survey',
    tool: 'ArcGIS Online',
    date: 'Fall 2025',
    summary:
      'A field survey of 74 campus bike racks revealing where capacity is failing.',
    description:
      'This project used GIS workflows to evaluate how well bicycle infrastructure matches demand ' +
      'across the University of Houston campus, identifying spatial imbalances between parking ' +
      'capacity and actual usage to support data-driven planning. I ran a field survey of 74 ' +
      'bike-rack locations using ArcGIS Field Maps, collecting data around noon on a weekday to ' +
      'capture peak campus activity and recording both total capacity and real-time usage ' +
      '(bicycles and scooters). In ArcGIS Pro, I processed the survey into a bivariate ' +
      'visualization of infrastructure performance, where library racks ran past 100% capacity ' +
      'while dormitory racks sat largely empty.',
    highlights: [
      'Surveyed 74 bike-rack locations with ArcGIS Field Maps at weekday peak (around noon).',
      'Recorded total capacity and real-time usage, counting both bicycles and scooters.',
      'Built a bivariate symbology in ArcGIS Pro to expose capacity-versus-demand imbalances.',
    ],
    stat: { value: '74', label: 'bike-rack locations surveyed' },
    webmapId: 'c93db6af604041dbba33df9f28541e06',
    tags: ['ArcGIS Online', 'Field Maps', 'Survey', 'Campus'],
    featured: true,
  },
  {
    slug: 'amenity-equity',
    title: 'Houston Equity of Places',
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
    link: { href: '/research/houston-equity-of-places.pdf', label: 'View the analysis (PDF)' },
    tags: ['QGIS', 'Equity', 'Census', 'Houston'],
    featured: true,
  },
  {
    slug: 'istanbul-seismic-vulnerability',
    title: 'Istanbul Seismic Vulnerability Index',
    tool: 'ArcGIS Pro',
    date: 'Fall 2025',
    summary:
      'A 3D index combining earthquake hazard and population exposure to rank Istanbul’s districts by risk.',
    description:
      'A 3D analytical map that ranks Istanbul’s districts by seismic vulnerability to help ' +
      'prioritize disaster preparedness. The Vulnerability Index combines a hazard score, the peak ' +
      'ground-shaking intensity (Spectral Acceleration) projected for a full North Anatolian Fault ' +
      'rupture under the official worst-case scenario, with an exposure score based on each ' +
      'district’s 2022 population. Multiplying the two surfaces the districts that face both intense ' +
      'shaking and dense population, shown as the tallest, deepest-red polygons.',
    highlights: [
      'Combined hazard (projected ground shaking) and exposure (2022 district population) into one vulnerability index.',
      'Modeled the official worst-case North Anatolian Fault rupture scenario using Spectral Acceleration.',
      'Used 3D extrusion and a graduated color ramp to flag the highest-priority districts for preparedness.',
    ],
    images: [
      { src: '/images/projects/istanbul-vulnerability.jpg', alt: '3D extruded map of Istanbul districts colored and raised by a seismic vulnerability index combining earthquake hazard and population exposure.' },
    ],
    link: {
      href: 'https://www.arcgis.com/apps/mapviewer/index.html?layers=1d66d380bfbb4895b41ef16cae2f6f4d',
      label: 'Open the interactive map',
    },
    imageAside: true,
    tags: ['ArcGIS Pro', '3D Visualization', 'Seismic Risk', 'Istanbul'],
    featured: true,
  },
  {
    slug: 'mars-rover-mapping',
    title: 'Perseverance Rover Path, Jezero Crater',
    tool: 'ArcGIS Pro',
    date: 'Fall 2025',
    summary:
      'A cartographic map tracing NASA’s Perseverance rover path across Jezero Crater on Mars.',
    description:
      'A cartographic project mapping the path of NASA’s Perseverance rover across Jezero Crater ' +
      'on Mars, traced over planetary satellite imagery (USGS, NASA/JPL, ESA, HRSC, and Esri Mars ' +
      'basemaps). The map follows the rover’s route through an ancient river delta and is laid out ' +
      'as a print-quality cartographic product with scale bar, inset, and source attribution.',
    highlights: [
      'Traced the Perseverance rover’s route across Jezero Crater over Mars satellite imagery.',
      'Produced a print-quality cartographic layout with scale, inset, and source attribution.',
    ],
    images: [
      { src: '/images/projects/mars-rover-path.jpg', alt: 'Cartographic map of NASA’s Perseverance rover path traced in cyan across the Jezero Crater delta on Mars, with scale bar, north arrow, and inset.' },
    ],
    imageAside: true,
    tags: ['ArcGIS Pro', 'Cartography', 'Mars', 'Planetary'],
    featured: true,
  },
  {
    slug: 'netherlands-photo-heatmap',
    title: 'Photographic Footprint of the Netherlands',
    tool: 'Kepler.gl',
    date: 'Spring 2025',
    summary:
      'A heatmap of 13,000 geotagged photos from my semester abroad, layered with GPX tracks from two long-distance bike tours.',
    description:
      'For this project I mapped my own “photographic footprint” from a semester studying abroad ' +
      'in the Netherlands. Using a macOS command-line tool, I extracted the latitude and longitude ' +
      'metadata from all 13,000 images in my photo library, then loaded the points into Kepler.gl ' +
      'to build a density heatmap. The hotspots immediately revealed where I spent my time, in ' +
      'cities like Amsterdam, Rotterdam, and Utrecht. Noticing the heatmap traced my long-distance ' +
      'rides, I overlaid GPX data from two cycling trips, the Tour De Nederland and Tour De ' +
      'Flanders, combining a density layer of everyday life with line data from specific events.',
    highlights: [
      'Extracted GPS metadata from 13,000 personal photos using a macOS command-line tool.',
      'Built a density heatmap in Kepler.gl, surfacing hotspots in Amsterdam, Rotterdam, and Utrecht.',
      'Overlaid GPX tracks from two bike tours (Tour De Nederland and Tour De Flanders).',
    ],
    stat: { value: '13,000', label: 'geotagged photos mapped' },
    images: [
      { src: '/images/projects/netherlands-photo-heatmap.jpg', alt: 'Heatmap of the Netherlands showing density of 13,000 geotagged photos in yellow, with two bike-tour routes overlaid as lines.' },
    ],
    imageAside: true,
    tags: ['Kepler.gl', 'Heatmap', 'Personal Data', 'Netherlands'],
    featured: true,
  },
  {
    slug: 'diemen-zuid-walkability',
    title: 'A 15-Minute Neighborhood: Diemen-Zuid',
    tool: 'ArcGIS Pro',
    date: 'Fall 2025',
    summary:
      'A walkability analysis of my old Amsterdam neighborhood, mapping what is reachable on foot in 5, 10, and 15 minutes.',
    description:
      'Using OpenStreetMap data, I analyzed the walkability of my old neighborhood, Diemen-Zuid in ' +
      'Amsterdam. Starting from my former apartment, I ran a network analysis in ArcGIS Pro to ' +
      'generate isochrones (service areas) for 5, 10, and 15-minute walking times, then overlaid ' +
      'OSM amenity data, including grocery stores, cafes, and pharmacies, to visualize what is ' +
      'truly accessible on foot.',
    highlights: [
      'Generated 5, 10, and 15-minute walking isochrones from a single origin with ArcGIS Network Analyst.',
      'Built the pedestrian network from OpenStreetMap data.',
      'Overlaid OSM amenities (groceries, cafes, pharmacies) to assess everyday walkable access.',
    ],
    images: [
      { src: '/images/projects/diemen-zuid-walkability.jpg', alt: 'Walkability map of Diemen-Zuid, Amsterdam showing 5, 10, and 15-minute walking isochrones around an apartment with grocery, cafe, and pharmacy locations.' },
    ],
    imageAside: true,
    tags: ['ArcGIS Pro', 'Network Analysis', 'Walkability', 'OSM', 'Amsterdam'],
    featured: true,
  },
  {
    slug: 'commute-civic-engagement',
    title: 'The Road to Campus',
    tool: 'Python · R',
    date: 'Spring 2026',
    summary:
      'A survey-based data portrait exploring whether commute burden shapes civic engagement among UH undergraduates.',
    description:
      'A Data & Society collaboration with Kaylee Gallardo investigating whether commute burden ' +
      'affects civic engagement among University of Houston undergraduates. We designed and ' +
      'distributed an original undergraduate survey, then cleaned and analyzed responses from 41 ' +
      'students in Python and R. I led the transportation side and built two visual “data ' +
      'portraits” that tell the story: “The Road to Campus,” a branching road map where students ' +
      'fork by residence and transport mode (road length encodes average commute, width encodes ' +
      'number of riders), and “Constellations of Civic Life,” a star map plotting each student by ' +
      'commute time and civic-engagement index. The analysis found essentially no correlation ' +
      'between commute time and civic engagement (r = 0.08), suggesting a long commute does not, ' +
      'on its own, pull students away from civic life.',
    highlights: [
      'Designed and distributed an original undergraduate survey; cleaned and analyzed 41 responses in Python and R.',
      'Built “The Road to Campus,” a branching road-map portrait encoding commute time and ridership by transport mode.',
      'Built “Constellations of Civic Life,” mapping each student by commute time and civic-engagement index (PCA).',
      'Found no significant link between commute time and civic engagement (r = 0.08, p = 0.74).',
    ],
    stat: { value: '41', label: 'UH undergraduates surveyed with an original instrument' },
    images: [
      { src: '/images/projects/road-to-campus-portrait.jpg', alt: 'The Road to Campus: a branching road-map data portrait of UH students by residence and transport mode, with road length showing average commute time.' },
      { src: '/images/projects/constellations-civic-life.jpg', alt: 'Constellations of Civic Life: a star map plotting 41 UH students by commute time and civic-engagement score, colored by major and sized by year.' },
    ],
    link: { href: 'https://github.com/kay9116/HON-3350-Final-Project', label: 'View the project on GitHub' },
    tags: ['Python', 'R', 'Data Visualization', 'Survey', 'Civic Data'],
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
      'A first-place hackathon web app helping people in food deserts find access to food.',
    description:
      'Food Oasis was built at the Katy Youth Hacks hackathon to help people who live in food ' +
      'deserts find access to food. It won first place and was my first foray into web development.',
    highlights: [
      'Won 1st place at the Katy Youth Hacks hackathon.',
      'Built a web app to improve food access for people in food deserts.',
    ],
    link: { href: 'https://devpost.com/software/food-oasis-irp89a', label: 'View on Devpost' },
    award: '1st place',
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
];

// Display order for the featured grid, most important for the portfolio first.
// Edit this list to reorder; any featured project not listed falls to the end.
const FEATURED_ORDER = [
  'bikeshare-equity-siting',
  'downtown-land-use',
  'transit-equity-frequency',
  'amenity-equity',
  'diemen-zuid-walkability',
  'commute-civic-engagement',
  'midtown-complete-streets',
  'campus-bike-parking',
  'istanbul-seismic-vulnerability',
  'netherlands-photo-heatmap',
  'mars-rover-mapping',
];
const orderIndex = (slug: string) => {
  const i = FEATURED_ORDER.indexOf(slug);
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
};

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => orderIndex(a.slug) - orderIndex(b.slug));
export const otherProjects = projects.filter((p) => !p.featured);
