'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'next/navigation'
import UserNavigation from '@/app/components/UserNavigation'
import Link from 'next/link'
import CaldendarComponent from '@/app/components/CaldendarComponent'
import { bookingAction } from '@/app/serverActions/bookingAction'

const DynamicProduct = () => {
    const [record,setRecord] = useState("")
    const [selectedDates,setSelectedDates] = useState(null)
    const params = useParams()
    const {id} = params
    console.log("dynamic id",id)

    const DynamicProductHandler = useCallback(async () => {
      const resp = await fetch(`http://localhost:3000/api/admin/product/${id}`);
      const newData = await resp.json();
      console.log("dynamic data", newData);
      setRecord(newData.data);
  }, [id]); 

  useEffect(() => {
      DynamicProductHandler();
  }, [DynamicProductHandler]);

    const BookingHandler = async () => {
      if(!selectedDates) {
        alert("please select booking dates")
        return
      }

     const bookingDetails = {
      record,selectedDates
     }
      try {
        const resp = await bookingAction(bookingDetails)
        if(resp.success){
          alert("booking successful")
        }
      }
      catch(e){

      }
    }
    const handleDateSelect = async (dates) => {
     
      setSelectedDates(dates)
      console.log("dates coming from calendar are",dates)
    }
  return (
    <div>
        <UserNavigation/>
        <CaldendarComponent onDatesSelect={handleDateSelect} />
        <Link href="/">
        <p align="center">Go Back</p>
        </Link>
        
       {record? 
         (<div className="">
            <div className="singleSection">
            <div className="singleLeft">
              <div className="">
               <h2>{record.title}</h2>
              </div>
              <img src={record.image} alt={record.title} className="singleImage"/>
              </div>
              <div className="singleCenter">
               <div className="singlePrice">Rs.{record.price}</div>
               <p className="singleDesc">{record.desc}</p>
               <div className="">
                   {record.amen.map((item, i)=>{
                       return(
                           <div className="singleAmen"  key={i}>
                              <span>*</span> {item}
                           </div>
                       )
                   })}
               </div>
               <div className="offer">
               <span>*</span>
                  <button>  Discount {record.offer}</button>
               </div>
               <div className="singleBtn">
                   <button className="" onClick={BookingHandler}>Book Now</button>
               </div>
              </div>
            </div>

           </div>)
        :<h1 style={{position:'absolute', top:'50%', left:'50%'}}>   
         {/* <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /> */}
        </h1>}
</div>
  )
   
  
}

export default DynamicProduct