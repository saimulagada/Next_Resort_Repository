import dbconn from "@/app/utils/config/db";
import userModel from "@/app/utils/models/User";
import { NextResponse } from "next/server";


export async function GET(){
    await dbconn()
    try {
        const users = await userModel.find({role:{$ne:'admin'}},{password:0})

        if(!users) {
            return NextResponse.json({success:false,message:"no user found"},{status:404})
        }
        return NextResponse.json({success:true,users},{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({sucess:false,message:"failed to get users"},{status:500})

    }
}