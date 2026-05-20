import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default async function Home() {
 const getcatagories = async () =>{
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
 }

 const catagories = await getcatagories();
 
 
  return (
  
   <div className="grid grid-cols-12 w-11/12 mx-auto gap-x-6">
    
      <div className="col-span-3">
        <h1 className="font-semibold text-[#403F3F] text-xl">All category</h1>
        <ul className="">
           {
          catagories.map(catagory => {
            return <li className={`  text-xl font-semibold  border text-center my-5 text-[#9F9F9F]`} key={catagory.category_id}>
             <Link href={`/category/${catagory.category_id}`} className="px-12.5 py-1.75 block ">{catagory.category_name}</Link>
              </li>
          })
        }
        </ul>
      </div>
      <div className="bg-blue-100 col-span-6">
        <h1>Dragon news</h1>
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
