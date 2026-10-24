import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    //useParams Nos permite obtener parametros de la ruta
    const { id } = useParams()
    const {data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`)

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{Error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Writen by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;