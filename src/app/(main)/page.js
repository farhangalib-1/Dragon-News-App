
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
            return <li className="text-xl font-semibold px-12.5 py-1.75 border text-center my-5 text-[#9F9F9F]" key={catagory.category_id}>{catagory.category_name}</li>
          })
        }
        </ul>
      </div>
      <div className="bg-blue-100 col-span-6">
        <h1>Dragon news</h1>
      </div>
      <div className="bg-purple-100 col-span-3">
        <h1>Social links</h1>
      </div>
   </div>
  );
}
