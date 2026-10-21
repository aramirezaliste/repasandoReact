import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
        { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
        { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 }
    ]);

    const [name, setName] = useState("Ninja")

    {/*se define la funcion modificadora, donde esta el state */}
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    {/*se ejecuta en cada renderizacion, [dependencias] si esta vacio solo se ejecuta
         en la primera renderizacion*/}
    useEffect(() => {
        console.log("use efectt ran")
    }, [name])

    return (
        <div className="home">
            {/*la respuesta del map va en () por que no usa return ya que es un HTML */}
            <BlogList blogs={blogs} title="Todos los Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName("Andres")}>Change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home