export type SkillCategory = {
  id: string;
  label: string;
  color: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  level: 'core' | 'proficient' | 'familiar';
  context: string;
  icon?: string;
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    color: '#8B5CF6',
    skills: [
      { name: 'Generative AI', level: 'core', context: 'Built Ova AI (LLaMA 3), CropDoc AI — AI systems at VISWAM.AI internship.' },
      { name: 'LLMs', level: 'core', context: 'Integrated Meta\'s LLaMA 3 for local inference, engineered system prompts and conversation design.' },
      { name: 'Hugging Face', level: 'proficient', context: 'Used for CropDoc AI model selection and integration during VISWAM.AI internship.' },
      { name: 'Conversational AI', level: 'proficient', context: 'Designed empathetic conversation flows for Ova AI health assistant.' },
      { name: 'Streamlit', level: 'proficient', context: 'Deployed CropDoc AI as a Streamlit application for browser accessibility.' },
      { name: 'Prompt Engineering', level: 'proficient', context: 'System prompt design for health-context AI conversations.' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    color: '#22D3EE',
    skills: [
      { name: 'Python', level: 'core', context: 'Primary language — used across Mitra AI, eHRS, Ova AI, CropDoc AI and all internship projects.' },
      { name: 'FastAPI', level: 'core', context: 'Built complete REST APIs for Mitra AI (safety scoring, SOS alerts) and eHRS.' },
      { name: 'REST APIs', level: 'core', context: 'Designed and implemented RESTful services across multiple production projects.' },
      { name: 'SQLAlchemy', level: 'proficient', context: 'ORM for Mitra AI database — users, incidents, safety zones, command center data.' },
      { name: 'SQLite', level: 'proficient', context: 'Chosen for Mitra AI kiosk deployments — enables offline operation.' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend & UI/UX',
    color: '#60A5FA',
    skills: [
      { name: 'HTML', level: 'core', context: 'Used across all web projects — semantic markup and accessibility.' },
      { name: 'CSS', level: 'core', context: 'Custom styling systems, responsive layouts, animation design.' },
      { name: 'JavaScript', level: 'proficient', context: 'Interactive web applications, DOM manipulation, event handling.' },
      { name: 'React', level: 'proficient', context: 'Frontend development for full-stack web applications.' },
      { name: 'UI/UX Design', level: 'proficient', context: 'Designed event collateral for NNRG MUN (240+ delegates), product interfaces.' },
      { name: 'Figma', level: 'proficient', context: 'UI design and prototyping for project interfaces.' },
      { name: 'Canva', level: 'proficient', context: 'Visual design, event branding for NNRG MUN 2025 and 2026.' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    color: '#F59E0B',
    skills: [
      { name: 'SQLite', level: 'proficient', context: 'Offline-capable storage for kiosk deployments — Mitra AI.' },
      { name: 'PostgreSQL', level: 'familiar', context: 'Relational database fundamentals from Data Science curriculum.' },
      { name: 'MongoDB', level: 'familiar', context: 'Certified: MongoDB Overview and MongoDB Basics for Students (July 2026).' },
      { name: 'SQL', level: 'proficient', context: 'Data Science internship at Zoho — DSBA program data analysis.' },
    ],
  },
  {
    id: 'devtools',
    label: 'Dev Tools & Workflow',
    color: '#34D399',
    skills: [
      { name: 'Git', level: 'core', context: 'Version control across all projects — GitLab for open source contributions at Swecha.' },
      { name: 'GitHub', level: 'core', context: 'Open source collaboration, project management.' },
      { name: 'GitLab', level: 'proficient', context: 'Primary platform for Swecha Telangana open source work.' },
      { name: 'VS Code', level: 'core', context: 'Primary development environment.' },
      { name: 'Tableau', level: 'familiar', context: 'Data visualization during Zoho Data Science internship.' },
    ],
  },
  {
    id: 'domains',
    label: 'Domains',
    color: '#F472B6',
    skills: [
      { name: 'HealthTech', level: 'core', context: 'Ova AI (health assistant), eHRS (electronic health records) — two complete healthcare projects.' },
      { name: 'CivicTech', level: 'core', context: 'Mitra AI (women\'s safety platform), fuelReach (emergency services).' },
      { name: 'IoT', level: 'proficient', context: 'Electronics Diploma background, JNTU IoT workshop, NPTEL IoT certification.' },
      { name: 'Open Source', level: 'core', context: 'Swecha Telangana intern — eHRS, Mitra AI, fuelReach all open-source.' },
      { name: 'Data Science', level: 'familiar', context: 'Zoho DSBA internship — ML, statistical analysis, data visualization.' },
      { name: 'Space Tech', level: 'familiar', context: 'India Space Lab internship — drones, CanSat, CubeSat, remote sensing, GIS.' },
    ],
  },
];
