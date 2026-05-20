import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

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
                return <div key={news._id}>
                    <h1 className='border px-4 py-3 mb-4 rounded-2xl font-bold' >{news.title}</h1>
                </div>
            }) : <p className='text-center text-lg font-semibold'>No news found</p>
        }
      </div>
      <div className="col-span-3">
        <div>
          <h1 className="text-xl font-bold">Login with</h1>
          <button className="mt-7  w-full py-1.75 text-blue-500 border border-blue-500 rounded-lg ">
            <FaGoogle className="inline mr-2" />
           Login with Google</button>
          <button className="w-full py-1.75 border border-gray-500 rounded-lg mt-2">
            <FaGithub className="inline mr-2" />
            Login with Github</button>
        </div>
      </div>
   </div>
  );
}
