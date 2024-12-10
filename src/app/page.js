import React from 'react'
import dbconn from './utils/config/db'
import { auth } from './auth'
import { redirect } from 'next/navigation'
import UserNavigation from './components/UserNavigation'
import Adminpage from './admin/page'
import ProductCollection from './components/productCollection'

const HomePage = async () => {

  await dbconn()
  
    const session = await auth()
    if(!session) {
      redirect("/login")
    }
    const username = session.username
    console.log("usercheck",username)
  return (
    <div>
    {session.role === 'user' &&  (
        <>
        <UserNavigation username = {username}/>
        <h1>Welcome to Holiday Resort</h1>
        <ProductCollection />
        
        
        </>
      ) }
      {session.role === 'admin' &&
        <Adminpage /> 
    }
    </div>
  )
}

export default HomePage