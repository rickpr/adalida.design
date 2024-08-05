import React, { useEffect } from 'react'
// @ts-expect-error We're missing a type here
import Typewriter from 'typewriter-effect/dist/core'

interface TypewriterComponent {
  component: React.ReactElement
  string: string
  typewriter?: Typewriter
}

interface SynchronizedTypewriterProps {
  string: string
  styles?: React.CSSProperties
}

const useSynchronizedTypewriter = (displayFor = 2000): ({ string, styles }: SynchronizedTypewriterProps) => JSX.Element => {
  // The "natural" delay for typing each character is 120 - 160 milliseconds
  // https://github.com/tameemsafi/typewriterjs/blob/867425e30b7087f9c5341a966f799589c58ca6d2/src/core/Typewriter.js#L553
  const maxTypingDelay = 160 // ms
  // The "natural" delay for deleting each character is 40 - 80 milliseconds
  // https://github.com/tameemsafi/typewriterjs/blob/867425e30b7087f9c5341a966f799589c58ca6d2/src/core/Typewriter.js#L551
  const maxDeletionDelay = 80 // ms
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const typewriters: TypewriterComponent[] = []

  useEffect(() => {
    // Normalize the delays based on the longest string
    const maxCharacters = Math.max(...typewriters.map(({ string }) => string.length))
    const delayAfterTyping = displayFor + maxCharacters * maxTypingDelay
    const delayAfterDeletion = displayFor + maxCharacters * maxDeletionDelay

    // Initialize this here because the ref is null until this useEffect is called
    // @ts-expect-error we are manually grabbing the ref here
    typewriters.forEach(object => { object.typewriter = new Typewriter(object.component.ref.current) })

    // The following rule conflicts with no-undef-init, it's not possible to satisfy both
    // eslint-disable-next-line @typescript-eslint/init-declarations
    let timeout: NodeJS.Timeout | undefined
    const typeCharacters = (): void => {
      typewriters.forEach(({ string, typewriter }) => typewriter.typeString(string).start())
      timeout = setTimeout(deleteCharacters, delayAfterTyping)
    }
    const deleteCharacters = (): void => {
      typewriters.forEach(({ typewriter }) => typewriter.deleteAll().start())
      timeout = setTimeout(typeCharacters, delayAfterDeletion)
    }

    typeCharacters()
    return () => { clearTimeout(timeout) }
  }, [displayFor, typewriters])

  const SynchronizedTypewriter = ({ string, styles }: SynchronizedTypewriterProps): JSX.Element => {
    const component = <div key={string} ref={React.createRef()} style={{ whiteSpace: 'nowrap', ...styles }} />
    typewriters.push({ component, string })
    return component
  }
  return SynchronizedTypewriter
}

export default useSynchronizedTypewriter
