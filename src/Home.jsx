import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
   
    {/*json() transforma el json en una javascript object */}
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
        .then((res) => {
            return res.json()
        })
        .then(data => setBlogs(data))
    }, [])

    {/*&& esta condicional espera que los dos valores sean true
        si blogs no es true, no se renderiza BlogList */}
    return (
        <div className="home">
           {blogs && <BlogList blogs={blogs} title="Todos los Blogs" />}
        </div>
    );
}

export default Home