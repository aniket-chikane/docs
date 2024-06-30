import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);

    const data = [{
        desc : "hii, this is first card",
        filesize : "0.9mb",
        close : false,
        tag: {isOpen :true,tagTitle:"Download now ",tagColor : "green"},


    },
    {
        desc : "second card",
        filesize : "0 mb",
        close : true,
        tag: {isOpen :true,tagTitle:"Upload",tagColor : "blue"},


    },
    {
        desc : "third card",
        filesize : "0.9mb",
        close : false,
        tag: {isOpen :true,tagTitle:"Download now ...",tagColor : "green"},


    },];
    
    useState()
  return (
    <div ref={ref} className='w-full h-full top-0 left-0 fixed z[3] flex gap-5 flex-wrap p-5'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref} />
        ))}


        </div>
  )
}

export default Foreground