import GaintainVideo from 'videos/gaintain/intro.mp4'
import GaintainLoopVideo from 'videos/gaintain/intro_loop.mp4'

const AirbrushImage = 'images/works/airbrush.webp'
const AirbrushLogo = 'images/works/airbrush_logo.webp'
const GaintainLogo = 'images/works/gaintain_logo.webp'
const JessRuedaImage = 'images/works/jessrueda.webp'
const JessRuedaLogo = 'images/works/jessrueda_logo.webp'
const JSharpImage = 'images/works/jsharp.webp'
const LoboGardensImage = 'images/works/lobogardens.webp'
const LoboGardensLogo = 'images/works/lobogardens_logo.webp'
const PhronesisPhoto = 'images/works/phronesis.webp'
const PhronesisLogo = 'images/works/phronesis_logo.webp'
const ProjectEchoImage = 'images/works/project_echo.webp'
const ProjectEchoLogo = 'images/works/project_echo_logo.webp'
const QuerqueImage = 'images/works/querque.webp'
const QuerqueLogo = 'images/works/querque_logo.webp'
const SunbeltImage = 'images/works/sunbelt.webp'
const TLDRLogo = 'images/works/tldr_logo.webp'
const TLDRPhoto = 'images/tldr.webp'
const WaughImage = 'images/works/waugh.webp'
const WaughLogo = 'images/works/waugh_logo.webp'

export interface Project {
  name: string
  category: string
  description: string
  heroImage: string | [string, string]
  badges: string[]
  link?: {
    text: 'Read Case Study' | 'View Presentation' | 'Visit Website' | 'View Figma' | 'View Designs' | 'Request Access'
    url: string
  }
  logo?: {
    image: string
    color: string
  }
}

export const Projects: Record<string, Project> = {
  Waugh: {
    name: 'Waugh',
    category: 'Desktop Dashboard',
    description: `
      Instant Political Context: Cut Through the Noise and Get the Full Story.
      I designed an interactive UI to evaluate political debates with real-time video, live transcription, and metrics
      like a Perspective Meter and Argument Strength Meter, alongside an interactive timeline for context.
    `,
    heroImage: WaughImage,
    badges: ['Multimodal AI Agents', 'Hackathon', 'Product Design'],
    link: {
      text: 'View Presentation',
      url: 'https://www.figma.com/slides/muOS1rWcaNx46Nz4QR95FB/WAUGH-PRESENTATION?node-id=3-58&t=6xA61f3NCqB2cI5g-1'
    },
    logo: {
      image: WaughLogo,
      color: '#DD6B20'
    }
  },
  Gaintain: {
    name: 'Gaintain',
    category: 'Mobile Workout Tracking',
    description: 'Designed the user interface and interactions for Gaintain, a mobile application focusing on tracking workouts and solving the challenge of logging weight lifting between sets. Currently developing this project with a developer to enhance the user experience in fitness tracking. This ongoing project aims to provide a seamless and efficient solution for fitness enthusiasts to monitor their progress.',
    heroImage: [GaintainVideo, GaintainLoopVideo],
    badges: ['Management', 'Product Design', 'Figma'],
    link: {
      text: 'Read Case Study',
      url: '/case_studies/gaintain'
    },
    logo: {
      image: GaintainLogo,
      color: '#00000000'
    }
  },
  JessNRueda: {
    name: 'Jessica Rueda',
    category: 'Web Development',
    badges: ['Consultancy', 'UX Design', 'Shopify'],
    description: 'Jessica Rueda required a digital platform for her art. I developed a Shopify website with e-commerce functionality, secure payments, SEO optimization, and mobile responsiveness. This increased her online visibility and sales.',
    heroImage: JessRuedaImage,
    logo: {
      image: JessRuedaLogo,
      color: '#FEEEFF'
    }
  },
  Phronesis: {
    name: 'Phronesis',
    category: 'Desktop Dashboard',
    description: 'I created visual UI designs in Figma for an educational startup. The project included branding elements such as a logo, color palettes, components, dark and light mode designs, and a simple information architecture. This practice project highlighted my interest in educational startups and my skills in visual design.',
    heroImage: PhronesisPhoto,
    badges: ['Visual Design', 'B2B', 'SAAS', 'Figma'],
    link: {
      text: 'Read Case Study',
      url: '/case_studies/phronesis'
    },
    logo: {
      image: PhronesisLogo,
      color: '#212224'
    }
  },
  QuerQueCandles: {
    name: 'QuerQue Candles',
    category: 'Brand Identity',
    badges: ['Consultancy', 'Graphic Design', 'FIGMA'],
    description: 'Querque Candles needed an online presence. I chose Shopify, designed a brand identity, created a logo, and built a user-friendly website. Despite non-payment for the website, the branding successfully enhanced their market visibility.',
    heroImage: QuerqueImage,
    link: {
      text: 'View Figma',
      url: 'https://www.figma.com/file/3yeMcqsp6NQ5bf7EnJVrCH/QuerQue-Candles?type=design&node-id=0-1'
    },
    logo: {
      image: QuerqueLogo,
      color: '#FFF5E8'
    }
  },
  TLDR: {
    name: 'TL;DR',
    category: 'Product Demo',
    description: 'Participated in a one-day hackathon focused on using AI to summarize legal language in End User Terms Agreements. As a product design project, our team created an MVP to quickly inform users about what they are signing away. This project involved intensive collaboration and rapid prototyping, culminating in a Google Presentation showcasing our solution.',
    heroImage: TLDRPhoto,
    badges: ['1 day Hackathon', 'Product Strategy', 'GenAI'],
    link: {
      text: 'View Presentation',
      url: 'https://docs.google.com/presentation/d/1qXeKJTsfPWMx_gYd4cbBtRxIbwm7jJqWRpy747TrlWM'
    },
    logo: {
      image: TLDRLogo,
      color: '#59145F'
    }
  },
  AirbrushArtStudio: {
    name: 'Airbrush Art Studio',
    category: 'Website Development',
    badges: ['Consultancy', 'UX Design', 'Responsive'],
    description: "Utilized Wix to design the digital presence for Airbrush Art Studio, emphasizing effective Information Architecture. Delivered copywriting and SEO services to boost online visibility and client engagement. This budget-friendly project focused on showcasing the studio's portfolio without extensive branding.",
    heroImage: AirbrushImage,
    logo: {
      image: AirbrushLogo,
      color: '#181818'
    },
    link: {
      text: 'Visit Website',
      url: 'https://www.airbrushart.studio'
    }
  },
  ProjectEcho: {
    name: 'Project ECHO',
    category: 'Technical Writer Portfolio',
    badges: ['Internship', 'UX Writing', 'Data Visualization'],
    description: 'Explore my technical writing portfolio for further details.',
    heroImage: ProjectEchoImage,
    logo: {
      image: ProjectEchoLogo,
      color: '#BE092F'
    },
    link: {
      text: 'Request Access',
      url: 'mailto:hi@adalida.design'
    }
  },
  JSharpMusic: {
    name: 'J Sharp Music',
    category: 'Website Development',
    badges: ['Consultancy', 'UX Design', 'Responsive'],
    description: `
      Migrated a music instrument store's WordPress site to a user-friendly platform in one weekend.
      Optimized the site's information architecture and delivered a handoff-ready design for easy, ongoing updates.
    `,
    heroImage: JSharpImage,
    link: {
      text: 'Visit Website',
      url: 'https://www.jsharpmusic.com'
    }
  },
  SunbeltProperties: {
    name: 'Sunbelt Properties',
    category: 'Website Development',
    badges: ['Consultancy', 'UX Design', 'Responsive'],
    description: 'Crafted the online presence for Sunbelt Properties with Wix, designing an intuitive Information Architecture for a seamless user experience. Offered targeted copywriting and SEO services to increase the visibility of property listings and drive user inquiries. This low-budget initiative prioritized functionality and accessibility over extensive branding.',
    heroImage: SunbeltImage,
    link: {
      text: 'Visit Website',
      url: 'https://www.sunbeltpropertiesnm.com/'
    }
  },
  LoboGardens: {
    name: 'Lobo Gardens',
    category: 'Marketing Materials',
    badges: ['Graphic Design', 'Brand Design', 'Volunteer'],
    description: 'As part of a community project, I contributed to the branding and promotional design for Lobo Gardens, an urban gardening initiative. This involved creating a logo, designing educational materials, and developing a website to increase community engagement and support for campus gardening activities.',
    heroImage: LoboGardensImage,
    logo: {
      image: LoboGardensLogo,
      color: '#010101'
    },
    link: {
      text: 'View Designs',
      url: 'https://dribbble.com/shots/16869293-Flyer-Design-Series-UNI-Nights'
    }
  }
}

export default Projects
