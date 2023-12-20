import { useState   } from "react"
import {MdMenu , MdClose} from "react-icons/md"

function Nav(props ) {

  const [nav, setNav]=useState(false)
  
  const toggleMenu = () => {
    setNav((nv) => !nv)
  }
  return(
    <div className=" relative ">
    <div  className={`bg-secondary top-0 ${nav && 'w-full lg:h-[95%] z-[4] right-0  lg:rounded-none lg:flex-col lg:w-fit'} gap-6  transition-w right-8 duration-[700]
     z-[5]   flex-row-reverse text-white flex
     items-center justify-around p-3 w-fit fixed `}>

      <button className={`${nav && 'before:w-[97%] before:lg:h-[97%]  before:absolute before:lg:w-[2px] before:h-[2px]  before:left-0 before:bottom-[9px] before:pb-0 before:bg-sub' } text-[30px]  
        shadow-lg shadow-white/[0.13]
        bg-primary md:text-lg z-[88]`} onClick={toggleMenu}>{!nav?<MdMenu />:<MdClose />}
       </button>
       { nav && 
        <ul className="flex relative grow  justify-around gap-2
         items-center lg:justify-between lg:items-start lg:flex-col
         text-sm font-mono font-normal">
        

         <li className={` relative flex flex-col-reverse lg:flex-row gap-3 before:bg-white  before:self-center   before:rounded-full before:w-2 before:h-2 `}>ABOUT </li>
        <li className={` relative flex flex-col-reverse lg:flex-row gap-3 before:bg-white  before:self-center   before:rounded-full before:w-2 before:h-2 `}>PROJECTS</li>
        <li className={` relative flex flex-col-reverse lg:flex-row gap-3 before:bg-white  before:self-center   before:rounded-full before:w-2 before:h-2 `}>SKILLS</li>                                 
        <li className={` relative flex flex-col-reverse lg:flex-row gap-3 before:bg-white  before:self-center   before:rounded-full before:w-2 before:h-2 `}>CONTACT</li> 
    </ul>}
    </div>
    </div>

  )
}

export default Nav
