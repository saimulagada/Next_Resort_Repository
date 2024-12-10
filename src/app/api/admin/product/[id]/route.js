import dbconn from "@/app/utils/config/db";
import ProductModel from "@/app/utils/models/Product";
import { NextResponse } from "next/server";




export async function GET(request,{params}){
    await dbconn()
    const {id} = params
    console.log("dynamic id",id)

    try {
        if(!id) {
            return NextResponse.json({success:false,msg:"no product found"},{status:404})
        }
        const product = await ProductModel.findById(id)
        return NextResponse.json({success:true,data:product},{status:201})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({success:false,message:"no product found"})
        
    }
}