'use client'
import React, {useState} from 'react'
import { registerAction } from '../serverActions/registerAction'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const RegisterForm = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const router = useRouter()

    const registerDetails = async (e) => {
        e.preventDefault();
        const data = {username,email,password}
        console.log(data)

        try {
            const resp = await registerAction(data)
            if(resp.success){
                alert("registered success")
                router.push("/login")
                
            }
        } catch (error) {
            console.log("error occured in register",error)
            
        }

    }
  return (
    <div className='formContainer '>
        <h1>Registration Form</h1>
        <form onSubmit={registerDetails} className="formSection">
            <h3>Username</h3>
            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}></input>
            <h3>Email</h3>
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}></input>
            <h3>Password</h3>
            <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}></input>
            <br></br>
            <button type='submit'>Register</button>
        </form>
        <Link href="/login">
        Already registered? Login Here
        </Link>
    </div>
  )
}

export default RegisterForm