import React from 'react'
import '../styles/home/main.css'
import { LiaBullseyeSolid } from "react-icons/lia";
import { MdCallMissedOutgoing } from "react-icons/md";
import { BsBoundingBox } from "react-icons/bs";
import { BsBox2 } from "react-icons/bs";
import { BsBricks } from "react-icons/bs";
import { BsBuildingFillAdd } from "react-icons/bs";
import { MdEngineering } from "react-icons/md";
import { SiGoogleearthengine } from "react-icons/si";


export default function main() {
  return (
    <div className=' py-8 w-full flex flex-col justify-center items-center'>
        <div className=' main-sec flex flex-col gap-4 items-center '>
            <h1 className='text-black mt-4 mb-4 font-bold text-2xl'>About Us</h1>
            <div className='line bg-yellow-600'></div>
            <p className='text-slate-500 font-mono flex justify-center items-center text-center'>
Rise Force Technical Services LLC was established in the year 2015 being a construction service provider. Our primary goal focuses mainly on providing the firms and individuals with various services related to the maintenance, design, and construction. Since its establishment :integral within our company are two abilities: to deliver products and services according to the tested methods and meeting challenges with effective engineered solutions.</p>
<div className='icons flex flex-row justify-around items-center mt-16 mb-4' id='icons'>
    <div className='each-icon flex flex-col justify-center items-center gap-4'>
        <h1 className=' text-yellow-600 text-6xl '><LiaBullseyeSolid /></h1>
        <h2 className=' text-2xl font-bold text-orange-400 '>Vision</h2>
        <p className='text-lg text-slate-700 flex text-center'>To be world's leading and trusted construction service provider that renders excellent services while developing leadership</p>
    </div>
    <div className='each-icon flex flex-col justify-center items-center gap-4'>
        <h1 className=' text-yellow-600 text-6xl '><MdCallMissedOutgoing /></h1>
        <h2 className=' text-2xl font-bold text-orange-400 '>Mission</h2>
        <p className='text-lg text-slate-700 flex text-center'> To create a brand of choice by timely and superior quality
</p>
    </div>
</div>

        </div>
    </div>
  )
}
