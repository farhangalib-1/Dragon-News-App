import React from 'react'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import LatestNews from '@/components/LatestNews';
const layout = ({children}) => {
  return (
    <>
     <Header />
     <LatestNews/>
    <Navbar />
      {children}
    </>
  )
}

export default layout