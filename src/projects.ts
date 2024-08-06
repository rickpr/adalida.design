import BadgeColors from './badge_colors'

const AirbrushImage = 'images/works/airbrush.webp'
const AirbrushLogo = 'images/works/airbrush_logo.webp'
const GaintainPhoto = 'images/gaintain/next_steps.webp'
const JessRuedaImage = 'images/works/jessrueda.webp'
const JessRuedaLogo = 'images/works/jessrueda_logo.webp'
const LoboGardensImage = 'images/works/lobogardens.webp'
const LoboGardensLogo = 'images/works/lobogardens_logo.webp'
const PhronesisPhoto = 'images/works/phronesis.webp'
const PhronesisLogo = 'images/works/phronesis_logo.webp'
const QuerqueImage = 'images/works/querque.webp'
const QuerqueLogo = 'images/works/querque_logo.webp'
const SunbeltImage = 'images/works/sunbelt.webp'
const TLDRLogo = 'images/works/tldr_logo.webp'
const TLDRPhoto = 'images/tldr.webp'
const ZaraImage = 'images/works/zara.webp'

export interface Project {
  name: string
  category: string
  description: string
  heroImage: string
  badges: Record<string, BadgeColors>
  link?: {
    text: 'Read Case Study' | 'View Presentation' | 'Visit Website' | 'View Figma'
    url: string
  }
  logo?: {
    image: string
    color: string
  }
}

export const Projects: Record<string, Project> = {
  Gaintain: {
    name: 'Gaintain',
    category: 'Workout',
    description: 'Designed the user interface and interactions for Gaintain, a mobile application focusing on tracking workouts and solving the challenge of logging weight lifting between sets. Currently developing this project with my partner to enhance the user experience in fitness tracking. This ongoing project aims to provide a seamless and efficient solution for fitness enthusiasts to monitor their progress.',
    heroImage: GaintainPhoto,
    badges: { Management: BadgeColors.info, 'Product Design': BadgeColors.success, Figma: BadgeColors.primary },
    link: {
      text: 'Read Case Study',
      url: '/case_studies/gaintain'
    }
  },
  JessNRueda: {
    name: 'Jessica Rueda',
    category: 'Artist Store',
    badges: { Consultancy: BadgeColors.info, 'Web Development': BadgeColors.warning, Shopify: BadgeColors.danger },
    description: 'Jessica Rueda required a digital platform for her art. I developed a Shopify website with e-commerce functionality, secure payments, SEO optimization, and mobile responsiveness. This increased her online visibility and sales.',
    heroImage: JessRuedaImage,
    logo: {
      image: JessRuedaLogo,
      color: '#FEEEFF'
    }
  },
  Phronesis: {
    name: 'Phronesis',
    category: 'Dashboard',
    description: 'I created visual UI designs in Figma for an educational startup. The project included branding elements such as a logo, color pallets, components, dark and light mode designs, and a simple information architecture. This practice project highlighted my interest in educational startups and my skills in visual design.',
    heroImage: PhronesisPhoto,
    badges: {
      'Visual Design': BadgeColors.info,
      B2B: BadgeColors.primary,
      SAAS: BadgeColors.success,
      Figma: BadgeColors.danger
    },
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
    badges: { Consultancy: BadgeColors.info, Branding: BadgeColors.primary, 'Web Development': BadgeColors.warning },
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
    category: 'User Terms',
    description: 'Participated in a one-day hackathon focused on using AI to summarize legal language in End User Terms Agreements. As a product design project, our team created an MVP to quickly inform users about what they are signing away. This project involved intensive collaboration and rapid prototyping, culminating in a Google Presentation showcasing our solution.',
    heroImage: TLDRPhoto,
    badges: {
      '1 day Hackathon': BadgeColors.info,
      'Product Strategy': BadgeColors.secondary,
      GenAI: BadgeColors.primary
    },
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
    category: 'Artist Portfolio',
    badges: { 'Web Development': BadgeColors.info, Responsive: BadgeColors.secondary, 'Editor X': BadgeColors.warning },
    description: "Utilized Wix to design the digital presence for Airbrush Art Studio, emphasizing effective Information Architecture. Delivered copywriting and SEO services to boost online visibility and client engagement. This budget-friendly project focused on showcasing the studio's portfolio without extensive branding.",
    heroImage: AirbrushImage,
    logo: {
      image: AirbrushLogo,
      color: '#181818'
    }
  },
  ZarasCleaning: {
    name: "Zara's Cleaning",
    category: 'Digital Presence',
    badges: { Consultancy: BadgeColors.info, 'Web Development': BadgeColors.warning, SEO: BadgeColors.primary },
    description: 'Developed a user-friendly website for Zaras Cleaning using Wix, concentrating on clear and efficient information architecture. Provided comprehensive copywriting and SEO services to enhance search engine performance and attract new clients. The project aimed to present essential information within a limited budget framework.',
    heroImage: ZaraImage
  },
  SunbeltProperties: {
    name: 'Sunbelt Properties',
    category: 'Digital Presence',
    badges: { 'Web Development': BadgeColors.warning, Responsive: BadgeColors.success, SEO: BadgeColors.danger },
    description: 'Crafted the online presence for Sunbelt Properties with Wix, designing an intuitive Information Architecture for a seamless user experience. Offered targeted copywriting and SEO services to increase the visibility of property listings and drive user inquiries. This low-budget initiative prioritized functionality and accessibility over extensive branding.',
    heroImage: SunbeltImage,
    link: {
      text: 'Visit Website',
      url: 'https://www.sunbeltpropertiesnm.com/'
    }
  },
  LoboGardens: {
    name: 'Lobo Gardens',
    category: 'Marketing',
    badges: { 'Graphic Design': BadgeColors.warning, 'Brand Identity': BadgeColors.info, Volunteer: BadgeColors.danger },
    description: 'As part of a community project, I contributed to the branding and promotional design for Lobo Gardens, an urban gardening initiative. This involved creating a logo, designing educational materials, and developing a website to increase community engagement and support for campus gardening activities.',
    heroImage: LoboGardensImage,
    logo: {
      image: LoboGardensLogo,
      color: '#010101'
    }
  }
}

export default Projects
