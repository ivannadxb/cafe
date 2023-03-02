import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Cafe from "./Cafe";
import './App.css';

function Home () {
    const [cafe, setCafe] = useState(data);

    const chosenCafe = (searchTerm) => {
      const newCafe = data.filter(element => element.searchTerm === searchTerm);
      setCafe(newCafe);
    }
  
    return (
  <div> 
    <div className="cont">
      <h5 className='back'> Choose Your Favourites </h5>
    </div>
  <Buttons filteredCafe={chosenCafe}/>
  <Cafe itemsForSale={cafe}/>
  </div>
    )
}

export default Home;