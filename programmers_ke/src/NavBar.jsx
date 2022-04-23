import { VscTerminalPowershell } from 'react-icons/vsc'
import { BsPeopleFill, BsNewspaper } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { RiChatQuoteLine } from 'react-icons/ri'

import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom'
import OnlineCompiler from './OnlineCompiler/OnlineCompiler'
import ErrorPage from './Error/404Page'

const NavBar = () =>
{
    return(
     
          <div className="fixed h-auto w-full top-0 left-0 mt-3
                          flex">
            <BrowserRouter>
          <nav className="h-auto w-2/3
                          flex flex-row justify-evenly">
              <NavItem icon={<FaRegLightbulb size="20"/>} />
              <NavItem icon={<BsPeopleFill size="20"/>} />
              <NavItem icon={<HiOutlineDesktopComputer size="20"/>} />
              <NavItem icon={<RiChatQuoteLine size="20"/>} />
              <NavItem icon={<BsNewspaper size="20"/>} />

              <Link target="_blank" to="/online_compiler">
                  <NavItem icon={<VscTerminalPowershell size="20" />} />
              </Link>
          </nav>

              <Routes>
                <Route path="/online_compiler" element={<OnlineCompiler />}/>
                {/* <Route path='/*' element={<ErrorPage />} /> */}
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