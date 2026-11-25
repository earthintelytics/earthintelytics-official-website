/**
 * What Earthintelytics does, for the landing page and the consultancy page: spatial intelligence and Earth observation
 * across sectors (agriculture is one of them, not the frame), research and studies, and platforms. No invented
 * clients, partners, projects or figures (owner, 24 Nov 2026: projects and partners stay off until a list is sent).
 */
export type Service = { title: string; text: string; points?: string[] };
export type Sector = { id: string; name: string; text: string; uses: string[]; photo: string; tone: string };

/** The three things we do, side by side. */
export const PILLARS: Service[] = [
  { title: "Earth observation and spatial analysis", text: "Satellite, drone and field data turned into maps and answers: what is on the land, how it is changing, and why.",
    points: ["Land cover and change over time", "Site condition and disturbance", "Water, flooding and drought"] },
  { title: "Research and studies", text: "Published, repeatable methods for questions about land, climate and resources, with every source and its limits stated.",
    points: ["Suitability and site selection", "Baselines and impact studies", "Method development and peer review"] },
  { title: "Platforms and systems", text: "Software that keeps the answers coming: our own platform, FarmIntelytics, and systems built around your data.",
    points: ["FarmIntelytics for agriculture", "Dashboards and data pipelines", "APIs and integrations"] },
];

/** Use cases, sector by sector: work we do, described plainly. */
export const SECTORS: Sector[] = [
  { id: "agriculture", name: "Agriculture and food", text: "Farms, estates, co-operatives and supply chains.", photo: "agriculture", tone: "#4F8A2B",
    uses: ["Crop health and yield monitoring", "Land suitability before planting", "EUDR deforestation due diligence"] },
  { id: "forestry", name: "Forestry and carbon", text: "Forests, restoration and carbon projects.", photo: "forestry", tone: "#1F7A4D",
    uses: ["Forest cover, loss and degradation", "Restoration progress over time", "Carbon project baselines"] },
  { id: "environment", name: "Environment and biodiversity", text: "Ecosystems, protected areas and environmental reporting.", photo: "environment", tone: "#0F8C7A",
    uses: ["Ecosystem and habitat change", "Protected areas and their surroundings", "Environmental impact baselines and monitoring"] },
  { id: "geology", name: "Geology and earth resources", text: "Rocks, soils, minerals and the land around them.", photo: "geology", tone: "#A8642A",
    uses: ["Geological and lineament mapping from satellite", "Erosion, gullies and land degradation", "Land disturbance and rehabilitation around extraction sites"] },
  { id: "water", name: "Water and hydrology", text: "Rivers, lakes, wetlands and irrigation.", photo: "water", tone: "#2468B5",
    uses: ["Surface water extent through the seasons", "Flood mapping and exposure", "Irrigation demand and water stress"] },
  { id: "climate", name: "Climate and resilience", text: "Drought, heat and the climate ahead.", photo: "climate", tone: "#C2832A",
    uses: ["Rainfall, drought and heat analysis for any area", "Climate projections and scenarios", "Resilience and risk assessments"] },
  { id: "planning", name: "Land and infrastructure planning", text: "Governments, developers and planners.", photo: "planning", tone: "#5A4FB0",
    uses: ["Base maps and land-use mapping", "Site selection and constraints", "Change detection around projects"] },
];

/** Consultancy, grouped the same way: across sectors first, then sector depth, then systems and training. */
export const EO_SERVICES: Service[] = [
  { title: "Earth-observation assessments", text: "Land cover, change over time and site condition for any land: geology and earth resources, forestry and carbon, water, infrastructure and the environment.",
    points: ["Sentinel-1 radar and Sentinel-2 optical archives", "Change detection, year by year", "Maps and a report in plain words"] },
  { title: "GIS and spatial analysis", text: "Maps, spatial analysis and data for planning, reporting and decisions, from a single site to a region.",
    points: ["Base maps and land-use maps", "Spatial analysis for planning", "Map books and data for reports"] },
  { title: "Custom geospatial systems", text: "Dashboards, data pipelines and integrations built around your own data and processes.",
    points: ["Dashboards on your own data", "Satellite data pipelines", "APIs and integrations with your systems"] },
];

export const SECTOR_SERVICES: Service[] = [
  { title: "Land suitability and site selection", text: "Where a crop, a plantation or a project fits best, from terrain, soil, rainfall and water, by the FAO land-evaluation method.",
    points: ["Suitability maps, field by field", "What limits each site, and what would change it", "Site comparisons for investment decisions"] },
  { title: "Monitoring and impact studies", text: "Setting up monitoring for estates, programmes and projects, and studies of growth, stress, change and impact over seasons.",
    points: ["Monitoring set up on FarmIntelytics", "Baselines and before-and-after studies", "Season and programme reports"] },
  { title: "EUDR and supply-chain due diligence", text: "Mapping production plots, checking them against the 31 December 2020 cut-off, and preparing the files buyers ask for.",
    points: ["Plot mapping with producers and co-operatives", "Deforestation checks against the cut-off", "Files ready for the EU information system"] },
  { title: "Training and capacity building", text: "Teaching teams to read satellite results, collect field data and use the tools in their daily work.",
    points: ["Field teams and extension officers", "Managers reading results and reports", "GIS and remote-sensing courses"] },
];

/** How we reach an answer: our methods, named. */
export const METHODS: Service[] = [
  { title: "Greenness classes", text: "Land cover from a season's peak greenness, scored and compared year on year (Ajeyomi & Abiala, 2026)." },
  { title: "FAO land evaluation", text: "Suitability from S1 (very suitable) to N (not suitable): every factor on a 30 m grid, the worst one sets the class." },
  { title: "Deforestation against the EUDR cut-off", text: "Forest at the end of 2020 (JRC GFC2020) and tree cover lost since (Hansen/UMD), plot by plot." },
  { title: "Radar and optical time series", text: "Sentinel-1 radar sees through cloud; Sentinel-2 shows growth and stress; together, a reading every few days." },
];

/** Published work: only real, citable items, cited exactly as recorded (the paper's own title can be added here). */
export const PUBLICATIONS = [
  { authors: "Ajeyomi & Abiala", year: 2026, title: "",
    about: "The greenness-class method: land cover from a season's peak greenness, with a greenness score, the share of the greenest class, and year-on-year change.",
    venue: "Journal of Geography, Environment and Earth Science International", ref: "30(2): 45–62" },
];

export const HOW_WE_WORK = [
  { title: "Understand the question", text: "What you need to decide, for which land, by when." },
  { title: "Gather the data", text: "Satellite archives, drone surveys and field records, with every source named." },
  { title: "Analyse", text: "Published, repeatable methods; uncertainty stated plainly." },
  { title: "Report", text: "Maps and a report in plain words, with the data you keep." },
  { title: "Hand over", text: "Training, and where it helps, monitoring on our platforms." },
];

export const SECTOR_NAMES = SECTORS.map((s) => s.name);
