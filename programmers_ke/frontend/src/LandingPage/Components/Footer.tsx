import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="h-auto rounded-t-md w-full z-50
                    bg-gradient-to-tr from-primary via-black to-secondary">
      <div className="bg-slate-900 bg-opacity-80
                        h-full rounded-t-md grid grid-flow-col">
        <section className='col-span-5 rounded-tl-md backdrop-brightness-125'>
          <div className='row-span-1'>
            <img alt='logo' src='../../../Logo.svg' width={120} className="mx-auto my-5" />
          </div>
          <Line />
          <Social />
        </section>
        <section className='grid grid-flow-row col-span-5 gap-2'>
          <div className="row-span-1">
            <h1 className='text-primary font-audiowide text-[35px] ml-[50%] pt-2
                              text-shadow-md shadow-primary'>
              {'>_'}PROGRAMMERS_KE</h1>
            <span className='text-white font-adventpro ml-[87%]'>2022</span>
          </div>
          <div className="row-span-6 grid grid-flow-col gap-3 p-4">
            <section className='row-span-2 grid grid-flow-row gap-3'>
              <div className='backdrop-blur-md
                               rounded-r-lg drop-shadow-lg
                                row-span-4 flex flex-col'>
                <h1 className='footerheader'>Tutorials</h1>
                <Line />
                <FooterLink>Getting Started</FooterLink>
                <FooterLink>Programming Arihmetic</FooterLink>
                <FooterLink>Digital Logic</FooterLink>
                <FooterLink>Low Level Programming</FooterLink>
                <FooterLink>Data Structures</FooterLink>
                <FooterLink>High Level Programming</FooterLink>
                <FooterLink>Networking</FooterLink>
              </div>
              <div className='row-span-2'>
              </div>
            </section>
            <section className='row-span-2 grid grid-flow-row gap-3'>
              <div className='backdrop-blur-md
                                rounded-r-lg drop-shadow-lg
                                row-span-5'>
                <h1 className='footerheader'>Learn</h1>
                <Line />
                <div className='flex flex-row'>
                  <div className='flex flex-col'>
                    <FooterLink>Web Development</FooterLink>
                    <FooterLink>Networking and Internet</FooterLink>
                    <FooterLink>Mobile Development</FooterLink>
                    <FooterLink>Desktop Development</FooterLink>
                    <FooterLink>Game Development</FooterLink>                    
                  </div>
                  <div className='flex flex-col'>
                    <FooterLink>Cybersecurity</FooterLink>
                    <FooterLink>Blockchain Development</FooterLink>
                    <FooterLink>Social Media</FooterLink>
                    <FooterLink>Machine Learning and AI</FooterLink>
                    <FooterLink>E-commerce</FooterLink>
                    <FooterLink>Advanced Engineering</FooterLink>
                  </div>
                </div>
              </div>
            </section>
            <section className='row-span-2 grid grid-flow-row gap-3'>
              <div className='backdrop-blur-md
                               rounded-r-lg drop-shadow-lg
                                row-span-3 flex flex-col'>
                <h1 className='footerheader'>Community</h1>
                <Line />
                <FooterLink>Our Story</FooterLink>
                <FooterLink>Work with us</FooterLink>
                <FooterLink>Feedback Hub</FooterLink>
                <FooterLink>Contact Support</FooterLink>
              </div>
              <div className='backdrop-blur-md
                               rounded-r-lg drop-shadow-lg
                                row-span-6'>
                <Link to="/online_compiler">
                  <span className='footerheader flex flex-row group'>Online Compiler
                    <img alt='link' src='../../../assets/icons/utils/link-svgrepo-com.svg'
                      className='w-4 mx-1 my-auto opacity-0 group-hover:opacity-100' />
                  </span>
                </Link>
                <Line />
              </div>
            </section>
            <section className='row-span-2 grid grid-flow-row gap-3'>
              <div className='backdrop-blur-md
                                rounded-r-lg drop-shadow-lg
                                row-span-2 flex flex-col'>
                <h1 className='footerheader'>Resources</h1>
                <Line />
                <FooterLink>The Open Source community</FooterLink>
                <FooterLink>Design Templates</FooterLink>
                <FooterLink>Infographics</FooterLink>
                <FooterLink>Books and PDFs</FooterLink>
              </div>
              <div className='backdrop-blur-md
                                 rounded-r-lg drop-shadow-lg
                                row-span-4 flex flex-col'>
                <h1 className='footerheader'>Other Projects</h1>
                <Line />
                <FooterLink>Hadron-IDE
                  <img alt='link' src='../../../assets/icons/utils/link-svgrepo-com.svg'
                    className='w-3 mx-3 my-auto opacity-0 group-hover:opacity-100' />
                </FooterLink>
              </div>
            </section>
          </div>
          <div className="row-span-3 p-3 w-full">
            <div className='flex flex-row items-start'>
              <button className='rounded-md p-2 ml-72 text-sm text-white font-novaflat
                                      hover:bg-white hover:text-black transition-all delay-300
                                      ring-white ring-2 flex flex-row'>
                <span>
                  English
                </span>
                <img alt='language' src='../../assets/icons/utils/en_GB.png' className='w-5 ml-2' />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


function Social() {
  return (
    <div className='flex flex-row mx-auto'>
      <img alt='socials' src="../../../assets/icons/no_color/twitternocolor-svgrepo-com.svg"
        width={24} className='py-3 mx-auto' />
      <img alt='socials' src="../../../assets/icons/color_/github-svgrepo-com.svg"
        width={24} className='py-3 mx-auto' />
      <img alt='socials' src="../../../assets/icons/no_color/linkedinnocolor-svgrepo-com.svg"
        width={24} className='py-3 mx-auto' />
      <img alt='socials' src="../../../assets/icons/no_color/slacknocolor-svgrepo-com.svg"
        width={24} className='py-3 mx-auto' />
    </div>
  )
}

const Line = () => {
  return (
    <hr className='w-3/4 mx-auto my-3 border-secondary drop-shadow-[0_0_2px_#33ffff]' />
  )
}

const FooterLink = (props: { children: React.ReactNode }) => {
  return (
    <a className='flex flex-row text-sm text-white font-adventpro ml-7 my-2 hover:text-secondary
        hover:text-shadow-sm hover:shadow-sky-blue group'>
      {props.children}
    </a>
  )
}

export default Footer