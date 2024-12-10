import mongoose from "mongoose";

const dbconn = async () => {

    try {
        await mongoose.connect(process.env.mongo_url)
        console.log("connected to db successfully")
    }
    catch(e) {
        console.log("error connectiong to db",e)
    }

}
export default dbconn;