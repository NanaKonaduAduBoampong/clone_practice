import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar';

interface ILayoutProps {
  children: string | JSX.Element | React.ReactElement | null | React.FC | undefined
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className='content'>
      <>
        <Navbar />
        { children }
        <Footer />
      </>
    </div>
  )
}

export default Layout