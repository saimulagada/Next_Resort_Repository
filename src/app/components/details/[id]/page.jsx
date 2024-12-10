'use client'

import React from 'react'
import { useParams } from 'next/navigation'

const DynamicProduct = () => {

    const params = useParams()
    const {id} = params
    console.log("dynamic id",id)
  return (
    <div>
        <h1>Dynamic Product</h1>
    </div>
  )
}

export default DynamicProduct