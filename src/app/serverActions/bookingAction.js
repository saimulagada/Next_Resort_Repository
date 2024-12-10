"use server";

import { auth } from "../auth";
import dbconn from "../utils/config/db";
import userModel from "../utils/models/User";
import BookingModel from "../utils/models/Bookings";

export async function bookingAction(bookingDetails) {
    await dbconn()

    const session = await auth();

    console.log("user email:", session.email);

    try {
        const user = await userModel.findOne({ email: session.email });

        if (!user) {
            return { success: false, message: 'User not found' };
        }

        const userId = user._id.toString();

        console.log("booking check:", bookingDetails)

        const userBookingDetails = await BookingModel.create({
            startDate: bookingDetails.selectedDates.startDate,
            endDate: bookingDetails.selectedDates.endDate,
            productName: bookingDetails.record.title,
            price: bookingDetails.record.price,
            offer: bookingDetails.record.offer,
            image: bookingDetails.record.image
        });

        await userModel.findByIdAndUpdate(
            userId,
            { $push: { bookings: userBookingDetails._id } },
            { new: true }
        );

        return { success: true };
    } catch (error) {
        console.error('Error creating booking:', error);
        return { success: false, message: 'Failed to create booking' };
    }
}