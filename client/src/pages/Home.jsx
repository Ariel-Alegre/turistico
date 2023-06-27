import Cards from "../components/Cards/Cards";
import Continent from "../components/Continent/Continent";
import CountriesAmerica from "../components/CountriesAmerica/CountriesAmerica";
import NavBar from "../components/NavBar/NavBar";


export default function Home() {
    return (
        <div >
            <header>
            <NavBar/>
            </header>
            <Continent/>
            <CountriesAmerica/>
            <Cards/>
        </div>
    )
}