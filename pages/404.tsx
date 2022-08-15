import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useEffect } from "react";
import { useRouter } from "next/router"

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
      setTimeout( () => {
          router.push("/");
      }, 5000)
  }, [])



  return (
    <div className='errorContent'>
      <Image src='/images/error-404.jpg' width={960} height={650} alt='error-page'/>
      <h1>Page Not Found🥲: 404</h1>
      <p >Go back to the: <Link href="/"><a className="text">Homepage</a></Link></p>
    </div>
  )
}


export default NotFound