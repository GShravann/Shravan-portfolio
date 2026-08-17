export type Experience = {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  outcome: string;
  skills: string[];
  color: string;
  emoji: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'swecha',
    company: 'Swecha Telangana',
    role: 'Full Stack Engineer Intern',
    type: 'Internship',
    period: 'May 2026 – Present',
    location: 'Hyderabad, India · On-site',
    summary: 'Open source contributor at eHRS (Electronic Health Record System) — building healthcare technology for community medical camps in Telangana.',
    highlights: [
      'Developed consultation record management and medicine verification workflows',
      'Volunteered at a live medical camp using the eHRS system I helped build',
      'Full-circle moment: contributed to code and used it in real deployment',
      'Contributed to fuelReach (emergency fuel delivery) and Mitra AI (safety platform)',
    ],
    outcome: 'Live deployment at community medical camps serving underserved populations in Telangana',
    skills: ['Python', 'FastAPI', 'Git', 'Open Source', 'Healthcare Tech'],
    color: '#2D6A4F',
    emoji: '🏥',
  },
  {
    id: 'nnrg-mun-head',
    company: 'NNRG MUN',
    role: 'Head of Delegate Affairs',
    type: 'Leadership',
    period: 'Jan 2026 – Present',
    location: 'Hyderabad, India · On-site',
    summary: 'Leading the Secretariat\'s delegate affairs for NNRG Model United Nations — organized a national-level conference with 240+ delegates across four committees.',
    highlights: [
      'Promoted from Designer to Head of D\'Affaires — most public-facing Secretariat role',
      'Organized NNRG MUN 2026 (March 12–13) with DISEC, AIPPM, UNHRC, and TLA committees',
      'Led team through planning, campaign drives, and full two-day conference execution',
    ],
    outcome: '240+ delegates · 4 committees · National-level conference concluded',
    skills: ['Leadership', 'Event Management', 'Public Speaking', 'Team Coordination'],
    color: '#1A1A2E',
    emoji: '🌐',
  },
  {
    id: 'india-space',
    company: 'India Space Lab (MSDE Skill India)',
    role: 'Summer Research Intern',
    type: 'Internship',
    period: 'Jun 2026 – Jul 2026',
    location: 'India · Hybrid',
    summary: 'Research internship exploring advanced drone technology, CanSat & CubeSat programs, rocketry science, remote sensing (GIS), and disaster management applications.',
    highlights: [
      'Hands-on exposure to drone systems, satellite sub-systems and mission design',
      'Explored remote sensing, GIS, and disaster management technology applications',
      'Received Appreciation of Excellence for outstanding performance',
    ],
    outcome: 'Appreciation of Excellence award · Broadened perspective across space & interdisciplinary tech',
    skills: ['Drone Technology', 'Remote Sensing', 'GIS', 'Rocketry', 'Research'],
    color: '#0B3D91',
    emoji: '🚀',
  },
  {
    id: 'zoho',
    company: 'Zoho',
    role: 'Data Science Intern',
    type: 'Internship',
    period: 'May 2026 – Jul 2026',
    location: 'Hyderabad, India · Remote',
    summary: 'Data science internship applying analytical techniques through an industry-structured DSBA program — statistical analysis, ML modeling and data visualization.',
    highlights: [
      'Completed the DSBA-T12May-10046 Data Science curriculum',
      'Applied statistical analysis and data visualization to real business datasets',
      'Developed practical skills in exploratory data analysis and ML modeling',
    ],
    outcome: 'Certified DSBA completion · Applied ML skills in business context',
    skills: ['Data Science', 'Machine Learning', 'Python', 'Data Analysis', 'Tableau'],
    color: '#E42527',
    emoji: '📊',
  },
  {
    id: 'viswam',
    company: 'VISWAM.AI',
    role: 'Tech Lead Intern',
    type: 'Internship',
    period: 'May 2025 – Aug 2025',
    location: 'Hyderabad, India · Hybrid',
    summary: 'Led technical development within the Summer of AI initiative — building AI tools that advance Telugu language and culture while solving real problems for farmers and healthcare users.',
    highlights: [
      'Led development of CropDoc AI — Hugging Face + Streamlit crop disease diagnosis in Telugu',
      'Re-engineered Ova AI into open-source health assistant using Meta\'s LLaMA 3',
      'Served as Tech Lead for 8-week program, mentoring team through model integration',
      'AI HackDay 2025 Finalist',
    ],
    outcome: 'AI HackDay 2025 Finalist · Two deployed AI projects · Certificate of Excellence',
    skills: ['LLM', 'Open Source', 'Streamlit', 'Hugging Face', 'Python', 'Tech Leadership'],
    color: '#6A0572',
    emoji: '🤖',
  },
];

export const IMPACT_STATS = [
  { value: '5+', label: 'Projects Deployed', color: '#8B5CF6' },
  { value: '4+', label: 'Internships', color: '#22D3EE' },
  { value: '240+', label: 'MUN Delegates Led', color: '#F59E0B' },
  { value: '2', label: 'AI HackDay Finalist', color: '#34D399' },
];
