import { useState } from "react";
import { map } from "./Map";


function Maps () {

  const [place, setPlace] = useState (0);
  const {title, id, city, description, age, image} = map[place];
  const [showMore, setShowMore] = useState (false);

  const previousPlace = () => {
    setPlace((place => {
      place --;
      if (place < 0) {
      return map.length-1;
      }
      return place;
    }))
  }

  const nextPlace = () => {
    setPlace((place =>{
      place ++;
      if (place > map.length -1) {
        place =0;
      }
      return place;
    }))
  }


return(<div>
  <div className="container">
  <h5> {title} </h5>
</div>

  <div className="container">
  <img src={image} width="300px" height="380px" alt="Place"/>
</div>

<div className="container">
  <h5> Rule {id} : {city} </h5>
</div>

<div className="container">
  <h5> { showMore ? description : description.substring(0,19) + "..." }
  <button onClick={() => setShowMore(!showMore)}> {showMore ? "Show Less" : "Show More"} </button>
</h5>
</div>

<div className="container">
  <h2> {age} </h2>
</div>

<div className="btn container">
<button onClick={previousPlace}>Previous</button>
<button onClick={nextPlace}>Next</button>
</div>

</div>)
 }

export default Maps;