import {links} from '../../src/constants'
import {NavLink} from 'react-router-dom'
const Sidebar = () => {
  return (
    <aside className='flex flex-col h-screen justify-between items-center md:px-3 py-3 max-md:gap-20 max-md:justify-normal'>
        <img src="/r_logo.jpg" alt="logo" className='max-w-[80px] md:max-w-[150px]' />

        <nav className='flex flex-col gap-20'>
            {
              links.map((i,index) =>(
                <NavLink key={index} className='flex gap-4 items-center text-lg text-gray-400' to={i.path}>
                  <span className='max-md:text-2xl'>{i.icon}</span>
                  <span className='max-md:hidden'>{i.title}</span>
                </NavLink>
              ))
            }
        </nav>

        <div className='flex flex-col gap-2 max-md:hidden'>
          <p className='font-semibold '>Günlük Haberleri Al</p>
          <button className='bg-red-500 rounded-lg text-white hover:bg-red-400 p-2'>Abone Ol</button>
        </div>
    </aside>
  )
}

export default Sidebar