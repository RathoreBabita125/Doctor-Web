import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-[#DBDCC4] p-15'>
        <div className='flex justify-evenly'>
            <div className='w-[25vw] h-[50vh]'>
                <div className='ml-10'>
                    <p className='tracking-[0.2em] text-green-800 text-2xl font-bold'>AMRUTAM</p>
                    <p className='mt-3 text-green-800 text-[22px] font-semibold'>Get in touch</p>
                    <p className='text-[14px] mt-5 text-gray-700'>support@amrutam.global</p>
                    <p className='mt-2 text-gray-700'>Amrutam Pharmaceuticals Pvt. Ltd.,</p>
                    <div className='text-gray-700'>
                        <p>Chitragupt ganj, Nai Sadak, Lashkar,</p>
                        <p>Gwalior - 474001</p>
                        <p>+91 9876543210</p>
                    </div>
                </div>
            </div>
            <div className='w-[25vw] h-[50vh]'>
                <div className='ml-10'>
                    
                    <p className='text-[22px] text-green-800 font-bold'>Information</p>
                    <div className='mt-2 text-gray-700 space-y-1'>
                        <p>About Us</p>
                        <p>Get in touch</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy for Mobile App</p>
                        <p>Shipping and Return Policy</p>
                        <p>International Delivery</p>
                        <p>For Business, Hotels and Resorts</p>
                    </div>
                </div>
                
            </div>
            <div className='w-[25vw] h-[50vh]'>
                 <div className='ml-10'>                    
                    <p className='text-green-800 font-bold text-[22px]'>Follow Us</p>
                    <div className='flex mt-5 space-x-3'>
                        <i class="text-green-800 text-[26px] fa-brands fa-facebook"></i>
                        <i class="text-green-800 text-[26px] fa-brands fa-square-instagram"></i>
                        <i class="text-green-800 text-[26px] fa-brands fa-youtube"></i>
                        <i class="text-green-800 text-[26px] fa-brands fa-square-twitter"></i>
                        <i class="text-green-800 text-[26px] fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
