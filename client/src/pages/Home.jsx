import { useState } from "react";
import { list, list2 } from "../assets/cards-list";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Continent from "../components/Continent/Continent";
import Footer from "../components/Footer/Footer";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
   <Continent/>
   <div>

      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
   </div>
   <Footer/>
    </div>
  );
}

export default App;
