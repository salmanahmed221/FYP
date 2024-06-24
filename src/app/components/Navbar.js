import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
  

const Navbar = () => {
  return (
    <div>
      <header className=" body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image width={50} height={50} src={'/logo.svg'} ></Image>
      <span className="ml-3 text-xl text-red-700 font-extrabold">IT Institute.</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
      <Link href={"/"} className="mr-5 hover:text-red-700">HOME</Link>
      <Link href={"/about"} className="mr-5 hover:text-red-700">ABOUT</Link>
      <Link href={"/courses"} className="mr-5 hover:text-red-700">COURSES</Link>
      <Link href={"/contact"} className="mr-5 hover:text-red-700">CONTACT</Link>
     <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn className='bg-red-700 p-2 rounded-lg '>
          <UserButton />
        </SignedIn>
    </nav>
    
  </div>
</header>
    </div>
  )
}

export default Navbar
