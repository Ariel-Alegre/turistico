import { useState } from "react";
import { list, list2 } from "../assets/cards-list";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Continent from "../components/Continent/Continent";
import FooterHome from "../components/FooterHome/FooterHome";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);
  return (
    <div >
      <Header />
   <Continent/>
   <div>

      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
   </div>
   <FooterHome/>
    </div>
  );
}

export default App;
