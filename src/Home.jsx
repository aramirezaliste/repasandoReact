import { useState } from "react"

const Home = () => {
const [name, setName] = useState("Mario")
const [age, setAge] = useState(29)

const handleClick = () => {
    setName("Andres")
    setAge(32)
}

    return (
        <div className="home">
            <h2>{name} is {age} years old</h2>
            <p>Hello</p>
            <button onClick={handleClick}>Click me</button>

        </div>
    );
}
 
export default Home