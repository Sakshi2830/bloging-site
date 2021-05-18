import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blog,setBlog] = useState([
      {title: 'MY NEW website', body: 'lorem epsum.......', author: 'mario'},
      {title: 'welome website', body: 'lorem epsum.......', author: 'marin'},
      {title: 'newone website', body: 'lorem epsum.......', author: 'martha'}
  ])
    return (  
        <div className="home">
            <BlogList  blogs={blog} title="All Blog!" />
         </div>
    );
}
 
export default Home