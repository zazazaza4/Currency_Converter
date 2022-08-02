import { ChangeEvent, useState } from 'react';
import { FC } from 'react';
import Select, { ActionMeta, SingleValue } from 'react-select';

import './ValutaInput.scss';

type currenciesType = {
  value: string;
  label: string;
};

interface ValutaInputProps {
  amount: number;
  currency: string;
  currencies: currenciesType[] | undefined;
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (amount: string) => void;
}

const ValutaInput: FC<ValutaInputProps> = ({
  amount,
  currency,
  currencies,
  onAmountChange,
  onCurrencyChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value = +target.value;
    onAmountChange(value);
  };

  const onChangeSelect = (
    newValue: SingleValue<currenciesType>,
    actionMeta: ActionMeta<currenciesType>
  ) => {
    if (newValue) onCurrencyChange(newValue.value);
  };

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  const valueCurrency = { value: currency, label: currency };
  return (
    <div className="valuta">
      <div className="valuta__available shadow-hover">
        <div className="select">
          <Select
            value={valueCurrency}
            aria-labelledby="aria-label"
            inputId="aria-example-input"
            name="aria-live-color"
            options={currencies}
            onChange={onChangeSelect}
            onMenuOpen={onMenuOpen}
            onMenuClose={onMenuClose}
            theme={theme => ({
              ...theme,
              borderRadius: 4,
              colors: {
                ...theme.colors,
                primary25: 'rgba(0, 171, 169, 0.6)',
                primary: 'rgb(0, 171, 169)',
              },
            })}
          />
        </div>
      </div>
      <div className="valuta__input">
        <input type="text" className="shadow-hover" value={amount} onChange={onChangeInput} />
      </div>
    </div>
  );
};
export default ValutaInput;
