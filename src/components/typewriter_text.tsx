import React, { useEffect, useState } from 'react'

const TypewriterText = ({ text }: { text: string }): React.ReactElement => {
  const [lettersRevealed, setLettersRevealed] = useState(0)

  useEffect(() => {
    if (lettersRevealed < text.length) {
      const timeout = setTimeout(
        () => { setLettersRevealed(lettersAlreadyShown => lettersAlreadyShown + 1) },
        100
      )
      return () => { clearTimeout(timeout) }
    }
  }, [lettersRevealed, text.length])

  return <>&#65279;{text.slice(0, lettersRevealed)}</>
}

export default TypewriterText
