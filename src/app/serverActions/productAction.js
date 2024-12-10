'use server'

import dbconn from "../utils/config/db"

export async function productAction(records){

    await dbconn()

    console.log(records)

}