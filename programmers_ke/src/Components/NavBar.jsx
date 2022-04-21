import { VscTerminalPowershell } from 'react-icons/vsc'
import { BsPeopleFill, BsNewspaper } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { RiChatQuoteLine } from 'react-icons/ri'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import OnlineCompiler from '../OnlineCompiler/OnlineCompiler'

const NavBar = () =>
{
    return(
     
          <div className="fixed h-auto w-3/4 top-0 left-0 mt-5
                          flex flex-row">
            <BrowserRouter>
            <nav>
              <NavItem icon={<FaRegLightbulb size="20"/>} />
              <NavItem icon={<BsPeopleFill size="20"/>} />
              <NavItem icon={<HiOutlineDesktopComputer size="20"/>} />
              <NavItem icon={<RiChatQuoteLine size="20"/>} />
              <NavItem icon={<BsNewspaper size="20"/>} />

              <Link to="/online_compiler">
                  <NavItem icon={<VscTerminalPowershell size="20" />} />
              </Link>
            </nav>

              <Routes>
                <Route path="/online_compiler" element={<OnlineCompiler />}/>
              </Routes>
            </BrowserRouter>
          </div>
      
    )
}

const NavItem = ({icon}) =>{
  return (
  <button className="navItem">
    {icon}
  </button>
  )
}

export default NavBar;