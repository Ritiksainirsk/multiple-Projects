import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import "./StarRating.css"

function StarRating( {starRationg = 8 }) {

    const [rating,setRating] = useState(0) 
    const [hover,setHover] = useState(0)

    const starOnclick = (currentIndex)=>{
        setRating(currentIndex)
    }

    const starOnMuseEnter = (currentIndex)=>{
        setHover(currentIndex)
    }

    const starOnMuseLeave = ()=>{
        setHover(rating)
    }
  return (
    <div className='stars'>
      {
        [...Array(starRationg)].map((_,index)=>{
            index += 1

            return (
                <>
                 <FaStar 
                 className={index <= (rating || hover) ? `active` : "inactive"}
                 key={index}
                 onClick={()=>{starOnclick(index)}}
                 onMouseEnter={()=>{starOnMuseEnter(index)}}
                 onMouseLeave={()=>{starOnMuseLeave()}}
                 />
                </>
            )
        })
      }
    </div>
  )
}

export default StarRating



