

import BookingModel from "@/app/utils/models/Bookings";
import { NextResponse } from "next/server";
import dbconn from "@/app/utils/config/db";
import userModel from "@/app/utils/models/User";



export async function GET(request, {params}){
    await dbconn()

    const {id} = await params

    console.log("dynamic Id:", id)

    try {
            if(!id){
                return NextResponse.json({success:false, message: 'no user found'}, {status:404})
            }

            const user = await userModel.findById(id).populate('bookings')

            return NextResponse.json({success:true, data:user})

    } catch (error) {
        console.log(error)
        return NextResponse.json({success:false, message:'ID Is missing'})
    }

}

export async function DELETE(request, { params }) {
    await dbconn()

    const { id } = params;  

    try {
        if (!id) {
            return NextResponse.json({ success: false, message: "ID is missing" });
        }

        const booking = await BookingModel.findByIdAndDelete(id);

        if (!booking) {
            return NextResponse.json({ success: false, message: "Booking not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Booking deleted successfully" });

    } catch (error) {
        console.error('Error deleting booking:', error);
        return NextResponse.json({ success: false, message: "Server error", error: error.message }, { status: 500 });
    }
}