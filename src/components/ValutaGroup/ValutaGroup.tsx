import { FC, useEffect, useState } from 'react';
import ValutaInput from '../ValutaInput/ValutaInput';
import SwitchIcon from '../../assets/img/switch.svg';

import './ValutaGroup.scss';
import { useServiceConverter } from '../../services/services';

interface ratesType {
  currency: number;
}

const ValutaGroup: FC = () => {
  const [amount1, setAmount1] = useState<number>(1);
  const [amount2, setAmount2] = useState<number>(1);
  const [currency1, setCurrency1] = useState<string>('USD');
  const [currency2, setCurrency2] = useState<string>('USD');
  const [rates, setRates] = useState<ratesType>();

  const { onFormCurrencies } = useServiceConverter();

  const handleAmount1Change = (amount: number) => {
    if (rates) {
      setAmount2(+(amount * rates[currency2]) / rates[currency1]);
      setAmount1(amount);
    }
  };

  const handleAmount2Change = (amount: number) => {
    if (rates) {
      setAmount1(+(amount * rates[currency1]) / rates[currency2]);
      setAmount2(amount);
    }
  };

  const handleCurerncy1Change = (currency: string) => {
    if (rates) {
      setAmount2(+(amount1 * rates[currency2]) / rates[currency]);
      setCurrency1(currency);
    }
  };

  const handleCurerncy2Change = (currency: string) => {
    if (rates) {
      setAmount1(+(amount2 * rates[currency1]) / rates[currency]);
      setCurrency2(currency);
    }
  };

  const valutaLoaded = (values: any) => {
    setRates(values);
  };

  useEffect(() => {
    onFormCurrencies()
      .then(valutaLoaded)
      .catch(err => {
        console.error(err);
      });
  }, []);

  const currencies = rates ? Object.keys(rates) : [];
  return (
    <section className="valuteGroup">
      <div className="valuteGroup__item">
        <ValutaInput
          amount={amount1}
          currencies={currencies}
          onAmountChange={handleAmount1Change}
          currency={currency1}
          onCurrencyChange={handleCurerncy1Change}
        />
      </div>
      <button className="valuteGroup__btn">
        <div className="valuteGroup__image">
          <img src={SwitchIcon} alt="Switch" />
        </div>
      </button>
      <div className="valuteGroup__item">
        <ValutaInput
          amount={amount2}
          currencies={currencies}
          onAmountChange={handleAmount2Change}
          currency={currency2}
          onCurrencyChange={handleCurerncy2Change}
        />
      </div>
    </section>
  );
};
export default ValutaGroup;
