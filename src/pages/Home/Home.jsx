import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import ValutaGroup from "../../components/ValutaGroup/ValutaGroup";

import './Home.scss';

const Home = () => {
  return (
    <div className="wrapper">
      <TopBar/>
        
      <main className="main container">

          <h1 className="main__title">Valuta Exchange</h1>

          <h2 className="main__desc">
              A simple and intuitive currency converter, perfect for travelers.
              Valuta EX provides accurate exchange rates for over 160 world currencies!
          </h2>

          <section className="inputs">

            <ValutaGroup/>

          </section>

      </main>

      <Footer/>
    </div>
  )
}

export default Home;
