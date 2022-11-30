import './styles.css';
import carImg from '../../assets/img/car.png';

export default function CarCard() {
    return (
        <div className="car-card">
            <img src={carImg} alt="Imagem do carro" />
            <h2>Audi Supra TT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, quaerat!</p>
            <button>Comprar</button>
        </div>
    );
}