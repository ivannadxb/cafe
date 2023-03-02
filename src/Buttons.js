function Buttons ({filteredCafe}) {
    return (<div className="cont">
        <button className="change" onClick={() =>filteredCafe("coffee")}> Black Coffee </button>
        <button className="change" onClick={() =>filteredCafe("milk")}> Coffee with Milk </button>
        <button className="change" onClick={() =>filteredCafe("croissant")}> Croissants </button>
        <button className="change" onClick={() =>filteredCafe("pancake")}> Pancakes </button>
        <button className="change" onClick={() =>filteredCafe("waffle")}> Waffles </button>
        </div>)
}

export default Buttons;