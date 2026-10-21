import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
        { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
        { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 }
    ]);

    {/*se define la funcion modificadora, donde esta el state */}
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)

    }

    return (
        <div className="home">
            {/*la respuesta del map va en () por que no usa return yas que es un HTML */}
            <BlogList blogs={blogs} title="Todos los Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author == "mario" )} title="Algunos los Blogs" handleDelete={handleDelete}/>

        </div>
    );
}

export default Home