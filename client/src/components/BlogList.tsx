// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import Image from "next/image";
// import { Badge } from "./ui/badge";
// import { Button } from "./ui/button";
// import Link from "next/link";
// import { blog_data } from "@/data/blog";
// import BlogItem from "./BlogItem";
// import axios from "axios";

// const CardList = () => {
//   const [blog, setBlog] = useState([null]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [categoryy, setCategory] = useState("All");

//   const fetchBlog = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.get("/api/v1/blog");
//       console.log(response.data);
//       setBlog(response.data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchBlog();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   // Filter posts by category if provided
//   // const filteredPosts = category
//   //   ? blogPosts.filter((post) => post.category === category)
//   //   : blogPosts;

//   return (
//     <div className="flex justify-center w-full items-center gap-4 flex-col">
//       <h3>Filter By Category</h3>

//       <div className="flex justify-center gap-2">
//         <Button onClick={()=>setCategory('All')} className={categoryy==="All"?'bg-white text-black py-1 px-4 rounded-sm':""} >All</Button>
//         <Button onClick={()=>setCategory('Technology')} className={categoryy==="Technology"?'bg-white text-black py-1 px-4 rounded-sm':""}>Technology</Button>
//         <Button onClick={()=>setCategory('Startup')} className={categoryy==="Startup"?'bg-white text-black py-1 px-4 rounded-sm':""}>Startup</Button>
//         <Button onClick={()=>setCategory('Lifestyle')} className={categoryy==="Lifestyle"?'bg-white text-black py-1 px-4 rounded-sm':""}>Lifestyle</Button>
//       </div>
//       <div className="container mx-auto py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {blog.response.filter((item)=> categoryy==="All"?true:item.category===categoryy).map((item, index) => {
//               return (
//                 <BlogItem
//                   key={index}
//                   id={item._id}
//                   title={item.title}
//                   description={item.description}
//                   image={item.image}
//                   category={item.category}
//                   author={item.author}
//                   date={item.date}
//                 />
//               );
//             })}
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardList;

//aopfasjfoiafafasjf

'use client'
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { blog_data } from "@/data/blog";
import BlogItem from "./BlogItem";
import axios from "axios";

export default function CardList() {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categoryy, setCategory] = useState("All");

  // const dispatch = useDispatch();
  // const user = useSelector(selectUser);

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/v1/blog");
      console.log(response.data);
      setBlogs(response.data.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading blogs...</div>;
  }

  if (error) {
    return <div className="flex justify-center p-8">Error loading blogs. Please try again later.</div>;
  }

  return (
    <div className="flex justify-center w-full items-center gap-4 flex-col">
      <h3>Filter By Category</h3>

      <div className="flex flex-wrap justify-center gap-2">
        <Button onClick={()=>setCategory('All')} className={`shadow-[#FFD54F]  dark:text-black dark:hover:bg-black dark:hover:text-white ${categoryy==="All"?'bg-black text-white dark:text-white dark:hover:bg-black py-1 px-4 rounded-sm':""}`}>All</Button>
         <Button onClick={()=>setCategory('Technology')} className={`bg-white shadow-[#FFD54F] text-black dark:text-black dark:hover:bg-black dark:hover:text-white  hover:text-white ${categoryy==="Technology"?'bg-black dark:text-white dark:hover:bg-black text-white py-1 px-4 rounded-sm':""}`}>Technology</Button>
         <Button onClick={()=>setCategory('Startup')} className={`bg-white shadow-[#FFD54F] text-black hover:text-white  ${categoryy==="Startup"?'bg-black dark:text-white dark:hover:bg-black text-white py-1 px-4 rounded-sm':""}`}>Startup</Button>
         <Button onClick={()=>setCategory('Lifestyle')} className={`bg-white shadow-[#FFD54F] text-black dark:text-black dark:hover:bg-black dark:hover:text-white hover:text-white  ${categoryy==="Lifestyle"?'bg-black dark:text-white dark:hover:bg-black text-white py-1 px-4 rounded-sm':""}`}>Lifestyle</Button>
         <Button onClick={()=>setCategory('Travel')} className={`bg-white shadow-[#FFD54F] text-black dark:text-black dark:hover:bg-black dark:hover:text-white hover:text-white  ${categoryy==="Travel"?'bg-black dark:text-white dark:hover:bg-black text-white py-1 px-4 rounded-sm':""}`}>Travel</Button>
         <Button onClick={()=>setCategory('Food')} className={`bg-white shadow-[#FFD54F] text-black dark:text-black dark:hover:bg-black dark:hover:text-white hover:text-white  ${categoryy==="Food"?'bg-black dark:text-white dark:hover:bg-black text-white py-1 px-4 rounded-sm':""}`}>Food</Button>
         <Button onClick={()=>setCategory('Health')} className={`bg-white shadow-[#FFD54F] text-black dark:text-black dark:hover:bg-black dark:hover:text-white hover:text-white  ${categoryy==="Health"?'bg-black dark:text-white dark:hover:bg-black text-white py-1 px-4 rounded-sm':""}`}>Health</Button>
         <Button onClick={()=>setCategory('Business')} className={`bg-white shadow-[#FFD54F] text-black dark:text-black dark:hover:bg-black dark:hover:text-white hover:text-white  ${categoryy==="Business"?'bg-black dark:text-white dark:hover:bg-black text-white py-1 px-4 rounded-sm':""}`}>Business</Button>
       </div>
    <div className="container mx-auto py-8">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {blogs && blogs.length > 0 && blogs.filter((item)=> categoryy==="All"?true:item.category===categoryy).map((item, index) => {
              return (
                <BlogItem
                  key={index}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  category={item.category}
                  author={item.author}
                  date={item.date}
                />
              );
            })}
          
        </div>
      </div>
    </div>
  );
};
