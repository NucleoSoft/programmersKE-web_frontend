import { AiOutlineCode } from 'react-icons/ai'
import { BsPeopleFill, BsNewspaper } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { RiChatQuoteLine } from 'react-icons/ri'

const NavBar = () =>
{
    return(
      <div className="fixed h-auto w-3/4 top-0 left-0 mt-5
                      flex flex-row justify-evenly">
          <NavItem icon={<FaRegLightbulb size="20"/>} />
          <NavItem icon={<BsPeopleFill size="20"/>} />
          <NavItem icon={<HiOutlineDesktopComputer size="20"/>} />
          <NavItem icon={<RiChatQuoteLine size="20"/>} />
          <NavItem icon={<BsNewspaper size="20"/>} />
          <NavItem icon={<AiOutlineCode size="20" />} />
      </div>
    )
}

const NavItem = ({icon}) =>{
  return (
  <div className="navItem">
    {icon}
  </div>
  )
}

export default NavBar;