import './TopBar.scss';
import logo from '../../assets/logo/valutaLogo.svg';
import { useEffect, useMemo, useState } from 'react';
import { useServiceConverter } from '../../services/services';
import { useNavigate } from 'react-router-dom';


const TopBar = () => {
  const [valuta, setValuta] = useState([]);
  const {getData} = useServiceConverter();
  let navigate = useNavigate();

  const valutaLoaded = (arrValutas) => {
    setValuta(valuta => [...arrValutas]);
  }

  useEffect( () => {
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    getData(url, 'USD', 'EUR')
      .then(valutaLoaded)
      .catch( e => console.error(e))
  }, []);

  const renderItems = (elements) => {
    return elements.map( element => {
      const { rate, cc } = element;
      return <p>{rate.toFixed(2)} {cc}</p>
    })
  }

  const valutaElms = useMemo( () => renderItems(valuta), [valuta])

  return (
    <header className="header">

      <div className="container">

          <div className="logo" onClick={() => navigate('/')}>

              <img src={logo} alt="logo"/>

          </div>

          <div className="header__values">
              {
                valutaElms
              }
          </div>

      </div>

  </header>
  )
}

export default TopBar;