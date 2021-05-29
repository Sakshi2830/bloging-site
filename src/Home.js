import { useState , useEffect} from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  
//"},[])"this empty array dependency make sure that this hooks  only runs the function after the first initial render,there after if the state changes it dont run the function
  // const handleDelete = (id) => {
  //     const newBlogs = blogs.filter(blog => blog.id !== id);
  //     setBlogs(newBlogs);
  // }
    return (  
        <div className="home">
          { error && <div>{error}</div>}
          { isPending && <div>Loading.......</div>}
            {blogs && <BlogList  blogs={blogs} title="All Blog!"  />}
         </div>
    );
}
 
export default Home;