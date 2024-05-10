import React from 'react'
import { FaCircleDollarToSlot } from "react-icons/fa6";
import '../styles/home/links.css'
import { FaArrowRight } from "react-icons/fa";
import { CgMediaPodcast } from "react-icons/cg";
import { SiCoinmarketcap } from "react-icons/si";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";

import { MdHealthAndSafety } from "react-icons/md";
import { MdBiotech } from "react-icons/md";
import { AiOutlineInsurance } from "react-icons/ai";
import { GiMaterialsScience } from "react-icons/gi";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { MdOutlinePublicOff } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa6";


export default function links() {
  return (
    <div className='main-links-div flex mt-4 bg-white w-full justify-center items-center mb-4'>
        <div className=' w-11/12 flex flex-col'>
            <div className='flex w-full'>
                <h1 className=' text-black text-4xl ml-4 font-sans'>Select your industry. Discover our impact.</h1>
            </div>
            <div className='main-links-data flex flex-col items-center mt-8'>
                <div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><FaCircleDollarToSlot /></h2> Organizational Chart</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><CgMediaPodcast /></h2>List of Man Power</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div>
                <div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><SiCoinmarketcap /></h2> HSE policy</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><PiShoppingCartSimpleDuotone /></h2>Waterproofing</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div><div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><PiStudentBold /></h2> Epoxy Coating</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><GiMaterialsScience /></h2> Painting Works</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div><div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><MdHealthAndSafety /></h2> Civil Works</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><MdBiotech /></h2>Maintenance Works</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div><div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><AiOutlineInsurance /></h2> Plumbing-mechanical &HVAC</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><GiMaterialsScience /></h2>Electrical Work</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div><div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><MdOutlinePrecisionManufacturing /></h2> ISO 9001</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><MdOutlinePublicOff /></h2>ISO 14001</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div>
                <div className='links-arrow'>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><PiShoppingCartSimpleDuotone /></h2> ISO 45001</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                <h1 className='flex flex-row py-4 text-2xl'>
                    <a href="" className='flex flex-row items-center gap-4'><h2 className=' text-4xl flex justify-start items-center text-center text-blue-400'><FaPlaneDeparture /></h2> Applicator Certificate</a>
                    <a href=""><FaArrowRight /></a>
                </h1>
                </div>
                
            </div>
        </div>
    </div>
  )
}
