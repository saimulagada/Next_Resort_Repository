'use server'

import dbconn from "../utils/config/db"
import userModel from "../utils/models/User"

export async function registerAction(registerDetails){

    console.log("registerDetails are",registerDetails)

    try {
        await dbconn()

        await userModel.create({
            username : registerDetails.username,
            email : registerDetails.email,
            password : registerDetails.password
        })
        return {success:true}
    }
    catch(e) {
        console.log("error occured in creating user record",e)
    }

}