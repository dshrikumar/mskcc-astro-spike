import React from 'react'
import { Button, Navbar } from 'flowbite-react'
import AssetAccessor from 'utils/AssetAccessor'
import { isLoggedIn } from 'stores/authStore'
import { Cookies } from 'react-cookie'

function Nav() {

    const cookies = new Cookies();
    const loginIn = () => {
        cookies.set('session', '89aus9d8us9daud9UD98snaud9a8sduasnd', { path: '/', maxAge: 300, secure: true });
        isLoggedIn.set(true)
    }

    return (
        <>
            <Navbar
                fluid={true}
                className=' h-20 shadow-lg z-30 absolute w-full'
            >
                <Navbar.Brand href="#">
                    <img
                        src={AssetAccessor.mskcc_Logo}
                        className="mr-3 h-6 sm:h-9 pl-8"
                        alt="Flowbite Logo"
                    />
                </Navbar.Brand>
                <div className="flex md:order-2 pr-8 items-center">
                    <Button className='mr-5' size={'sm'} onClick={loginIn}>Login</Button>

                    <img src={AssetAccessor.CTA} />
                </div>
            </Navbar>
        </>
    )
}

export default Nav