
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image';
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


export default async function Home() {
 const getcatagories = async () =>{
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
 }
const getNews = async () =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/01`);
  const data = await res.json();
  return data.data;
 }
 const catagories = await getcatagories();
  const news = await getNews();
 
  return (
  
   <div className="grid grid-cols-12 w-11/12 mx-auto gap-x-6">
    
      <div className="col-span-3">
        <h1 className="font-semibold text-[#403F3F] text-xl">All category</h1>
        <ul className="">
           {
          catagories.map(catagory => {
            return <li className={`${catagory.category_id === '01' ? 'bg-[#E7E7E7] text-[#403F3F] rounded-[5px]' : 'text-[#9F9F9F]'} className="px-12.5 py-1.75 text-xl font-semibold text-center my-5`} key={catagory.category_id}>
             <Link href={`/catagory/${catagory.category_id}`} className="px-12.5 py-1.75 block ">{catagory.category_name}</Link>
              </li>
          })
        }
        </ul>
      </div>
      <div className="col-span-6">
              <h1 className='font-bold text-xl mb-5'>Dragon News Home</h1>
              {
                 news.length>0 ? news.map(news => {
                      return <div key={news._id} className='rounded-[5px] border border-[#E7E7E7] mb-5 h-auto'>
                          <div className='rounded-t-[5px] flex items-center justify-between px-5 py-4 bg-[#F3F3F3]'>
                              <div className='flex items-center gap-2'>
                              <Image src={news.author.img} alt={news.title} width={60} height={60} className='rounded-full'/>
                              <div>
                              <h1 className='font-bold'>{news.author.name}</h1>
                              <h1 className='text-sm text-gray-500'>{new Date(news.author.published_date).toISOString().split('T')[0]}</h1>
                              </div>
                              </div>
                              <div>
                                  <CiBookmark className='inline mr-2' />
                                  <CiShare2 className='inline mr-2' />
                              </div>
                          </div>
                          <h1 className='px-4 py-3 mb-4 font-bold text-xl leading-8.75 ' >
                              {news.title}</h1>
                          <Image src={news.image_url} alt={news.title} width={800} height={400} className='w-11/12 mx-auto mb-8'/>
                          <p className=' px-6 mb-4 text-gray-500 line-clamp-2'>{news.details}</p>
                          <Link href={`/news/${news._id}`} className='ml-5 px-5 py-1.25 bg-[#D72050] text-white rounded-[5px] font-bold inline-block mb-5'>Read more</Link>
                          <hr className='w-11/12 mx-auto mb-5 text-[#E7E7E7]' />
                          <div className='flex items-center justify-between w-11/12 mx-auto mb-5'>
                              <p className='font-bold flex items-center'><FaStar className='text-yellow-500 text-xl mr-1' /> {news.rating.number}rating</p>
                          <p className='flex items-center'><FaEye className='text-blue-500 text-xl mr-1' /> {news.total_view} views</p>
                          
                          </div>
                      </div>
                  }) : <p className='text-center text-lg font-semibold'>No news found</p>
              }
            </div>
      <div className="col-span-3">
        <div>
          <h1 className="text-xl font-bold">Login with</h1>
          <button className="btn mt-7  w-full py-1.75 text-blue-500 border border-blue-500 rounded-lg " >
            <FaGoogle className="inline mr-2" />
           Login with Google</button>
          <button className="btn w-full py-1.75 border border-gray-500 rounded-lg mt-2">
            <FaGithub className="inline mr-2" />
            Login with Github</button>
        </div>
      </div>
   </div>
  );
}
