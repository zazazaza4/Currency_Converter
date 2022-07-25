import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";

import './Alternatives.scss';

const Alternatives = () => {
  return (
    <div className="wrapper">
      <TopBar/>
        
      <main className="main container">

          <h1 className="alternatives__title">Alternatives</h1>

          <h2 className="alternatives__desc">
            <p>Is Valuta not what you were looking for? Here are some related websites to help you find what you need.</p>
            <p>TransferWise - TransferWise is an online account that lets you send money, get paid, and spend money internationally.</p>
            <p>Yahoo Finance - At Yahoo Finance, you get free stock quotes, up-to-date news, portfolio management resources, international market data, social interaction and mortgage rates that help you manage your financial life.</p>
            <p>XE - Free live currency rates, tools, and analysis using the most accurate data.</p>
            <p>Oanda - A global company offering leading currency solutions for both retail and corporate clients.</p>
            <p>Coinbase - Coinbase is a secure platform that makes it easy to buy, sell, and store cryptocurrency like Bitcoin, Ethereum, and more.</p>
            <p>Coinmarketcap - Top cryptocurrency prices and charts, listed by market capitalization. Access to current and historic data for Bitcoin and thousands of altcoins.</p>
          </h2>

      </main>

      <Footer/>
    </div>
  )
}

export default Alternatives;
