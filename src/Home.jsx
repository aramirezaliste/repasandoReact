import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const{data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")

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