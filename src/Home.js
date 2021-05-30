import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const {data:blog, isPending, error} = useFetch('http://localhost:8000/blogs')
  
//"},[])"this empty array dependency make sure that this hooks  only runs the function after the first initial render,there after if the state changes it dont run the function
 
    return (  
        <div className="home">
          { error && <div>{error}</div>}
          { isPending && <div>Loading.......</div>}
            {blog && <BlogList  blogs={blog} title="All Blog!"  />}
         </div>
    );
}
 
export default Home;