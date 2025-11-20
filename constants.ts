
import { Language, Translation, Project, ExperienceItem } from './types';
import { Beaker, Zap, Microscope, Lightbulb, Atom, FileText } from 'lucide-react';

export const TRANSLATIONS: Record<Language, Translation> = {
  [Language.EN]: {
    nav: {
      home: 'Home',
      about: 'About',
      group: 'My Group',
      experience: 'Career',
      projects: 'Research',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm Guanyu Cai",
      role: "Materials Scientist & Research Group Leader",
      description: "Leading the way in inorganic luminescent materials and flexible optical sensing. Currently based at CNRS - IRCP.",
      ctaPrimary: "View Research",
      ctaSecondary: "My Research Group",
    },
    about: {
      title: "About Me",
      subtitle: "Scientific Profile",
      content: [
        "I am a researcher selected for the National Overseas High-level Talent Introduction Plan, currently working at the CNRS - IRCP (Institute of Chemistry of Paris). My work bridges the gap between fundamental material synthesis and advanced applications.",
        "My primary research focuses on the preparation of inorganic luminescent materials, functional materials (lasers, lighting), and flexible optical sensing or bio-probes. I have extensive experience in cross-scale single crystal manufacturing and nanomaterial modification."
      ],
      skillsTitle: "Research Domains",
      awardsTitle: "Honors & Awards",
    },
    group: {
      title: "Cai Research Group",
      subtitle: "Advanced Luminescent Materials",
      description: "Our group focuses on the design, synthesis, and application of novel inorganic luminescent materials. We bridge fundamental physics with practical applications in bio-imaging and optoelectronics.",
      focusTitle: "Strategic Research Areas",
      positionsTitle: "Join Us",
      positions: "We are always looking for motivated PhD students and Postdocs interested in optical materials. Please contact via email.",
    },
    experience: {
      title: "Career & Education",
      subtitle: "My Academic Journey",
      present: "Present",
    },
    projects: {
      title: "Selected Research",
      subtitle: "Projects & Publications",
      viewProject: "View Details",
      sourceCode: "Reference",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Collaboration & Inquiries",
      emailLabel: "Primary Email",
      ccLabel: "CC",
      message: "Interested in collaboration or joining my group?",
      send: "Send Message",
    },
    chat: {
      trigger: "Ask AI about my research",
      title: "Guanyu's Research Assistant",
      placeholder: "Ask about my patents, papers, or background...",
      disclaimer: "Powered by Gemini 2.5 Flash. Answers based on my CV.",
      welcome: "Hello! I am an AI assistant for the Cai Research Group. Ask me about our work in luminescent materials!",
    },
  },
  [Language.CN]: {
    nav: {
      home: '首页',
      about: '关于我',
      group: '课题组',
      experience: '履历',
      projects: '科研项目',
      contact: '联系方式',
    },
    hero: {
      greeting: "你好，我是 蔡冠宇",
      role: "材料科学家 & 课题组组长",
      description: "国家级海外高层次人才引进计划入选者。专注于无机发光材料、功能性材料（激光器、照明）及柔性光学传感研究。",
      ctaPrimary: "查看科研成果",
      ctaSecondary: "我的课题组",
    },
    about: {
      title: "关于我",
      subtitle: "个人简介",
      content: [
        "我目前担任法国科学院-巴黎化学研究所（CNRS - IRCP）博士后研究员。我的研究领域涵盖无机发光材料的制备与先进应用，特别是钙钛矿氧化物、激光材料及长余辉磷光体。",
        "我致力于跨尺度（纳米至厘米级）单晶的制造与光学特性改良，以及发光纳米材料在柔性可穿戴材料与生物医学领域的应用，如活体生物成像和药物输送。"
      ],
      skillsTitle: "研究领域",
      awardsTitle: "重要奖项",
    },
    group: {
      title: "蔡冠宇课题组",
      subtitle: "先进发光材料研究",
      description: "本课题组致力于新型无机发光材料的设计、合成与应用。我们将基础物理与生物成像、光电子学等实际应用紧密结合。",
      focusTitle: "战略研究方向",
      positionsTitle: "加入我们",
      positions: "我们长期招收对光学材料感兴趣的博士研究生和博士后。请通过邮件联系。",
    },
    experience: {
      title: "经历与教育",
      subtitle: "职业生涯",
      present: "至今",
    },
    projects: {
      title: "科研成果",
      subtitle: "项目与论文",
      viewProject: "查看详情",
      sourceCode: "相关文献",
    },
    contact: {
      title: "联系我",
      subtitle: "学术合作",
      emailLabel: "主要邮箱",
      ccLabel: "抄送",
      message: "有学术合作意向或希望加入课题组？",
      send: "发送信息",
    },
    chat: {
      trigger: "AI 助手",
      title: "蔡冠宇的 AI 助手",
      placeholder: "询问关于我的研究、专利...",
      disclaimer: "由 Gemini 2.5 Flash 驱动。回答基于我的简历数据。",
      welcome: "你好！我是蔡冠宇课题组的 AI 助手。欢迎询问关于发光材料的研究进展！",
    },
  },
  [Language.FR]: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      group: 'Mon Groupe',
      experience: 'Parcours',
      projects: 'Recherche',
      contact: 'Contact',
    },
    hero: {
      greeting: "Bonjour, je suis Guanyu Cai",
      role: "Chercheur & Chef de Groupe",
      description: "Spécialisé dans les matériaux inorganiques luminescents et la détection optique flexible. Actuellement au CNRS - IRCP.",
      ctaPrimary: "Voir Recherches",
      ctaSecondary: "Mon Groupe",
    },
    about: {
      title: "À propos",
      subtitle: "Profil Scientifique",
      content: [
        "Je suis chercheur au CNRS - IRCP (Institut de Recherche de Chimie Paris). Mon travail comble le fossé entre la synthèse fondamentale des matériaux et les applications avancées.",
        "Mes recherches portent principalement sur la préparation de matériaux luminescents inorganiques, les matériaux fonctionnels (lasers, éclairage) et les capteurs optiques flexibles ou bio-sondes."
      ],
      skillsTitle: "Domaines de Recherche",
      awardsTitle: "Prix et Distinctions",
    },
    group: {
      title: "Groupe de Recherche Cai",
      subtitle: "Matériaux Luminescents Avancés",
      description: "Notre groupe se concentre sur la conception, la synthèse et l'application de nouveaux matériaux luminescents inorganiques. Nous faisons le lien entre la physique fondamentale et les applications pratiques.",
      focusTitle: "Axes de Recherche",
      positionsTitle: "Rejoignez-nous",
      positions: "Nous recherchons des doctorants et post-doctorants motivés par les matériaux optiques. Contactez-nous par email.",
    },
    experience: {
      title: "Carrière et Éducation",
      subtitle: "Mon Parcours Académique",
      present: "Présent",
    },
    projects: {
      title: "Recherche Sélectionnée",
      subtitle: "Projets et Publications",
      viewProject: "Détails",
      sourceCode: "Référence",
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Collaboration",
      emailLabel: "Email Principal",
      ccLabel: "Copie (CC)",
      message: "Intéressé par une collaboration ou rejoindre le groupe ?",
      send: "Envoyer le message",
    },
    chat: {
      trigger: "Assistant IA",
      title: "Assistant IA de Guanyu",
      placeholder: "Posez des questions sur mes recherches...",
      disclaimer: "Propulsé par Gemini 2.5 Flash. Réponses basées sur mon CV.",
      welcome: "Bonjour ! Je suis l'assistant IA du groupe de recherche Cai. Posez-moi des questions sur nos travaux !",
    },
  },
};

export const SKILLS = [
  { name: 'Inorganic Synthesis (Solid State)', icon: Beaker, level: 95 },
  { name: 'Optical Characterization', icon: Microscope, level: 90 },
  { name: 'Nanomaterials (Quantum Dots)', icon: Atom, level: 85 },
  { name: 'Bio-imaging & Sensing', icon: Zap, level: 80 },
  { name: 'Laser Materials', icon: Lightbulb, level: 85 },
  { name: 'Patents & Innovation', icon: FileText, level: 75 },
];

export const AWARDS = [
  { year: '2025', title: { [Language.EN]: 'IAAM Fellow', [Language.CN]: '国际先进材料协会会士', [Language.FR]: 'IAAM Fellow' } },
  { year: '2025', title: { [Language.EN]: 'Materials Journal Best Paper Award', [Language.CN]: 'Materials 期刊年度最佳论文奖', [Language.FR]: 'Prix du meilleur article Materials' } },
  { year: '2024', title: { [Language.EN]: 'Best Researcher Award (AMO Physics)', [Language.CN]: '长余辉发光材料最佳研究员奖', [Language.FR]: 'Prix du meilleur chercheur (AMO Physics)' } },
  { year: '2024', title: { [Language.EN]: 'Erasmus+ Staff Mobility Program (Ghent University)', [Language.CN]: '获欧洲 Erasmus+ staff mobility program', [Language.FR]: 'Programme Erasmus+ Staff Mobility' } },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ERC-2024-PEPR',
    type: 'Project',
    description: {
      [Language.EN]: 'Key participant in European Research Council project. Rank 10/24. Duration: 2024-2032.',
      [Language.CN]: '欧盟科研委员会重点项目重要参与人。排序：10/24。项目时间：2024-2032。',
      [Language.FR]: 'Participant clé au projet du Conseil Européen de la Recherche. Rang 10/24. Durée : 2024-2032.',
    },
    tech: ['ERC', 'Luminescence', 'Materials'],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: '2',
    title: 'ANR-PLEaSe (Small, IF 13.2)',
    type: 'Project',
    description: {
      [Language.EN]: 'Significant achievement: Small (IF 13.2), 2024. Project size: ~295k EUR. Funded by ANR.',
      [Language.CN]: '重要标志性成果发表于 Small (IF 13.2), 2024。资助方：法国国家研究基金（ANR）。',
      [Language.FR]: 'Réalisation significative : Small (IF 13.2), 2024. Financé par l\'ANR.',
    },
    tech: ['ANR', 'Small Journal', 'Nanotech'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: '3',
    title: 'Fluorescent Oil Tracers Patents',
    type: 'Patent',
    description: {
      [Language.EN]: 'Developed synthesis and application of 6 types of fluorescent oil tracers to improve oil drilling efficiency (6 Patents).',
      [Language.CN]: '研发了六种具有荧光石油示踪剂的合成和应用，以提高石油钻探效率 (6项专利)。',
      [Language.FR]: 'Développement de 6 types de traceurs fluorescents pour le forage pétrolier (6 Brevets).',
    },
    tech: ['Patent', 'Industry Application', 'Synthesis'],
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'work1',
    type: 'Work',
    role: {
      [Language.EN]: 'Postdoctoral Researcher',
      [Language.CN]: '博士后研究员',
      [Language.FR]: 'Chercheur Postdoctoral',
    },
    company: {
      [Language.EN]: 'CNRS - IRCP (Institute of Chemistry of Paris)',
      [Language.CN]: '法国科学院-巴黎化学研究所 (CNRS - IRCP)',
      [Language.FR]: 'CNRS - IRCP',
    },
    period: {
      [Language.EN]: '2024.04 - Present',
      [Language.CN]: '2024.04 - 至今',
      [Language.FR]: '2024.04 - Présent',
    },
    description: {
      [Language.EN]: ['Ranked 7th globally in Nature Index for institutions.'],
      [Language.CN]: ['所在研究所自然指数全球排名第 7 位。'],
      [Language.FR]: ['Classé 7ème mondial dans le Nature Index.'],
    }
  },
  {
    id: 'work2',
    type: 'Work',
    role: {
      [Language.EN]: 'Visiting Scholar',
      [Language.CN]: '访问学者',
      [Language.FR]: 'Chercheur Invité',
    },
    company: {
      [Language.EN]: 'Stanford University',
      [Language.CN]: '美国斯坦福大学',
      [Language.FR]: 'Université Stanford',
    },
    period: {
      [Language.EN]: 'July 2025',
      [Language.CN]: '2025.07',
      [Language.FR]: 'Juillet 2025',
    },
    description: {
      [Language.EN]: ['Upcoming academic visit.'],
      [Language.CN]: ['即将进行的学术访问。'],
      [Language.FR]: ['Visite académique à venir.'],
    }
  },
  {
    id: 'work3',
    type: 'Work',
    role: {
      [Language.EN]: 'Visiting Scholar',
      [Language.CN]: '访问学者',
      [Language.FR]: 'Chercheur Invité',
    },
    company: {
      [Language.EN]: 'MIT (Massachusetts Institute of Technology)',
      [Language.CN]: '美国麻省理工大学 (MIT)',
      [Language.FR]: 'MIT',
    },
    period: {
      [Language.EN]: 'Aug 2025',
      [Language.CN]: '2025.08',
      [Language.FR]: 'Août 2025',
    },
    description: {
      [Language.EN]: ['Upcoming academic visit.'],
      [Language.CN]: ['即将进行的学术访问。'],
      [Language.FR]: ['Visite académique à venir.'],
    }
  },
  {
    id: 'edu1',
    type: 'Education',
    role: {
      [Language.EN]: 'Ph.D. Candidate',
      [Language.CN]: '博士研究生',
      [Language.FR]: 'Doctorant',
    },
    company: {
      [Language.EN]: 'Université PSL (Paris)',
      [Language.CN]: '巴黎科学艺术人文大学 (PSL)',
      [Language.FR]: 'Université PSL',
    },
    period: {
      [Language.EN]: '2021 - 2024',
      [Language.CN]: '2021 - 2024',
      [Language.FR]: '2021 - 2024',
    },
    description: {
      [Language.EN]: ['QS World Ranking #24.'],
      [Language.CN]: ['QS 世界排名第 24 位。'],
      [Language.FR]: ['Classement mondial QS #24.'],
    }
  },
  {
    id: 'edu2',
    type: 'Education',
    role: {
      [Language.EN]: 'Master in Materials Science',
      [Language.CN]: '硕士（材料科学与工程）',
      [Language.FR]: 'Master en Science des Matériaux',
    },
    company: {
      [Language.EN]: 'Beijing University of Chemical Technology',
      [Language.CN]: '北京化工大学',
      [Language.FR]: 'Beijing University of Chemical Technology',
    },
    period: {
      [Language.EN]: '2017 - 2020',
      [Language.CN]: '2017 - 2020',
      [Language.FR]: '2017 - 2020',
    },
    description: {
      [Language.EN]: ['Project "211" University.'],
      [Language.CN]: ['“211”工程大学。'],
      [Language.FR]: ['Université du projet "211".'],
    }
  }
];

export const RESUME_CONTEXT = `
Guanyu Cai (蔡冠宇) is a Materials Scientist and Research Group Leader listed in the National Overseas High-level Talent Introduction Plan.
Emails: guanyu.cai@chimieparistech.psl.eu (Main), guanyu.cai@ms.xjb.ac.cn (CC).
Languages: Chinese (Native), French, English.
Current Role:
- 2024.04 - Present: Postdoc & Group Leader, CNRS - IRCP (France) (Nature Index Global Rank #7).
Education:
- 2021-2024: PhD, Université PSL (QS #24), France.
- 2017-2020: Master (Materials Science & Eng), Beijing University of Chemical Technology ("211").
- 2013-2017: Bachelor (Materials Science & Eng), Hebei University of Architecture.
Planned Visits:
- 2025.07.21-28: Visiting Scholar, Stanford University.
- 2025.08.01-10: Visiting Scholar, MIT.
Research Fields:
- Inorganic luminescent materials preparation and advanced application.
- Functional materials (Lasers, Lighting sources).
- Flexible optical sensing or bio-probes.
- Materials: Perovskite Oxides (CaTiO3), Laser Materials (Al2O3, YAG), Persistent Phosphors (SrAl2O4, ZnGa2O4), Upconversion Nanocrystals (NaREF4:Ln), Quantum Dots (Ag2S, InP/ZnS).
Key Projects:
1. ERC-2024-PEPR (2024-2032): Rank 10/24.
2. ANR-22-CE09-0029-01PLEaSe (2023-2025): Rank 3/8. Key outcome: Small (IF 13.2), 2024.
3. ANR-18-CE08-0012 PERSIST (2019-2021): Key outcome: Chem. Eng. J (IF 13.5), 2024.
4. NanoTBTech 801305 (2018-2022): EU Horizon 2020. Key outcome: Materials (IF 3.5), 2023.
Awards:
- 2025: IAAM Fellow.
- 2025: Materials Journal Best Paper Award.
- 2024: Best Researcher Award (AMO Physics).
- 2024: Erasmus+ staff mobility program (Ghent University).
- 2019: Erasmus+ Master exchange scholarship (TU Dresden).
Patents:
- 6 Patents (ZL2018...) related to fluorescent oil tracers synthesis and application.
Selected Publications (First Author):
- ZGSO:Cr3+,Ni2+ Persistent Phosphors (Small, 2024).
- Strontium Aluminate Tunable Color (Adv. Optical Mater., 2025).
- Chromium doped Zinc Gallate (Chem. Eng. J, 2024).
- Multimodal "Time/Temp" resolved optical anti-counterfeiting (JoVE, 2025).
`;
