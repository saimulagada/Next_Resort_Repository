'use server'

import { signIn } from "../auth"
import dbconn from "../utils/config/db"

export async function loginAction(loginDetails){
    await dbconn()
     console.log(loginDetails)

     try {
   

        const resp = await signIn("credentials",{
            email : loginDetails.email,
            password : loginDetails.password,
            redirect : false
        })
        return {success:true}
     }
     catch(error) {
        throw new Error("Invalid Credentials")
     }

}