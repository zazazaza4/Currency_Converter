import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import { FC } from "react";


import './About.scss';

const About: FC = () => {
  return (
    <div className="wrapper">
      <TopBar/>
        
      <main className="about container">

          <h1 className="about__title">About</h1>

          <h2 className="about__desc">
              <p>A simple and intuitive currency converter, ideal for travelers.</p>
              <p>Valuta provides accurate exchange of many world currencies!</p> 
              <p>For creating this app I used:</p>
              <ul className="about__list">
                <li>React</li>
                <li>React Router</li>
                <li>SCSS</li>
                <li>HTML</li>
                <li>Rest API</li>
                <li>TypeScript</li>
              </ul> 
          </h2>

      </main>

      <Footer/>
    </div>
  )
}

export default About;
