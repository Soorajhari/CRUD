import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const DashboardFront = () => {
  return (
   <>
    <Header />
      <div id="" className="w-auto h-screen flex items-center justify-center" >
        <div className="flex flex-col border rounded-lg p-5 shadow items-center w-[600px]">
          <span className="text-2xl font-bold mb-2">USER DETAILS </span>
          <Link to={'/users'}><button className="border p-1 px-4 rounded-md bg-blue-500 hover:bg-blue-700 text-white">users</button></Link>
        </div>
      </div>
      <Footer />
   </>
  )
}

export default DashboardFront