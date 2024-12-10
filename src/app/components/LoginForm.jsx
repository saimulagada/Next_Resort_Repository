'use client'

import React,{useState} from 'react'
import { loginAction } from '../serverActions/loginAction'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const LoginForm = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const router = useRouter()
    const [error,setError] = useState("")

    const loginDetails = async (e) => {
        e.preventDefault()

        const data = {email,password}
        console.log(data)
        try {
            const resp = await loginAction(data);
            if(resp.success){

            
            router.push("/")
            }
            else {
                setError(resp.message || "login failed")
            }
            
        }
        catch(e){
            setError(e.message)
        }

    }
  return (
    <div className='formContainer'>
        <h1>Login Form</h1>
        <form onSubmit={loginDetails} className="formSection">
            {error && <p style={{color:"red"}}>{error}</p>}
           
            <h3>Email</h3>
            <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}></input>
            <h3>Password</h3>
            <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}></input>
            <br></br>
            <button type='submit'>Login</button>
        </form>
        <Link href="/register">
          Not registered? Register Here
        </Link>
    </div>
  )
}

export default LoginForm