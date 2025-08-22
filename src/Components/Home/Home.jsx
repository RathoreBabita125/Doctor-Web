import React from 'react'
import Doctor1 from '../../assets/Doctor1.png'
import Doctor2 from '../../assets/Doctor2.png'
import Doctor3 from '../../assets/Doctor3.png'
import Yoga from '../../assets/Yoga.png'
import Medicals from '../../assets/Medicals.png'
import Calender from '../../assets/Calender.png'
import Doc_Vector from '../../assets/Doc_Vector.svg'
import Feature1 from '../../assets/Feature1.png'
import Feature2 from '../../assets/Feature2.png'
import Feature3 from '../../assets/Feature3.png'
import Feature4 from '../../assets/Feature4.png'
import Feature5 from '../../assets/Feature5.png'
import Feature6 from '../../assets/Feature6.png'
import Feature7 from '../../assets/Feature7.png'
import Feature8 from '../../assets/Feature8.png'
import Feature9 from '../../assets/Feature9.png'
import vector1 from '../../assets/vector1.png'
import Person1 from '../../assets/Person1.jpg'
import Person2 from '../../assets/Person2.png'
import Person3 from '../../assets/Person3.png'
import calloutline from '../../assets/calloutline.png'
import Leaf from '../../assets/Leaf.png'
import Admin from '../../assets/Admin.png'
import Frame from '../../assets/Frame.png'



function Home() {
    return (
        <div className='w-full h-auto'>

            <div className='w-full h-auto text-center'>
                <p className='w-full text-[rgb(58,100,59)] tracking-[0.2em] text-[22px] font-bold bg-white mt-1'>AMRUTAM</p>
                <div className='w-full bg-white flex justify-center'>
                    <ul className='text-center flex outline-none text-[16px] font-semibold text-gray-500 font-serif space-x-7 mt-5'>
                        <li>About Us</li>
                        <li>Onboarding</li>
                        <li>FAQ</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
            </div>

            <div className='w-full h-[90vh] bg-gradient-to-r from-[#FFE6A5] to-transparent mt-1 flex justify-center items-center'>
                <div className='w-[90vw] h-[75vh]'>

                    <div className='flex justify-center'>
                        <div className='w-[50vw] h-[40vh] mt-20'>
                            <p className='text-gray-600 font-semibold text-[15px]'>Namaste, Welcome to Amrutam</p>
                            <p className='text-black text-4xl font-bold mt-2'>Join Amrutam - <span className='text-[rgb(58,100,59)]'>Grow Your Practice</span></p>
                            <p className='text-[18px] font-semibold text-gray-800 mt-4'>Connect with more patients, set your own schedule,</p>
                            <p className='text-[18px] font-semibold text-gray-800'>and grow your Ayurvedic practice effortlessly.</p>

                            <button className='w-[20vw] bg-[rgb(58,100,59)] p-3 mt-10 text-white rounded-[16px] text-[20px]'>Join Now</button>

                        </div>

                        <div className='w-[35vw] h-[60vh] mt-1 0 flex'>

                            <img src={Doc_Vector} />

                            <div className='w-[90px] h-[90px] bg-[rgb(255,230,165)] absolute -bottom-1.5 rounded-full text-center items-center flex justify-center z-10'>
                                <img src={Medicals} className='w-[85px] h-[85px]' />
                            </div>

                            <div className='w-[90px] h-[90px] bg-[#FFE6A5] absolute right-20 -bottom-3.5 rounded-full text-center items-center flex justify-center z-10'>
                                <img src={Calender} className='w-[85px] h-[85px]' />
                            </div>

                            <div className='w-[90px] h-[90px] bg-[#FFE6A5] absolute right-18 top-60 rounded-full text-center items-center flex justify-center z-10'>
                                <img src={Yoga} className='w-[85px] h-[85px]' />
                            </div>

                            <img
                                className='w-[245px] h-[367px] rotate-y-180 absolute bottom-0 right-90'
                                src={Doctor1} />

                            <img
                                className='w-[522px] h-[348px] absolute -right-15 bottom-0'
                                src={Doctor3} />

                            <img
                                className='w-[295px] h-[350px] absolute right-52 bottom-0'
                                src={Doctor2} />

                        </div>
                    </div>

                    <div className='flex ml-10 space-x-7'>
                        <div className='text-center'>
                            <p className='text-[20px] font-bold'>500+</p>
                            <p className='text-gray-600 font-semibold'>Average Active</p>
                            <p className='text-gray-600 font-semibold'>users</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-[20px] font-bold'>40+</p>
                            <p className='text-gray-600 font-semibold'>Average daily</p>
                            <p className='text-gray-600 font-semibold'>free calls</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full bg-[#FFF6DD] p-10'>
                <p className='text-center text-green-900 text-4xl font-bold'>Featured</p>
                <p className='text-gray-700 text-center text-[20px] mt-2'>Recognized and celebrated by leading publications – Amrutam in the spotlight!</p>

                <div className='flex space-x-7 p-7 bg-[#FFF6DD]'>
                    <img
                        className='w-[20vh] h-[12vh] mt-5'
                        src={Feature1} />
                    <img
                        className='w-[20vh] h-[12vh] mt-5'
                        src={Feature2} />
                    <img
                        className='w-[20vh] h-[12vh] mt-5'
                        src={Feature3} />
                    <img
                        className='w-[20vh] h-[12vh] mt-5'
                        src={Feature4} />
                    <img
                        className='w-[20vh] h-[15vh] mt-5'
                        src={Feature5} />
                    <img
                        className='w-[20vh] h-[12vh] mt-5'
                        src={Feature6} />
                    <img
                        className='w-[20vh] h-[12vh] mt-5'
                        src={Feature7} />
                    <img
                        className='w-[16vh] h-[12vh] mt-5'
                        src={Feature8} />
                    <img
                        className='w-[15vh] h-[15vh] mt-5'
                        src={Feature9} />

                </div>

            </div>

            <div className='w-full bg-[#FFF6DD]'>
                <p className='text-5xl font-bold text-green-900 text-center'>Why Doctors Choose Us?</p>
                <p className='text-gray-700 font-semibold text-center mt-5 text-[20px]'>Unlock the Benefits of Smarter Healthcare Management and Patient Care</p>

                <div className='w-full p-4 mt-10'>

                    <div className='w-full h-auto border-2 flex justify-evenly p-4'>

                        <div className='w-[40vw] h-[50vh] border-2 relative'>
                            <img className='ml-10 '
                                src={vector1} />

                            <div className='items-center bg-white w-[20vw] h-[12vh] rounded-xl absolute top-15 left-50'>
                                <div className='flex p-3 space-x-5 '>
                                    <img className='w-[50px] h-[50px]' src={Person1} />
                                    <div>
                                        <p className='font-bold text-[12px]'>Dr. Prerna Narang</p>
                                        <div className='flex space-x-2'>
                                            <i class="fa-solid fa-link"></i>
                                            <p className='text-gray-800 font-semibold text-[10px]'>Gynecology + 2 others</p>
                                        </div>
                                        <div className='flex space-x-2'>
                                            <i class="fa-solid fa-graduation-cap text-[10px]'"></i>
                                            <p className='text-gray-800 font-semibold text-[10px]'>7 years of Experience</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className='w-[60px] h-[60px] bg-[#DBDCC4] rounded-full flex justify-center items-center absolute top-8 left-5'>
                                <img className='w-[30px] h-[28px]'
                                    src={calloutline} />
                            </div>

                            <div className='bg-white w-[18vw] h-[25vh] rounded-3xl absolute top-40 -left-5 text-[10px] text-gray-500'>
                                <div className='items-center space-y-2'>
                                    <p className='font-bold text-[12px] text-black text-center mt-2'>Connecting...</p>
                                    <div className='justify-center flex'>
                                        <img className='w-[40px] h-[40px]' src={Person1} />
                                    </div>
                                    <div className='flex justify-center'>
                                        <div className='w-[14vw] h-[20vh]'>
                                            <p className='text-center'>You'll receive a call shortly from</p>
                                            <p className='text-center'>+917314855977. This call will be recorded for you to review later.</p>
                                        </div>
                                    </div>



                                </div>
                            </div>

                        </div>

                        <div className='w-[40vw] h-[50vh] border-2 mt-10'>
                            <p className='text-green-800 text-xl font-semibold'>Instant <span className='font-bold'>FREE</span> 5-Mins Call</p>

                            <p className='mt-2 w-[30vw]'>We understand the importance of building trust with your patients. That’s why Amrutam offers a <span className='font-bold'>free 5-minute call</span>, helping you connect instantly and foster lasting patient relationships with ease.</p>
                        </div>
                    </div>

                    <div className='w-full h-auto border-2 flex justify-evenly p-4'>

                        <div className='w-[40vw] h-[50vh] border-2 mt-10'>
                            <p className='text-green-800 text-xl font-bold mt-10'>Forum for Meaningful Connections</p>
                            <p className='mt-2 w-[30vw]'>We value your journey in Ayurveda .The Amrutam Forum helps you engage with patients, answer questions, while the "Thoughts" section allows you to share deeper Ayurvedic wisdom.</p>
                        </div>

                        <div className='w-[40vw] h-[50vh] border-2 relative'>
                            <img className='ml-10 -rotate-225'
                                src={vector1} />

                            <div className='items-center bg-white w-[25vw] h-auto rounded-xl absolute top-2 left-55 p-4'>
                                <div className='flex border-b-2 border-gray-600 justify-evenly p-2'>
                                    <p className='text-green-800 font-bold text-[12px]'>Questions</p>
                                    <p className='text-gray-600 font-bold text-[12px]'>Thoughts</p>
                                </div>
                                <div className='flex border-b-1 border-gray-600 justify-between p-2'>
                                    <div className='flex items-center space-x-2'>
                                        <img src={Person2} className='w-[40px] h-[40px]' />
                                        <p className='text-[8px] text-green-800 font-extrabold'>Priya Singh</p>
                                    </div>
                                    <button className='w-[8vw] h-[20px] bg-green-800 text-white text-[10px] rounded-[6px]'>Ask Qustions</button>
                                </div>
                                <div className='flex gap-2 mt-2'>
                                    <div className=''>
                                        <img src={Admin} className='w-[40px] h-[40px] rounded-full border-1 border-gray-700' />
                                    </div>
                                    <div>
                                        <p className='font-bold text-[12px]'>Anonymous</p>
                                        <p className='text-gray-500 font-bold text-[9px]'>5 days ago</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-[9px] font-bold mt-2'>Question: Can Ayurveda help with stress and mental health issues? </p>
                                    <p className='text-[8px] text-gray-800 mt-2'>Explores the potential benefits of traditional Ayurvedic practices in managing stress and improving
                                        mental well-being, examining holistic approaches like herbal remedies, meditation, and lifestyle
                                        adjustments.</p>
                                </div>

                            </div>

                            <div className='w-[60px] h-[60px] bg-[#DBDCC4] rounded-full flex justify-center items-center absolute -top-5 left-30'>
                                <img className='w-[30px] h-[28px]'
                                    src={Leaf} />
                            </div>

                            <div className='bg-white w-[18vw] h-auto rounded-3xl absolute top-18 -left-22 text-[10px] text-gray-500'>
                                <div className=''>
                                    <img src={Frame} className='w-[18vw] h-[15vh]' />
                                    <div className='flex justify-between p-2'>
                                        <p className='text-[12px]'>Questions</p>
                                        <p className='text-[12px] bg-black text-white p-1 rounded-[5px]'>Thoughts</p>
                                    </div>
                                    <div className='flex gap-2 mt-2 p-2'>
                                        <div className=''>
                                            <img src={Person3} className='w-[40px] h-[40px] rounded-full border-1 border-gray-700' />
                                        </div>
                                        <div>
                                            <p className='font-bold text-[12px] text-black'>Dr. Marium Roy </p>
                                            <p className='text-gray-500 font-bold text-[9px]'>5 days ago</p>
                                        </div>
                                    </div>
                                    <div className='p-2'>
                                        <p className='text-black font-semibold'>Thought : Can Ayurveda help with stress and mental health issues? </p>
                                        <p className='mt-2'>Ayurveda, one of the world's oldest holistic healing systems, originated in India over 3,000 years
                                                ago and is still widely practiced today. It is based on the belief that health and wellness depend 
                                                on a delicate balance between the mind, body, and spirit. Unlike conventional medicine, Ayurveda 
                                                emphasizes prevention and the personalized treatment of diseases through a combination of diet, 
                                                herbal remedies, exercise, and lifestyle adjustments. One fascinating aspect is its concept of 
                                                "doshas" – Vata, Pitta, and Kapha – which are believed to be the primary life forces or energies 
                                                that govern our physiological and psychological activities. Ayurvedic practitioners tailor treatments
                                                to balance these doshas in each individual, promoting harmony and health.</p>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-full h-auto border-2 flex justify-evenly p-4'>
                        <div className='w-[40vw] h-[50vh] border-2'>

                        </div>
                        <div className='w-[40vw] h-[50vh] border-2'>

                        </div>
                    </div>

                    <div className='w-full h-auto border-2 flex justify-evenly p-4'>
                        <div className='w-[40vw] h-[50vh] border-2'>

                        </div>
                        <div className='w-[40vw] h-[50vh] border-2'>

                        </div>
                    </div>

                    <div className='w-full h-auto border-2 flex justify-evenly p-4'>
                        <div className='w-[40vw] h-[50vh] border-2'>

                        </div>
                        <div className='w-[40vw] h-[50vh] border-2'>

                        </div>
                    </div>

                </div>

            </div>

            <div className='w-full bg-[#FFF6DD] p-8'>
                <p className='text-center text-4xl text-green-800 font-bold'>Join Our Circle of Care</p>
                <p className='text-gray-700 text-[18px] text-center mt-2'>Becoming a part of Amrutam is simple</p>

                <div className="w-full flex justify-evenly mt-10 ">
                    <div className='w-[45vw] h-[65vh] border-2 space-y-3 p-5'>
                        <div className='w-[40vw] h-[12vh] border-1 border-green-800 p-3'>
                            <p className='text-green-800 font-bold text-[18px]'>Step 1: Get your referral code</p>
                            <p className='text-green-800 text-[15px]'>Contact us to receive your unique referral code.</p>
                        </div>
                        <div className='w-[40vw] h-[12vh] border-1 border-green-800 p-3'>
                            <p className='text-green-800 font-bold text-[18px]'>Step 2: Register on Amrutam</p>
                            <p className='text-green-800 text-[15px]'>Sign up on the Amrutam Doctors app or website to join our specialist network.</p>
                        </div>
                        <div className='w-[40vw] h-[12vh] border-1 border-green-800 p-3'>
                            <p className='text-green-800 font-bold text-[18px]'>Step 3: Complete KYC</p>
                            <p className='text-green-800 text-[15px]'>Fill in your details and upload the required documents for verification.</p>
                        </div>
                        <div className='w-[40vw] h-[12vh] border-1 border-green-800 p-3'>
                            <p className='text-green-800 font-bold text-[18px]'>Step 4: Start consulting</p>
                            <p className='text-green-800 text-[15px] '>Once verified, begin offering consultations and helping patients.</p>
                        </div>
                    </div>
                    <div className='w-[45vw] h-[65vh] border-2'>

                    </div>
                </div>

            </div>



        </div>
    )
}

export default Home
