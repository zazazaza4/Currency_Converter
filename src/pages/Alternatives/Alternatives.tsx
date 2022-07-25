import TopBar from "../../components/TopBar/TopBar";
import Footer from "../../components/Footer/Footer";
import { FC } from "react";

import './Alternatives.scss';

const Alternatives:FC  = () => {
  return (
    <div className="wrapper">
      <TopBar/>
        
      <main className="alternatives">

          <h1 className="alternatives__title">Alternatives</h1>

          <h2 className="alternatives__desc">
            <p>Is Valuta not what you were looking for? Here are some related websites to help you find what you need.</p>
            <p><a href="https://wise.com/" rel="noreferrer" target="_blank">TransferWise</a> - TransferWise is an online account that lets you send money, get paid, and spend money internationally.</p>
            <p><a href="https://finance.yahoo.com/?utm_source=valuta.exchange" rel="noreferrer" target="_blank">Yahoo Finance</a> - At Yahoo Finance, you get free stock quotes, up-to-date news, portfolio management resources, international market data, social interaction and mortgage rates that help you manage your financial life.</p>
            <p><a href="https://www.xe.com/?utm_source=valuta.exchange" rel="noreferrer" target="_blank">XE</a>  - Free live currency rates, tools, and analysis using the most accurate data.</p>
            <p><a href="https://www.oanda.com/bvi-en/?utm_source=valuta.exchange" rel="noreferrer" target="_blank">Oanda</a>  - A global company offering leading currency solutions for both retail and corporate clients.</p>
            <p><a href="https://www.coinbase.com/?utm_source=valuta.exchange" rel="noreferrer" target="_blank">Coinbase</a>  - Coinbase is a secure platform that makes it easy to buy, sell, and store cryptocurrency like Bitcoin, Ethereum, and more.</p>
            <p><a href="https://coinmarketcap.com/?utm_source=valuta.exchange" rel="noreferrer" target="_blank">Coinmarketcap</a>  - Top cryptocurrency prices and charts, listed by market capitalization. Access to current and historic data for Bitcoin and thousands of altcoins.</p>
          </h2>

      </main>

      <Footer/>
    </div>
  )
}

export default Alternatives;
