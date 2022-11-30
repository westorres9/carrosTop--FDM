import './styles.css';
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import CarCard from '../../components/CarCard';

export default function Home() {
    return (
        <>
            <Header/>
            <main className="home-section">
                <SearchBar/>
                <div className="car-card-container">
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                </div>
            </main>
        </>
        
    )
}