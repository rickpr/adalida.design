import React from 'react'

import HackathonsList from 'hackathons'

import Hackathon from './hackathon'

// TODO: Handle more than 5 hackathons
const firstTwoHackathons = HackathonsList.slice(0, 2)
const remainingHackathons = HackathonsList.slice(2)

const Hackathons = (): React.ReactElement => (
  <>
    <div className='hackathons odd'>
      {firstTwoHackathons.map((hackathon) => <Hackathon key={hackathon.name} hackathon={hackathon} />)}
    </div>
    <div className='hackathons even'>
      {remainingHackathons.map((hackathon) => <Hackathon key={hackathon.name} hackathon={hackathon} />)}
    </div>
  </>
)

export default Hackathons
