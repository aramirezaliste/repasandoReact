import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    //useParams Nos permite obtener parametros de la ruta
    const { id } = useParams()
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useNavigate()
    
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history("/")
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{Error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Writen by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;