import { useState , useEffect} from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs,setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null)


  useEffect(() =>{
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then( res =>{
        if(!res.ok){
          throw Error('could not fetch');
        }
        return res.json();
       })
       .then(data => {
         setBlogs(data);
         setIsPending(false)
         setError(null)
       })
       .catch((err) =>{
        setIsPending(false)
         setError(err.message)
       })
      }, 1000);
  },[]);
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