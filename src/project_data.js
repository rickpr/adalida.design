import GainTainPhoto from 'images/gaintain/cover.png'
import PhronesisPhoto from 'images/phronesis/cover.png'
import ZarasCleaningPhoto from 'images/zaras_cleaning/cover.jpg'
import ZenoPhoto from 'images/zeno/cover.png'

const Projects = {
  Phronesis: {
    name: 'Phronesis',
    description: 'We enable users with the power to visual and understand your data in order to grow your business.',
    projectPage: '/adalida/projects/phronesis',
    coverPhoto: PhronesisPhoto,
    heroPhotoPath: 'images/phronesis/cover.png',
    roles: [
      'Visual Identity',
      'User Interaction'
    ],

    colors: {
      primary: '#F8F8F8',
      background: '#212025'
    }
  },
  GainTain: {
    name: 'GainTain',
    description: 'Designed specifically for fitness enthusiasts who want to track their workout data extensively.',
    projectPage: '/adalida/projects/gaintain',
    coverPhoto: GainTainPhoto,
    heroPhotoPath: 'images/gaintain/title.png',
    roles: [
      'Product Design',
      'User Research'
    ],

    colors: {
      primary: '#F8473D',
      background: 'linear-gradient(#F8473D, #E83161)'
    }
  },
  ZarasCleaning: {
    name: "Zara's Cleaning",
    description: 'Albuquerque Professional Cleaners',
    projectPage: '/adalida/projects/zaras_cleaning',
    coverPhoto: ZarasCleaningPhoto,
    heroPhotoPath: 'images/zaras_cleaning/title.png',
    roles: [
      'User Interface',
      'Design Systems'
    ],

    colors: {
      primary: '#3A977A',
      background: 'linear-gradient(to bottom right, #3A977A, #9EE7D3)'
    }
  },
  Zeno: {
    name: 'Zeno',
    description: 'Fashion E-commerce Design',
    projectPage: '/adalida/projects/zeno',
    coverPhoto: ZenoPhoto,
    heroPhotoPath: 'images/zeno/title.png',
    roles: [
      'User Interface',
      'Design Systems'
    ],

    colors: {
      primary: '#ED6112',
      background: 'linear-gradient(to right, #ED6112, #F68733)'
    }
  }
}

export default Projects
