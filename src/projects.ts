const AirbrushImage = 'images/works/airbrush.webp'
const GaintainImage = 'images/gaintain/about.webp'
const JSharpImage = 'images/works/jsharp.webp'
const LoboGardensImage = 'images/works/lobogardens.webp'
const PhronesisPhoto = 'images/works/phronesis.webp'
const ProjectEchoImage = 'images/works/project_echo.webp'
const QuerqueImage = 'images/works/querque.webp'
const SunbeltImage = 'images/works/sunbelt.webp'
const TLDRPhoto = 'images/works/tldr.webp'
const WaughImage = 'images/works/waugh.webp'
const UniNightsImage = 'images/works/uni_nights.webp'

export interface Project {
  name: string
  category: string
  description: string
  heroImage: string
  badges: string[]
  link?: {
    text: 'Read Case Study' | 'View Presentation' | 'Visit Website' | 'View Figma' | 'View Designs' | 'Request Access'
    url: string
  }
  gradientColors: {
    inside: string
    outside: string
  }
}

export const Projects: Record<string, Project> = {
  Gaintain: {
    name: 'Gaintain',
    category: 'Mobile Workout Tracking',
    description: 'A fitness app designed for a comprehensive workout log to meticulously track exercises, sets, reps, and progress.',
    heroImage: GaintainImage,
    badges: ['Product Strategy', 'UX / UI Design', 'Prototyping'],
    link: {
      text: 'Read Case Study',
      url: '/case_studies/gaintain'
    },
    gradientColors: {
      inside: '#A1CCC9',
      outside: '#09D5C8'
    }
  },
  Waugh: {
    name: 'Waugh',
    category: 'Desktop Dashboard',
    description: 'Instant Political Context: Cut Through the Noise and Get the Full Story.',
    heroImage: WaughImage,
    badges: ['Product Strategy', 'UI Design', 'Design System'],
    link: {
      text: 'View Presentation',
      url: 'https://www.figma.com/slides/muOS1rWcaNx46Nz4QR95FB/WAUGH-PRESENTATION?node-id=3-58&t=6xA61f3NCqB2cI5g-1'
    },
    gradientColors: {
      inside: '#D4AF97',
      outside: '#F56100'
    }
  },
  Phronesis: {
    name: 'Phronesis',
    category: 'Desktop Dashboard',
    description: 'A student-focused landing page designed to streamline access to key academic resources, enhance communication, and improve the student experience.',
    heroImage: PhronesisPhoto,
    badges: ['UI Design', 'Brand Design', 'Design System'],
    link: {
      text: 'Read Case Study',
      url: '/case_studies/phronesis'
    },
    gradientColors: {
      inside: '#75AAB5',
      outside: '#146272'
    }
  },
  TLDR: {
    name: 'TL;DR',
    category: 'Desktop Dashboard',
    description: 'Designed an MVP in a one-day hackathon to simplify legal language in End User Agreements using AI, enabling users to quickly understand what they’re signing.',
    heroImage: TLDRPhoto,
    badges: ['Product Strategy', 'UI Design', 'Generative AI'],
    link: {
      text: 'View Presentation',
      url: 'https://docs.google.com/presentation/d/1qXeKJTsfPWMx_gYd4cbBtRxIbwm7jJqWRpy747TrlWM'
    },
    gradientColors: {
      inside: '#E894EF',
      outside: '#59145F'
    }
  },
  QuerQueCandles: {
    name: 'QuerQue Candles',
    category: 'Brand Design',
    badges: ['Consultancy', 'Graphic Design', 'Figma'],
    description: 'Developed a cohesive brand identity for Querque Candles, including logo design and visual elements, to strengthen market presence.',
    heroImage: QuerqueImage,
    link: {
      text: 'View Figma',
      url: 'https://www.figma.com/file/3yeMcqsp6NQ5bf7EnJVrCH/QuerQue-Candles?type=design&node-id=0-1'
    },
    gradientColors: {
      inside: '#E0926F',
      outside: '#CD551F'
    }
  },
  AirbrushArtStudio: {
    name: 'Airbrush Art Studio',
    category: 'Website Development',
    badges: ['Consultancy', 'UX / UI Design', 'Responsive'],
    description: 'Designed an engaging website for Airbrush Art Studio, optimizing information architecture, SEO, and copywriting to showcase their portfolio and attract clients.',
    heroImage: AirbrushImage,
    link: {
      text: 'Visit Website',
      url: 'https://www.airbrushart.studio'
    },
    gradientColors: {
      inside: '#C6C4C4',
      outside: '#606060'
    }
  },
  JSharpMusic: {
    name: 'J Sharp Music',
    category: 'Website Development',
    badges: ['Consultancy', 'UX / UI Design', 'Responsive'],
    description: 'Redesigned and migrated a music store’s website, improving navigation and ensuring easy updates with a streamlined, user-friendly design.',
    heroImage: JSharpImage,
    link: {
      text: 'Visit Website',
      url: 'https://www.jsharpmusic.com'
    },
    gradientColors: {
      inside: '#6C7CE6',
      outside: '#2F3EA1'
    }
  },
  SunbeltProperties: {
    name: 'Sunbelt Properties',
    category: 'Website Development',
    badges: ['Consultancy', 'UX / UI Design', 'Responsive'],
    description: 'Designed an intuitive website for Sunbelt Properties, optimizing navigation, SEO, and copywriting to enhance property visibility and user engagement.',
    heroImage: SunbeltImage,
    link: {
      text: 'Visit Website',
      url: 'https://www.sunbeltpropertiesnm.com/'
    },
    gradientColors: {
      inside: '#E5A788',
      outside: '#965738'
    }
  },
  ProjectEcho: {
    name: 'Project ECHO',
    category: 'Technical Writer Portfolio',
    badges: ['UX Writing', 'Data Visualization', 'Power BI'],
    description: 'Optimized data processes and documentation by automating dashboards, streamlining onboarding, and improving technical guides to enhance team efficiency.',
    heroImage: ProjectEchoImage,
    link: {
      text: 'Request Access',
      url: 'mailto:hi@adalida.design'
    },
    gradientColors: {
      inside: '#E09DA7',
      outside: '#C7001D'
    }
  },
  LoboGardens: {
    name: 'Lobo Gardens',
    category: 'Marketing Materials',
    badges: ['Graphic Design', 'InDesign', 'Photoshop'],
    description: 'Developed branding and educational materials for Lobo Gardens, including a logo and promotional design to support community engagement.',
    heroImage: LoboGardensImage,
    link: {
      text: 'View Designs',
      url: 'https://dribbble.com/shots/16868644-Flyer-Designs-Business-Card-and-Brochure-Lobo-Gardens'
    },
    gradientColors: {
      inside: '#BCB0A7',
      outside: '#8C6849'
    }
  },
  UniNights: {
    name: 'UNI Nights',
    category: 'Marketing Flyers',
    badges: ['Graphic Design', 'Photoshop', 'Illustrator'],
    description: 'Planned and managed campus events at UNM, creating promotional materials that boosted visibility and attendance.',
    heroImage: UniNightsImage,
    link: {
      text: 'View Designs',
      url: 'https://dribbble.com/shots/16869293-Flyer-Design-Series-UNI-Nights'
    },
    gradientColors: {
      inside: '#B591AD',
      outside: '#963981'
    }
  }
}

export default Projects
