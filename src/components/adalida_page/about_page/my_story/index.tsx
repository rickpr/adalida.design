import { Link } from 'gatsby'
import React, { useContext } from 'react'

import { makeMediaTag } from 'components/adalida_page/media_with_text'
import useIsMobile from 'hooks/use_is_mobile'
import useDarkModeStyle from 'hooks/use_dark_mode_style'
import { ThemeContext } from 'theme_context'

import RowPair from './row_pair'
import Quad from './quad'

const AdalidaFace = 'images/about/adalida_face.webp'
const BacaFamily = 'images/about/baca_family.webp'
const Balcony = 'images/about/balcony.webp'
const Gym = 'images/about/gym.webp'
const MuscleBeach = 'images/about/muscle_beach.webp'
const Portland = 'images/about/portland.webp'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '1dvh',
    transition: 'background-color 0.5s ease-in-out',
    fontFamily: 'Work Sans, sans-serif',
    width: '100%',
    maxWidth: '950px',
    gap: '2em'
  },
  myStory: {
    fontSize: '1em',
    fontWeight: 600,
    display: 'flex',
    gap: '25px',
    color: '#8C8F92',
    alignItems: 'center',
    width: '100%'
  },
  myStoryLine: {
    minWidth: '100px',
    border: '1.5px solid white',
    borderRadius: '5px',
    height: 0
  },
  header: {
    fontSize: '2em',
    fontWeight: 600
  },
  photo: {
    width: '100%',
    height: '100%',
    padding: '10px',
    borderRadius: '18px',
    background: 'linear-gradient(159deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.10) 100.06%)'
  },
  paragraphHeading: {
    fontSize: '1.25em',
    fontWeight: 700,
    marginBottom: '1em'
  },
  paragraph: {
    fontSize: '0.875em',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1em'
  }
}

const imageTag = (media: string): JSX.Element => (
  <div style={styles.photo}>
    {makeMediaTag({ media, style: { width: '100%', borderRadius: '8px' } })}
  </div>
)

const MyStory = (): JSX.Element => {
  const { darkMode } = useContext(ThemeContext)
  const { text: color } = useDarkModeStyle(darkMode)
  const isMobile = useIsMobile() === true

  return (
    <div style={{ ...styles.container, color }}>
      <div style={styles.myStory}>
        <div>My Story</div>
        <div style={styles.myStoryLine}></div>
      </div>
      <div style={styles.header}>
        I&apos;m passionate about people. I want to hear their stories and learn.
      </div>
      <RowPair isMobile={isMobile}>
        {imageTag(BacaFamily)}
        <div>
          <div style={styles.paragraphHeading}>New Mexico Grown</div>
          <div style={styles.paragraph}>
            <div>
              I&apos;m New Mexican grown with a large family spanning across
              Northern and Southern New Mexico. My grandma and her 18 brothers
              and sisters originated in La Jara, New Mexico where our
              <i>Maestas family</i> received the Del Nacimento Land Grant.
            </div>
            <div>
              My mom raised my siblings and I in the South Valley one block down
              from the famous Los Pollos Hermanos Restaurant from Breaking Bad.
              My mother worked hard to provide for us and I carry her hard work
              and dedication in my work every day.
            </div>
            <div>
              Below is my grandpa and I. He’s my rock. We are both the
              descendants of Elfego Baca who is best known for the Frisco
              shootout in Reserve. &lsquo;In the late 1950s, Walt Disney turned
              Baca into the first Hispanic popular culture hero in the United
              States, representing him in six comic books, a feature film,
              and related merchandising.&rsquo; - Read about him&nbsp;
              <a href='https://en.wikipedia.org/wiki/Elfego_Baca' target='_blank' rel='noreferrer'>
                here.
              </a>
            </div>
          </div>
        </div>
      </RowPair>

      <RowPair isMobile={isMobile} reversed={true}>
        {imageTag(AdalidaFace)}
        <div>
          <div style={styles.paragraphHeading}>B.A. in English-Philosophy</div>
          <div style={styles.paragraph}>
            <div>
              In 2020 I graduated from the University of New Mexico with a B.A
              in English-Philosophy and a certificate in Technical and
              Professional Communication.
            </div>
            <div>
              My favorite Philosophy courses included symbolic logic, the
              history and philosophy of mathematics, and Wittgenstein.
            </div>
            <div>
              My English courses focused on technical and professional
              communication which included courses on visual rhetoric, editing,
              an internship with Project ECHO, and an independent study focused
              on designing a website promoting ecological studies at UNM.
            </div>
            My professor later contracted me to redesign the National
            Consortium of Environmental Rhetoric and Writing website, which
            launched my freelance design business. During this time, I also
            worked as a Student Program Coordinator planning events, designing
            experiences and flyers. I helped recharter and was elected
            Vice-President of the Lobo Gardens. Lastly, I was the co-winner of
            the Dale and Melinda scholarship award.
            <div>
            </div>
          </div>
        </div>
      </RowPair>
      <Quad isMobile={isMobile}>
        {imageTag(Balcony)}
        <div>
          <div style={styles.paragraphHeading}>Big Changes</div>
          <div style={styles.paragraph}>
            <div>
              During my winter, summer, fall, and spring breaks I&apos;d visit
              my long distance boyfriend (now fiancé) Ricardo in San Francisco,
              California. During this time I worked with Robert Half as an
              Administrative Assistant in a variety of offices like Samsara,
              World Economic Forum, User Testing, the Watermark, and more.
            </div>
            <div>
              During my last semester of college, Covid started. This turned out
              well for me because I was able to move out to San Francisco a
              semester early while completing my classes and internship with
              Project ECHO remotely.
            </div>
            <div>
            </div>
            <div>
              After graduation, I began learning User Experience Design through
              Google&apos;s Coursera courses, a mentor, the Interaction Design
              foundation, Hackathons, and the clientele I receive from my design
              business.
            </div>
            <div>
              As you can see in my portfolio, much of my design clientele is
              contracted from New Mexico.
            </div>
          </div>
        </div>
        {imageTag(Portland)}
        <div>
          <div style={styles.paragraphHeading}>In my spare time</div>
          <div style={styles.paragraph}>
            <div>
              I&apos;m probably designing something for Ricardo to implement via
              code. This website is a great example of our work together.
              I&apos;m a great designer, and he&apos;s an excellent coder so
              together we have a graveyard of projects. Currently, we&apos;re
              developing a mobile workout app for ourselves. Check out
              <Link to='/projects/gaintain'> Gaintain</Link>.
            </div>
            <div>
              My other time consists of the gym, traveling, exploring, costume
              creating, and playing Valorant as an Astra or Cypher main.
            </div>
            <div>
              I&apos;m a New Mexican transplanted in San Fransisco which means
              my short term goal is to have red and green New Mexico chile.
            </div>
            <div>
              My professional goals and aspirations include:
            </div>
            <div>
              <ul>
                <li>Growing my user research and design skills</li>
                <li>Becoming a product designer at a start up</li>
                <li>Excelling into product management, </li>
                <li>Founding my own startup.</li>
              </ul>
            </div>
          </div>
        </div>
      </Quad>
      <Quad isMobile={isMobile}>
        {imageTag(Gym)}
        <div>
          <div style={styles.paragraphHeading}>
            Portfolio made with lots of Yellow Red Bull and professional button
            pushing.
          </div>
        </div>
        {imageTag(MuscleBeach)}
        <div>
          <div style={styles.paragraphHeading}>
            Looking for a Designer?
          </div>
          <div style={styles.paragraph}>
            <div>
              Reach Adalida at: <a href='mailto:hi@adalida.design'>hi@adalida.design</a>
            </div>
          </div>
          <div style={styles.paragraphHeading}>
            Looking for an Engineer?
          </div>
          <div style={styles.paragraph}>
            <div>
              Reach Ricardo at: <a href='mailto:fdisk87@yahoo.com'>fdisk87@yahoo.com</a>
            </div>
          </div>
        </div>
      </Quad>
    </div>
  )
}

export default MyStory
