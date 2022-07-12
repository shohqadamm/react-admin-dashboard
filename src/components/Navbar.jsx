import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvervider'

const NavButton = ({ title, icon, customFunc, color, dotColor }) => (
	<TooltipComponent content={title} position="BottomCenter">
		<button type='button' onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
			<span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
				{icon}
		</button>
	</TooltipComponent>
)



const Navbar = () => {
	const { activeMenu, setActiveMenu, isClicked, setIsClickedi, handleClick, screenSize, setScreenSize, currentColor } = useStateContext()
	
    useEffect(() => {
      const handleResize = ()=>setScreenSize(window.innerWidth)
      window.addEventListener('resize', handleResize)
      
      return () => {
          window.removeEventListener('resize', handleResize)
      }
      handleResize()
    }, [])
    
    useEffect(() => {
      if(screenSize <= 900){
        setActiveMenu(false)
    }else{
        setActiveMenu(true)
      }
    }, [screenSize])
    
    
    return (
		<div className='flex justify-between p-2 md:mx-6 relative'>
			<NavButton customFunc={() => { setActiveMenu(prevActiveMenu => !prevActiveMenu) }} title="Menu" color={currentColor} icon={<AiOutlineMenu />} />
			<div className='flex'>
				<NavButton customFunc={() => handleClick('cart')} title="Cart" color={currentColor} icon={<FiShoppingCart />} />
				<NavButton customFunc={() => handleClick('chat')} title="Chat" dotColor='#03C9D7' color={currentColor} icon={<BsChatLeft />} />
				<NavButton customFunc={() => handleClick('notifications')} title="Notifications" dotColor='#03C9D7' color={currentColor} icon={<RiNotification3Line />} />
                <TooltipComponent position='BottomCenter' content='Profile'>
                    <div className='flax items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={()=>handleClick('userProfile')}>
                        <img src={avatar} className="rounded-full w-8 h-8"  alt="userProfile" />
                        <p>
                            <span className='text-gray-400 text-14'>Hi,</span>{' '}
                            <span className='text-gray-400 font-bold ml-1 text-14'>Michael</span>
                        </p>
                        <MdKeyboardArrowDown className='text-gray-400 text-14' />
                    </div>
                </TooltipComponent>
                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notifications && <Notification />}
                {isClicked.userProfile  && <UserProfile />}
            </div>
		</div>
	)
}

export default Navbar