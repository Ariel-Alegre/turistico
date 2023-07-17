import { useState } from "react";
import { list, list2 } from "../assets/cards-list";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Continent from "../components/Continent/Continent";
import CountryAmerica from "../components/Country/CountryAmerica";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div className="App">
      <Header />
   <Continent/>
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

export default App;
