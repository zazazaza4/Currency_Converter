import ValutaInput from "../ValutaInput/ValutaInput";
import SwitchIcon from '../../assets/img/switch.svg';

import './ValutaGroup.scss'; 

const ValutaGroup = () => {
  return (
    <section className="valuteGroup">
      <div className="valuteGroup__item">
        <ValutaInput/>
      </div>
      <button className="valuteGroup__btn">
        <div className="valuteGroup__image">
          <img src={SwitchIcon} alt="Switch" />
        </div>
      </button>
      <div className="valuteGroup__item">
        <ValutaInput/>
      </div>
    </section>
  )
}
export default ValutaGroup