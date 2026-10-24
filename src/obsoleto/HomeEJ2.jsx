import { useState, useEffect } from "react"
import BlogList from "../BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    {/*json() transforma el json en una javascript object */ }
    {/*.ok es parte de la respuesta puede ser true o false */ }
    {/* La logica es crear un error si no hay unfetch correcto y
     que despues lo capture el catch */ }

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(res => {
                if(!res.ok){
                    throw Error('No se pudo obtener la informacion')
                }
                return res.json()
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(e => {
                //console.log(e.message)
                setIsPending(false)
                setError(e.message)
            })
    }, [])

    {/*&& esta condicional espera que los dos valores sean true
        si blogs no es true, no se renderiza BlogList */}
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Todos los Blogs" />}
        </div>
    );
}

export default Home