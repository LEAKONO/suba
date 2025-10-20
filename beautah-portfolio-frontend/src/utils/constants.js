import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const personalInfo = {
  name: "Beautah Mwanza Suba",
  title: "Humanitarian Policy & Security Expert",
  email: "bsuba0387@gmail.com",
  phone: "+254 (0)726 767 684",
  location: "Nairobi, Kenya",
  bio: "Award-winning leader with 18+ years in humanitarian policy, access negotiation, and civil-military coordination across East, Central and Horn of Africa.",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bmsuba2024/",
    icon: FaLinkedin,
    color: "hover:text-blue-600"
  },
  {
    name: "Twitter",
    url: "https://x.com/legacy_suba?t=XPoiuzjothEQeKZTHzWEPA&s=08",
    icon: FaTwitter,
    color: "hover:text-sky-500"
  },
  {
    name: "Email",
    url: "mailto:bsuba0387@gmail.com",
    icon: FaEnvelope,
    color: "hover:text-red-500"
  }
];

export const stats = [
  { number: "18+", label: "Years Experience", suffix: "" },
  { number: "50+", label: "Policy Briefs", suffix: "+" },
  { number: "25", label: "Countries Served", suffix: "+" },
  { number: "100", label: "Missions Led", suffix: "+" },
];

export const skills = [
  {
    category: "Humanitarian Access Negotiation",
    description: "Securing and maintaining humanitarian access in complex, conflict-affected environments through strategic engagement with state and non-state actors.",
    icon: "Handshake",
    proficiency: 95,
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Policy Analysis & Advocacy",
    description: "Developing evidence-based policy briefs and influencing national and regional humanitarian policies across East and Central Africa.",
    icon: "FileText",
    proficiency: 90,
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Civil-Military Coordination",
    description: "Navigating military/civilian structures, facilitating dialogue, and enhancing cooperation between humanitarian actors and security forces.",
    icon: "Shield",
    proficiency: 92,
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Crisis Response & Risk Analysis",
    description: "Leading crisis communication and response planning, conflict sensitivity assessments, and real-time analysis in volatile settings.",
    icon: "AlertTriangle",
    proficiency: 88,
    color: "from-orange-500 to-red-500"
  },
  {
    category: "Stakeholder Engagement & Diplomacy",
    description: "Building trust with government, UN, donors, and civil society partners; experienced in high-level negotiation and diplomacy.",
    icon: "Globe",
    proficiency: 94,
    color: "from-indigo-500 to-blue-500"
  },
  {
    category: "Cross-Border Peacebuilding",
    description: "Facilitating cross-border dialogue and peace processes, particularly along contested zones.",
    icon: "Peace",
    proficiency: 87,
    color: "from-teal-500 to-green-500"
  }
];

export const experiences = [
  {
    title: "Humanitarian Policy & Risk Analyst",
    organization: "Kenya Defence Forces",
    period: "Aug 2024 – June 2025",
    location: "Nairobi, Kenya",
    highlights: [
      "Analyzed over 200 reports and incident logs monthly, producing timely policy briefs and threat analyses",
      "Identified 12 emerging conflict trends, directly influencing humanitarian access strategies in 3 crisis-affected regions",
      "Produced 15+ high-impact policy briefs adopted by inter-agency coordination platforms",
      "Supported 8 major humanitarian policy initiatives, contributing to a 25% improvement in operational risk mitigation",
      "Facilitated weekly coordination briefings, increasing cross-agency situational awareness by 40%"
    ],
    icon: "BarChart3"
  },
  {
    title: "Advocacy & External Engagement Officer",
    organization: "Kenya Defence Forces, StratCom-Kenya",
    period: "Dec 2023 – Aug 2024",
    location: "Nairobi, Kenya",
    highlights: [
      "Led 10+ external engagement campaigns, enhancing university visibility and policy influence",
      "Coordinated 6 high-level forums and media briefings, resulting in 30% increase in public-facing engagements",
      "Authored or contributed to 20 advocacy materials, including press releases and donor briefs",
      "Maintained and updated a contact database of 300+ stakeholders, streamlining external communication",
      "Achieved 100% on-time delivery of public communication products"
    ],
    icon: "Megaphone"
  },
  {
    title: "Liaison, Advocacy & Access Coordination Lead",
    organization: "EACRF – MONUSCO Focal Point",
    period: "Nov 2022 – Dec 2023",
    location: "Eastern DRC",
    highlights: [
      "Facilitated over 25 inter-agency coordination meetings, improving access and response efficiency",
      "Led 12 humanitarian access negotiations, contributing to 4 successful cross-border relief missions",
      "Produced and disseminated 30+ strategic briefs aligned with access coordination goals",
      "Maintained engagement with 15+ international NGOs and UN partners",
      "Spearheaded bi-weekly situational updates, increasing decision-making speed by 35%"
    ],
    icon: "Network"
  }
];

export const achievements = [
  {
    title: "Silver Star Presidential Award for Valor",
    year: "2013",
    description: "Recognized by the President of Kenya for leading a high-risk extraction mission under fire during AMISOM operations in Somalia, saving 12 personnel.",
    icon: "Award",
    type: "Military Honor",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    title: "Cross-Border Peace Negotiations",
    year: "2020-2022",
    description: "Facilitated 3 successful negotiation forums between conflicting pastoralist communities along Kenya-Ethiopia border, enabling safe humanitarian access.",
    icon: "Peace",
    type: "Diplomatic Achievement",
    color: "from-green-400 to-emerald-600"
  },
  {
    title: "KDF Strategic Communications Development",
    year: "2022",
    description: "Spearheaded development of KDF StratCom Policy, Doctrine, and Training Syllabus in collaboration with UK JIAG and US AFRICOM.",
    icon: "FileCode",
    type: "Leadership Initiative",
    color: "from-blue-400 to-cyan-600"
  },
  {
    title: "EACRF-MONUSCO Liaison Excellence",
    year: "2023-2024",
    description: "Enhanced inter-agency coordination by initiating weekly joint situational briefings and formalizing operational-level access protocols.",
    icon: "Handshake",
    type: "Coordination Excellence",
    color: "from-purple-400 to-pink-600"
  }
];

export const languages = [
  { language: "Kiswahili", level: "Native", proficiency: 100, flag: "🇰🇪" },
  { language: "English", level: "Fluent", proficiency: 95, flag: "🇬🇧" },
  { language: "French", level: "Intermediate", proficiency: 65, flag: "🇫🇷" },
  { language: "Amharic", level: "Basic", proficiency: 40, flag: "🇪🇹" }
];