import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div >
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/> 
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:w-112.5 ' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>BellaVivo was born out of a passion for innovation and a desire to change the fashing sence among the young generation. Our journey was started by selling the cloths in a store located in New Delhi but now reached out in all over the India.</p>
        <p>We have come with the high-quality selected fabric to design the cloths which suits every type of skin and enhance the overall look because that's matters a lot.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at BellaVivo is to empower customers with choice, convenience and selection among all cloths in our catalog.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Our each products ensure to meets our stringent quality standards.</p>
        </div>
        <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Our shops and showrooms are widely available in entire state in India also now available in online.</p>
        </div>
        <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team available 24/7 to help if you have any type of query.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
