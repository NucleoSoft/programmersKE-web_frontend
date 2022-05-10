import React from 'react'
import { BsCode, BsInfoCircle, BsSliders } from 'react-icons/bs'
import { RiHome2Line } from 'react-icons/ri'
import { SiFeedly } from 'react-icons/si'

function SideTab() {
  return (
    <div className='bg-transparent fixed rounded-r-lg w-10 h-auto my-[10%] left-0'>
          <SideTabIcon icon={<RiHome2Line size='20'/>}/>
          <SideTabIcon icon={<BsInfoCircle size='20' />} />
          <SideTabIcon icon={<BsSliders size='18' />} />
          <SideTabIcon icon={<SiFeedly size='20' />} />
          <SideTabIcon icon={<BsCode size='24' />} />
    </div>
  )
}

const SideTabIcon = ({icon}) => {
  return (
    <button className='SideTabIcon'>
        {icon}
    </button>
  )
}

export default SideTab