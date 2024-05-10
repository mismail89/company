import { useEffect, useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import '../styles/home/navbar.css';
import { RxCross1 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { IoMdArrowDropup } from "react-icons/io";



export default function navbar() {
    const [navlinks, setnavlinks] = useState([]);
    const [dropdown, setdropdown] = useState(false)
    useEffect(() => {
        const navts = [{name: "appliance", path: '/appliances'},
        {name: "furniture", path: '/furniture'},
        {name: "electronic", path: '/electronic'},
        {name: "services", path: '/services'}
    ];
    setnavlinks(navts);
    }, [])
    const [open, setOpen] = useState(false);
    const style = {
        display: 'flex',
        height: '400px'
    }
    const menue = (e) => {
        e.preventDefault();
        setOpen(!open);
    }
    
    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
         // Navigate to the selected option
    };
    const styyle = {
        display: "flex"
    }
  return (
    <>
    <div className='top-navbar-parent bg-slate-800 text-white flex py-4'>
        <div className='top-navbar-content'>
            <div className='top-nav-cal-email-div'>
                <a href="tel:+971565239210"><p className=' text-yellow-700'><IoCall /></p> +971 56 523 9210</a>
                <a href="mailto:info@free-junkremoval.com"><p className='text-yellow-700'><MdEmail /></p> info@free-junkremoval.com</a>
            </div>
            <div className='top-nav-icons-dev'>
                <a href=""><FaFacebookSquare /></a>
                <a href=""><FaInstagramSquare /></a>
                <a href=""><FaXTwitter /></a>
                <a href=""><FaYoutube /></a>
            </div>
        </div>
    </div>
    {/* ////// start bottom navbar /////// */}
    <div className='bottom-navbar-div flex pb-3 text-white items-center justify-center bg-slate-500'>
        <div className='bottom-navbar-content'>
            <div className='bottom-nav-logo flex items-center text-center'>
                <img src="./images/logo.jpg.png" alt="" />
            </div>
            <div className='bottom-nav-links'>
                <div className='bottom-links'>
               
                    <a href="" className=' text-yellow-500'>Home</a>
                   
                    <a href="">About</a>
                   
                    <a href="" className='flex justify-center text-center' onMouseOver={(e) => {
                        e.preventDefault();
                        setdropdown(!dropdown)
                    } } id='text-center'>
                       Services {dropdown ? <IoMdArrowDropup />:<IoMdArrowDropdown /> }
                    </a>
                    
                    <a href="">Clients</a>
                    <a href="">Certificates</a>
                    <a href="">Projects</a>
                    <a href="">Contact</a>
                   
                    <a href="" id='search' className=' font-bold'><CiSearch /></a>
                    <div className='drop-down bg-slate-400' style={dropdown ? styyle: {} }>
                        
                        <a href="" onClick={()=> setdropdown(!dropdown)}>Appliances</a>
                        
                        <a href="" onClick={()=> setdropdown(!dropdown)}>Electronic</a>
                        
                        <a href="" onClick={()=> setdropdown(!dropdown)}>Furniture</a>
                       
                        <a href="" onClick={()=> setdropdown(!dropdown)}>Services</a>
                        
                    </div>

                </div>
                <div className='bottom-logos-search'>
                    <a href="" onClick={menue}>{open ? <RxCross1 /> :<RxHamburgerMenu /> }</a>
                    <a href=""><CiSearch /></a>
                </div>
            </div>
        </div>
    </div>
    {/* /////// mobile navbar ///// */}
    <div className='mb-icons  bg-slate-700 text-white' style={open ? style: {}}>
                <div className='bottom-mb-links py-15'>
                
                    <a href="" className=' py-3' onClick={()=> setOpen(!open)}>Home</a>
                   
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>About</a>
                    
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Services</a>
                    
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Furniture</a>
                    
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Electronics</a>
                    
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Appliances</a>
                    
                    <a href="" className='py-3' onClick={()=> setOpen(!open)}>Contact</a>
                    
                </div>
                </div>
    </>
  )
}
