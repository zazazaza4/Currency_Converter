import { FC, useEffect, useState } from 'react';
import './ValutaInput.scss';

type valute = {
  name: string;
}

const ValutaInput:FC = () => {
  const [valutasAvailable, setValutasAvailable] = useState<valute[]>([]);
  
  useEffect( () => {

  }, [])

  return (
    <div className="valuta">
        <div className="valuta__available shadow-hover">
          <div className="select">
            <span className='select__placeholder'>None</span>
            <div className="select__options">
              <ul className="">
              <li className="f">UKR</li>
              <li className="f">UK</li>
              <li className="f">POL</li>
              <li className="f">ada</li>
              <li className="f">DD</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="valuta__input">
            <input type="text" className='shadow-hover' />
        </div>
    </div>
  )
}
export default ValutaInput;