import RegisterForm from '@/app/components/RegisterForm'
import React from 'react'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const userRegistration = async () => {
  
    return(
        <div>
            <RegisterForm/>
        </div>
    )
   
}

export default userRegistration