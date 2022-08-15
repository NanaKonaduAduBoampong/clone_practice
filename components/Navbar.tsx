import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
   <nav>
    <div className='logo'>
      <Image src='/images/logo.png' alt='logo' width={178} height={57}/>
    </div>

   <div className='nav-links'>
      <Link href="/news"><a>News</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
      <Link href="/team"><a>Team</a></Link>
   </div>
   </nav>
  
  
  )
}

export default Navbar