import React from 'react'
import Admin from '../individualcomp/Admin'
import Navbar from '../../Navbar'
import RouteBar from '../individualcomp/RouteBar'
import Footer from '../../Footer'

const AdminPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <RouteBar></RouteBar>
      <div className='flex p-10'>
      <Admin api_url={"http://localhost:5000/api/mobiles"} product={"Mobile"}></Admin>      
      <Admin api_url={"http://localhost:5000/api/footwear"} product={"Footwear"}></Admin>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AdminPage;
