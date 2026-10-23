import Navbar from './Navbar';
import Home from './Home';
import { Routes, Route } from "react-router";
import Create from './Create';
import BlogDetails from './BlogDetails';

//Para usar react-router en el componente App se configuran las Routes
function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
