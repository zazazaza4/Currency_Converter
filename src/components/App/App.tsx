import { FC } from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../pages/About/About";
import Alternatives from "../../pages/Alternatives/Alternatives";
import Home from "../../pages/Home/Home"
import Privacy from "../../pages/Privacy/Privacy"

const App: FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/alternatives" element={<Alternatives />} />
        <Route path='*' element={
          <Navigate replace to='/' />
        } />
      </Routes>
  )
}
export default App