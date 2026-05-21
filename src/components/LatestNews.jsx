import React from 'react'
import Marquee from "react-fast-marquee";
const LatestNews = () => {
  const latestNews = [
  {
    id: 1,
    title: "AI Technology Changing Modern Education",
    category: "Technology",
    author: "John Smith",
    published_date: "2026-05-22",
    image_url: "https://example.com/images/ai-education.jpg",
    details:
      "Artificial intelligence is transforming classrooms by helping students learn faster and teachers manage lessons more efficiently.",
  },
  {
    id: 2,
    title: "Bangladesh Wins Thrilling Cricket Match",
    category: "Sports",
    author: "Rahim Ahmed",
    published_date: "2026-05-21",
    image_url: "https://example.com/images/bd-cricket.jpg",
    details:
      "Bangladesh secured a dramatic victory in the final over after an incredible batting performance.",
  },
  {
    id: 3,
    title: "New Smartphone Released With Powerful Camera",
    category: "Technology",
    author: "Emily Watson",
    published_date: "2026-05-20",
    image_url: "https://example.com/images/smartphone.jpg",
    details:
      "The latest flagship smartphone features an advanced AI camera system and long-lasting battery life.",
  },
  {
    id: 4,
    title: "Global Food Prices Continue to Rise",
    category: "Economy",
    author: "David Miller",
    published_date: "2026-05-19",
    image_url: "https://example.com/images/food-prices.jpg",
    details:
      "Experts say increasing transportation and production costs are affecting food prices worldwide.",
  },
  {
    id: 5,
    title: "Scientists Discover New Renewable Energy Method",
    category: "Science",
    author: "Sophia Lee",
    published_date: "2026-05-18",
    image_url: "https://example.com/images/renewable-energy.jpg",
    details:
      "Researchers have developed a cleaner and more efficient renewable energy technology for future use.",
  },
];
  return (
    <div className='flex justify-center w-11/12 mx-auto gap-4.75 font-bold bg-gray-100 p-4 mt-7.5'>
        <div>
        <button className='bg-[#D72050] px-6.25 py-2.25 text-white '>Latest</button>
        </div>
        <Marquee pauseOnHover={true}>
            {latestNews.map(news => (
                <p key={news.id} className="mx-4">
                    {news.title}
                </p>
            ))}
        </Marquee>
    </div>
  )
}

export default LatestNews