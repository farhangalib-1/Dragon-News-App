import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Newsdetails = async ({ params }) => {
  const { id } = await params;
  const getNewsdetails = async (id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const data = await res.json();
    return data.data[0];
   }
   const newsData = await getNewsdetails(id);
   console.log(newsData);
   
  return (
    <div className='grid w-11/12 mx-auto mt-5 gap-2.75 grid-cols-12  items-start'>
      <div className=' col-span-9'>
        <h1 className='text-xl font-bold mb-5'>Dragon News</h1>
        <div className='border border-[#E7E7E7] rounded-lg p-7.5'>
          <Image src = {newsData.image_url} alt={newsData.title} width={600} height={400} className='w-full mx-auto h-auto rounded-lg mb-5 object-cover'/>
            <p className='font-bold text-[25px] leading-11.25 mb-2'>{newsData.title}</p>
            <p className='text-[16px] leading-6.5 text-[#706F6F] mb-8'>
              {newsData.details}
            </p>
            <Link href={`/catagory/${newsData.category_id}`}>
              <button className="btn bg-[#D72050] text-white hover:bg-[#C11A45]">
               <FaArrowLeft /> All news in this category
              </button>
            </Link>
        </div>
        
      </div>
        
        <div className=" border col-span-3">
               <div>
                 <h1 className="text-xl font-bold">Login with</h1>
                 <button className="btn mt-7  w-full py-1.75 text-blue-500 border border-blue-500 rounded-lg ">
                   <FaGoogle className="inline mr-2" />
                  Login with Google</button>
                 <button className="btn w-full py-1.75 border border-gray-500 rounded-lg mt-2">
                   <FaGithub className="inline mr-2" />
                   Login with Github</button>
               </div>
             </div>
    </div>
  )
}

export default Newsdetails