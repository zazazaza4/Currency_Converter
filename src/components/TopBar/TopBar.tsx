import logo from '../../assets/logo/valutaLogo.svg';
import { FC, useEffect, useMemo, useState } from 'react';
import { useServiceConverter } from '../../services/services';
import { useNavigate } from 'react-router-dom';

import './TopBar.scss';

interface valutaData {
  cc: string;
  rate: number;
}

const TopBar: FC = () => {
  const [valuta, setValuta] = useState<valutaData[]>([]);
  const { onFormCurrencies } = useServiceConverter();
  let navigate = useNavigate();

  const valutaLoaded = (valutas: any) => {
    setValuta([
      {
        cc: 'USD',
        rate: valutas['USD'],
      },
      {
        cc: 'EUR',
        rate: valutas['EUR'],
      },
    ]);
  };

  useEffect(() => {
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    onFormCurrencies(url)
      .then(valutaLoaded)
      .catch(e => console.error(e));
    // eslint-disable-next-line
  }, []);

  const renderItems = (elements: valutaData[]) => {
    if (elements.length === 0) {
      return ['Loading...', 'Loading...'].map(item => <p>{item}</p>);
    }

    return elements.map((element, index) => {
      const { rate, cc } = element;
      return (
        <p key={cc + index}>
          {rate.toFixed(2)} {cc}
        </p>
      );
    });
  };

  const valutaElms = useMemo(() => renderItems(valuta), [valuta]);

  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} alt="logo" />
        </div>

        <div className="header__values">{valutaElms}</div>
      </div>
    </header>
  );
};

export default TopBar;
