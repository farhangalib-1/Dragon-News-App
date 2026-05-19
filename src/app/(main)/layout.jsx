import React from 'react'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
const layout = ({children}) => {
  return (
    <>
     <Header />
        <Navbar />
      {children}
    </>
  )
}

export default layout