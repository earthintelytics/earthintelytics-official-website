/**
 * Our consultancy and research: agriculture first, Earth-observation work across other sectors as a service.
 * Used by the landing page (a preview) and the consultancy page (in full). No invented clients or figures.
 */
export type Service = { title: string; text: string; points?: string[] };

export const AGRICULTURE: Service[] = [
  { title: "Agricultural research and studies", text: "Crop, land and climate studies for farms, estates, programmes and researchers, from satellite records and field data.",
    points: ["Crop and land-use change over seasons and years", "Climate and rainfall analysis for a site or region", "Field data collection and survey design"] },
  { title: "Land suitability and site selection", text: "Where a crop or project fits best, from terrain, soil, rainfall and water, by the FAO land-evaluation method.",
    points: ["Suitability maps per crop, field by field", "What limits each site, and what would change it", "Site comparisons for investment decisions"] },
  { title: "Monitoring and yield studies", text: "Setting up crop monitoring for estates and programmes, and studies of growth, stress and yield over seasons.",
    points: ["Monitoring set up on FarmIntelytics", "Stress, growth and yield studies", "Season reports for managers and funders"] },
  { title: "EUDR and supply-chain due diligence", text: "Mapping production plots, checking them against the 2020 cut-off, and preparing the files buyers ask for.",
    points: ["Plot mapping with producers and co-operatives", "Deforestation checks against 31 December 2020", "Files ready for the EU information system"] },
  { title: "Training and capacity building", text: "Teaching teams to read satellite results, collect field data and use the tools in their daily work.",
    points: ["Field teams and extension officers", "Managers reading results and reports", "GIS and remote-sensing courses"] },
];

export const OTHER_SECTORS: Service[] = [
  { title: "Earth-observation assessments", text: "Land cover, change over time and site condition for mining, forestry and carbon, water, infrastructure and the environment.",
    points: ["Mining sites: land disturbance and restoration", "Forest cover, loss and carbon", "Water bodies, flooding and drought"] },
  { title: "GIS and mapping", text: "Maps, spatial analysis and data for planning, reporting and decisions, from a single site to a region.",
    points: ["Base maps and land-use maps", "Spatial analysis for planning", "Map books and data for reports"] },
  { title: "Custom geospatial systems", text: "Dashboards, data pipelines and integrations built around your own data and processes.",
    points: ["Dashboards on your own data", "Satellite data pipelines", "Integrations with your systems"] },
];

export const HOW_WE_WORK = [
  { title: "Understand the question", text: "What you need to decide, for which land, by when." },
  { title: "Gather the data", text: "Satellite archives, drone surveys and field records, with every source named." },
  { title: "Analyse", text: "Published, repeatable methods; uncertainty stated plainly." },
  { title: "Report", text: "Maps and a report in plain words, with the data you keep." },
  { title: "Hand over", text: "Training, and where it helps, monitoring on FarmIntelytics." },
];

export const SECTORS = ["Agriculture", "Forestry and carbon", "Mining", "Water and hydrology", "Climate and environment", "Land planning"];
