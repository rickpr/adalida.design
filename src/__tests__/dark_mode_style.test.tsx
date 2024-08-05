import darkModeStyle from '../dark_mode_style'

describe('darkModeStyle', () => {
  describe('background', () => {
    it('gives the dark background when it is dark mode', () => {
      const { background } = darkModeStyle(true)
      expect(background).toEqual('#000000')
    })
    it('gives the light background when it is light mode', () => {
      const { background } = darkModeStyle(false)
      expect(background).toEqual('#FFFFFF')
    })
  })
})
