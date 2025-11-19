
import React from 'react'
import ReactQueryProvider from './QueryProvider'
import Timeline from '@/components/Timeline'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const WrapperClient = ({children}) => {
  return (
    <ReactQueryProvider>
            <Timeline />
            <Navbar />
            {children}
            <Footer />
        </ReactQueryProvider>
  )
}

export default WrapperClient