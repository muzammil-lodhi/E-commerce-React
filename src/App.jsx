import Banner from "./component/Banner"
import Navbar from "./component/Navbar"
import{Routes,route,outlet,link} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"





function App(){
  return(
  <>
  <Banner/>
  <Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<div>hello</div>} />
</Routes>
  
  
  
  </>
  )
}

export default App