import React, { useEffect, useState } from 'react'
import { Sidebar } from 'flowbite-react'
import { AiFillHome, AiOutlineFileText } from 'react-icons/ai/index'
import { TbMessages } from 'react-icons/tb/index'
import { MdOutlinePersonOutline } from 'react-icons/md/index'
import {IoHelpCircleOutline} from 'react-icons/io5/index'
import {FiLogOut} from 'react-icons/fi/index'
import * as CONSTANTS from '../constants';
import { isLoggedIn } from 'stores/authStore'
import { Cookies } from 'react-cookie'


type SideNavProp = {
    activeMenu: string
}

function SideNav({activeMenu}: SideNavProp) {
    const [activeTab, setActiveTab] = useState(activeMenu)

    const renderIcon = (iconName: any, title: string) => {
        const icons: any = {
            "AiFillHome": AiFillHome,
            "AiOutlineFileText": AiOutlineFileText,
            "TbMessages": TbMessages,
            "MdOutlinePersonOutline": MdOutlinePersonOutline
        }
        const IconComponent = icons[iconName]
        return <IconComponent  className={`text-xl ${activeTab.toLowerCase() === title.toLowerCase() ? ' text-blue-500' : ''}`} />
    }

    const logout = () => {
        const cookies = new Cookies();
        cookies.remove('session', { path: '/' });
        isLoggedIn.set(false)
    }

    return (
        <>
            <Sidebar className='z-0 absolute	h-screen pt-24 border-r-2 border-slate-200 !w-32' aria-label="Default sidebar example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup  >

                        {CONSTANTS.SIDEMENU.map(data => {
                            return (
                                <Sidebar.Item
                                    href={`/${data.title.toLowerCase()}/`}
                                    className={`flex flex-col h-20 pt-4 justify-center hover:bg-sky-100 ${activeTab.toLowerCase() === data.title.toLowerCase() ? 'bg-sky-100' : ''}`}
                                    id={data.title.toLowerCase()}
                                    key={data.title}
                                >
                                    <div className='flex flex-col items-center '>
                                        <div className={`p-2.5 rounded-full ${activeTab.toLowerCase() === data.title.toLowerCase() ? ' bg-white' : 'bg-gray-200	'}  `}>
                                            {/* <AiFillHome className={`text-xl ${activeTab.toLowerCase() === data.title.toLowerCase() ? ' text-blue-500' : ''}`} /> */}
                                            {renderIcon(data.icon, data.title)}
                                        </div>
                                        <span className='text-sm pt-1'>{data.title}</span>
                                    </div>
                                </Sidebar.Item>
                            )
                        })}


                    </Sidebar.ItemGroup>
                </Sidebar.Items>
                <div className='flex flex-col items-center justify-center absolute bottom-24 left-0 right-0'>
                    <IoHelpCircleOutline className='text-2xl cursor-pointer' />
                    <FiLogOut onClick={() =>  logout()} className='text-xl mt-6 hover:text-red-500 cursor-pointer' />

                </div>
            </Sidebar>
        </>
    )
}

export default SideNav