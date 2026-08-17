export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  status: 'live' | 'building' | 'deployed';
  tagline: string;
  problem: string;
  solution: string;
  contribution: string;
  tech: string[];
  features: string[];
  reflection: string;
  color: string;
  accentColor: string;
  emoji: string;
  repoUrl?: string;
  liveUrl?: string;
  architecture?: { from: string; to: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: 'mitra-ai',
    slug: 'mitra-ai',
    title: 'Mitra AI',
    category: 'CIVIC TECH / AI / PUBLIC SAFETY',
    tags: ['FastAPI', 'Python', 'SQLAlchemy', 'SQLite', 'REST APIs', 'AI'],
    year: '2026',
    status: 'building',
    tagline: 'An AI-powered smart kiosk and civic safety platform built to enhance women\'s safety through real-time assistance, SOS alerts, and location-based monitoring.',
    problem: 'Women in urban areas lacked accessible, real-time safety tools. Existing solutions required smartphones, internet, or prior knowledge of unsafe zones. The system needed to work even in an emergency, without prior setup.',
    solution: 'A smart kiosk platform with SOS emergency alerts, location-based safety scoring, incident reporting, and a real-time Central Security Command Center — accessible without a smartphone.',
    contribution: 'Full-stack architecture — FastAPI backend, safety scoring system, SOS command center, modular API design.',
    tech: ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'REST APIs'],
    features: [
      'SOS emergency alert system — instant notification to Command Center',
      'Location-based safety scoring with historical incident data',
      'Smart kiosk interface — no smartphone required',
      'Central Security Command Center for real-time monitoring',
      'Community-driven safety incident reporting',
      'Safe zone mapping and route awareness',
    ],
    reflection: 'Building for safety means building for the worst case. Every design decision — offline-first, accessible UI, instant SOS — was made with the assumption that the user is in a crisis.',
    color: '#7C3AED',
    accentColor: '#A78BFA',
    emoji: '🛡️',
    repoUrl: 'https://gitlab.com/gandipallyshravankumar/mitra-ai',
    architecture: [
      { from: 'SMART KIOSK', to: 'AI / BACKEND' },
      { from: 'AI / BACKEND', to: 'COMMAND CENTER' },
      { from: 'COMMAND CENTER', to: 'EMERGENCY RESPONSE' },
    ],
  },
  {
    id: 'fuelreach',
    slug: 'fuelreach',
    title: 'fuelReach',
    category: 'FULL-STACK / EMERGENCY SERVICES',
    tags: ['Full Stack', 'Real-time', 'Open Source', 'Python'],
    year: '2026',
    status: 'building',
    tagline: 'An on-demand emergency fuel delivery platform connecting vehicle owners, petrol pumps, and delivery agents through a centralized real-time system.',
    problem: 'Running out of fuel on a highway or unfamiliar area is a safety risk. Existing solutions require calling multiple numbers with no visibility into delivery status.',
    solution: 'A platform as simple as ordering food, but for fuel emergencies — connecting users, petrol pumps, and delivery agents with real-time status tracking from request to delivery.',
    contribution: 'Platform architecture — user request flow, petrol pump dashboard, delivery agent tracking, status workflow system.',
    tech: ['Python', 'Full Stack', 'Real-time APIs', 'Open Source'],
    features: [
      'User fuel request with location sharing and fuel selection',
      'Automatic nearest petrol pump routing',
      'Petrol pump operator dashboard with order details',
      'Delivery agent navigation and status updates',
      'Real-time status: REQUESTED → ACCEPTED → ON THE WAY → REACHED → DELIVERED',
      'Multi-role platform: user, pump operator, delivery agent',
    ],
    reflection: 'The best emergency tool is one that feels familiar under stress. Borrowing UI patterns from ride-sharing made the system intuitive without training.',
    color: '#D97706',
    accentColor: '#FCD34D',
    emoji: '⛽',
    repoUrl: 'https://gitlab.com/algoi-sangameshwar/fuelreach',
    architecture: [
      { from: 'USER', to: 'NEAREST FUEL STATION' },
      { from: 'NEAREST FUEL STATION', to: 'DELIVERY AGENT' },
      { from: 'DELIVERY AGENT', to: 'EMERGENCY LOCATION' },
    ],
  },
  {
    id: 'ehrs',
    slug: 'ehrs',
    title: 'eHRS',
    category: 'OPEN SOURCE / HEALTH TECH',
    tags: ['FastAPI', 'Open Source', 'Healthcare', 'Python', 'Community'],
    year: '2026',
    status: 'live',
    tagline: 'Open-source electronic health records system used at real community medical camps — I contributed to the codebase and then used it live.',
    problem: 'Community medical camps relied on paper records — patient data was lost between visits, prescriptions were misread, and medicine distribution had no audit trail.',
    solution: 'An offline-capable electronic health record system for community medical camps — consultation records, prescription verification, medicine distribution — all with an audit trail.',
    contribution: 'Application development, testing, consultation record management, medicine verification workflows. Volunteered at a live medical camp using the system I helped build.',
    tech: ['Python', 'FastAPI', 'Open Source', 'Git', 'Healthcare Tech'],
    features: [
      'Real-time consultation record management',
      'Medicine prescription verification workflow',
      'Dispensary audit trail — zero discrepancies',
      'Offline-capable for camps with unreliable internet',
      'Live deployment at community medical camps in Telangana',
      'Open-source for community reuse and extension',
    ],
    reflection: 'Seeing the application being actively used in a real medical camp — knowing I helped build it — reinforced that software development is about solving real problems, not just writing code.',
    color: '#059669',
    accentColor: '#34D399',
    emoji: '🏥',
    repoUrl: 'https://github.com/GShravann',
    architecture: [
      { from: 'MEDICAL CAMP', to: 'ELECTRONIC HEALTH RECORD' },
      { from: 'ELECTRONIC HEALTH RECORD', to: 'CONSULTATION' },
      { from: 'CONSULTATION', to: 'PRESCRIPTION' },
      { from: 'PRESCRIPTION', to: 'MEDICINE DISTRIBUTION' },
    ],
  },
  {
    id: 'ova-ai',
    slug: 'ova-ai',
    title: 'Ova AI',
    category: 'AI / HEALTH TECH / GENERATIVE AI',
    tags: ['LLaMA 3', 'Hugging Face', 'Open Source', 'Healthcare AI', 'Python'],
    year: '2025',
    status: 'deployed',
    tagline: 'A continuous evolution from a 2nd-year HTML/Node.js project to a privacy-first AI Mobile App for health assistance.',
    problem: 'What started as a basic real-time web project in my 2nd year needed to evolve into a complete, privacy-first mobile health application without compromising sensitive user data.',
    solution: 'A long-term development process: starting as a basic 2nd-year web page, enhanced via open-source during an internship, and culminating in a full privacy-first mobile application for a 3/2 minor project.',
    contribution: 'End-to-end evolution: web development, open-source enhancement, LLaMA 3 integration, and mobile app architecture.',
    tech: ['Node.js', 'HTML/CSS', 'Meta LLaMA 3', 'Python', 'Mobile Development'],
    features: [
      'Phase 1 (2nd Yr): Basic HTML/Node.js real-time web interface',
      'Phase 2 (Internship): Open-source AI enhancement and integration',
      'Phase 3 (3/2 Minor Project): Full privacy-first mobile application',
      'LLaMA 3 local inference — no cloud API, no data leaving device',
      'PCOS/PCOD awareness and symptom understanding',
      'Empathetic conversation design with safety guardrails',
    ],
    reflection: 'Software is a living organism. Ova AI taught me that a simple real-time web page can evolve into a full-scale mobile health application when guided by purpose and continuous learning.',
    color: '#7C3AED',
    accentColor: '#C4B5FD',
    emoji: '🤖',
    liveUrl: 'https://github.com/GShravann/',
    repoUrl: 'https://github.com/GShravann/',
  },
  {
    id: 'nexora',
    slug: 'nexora',
    title: 'Nexora',
    category: 'AI / SECURITY / WEB RTC',
    tags: ['Next.js', 'FastAPI', 'WebRTC', 'AI Monitoring', 'Full-Stack'],
    year: '2026',
    status: 'building',
    tagline: 'My current Major Project: A secure virtual meeting platform with intelligent monitoring.',
    problem: 'Virtual meeting platforms often lack integrated intelligent monitoring and advanced security features, leaving gaps in participant engagement analysis and data privacy.',
    solution: 'A robust, secure virtual meeting platform incorporating real-time WebRTC communication alongside intelligent AI monitoring to ensure secure, productive environments.',
    contribution: 'Full-stack development, WebRTC integration, AI monitoring pipeline setup, and security architecture.',
    tech: ['Next.js', 'FastAPI', 'WebRTC', 'Python', 'AI'],
    features: [
      'Secure, end-to-end encrypted virtual meetings',
      'Intelligent real-time monitoring and engagement analytics',
      'Advanced host controls and room management',
      'Seamless WebRTC video/audio streaming',
      'Currently under active development as my final major project',
    ],
    reflection: 'Building a real-time communication platform pushes the limits of full-stack engineering, where milliseconds matter and security is paramount.',
    color: '#2563EB',
    accentColor: '#60A5FA',
    emoji: '🎥',
    liveUrl: '',
    repoUrl: 'https://github.com/GShravann/',
  },
  {
    id: 'cropdoc-ai',
    slug: 'cropdoc-ai',
    title: 'CropDoc AI',
    category: 'AI / AGRITECH / LANGUAGE',
    tags: ['Streamlit', 'Hugging Face', 'LLM', 'Telugu', 'AgriTech'],
    year: '2025',
    status: 'deployed',
    tagline: 'AI-powered crop disease diagnosis for regional Telugu-speaking farmers — built during VISWAM.AI Summer of AI as Tech Lead.',
    problem: 'Telugu-speaking farmers had no accessible AI tool to diagnose crop diseases in their own language. Most tools required English literacy and smartphone proficiency.',
    solution: 'A Streamlit app with Hugging Face model integration delivering crop disease diagnosis and treatment recommendations entirely in Telugu — accessible from any device with a browser.',
    contribution: 'Tech Lead — end-to-end AI application development, model integration, Telugu language localization, farmer-first UX design.',
    tech: ['Streamlit', 'Hugging Face', 'Python', 'LLM', 'Telugu NLP'],
    features: [
      'Crop disease classification from Hugging Face Hub',
      'All outputs in Telugu language — no English literacy required',
      'Treatment recommendations and preventive measures',
      'Deployed via Streamlit for browser accessibility',
      'Optimized for Telangana agriculture crops',
    ],
    reflection: 'The most powerful AI tool is the one in someone\'s own language. CropDoc taught me that accessibility isn\'t about simplified UI — it\'s about speaking to someone in their own words.',
    color: '#16A34A',
    accentColor: '#86EFAC',
    emoji: '🌾',
    liveUrl: 'https://github.com/GShravann/',
    repoUrl: 'https://github.com/GShravann/',
  },
];

export const LAB_PROJECTS = [
  {
    id: 'air-quality',
    title: 'Air Quality Forecasting',
    category: 'AI / Environmental Technology',
    description: 'Predictive modeling for urban air quality using ML time-series analysis.',
    tech: ['Python', 'Machine Learning', 'Data Science'],
    emoji: '🌬️',
    status: 'experimental',
  },
  {
    id: 'edu-ai',
    title: 'Educational AI Tools',
    category: 'AI / Education',
    description: 'AI-powered learning assistance tools for regional language education.',
    tech: ['LLM', 'Python', 'Streamlit'],
    emoji: '📚',
    status: 'experimental',
  },
  {
    id: 'iot-health',
    title: 'IoT Health Monitoring',
    category: 'IoT / Healthcare',
    description: 'Sensor-based health parameter monitoring with cloud data aggregation.',
    tech: ['IoT', 'Python', 'Sensor APIs'],
    emoji: '🔬',
    status: 'experimental',
  },
];
