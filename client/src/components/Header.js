import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between '>
        <Link href="/" className='text-red-600 font-semibold text-2xl font-mono'>
        ST PIZZA
        </Link>
        <nav className='flex items-center gap-8 text-gray-500 font-semibold'>
            <Link href="#">Home</Link>
            <Link href="#">Menu</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#" className='bg-red-600 text-white px-6 py-2 rounded-full'>Login</Link>
            

        </nav>
    </header>
  )
}

export default Header