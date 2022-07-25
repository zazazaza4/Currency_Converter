import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import { FC } from "react";

// import './Cookies.scss';

const Cookies:FC = () => {
  return (
    <div className="wrapper">
      <TopBar/>
        
      <main className="main container">

          <h1 className="main__title">Privacy</h1>

          <h2 className="main__desc">
            
          </h2>

      </main>

      <Footer/>
    </div>
  )
}

export default Cookies;
