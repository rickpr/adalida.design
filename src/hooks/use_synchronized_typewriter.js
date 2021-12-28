import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect/dist/core'

export default (displayFor = 2000) => {
  // The "natural" delay for typing each character is 120 - 160 milliseconds
  // https://github.com/tameemsafi/typewriterjs/blob/867425e30b7087f9c5341a966f799589c58ca6d2/src/core/Typewriter.js#L553
  const maxTypingDelay = 160 // ms
  // The "natural" delay for deleting each character is 40 - 80 milliseconds
  // https://github.com/tameemsafi/typewriterjs/blob/867425e30b7087f9c5341a966f799589c58ca6d2/src/core/Typewriter.js#L551
  const maxDeletionDelay = 80 // ms
  const typewriters = []
  useEffect(() => {
    // Normalize the delays based on the longest string
    const maxCharacters = Math.max(...typewriters.map(({ string }) => string.length))
    const delayAfterTyping = displayFor + maxCharacters * maxTypingDelay
    const delayAfterDeletion = displayFor + maxCharacters * maxDeletionDelay

    // Initialize this here because the ref is null until this useEffect is called
    typewriters.forEach(object => { object.typewriter = new Typewriter(object.component.ref.current) })

    let timeout = null
    function typeCharacters () {
      typewriters.forEach(({ string, typewriter }) => { typewriter.typeString(string).start() })
      timeout = setTimeout(deleteCharacters, delayAfterTyping)
    }
    function deleteCharacters () {
      typewriters.forEach(({ typewriter }) => { typewriter.deleteAll().start() })
      timeout = setTimeout(typeCharacters, delayAfterDeletion)
    }

    typeCharacters()
    return () => clearTimeout(timeout)
  }, [typewriters])

  return ({ string }) => {
    const component = <div key={string} ref={React.createRef()} style={{ whiteSpace: 'nowrap' }} />
    typewriters.push({ component, string })
    return component
  }
}
