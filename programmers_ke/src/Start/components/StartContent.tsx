import React from 'react'
import Activity from './Activity'
import Explore from './Explore'
import Learning from './Learning'

function StartContent() {
  return (
      <div className="grid grid-flow-col w-full mt-24 p-3 h-4/5 gap-3">
         <Learning/>
         <Explore/>
         <Activity/>
      </div>
  )
}

export default StartContent