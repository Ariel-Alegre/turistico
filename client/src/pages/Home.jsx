import Header from "../components/Header";
import Continent from "../components/Continent/Continent";
import FooterHome from "../components/FooterHome/FooterHome";
import Cards from "../components/Cards/Card";
import '../styles/style.scss';

function App() {
  return (
    <div className="page-bg">
    <Header />
      <Continent />
      <div className="card-bg">
        <Cards />
      </div>
      <div className="footer-bg">

      <FooterHome />
      </div>
    </div>
  );
}

export default App;
