import React from 'react'
import Activity from './Activity'
import Explore from './Explore'
import Learning from './Learning'

function StartContent() {
  return (
      <div className="grid grid-flow-col w-full mt-24 p-3 h-full gap-2">
         <Learning/>
         <Explore/>
         <Activity/>
      </div>
  )
}

export default StartContent