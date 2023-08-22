import lagos from '../../assets/icons-filter/lagos.png';
import montañas from '../../assets/icons-filter/montañas.png';
import areas_verdes from '../../assets/icons-filter/areas-verdes.png';
import parques_acuaticos from '../../assets/icons-filter/parques-acuaticos.jpg';
import playas from '../../assets/icons-filter/playas.png';
import Parques_arqueologicos from '../../assets/icons-filter/parques-arqueologicos.png';




import './FilterCard.scss';

export default function FilterCard() {
    return (
        <div className="filter-container">
        <button variant="contained">
          <div className="filter">

            <img src={lagos} alt="not found" />
           <p>

            Lagos
           </p>
          </div>
        </button>

        <button variant="contained" >
          <div className="filter">
            <img src={montañas} alt="not found" />
          <p>

            Montañas
          </p>
          </div>
        </button>
        <button variant="contained" >
          <div className="filter">
            <img src={areas_verdes} alt="not found" />
          <p>

            Areas verdes
          </p>

          </div>
        </button>
        <button variant="contained" >
          <div className="filter">
            <img src={parques_acuaticos} alt="not found" />
          <p>

           Parques acuaticos
          </p>

          </div>
        </button>
        <button variant="contained" >
          <div className="filter">

            <img src={playas} alt="not found" />
           <p>

            Playas
           </p>

          </div>
        </button>
        <button variant="contained" >
          <div className="filter">

            <img src={Parques_arqueologicos} alt="not found" />
           <p>

            Parques arqueologicos
           </p>

          </div>
        </button>
    </div>
    )
}