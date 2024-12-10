import { auth } from '@/app/auth'
import LoginForm from '@/app/components/LoginForm'
import React from 'react'
import { redirect } from 'next/navigation'

const page = async () => {

  return (
    <div>
       
        <LoginForm />
    </div>
  )
}

export default page