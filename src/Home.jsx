import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    {/*.json() pasa el json a javascrip object  */ }
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setBlogs(data)
            })
    }, [])

    return (
        <div className="home">
            {/*&& el comparador logico evalua a la izquierda primero
             y si es false no evalua el de la derecha y no lo renderiza 
             hasta que sea true */ }
            {blogs && <BlogList blogs={blogs} title="Todos los Blogs" />}
        </div>
    );
}

export default Home