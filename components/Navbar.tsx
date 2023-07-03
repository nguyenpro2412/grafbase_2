import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProvider from './AuthProvider'

const Navbar = () => {
    const session = {}
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href='/'>
                <Image
                    src='./logo.svg'
                    alt='flexibble'
                    width={115}
                    height={43}
                />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
            <div className='flexCenter gap-4'>
                {session ? (
                    <>
                        userPhoto
                        <Link href='/create-project'>
                            Share Work
                        </Link>
                    </>
                ):(
                    <AuthProvider/>
                )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar