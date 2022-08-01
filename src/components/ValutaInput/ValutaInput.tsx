import { ChangeEvent, useRef } from 'react';
import { FC } from 'react';
import './ValutaInput.scss';

interface ValutaInputProps {
  amount: number;
  currency: string;
  currencies: string[];
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
  const optionsRef = useRef<HTMLHeadingElement>(null);

  const showOptions = () => {
    if (optionsRef.current) {
      optionsRef.current.classList.add('_active');
    }
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const value = +target.value;
    onAmountChange(value);
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target;
    const value = target.value;
    onCurrencyChange(value);
  };

  return (
    <div className="valuta">
      <div className="valuta__available shadow-hover">
        <div className="select" onClick={showOptions}>
          <span className="select__placeholder">{currency}</span>
          <div ref={optionsRef} className="">
            <div className="select__input">
              <input type="text" className="" />
            </div>
            <select onChange={onChangeSelect} value={currency}>
              {currencies.length === 0
                ? null
                : currencies.map((item: any) => (
                    <option onClick={() => console.log('')} key={item}>
                      {item}
                    </option>
                  ))}
            </select>
          </div>
        </div>
      </div>
      <div className="valuta__input">
        <input
          type="text"
          className="shadow-hover"
          value={amount}
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
};
export default ValutaInput;
